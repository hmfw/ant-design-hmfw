import { defineComponent, type PropType, type VNode, type VNodeChild } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, WarningFilled } from '@hmfw/icons'
import type { ResultClassNames, ResultProps, ResultStatus, ResultStyles } from './types'

export type { ResultStatus } from './types'

// props 对象：用 satisfies 强制 key 集合与 ResultProps 接口完全一致，杜绝双源头漂移
const resultProps = {
  status: { type: String as PropType<ResultStatus>, default: 'info' },
  title: { type: String, default: undefined },
  subTitle: { type: String, default: undefined },
  // 额外操作区：支持字符串、VNode、数组，亦可用 extra slot
  extra: { type: [String, Object, Array, Function] as PropType<VNodeChild>, default: undefined },
  // icon 为 false/null 时隐藏图标（异常状态插画不受影响，对齐 AntD）
  icon: {
    type: [String, Object, Array, Function, Boolean] as PropType<VNodeChild | false>,
    default: undefined,
  },
  classNames: { type: Object as PropType<ResultClassNames>, default: undefined },
  styles: { type: Object as PropType<ResultStyles>, default: undefined },
} satisfies Record<keyof ResultProps, any>

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
    <ellipse class="hmfw-result-img-shadow" cx="126" cy="140" rx="110" ry="14" />
    <text
      class="hmfw-result-img-text"
      x="126"
      y="96"
      font-size="84"
      font-weight="700"
      text-anchor="middle"
      font-family="sans-serif"
    >
      {text}
    </text>
  </svg>
)

const exceptionMap: Record<string, () => VNode> = {
  '404': ExceptionImage('404'),
  '403': ExceptionImage('403'),
  '500': ExceptionImage('500'),
}

export const Result = defineComponent({
  name: 'Result',
  props: resultProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('result')

    return () => {
      const status = props.status
      const isException = EXCEPTION_STATUS.includes(status)

      let iconNode: VNode | null
      if (isException) {
        // 异常状态：始终渲染插画，不受 icon=false 影响（对齐 AntD）
        const Img = exceptionMap[status]
        iconNode = (
          <div
            class={cls(`${prefixCls}-icon`, `${prefixCls}-image`, props.classNames?.icon)}
            style={props.styles?.icon}
          >
            <Img />
          </div>
        )
      } else if (slots.icon) {
        // 自定义 icon slot：添加 custom 类，避免默认状态颜色/尺寸覆盖用户样式
        iconNode = (
          <div
            class={cls(`${prefixCls}-icon`, `${prefixCls}-icon-custom`, props.classNames?.icon)}
            style={props.styles?.icon}
          >
            {slots.icon()}
          </div>
        )
      } else if (props.icon === false) {
        // 仅普通状态在 icon=false 时隐藏图标
        iconNode = null
      } else if (props.icon !== undefined) {
        // 自定义 icon prop（VNode/字符串等）：添加 custom 类
        iconNode = (
          <div
            class={cls(`${prefixCls}-icon`, `${prefixCls}-icon-custom`, props.classNames?.icon)}
            style={props.styles?.icon}
          >
            {props.icon}
          </div>
        )
      } else {
        const fallback = iconMap[status]?.() ?? null
        iconNode = (
          <div class={cls(`${prefixCls}-icon`, props.classNames?.icon)} style={props.styles?.icon}>
            {fallback}
          </div>
        )
      }

      const extraNode = slots.extra?.() ?? props.extra
      const hasExtra = slots.extra || props.extra != null

      return (
        <div class={cls(prefixCls, `${prefixCls}-${status}`, props.classNames?.root)} style={props.styles?.root}>
          {iconNode}
          {(props.title || slots.title) && (
            <div class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
              {slots.title?.() ?? props.title}
            </div>
          )}
          {(props.subTitle || slots.subTitle) && (
            <div class={cls(`${prefixCls}-subtitle`, props.classNames?.subtitle)} style={props.styles?.subtitle}>
              {slots.subTitle?.() ?? props.subTitle}
            </div>
          )}
          {hasExtra && (
            <div class={cls(`${prefixCls}-extra`, props.classNames?.extra)} style={props.styles?.extra}>
              {extraNode}
            </div>
          )}
          {slots.default && (
            <div class={cls(`${prefixCls}-body`, props.classNames?.content)} style={props.styles?.content}>
              {slots.default()}
            </div>
          )}
        </div>
      )
    }
  },
})
