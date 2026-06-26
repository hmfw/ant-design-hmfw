import type { VNode, CSSProperties } from 'vue'

export interface MenuItemType {
  key: string
  label?: string
  icon?: VNode | (() => VNode)
  disabled?: boolean
  danger?: boolean
  title?: string
  /** 附加信息，如快捷键提示（⌘P），显示在菜单项右侧 */
  extra?: VNode | string
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
  /** 自定义弹出菜单渲染 */
  popupRender?: (menu: VNode) => VNode
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

/**
 * Menu 组件语义化 className
 */
export interface MenuClassNames {
  /** 菜单根容器 */
  root?: string
  /** 普通菜单项 */
  item?: string
  /** 选中状态的菜单项 */
  itemSelected?: string
  /** 禁用状态的菜单项 */
  itemDisabled?: string
  /** 危险状态的菜单项 */
  itemDanger?: string
  /** 菜单项图标容器 */
  itemIcon?: string
  /** 菜单项文本内容 */
  itemContent?: string
  /** 子菜单容器 */
  submenu?: string
  /** 子菜单标题 */
  submenuTitle?: string
  /** 展开状态的子菜单 */
  submenuOpen?: string
  /** 包含选中项的子菜单 */
  submenuSelected?: string
  /** 禁用状态的子菜单 */
  submenuDisabled?: string
  /** 子菜单图标 */
  submenuIcon?: string
  /** 展开箭头 */
  submenuArrow?: string
  /** 子菜单列表容器 */
  sub?: string
  /** 菜单项分组容器 */
  itemGroup?: string
  /** 分组标题 */
  itemGroupTitle?: string
  /** 分组列表 */
  itemGroupList?: string
  /** 分割线 */
  divider?: string
}

/**
 * Menu 组件语义化 style
 */
export interface MenuStyles {
  /** 菜单根容器 */
  root?: CSSProperties
  /** 普通菜单项 */
  item?: CSSProperties
  /** 选中状态的菜单项 */
  itemSelected?: CSSProperties
  /** 禁用状态的菜单项 */
  itemDisabled?: CSSProperties
  /** 危险状态的菜单项 */
  itemDanger?: CSSProperties
  /** 菜单项图标容器 */
  itemIcon?: CSSProperties
  /** 菜单项文本内容 */
  itemContent?: CSSProperties
  /** 子菜单容器 */
  submenu?: CSSProperties
  /** 子菜单标题 */
  submenuTitle?: CSSProperties
  /** 展开状态的子菜单 */
  submenuOpen?: CSSProperties
  /** 包含选中项的子菜单 */
  submenuSelected?: CSSProperties
  /** 禁用状态的子菜单 */
  submenuDisabled?: CSSProperties
  /** 子菜单图标 */
  submenuIcon?: CSSProperties
  /** 展开箭头 */
  submenuArrow?: CSSProperties
  /** 子菜单列表容器 */
  sub?: CSSProperties
  /** 菜单项分组容器 */
  itemGroup?: CSSProperties
  /** 分组标题 */
  itemGroupTitle?: CSSProperties
  /** 分组列表 */
  itemGroupList?: CSSProperties
  /** 分割线 */
  divider?: CSSProperties
}

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
  /** 子菜单打开延迟（秒），仅在 triggerSubMenuAction="hover" 时生效 */
  subMenuOpenDelay?: number
  /** 子菜单关闭延迟（秒），仅在 triggerSubMenuAction="hover" 时生效 */
  subMenuCloseDelay?: number
  /** 折叠时的 Tooltip 配置，设为 false 禁用 */
  tooltip?: false | { placement?: string; classNames?: Record<string, string> }
  /** 水平菜单溢出时的指示图标 */
  overflowedIndicator?: VNode
  /** 溢出弹出层的 className */
  overflowedIndicatorPopupClassName?: string
  onClick?: (info: { key: string }) => void
  onSelect?: (info: { key: string; selectedKeys: string[] }) => void
  onDeselect?: (info: { key: string; selectedKeys: string[] }) => void
  onOpenChange?: (openKeys: string[]) => void
  /** 语义化 className */
  classNames?: MenuClassNames
  /** 语义化 style */
  styles?: MenuStyles
}
