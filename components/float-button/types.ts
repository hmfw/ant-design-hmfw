import type { CSSProperties } from 'vue'
import type { IconComponent } from '@hmfw/icons'

export type FloatButtonType = 'default' | 'primary'
export type FloatButtonShape = 'circle' | 'square'
export type FloatButtonHTMLType = 'submit' | 'reset' | 'button'
export type FloatButtonTrigger = 'click' | 'hover'
export type FloatButtonGroupPlacement = 'top' | 'right' | 'bottom' | 'left'

/** Badge config accepted by FloatButton. Mirrors a subset of BadgeProps. */
export interface FloatButtonBadgeProps {
  count?: number | string
  dot?: boolean
  overflowCount?: number
  color?: string
  offset?: [number, number]
}

/**
 * FloatButton 各部分的语义化 className
 */
export interface FloatButtonClassNames {
  /** 根节点 button.hmfw-float-btn / a.hmfw-float-btn */
  root?: string
  /** 主体容器 div.hmfw-float-btn-body */
  body?: string
  /** 图标容器 div.hmfw-float-btn-icon */
  icon?: string
  /** 文本内容容器 div.hmfw-float-btn-content */
  content?: string
}

/**
 * FloatButton 各部分的语义化 style
 */
export interface FloatButtonStyles {
  /** 根节点 button.hmfw-float-btn / a.hmfw-float-btn */
  root?: CSSProperties
  /** 主体容器 div.hmfw-float-btn-body */
  body?: CSSProperties
  /** 图标容器 div.hmfw-float-btn-icon */
  icon?: CSSProperties
  /** 文本内容容器 div.hmfw-float-btn-content */
  content?: CSSProperties
}

export interface FloatButtonProps {
  /** Set the button type */
  type?: FloatButtonType
  /** Set the button shape */
  shape?: FloatButtonShape
  /** Custom icon */
  icon?: IconComponent | string
  /** @deprecated Use `content` instead. */
  description?: string
  /** Text and other content (only shown for square shape) */
  content?: string
  /** The text shown in the tooltip on hover (string or full TooltipProps) */
  tooltip?: string | Record<string, any>
  /** Attach a Badge to the button */
  badge?: FloatButtonBadgeProps
  /** The jump address of the hyperlink — renders as <a> */
  href?: string
  /** Specifies where to display the linked URL */
  target?: string
  /** Set the original html `type` of the button element */
  htmlType?: FloatButtonHTMLType
  /** Whether the button is disabled */
  disabled?: boolean
  /** 语义化 className */
  classNames?: FloatButtonClassNames
  /** 语义化 style */
  styles?: FloatButtonStyles
}

export interface FloatButtonGroupProps {
  /** Set the children buttons' shape */
  shape?: FloatButtonShape
  /** Set the trigger button type */
  type?: FloatButtonType
  /** Which action triggers the menu open. When unset all buttons are shown */
  trigger?: FloatButtonTrigger
  /** Customize menu animation placement */
  placement?: FloatButtonGroupPlacement
  /** Controlled open state of the menu */
  open?: boolean
  /** Uncontrolled default open state */
  defaultOpen?: boolean
  /** Custom close icon shown when the menu is open */
  closeIcon?: IconComponent | string
  /** Custom trigger icon shown when the menu is closed */
  icon?: IconComponent | string
  /** Tooltip of the trigger button (string or full TooltipProps) */
  tooltip?: string | Record<string, any>
  /** Badge of the trigger button */
  badge?: FloatButtonBadgeProps
  /** Description of the trigger button (square shape) */
  description?: string
}

export interface FloatButtonBackTopProps {
  /** The scroll height at which the button appears */
  visibilityHeight?: number
  /** Specify the scrollable area the listener is attached to */
  target?: () => HTMLElement | Window | Document
  /** Time to scroll to the top, in ms */
  duration?: number
  /** Custom icon */
  icon?: IconComponent | string
  /** Set the button type */
  type?: FloatButtonType
  /** Set the button shape */
  shape?: FloatButtonShape
  /** Tooltip content (string or full TooltipProps) */
  tooltip?: string | Record<string, any>
  /** @deprecated Use `content` instead. */
  description?: string
  /** Text and other content (square shape) */
  content?: string
}
