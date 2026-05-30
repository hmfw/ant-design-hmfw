import type { VNode, CSSProperties } from 'vue'

export type LayoutBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export type CollapseType = 'clickTrigger' | 'responsive'

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
  trigger?: VNode | null
  zeroWidthTriggerStyle?: CSSProperties
  onCollapse?: (collapsed: boolean, type: CollapseType) => void
  onBreakpoint?: (broken: boolean) => void
}
