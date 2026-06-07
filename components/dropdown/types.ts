import type { VNode } from 'vue'
import type { MenuProps } from '../menu'

export type DropdownPlacement = 'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | 'bottomRight'

export type DropdownTrigger = 'hover' | 'click' | 'contextMenu'

export interface DropdownArrowOptions {
  pointAtCenter?: boolean
}

export interface DropdownProps {
  menu?: MenuProps
  trigger?: DropdownTrigger | DropdownTrigger[]
  placement?: DropdownPlacement
  open?: boolean
  defaultOpen?: boolean
  disabled?: boolean
  arrow?: boolean | DropdownArrowOptions
  autoFocus?: boolean
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
  rootClassName?: string
}
