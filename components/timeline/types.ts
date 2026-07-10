import type { CSSProperties, VNode } from 'vue'

export type TimelineMode = 'left' | 'right' | 'alternate' | 'start' | 'end'
export type TimelineOrientation = 'vertical' | 'horizontal'
export type TimelineVariant = 'filled' | 'outlined'
export type TimelineItemPlacement = 'start' | 'end'
export type TimelineItemColor = 'blue' | 'red' | 'green' | 'gray' | string

/**
 * Timeline 各部分的语义化 className
 */
export interface TimelineClassNames {
  /** 时间轴根容器 ul.hmfw-timeline */
  root?: string
  /** 时间轴项 li.hmfw-timeline-item */
  item?: string
  /** 标题/标签 div.hmfw-timeline-item-label */
  label?: string
  /** 连接线 div.hmfw-timeline-item-tail */
  tail?: string
  /** 时间节点/圆点 div.hmfw-timeline-item-head */
  dot?: string
  /** 内容区域 div.hmfw-timeline-item-content */
  content?: string
}

/**
 * Timeline 各部分的语义化 style
 */
export interface TimelineStyles {
  /** 时间轴根容器 ul.hmfw-timeline */
  root?: CSSProperties
  /** 时间轴项 li.hmfw-timeline-item */
  item?: CSSProperties
  /** 标题/标签 div.hmfw-timeline-item-label */
  label?: CSSProperties
  /** 连接线 div.hmfw-timeline-item-tail */
  tail?: CSSProperties
  /** 时间节点/圆点 div.hmfw-timeline-item-head */
  dot?: CSSProperties
  /** 内容区域 div.hmfw-timeline-item-content */
  content?: CSSProperties
}

export interface TimelineItemProps {
  title?: string | VNode
  content?: string | VNode
  icon?: string | VNode
  placement?: TimelineItemPlacement
  loading?: boolean

  // Common
  color?: TimelineItemColor
  className?: string
  style?: CSSProperties
  key?: string | number
}

export interface TimelineProps {
  items?: TimelineItemProps[]
  mode?: TimelineMode
  orientation?: TimelineOrientation
  variant?: TimelineVariant
  reverse?: boolean
  titleSpan?: number | string

  /** 语义化 className */
  classNames?: TimelineClassNames
  /** 语义化 style */
  styles?: TimelineStyles
}
