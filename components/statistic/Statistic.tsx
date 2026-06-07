import { defineComponent, type PropType, type CSSProperties, type VNode } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Skeleton } from '../skeleton'

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

export const Statistic = defineComponent({
  name: 'Statistic',
  props: {
    title: [String, Object] as PropType<string | VNode>,
    value: [String, Number] as PropType<string | number>,
    precision: Number,
    prefix: [String, Object] as PropType<string | VNode>,
    suffix: [String, Object] as PropType<string | VNode>,
    valueStyle: Object as PropType<CSSProperties>,
    groupSeparator: { type: String, default: ',' },
    decimalSeparator: { type: String, default: '.' },
    loading: Boolean,
    valueRender: Function as PropType<(value: string) => VNode>,
  },
  setup(props) {
    const prefixCls = usePrefixCls('statistic')
    const config = useConfig()

    return () => {
      // 如果是加载状态，显示骨架屏
      if (props.loading) {
        return (
          <div
            class={cls(prefixCls, {
              [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
            })}
          >
            {props.title && <div class={`${prefixCls}-title`}>{props.title}</div>}
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
          class={cls(prefixCls, {
            [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
          })}
        >
          {props.title && <div class={`${prefixCls}-title`}>{props.title}</div>}
          <div class={`${prefixCls}-content`} style={props.valueStyle}>
            {props.prefix && <span class={`${prefixCls}-content-prefix`}>{props.prefix}</span>}
            <span class={`${prefixCls}-content-value`}>{renderValue()}</span>
            {props.suffix && <span class={`${prefixCls}-content-suffix`}>{props.suffix}</span>}
          </div>
        </div>
      )
    }
  },
})
