import type { TooltipProps } from '../tooltip'

export type RateSize = 'small' | 'middle' | 'large'

export interface RateCharacterRenderContext {
  index: number
  value: number
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
}
