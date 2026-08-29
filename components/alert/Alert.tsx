import { computed, defineComponent, onBeforeUnmount, ref, type PropType, type VNodeChild } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils/cls'
import { isPlainObject } from '../_utils/is'
import {
  CheckCircleFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
} from '@hmfw/icons'
import type { AlertProps, AlertType, AlertVariant, AlertClosable, AlertClassNames, AlertStyles } from './types'

// 与 AntD v6 对齐：使用 Filled 状态图标
const iconMap: Record<AlertType, typeof CheckCircleFilled> = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
}

const alertProps = {
  type: { type: String as PropType<AlertType>, default: undefined },
  variant: { type: String as PropType<AlertVariant>, default: 'outlined' },
  title: { type: String, default: undefined },
  description: { type: String, default: undefined },
  showIcon: { type: Boolean, default: undefined },
  closable: { type: [Boolean, Object] as PropType<AlertClosable>, default: undefined },
  icon: { type: [String, Object, Array, Function] as PropType<VNodeChild>, default: undefined },
  banner: { type: Boolean, default: false },
  action: { type: [String, Object, Array, Function] as PropType<VNodeChild>, default: undefined },
  classNames: { type: Object as PropType<AlertClassNames>, default: undefined },
  styles: { type: Object as PropType<AlertStyles>, default: undefined },
} satisfies Record<keyof AlertProps, any>

export const Alert = defineComponent({
  name: 'Alert',
  props: alertProps,
  emits: ['close', 'afterClose'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('alert')
    const locale = useLocale()

    const closed = ref(false)
    const closing = ref(false)
    let closeTimer: ReturnType<typeof setTimeout> | null = null

    // banner 模式默认为 warning
    const mergedType = computed<AlertType>(() => props.type ?? (props.banner ? 'warning' : 'info'))

    // banner 模式默认显示图标（与 AntD v6 对齐）
    const isShowIcon = computed(() => (props.banner && props.showIcon === undefined ? true : !!props.showIcon))

    const hasDesc = computed(() => !!(props.description || slots.description))

    // 是否可关闭：closable 传对象即可关闭，boolean 时按其值
    const isClosable = computed(() => {
      const { closable } = props
      if (isPlainObject(closable)) return true
      if (typeof closable === 'boolean') return closable
      return false
    })

    const handleClose = (e: MouseEvent) => {
      closing.value = true
      emit('close', e)
      closeTimer = setTimeout(() => {
        closed.value = true
        emit('afterClose')
      }, 300)
    }

    onBeforeUnmount(() => {
      if (closeTimer) {
        clearTimeout(closeTimer)
        closeTimer = null
      }
    })

    return () => {
      if (closed.value) return null

      const type = mergedType.value
      const IconComp = iconMap[type]

      // 关闭图标
      const closeConfig = isPlainObject(props.closable) ? props.closable : {}
      const closeIconNode = closeConfig.closeIcon ?? slots.closeIcon?.() ?? <CloseOutlined />
      const closeAriaLabel =
        typeof closeConfig['aria-label'] === 'string' ? closeConfig['aria-label'] : locale.value.Alert.close

      // 内容合并
      const iconNode = props.icon ?? slots.icon?.() ?? <IconComp />
      const titleNode = slots.title?.() ?? props.title
      const actionNode = props.action ?? slots.action?.()

      const alertCls = cls(
        prefixCls,
        `${prefixCls}-${type}`,
        `${prefixCls}-${props.variant}`,
        {
          [`${prefixCls}-with-description`]: hasDesc.value,
          [`${prefixCls}-banner`]: props.banner,
          [`${prefixCls}-closing`]: closing.value,
          [`${prefixCls}-no-icon`]: !isShowIcon.value,
        },
        props.classNames?.root,
      )

      return (
        <div
          role="alert"
          aria-live={type === 'error' || type === 'warning' ? 'assertive' : 'polite'}
          data-show={!closed.value}
          class={alertCls}
          style={props.styles?.root}
        >
          {isShowIcon.value && (
            <span class={cls(`${prefixCls}-icon`, props.classNames?.icon)} style={props.styles?.icon}>
              {iconNode}
            </span>
          )}
          <div class={cls(`${prefixCls}-section`, props.classNames?.section)} style={props.styles?.section}>
            {titleNode != null && titleNode !== '' && (
              <div class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
                {titleNode}
              </div>
            )}
            {hasDesc.value && (
              <div
                class={cls(`${prefixCls}-description`, props.classNames?.description)}
                style={props.styles?.description}
              >
                {slots.description?.() ?? props.description}
              </div>
            )}
          </div>
          {actionNode != null && (
            <div class={cls(`${prefixCls}-actions`, props.classNames?.actions)} style={props.styles?.actions}>
              {actionNode}
            </div>
          )}
          {isClosable.value && (
            <button
              type="button"
              tabindex={0}
              class={cls(`${prefixCls}-close-icon`, props.classNames?.closeIcon)}
              style={props.styles?.closeIcon}
              aria-label={closeAriaLabel}
              onClick={handleClose}
            >
              {closeIconNode}
            </button>
          )}
        </div>
      )
    }
  },
})
