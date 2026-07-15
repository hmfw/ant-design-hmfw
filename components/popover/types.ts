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

/** `openChange` 回调的附带信息，说明本次显隐由何处触发。 */
export interface PopoverOpenChangeInfo {
  /** `trigger` 表示由触发器交互引起，`popup` 表示由浮层内部交互引起。 */
  source: 'trigger' | 'popup'
}

/** `openChange` 事件回调签名。 */
export type PopoverOpenChangeHandler = (open: boolean, info: PopoverOpenChangeInfo) => void

/** `afterOpenChange` 事件回调签名（浮层显隐动画结束后触发）。 */
export type PopoverAfterOpenChangeHandler = (open: boolean) => void

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
  /** Specify a function to provide a mount container for the popup. */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  /** Background color of the popover. */
  color?: string
  /** 各语义化 DOM 的自定义 className（AntD v6.0.0），支持对象或函数。 */
  classNames?: PopoverClassNames | ((info: { props: PopoverProps }) => PopoverClassNames)
  /** 各语义化 DOM 的自定义内联样式（AntD v6.0.0），支持对象或函数。 */
  styles?: PopoverStyles | ((info: { props: PopoverProps }) => PopoverStyles)
}

/**
 * PopoverPurePanel Props（`_InternalPanelDoNotUseOrYouWillBeFired`）。
 * 仅渲染气泡卡片外观，不含触发与定位逻辑。
 */
export interface PopoverPurePanelProps {
  title?: PopoverContent
  content?: PopoverContent
  placement?: TooltipPlacement
  arrow?: TooltipArrow
  color?: string
  overlayInnerStyle?: Record<string, string>
  classNames?: PopoverClassNames | ((info: { props: Record<string, unknown> }) => PopoverClassNames)
  styles?: PopoverStyles | ((info: { props: Record<string, unknown> }) => PopoverStyles)
}
