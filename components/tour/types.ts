import type { TooltipPlacement } from '../tooltip/types'

export interface TourStep {
  title?: string
  description?: string
  target?: string | (() => HTMLElement | null)
  placement?: TooltipPlacement
  nextButtonProps?: { children?: string; onClick?: () => void }
  prevButtonProps?: { children?: string; onClick?: () => void }
  cover?: string
}

export interface TourProps {
  open?: boolean
  defaultOpen?: boolean
  current?: number
  defaultCurrent?: number
  steps?: TourStep[]
  arrow?: boolean
  mask?: boolean
  type?: 'default' | 'primary'
}
