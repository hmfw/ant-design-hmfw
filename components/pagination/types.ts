import type { VNode } from 'vue'

export type PaginationSize = 'default' | 'small'

export type ItemRenderFn = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
  originalElement: VNode,
) => VNode

export interface PaginationProps {
  current?: number
  defaultCurrent?: number
  total?: number
  pageSize?: number
  defaultPageSize?: number
  pageSizeOptions?: number[]
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: (total: number, range: [number, number]) => string
  size?: PaginationSize
  simple?: boolean
  disabled?: boolean
  hideOnSinglePage?: boolean
  itemRender?: ItemRenderFn
  responsive?: boolean
  align?: 'start' | 'center' | 'end'
}
