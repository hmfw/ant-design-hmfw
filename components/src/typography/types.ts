export type TypographyType = 'secondary' | 'success' | 'warning' | 'danger'

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
}

export interface TextProps extends BaseTypographyProps {}

export type TitleLevel = 1 | 2 | 3 | 4 | 5

export interface TitleProps extends BaseTypographyProps {
  level?: TitleLevel
}

export interface ParagraphProps extends BaseTypographyProps {}
