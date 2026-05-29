import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { LoadingOutlined } from '../icon/icons'
import type { ButtonType, ButtonSize, ButtonHTMLType } from './types'
import type { IconComponent } from '../icon/types'

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'middle',
    },
    htmlType: {
      type: String as PropType<ButtonHTMLType>,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Function as PropType<IconComponent>,
      default: undefined,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const prefixCls = usePrefixCls('btn')

    const isDisabled = computed(() => props.disabled || props.loading)

    const classes = computed(() =>
      cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        `${prefixCls}-${props.size}`,
        {
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-dangerous`]: props.danger,
          [`${prefixCls}-block`]: props.block,
          [`${prefixCls}-background-ghost`]: props.ghost,
        }
      )
    )

    const handleClick = (e: MouseEvent) => {
      if (isDisabled.value) {
        e.preventDefault()
        return
      }
      emit('click', e)
    }

    return () => {
      const iconNode = props.loading ? (
        <Icon component={LoadingOutlined} spin />
      ) : props.icon ? (
        <Icon component={props.icon} />
      ) : null

      const slotContent = slots.default?.()
      const hasSlotContent = !!slotContent?.length
      const hasIcon = !hasSlotContent && !!(props.icon || props.loading)

      return (
        <button
          type={props.htmlType}
          class={cls(classes.value, { [`${prefixCls}-icon-only`]: hasIcon })}
          disabled={isDisabled.value}
          onClick={handleClick}
        >
          {iconNode}
          {hasSlotContent && <span>{slotContent}</span>}
        </button>
      )
    }
  },
})
