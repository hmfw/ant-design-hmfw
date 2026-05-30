export type CheckboxValueType = string | number | boolean

export interface CheckboxChangeEventTarget {
  checked: boolean
  value?: CheckboxValueType
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget
  nativeEvent: Event
}

export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  value?: CheckboxValueType
  autoFocus?: boolean
  name?: string
  id?: string
  title?: string
  tabIndex?: number
  required?: boolean
  skipGroup?: boolean
}

export interface CheckboxOptionType {
  label: string
  value: CheckboxValueType
  disabled?: boolean
  style?: Record<string, any>
  className?: string
  title?: string
  id?: string
  required?: boolean
}

export interface CheckboxGroupProps {
  value?: CheckboxValueType[]
  defaultValue?: CheckboxValueType[]
  disabled?: boolean
  name?: string
  options?: Array<CheckboxValueType | CheckboxOptionType>
  style?: Record<string, any>
  className?: string
}
