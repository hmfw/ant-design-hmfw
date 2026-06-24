import { defineComponent, ref, computed, onMounted, onBeforeUnmount, Transition, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CloseOutlined, PlusOutlined } from '@hmfw/icons'
import { Trigger } from '../_internal/trigger'
import { Tooltip } from '../tooltip'
import type { TooltipProps } from '../tooltip/types'
import { Badge } from '../badge'
import type { IconComponent } from '@hmfw/icons'
import type {
  FloatButtonType,
  FloatButtonShape,
  FloatButtonHTMLType,
  FloatButtonTrigger,
  FloatButtonGroupPlacement,
  FloatButtonBadgeProps,
  FloatButtonClassNames,
  FloatButtonStyles,
} from './types'
import { FileTextOutlined, VerticalAlignTopOutlined } from './icons'

type IconLike = IconComponent | string

/** Render an icon prop that may be an icon component or a raw string/glyph. */
function renderIcon(icon: IconLike | undefined, fallbackSlot?: () => VNode[] | undefined) {
  const slotNode = fallbackSlot?.()
  if (slotNode && slotNode.length) return slotNode
  if (!icon) return undefined
  if (typeof icon === 'string') return icon
  const IconComp = icon as IconComponent
  return <IconComp class="hmfw-icon" />
}

/** Normalize tooltip prop: string → { title: string }, object → pass through. */
function normalizeTooltip(tooltip: string | TooltipProps | undefined): TooltipProps | undefined {
  if (!tooltip) return undefined
  if (typeof tooltip === 'string') return { title: tooltip }
  return tooltip
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
    /** @deprecated Use `content` instead. */
    description: String,
    /** Text and other content (only shown for square shape). */
    content: String,
    /** Tooltip: string or full TooltipProps object. */
    tooltip: [String, Object] as PropType<string | TooltipProps>,
    badge: Object as PropType<FloatButtonBadgeProps>,
    href: String,
    target: String,
    htmlType: { type: String as PropType<FloatButtonHTMLType>, default: 'button' },
    disabled: Boolean,
    classNames: Object as PropType<FloatButtonClassNames>,
    styles: Object as PropType<FloatButtonStyles>,
  },
  emits: ['click'],
  setup(props, { slots, emit, attrs }) {
    const prefixCls = usePrefixCls('float-btn')

    const handleClick = (e: MouseEvent) => {
      if (!props.disabled) emit('click', e)
    }

    return () => {
      // Merge content and description (content takes precedence)
      const mergedContent = props.content ?? props.description
      const showContent = mergedContent || slots.description || slots.content

      // Default icon: FileTextOutlined when no content/icon provided
      const mergedIcon = props.icon ?? (showContent ? undefined : FileTextOutlined)

      const body = (
        <div class={cls(`${prefixCls}-body`, props.classNames?.body)} style={props.styles?.body}>
          {mergedIcon !== undefined && (
            <div class={cls(`${prefixCls}-icon`, props.classNames?.icon)} style={props.styles?.icon}>
              {renderIcon(mergedIcon, slots.icon)}
            </div>
          )}
          {showContent && (
            <div class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
              {slots.content?.() ?? slots.description?.() ?? mergedContent}
            </div>
          )}
        </div>
      )

      // Badge wraps the body (rendered inside the fixed root element)
      // Filter out unsupported props: status, text, title, children
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
      const tooltipProps = normalizeTooltip(props.tooltip)
      const content = tooltipProps ? (
        <Tooltip {...tooltipProps} placement={tooltipProps.placement ?? 'left'}>
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
        {
          [`${prefixCls}-disabled`]: props.disabled,
        },
        props.classNames?.root,
      )

      const rootStyle = [attrs.style, props.styles?.root]

      if (props.href) {
        return (
          <a
            {...attrs}
            class={rootCls}
            style={rootStyle}
            href={props.href}
            target={props.target}
            onClick={handleClick}
            aria-disabled={props.disabled}
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
          style={rootStyle}
          onClick={handleClick}
          disabled={props.disabled}
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
    tooltip: [String, Object] as PropType<string | TooltipProps>,
    badge: Object as PropType<FloatButtonBadgeProps>,
    description: String,
    onOpenChange: Function as PropType<(open: boolean) => void>,
  },
  emits: ['update:open', 'openChange', 'click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('float-btn')
    const groupRef = ref<HTMLDivElement | null>(null)
    const innerOpen = ref(props.defaultOpen)

    const isControlled = computed(() => props.open !== undefined)
    const isOpen = computed(() => (isControlled.value ? props.open! : innerOpen.value))

    const handleOpenChange = (next: boolean) => {
      if (!isControlled.value) innerOpen.value = next
      emit('update:open', next)
      emit('openChange', next)
      props.onOpenChange?.(next)
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
          <div class={groupCls} ref={groupRef}>
            {slots.default?.()}
          </div>
        )
      }

      const triggerIcon = isOpen.value ? (props.closeIcon ?? CloseOutlined) : (props.icon ?? PlusOutlined)

      return (
        <Trigger
          open={isControlled.value ? props.open : undefined}
          defaultOpen={props.defaultOpen}
          trigger={props.trigger as any}
          closeOnOutsideClick
          closeOnEscape
          mouseEnterDelay={0}
          mouseLeaveDelay={0}
          triggerDisplay="block"
          popupStyle={{ display: 'none' }}
          onUpdate:open={handleOpenChange}
          onOpenChange={handleOpenChange}
        >
          {{
            default: () => (
              <div class={groupCls} ref={groupRef}>
                <Transition name={`${prefixCls}-group-wrap`}>
                  {isOpen.value && (
                    <div class={`${prefixCls}-group-wrap`} onClick={(e: MouseEvent) => e.stopPropagation()}>
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
                  content={props.description}
                  onClick={(e: MouseEvent) => emit('click', e)}
                />
              </div>
            ),
          }}
        </Trigger>
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
    tooltip: [String, Object] as PropType<string | TooltipProps>,
    content: String,
    /** @deprecated Use `content` instead. */
    description: String,
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('float-btn')
    const visible = ref(false)
    // Captured at mount so cleanup removes the listener from the exact same
    // node — re-resolving props.target() on unmount can yield null (e.g. the
    // container ref is cleared during route navigation) and crash.
    let listenTarget: HTMLElement | Window | Document | null = null

    const getTarget = (): HTMLElement | Window | Document => (props.target ? props.target() : window)

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
      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)

      const frame = () => {
        const progress = Math.min((Date.now() - startTime) / props.duration, 1)
        const scrollTop = startScrollTop * (1 - easeInOutCubic(progress))
        if (target === window || target === document) {
          window.scrollTo(0, scrollTop)
        } else {
          ;(target as HTMLElement).scrollTop = scrollTop
        }
        if (progress < 1) requestAnimationFrame(frame)
      }

      requestAnimationFrame(frame)
      emit('click', e)
    }

    onMounted(() => {
      const target = getTarget()
      listenTarget = target === document ? window : target
      listenTarget.addEventListener('scroll', handleScroll)
      handleScroll()
    })

    onBeforeUnmount(() => {
      listenTarget?.removeEventListener('scroll', handleScroll)
      listenTarget = null
    })

    return () => {
      const mergedContent = props.content ?? props.description
      return (
        <Transition name={`${prefixCls}-fade`}>
          {visible.value && (
            <FloatButton
              type={props.type}
              shape={props.shape}
              icon={props.icon ?? VerticalAlignTopOutlined}
              tooltip={props.tooltip}
              content={mergedContent}
              class={`${prefixCls}-back-top`}
              onClick={scrollToTop}
            >
              {slots.icon ? { icon: slots.icon } : undefined}
            </FloatButton>
          )}
        </Transition>
      )
    }
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
