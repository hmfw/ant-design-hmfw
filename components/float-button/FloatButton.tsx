import {
  defineComponent,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  Transition,
  type PropType,
  type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { UpOutlined, CloseOutlined, PlusOutlined } from '../icon/icons'
import { Tooltip } from '../tooltip'
import { Badge } from '../badge'
import type { IconComponent } from '../icon/types'
import type {
  FloatButtonType,
  FloatButtonShape,
  FloatButtonHTMLType,
  FloatButtonTrigger,
  FloatButtonGroupPlacement,
  FloatButtonBadgeProps,
} from './types'

type IconLike = IconComponent | string

/** Render an icon prop that may be an icon component or a raw string/glyph. */
function renderIcon(icon: IconLike | undefined, fallbackSlot?: () => VNode[] | undefined) {
  const slotNode = fallbackSlot?.()
  if (slotNode && slotNode.length) return slotNode
  if (!icon) return undefined
  if (typeof icon === 'string') return icon
  return <Icon component={icon} />
}

// ---------------------------------------------------------------------------
// FloatButton
// ---------------------------------------------------------------------------
export const FloatButton = defineComponent({
  name: 'FloatButton',
  inheritAttrs: false,
  props: {
    type: { type: String as PropType<FloatButtonType>, default: 'default' },
    shape: { type: String as PropType<FloatButtonShape>, default: 'circle' },
    icon: [Function, String] as PropType<IconLike>,
    description: String,
    tooltip: String,
    badge: Object as PropType<FloatButtonBadgeProps>,
    href: String,
    target: String,
    htmlType: { type: String as PropType<FloatButtonHTMLType>, default: 'button' },
  },
  emits: ['click'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('float-btn')

    const handleClick = (e: MouseEvent) => emit('click', e)

    return () => {
      const showDescription = props.description || slots.description

      const body = (
        <div class={`${prefixCls}-body`}>
          <div class={`${prefixCls}-icon`}>
            {renderIcon(props.icon, slots.icon) ?? <Icon component={UpOutlined} />}
          </div>
          {showDescription && (
            <div class={`${prefixCls}-description`}>
              {slots.description?.() ?? props.description}
            </div>
          )}
        </div>
      )

      // Badge wraps the body (rendered inside the fixed root element)
      const badged =
        props.badge && (props.badge.dot || props.badge.count !== undefined) ? (
          <Badge
            count={props.badge.count}
            dot={props.badge.dot}
            overflowCount={props.badge.overflowCount}
            color={props.badge.color}
            offset={props.badge.offset}
          >
            {body}
          </Badge>
        ) : (
          body
        )

      // Tooltip wraps the body content (still inside the fixed root element)
      const content =
        props.tooltip || slots.tooltip ? (
          <Tooltip title={props.tooltip} placement="left">
            {{
              default: () => badged,
              ...(slots.tooltip ? { title: slots.tooltip } : {}),
            }}
          </Tooltip>
        ) : (
          badged
        )

      const rootCls = cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        `${prefixCls}-${props.shape}`,
      )

      if (props.href) {
        return (
          <a
            {...attrs}
            class={rootCls}
            href={props.href}
            target={props.target}
            onClick={handleClick}
          >
            {content}
          </a>
        )
      }

      return (
        <button
          {...attrs}
          type={props.htmlType}
          class={rootCls}
          onClick={handleClick}
        >
          {content}
        </button>
      )
    }
  },
})

// ---------------------------------------------------------------------------
// FloatButton.Group
// ---------------------------------------------------------------------------
export const FloatButtonGroup = defineComponent({
  name: 'FloatButtonGroup',
  props: {
    shape: { type: String as PropType<FloatButtonShape>, default: 'circle' },
    type: { type: String as PropType<FloatButtonType>, default: 'default' },
    trigger: String as PropType<FloatButtonTrigger>,
    placement: { type: String as PropType<FloatButtonGroupPlacement>, default: 'top' },
    open: { type: Boolean, default: undefined },
    defaultOpen: { type: Boolean, default: false },
    closeIcon: [Function, String] as PropType<IconLike>,
    icon: [Function, String] as PropType<IconLike>,
    tooltip: String,
    badge: Object as PropType<FloatButtonBadgeProps>,
    description: String,
    onOpenChange: Function as PropType<(open: boolean) => void>,
  },
  emits: ['update:open', 'openChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('float-btn')
    const innerOpen = ref(props.defaultOpen)

    const isControlled = computed(() => props.open !== undefined)
    const isOpen = computed(() => (isControlled.value ? props.open! : innerOpen.value))

    const setOpen = (next: boolean) => {
      if (next === isOpen.value) return
      if (!isControlled.value) innerOpen.value = next
      emit('update:open', next)
      emit('openChange', next)
      props.onOpenChange?.(next)
    }

    const handleTriggerClick = () => setOpen(!isOpen.value)
    const handleMouseEnter = () => {
      if (props.trigger === 'hover') setOpen(true)
    }
    const handleMouseLeave = () => {
      if (props.trigger === 'hover') setOpen(false)
    }

    return () => {
      const hasTrigger = !!props.trigger

      const groupCls = cls(
        `${prefixCls}-group`,
        `${prefixCls}-group-${props.shape}`,
        `${prefixCls}-group-${props.placement}`,
        {
          [`${prefixCls}-group-trigger`]: hasTrigger,
          [`${prefixCls}-group-open`]: isOpen.value,
        },
      )

      // No trigger: render all children inline, always visible.
      if (!hasTrigger) {
        return (
          <div class={groupCls}>
            {slots.default?.()}
          </div>
        )
      }

      const triggerIcon = isOpen.value
        ? (props.closeIcon ?? CloseOutlined)
        : (props.icon ?? PlusOutlined)

      return (
        <div
          class={groupCls}
          onMouseenter={handleMouseEnter}
          onMouseleave={handleMouseLeave}
        >
          <Transition name={`${prefixCls}-group-wrap`}>
            {isOpen.value && (
              <div class={`${prefixCls}-group-wrap`}>
                {slots.default?.()}
              </div>
            )}
          </Transition>
          <FloatButton
            type={props.type}
            shape={props.shape}
            icon={triggerIcon}
            tooltip={props.tooltip}
            badge={props.badge}
            description={props.description}
            onClick={handleTriggerClick}
          />
        </div>
      )
    }
  },
})

// ---------------------------------------------------------------------------
// FloatButton.BackTop
// ---------------------------------------------------------------------------
export const FloatButtonBackTop = defineComponent({
  name: 'FloatButtonBackTop',
  props: {
    visibilityHeight: { type: Number, default: 400 },
    target: Function as PropType<() => HTMLElement | Window | Document>,
    duration: { type: Number, default: 450 },
    icon: [Function, String] as PropType<IconLike>,
    type: { type: String as PropType<FloatButtonType>, default: 'default' },
    shape: { type: String as PropType<FloatButtonShape>, default: 'circle' },
    tooltip: String,
    description: String,
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('float-btn')
    const visible = ref(false)

    const getTarget = (): HTMLElement | Window | Document =>
      props.target ? props.target() : window

    const getScrollTop = (el: HTMLElement | Window | Document) => {
      if (el === window || el === document) {
        return document.documentElement.scrollTop || document.body.scrollTop
      }
      return (el as HTMLElement).scrollTop
    }

    const handleScroll = () => {
      visible.value = getScrollTop(getTarget()) >= props.visibilityHeight
    }

    const scrollToTop = (e: MouseEvent) => {
      const target = getTarget()
      const startTime = Date.now()
      const startScrollTop = getScrollTop(target)
      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

      const frame = () => {
        const progress = Math.min((Date.now() - startTime) / props.duration, 1)
        const scrollTop = startScrollTop * (1 - easeInOutCubic(progress))
        if (target === window || target === document) {
          window.scrollTo(0, scrollTop)
        } else {
          (target as HTMLElement).scrollTop = scrollTop
        }
        if (progress < 1) requestAnimationFrame(frame)
      }

      requestAnimationFrame(frame)
      emit('click', e)
    }

    onMounted(() => {
      const target = getTarget()
      const listenTarget = target === document ? window : target
      ;(listenTarget as HTMLElement | Window).addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onBeforeUnmount(() => {
      const target = getTarget()
      const listenTarget = target === document ? window : target
      ;(listenTarget as HTMLElement | Window).removeEventListener('scroll', handleScroll)
    })

    return () => (
      <Transition name={`${prefixCls}-fade`}>
        {visible.value && (
          <FloatButton
            type={props.type}
            shape={props.shape}
            icon={props.icon ?? UpOutlined}
            tooltip={props.tooltip}
            description={props.description}
            class={`${prefixCls}-back-top`}
            onClick={scrollToTop}
          >
            {slots.icon ? { icon: slots.icon } : undefined}
          </FloatButton>
        )}
      </Transition>
    )
  },
})

// ---------------------------------------------------------------------------
// Compound API: FloatButton.Group / FloatButton.BackTop (Ant Design v6)
// ---------------------------------------------------------------------------
type FloatButtonCompound = typeof FloatButton & {
  Group: typeof FloatButtonGroup
  BackTop: typeof FloatButtonBackTop
}

;(FloatButton as FloatButtonCompound).Group = FloatButtonGroup
;(FloatButton as FloatButtonCompound).BackTop = FloatButtonBackTop

export default FloatButton as FloatButtonCompound
