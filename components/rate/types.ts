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
}
