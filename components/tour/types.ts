import type { VNode, CSSProperties } from 'vue'
import type { TooltipPlacement } from '../tooltip/types'
import type { ButtonProps } from '../button/types'

export type TourPlacement = TooltipPlacement

export interface TourButtonProps extends Omit<ButtonProps, 'onClick'> {
  children?: string | VNode
  onClick?: () => void
}

export interface TourStep {
  title?: string | VNode | (() => VNode)
  description?: string | VNode | (() => VNode)
  target?: string | (() => HTMLElement | null)
  placement?: TourPlacement
  nextButtonProps?: TourButtonProps
  prevButtonProps?: TourButtonProps
  cover?: string | VNode
  type?: 'default' | 'primary'
  mask?: boolean | { style?: CSSProperties; color?: string }
  style?: CSSProperties
  className?: string
  scrollIntoViewOptions?: boolean | ScrollIntoViewOptions
}

export interface TourProps {
  open?: boolean
  defaultOpen?: boolean
  current?: number
  defaultCurrent?: number
  steps?: TourStep[]
  arrow?: boolean | { pointAtCenter?: boolean }
  placement?: TourPlacement
  mask?: boolean | { style?: CSSProperties; color?: string }
  type?: 'default' | 'primary'
  scrollIntoViewOptions?: boolean | ScrollIntoViewOptions
  zIndex?: number
  gap?: { offset?: number | [number, number]; radius?: number }
  indicatorsRender?: (current: number, total: number) => VNode
  closeIcon?: VNode | (() => VNode) | false
}
