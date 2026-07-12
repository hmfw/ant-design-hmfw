import type { VNode, CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export interface TreeSelectNode {
  value: string | number
  label: string
  children?: TreeSelectNode[]
  disabled?: boolean
  /** 是否可选（单选/普通多选时生效），默认 true */
  selectable?: boolean
  /** treeCheckable 时禁用该节点的勾选框 */
  disableCheckbox?: boolean
  /** 是否叶子节点（仅用于标记，不影响渲染） */
  isLeaf?: boolean
  /** 节点自定义图标，优先级高于全局 treeIcon */
  icon?: VNode | string | ((node: TreeSelectNode) => VNode | string)
  [key: string]: unknown
}

/** treeCheckable 时选中项回填策略 */
export type ShowCheckedStrategy = 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD'

export type TreeSelectValue = string | number | (string | number)[]

/** 全局 treeIcon：true 显示默认图标；false/undefined 不显示；其他形式作为自定义渲染 */
export type TreeIcon = boolean | VNode | string | ((node: TreeSelectNode) => VNode | string | null)

/** 选中项超出 maxTagCount 时占位渲染 */
export type MaxTagPlaceholder = string | ((omittedValues: Array<string | number>) => string)

/**
 * TreeSelect 各部分的语义化 className
 */
export interface TreeSelectClassNames {
  /** 根节点 div.hmfw-tree-select */
  root?: string
  /** 选择器容器 div.hmfw-tree-select-selector */
  selector?: string
  /** 已选项 span.hmfw-tree-select-selection-item（多选模式下为标签） */
  item?: string
  /** 占位符 span.hmfw-tree-select-selection-placeholder */
  placeholder?: string
  /** 搜索输入框 input.hmfw-tree-select-selection-search */
  search?: string
  /** 后缀箭头容器 div.hmfw-tree-select-arrow */
  arrow?: string
  /** 清除按钮 span.hmfw-tree-select-clear */
  clear?: string
  /** 下拉面板 div.hmfw-tree-select-dropdown */
  dropdown?: string
  /** 空状态 div.hmfw-tree-select-dropdown-empty */
  dropdownEmpty?: string
  /** 树节点 div.hmfw-tree-select-tree-node */
  treeNode?: string
  /** 树节点内容 span.hmfw-tree-select-tree-node-content */
  treeNodeContent?: string
  /** 展开/收起按钮 span.hmfw-tree-select-tree-switcher */
  treeSwitcher?: string
  /** 复选框 span.hmfw-tree-select-tree-checkbox */
  treeCheckbox?: string
  /** 节点图标 span.hmfw-tree-select-tree-icon */
  treeIcon?: string
}

/**
 * TreeSelect 各部分的语义化 style
 */
export interface TreeSelectStyles {
  /** 根节点 div.hmfw-tree-select */
  root?: CSSProperties
  /** 选择器容器 div.hmfw-tree-select-selector */
  selector?: CSSProperties
  /** 已选项 span.hmfw-tree-select-selection-item */
  item?: CSSProperties
  /** 占位符 span.hmfw-tree-select-selection-placeholder */
  placeholder?: CSSProperties
  /** 搜索输入框 input.hmfw-tree-select-selection-search */
  search?: CSSProperties
  /** 后缀箭头容器 div.hmfw-tree-select-arrow */
  arrow?: CSSProperties
  /** 清除按钮 span.hmfw-tree-select-clear */
  clear?: CSSProperties
  /** 下拉面板 div.hmfw-tree-select-dropdown */
  dropdown?: CSSProperties
  /** 空状态 div.hmfw-tree-select-dropdown-empty */
  dropdownEmpty?: CSSProperties
  /** 树节点 div.hmfw-tree-select-tree-node */
  treeNode?: CSSProperties
  /** 树节点内容 span.hmfw-tree-select-tree-node-content */
  treeNodeContent?: CSSProperties
  /** 展开/收起按钮 span.hmfw-tree-select-tree-switcher */
  treeSwitcher?: CSSProperties
  /** 复选框 span.hmfw-tree-select-tree-checkbox */
  treeCheckbox?: CSSProperties
  /** 节点图标 span.hmfw-tree-select-tree-icon */
  treeIcon?: CSSProperties
}

export interface TreeSelectProps {
  value?: TreeSelectValue
  defaultValue?: TreeSelectValue
  treeData?: TreeSelectNode[]
  multiple?: boolean
  treeCheckable?: boolean
  /** checkable 状态下节点选择完全受控（父子节点选中状态不再关联） */
  treeCheckStrictly?: boolean
  /** checkable 时选中项回填方式，默认 SHOW_CHILD */
  showCheckedStrategy?: ShowCheckedStrategy
  showSearch?: boolean
  /** 多选模式下选中后自动清空搜索框，默认 true */
  autoClearSearchValue?: boolean
  allowClear?: boolean
  placeholder?: string
  disabled?: boolean
  size?: ComponentSize
  /** 设置校验状态 */
  status?: 'error' | 'warning' | ''
  /** 可选中的最多数量，仅在多选时生效 */
  maxCount?: number
  /** 下拉列表为空时显示的内容 */
  notFoundContent?: string
  treeDefaultExpandAll?: boolean
  /** 默认展开的树节点 key */
  treeDefaultExpandedKeys?: (string | number)[]
  /** 受控展开下拉菜单 */
  open?: boolean
  /** 默认是否展开下拉菜单 */
  defaultOpen?: boolean
  fieldNames?: { label?: string; value?: string; children?: string }
  /** 是否启用虚拟滚动，默认 true；设为 false 时全量渲染 */
  virtual?: boolean
  /** 虚拟滚动列表高度（px），默认 256 */
  listHeight?: number
  /** 单行节点高度（px），默认 28 */
  itemHeight?: number
  /** 树节点图标：true 显示默认图标；自定义形式覆盖默认渲染 */
  treeIcon?: TreeIcon
  /** 多选最多显示标签数；超出折叠为 +N */
  maxTagCount?: number | 'responsive'
  /** 折叠占位内容（字符串或函数） */
  maxTagPlaceholder?: MaxTagPlaceholder
  /** 单个标签文本最大长度，超出截断为 ... */
  maxTagTextLength?: number
  /** 语义化 className */
  classNames?: TreeSelectClassNames
  /** 语义化 style */
  styles?: TreeSelectStyles
}
