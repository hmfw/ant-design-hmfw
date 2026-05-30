import { defineComponent, ref, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AlertType, AlertVariant } from './types'

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
      default: undefined,
    },
    variant: {
      type: String as PropType<AlertVariant>,
      default: 'outlined',
    },
    /** 标题内容（与 AntD v6 对齐，`message` 为其别名） */
    title: String,
    /** @deprecated 请使用 `title` */
    message: String,
    description: String,
    showIcon: {
      type: Boolean,
      default: undefined,
    },
    closable: Boolean,
    closeText: String,
    banner: Boolean,
  },
  emits: ['close', 'afterClose'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('alert')
    const closed = ref(false)
    const closing = ref(false)

    // banner 模式默认为 warning
    const mergedType = computed<AlertType>(() => {
      if (props.type !== undefined) return props.type
      return props.banner ? 'warning' : 'info'
    })

    // banner 模式默认显示图标（与 AntD v6 对齐）
    const isShowIcon = computed(() =>
      props.banner && props.showIcon === undefined ? true : !!props.showIcon,
    )

    const mergedTitle = computed(() => props.title ?? props.message)

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

      const type = mergedType.value
      const hasDesc = !!(props.description || slots.description)

      return (
        <div
          role="alert"
          aria-live={type === 'error' || type === 'warning' ? 'assertive' : 'polite'}
          class={cls(prefixCls, `${prefixCls}-${type}`, `${prefixCls}-${props.variant}`, {
            [`${prefixCls}-with-description`]: hasDesc,
            [`${prefixCls}-banner`]: props.banner,
            [`${prefixCls}-closing`]: closing.value,
            [`${prefixCls}-no-icon`]: !isShowIcon.value,
          })}
        >
          {isShowIcon.value && (
            <span class={cls(`${prefixCls}-icon`, `${prefixCls}-icon-${type}`)}>
              {slots.icon?.() ?? iconMap[type]}
            </span>
          )}
          <div class={`${prefixCls}-content`}>
            <div class={`${prefixCls}-message`}>
              {slots.message?.() ?? slots.title?.() ?? mergedTitle.value}
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
              aria-label="关闭"
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
