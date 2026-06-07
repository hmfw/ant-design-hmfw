export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type Gutter = number | string | Partial<Record<Breakpoint, number>>
export type Align = 'top' | 'middle' | 'bottom' | 'stretch'
export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

export type ResponsiveAlign = Align | Partial<Record<Breakpoint, Align>>
export type ResponsiveJustify = Justify | Partial<Record<Breakpoint, Justify>>

export interface RowProps {
  gutter?: Gutter | [Gutter, Gutter]
  align?: ResponsiveAlign
  justify?: ResponsiveJustify
  wrap?: boolean
}

export type ColSpan = number | string
export type FlexType = number | 'none' | 'auto' | string
export type ColSize =
  | number
  | {
      flex?: FlexType
      span?: number
      offset?: number
      order?: number
      pull?: number
      push?: number
    }

export interface ColProps {
  flex?: FlexType
  span?: ColSpan
  offset?: number
  order?: number
  pull?: number
  push?: number
  xs?: ColSize
  sm?: ColSize
  md?: ColSize
  lg?: ColSize
  xl?: ColSize
  xxl?: ColSize
}
