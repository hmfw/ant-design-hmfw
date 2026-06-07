import type { VNode } from 'vue'
import type { ButtonProps, ButtonType } from '../button/types'
import type { TooltipPlacement, TooltipTrigger, TooltipArrow } from '../tooltip/types'

/** Popconfirm title/description/icon — text, VNode, or render function. */
export type PopconfirmContent = string | number | VNode | (() => VNode | string | number)

/** Subset of ButtonType allowed for `okType`. AntD adds the legacy `'danger'` shorthand. */
export type PopconfirmOkType = ButtonType | 'danger'

export interface PopconfirmProps {
  title?: PopconfirmContent
  description?: PopconfirmContent
  icon?: PopconfirmContent
  okText?: string
  cancelText?: string
  okType?: PopconfirmOkType
  /** Forwarded to the OK Button (loading/disabled/etc). */
  okButtonProps?: ButtonProps
  /** Forwarded to the Cancel Button. */
  cancelButtonProps?: ButtonProps
  showCancel?: boolean
  /** Trigger behavior. AntD default for Popconfirm is `click`. */
  trigger?: TooltipTrigger | TooltipTrigger[]
  placement?: TooltipPlacement
  open?: boolean
  defaultOpen?: boolean
  disabled?: boolean
  arrow?: TooltipArrow
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  autoAdjustOverflow?: boolean
  zIndex?: number
  destroyOnHidden?: boolean
  /** @deprecated Use `destroyOnHidden`. */
  destroyTooltipOnHide?: boolean
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  overlayStyle?: Record<string, string>
  overlayInnerStyle?: Record<string, string>
}
