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
  [key: string]: unknown
}

/** treeCheckable 时选中项回填策略 */
export type ShowCheckedStrategy = 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD'

export type TreeSelectValue = string | number | (string | number)[]

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
  size?: 'small' | 'middle' | 'large'
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
}
