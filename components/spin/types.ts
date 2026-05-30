export type SpinSize = 'small' | 'default' | 'large'

export interface SpinProps {
  spinning?: boolean
  size?: SpinSize
  tip?: string
  /** tip 的新名（与 AntD v6 对齐） */
  description?: string
  delay?: number
  fullscreen?: boolean
}
