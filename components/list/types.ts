import type { VNode } from 'vue'

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
}

export interface ListItemProps {
  extra?: VNode
  actions?: VNode[]
}

export interface ListItemMetaProps {
  avatar?: VNode
  title?: string | VNode
  description?: string | VNode
}

export interface ListContextValue {
  grid?: ListGridType
  itemLayout?: ListItemLayout
}
