export type InputSize = 'large' | 'middle' | 'small'
export type InputStatus = 'error' | 'warning' | ''

export interface InputProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  size?: InputSize
  status?: InputStatus
  prefix?: unknown
  suffix?: unknown
  addonBefore?: unknown
  addonAfter?: unknown
  allowClear?: boolean
  maxLength?: number
  showCount?: boolean
  type?: string
}

export interface TextAreaProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  rows?: number
  autoSize?: boolean | { minRows?: number; maxRows?: number }
  maxLength?: number
  showCount?: boolean
  status?: InputStatus
  allowClear?: boolean
}
