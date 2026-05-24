import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'

const iconMap: Record<ResultStatus, string> = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
  warning: '⚠',
  '404': '404',
  '403': '403',
  '500': '500',
}

const colorMap: Record<ResultStatus, string> = {
  success: '#52c41a',
  error: '#ff4d4f',
  info: '#1677ff',
  warning: '#faad14',
  '404': '#1677ff',
  '403': '#faad14',
  '500': '#ff4d4f',
}

export const Result = defineComponent({
  name: 'Result',
  props: {
    status: { type: String as PropType<ResultStatus>, default: 'info' },
    title: String,
    subTitle: String,
    icon: String,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('result')

    return () => {
      const status = props.status
      const iconContent = slots.icon?.() ?? props.icon ?? iconMap[status]
      const iconColor = colorMap[status]

      return (
        <div class={cls(prefixCls, `${prefixCls}-${status}`)}>
          <div class={`${prefixCls}-icon`} style={{ color: iconColor }}>
            {iconContent}
          </div>
          {(props.title || slots.title) && (
            <div class={`${prefixCls}-title`}>{slots.title?.() ?? props.title}</div>
          )}
          {(props.subTitle || slots.subTitle) && (
            <div class={`${prefixCls}-subtitle`}>{slots.subTitle?.() ?? props.subTitle}</div>
          )}
          {slots.extra && (
            <div class={`${prefixCls}-extra`}>{slots.extra()}</div>
          )}
          {slots.default && (
            <div class={`${prefixCls}-content`}>{slots.default()}</div>
          )}
        </div>
      )
    }
  },
})
