import type { TooltipProps } from '../tooltip'

export type TypographyType = 'secondary' | 'success' | 'warning' | 'danger'

export interface CopyableConfig {
  /** 自定义复制内容，默认取节点文本 */
  text?: string
  /** 复制成功回调 */
  onCopy?: (e: MouseEvent) => void
  /** 复制按钮的 tooltip 文案 [复制前, 复制后]，默认从 locale 取 */
  tooltips?: false | [string, string]
  /** 复制按钮的图标 [复制前, 复制后] */
  icon?: [any, any]
}

/**
 * ellipsis.tooltip 配置：
 * - true 使用纯文本 tooltip 显示完整内容
 * - 字符串/VNode 自定义 tooltip 内容
 * - 对象形式可传入完整的 Tooltip props（如 placement、color 等）
 */
export type EllipsisTooltipConfig =
  | boolean
  | string
  | number
  | { title?: TooltipProps['title'] } & Omit<TooltipProps, 'title'>

export interface EllipsisConfig {
  /** 最多显示的行数，超出省略 */
  rows?: number
  /** 省略时显示 tooltip，可传入自定义配置 */
  tooltip?: EllipsisTooltipConfig
  /** 省略状态变化回调（true 表示触发省略） */
  onEllipsis?: (ellipsis: boolean) => void
}

export interface BaseTypographyProps {
  type?: TypographyType
  disabled?: boolean
  mark?: boolean
  code?: boolean
  keyboard?: boolean
  underline?: boolean
  delete?: boolean
  strong?: boolean
  italic?: boolean
  /** 是否可复制 */
  copyable?: boolean | CopyableConfig
  /** 省略：true 单行省略，或 { rows, tooltip, onEllipsis } 完整配置 */
  ellipsis?: boolean | EllipsisConfig
}

export interface TextProps extends BaseTypographyProps {}

export type TitleLevel = 1 | 2 | 3 | 4 | 5

export interface TitleProps extends BaseTypographyProps {
  level?: TitleLevel
}

export interface ParagraphProps extends BaseTypographyProps {}

export interface LinkProps extends BaseTypographyProps {
  href?: string
  target?: string
}
