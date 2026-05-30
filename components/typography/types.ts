export type TypographyType = 'secondary' | 'success' | 'warning' | 'danger'

export interface CopyableConfig {
  /** 自定义复制内容，默认取节点文本 */
  text?: string
  /** 复制成功回调 */
  onCopy?: (e: MouseEvent) => void
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
  /** 单行省略 */
  ellipsis?: boolean
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
