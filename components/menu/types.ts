import type { VNode, CSSProperties } from 'vue'
import type { TooltipPlacement } from '../tooltip'

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

/** 展开图标渲染器：自定义 VNode / 函数 / null / false 隐藏 */
export type MenuExpandIcon = VNode | ((props: { isOpen: boolean }) => VNode) | null | false

/** 子菜单触发方式 */
export type MenuTriggerSubMenuAction = 'hover' | 'click'

/** inlineCollapsed 时的 Tooltip 配置，false 禁用 */
export type MenuTooltipConfig = false | { placement?: TooltipPlacement; classNames?: Record<string, string> }

/** Menu 组件 emits 函数签名，用于 composable 类型约束 */
export type MenuEmitFn = (
  event: 'update:selectedKeys' | 'update:openKeys' | 'select' | 'deselect' | 'openChange' | 'click',
  ...args: any[]
) => void

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
  openKeys?: string[]
  inlineCollapsed?: boolean
  inlineIndent?: number
  multiple?: boolean
  selectable?: boolean
  expandIcon?: MenuExpandIcon
  triggerSubMenuAction?: MenuTriggerSubMenuAction
  tooltip?: MenuTooltipConfig
  /** 水平菜单溢出时的指示图标 */
  overflowedIndicator?: VNode
  /** 语义化 className */
  classNames?: MenuClassNames
  /** 语义化 style */
  styles?: MenuStyles
}

// ====================== MenuContext ======================

export const MENU_CONTEXT_KEY = Symbol('menu-context')

export interface MenuContext {
  selectedKeys: string[]
  openKeys: string[]
  mode: MenuMode
  theme: MenuTheme
  prefixCls: string
  inlineIndent: number
  inlineCollapsed: boolean
  firstLevel: boolean
  triggerSubMenuAction: MenuTriggerSubMenuAction
  selectable: boolean
  classNames?: MenuClassNames
  styles?: MenuStyles
  expandIcon?: MenuExpandIcon
  tooltip?: MenuTooltipConfig
  onSelect: (key: string) => void
  onDeselect: (key: string) => void
  onOpenChange: (key: string, open: boolean) => void
}

// ====================== 类型守卫 ======================

export const isItemType = (item: ItemType): item is MenuItemType | SubMenuType =>
  item !== null && typeof item === 'object' && 'key' in item && !('type' in item)

export const isGroupType = (item: ItemType): item is MenuItemGroupType =>
  item !== null && typeof item === 'object' && 'type' in item && item.type === 'group'

export const isDividerType = (item: ItemType): item is MenuDividerType =>
  item !== null && typeof item === 'object' && 'type' in item && item.type === 'divider'

export const isSubMenuType = (item: ItemType): item is SubMenuType =>
  isItemType(item) && 'children' in item && Array.isArray(item.children) && item.children.length > 0
