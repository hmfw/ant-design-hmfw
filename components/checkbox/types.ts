import type { CSSProperties } from 'vue'

export type CheckboxValueType = string | number | boolean

export interface CheckboxChangeEventTarget {
  checked: boolean
  value?: CheckboxValueType
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget
  nativeEvent: Event
}

/**
 * Checkbox 各部分的语义化 className
 */
export interface CheckboxClassNames {
  /** 根节点 label.hmfw-checkbox-wrapper */
  root?: string
  /** 复选框容器 span.hmfw-checkbox */
  checkbox?: string
  /** 原生 input 元素 input.hmfw-checkbox-input */
  input?: string
  /** 视觉勾选框 span.hmfw-checkbox-inner */
  inner?: string
  /** 文本标签 span.hmfw-checkbox-label */
  label?: string
}

/**
 * Checkbox 各部分的语义化 style
 */
export interface CheckboxStyles {
  /** 根节点 label.hmfw-checkbox-wrapper */
  root?: CSSProperties
  /** 复选框容器 span.hmfw-checkbox */
  checkbox?: CSSProperties
  /** 原生 input 元素 input.hmfw-checkbox-input */
  input?: CSSProperties
  /** 视觉勾选框 span.hmfw-checkbox-inner */
  inner?: CSSProperties
  /** 文本标签 span.hmfw-checkbox-label */
  label?: CSSProperties
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
  /** 语义化 className */
  classNames?: CheckboxClassNames
  /** 语义化 style */
  styles?: CheckboxStyles
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
