import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

/**
 * Badge 和 Ribbon 支持的预设颜色
 * 这些颜色会映射到 CSS 类名，避免内联样式
 */
export const PRESET_COLORS = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
] as const

export type PresetColor = (typeof PRESET_COLORS)[number]

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
  /** 显示的数字或文本，0 时默认隐藏（除非 showZero） */
  count?: number | string
  /** 显示为小红点，优先级高于 count */
  dot?: boolean
  /** count 为 0 时是否显示 */
  showZero?: boolean
  /** 数字超过此值显示为 `${overflowCount}+`，默认 99 */
  overflowCount?: number
  /** 状态点模式，不需要包裹子元素 */
  status?: BadgeStatus
  /** 自定义颜色，支持预设颜色名或 RGB/HEX */
  color?: PresetColor | string
  /** 状态点或独立徽标的附加文本 */
  text?: string
  /** 徽标尺寸，影响数字徽标的大小 */
  size?: ComponentSize
  /** 徽标位置偏移 [x, y]，正数向右/下偏移 */
  offset?: [number, number]
  /** 鼠标悬停时显示的标题 */
  title?: string
  /** 语义化 className */
  classNames?: BadgeClassNames
  /** 语义化 style */
  styles?: BadgeStyles
}

export interface RibbonProps {
  /** 缎带文本 */
  text?: string
  /** 缎带颜色，支持预设颜色名或 RGB/HEX */
  color?: PresetColor | string
  /** 缎带位置：start（左上）或 end（右上） */
  placement?: RibbonPlacement
}
