export interface CascaderOption {
  value: string | number
  label: string
  disabled?: boolean
  children?: CascaderOption[]
  isLeaf?: boolean
  [key: string]: any
}

export type CascaderValue = (string | number)[]
export type CascaderExpandTrigger = 'click' | 'hover'
export type CascaderShowCheckedStrategy = 'SHOW_PARENT' | 'SHOW_CHILD'

export interface CascaderProps {
  value?: CascaderValue | CascaderValue[]
  defaultValue?: CascaderValue | CascaderValue[]
  options?: CascaderOption[]
  disabled?: boolean
  placeholder?: string
  allowClear?: boolean
  size?: 'small' | 'middle' | 'large'
  status?: 'error' | 'warning' | ''
  expandTrigger?: CascaderExpandTrigger
  multiple?: boolean
  showSearch?: boolean
  changeOnSelect?: boolean
  displayRender?: (labels: string[], selectedOptions?: CascaderOption[]) => string
  fieldNames?: { label?: string; value?: string; children?: string }
  open?: boolean
  defaultOpen?: boolean
  notFoundContent?: string
  loadData?: (selectedOptions: CascaderOption[]) => void
  showCheckedStrategy?: CascaderShowCheckedStrategy
  maxTagCount?: number
  maxTagPlaceholder?: string | ((omittedValues: CascaderValue[]) => string)
  maxTagTextLength?: number
}
