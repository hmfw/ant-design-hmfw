import { defineComponent, ref, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AlertType } from './types'

const iconMap: Record<AlertType, string> = {
  success: '✓',
  info: 'ℹ',
  warning: '⚠',
  error: '✕',
}

export const Alert = defineComponent({
  name: 'Alert',
  props: {
    type: {
      type: String as PropType<AlertType>,
      default: 'info',
    },
    message: String,
    description: String,
    showIcon: Boolean,
    closable: Boolean,
    closeText: String,
    banner: Boolean,
  },
  emits: ['close', 'afterClose'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('alert')
    const closed = ref(false)
    const closing = ref(false)

    const handleClose = (e: MouseEvent) => {
      closing.value = true
      emit('close', e)
      setTimeout(() => {
        closed.value = true
        emit('afterClose')
      }, 300)
    }

    return () => {
      if (closed.value) return null

      const type = props.banner ? 'warning' : (props.type ?? 'info')
      const hasDesc = !!(props.description || slots.description)

      return (
        <div
          role="alert"
          class={cls(prefixCls, `${prefixCls}-${type}`, {
            [`${prefixCls}-with-description`]: hasDesc,
            [`${prefixCls}-banner`]: props.banner,
            [`${prefixCls}-closing`]: closing.value,
            [`${prefixCls}-no-icon`]: !props.showIcon,
          })}
        >
          {props.showIcon && (
            <span class={cls(`${prefixCls}-icon`, `${prefixCls}-icon-${type}`)}>
              {iconMap[type]}
            </span>
          )}
          <div class={`${prefixCls}-content`}>
            <div class={`${prefixCls}-message`}>
              {slots.message?.() ?? props.message}
            </div>
            {hasDesc && (
              <div class={`${prefixCls}-description`}>
                {slots.description?.() ?? props.description}
              </div>
            )}
          </div>
          {(props.closable || props.closeText || slots.closeIcon) && (
            <button
              type="button"
              class={`${prefixCls}-close-icon`}
              onClick={handleClose}
            >
              {slots.closeIcon?.() ?? props.closeText ?? '×'}
            </button>
          )}
          {slots.action && (
            <div class={`${prefixCls}-action`}>{slots.action()}</div>
          )}
        </div>
      )
    }
  },
})
