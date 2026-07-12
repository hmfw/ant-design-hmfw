import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type BadgeStatus = 'success' | 'processing' | 'default' | 'error' | 'warning'
export type RibbonPlacement = 'start' | 'end'

/**
 * Badge 各部分的语义化 className
 */
export interface BadgeClassNames {
  /** 根容器 span.hmfw-badge */
  root?: string
  /** 数字/小红点徽标 sup.hmfw-badge-count（count、dot 模式） */
  indicator?: string
  /** 状态点 span.hmfw-badge-status-dot（status、独立 color 模式） */
  dot?: string
  /** 状态文本 span.hmfw-badge-status-text（status、独立 color 模式） */
  text?: string
}

/**
 * Badge 各部分的语义化 style
 */
export interface BadgeStyles {
  /** 根容器 span.hmfw-badge */
  root?: CSSProperties
  /** 数字/小红点徽标 sup.hmfw-badge-count（count、dot 模式） */
  indicator?: CSSProperties
  /** 状态点 span.hmfw-badge-status-dot（status、独立 color 模式） */
  dot?: CSSProperties
  /** 状态文本 span.hmfw-badge-status-text（status、独立 color 模式） */
  text?: CSSProperties
}

export interface BadgeProps {
  count?: number | string
  dot?: boolean
  showZero?: boolean
  overflowCount?: number
  status?: BadgeStatus
  color?: string
  text?: string
  size?: ComponentSize
  offset?: [number, number]
  title?: string
  /** 语义化 className */
  classNames?: BadgeClassNames
  /** 语义化 style */
  styles?: BadgeStyles
}

export interface RibbonProps {
  text?: string
  color?: string
  placement?: RibbonPlacement
}
