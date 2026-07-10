import type { VNode, CSSProperties } from 'vue'
import type { ButtonProps, ButtonType } from '../button/types'
import type { TooltipPlacement, TooltipTrigger, TooltipArrow } from '../tooltip/types'

/** Popconfirm title/description/icon — text, VNode, or render function. */
export type PopconfirmContent = string | number | VNode | (() => VNode | string | number)

/** Subset of ButtonType allowed for `okType`. AntD adds the legacy `'danger'` shorthand. */
export type PopconfirmOkType = ButtonType | 'danger'

/**
 * Popconfirm 各部分的语义化 className
 */
export interface PopconfirmClassNames {
  /** 消息容器 div.hmfw-popconfirm-message */
  message?: string
  /** 图标容器 span.hmfw-popconfirm-message-icon */
  icon?: string
  /** 标题容器 div.hmfw-popconfirm-message-title */
  title?: string
  /** 描述文本 div.hmfw-popconfirm-description */
  description?: string
  /** 按钮组容器 div.hmfw-popconfirm-buttons */
  buttons?: string
  /** 取消按钮 */
  cancelBtn?: string
  /** 确定按钮 */
  okBtn?: string
}

/**
 * Popconfirm 各部分的语义化 style
 */
export interface PopconfirmStyles {
  /** 消息容器 div.hmfw-popconfirm-message */
  message?: CSSProperties
  /** 图标容器 span.hmfw-popconfirm-message-icon */
  icon?: CSSProperties
  /** 标题容器 div.hmfw-popconfirm-message-title */
  title?: CSSProperties
  /** 描述文本 div.hmfw-popconfirm-description */
  description?: CSSProperties
  /** 按钮组容器 div.hmfw-popconfirm-buttons */
  buttons?: CSSProperties
  /** 取消按钮 */
  cancelBtn?: CSSProperties
  /** 确定按钮 */
  okBtn?: CSSProperties
}

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
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  overlayStyle?: Record<string, string>
  overlayInnerStyle?: Record<string, string>
  /** 语义化 className */
  classNames?: PopconfirmClassNames
  /** 语义化 style */
  styles?: PopconfirmStyles
}
