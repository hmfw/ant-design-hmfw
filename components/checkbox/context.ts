import type { CheckboxValueType } from './types'

export const CHECKBOX_GROUP_KEY = Symbol('checkbox-group')

export interface CheckboxGroupContext {
  value: CheckboxValueType[]
  disabled: boolean
  name?: string
  onChange: (val: CheckboxValueType, checked: boolean) => void
  registerValue: (val: CheckboxValueType) => void
  cancelValue: (val: CheckboxValueType) => void
}
