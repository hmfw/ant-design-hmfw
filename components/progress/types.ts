export type ProgressType = 'line' | 'circle' | 'dashboard'
export type ProgressStatus = 'normal' | 'exception' | 'active' | 'success'
export type ProgressSize = 'small' | 'default'
export type StrokeLinecap = 'round' | 'butt' | 'square'

export interface SuccessProps {
  percent?: number
  strokeColor?: string
}

export interface PercentPositionType {
  align?: 'start' | 'center' | 'end'
  type?: 'inner' | 'outer'
}

export type ProgressGradient = {
  direction?: string
  from?: string
  to?: string
  [key: string]: string | undefined
}

export interface ProgressProps {
  percent?: number
  type?: ProgressType
  status?: ProgressStatus
  showInfo?: boolean
  strokeWidth?: number
  strokeColor?: string | ProgressGradient
  /** @deprecated Use railColor instead */
  trailColor?: string
  railColor?: string
  size?: ProgressSize | number | { width?: number; height?: number }
  width?: number
  format?: (percent: number, successPercent?: number) => string
  strokeLinecap?: StrokeLinecap
  success?: SuccessProps
  steps?: number
  gapDegree?: number
  percentPosition?: PercentPositionType
}
