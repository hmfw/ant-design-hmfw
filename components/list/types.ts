import type { VNode, CSSProperties } from 'vue'

export type ListSize = 'small' | 'default' | 'large'
export type ListItemLayout = 'horizontal' | 'vertical'

export interface ListGridType {
  gutter?: number | [number, number]
  column?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export interface PaginationConfig {
  current?: number
  pageSize?: number
  total?: number
  defaultCurrent?: number
  defaultPageSize?: number
  position?: 'top' | 'bottom' | 'both'
  align?: 'start' | 'center' | 'end'
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current: number, size: number) => void
}

/**
 * List 各部分的语义化 className
 */
export interface ListClassNames {
  /** 根容器 div.hmfw-list */
  root?: string
  /** 头部区域 div.hmfw-list-header */
  header?: string
  /** 底部区域 div.hmfw-list-footer */
  footer?: string
  /** 列表容器 ul.hmfw-list-items 或 div.hmfw-list-container（grid 模式） */
  items?: string
  /** 空状态容器 div.hmfw-list-empty-text */
  empty?: string
  /** 分页器容器 div.hmfw-list-pagination */
  pagination?: string
}

/**
 * List 各部分的语义化 style
 */
export interface ListStyles {
  /** 根容器 div.hmfw-list */
  root?: CSSProperties
  /** 头部区域 div.hmfw-list-header */
  header?: CSSProperties
  /** 底部区域 div.hmfw-list-footer */
  footer?: CSSProperties
  /** 列表容器 ul.hmfw-list-items 或 div.hmfw-list-container（grid 模式） */
  items?: CSSProperties
  /** 空状态容器 div.hmfw-list-empty-text */
  empty?: CSSProperties
  /** 分页器容器 div.hmfw-list-pagination */
  pagination?: CSSProperties
}

/**
 * ListItem 各部分的语义化 className
 */
export interface ListItemClassNames {
  /** 列表项根节点 li.hmfw-list-item 或 div.hmfw-list-item（grid 模式） */
  item?: string
  /** 主内容区域 div.hmfw-list-item-main（垂直布局时） */
  main?: string
  /** 额外内容 div.hmfw-list-item-extra */
  extra?: string
  /** 操作列表 ul.hmfw-list-item-action */
  action?: string
  /** 操作分隔符 em.hmfw-list-item-action-split */
  actionSplit?: string
}

/**
 * ListItem 各部分的语义化 style
 */
export interface ListItemStyles {
  /** 列表项根节点 li.hmfw-list-item 或 div.hmfw-list-item（grid 模式） */
  item?: CSSProperties
  /** 主内容区域 div.hmfw-list-item-main（垂直布局时） */
  main?: CSSProperties
  /** 额外内容 div.hmfw-list-item-extra */
  extra?: CSSProperties
  /** 操作列表 ul.hmfw-list-item-action */
  action?: CSSProperties
  /** 操作分隔符 em.hmfw-list-item-action-split */
  actionSplit?: CSSProperties
}

/**
 * ListItemMeta 各部分的语义化 className
 */
export interface ListItemMetaClassNames {
  /** Meta 根容器 div.hmfw-list-item-meta */
  meta?: string
  /** 头像容器 div.hmfw-list-item-meta-avatar */
  avatar?: string
  /** 内容容器 div.hmfw-list-item-meta-content */
  content?: string
  /** 标题 h4.hmfw-list-item-meta-title */
  title?: string
  /** 描述 div.hmfw-list-item-meta-description */
  description?: string
}

/**
 * ListItemMeta 各部分的语义化 style
 */
export interface ListItemMetaStyles {
  /** Meta 根容器 div.hmfw-list-item-meta */
  meta?: CSSProperties
  /** 头像容器 div.hmfw-list-item-meta-avatar */
  avatar?: CSSProperties
  /** 内容容器 div.hmfw-list-item-meta-content */
  content?: CSSProperties
  /** 标题 h4.hmfw-list-item-meta-title */
  title?: CSSProperties
  /** 描述 div.hmfw-list-item-meta-description */
  description?: CSSProperties
}

export interface ListProps<T = any> {
  dataSource?: T[]
  renderItem?: (item: T, index: number) => VNode | null
  header?: string | VNode
  footer?: string | VNode
  bordered?: boolean
  size?: ListSize
  split?: boolean
  loading?: boolean | { spinning?: boolean; delay?: number }
  locale?: { emptyText?: string | VNode }
  pagination?: boolean | PaginationConfig
  grid?: ListGridType
  itemLayout?: ListItemLayout
  rowKey?: string | ((item: T) => string | number)
  loadMore?: VNode
  virtual?: boolean
  height?: number | string
  itemHeight?: number
  /** 语义化 className */
  classNames?: ListClassNames
  /** 语义化 style */
  styles?: ListStyles
}

export interface ListItemProps {
  extra?: VNode
  actions?: VNode[]
  /** 语义化 className */
  classNames?: ListItemClassNames
  /** 语义化 style */
  styles?: ListItemStyles
}

export interface ListItemMetaProps {
  avatar?: VNode
  title?: string | VNode
  description?: string | VNode
  /** 语义化 className */
  classNames?: ListItemMetaClassNames
  /** 语义化 style */
  styles?: ListItemMetaStyles
}

export interface ListContextValue {
  grid?: ListGridType
  itemLayout?: ListItemLayout
}
