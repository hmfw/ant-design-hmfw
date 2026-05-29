export interface CascaderOption {
  value: string | number
  label: string
  disabled?: boolean
  children?: CascaderOption[]
  isLeaf?: boolean
}

export type CascaderValue = (string | number)[]
export type CascaderExpandTrigger = 'click' | 'hover'

export interface CascaderProps {
  value?: CascaderValue
  defaultValue?: CascaderValue
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
  displayRender?: (labels: string[]) => string
  fieldNames?: { label?: string; value?: string; children?: string }
  open?: boolean
}
