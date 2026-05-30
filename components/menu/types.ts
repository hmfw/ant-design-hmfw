import type { VNode } from 'vue'

export interface MenuItemType {
  key: string
  label?: string
  icon?: VNode | (() => VNode)
  disabled?: boolean
  danger?: boolean
  title?: string
  [key: `data-${string}`]: unknown
}

export interface SubMenuType {
  key: string
  label?: string
  title?: string
  icon?: VNode | (() => VNode)
  disabled?: boolean
  danger?: boolean
  popupClassName?: string
  popupOffset?: [number, number]
  theme?: 'light' | 'dark'
  children?: ItemType[]
}

export interface MenuItemGroupType {
  type: 'group'
  key?: string
  label?: string
  children?: ItemType[]
}

export interface MenuDividerType {
  type: 'divider'
  key?: string
  dashed?: boolean
}

export type ItemType = MenuItemType | SubMenuType | MenuItemGroupType | MenuDividerType | null

export type MenuMode = 'horizontal' | 'vertical' | 'inline'
export type MenuTheme = 'light' | 'dark'

export interface MenuProps {
  items?: ItemType[]
  mode?: MenuMode
  theme?: MenuTheme
  selectedKeys?: string[]
  defaultSelectedKeys?: string[]
  openKeys?: string[]
  defaultOpenKeys?: string[]
  inlineCollapsed?: boolean
  inlineIndent?: number
  multiple?: boolean
  selectable?: boolean
  expandIcon?: VNode | ((props: { isOpen: boolean }) => VNode)
  triggerSubMenuAction?: 'hover' | 'click'
}
