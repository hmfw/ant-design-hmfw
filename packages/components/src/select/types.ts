export type SelectSize = 'small' | 'middle' | 'large'
export type SelectMode = 'multiple' | 'tags'
export type SelectStatus = 'error' | 'warning'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
  title?: string
}

export interface SelectProps {
  value?: string | number | (string | number)[]
  defaultValue?: string | number | (string | number)[]
  options?: SelectOption[]
  mode?: SelectMode
  size?: SelectSize
  status?: SelectStatus
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  allowClear?: boolean
  showSearch?: boolean
  filterOption?: boolean | ((input: string, option: SelectOption) => boolean)
  notFoundContent?: string
  maxTagCount?: number
  open?: boolean
  dropdownMatchSelectWidth?: boolean
}
