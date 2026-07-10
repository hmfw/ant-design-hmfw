import type { VNode } from 'vue'
import type { IconComponent } from '@hmfw/icons'

export type InputSize = 'large' | 'middle' | 'small'
export type InputStatus = 'error' | 'warning' | ''

/** 前后缀可接受字符串、VNode 或图标组件 */
export type InputAffix = string | VNode | IconComponent

export interface InputProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  size?: InputSize
  status?: InputStatus
  prefix?: InputAffix
  suffix?: InputAffix
  allowClear?: boolean | { clearIcon?: VNode; disabled?: boolean }
  maxLength?: number
  showCount?: boolean | { formatter?: (info: { value: string; count: number; maxLength?: number }) => VNode | string }
  type?: string
  id?: string
  classNames?: {
    affixWrapper?: string
    prefix?: string
    suffix?: string
    input?: string
    count?: string
  }
  styles?: {
    affixWrapper?: Record<string, string>
    prefix?: Record<string, string>
    suffix?: Record<string, string>
    input?: Record<string, string>
    count?: Record<string, string>
  }
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
  classNames?: {
    textarea?: string
    count?: string
  }
  styles?: {
    textarea?: Record<string, string>
    count?: Record<string, string>
  }
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
}

export interface InputSearchProps {
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  size?: InputSize
  loading?: boolean
  enterButton?: boolean | string
  searchIcon?: InputAffix
}
