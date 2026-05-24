import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { LoadingOutlined } from '../icon/icons'
import type { ButtonType, ButtonSize, ButtonHTMLType, IconConfig } from './types'

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
      type: Object as PropType<IconConfig>,
      default: undefined,
    },
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const prefixCls = usePrefixCls('btn')

    const classes = computed(() => {
      const hasIcon: boolean = !slots.default && !!(props.icon || props.loading)
      return cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        `${prefixCls}-${props.size}`,
        {
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-disabled`]: props.disabled || props.loading,
          [`${prefixCls}-dangerous`]: props.danger,
          [`${prefixCls}-block`]: props.block,
          [`${prefixCls}-background-ghost`]: props.ghost,
          [`${prefixCls}-icon-only`]: hasIcon,
        }
      )
    })

    const handleClick = (e: MouseEvent) => {
      if (props.disabled || props.loading) {
        e.preventDefault()
        return
      }
      emit('click', e)
    }

    return () => {
      const iconNode = props.loading ? (
        <Icon component={LoadingOutlined} spin />
      ) : props.icon ? (
        <Icon {...props.icon} />
      ) : null

      return (
        <button
          type={props.htmlType}
          class={classes.value}
          disabled={props.disabled || props.loading}
          onClick={handleClick}
        >
          {iconNode}
          {slots.default && <span>{slots.default()}</span>}
        </button>
      )
    }
  },
})
