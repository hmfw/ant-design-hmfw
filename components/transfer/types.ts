import type { VNode, CSSProperties } from 'vue'

/** key 可以是 string 或 number（对齐 AntD `React.Key`） */
export type TransferKey = string | number

export type TransferDirection = 'left' | 'right'

/** 数据项 */
export interface TransferItem {
  key?: TransferKey
  title?: string
  description?: string
  disabled?: boolean
  [name: string]: any
}

export type KeyWise<T> = T & { key: TransferKey }
export type KeyWiseTransferItem = KeyWise<TransferItem>

/** render 返回值：可为对象形式 `{ label, value }`，value 用于搜索匹配 */
export interface RenderResultObject {
  label: VNode | string
  value: string
}
export type RenderResult = VNode | RenderResultObject | string | null

/** 全选标签：节点或函数（接收已选/总数信息） */
export type SelectAllLabel = VNode | string | ((info: { selectedCount: number; totalCount: number }) => VNode | string)

/** 分页配置 */
export type PaginationType =
  | boolean
  | {
      pageSize?: number
      simple?: boolean
      showSizeChanger?: boolean
      showLessItems?: boolean
    }

/** 搜索框配置（showSearch 对象形式） */
export interface TransferSearchOption {
  placeholder?: string
  defaultValue?: string
}

/** 文案 locale */
export interface TransferLocale {
  titles?: (VNode | string)[]
  notFoundContent?: VNode | string | (VNode | string)[]
  searchPlaceholder?: string
  itemUnit?: string
  itemsUnit?: string
  remove?: string
  selectAll?: string
  deselectAll?: string
  selectCurrent?: string
  selectInvert?: string
  removeAll?: string
  removeCurrent?: string
}

export type InputStatus = 'error' | 'warning'

/** 语义化 DOM class 名 */
export interface TransferSemanticClassNames {
  root?: string
  section?: string
  header?: string
  title?: string
  body?: string
  list?: string
  item?: string
  itemIcon?: string
  itemContent?: string
  footer?: string
  actions?: string
}

/** 语义化 DOM 内联样式 */
export interface TransferSemanticStyles {
  root?: CSSProperties
  section?: CSSProperties
  header?: CSSProperties
  title?: CSSProperties
  body?: CSSProperties
  list?: CSSProperties
  item?: CSSProperties
  itemIcon?: CSSProperties
  itemContent?: CSSProperties
  footer?: CSSProperties
  actions?: CSSProperties
}

/** 传给 footer 渲染函数的列表上下文 */
export interface TransferListContext {
  direction: TransferDirection
  filteredItems: TransferItem[]
  selectedKeys: TransferKey[]
  disabled?: boolean
}

/** 拖拽排序触发的回调信息 */
export interface TransferReorderInfo {
  /** 拖拽发生在哪一侧（目前仅 'right'） */
  direction: TransferDirection
  /** 重排前的 targetKeys 顺序 */
  oldTargetKeys: TransferKey[]
  /** 重排后的 targetKeys 顺序 */
  newTargetKeys: TransferKey[]
  /** 被拖拽项的 key */
  activeKey: TransferKey
  /** 被拖拽项原下标 */
  fromIndex: number
  /** 被拖拽项目标下标 */
  toIndex: number
}

export interface TransferProps {
  dataSource?: TransferItem[]
  /** 右侧列表 key 集合（v-model:targetKeys） */
  targetKeys?: TransferKey[]
  defaultTargetKeys?: TransferKey[]
  /** 选中项 key 集合（v-model:selectedKeys） */
  selectedKeys?: TransferKey[]
  defaultSelectedKeys?: TransferKey[]
  /** 两侧标题 */
  titles?: (VNode | string)[]
  /** @deprecated 请使用 actions */
  operations?: string[]
  /** 自定义每项渲染 */
  render?: (item: TransferItem) => RenderResult
  /** 自定义 rowKey */
  rowKey?: (record: TransferItem) => TransferKey
  /** 搜索 */
  showSearch?: boolean | TransferSearchOption
  filterOption?: (inputValue: string, item: TransferItem, direction: TransferDirection) => boolean
  /** 列表底部渲染 */
  footer?: (info: TransferListContext) => VNode | string | null
  /** 列表样式：对象或 `(info)=>style` */
  listStyle?: CSSProperties | ((info: { direction: TransferDirection }) => CSSProperties)
  disabled?: boolean
  /** 是否展示全选勾选框与下拉操作 */
  showSelectAll?: boolean
  /** 自定义全选文案 [左, 右] */
  selectAllLabels?: SelectAllLabel[]
  /** 单向模式：只能从左移到右，右侧项可单独移除 */
  oneWay?: boolean
  /** 是否允许通过拖拽对右侧（target）列表项排序 */
  draggable?: boolean
  /** 拖拽排序后触发，info 中包含旧/新 targetKeys 与拖拽下标 */
  onReorder?: (info: TransferReorderInfo) => void
  /** 分页 */
  pagination?: PaginationType
  /** 校验状态 */
  status?: InputStatus
  /** 文案 */
  locale?: Partial<TransferLocale>
  /** 根 class */
  rootClassName?: string
  /** 语义化 class */
  classNames?: TransferSemanticClassNames
  /** 语义化 style */
  styles?: TransferSemanticStyles

  // ----------------------------------------------------------------
  // 虚拟滚动
  // ----------------------------------------------------------------

  /** 是否启用虚拟滚动（与 pagination 互斥，大数据量时开启） */
  virtual?: boolean
  /** 列表容器高度（px），默认 400 */
  listHeight?: number
  /** 列表项高度（px），默认 40 */
  listItemHeight?: number
}
