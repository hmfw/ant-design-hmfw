import type { VNode, CSSProperties } from 'vue'

export type CollapsibleType = 'header' | 'icon' | 'disabled'

/**
 * Collapse 组件语义化类名
 */
export interface CollapseClassNames {
  /** 最外层容器 */
  root?: string
  /** 折叠面板项 */
  item?: string
  /** 面板头部 */
  header?: string
  /** 展开/收起图标 */
  icon?: string
  /** 头部文本 */
  headerText?: string
  /** 头部右侧额外内容 */
  extra?: string
  /** 内容区域（带动画的外层） */
  content?: string
  /** 内容盒子（实际内容容器） */
  body?: string
}

/**
 * Collapse 组件语义化样式
 */
export interface CollapseStyles {
  /** 最外层容器 */
  root?: CSSProperties
  /** 折叠面板项 */
  item?: CSSProperties
  /** 面板头部 */
  header?: CSSProperties
  /** 展开/收起图标 */
  icon?: CSSProperties
  /** 头部文本 */
  headerText?: CSSProperties
  /** 头部右侧额外内容 */
  extra?: CSSProperties
  /** 内容区域（带动画的外层） */
  content?: CSSProperties
  /** 内容盒子（实际内容容器） */
  body?: CSSProperties
}

export interface CollapseItem {
  key: string
  label: string
  children?: unknown
  disabled?: boolean
  showArrow?: boolean
  extra?: string | VNode
  collapsible?: CollapsibleType
  style?: Record<string, any>
  forceRender?: boolean
}

export interface CollapsePanelProps {
  header?: string
  disabled?: boolean
  showArrow?: boolean
  extra?: string | VNode
  collapsible?: CollapsibleType
  forceRender?: boolean
  panelKey?: string
}

export interface ExpandIconProps {
  isActive?: boolean
  panelKey?: string
}
