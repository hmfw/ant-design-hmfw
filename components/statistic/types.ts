import type { CSSProperties, VNode } from 'vue'

/** 语义化结构 className */
export interface StatisticClassNames {
  /** 根容器 */
  root?: string
  /** 标题区域 */
  title?: string
  /** 数值内容容器 */
  content?: string
  /** 数值前缀 */
  prefix?: string
  /** 数值文本 */
  value?: string
  /** 数值后缀 */
  suffix?: string
}

/** 语义化结构 style */
export interface StatisticStyles {
  /** 根容器 */
  root?: CSSProperties
  /** 标题区域 */
  title?: CSSProperties
  /** 数值内容容器 */
  content?: CSSProperties
  /** 数值前缀 */
  prefix?: CSSProperties
  /** 数值文本 */
  value?: CSSProperties
  /** 数值后缀 */
  suffix?: CSSProperties
}

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
  /** 语义化结构 class */
  classNames?: StatisticClassNames
  /** 语义化结构 style */
  styles?: StatisticStyles
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
