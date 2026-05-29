export type TabsType = 'line' | 'card' | 'editable-card'
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left'
export type TabsSize = 'large' | 'default' | 'small'

export interface TabItem {
  key: string
  label: string
  children?: unknown
  disabled?: boolean
  closable?: boolean
}

export interface TabsProps {
  activeKey?: string
  defaultActiveKey?: string
  type?: TabsType
  size?: TabsSize
  tabPosition?: TabsPosition
  centered?: boolean
  items?: TabItem[]
}
