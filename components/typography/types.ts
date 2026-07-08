import type { CSSProperties, VNode } from 'vue'
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
  icon?: [VNode, VNode]
}

/**
 * ellipsis.tooltip 配置：
 * - true 使用纯文本 tooltip 显示完整内容
 * - 字符串/VNode 自定义 tooltip 内容
 * - 对象形式可传入完整的 Tooltip props（如 placement、color 等）
 */
export type EllipsisTooltipConfig =
  boolean | string | number | ({ title?: TooltipProps['title'] } & Omit<TooltipProps, 'title'>)

export interface EllipsisConfig {
  /** 最多显示的行数，超出省略 */
  rows?: number
  /** 省略时显示 tooltip，可传入自定义配置 */
  tooltip?: EllipsisTooltipConfig
  /** 省略状态变化回调（true 表示触发省略） */
  onEllipsis?: (ellipsis: boolean) => void
}

/**
 * Text 组件各部分的语义化 className
 */
export interface TextClassNames {
  /** 根节点 span.hmfw-typography */
  root?: string
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: string
}

/**
 * Text 组件各部分的语义化 style
 */
export interface TextStyles {
  /** 根节点 span.hmfw-typography */
  root?: CSSProperties
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: CSSProperties
}

/**
 * Title 组件各部分的语义化 className
 */
export interface TitleClassNames {
  /** 根节点 h1-h5.hmfw-typography */
  root?: string
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: string
}

/**
 * Title 组件各部分的语义化 style
 */
export interface TitleStyles {
  /** 根节点 h1-h5.hmfw-typography */
  root?: CSSProperties
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: CSSProperties
}

/**
 * Paragraph 组件各部分的语义化 className
 */
export interface ParagraphClassNames {
  /** 根节点 p.hmfw-typography */
  root?: string
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: string
}

/**
 * Paragraph 组件各部分的语义化 style
 */
export interface ParagraphStyles {
  /** 根节点 p.hmfw-typography */
  root?: CSSProperties
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: CSSProperties
}

/**
 * Link 组件各部分的语义化 className
 */
export interface LinkClassNames {
  /** 根节点 a.hmfw-typography-link */
  root?: string
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: string
}

/**
 * Link 组件各部分的语义化 style
 */
export interface LinkStyles {
  /** 根节点 a.hmfw-typography-link */
  root?: CSSProperties
  /** 复制按钮 button.hmfw-typography-copy */
  copy?: CSSProperties
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
  /** 各组件可窄化为自身 ClassNames 类型 */
  classNames?: { root?: string; copy?: string }
  /** 各组件可窄化为自身 Styles 类型 */
  styles?: { root?: CSSProperties; copy?: CSSProperties }
}

export interface TextProps extends BaseTypographyProps {
  /** 语义化 className */
  classNames?: TextClassNames
  /** 语义化 style */
  styles?: TextStyles
}

export type TitleLevel = 1 | 2 | 3 | 4 | 5

export interface TitleProps extends BaseTypographyProps {
  level?: TitleLevel
  /** 语义化 className */
  classNames?: TitleClassNames
  /** 语义化 style */
  styles?: TitleStyles
}

export interface ParagraphProps extends BaseTypographyProps {
  /** 语义化 className */
  classNames?: ParagraphClassNames
  /** 语义化 style */
  styles?: ParagraphStyles
}

export interface LinkProps extends BaseTypographyProps {
  href?: string
  target?: string
  /** 语义化 className */
  classNames?: LinkClassNames
  /** 语义化 style */
  styles?: LinkStyles
}
