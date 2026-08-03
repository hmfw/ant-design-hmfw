import type { VNode, CSSProperties } from 'vue'
import type { TooltipPlacement } from '../tooltip/types'
import type { ButtonProps } from '../button/types'

/** 引导卡片方位。`center` 用于无目标元素时居中展示（对齐 AntD）。 */
export type TourPlacement = TooltipPlacement | 'center'

/** 可渲染内容：纯文本、数字、VNode 或返回上述内容的渲染函数 */
export type TourRenderable = string | number | VNode | (() => VNode | string | number)

/** 箭头配置。`boolean` 控制显隐，对象形式用于 `pointAtCenter`。 */
export type TourArrow = boolean | { pointAtCenter?: boolean }

/** 遮罩配置。`boolean` 控制显隐，对象形式用于自定义填充色与样式。 */
export type TourMask = boolean | { style?: CSSProperties; color?: string }

/**
 * 高亮区域配置。
 * - `offset`：高亮区域相对目标元素的外扩边距，`number` 为四向统一，`[x, y]` 分别指定水平/垂直，默认 `6`
 * - `radius`：高亮区域圆角，默认 `2`
 */
export interface TourGap {
  offset?: number | [number, number]
  radius?: number
}

export interface TourButtonProps extends Omit<ButtonProps, 'onClick'> {
  children?: string | VNode
  onClick?: () => void
}

export interface TourStep {
  title?: TourRenderable
  description?: TourRenderable
  /** 目标元素：CSS 选择器、DOM 节点、Vue 组件实例，或返回上述值的函数。为空时卡片居中展示。 */
  target?: string | HTMLElement | (() => HTMLElement | null | undefined | any)
  placement?: TourPlacement
  /** 是否显示箭头，优先级高于 Tour 的 `arrow` */
  arrow?: TourArrow
  nextButtonProps?: TourButtonProps
  prevButtonProps?: TourButtonProps
  cover?: TourRenderable
  type?: 'default' | 'primary'
  mask?: TourMask
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
  /** 箭头 div.hmfw-tour-arrow */
  arrow?: string
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
  /** 箭头 div.hmfw-tour-arrow */
  arrow?: CSSProperties
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

/**
 * 步骤改变事件回调
 */
export type TourChangeHandler = (current: number) => void

/**
 * 关闭事件回调
 */
export type TourCloseHandler = () => void

/**
 * 完成事件回调（最后一步点击下一步时触发）
 */
export type TourFinishHandler = () => void

export interface TourProps {
  open?: boolean
  defaultOpen?: boolean
  current?: number
  defaultCurrent?: number
  steps?: TourStep[]
  arrow?: TourArrow
  placement?: TourPlacement
  mask?: TourMask
  type?: 'default' | 'primary'
  scrollIntoViewOptions?: boolean | ScrollIntoViewOptions
  zIndex?: number
  gap?: TourGap
  /** 禁用高亮区域的交互。默认 `false` —— 高亮元素可正常点击（对齐 AntD） */
  disabledInteraction?: boolean
  indicatorsRender?: (current: number, total: number) => VNode | string | number
  closeIcon?: VNode | (() => VNode) | false
  keyboard?: boolean
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
  /** 语义化 className */
  classNames?: TourClassNames
  /** 语义化 style */
  styles?: TourStyles
}
