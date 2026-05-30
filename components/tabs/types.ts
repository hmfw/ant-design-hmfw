import type { VNode } from 'vue'

export type TabsType = 'line' | 'card' | 'editable-card'
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left'
export type TabsSize = 'large' | 'small'

export interface TabItem {
  key: string
  label: string | VNode
  children?: unknown
  disabled?: boolean
  closable?: boolean
  icon?: VNode
  closeIcon?: VNode
  forceRender?: boolean
  destroyInactiveTabPane?: boolean
}

export interface TabBarExtraContent {
  left?: VNode
  right?: VNode
}

export interface AnimatedConfig {
  inkBar?: boolean
  tabPane?: boolean
}

export interface TabsProps {
  activeKey?: string
  defaultActiveKey?: string
  type?: TabsType
  size?: TabsSize
  tabPosition?: TabsPosition
  centered?: boolean
  items?: TabItem[]
  animated?: boolean | AnimatedConfig
  tabBarExtraContent?: VNode | TabBarExtraContent
  tabBarGutter?: number
  tabBarStyle?: Record<string, unknown>
  hideAdd?: boolean
  addIcon?: VNode
  removeIcon?: VNode
  destroyInactiveTabPane?: boolean
}

export interface TabsEmits {
  (e: 'update:activeKey', key: string): void
  (e: 'change', key: string): void
  (e: 'tabClick', key: string, event: MouseEvent): void
  (e: 'edit', targetKey: string | MouseEvent, action: 'add' | 'remove'): void
}
