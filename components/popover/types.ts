import type { VNode } from 'vue'
import type {
  TooltipPlacement,
  TooltipTrigger,
  TooltipArrow,
} from '../tooltip/types'

/** Popover title/content can be plain text, VNode, or a render function. */
export type PopoverContent = string | number | VNode | (() => VNode | string | number)

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
}
