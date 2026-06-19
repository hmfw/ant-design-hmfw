import type { CSSProperties } from 'vue'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface DescriptionsItemProps {
  label?: string
  children?: unknown
  span?: number | 'filled' | Partial<Record<Breakpoint, number>>
  labelStyle?: CSSProperties
  contentStyle?: CSSProperties
}

/**
 * Descriptions 各部分的语义化 className
 */
export interface DescriptionsClassNames {
  /** 根节点 div.hmfw-descriptions */
  root?: string
  /** 头部容器 div.hmfw-descriptions-header */
  header?: string
  /** 标题 div.hmfw-descriptions-title */
  title?: string
  /** 右侧扩展 div.hmfw-descriptions-extra */
  extra?: string
  /** 视图容器 div.hmfw-descriptions-view */
  view?: string
  /** 行 tr.hmfw-descriptions-row */
  row?: string
  /** 项容器 td.hmfw-descriptions-item（水平无边框布局） */
  item?: string
  /** 项内部容器 div.hmfw-descriptions-item-container（水平无边框布局） */
  itemContainer?: string
  /** 标签 th/td/span.hmfw-descriptions-item-label */
  label?: string
  /** 内容 td/span.hmfw-descriptions-item-content */
  content?: string
}

/**
 * Descriptions 各部分的语义化 style
 */
export interface DescriptionsStyles {
  /** 根节点 div.hmfw-descriptions */
  root?: CSSProperties
  /** 头部容器 div.hmfw-descriptions-header */
  header?: CSSProperties
  /** 标题 div.hmfw-descriptions-title */
  title?: CSSProperties
  /** 右侧扩展 div.hmfw-descriptions-extra */
  extra?: CSSProperties
  /** 视图容器 div.hmfw-descriptions-view */
  view?: CSSProperties
  /** 行 tr.hmfw-descriptions-row */
  row?: CSSProperties
  /** 项容器 td.hmfw-descriptions-item（水平无边框布局） */
  item?: CSSProperties
  /** 项内部容器 div.hmfw-descriptions-item-container（水平无边框布局） */
  itemContainer?: CSSProperties
  /** 标签 th/td/span.hmfw-descriptions-item-label */
  label?: CSSProperties
  /** 内容 td/span.hmfw-descriptions-item-content */
  content?: CSSProperties
}

export interface DescriptionsProps {
  title?: string
  extra?: string
  bordered?: boolean
  column?: number | Partial<Record<Breakpoint, number>>
  size?: 'default' | 'middle' | 'small' | 'medium'
  layout?: 'horizontal' | 'vertical'
  colon?: boolean
  items?: DescriptionsItemProps[]
  labelStyle?: CSSProperties
  contentStyle?: CSSProperties
  /** 语义化 className */
  classNames?: DescriptionsClassNames
  /** 语义化 style */
  styles?: DescriptionsStyles
}
