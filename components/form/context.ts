import type { FormColConfig, FormRule, FormValidateTrigger } from './types'

export interface FormContext {
  model: Record<string, unknown>
  rules: Record<string, FormRule | FormRule[]>
  layout: string
  colon: boolean
  labelAlign: string
  size: string
  disabled: boolean
  labelCol?: FormColConfig
  wrapperCol?: FormColConfig
  validateTrigger: FormValidateTrigger
  requiredMark: boolean | 'optional'
  preserve: boolean
  errors: Record<string, string>
  touched: Record<string, boolean>
  setError: (name: string, error: string) => void
  clearError: (name: string) => void
  validateField: (name: string, trigger?: 'blur' | 'change') => Promise<boolean>
  notifyValueChange: (name: string, value: unknown) => void
  setFieldTouched: (name: string, touched: boolean) => void
  resetFields: (nameList?: string[]) => void
  /** FormItem 挂载时上报自身 rules，使其参与 validate()/validateFields() */
  registerField: (name: string, rules: FormRule[]) => void
  unregisterField: (name: string) => void
  /** Form.rules 与 FormItem.rules 的并集字段名 */
  allFieldNames: () => string[]
}

export const FORM_CONTEXT_KEY = Symbol('form-context')
