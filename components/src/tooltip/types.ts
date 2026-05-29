export type TooltipPlacement =
  | 'top' | 'topLeft' | 'topRight'
  | 'bottom' | 'bottomLeft' | 'bottomRight'
  | 'left' | 'leftTop' | 'leftBottom'
  | 'right' | 'rightTop' | 'rightBottom'

export type TooltipTrigger = 'hover' | 'click' | 'focus' | 'contextMenu'

export interface TooltipProps {
  title?: string
  placement?: TooltipPlacement
  trigger?: TooltipTrigger | TooltipTrigger[]
  open?: boolean
  defaultOpen?: boolean
  color?: string
  arrow?: boolean
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  disabled?: boolean
  destroyTooltipOnHide?: boolean
}
