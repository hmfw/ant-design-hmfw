import type { CSSProperties, VNode } from 'vue'

export interface StatisticProps {
  /** 标题 */
  title?: string | VNode
  /** 数值 */
  value?: string | number
  /** 数值精度 */
  precision?: number
  /** 前缀 */
  prefix?: string | VNode
  /** 后缀 */
  suffix?: string | VNode
  /** 数值样式 */
  valueStyle?: CSSProperties
  /** 分组分隔符 */
  groupSeparator?: string
  /** 小数点符号 */
  decimalSeparator?: string
  /** 加载状态 */
  loading?: boolean
  /** 自定义渲染数值 */
  valueRender?: (value: string) => VNode
}

export interface CountdownProps extends Omit<StatisticProps, 'value'> {
  /** 目标时间（时间戳或 Date） */
  value?: number | Date
  /** 时间格式 */
  format?: string
  /** 倒计时完成回调 */
  onFinish?: () => void
  /** 倒计时变化回调 */
  onChange?: (value: number) => void
}
