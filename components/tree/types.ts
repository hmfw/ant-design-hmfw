export interface TreeDataNode {
  key: string | number
  title?: string
  children?: TreeDataNode[]
  disabled?: boolean
  disableCheckbox?: boolean
  selectable?: boolean
  checkable?: boolean
  isLeaf?: boolean
  icon?: string
  [key: string]: unknown
}

export type TreeExpandedKeys = (string | number)[]
export type TreeSelectedKeys = (string | number)[]
export type TreeCheckedKeys = (string | number)[]

export interface TreeProps {
  treeData?: TreeDataNode[]
  expandedKeys?: TreeExpandedKeys
  defaultExpandedKeys?: TreeExpandedKeys
  defaultExpandAll?: boolean
  selectedKeys?: TreeSelectedKeys
  defaultSelectedKeys?: TreeSelectedKeys
  checkedKeys?: TreeCheckedKeys
  defaultCheckedKeys?: TreeCheckedKeys
  checkable?: boolean
  checkStrictly?: boolean
  multiple?: boolean
  selectable?: boolean
  disabled?: boolean
  draggable?: boolean
  showLine?: boolean
  showIcon?: boolean
  blockNode?: boolean
  indent?: number
  fieldNames?: { title?: string; key?: string; children?: string }
}
