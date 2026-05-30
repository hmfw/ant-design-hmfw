import type { VNode } from 'vue'

export type StepStatus = 'wait' | 'process' | 'finish' | 'error'

export interface StepItem {
  title?: string | VNode
  /** @deprecated Please use `content` instead */
  description?: string | VNode
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

export interface StepsProps {
  current?: number
  initial?: number
  items?: StepItem[]
  /** @deprecated Please use `orientation` instead */
  direction?: 'horizontal' | 'vertical'
  orientation?: 'horizontal' | 'vertical'
  size?: 'default' | 'small'
  status?: StepStatus
  type?: 'default' | 'navigation' | 'inline' | 'panel' | 'dot'
  /** @deprecated Please use `titlePlacement` instead */
  labelPlacement?: 'horizontal' | 'vertical'
  titlePlacement?: 'horizontal' | 'vertical'
  /** @deprecated Please use `type="dot"` instead */
  progressDot?: boolean | ((iconDot: VNode, info: IconRenderInfo) => VNode)
  variant?: 'filled' | 'outlined'
  percent?: number
  responsive?: boolean
  ellipsis?: boolean
  offset?: number
  iconRender?: IconRenderType
  onChange?: (current: number) => void
}
