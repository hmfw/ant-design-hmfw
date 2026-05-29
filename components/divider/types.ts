export type DividerType = 'horizontal' | 'vertical'
export type DividerOrientation = 'left' | 'right' | 'center'

export interface DividerProps {
  type?: DividerType
  dashed?: boolean
  orientation?: DividerOrientation
  orientationMargin?: string | number
  plain?: boolean
}
