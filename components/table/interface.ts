import type { CSSProperties, VNode } from 'vue'
import type { ComponentSize } from '../config-provider'
import type { CheckboxProps } from '../checkbox'

export type Key = string | number

export type SortOrder = 'ascend' | 'descend' | null

export type TableAction = 'paginate' | 'sort' | 'filter'

export type CompareFn<T = any> = (a: T, b: T, sortOrder?: SortOrder) => number

export interface ColumnFilterItem {
  text: string
  value: string | number | boolean
  children?: ColumnFilterItem[]
}

export type FilterValue = (Key | boolean)[]

export interface TableLocale {
  filterTitle?: string
  filterConfirm?: string
  filterReset?: string
  filterEmptyText?: string
  filterCheckAll?: string
  filterSearchPlaceholder?: string
  emptyText?: string
  selectAll?: string
  selectNone?: string
  selectInvert?: string
  selectionAll?: string
  sortTitle?: string
  expand?: string
  collapse?: string
  triggerDesc?: string
  triggerAsc?: string
  cancelSort?: string
}

export interface SorterResult<T = any> {
  column?: TableColumn<T>
  order?: SortOrder
  field?: Key | readonly Key[]
  columnKey?: Key
}

export interface TableCurrentDataSource<T = any> {
  currentDataSource: T[]
  action: TableAction
}

export interface ColumnTitleProps<T = any> {
  sortOrder?: SortOrder
  sortColumn?: TableColumn<T>
  sortColumns?: { column: TableColumn<T>; order: SortOrder }[]
  filters?: Record<string, FilterValue>
}

export type ColumnTitle<T = any> = string | VNode | ((props: ColumnTitleProps<T>) => VNode | string)

export interface TableColumn<T = any> {
  key?: string
  dataIndex?: string
  title?: ColumnTitle<T>
  width?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'

  // Sorter
  sorter?: boolean | CompareFn<T> | { compare?: CompareFn<T>; multiple?: number }
  /** 排序的受控属性：设置后该列的排序状态完全由它决定 */
  sortOrder?: SortOrder
  /** 默认排序状态（仅在首次渲染生效） */
  defaultSortOrder?: SortOrder
  /** 支持的排序方向序列，点击时按此序列循环，默认 ['ascend', 'descend', null] */
  sortDirections?: SortOrder[]
  showSorterTooltip?: boolean

  // Filter
  filters?: ColumnFilterItem[]
  filteredValue?: FilterValue | null
  defaultFilteredValue?: FilterValue | null
  onFilter?: (value: Key | boolean, record: T) => boolean
  filterMultiple?: boolean
  filterDropdown?: VNode | ((props: any) => VNode)
  filterIcon?: VNode | ((filtered: boolean) => VNode)

  // Render
  render?: (value: any, record: T, index: number) => VNode | string | number
  ellipsis?: boolean

  // Cell
  /** 表头横向合并列数（设置为 0 时该表头不渲染）；数据单元格的合并请使用 onCell */
  colSpan?: number
  className?: string
  /**
   * 设置数据单元格属性（动态合并/自定义单元格）：
   * 返回 `{ colSpan?, rowSpan?, className?, style?, ...事件 }`，`colSpan` 或 `rowSpan` 为 0 时不渲染该单元格
   */
  onCell?: (record: T, index: number) => Record<string, any>
  /** 设置表头单元格属性（如表头合并 colSpan） */
  onHeaderCell?: (column: TableColumn<T>) => Record<string, any>

  // Responsive
  responsive?: string[]
}

export type RowSelectionType = 'checkbox' | 'radio'

export type RowSelectMethod = 'all' | 'none' | 'invert' | 'single' | 'multiple'

export interface TableRowSelection<T = any> {
  type?: RowSelectionType
  selectedRowKeys?: Key[]
  defaultSelectedRowKeys?: Key[]
  onChange?: (selectedRowKeys: Key[], selectedRows: T[], info?: { type: RowSelectMethod }) => void
  onSelect?: (record: T, selected: boolean, selectedRows: T[], nativeEvent: Event) => void
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void
  getCheckboxProps?: (record: T) => Partial<CheckboxProps>
  columnWidth?: string | number
  columnTitle?: string | VNode
  fixed?: boolean
  hideSelectAll?: boolean
  preserveSelectedRowKeys?: boolean
  checkStrictly?: boolean
}

export interface TablePaginationConfig {
  current?: number
  defaultCurrent?: number
  total?: number
  pageSize?: number
  defaultPageSize?: number
  pageSizeOptions?: number[]
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  showTotal?: (total: number, range: [number, number]) => string
  size?: ComponentSize
  simple?: boolean
  disabled?: boolean
  hideOnSinglePage?: boolean
  position?: ('topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight')[]
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current: number, size: number) => void
}

export interface ExpandableConfig<T = any> {
  expandedRowKeys?: Key[]
  defaultExpandedRowKeys?: Key[]
  expandedRowRender?: (record: T, index: number, indent: number, expanded: boolean) => VNode | string
  expandRowByClick?: boolean
  expandIcon?: (props: { expanded: boolean; record: T; onExpand: (record: T, e: Event) => void }) => VNode
  onExpand?: (expanded: boolean, record: T) => void
  onExpandedRowsChange?: (expandedKeys: Key[]) => void
  defaultExpandAllRows?: boolean
  indentSize?: number
  expandIconColumnIndex?: number
  childrenColumnName?: string
  rowExpandable?: (record: T) => boolean
}

export interface TableSemanticClassNames {
  root?: string
  header?: string
  body?: string
  row?: string
  cell?: string
  footer?: string
  pagination?: string
}

export interface TableSemanticStyles {
  root?: CSSProperties
  header?: CSSProperties
  body?: CSSProperties
  row?: CSSProperties
  cell?: CSSProperties
  footer?: CSSProperties
  pagination?: CSSProperties
}

export interface TableProps<T = any> {
  dataSource?: T[]
  columns?: TableColumn<T>[]
  rowKey?: string | ((record: T) => Key)
  loading?: boolean
  bordered?: boolean
  size?: ComponentSize
  scroll?: { x?: number | string; y?: number | string; scrollToFirstRowOnChange?: boolean }
  pagination?: false | TablePaginationConfig
  rowSelection?: TableRowSelection<T>
  expandable?: ExpandableConfig<T>
  locale?: TableLocale
  showHeader?: boolean
  sticky?: boolean | { offsetHeader?: number; offsetScroll?: number; getContainer?: () => HTMLElement }
  summary?: (pageData: T[]) => VNode

  // Custom rendering
  title?: (data: T[]) => VNode | string
  footer?: (data: T[]) => VNode | string
  rowClassName?: string | ((record: T, index: number) => string)

  // Semantic
  classNames?: TableSemanticClassNames
  styles?: TableSemanticStyles

  // Events
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
    extra?: TableCurrentDataSource<T>,
  ) => void

  onRow?: (record: T, index: number) => Record<string, any>
  onHeaderRow?: (columns: TableColumn<T>[], index: number) => Record<string, any>
}
