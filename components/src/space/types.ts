export type SpaceSize = 'small' | 'middle' | 'large' | number
export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'

export interface SpaceProps {
  direction?: SpaceDirection
  size?: SpaceSize | [SpaceSize, SpaceSize]
  align?: SpaceAlign
  wrap?: boolean
  split?: any
}
