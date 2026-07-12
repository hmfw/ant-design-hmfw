import type { VNode, CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

export interface StepItem {
  title?: string | VNode
  content?: string | VNode
  subTitle?: string | VNode
  status?: StepStatus
  icon?: VNode
  disabled?: boolean
  onClick?: (e: MouseEvent) => void
}

export interface IconRenderInfo {
  index: number
  active: boolean
  item: StepItem & { status: StepStatus }
}

export type IconRenderType = (oriNode: VNode, info: IconRenderInfo) => VNode

/**
 * Steps 各部分的语义化 className
 */
export interface StepsClassNames {
  /** 根节点 div.hmfw-steps */
  root?: string
  /** 步骤项 div.hmfw-steps-item */
  item?: string
  /** 步骤项 header div.hmfw-steps-item-header */
  header?: string
  /** 步骤连接线 div.hmfw-steps-item-tail */
  tail?: string
  /** 步骤图标容器 div.hmfw-steps-item-icon */
  icon?: string
  /** 步骤内容容器 div.hmfw-steps-item-content */
  content?: string
  /** 步骤标题 div.hmfw-steps-item-title */
  title?: string
  /** 步骤副标题 span.hmfw-steps-item-subtitle */
  subtitle?: string
  /** 步骤描述 div.hmfw-steps-item-description */
  description?: string
}

/**
 * Steps 各部分的语义化 style
 */
export interface StepsStyles {
  /** 根节点 div.hmfw-steps */
  root?: CSSProperties
  /** 步骤项 div.hmfw-steps-item */
  item?: CSSProperties
  /** 步骤项 header div.hmfw-steps-item-header */
  header?: CSSProperties
  /** 步骤连接线 div.hmfw-steps-item-tail */
  tail?: CSSProperties
  /** 步骤图标容器 div.hmfw-steps-item-icon */
  icon?: CSSProperties
  /** 步骤内容容器 div.hmfw-steps-item-content */
  content?: CSSProperties
  /** 步骤标题 div.hmfw-steps-item-title */
  title?: CSSProperties
  /** 步骤副标题 span.hmfw-steps-item-subtitle */
  subtitle?: CSSProperties
  /** 步骤描述 div.hmfw-steps-item-description */
  description?: CSSProperties
}

export interface StepsProps {
  current?: number
  initial?: number
  items?: StepItem[]
  orientation?: 'horizontal' | 'vertical'
  size?: ComponentSize
  status?: StepStatus
  type?: 'default' | 'inline' | 'dot'
  titlePlacement?: 'horizontal' | 'vertical'
  variant?: 'filled' | 'outlined'
  /** @todo 响应式自动切换方向（小屏 → 垂直），待实现 */
  responsive?: boolean
  ellipsis?: boolean
  iconRender?: IconRenderType
  /** 语义化 className */
  classNames?: StepsClassNames
  /** 语义化 style */
  styles?: StepsStyles
}
