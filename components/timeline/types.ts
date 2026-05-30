import type { CSSProperties, VNode } from 'vue'

export type TimelineMode = 'left' | 'right' | 'alternate' | 'start' | 'end'
export type TimelineOrientation = 'vertical' | 'horizontal'
export type TimelineVariant = 'filled' | 'outlined'
export type TimelineItemPlacement = 'start' | 'end'
export type TimelineItemColor = 'blue' | 'red' | 'green' | 'gray' | string

export interface TimelineItemProps {
  // Primary API (v6)
  title?: string | VNode
  content?: string | VNode
  icon?: string | VNode
  placement?: TimelineItemPlacement
  loading?: boolean

  // Deprecated API (v6 legacy, still supported)
  label?: string | VNode
  children?: unknown
  dot?: string | VNode
  position?: 'left' | 'right'

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

  // Deprecated (v6 legacy)
  pending?: boolean | string | VNode
  pendingDot?: string | VNode
}
