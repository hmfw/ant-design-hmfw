export type CheckboxValueType = string | number | boolean

export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  value?: CheckboxValueType
  autoFocus?: boolean
}

export interface CheckboxGroupProps {
  value?: CheckboxValueType[]
  defaultValue?: CheckboxValueType[]
  disabled?: boolean
  options?: Array<CheckboxValueType | { label: string; value: CheckboxValueType; disabled?: boolean }>
}
