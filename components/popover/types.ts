import type { VNode } from 'vue'
import type { TooltipPlacement, TooltipTrigger, TooltipArrow } from '../tooltip/types'

/** Popover title/content can be plain text, VNode, or a render function. */
export type PopoverContent = string | number | VNode | (() => VNode | string | number)

/**
 * 语义化 DOM 的 className 配置（AntD v6.0.0）。
 * 目前支持 Popover 自身渲染的 `title` / `content` 两个语义节点。
 */
export interface PopoverClassNames {
  title?: string
  content?: string
}

/**
 * 语义化 DOM 的内联样式配置（AntD v6.0.0）。
 * 目前支持 Popover 自身渲染的 `title` / `content` 两个语义节点。
 */
export interface PopoverStyles {
  title?: Record<string, string>
  content?: Record<string, string>
}

export interface PopoverProps {
  title?: PopoverContent
  content?: PopoverContent
  placement?: TooltipPlacement
  trigger?: TooltipTrigger | TooltipTrigger[]
  open?: boolean
  defaultOpen?: boolean
  arrow?: TooltipArrow
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  disabled?: boolean
  overlayStyle?: Record<string, string>
  overlayInnerStyle?: Record<string, string>
  /** Auto-flip placement when popup would overflow the viewport. */
  autoAdjustOverflow?: boolean
  /** Custom z-index for the popup. */
  zIndex?: number
  /** Destroy popup DOM when hidden (AntD 5.25+). */
  destroyOnHidden?: boolean
  /** @deprecated Use `destroyOnHidden`. */
  destroyTooltipOnHide?: boolean
  /** Specify a function to provide a mount container for the popup. */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  /** Background color of the popover. */
  color?: string
  /** 各语义化 DOM 的自定义 className（AntD v6.0.0），支持对象或函数。 */
  classNames?: PopoverClassNames | ((info: { props: PopoverProps }) => PopoverClassNames)
  /** 各语义化 DOM 的自定义内联样式（AntD v6.0.0），支持对象或函数。 */
  styles?: PopoverStyles | ((info: { props: PopoverProps }) => PopoverStyles)
}
