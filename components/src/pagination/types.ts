export type PaginationSize = 'default' | 'small'

export interface PaginationProps {
  current?: number
  defaultCurrent?: number
  total?: number
  pageSize?: number
  defaultPageSize?: number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: (total: number, range: [number, number]) => string
  size?: PaginationSize
  simple?: boolean
  disabled?: boolean
  hideOnSinglePage?: boolean
}
