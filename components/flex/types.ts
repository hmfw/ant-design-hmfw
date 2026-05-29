export type FlexAlign = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch' | 'normal'
export type FlexJustify =
  | 'flex-start' | 'flex-end' | 'center'
  | 'space-between' | 'space-around' | 'space-evenly'
  | 'stretch' | 'normal'
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'
export type FlexGap = 'small' | 'middle' | 'large' | number | string

export interface FlexProps {
  vertical?: boolean
  wrap?: boolean | FlexWrap
  justify?: FlexJustify
  align?: FlexAlign
  flex?: string | number
  gap?: FlexGap
  component?: string
}
