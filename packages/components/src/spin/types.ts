export type SpinSize = 'small' | 'default' | 'large'

export interface SpinProps {
  spinning?: boolean
  size?: SpinSize
  tip?: string
  delay?: number
}
