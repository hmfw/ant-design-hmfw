import type { VNode } from 'vue'

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
  prefix?: string | VNode
  suffix?: string | VNode
  allowClear?: boolean | { clearIcon?: VNode; disabled?: boolean }
  maxLength?: number
  showCount?: boolean | { formatter?: (info: { value: string; count: number; maxLength?: number }) => VNode | string }
  type?: string
  id?: string
  rootClassName?: string
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
  showCount?: boolean | { formatter?: (info: { value: string; count: number; maxLength?: number }) => VNode | string }
  status?: InputStatus
  allowClear?: boolean | { clearIcon?: VNode; disabled?: boolean }
  rootClassName?: string
}

export interface InputPasswordProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  size?: InputSize
  status?: InputStatus
  visibilityToggle?: boolean | { visible?: boolean; onVisibleChange?: (visible: boolean) => void }
  iconRender?: (visible: boolean) => VNode | string
  action?: 'click' | 'hover'
  rootClassName?: string
}

export interface InputSearchProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  size?: InputSize
  loading?: boolean
  enterButton?: boolean | string
  searchIcon?: string | VNode
  rootClassName?: string
}
