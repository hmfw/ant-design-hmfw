export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type Gutter = number | Partial<Record<Breakpoint, number>>
export type Align = 'top' | 'middle' | 'bottom' | 'stretch'
export type Justify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'

export interface RowProps {
  gutter?: Gutter | [Gutter, Gutter]
  align?: Align
  justify?: Justify
  wrap?: boolean
}

export type ColSpan = number | string
export type ColSize = number | { span?: number; offset?: number; order?: number; pull?: number; push?: number }

export interface ColProps {
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
