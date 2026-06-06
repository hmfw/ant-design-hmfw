import { defineComponent, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  WarningFilled,
} from '../icon'

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'

// 对齐 AntD：四种状态各自对应一个 Filled 图标组件
const iconMap: Record<string, () => VNode> = {
  success: () => <CheckCircleFilled />,
  error: () => <CloseCircleFilled />,
  info: () => <ExclamationCircleFilled />,
  warning: () => <WarningFilled />,
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
    // 额外操作区，亦可用 extra slot
    extra: String,
    // icon 为 false/null 时隐藏图标（异常状态插画不受影响，对齐 AntD）
    icon: { type: [String, Boolean] as PropType<string | false>, default: undefined },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('result')

    return () => {
      const status = props.status
      const isException = EXCEPTION_STATUS.includes(status)

      let iconNode: unknown = null
      if (isException) {
        // 异常状态：始终渲染插画，不受 icon=false 影响（对齐 AntD）
        const Img = exceptionMap[status]
        iconNode = (
          <div class={cls(`${prefixCls}-icon`, `${prefixCls}-image`)}>
            <Img />
          </div>
        )
      } else if (slots.icon) {
        iconNode = <div class={`${prefixCls}-icon`}>{slots.icon()}</div>
      } else if (props.icon === false) {
        // 仅普通状态在 icon=false 时隐藏图标
        iconNode = null
      } else {
        const fallback = iconMap[status]?.() ?? null
        iconNode = (
          <div class={`${prefixCls}-icon`}>
            {props.icon ?? fallback}
          </div>
        )
      }

      const extraNode = slots.extra?.() ?? props.extra
      const hasExtra = slots.extra || props.extra

      return (
        <div class={cls(prefixCls, `${prefixCls}-${status}`)}>
          {iconNode}
          {(props.title || slots.title) && (
            <div class={`${prefixCls}-title`}>{slots.title?.() ?? props.title}</div>
          )}
          {(props.subTitle || slots.subTitle) && (
            <div class={`${prefixCls}-subtitle`}>{slots.subTitle?.() ?? props.subTitle}</div>
          )}
          {hasExtra && (
            <div class={`${prefixCls}-extra`}>{extraNode}</div>
          )}
          {slots.default && (
            <div class={`${prefixCls}-body`}>{slots.default()}</div>
          )}
        </div>
      )
    }
  },
})
