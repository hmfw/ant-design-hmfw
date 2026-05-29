import type { TooltipPlacement, TooltipTrigger } from '../tooltip/types'

export interface PopoverProps {
  title?: string
  content?: string
  placement?: TooltipPlacement
  trigger?: TooltipTrigger | TooltipTrigger[]
  open?: boolean
  defaultOpen?: boolean
  arrow?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  disabled?: boolean
  overlayStyle?: Record<string, string>
  overlayInnerStyle?: Record<string, string>
}
