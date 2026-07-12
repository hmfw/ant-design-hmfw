import type { VNode, CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type PaginationAlign = 'start' | 'center' | 'end'

export type PaginationItemType = 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next'

/**
 * 自定义总数文案。
 * @param total 数据总条数
 * @param range 当前页数据区间 `[起, 止]`（从 1 开始计数）；当 `total` 为 0 时为 `[0, 0]`，调用方需自行处理空态
 */
export type ShowTotalFn = (total: number, range: [number, number]) => string

export type ItemRenderFn = (page: number, type: PaginationItemType, originalElement: VNode) => VNode

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
  total?: number
  pageSize?: number
  pageSizeOptions?: number[]
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: ShowTotalFn
  size?: ComponentSize
  simple?: boolean
  disabled?: boolean
  hideOnSinglePage?: boolean
  itemRender?: ItemRenderFn
  responsive?: boolean
  align?: PaginationAlign
  /** 语义化 className */
  classNames?: PaginationClassNames
  /** 语义化 style */
  styles?: PaginationStyles
}
