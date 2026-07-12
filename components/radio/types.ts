import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type RadioValueType = string | number | boolean

export interface RadioChangeEvent {
  target: {
    checked: boolean
    value?: RadioValueType
  }
  nativeEvent: Event
}

/**
 * Radio 各部分的语义化 className
 */
export interface RadioClassNames {
  /** 根节点 label.hmfw-radio-wrapper */
  root?: string
  /** 单选框容器 span.hmfw-radio */
  radio?: string
  /** 原生 input 元素 input.hmfw-radio-input */
  input?: string
  /** 视觉圆形选择框 span.hmfw-radio-inner */
  inner?: string
  /** 文本标签 span.hmfw-radio-label */
  label?: string
}

/**
 * Radio 各部分的语义化 style
 */
export interface RadioStyles {
  /** 根节点 label.hmfw-radio-wrapper */
  root?: CSSProperties
  /** 单选框容器 span.hmfw-radio */
  radio?: CSSProperties
  /** 原生 input 元素 input.hmfw-radio-input */
  input?: CSSProperties
  /** 视觉圆形选择框 span.hmfw-radio-inner */
  inner?: CSSProperties
  /** 文本标签 span.hmfw-radio-label */
  label?: CSSProperties
}

export interface RadioProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  value?: RadioValueType
  name?: string
  id?: string
  /** 语义化 className */
  classNames?: RadioClassNames
  /** 语义化 style */
  styles?: RadioStyles
}

export interface RadioGroupProps {
  value?: RadioValueType
  defaultValue?: RadioValueType
  disabled?: boolean
  buttonStyle?: 'outline' | 'solid'
  optionType?: 'default' | 'button'
  size?: ComponentSize
  name?: string
  block?: boolean
  options?: Array<
    | RadioValueType
    | {
        label: string
        value: RadioValueType
        disabled?: boolean
        id?: string
      }
  >
}
