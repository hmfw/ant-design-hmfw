import { defineComponent, computed, ref, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TagColor } from './types'

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
  'success',
  'processing',
  'error',
  'warning',
  'default',
]

export const Tag = defineComponent({
  name: 'Tag',
  props: {
    color: String as PropType<TagColor>,
    closable: Boolean,
    closeIcon: {
      type: [Object, Boolean, Function] as PropType<boolean | VNode | (() => VNode)>,
      default: undefined,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
    icon: Object,
    href: String,
    target: String,
    disabled: Boolean,
  },
  emits: ['close'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tag')
    const visible = ref(true)

    const isPresetColor = computed(() => (props.color ? PRESET_COLORS.includes(props.color) : false))

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-${props.color}`]: isPresetColor.value || undefined,
        [`${prefixCls}-has-color`]: (props.color && !isPresetColor.value) || undefined,
        [`${prefixCls}-borderless`]: !props.bordered || undefined,
        [`${prefixCls}-hidden`]: !visible.value || undefined,
        [`${prefixCls}-disabled`]: props.disabled || undefined,
      }),
    )

    const tagStyle = computed(() => {
      if (props.color && !isPresetColor.value && !props.disabled) {
        return { backgroundColor: props.color }
      }
      return {}
    })

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

      // closeIcon prop
      if (props.closeIcon === undefined || props.closeIcon === true) {
        // 默认图标
        return '×'
      }
      if (props.closeIcon === false) {
        // 不应该到这里，外层已处理
        return null
      }
      if (typeof props.closeIcon === 'function') {
        return (props.closeIcon as () => VNode)()
      }
      // VNode 对象
      const CloseIconComp = props.closeIcon as any
      return <CloseIconComp />
    }

    return () => {
      if (!visible.value) return null

      const IconComp = props.icon as any
      const TagWrapper = (props.href ? 'a' : 'span') as any

      // 判断是否显示关闭按钮：closable 为 true 且 closeIcon 不为 false
      const showClose = props.closable && props.closeIcon !== false

      return (
        <TagWrapper
          class={classes.value}
          style={tagStyle.value}
          href={props.href && !props.disabled ? props.href : undefined}
          target={props.href ? props.target : undefined}
          aria-disabled={props.disabled || undefined}
        >
          {props.icon && <IconComp class={`${prefixCls}-icon`} />}
          {slots.default?.()}
          {showClose && (
            <span
              class={`${prefixCls}-close-icon`}
              onClick={handleClose}
              onKeydown={handleCloseKeyDown}
              role="button"
              tabindex={props.disabled ? -1 : 0}
              aria-label="close"
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

export const CheckableTag = defineComponent({
  name: 'CheckableTag',
  props: {
    checked: Boolean,
  },
  emits: ['change', 'update:checked'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('tag')

    const classes = computed(() =>
      cls(prefixCls, `${prefixCls}-checkable`, {
        [`${prefixCls}-checkable-checked`]: props.checked,
      }),
    )

    const handleClick = () => {
      const next = !props.checked
      emit('update:checked', next)
      emit('change', next)
    }

    return () => (
      <span class={classes.value} onClick={handleClick}>
        {slots.default?.()}
      </span>
    )
  },
})
