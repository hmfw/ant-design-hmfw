import type { VNode } from 'vue'

export type TooltipPlacement =
  | 'top' | 'topLeft' | 'topRight'
  | 'bottom' | 'bottomLeft' | 'bottomRight'
  | 'left' | 'leftTop' | 'leftBottom'
  | 'right' | 'rightTop' | 'rightBottom'

export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'contextMenu'

/** AntD v6 arrow config — `boolean` for show/hide, object for `pointAtCenter`. */
export type TooltipArrow = boolean | { pointAtCenter?: boolean }

/** Title can be plain text, VNode, or a render function (matching AntD `RenderFunction`). */
export type TooltipTitle = string | number | VNode | (() => VNode | string | number)

export interface TooltipProps {
  title?: TooltipTitle
  /** AntD legacy alias for `title`; same behavior. */
  overlay?: TooltipTitle
  placement?: TooltipPlacement
  trigger?: TooltipTrigger | TooltipTrigger[]
  open?: boolean
  defaultOpen?: boolean
  color?: string
  arrow?: TooltipArrow
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  disabled?: boolean
  /** @deprecated Use `destroyOnHidden` (AntD 5.25+ rename). */
  destroyTooltipOnHide?: boolean
  /** Destroy popup DOM when hidden (AntD 5.25+). */
  destroyOnHidden?: boolean
  /** Auto-flip placement when popup would overflow the viewport. */
  autoAdjustOverflow?: boolean
  /** Custom z-index for the popup. */
  zIndex?: number
  /** Specify a function to provide a mount container for the popup. */
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement
  /** 强制重新计算位置的标记，当该值变化时触发位置更新（适用于触发元素位置动态变化的场景）。 */
  fresh?: boolean | number
}
