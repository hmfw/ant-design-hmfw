import { defineComponent, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'

const iconMap: Record<string, string> = {
  success: '✓',
  error: '✕',
  info: 'ℹ',
  warning: '⚠',
}

const colorMap: Record<string, string> = {
  success: '#52c41a',
  error: '#ff4d4f',
  info: '#1677ff',
  warning: '#faad14',
}

const EXCEPTION_STATUS = ['404', '403', '500']

// 简化版异常插画（对应 AntD 的 noFound/unauthorized/serverError，原版各 200+ 行）
const ExceptionImage = (text: string) => () => (
  <svg width="252" height="160" viewBox="0 0 252 160" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="126" cy="140" rx="110" ry="14" fill="#f5f5f5" />
    <text x="126" y="96" font-size="84" font-weight="700" fill="#bfbfbf" text-anchor="middle" font-family="sans-serif">{text}</text>
  </svg>
)

const exceptionMap: Record<string, () => VNode> = {
  '404': ExceptionImage('404'),
  '403': ExceptionImage('403'),
  '500': ExceptionImage('500'),
}

export const Result = defineComponent({
  name: 'Result',
  props: {
    status: { type: String as PropType<ResultStatus>, default: 'info' },
    title: String,
    subTitle: String,
    // icon 为 false 时隐藏图标
    icon: { type: [String, Boolean] as PropType<string | false>, default: undefined },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('result')

    return () => {
      const status = props.status
      const isException = EXCEPTION_STATUS.includes(status)

      let iconNode: unknown = null
      if (props.icon !== false) {
        if (slots.icon) {
          iconNode = <div class={`${prefixCls}-icon`}>{slots.icon()}</div>
        } else if (isException) {
          const Img = exceptionMap[status]
          iconNode = (
            <div class={cls(`${prefixCls}-icon`, `${prefixCls}-image`)}>
              <Img />
            </div>
          )
        } else {
          iconNode = (
            <div class={`${prefixCls}-icon`} style={{ color: colorMap[status] }}>
              {props.icon ?? iconMap[status]}
            </div>
          )
        }
      }

      return (
        <div class={cls(prefixCls, `${prefixCls}-${status}`)}>
          {iconNode}
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
