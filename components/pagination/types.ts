import type { VNode, CSSProperties } from 'vue'

export type PaginationSize = 'default' | 'small'

export type ItemRenderFn = (
  page: number,
  type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
  originalElement: VNode,
) => VNode

/**
 * Pagination 各部分的语义化 className
 */
export interface PaginationClassNames {
  /** 根容器 ul.hmfw-pagination */
  root?: string
  /** 总数显示区域 li.hmfw-pagination-total-text */
  total?: string
  /** 上一页按钮 li.hmfw-pagination-prev */
  prev?: string
  /** 下一页按钮 li.hmfw-pagination-next */
  next?: string
  /** 页码项 li.hmfw-pagination-item */
  item?: string
  /** 当前激活的页码项 li.hmfw-pagination-item-active */
  itemActive?: string
  /** 向前跳转按钮 li.hmfw-pagination-jump-prev */
  jumpPrev?: string
  /** 向后跳转按钮 li.hmfw-pagination-jump-next */
  jumpNext?: string
  /** 选项容器 li.hmfw-pagination-options */
  options?: string
  /** 页码尺寸切换器（Select 组件容器） */
  sizeChanger?: string
  /** 快速跳转输入框容器 li.hmfw-pagination-options-quick-jumper */
  quickJumper?: string
}

/**
 * Pagination 各部分的语义化 style
 */
export interface PaginationStyles {
  /** 根容器 ul.hmfw-pagination */
  root?: CSSProperties
  /** 总数显示区域 li.hmfw-pagination-total-text */
  total?: CSSProperties
  /** 上一页按钮 li.hmfw-pagination-prev */
  prev?: CSSProperties
  /** 下一页按钮 li.hmfw-pagination-next */
  next?: CSSProperties
  /** 页码项 li.hmfw-pagination-item */
  item?: CSSProperties
  /** 当前激活的页码项 li.hmfw-pagination-item-active */
  itemActive?: CSSProperties
  /** 向前跳转按钮 li.hmfw-pagination-jump-prev */
  jumpPrev?: CSSProperties
  /** 向后跳转按钮 li.hmfw-pagination-jump-next */
  jumpNext?: CSSProperties
  /** 选项容器 li.hmfw-pagination-options */
  options?: CSSProperties
  /** 页码尺寸切换器（Select 组件容器） */
  sizeChanger?: CSSProperties
  /** 快速跳转输入框容器 li.hmfw-pagination-options-quick-jumper */
  quickJumper?: CSSProperties
}

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
  /** 语义化 className */
  classNames?: PaginationClassNames
  /** 语义化 style */
  styles?: PaginationStyles
}
