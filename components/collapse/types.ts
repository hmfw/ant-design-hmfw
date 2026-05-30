import type { VNode } from 'vue'

export type CollapsibleType = 'header' | 'icon' | 'disabled'

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
