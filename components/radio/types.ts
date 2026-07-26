import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type RadioValueType = string | number | boolean

export interface RadioChangeEvent {
  target: {
    checked: boolean
    value?: RadioValueType
  }
  nativeEvent: Event
  stopPropagation: () => void
  preventDefault: () => void
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

/**
 * RadioButton 各部分的语义化 className
 */
export interface RadioButtonClassNames {
  /** 根节点 label.hmfw-radio-button-wrapper */
  root?: string
  /** 原生 input 元素 input.hmfw-radio-button-input */
  input?: string
  /** 文本标签 span.hmfw-radio-button-label */
  label?: string
}

/**
 * RadioButton 各部分的语义化 style
 */
export interface RadioButtonStyles {
  /** 根节点 label.hmfw-radio-button-wrapper */
  root?: CSSProperties
  /** 原生 input 元素 input.hmfw-radio-button-input */
  input?: CSSProperties
  /** 文本标签 span.hmfw-radio-button-label */
  label?: CSSProperties
}

/**
 * RadioGroup 各部分的语义化 className
 */
export interface RadioGroupClassNames {
  /** 根节点 div.hmfw-radio-group */
  root?: string
}

/**
 * RadioGroup 各部分的语义化 style
 */
export interface RadioGroupStyles {
  /** 根节点 div.hmfw-radio-group */
  root?: CSSProperties
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

export interface RadioButtonProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  value?: RadioValueType
  name?: string
  id?: string
  /** 语义化 className */
  classNames?: RadioButtonClassNames
  /** 语义化 style */
  styles?: RadioButtonStyles
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
  direction?: 'horizontal' | 'vertical'
  /** 语义化 className */
  classNames?: RadioGroupClassNames
  /** 语义化 style */
  styles?: RadioGroupStyles
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
