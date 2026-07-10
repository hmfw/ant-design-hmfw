import { defineComponent, ref, computed, type PropType, type VNodeChild } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import {
  CheckCircleFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
} from '@hmfw/icons'
import type { AlertType, AlertVariant, AlertClosable, AlertClassNames, AlertStyles } from './types'

// 与 AntD v6 对齐：使用 Filled 状态图标
const iconMap: Record<AlertType, typeof CheckCircleFilled> = {
  success: CheckCircleFilled,
  info: InfoCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
}

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return Object.prototype.toString.call(v) === '[object Object]'
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
    /** 标题内容（与 AntD v6 对齐） */
    title: String,
    description: String,
    showIcon: {
      type: Boolean,
      default: undefined,
    },
    closable: {
      type: [Boolean, Object] as PropType<AlertClosable>,
      default: undefined,
    },
    icon: [String, Object, Array, Function] as PropType<VNodeChild>,
    banner: Boolean,
    action: [String, Object, Array, Function] as PropType<VNodeChild>,
    role: {
      type: String,
      default: 'alert',
    },
    classNames: Object as PropType<AlertClassNames>,
    styles: Object as PropType<AlertStyles>,
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
    const isShowIcon = computed(() => (props.banner && props.showIcon === undefined ? true : !!props.showIcon))

    const mergedTitle = computed(() => props.title)

    // 是否可关闭：closable 传对象即可关闭，boolean 时按其值
    const isClosable = computed(() => {
      const { closable } = props
      if (isPlainObject(closable)) return true
      if (typeof closable === 'boolean') return closable
      return false
    })

    // 合并关闭图标：closable.closeIcon > slot > 默认 CloseOutlined
    const mergedCloseIcon = computed<VNodeChild>(() => {
      const { closable } = props
      if (isPlainObject(closable) && closable.closeIcon != null) {
        return closable.closeIcon as VNodeChild
      }
      if (slots.closeIcon) return slots.closeIcon()
      return undefined
    })

    const closeAriaLabel = computed(() => {
      const { closable } = props
      if (isPlainObject(closable) && typeof closable['aria-label'] === 'string') {
        return closable['aria-label'] as string
      }
      return '关闭'
    })

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
      const IconComp = iconMap[type]

      // 图标内容：icon prop > slot > 默认状态图标
      const iconNode = props.icon ?? slots.icon?.() ?? <IconComp />
      const closeIconNode = mergedCloseIcon.value ?? <CloseOutlined />
      const titleNode = slots.title?.() ?? mergedTitle.value
      const actionNode = props.action ?? slots.action?.()

      return (
        <div
          role={props.role}
          aria-live={type === 'error' || type === 'warning' ? 'assertive' : 'polite'}
          data-show={!closed.value}
          class={cls(
            prefixCls,
            `${prefixCls}-${type}`,
            `${prefixCls}-${props.variant}`,
            {
              [`${prefixCls}-with-description`]: hasDesc,
              [`${prefixCls}-banner`]: props.banner,
              [`${prefixCls}-closing`]: closing.value,
              [`${prefixCls}-no-icon`]: !isShowIcon.value,
            },
            props.classNames?.root,
          )}
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
            {hasDesc && (
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
              aria-label={closeAriaLabel.value}
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
