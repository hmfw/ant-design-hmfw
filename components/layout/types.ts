import type { VNode, CSSProperties } from 'vue'

export type LayoutBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'

export type CollapseType = 'clickTrigger' | 'responsive'

/** 展开/收起回调（点击触发器或响应式断点两种触发方式） */
export type SiderCollapseHandler = (collapsed: boolean, type: CollapseType) => void

/** 响应式断点触发回调 */
export type SiderBreakpointHandler = (broken: boolean) => void

export interface LayoutProps {
  hasSider?: boolean
}

/**
 * Sider 组件语义化 className
 */
export interface SiderClassNames {
  /** 侧边栏根容器 */
  root?: string
  /** 侧边栏内容包装容器 */
  body?: string
}

/**
 * Sider 组件语义化 style
 */
export interface SiderStyles {
  /** 侧边栏根容器 */
  root?: CSSProperties
  /** 侧边栏内容包装容器 */
  body?: CSSProperties
}

export interface SiderProps {
  width?: number | string
  collapsedWidth?: number | string
  collapsed?: boolean
  defaultCollapsed?: boolean
  collapsible?: boolean
  reverseArrow?: boolean
  breakpoint?: LayoutBreakpoint
  theme?: 'light' | 'dark'
  trigger?: VNode | null
  zeroWidthTriggerStyle?: CSSProperties
  /** 语义化 className */
  classNames?: SiderClassNames
  /** 语义化 style */
  styles?: SiderStyles
}
