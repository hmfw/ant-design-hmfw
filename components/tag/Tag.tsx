import { defineComponent, computed, ref, isVNode, type PropType, type VNode } from 'vue'
import { CloseOutlined } from '@hmfw/icons'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import type { TagColor, TagVariant, TagCloseIcon, TagClassNames, TagStyles, TagProps, CheckableTagProps } from './types'

const PRESET_COLORS = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
]

const STATUS_COLORS = ['success', 'processing', 'error', 'warning', 'default']

const isValidHex = (c: string): boolean => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(c)

/** 将 3 位缩写 hex 展开为 6 位（#f50 → #ff5500）；6 位原样返回 */
const normalizeHex = (hex: string): string => {
  if (hex.length === 4) {
    return `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  }
  return hex
}

/** 将 hex 颜色提亮到接近白色的浅底（用于 filled 变体的自定义色背景） */
const toLightBg = (hex: string): string => {
  const num = parseInt(normalizeHex(hex).slice(1), 16)
  const mix = (channel: number) => Math.min(255, channel + Math.round((255 - channel) * 0.9))
  const r = mix((num >> 16) & 0xff)
  const g = mix((num >> 8) & 0xff)
  const b = mix(num & 0xff)
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}

const tagProps = {
  color: { type: String as PropType<TagColor>, default: undefined },
  variant: { type: String as PropType<TagVariant>, default: undefined },
  closable: { type: Boolean, default: false },
  closeIcon: {
    type: [Object, Boolean, Function] as PropType<TagCloseIcon>,
    default: undefined,
  },
  bordered: { type: Boolean, default: true },
  icon: { type: null, default: undefined },
  href: { type: String, default: undefined },
  target: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  classNames: { type: Object as PropType<TagClassNames>, default: undefined },
  styles: { type: Object as PropType<TagStyles>, default: undefined },
} satisfies Record<keyof TagProps, any>

export const Tag = defineComponent({
  name: 'Tag',
  props: tagProps,
  emits: ['close'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tag')
    const locale = useLocale()
    const visible = ref(true)

    const isPreset = computed(() => (props.color ? PRESET_COLORS.includes(props.color) : false))
    const isStatus = computed(() => (props.color ? STATUS_COLORS.includes(props.color) : false))
    const isInternalColor = computed(() => isPreset.value || isStatus.value)

    // 变体推导：显式 variant 优先，否则 bordered=false → filled，默认 outlined
    const mergedVariant = computed<TagVariant>(() => {
      if (props.variant) return props.variant
      if (props.bordered === false) return 'filled'
      return 'outlined'
    })

    const classes = computed(() =>
      cls(
        prefixCls,
        `${prefixCls}-${mergedVariant.value}`,
        {
          [`${prefixCls}-${props.color}`]: isInternalColor.value || undefined,
          [`${prefixCls}-has-color`]: (props.color && !isInternalColor.value) || undefined,
          [`${prefixCls}-borderless`]: props.bordered === false || undefined,
          [`${prefixCls}-hidden`]: !visible.value || undefined,
          [`${prefixCls}-disabled`]: props.disabled || undefined,
        },
        props.classNames?.root,
      ),
    )

    // 自定义颜色（非预设/状态色）的内联样式，与 AntD v6 变体行为对齐
    const customColorStyle = computed<Record<string, string>>(() => {
      const color = props.color
      if (!color || isInternalColor.value || props.disabled) return {}
      const variant = mergedVariant.value
      if (variant === 'solid') {
        return { backgroundColor: color, color: '#fff' }
      }
      // filled / outlined：浅底 + 彩字
      const style: Record<string, string> = {
        color,
        backgroundColor: isValidHex(color) ? toLightBg(color) : color,
      }
      if (variant === 'outlined') style.borderColor = color
      return style
    })

    const tagStyle = computed(() => ({
      ...customColorStyle.value,
      ...props.styles?.root,
    }))

    const handleClose = (e: MouseEvent) => {
      if (props.disabled) return
      e.stopPropagation()
      emit('close', e)
      // 与 AntD v6 一致：若未阻止默认行为，则隐藏标签
      if (e.defaultPrevented) return
      visible.value = false
    }

    const handleCloseKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        ;(e.currentTarget as HTMLElement).click()
      }
    }

    /** 渲染关闭图标内容 */
    const renderCloseIcon = () => {
      // closeIcon slot 优先
      const closeIconSlot = slots.closeIcon?.()
      if (closeIconSlot) return closeIconSlot

      const { closeIcon } = props
      // 默认图标
      if (closeIcon === undefined || closeIcon === true) {
        return <CloseOutlined />
      }
      if (closeIcon === false) {
        // 不应该到这里，外层已处理
        return null
      }
      // 渲染函数
      if (typeof closeIcon === 'function') {
        return (closeIcon as () => VNode)()
      }
      // 已经是 VNode（如 h(...) 或 <Comp /> 的结果）直接返回
      if (isVNode(closeIcon)) {
        return closeIcon
      }
      // 组件对象（如导入的图标组件）
      const CloseIconComp = closeIcon as any
      return <CloseIconComp />
    }

    return () => {
      if (!visible.value) return null

      const IconComp = props.icon as any
      const TagWrapper = (props.href ? 'a' : 'span') as any

      // 判断是否显示关闭按钮：closable 为 true 且 closeIcon 不为 false
      const showClose = props.closable && props.closeIcon !== false

      const iconSlot = slots.icon?.()
      const iconNode =
        iconSlot ??
        (props.icon ? (
          <IconComp class={cls(`${prefixCls}-icon`, props.classNames?.icon)} style={props.styles?.icon} />
        ) : null)

      const children = slots.default?.()
      // 存在 icon 时，用 content 节点包裹 children（对齐 v6 语义化 content）
      const content =
        iconNode && children ? (
          <span class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
            {children}
          </span>
        ) : (
          children
        )

      return (
        <TagWrapper
          class={classes.value}
          style={tagStyle.value}
          href={props.href && !props.disabled ? props.href : undefined}
          target={props.href ? props.target : undefined}
          aria-disabled={props.disabled || undefined}
        >
          {iconNode}
          {content}
          {showClose && (
            <span
              class={cls(`${prefixCls}-close-icon`, props.classNames?.closeIcon)}
              style={props.styles?.closeIcon}
              onClick={handleClose}
              onKeydown={handleCloseKeyDown}
              role="button"
              tabindex={props.disabled ? -1 : 0}
              aria-label={locale.value.common.close}
              aria-disabled={props.disabled || undefined}
            >
              {renderCloseIcon()}
            </span>
          )}
        </TagWrapper>
      )
    }
  },
})

const checkableTagProps = {
  checked: { type: Boolean, default: false },
  icon: { type: null, default: undefined },
  disabled: { type: Boolean, default: false },
} satisfies Record<keyof CheckableTagProps, any>

export const CheckableTag = defineComponent({
  name: 'CheckableTag',
  props: checkableTagProps,
  emits: ['change', 'update:checked'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tag')

    const classes = computed(() =>
      cls(prefixCls, `${prefixCls}-checkable`, {
        [`${prefixCls}-checkable-checked`]: props.checked,
        [`${prefixCls}-checkable-disabled`]: props.disabled,
      }),
    )

    const toggle = () => {
      const next = !props.checked
      emit('update:checked', next)
      emit('change', next)
    }

    const handleClick = () => {
      if (props.disabled) return
      toggle()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (props.disabled) return
      if (e.key === ' ') {
        e.preventDefault()
        toggle()
      }
    }

    return () => {
      const IconComp = props.icon as any
      const iconNode = slots.icon?.() ?? (props.icon ? <IconComp /> : null)
      return (
        <span
          class={classes.value}
          role="checkbox"
          aria-checked={props.checked}
          aria-disabled={props.disabled || undefined}
          tabindex={props.disabled ? -1 : 0}
          onClick={handleClick}
          onKeydown={handleKeyDown}
        >
          {iconNode}
          <span>{slots.default?.()}</span>
        </span>
      )
    }
  },
})
