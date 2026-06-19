import type { CSSProperties } from 'vue'
import type { TooltipProps } from '../tooltip'

export type RateSize = 'small' | 'middle' | 'large'

/**
 * 自定义字符渲染上下文
 * - index: 当前星星的索引（从 0 开始）
 * - value: 当前评分值
 * - isHalf: 是否为半星渲染（star-first 区块）；非半星渲染（star-second 区块）时为 false
 */
export interface RateCharacterRenderContext {
  index: number
  value: number
  isHalf: boolean
}

export type RateHoverChangeHandler = (value: number | undefined) => void

/**
 * Rate 各部分的语义化 className
 */
export interface RateClassNames {
  /** 根容器 ul.hmfw-rate */
  root?: string
  /** 星星项 li.hmfw-rate-star */
  star?: string
  /** 半星前半部分 div.hmfw-rate-star-first */
  starFirst?: string
  /** 星星后半部分 div.hmfw-rate-star-second */
  starSecond?: string
}

/**
 * Rate 各部分的语义化 style
 */
export interface RateStyles {
  /** 根容器 ul.hmfw-rate */
  root?: CSSProperties
  /** 星星项 li.hmfw-rate-star */
  star?: CSSProperties
  /** 半星前半部分 div.hmfw-rate-star-first */
  starFirst?: CSSProperties
  /** 星星后半部分 div.hmfw-rate-star-second */
  starSecond?: CSSProperties
}

export interface RateProps {
  value?: number
  defaultValue?: number
  count?: number
  allowHalf?: boolean
  allowClear?: boolean
  disabled?: boolean
  character?: string | ((ctx: RateCharacterRenderContext) => any)
  tooltips?: (string | TooltipProps)[]
  size?: RateSize
  keyboard?: boolean
  autoFocus?: boolean
  /** 语义化 className */
  classNames?: RateClassNames
  /** 语义化 style */
  styles?: RateStyles
}
