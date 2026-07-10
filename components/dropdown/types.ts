import type { VNode, CSSProperties } from 'vue'
import type { MenuProps } from '../menu'

export type DropdownPlacement = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'

export type DropdownTrigger = 'hover' | 'click' | 'contextMenu'

export interface DropdownArrowOptions {
  pointAtCenter?: boolean
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
  menu?: MenuProps
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
  destroyPopupOnHide?: boolean
  destroyOnHidden?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  popupRender?: (originNode: VNode) => VNode
  dropdownRender?: (originNode: VNode) => VNode
  forceRender?: boolean
  openClassName?: string
  /** 弹层最小宽度匹配触发器宽度，默认 true。number 指定固定最小宽度（px） */
  matchWidth?: boolean | number
  /** 语义化 className */
  classNames?: DropdownClassNames
  /** 语义化 style */
  styles?: DropdownStyles
}
