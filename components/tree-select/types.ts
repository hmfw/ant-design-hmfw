export interface TreeSelectNode {
  value: string | number
  label: string
  children?: TreeSelectNode[]
  disabled?: boolean
  selectable?: boolean
  [key: string]: unknown
}

export interface TreeSelectProps {
  value?: string | number | (string | number)[]
  defaultValue?: string | number | (string | number)[]
  treeData?: TreeSelectNode[]
  multiple?: boolean
  treeCheckable?: boolean
  showSearch?: boolean
  allowClear?: boolean
  placeholder?: string
  disabled?: boolean
  size?: 'small' | 'middle' | 'large'
  treeDefaultExpandAll?: boolean
  fieldNames?: { label?: string; value?: string; children?: string }
}
