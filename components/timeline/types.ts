import type { CSSProperties, VNode } from 'vue'

export type TimelineMode = 'left' | 'right' | 'alternate' | 'start' | 'end'
export type TimelineOrientation = 'vertical' | 'horizontal'
export type TimelineVariant = 'filled' | 'outlined'
export type TimelineItemPlacement = 'start' | 'end'
export type TimelineItemColor = 'blue' | 'red' | 'green' | 'gray' | string

/**
 * Timeline 各部分的语义化 className（键名与 Ant Design v6 对齐）
 */
export interface TimelineClassNames {
  /** 时间轴根容器 ul.hmfw-timeline */
  root?: string
  /** 时间轴项 li.hmfw-timeline-item */
  item?: string
  /** 节点标题 div.hmfw-timeline-item-title */
  itemTitle?: string
  /** 连接线 div.hmfw-timeline-item-rail */
  itemRail?: string
  /** 节点图标/圆点 div.hmfw-timeline-item-icon */
  itemIcon?: string
  /** 节点内容 div.hmfw-timeline-item-content */
  itemContent?: string
}

/**
 * Timeline 各部分的语义化 style（键名与 Ant Design v6 对齐）
 */
export interface TimelineStyles {
  /** 时间轴根容器 ul.hmfw-timeline */
  root?: CSSProperties
  /** 时间轴项 li.hmfw-timeline-item */
  item?: CSSProperties
  /** 节点标题 div.hmfw-timeline-item-title */
  itemTitle?: CSSProperties
  /** 连接线 div.hmfw-timeline-item-rail */
  itemRail?: CSSProperties
  /** 节点图标/圆点 div.hmfw-timeline-item-icon */
  itemIcon?: CSSProperties
  /** 节点内容 div.hmfw-timeline-item-content */
  itemContent?: CSSProperties
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
