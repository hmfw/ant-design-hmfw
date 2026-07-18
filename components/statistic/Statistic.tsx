import { defineComponent, type PropType, type CSSProperties, type VNode } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Skeleton } from '../skeleton'
import type { StatisticProps, StatisticClassNames, StatisticStyles } from './types'

/**
 * 格式化数字，添加千分位分隔符和精度控制
 */
function formatNumber(
  value: string | number | undefined,
  precision?: number,
  groupSeparator = ',',
  decimalSeparator = '.',
): string {
  if (value === undefined || value === null || value === '') {
    return ''
  }

  const numValue = typeof value === 'string' ? parseFloat(value) : value
  if (isNaN(numValue)) {
    return String(value)
  }

  // 应用精度
  const formattedValue = precision !== undefined ? numValue.toFixed(precision) : String(numValue)

  // 分离整数和小数部分
  const parts = formattedValue.split('.')
  const integerPart = parts[0]
  const decimalPart = parts[1]

  // 添加千分位分隔符
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, groupSeparator)

  // 组合整数和小数部分
  return decimalPart !== undefined ? `${formattedInteger}${decimalSeparator}${decimalPart}` : formattedInteger
}

const statisticProps = {
  title: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  value: { type: [String, Number] as PropType<string | number>, default: undefined },
  precision: { type: Number, default: undefined },
  prefix: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  suffix: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  valueStyle: { type: Object as PropType<CSSProperties>, default: undefined },
  groupSeparator: { type: String, default: ',' },
  decimalSeparator: { type: String, default: '.' },
  loading: { type: Boolean, default: false },
  valueRender: { type: Function as PropType<(value: string) => VNode>, default: undefined },
  classNames: { type: Object as PropType<StatisticClassNames>, default: undefined },
  styles: { type: Object as PropType<StatisticStyles>, default: undefined },
} satisfies Record<keyof StatisticProps, any>

export const Statistic = defineComponent({
  name: 'Statistic',
  props: statisticProps,
  setup(props) {
    const prefixCls = usePrefixCls('statistic')
    const config = useConfig()

    return () => {
      // 如果是加载状态，显示骨架屏
      if (props.loading) {
        return (
          <div
            class={cls(prefixCls, props.classNames?.root, {
              [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
            })}
            style={props.styles?.root}
          >
            {props.title && (
              <div class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
                {props.title}
              </div>
            )}
            <Skeleton active title={false} paragraph={{ rows: 1, width: '100%' }} />
          </div>
        )
      }

      // 格式化数值
      const formattedValue = formatNumber(props.value, props.precision, props.groupSeparator, props.decimalSeparator)

      // 渲染数值内容
      const renderValue = () => {
        if (props.valueRender) {
          return props.valueRender(formattedValue)
        }
        return formattedValue
      }

      return (
        <div
          class={cls(prefixCls, props.classNames?.root, {
            [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
          })}
          style={props.styles?.root}
        >
          {props.title && (
            <div class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
              {props.title}
            </div>
          )}
          <div
            class={cls(`${prefixCls}-content`, props.classNames?.content)}
            style={{ ...props.valueStyle, ...props.styles?.content }}
          >
            {props.prefix && (
              <span class={cls(`${prefixCls}-content-prefix`, props.classNames?.prefix)} style={props.styles?.prefix}>
                {props.prefix}
              </span>
            )}
            <span class={cls(`${prefixCls}-content-value`, props.classNames?.value)} style={props.styles?.value}>
              {renderValue()}
            </span>
            {props.suffix && (
              <span class={cls(`${prefixCls}-content-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
                {props.suffix}
              </span>
            )}
          </div>
        </div>
      )
    }
  },
})
