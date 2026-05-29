export type LayoutBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface LayoutProps {
  hasSider?: boolean
  class?: string
  style?: string | Record<string, string>
}

export interface SiderProps {
  width?: number | string
  collapsedWidth?: number | string
  collapsed?: boolean
  collapsible?: boolean
  defaultCollapsed?: boolean
  reverseArrow?: boolean
  breakpoint?: LayoutBreakpoint
  theme?: 'light' | 'dark'
  trigger?: boolean
  zeroWidthTriggerStyle?: Record<string, string>
}
