import type { CSSProperties, VNode } from 'vue'
import type { PaginationProps } from '../pagination'
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

export type ColumnTitle<T = any> =
  | string
  | VNode
  | ((props: ColumnTitleProps<T>) => VNode | string)

export interface TableColumn<T = any> {
  key?: string
  dataIndex?: string
  title?: ColumnTitle<T>
  width?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'

  // Sorter
  sorter?: boolean | CompareFn<T>
  sortOrder?: SortOrder
  defaultSortOrder?: SortOrder
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
  colSpan?: number
  rowSpan?: number
  className?: string

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
  size?: 'small' | 'default'
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
  size?: 'default' | 'middle' | 'small'
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

  // Semantic
  classNames?: TableSemanticClassNames
  styles?: TableSemanticStyles
  rootClassName?: string

  // Events
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
    extra?: TableCurrentDataSource<T>
  ) => void

  onRow?: (record: T, index: number) => Record<string, any>
  onHeaderRow?: (columns: TableColumn<T>[], index: number) => Record<string, any>
}
