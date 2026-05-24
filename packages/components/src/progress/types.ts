export type ProgressType = 'line' | 'circle' | 'dashboard'
export type ProgressStatus = 'normal' | 'exception' | 'active' | 'success'

export interface ProgressProps {
  percent?: number
  type?: ProgressType
  status?: ProgressStatus
  showInfo?: boolean
  strokeWidth?: number
  strokeColor?: string
  trailColor?: string
  size?: 'default' | 'small'
  width?: number
  format?: (percent: number) => string
}
