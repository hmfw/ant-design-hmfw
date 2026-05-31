export type SelectSize = 'small' | 'middle' | 'large'
export type SelectMode = 'multiple' | 'tags'
export type SelectStatus = 'error' | 'warning'

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
  title?: string
  // OptGroup support
  options?: SelectOption[]
}

export interface LabeledValue {
  value: string | number
  label: string
  key?: string
}

export type SelectValue = string | number | (string | number)[] | LabeledValue | LabeledValue[] | undefined

export interface SelectProps {
  value?: SelectValue
  defaultValue?: SelectValue
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
  maxCount?: number
  maxTagPlaceholder?: string | ((omittedValues: (string | number)[]) => string)
  open?: boolean
  dropdownMatchSelectWidth?: boolean
  labelInValue?: boolean
  tokenSeparators?: string[]
  optionRender?: (option: SelectOption, info: { index: number }) => any
  labelRender?: (props: LabeledValue) => any
  tagRender?: (props: { label: string; value: string | number; closable: boolean; onClose: () => void }) => any
  autoClearSearchValue?: boolean
  fieldNames?: {
    label?: string
    value?: string
    options?: string
  }
}
