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

/**
 * Tour 各部分的语义化 className
 */
export interface TourClassNames {
  /** 根容器 div.hmfw-tour-root */
  root?: string
  /** 遮罩层 div.hmfw-tour-mask */
  mask?: string
  /** 弹出卡片 div.hmfw-tour-popover */
  popover?: string
  /** 卡片内层 div.hmfw-tour-popover-inner */
  popoverInner?: string
  /** 关闭按钮 button.hmfw-tour-close */
  close?: string
  /** 封面图片区域 div.hmfw-tour-cover */
  cover?: string
  /** 标题 div.hmfw-tour-title */
  title?: string
  /** 描述文本 div.hmfw-tour-description */
  description?: string
  /** 底部区域 div.hmfw-tour-footer */
  footer?: string
  /** 指示器容器 div.hmfw-tour-indicators */
  indicators?: string
  /** 单个指示器点 span.hmfw-tour-indicator */
  indicator?: string
  /** 按钮组 div.hmfw-tour-buttons */
  buttons?: string
  /** 上一步按钮 button.hmfw-tour-prev-btn */
  prevBtn?: string
  /** 下一步/完成按钮 button.hmfw-tour-next-btn */
  nextBtn?: string
}

/**
 * Tour 各部分的语义化 style
 */
export interface TourStyles {
  /** 根容器 div.hmfw-tour-root */
  root?: CSSProperties
  /** 遮罩层 div.hmfw-tour-mask */
  mask?: CSSProperties
  /** 弹出卡片 div.hmfw-tour-popover */
  popover?: CSSProperties
  /** 卡片内层 div.hmfw-tour-popover-inner */
  popoverInner?: CSSProperties
  /** 关闭按钮 button.hmfw-tour-close */
  close?: CSSProperties
  /** 封面图片区域 div.hmfw-tour-cover */
  cover?: CSSProperties
  /** 标题 div.hmfw-tour-title */
  title?: CSSProperties
  /** 描述文本 div.hmfw-tour-description */
  description?: CSSProperties
  /** 底部区域 div.hmfw-tour-footer */
  footer?: CSSProperties
  /** 指示器容器 div.hmfw-tour-indicators */
  indicators?: CSSProperties
  /** 单个指示器点 span.hmfw-tour-indicator */
  indicator?: CSSProperties
  /** 按钮组 div.hmfw-tour-buttons */
  buttons?: CSSProperties
  /** 上一步按钮 button.hmfw-tour-prev-btn */
  prevBtn?: CSSProperties
  /** 下一步/完成按钮 button.hmfw-tour-next-btn */
  nextBtn?: CSSProperties
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
  /** 语义化 className */
  classNames?: TourClassNames
  /** 语义化 style */
  styles?: TourStyles
}
