import type { VNode, CSSProperties } from 'vue'
import type { MenuProps } from '../menu'

export type DropdownPlacement = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'

export type DropdownTrigger = 'hover' | 'click' | 'contextMenu'

export interface DropdownArrowOptions {
  pointAtCenter?: boolean
}

/**
 * Dropdown 菜单配置 — 在 MenuProps 基础上补充事件回调
 * 注意：这些回调不在 Vue prop 系统中传递，而是由 Dropdown 拦截 Menu 事件后调用
 */
export interface DropdownMenuConfig extends MenuProps {
  onClick?: (info: { key: string }) => void
  onSelect?: (info: { key: string; selectedKeys: string[] }) => void
  onDeselect?: (info: { key: string; selectedKeys: string[] }) => void
  onOpenChange?: (openKeys: string[]) => void
}

/**
 * Dropdown 各部分的语义化 className
 */
export interface DropdownClassNames {
  /** 触发器容器 div（包裹 default slot） */
  trigger?: string
  /** 下拉浮层根节点 div.hmfw-dropdown */
  dropdown?: string
  /** 箭头 div.hmfw-dropdown-arrow（需开启 arrow） */
  arrow?: string
  /** 浮层内容容器 div.hmfw-dropdown-content */
  content?: string
}

/**
 * Dropdown 各部分的语义化 style
 */
export interface DropdownStyles {
  /** 触发器容器 div */
  trigger?: CSSProperties
  /** 下拉浮层根节点 div.hmfw-dropdown */
  dropdown?: CSSProperties
  /** 箭头 div.hmfw-dropdown-arrow */
  arrow?: CSSProperties
  /** 浮层内容容器 div.hmfw-dropdown-content */
  content?: CSSProperties
}

export interface DropdownProps {
  menu?: DropdownMenuConfig
  trigger?: DropdownTrigger | DropdownTrigger[]
  placement?: DropdownPlacement
  open?: boolean
  defaultOpen?: boolean
  disabled?: boolean
  arrow?: boolean | DropdownArrowOptions
  overlayClassName?: string
  overlayStyle?: Record<string, any>
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  autoAdjustOverflow?: boolean
  destroyOnHidden?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  popupRender?: (originNode: VNode) => VNode
  forceRender?: boolean
  openClassName?: string
  /** 弹层最小宽度匹配触发器宽度，默认 true。number 指定固定最小宽度（px） */
  matchWidth?: boolean | number
  /** 语义化 className */
  classNames?: DropdownClassNames
  /** 语义化 style */
  styles?: DropdownStyles
}
