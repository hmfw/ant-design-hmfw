import type { VNode, CSSProperties } from 'vue'

export type ProgressType = 'line' | 'circle' | 'dashboard'
export type ProgressStatus = 'normal' | 'exception' | 'active' | 'success'
/** v6: `default` 标记 deprecated，等同 `medium` */
export type ProgressSize = 'small' | 'medium' | 'default'
export type StrokeLinecap = 'round' | 'butt' | 'square'
export type GapPlacement = 'top' | 'bottom' | 'start' | 'end'
export type GapPosition = 'top' | 'bottom' | 'left' | 'right'

export interface SuccessProps {
  percent?: number
  strokeColor?: string
}

export interface PercentPositionType {
  align?: 'start' | 'center' | 'end'
  type?: 'inner' | 'outer'
}

export type StringGradients = Record<string, string>
export type FromToGradients = { from: string; to: string }
export type ProgressGradient = { direction?: string } & (Partial<StringGradients> & Partial<FromToGradients>)

export type ProgressFormatReturn = VNode | string | number | null
export type ProgressFormat = (percent?: number, successPercent?: number) => ProgressFormatReturn

export interface ProgressClassNames {
  root?: string
  body?: string
  rail?: string
  track?: string
  indicator?: string
}

export interface ProgressStyles {
  root?: CSSProperties
  body?: CSSProperties
  rail?: CSSProperties
  track?: CSSProperties
  indicator?: CSSProperties
}

export interface ProgressStepsConfig {
  count: number
  gap: number
}

export interface ProgressProps {
  prefixCls?: string
  rootClassName?: string
  classNames?: ProgressClassNames
  styles?: ProgressStyles

  type?: ProgressType
  percent?: number
  status?: ProgressStatus
  showInfo?: boolean
  strokeWidth?: number
  strokeLinecap?: StrokeLinecap
  strokeColor?: string | string[] | ProgressGradient
  /** @deprecated 使用 railColor 代替 */
  trailColor?: string
  railColor?: string
  /** @deprecated 使用 size 代替 */
  width?: number
  size?: ProgressSize | number | [number | string, number] | { width?: number; height?: number }
  format?: ProgressFormat
  success?: SuccessProps
  steps?: number | ProgressStepsConfig
  gapDegree?: number
  gapPlacement?: GapPlacement
  /** @deprecated 使用 gapPlacement 代替 */
  gapPosition?: GapPosition
  percentPosition?: PercentPositionType
  rounding?: (step: number) => number
}
