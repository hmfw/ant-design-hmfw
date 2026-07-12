import type { CSSProperties, PropType, VNode } from 'vue'
import type { ComponentSize } from '../config-provider'

export type InputNumberStatus = 'error' | 'warning'
export type InputNumberMode = 'input' | 'spinner'

export interface ControlsConfig {
  upIcon?: VNode | string
  downIcon?: VNode | string
}

/**
 * InputNumber 各部分的语义化 className
 */
export interface InputNumberClassNames {
  /** 根节点 div.hmfw-input-number */
  root?: string
  /** 输入框 input.hmfw-input-number-input */
  input?: string
  /** 前缀 span.hmfw-input-number-prefix */
  prefix?: string
  /** 后缀 span.hmfw-input-number-suffix */
  suffix?: string
  /** 操作按钮容器 div.hmfw-input-number-handler-wrap */
  handlerWrap?: string
  /** 增加按钮 span.hmfw-input-number-handler-up */
  handlerUp?: string
  /** 减少按钮 span.hmfw-input-number-handler-down */
  handlerDown?: string
}

/**
 * InputNumber 各部分的语义化 style
 */
export interface InputNumberStyles {
  /** 根节点 div.hmfw-input-number */
  root?: CSSProperties
  /** 输入框 input.hmfw-input-number-input */
  input?: CSSProperties
  /** 前缀 span.hmfw-input-number-prefix */
  prefix?: CSSProperties
  /** 后缀 span.hmfw-input-number-suffix */
  suffix?: CSSProperties
  /** 操作按钮容器 div.hmfw-input-number-handler-wrap */
  handlerWrap?: CSSProperties
  /** 增加按钮 span.hmfw-input-number-handler-up */
  handlerUp?: CSSProperties
  /** 减少按钮 span.hmfw-input-number-handler-down */
  handlerDown?: CSSProperties
}

export interface InputNumberProps {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  precision?: number
  formatter?: (value: number, info: { userTyping: boolean; input: string }) => string
  parser?: (value: string) => number
  disabled?: boolean
  readOnly?: boolean
  size?: ComponentSize
  status?: InputNumberStatus
  placeholder?: string
  controls?: boolean | ControlsConfig
  keyboard?: boolean
  stringMode?: boolean
  changeOnBlur?: boolean
  changeOnWheel?: boolean
  decimalSeparator?: string
  mode?: InputNumberMode
  prefix?: string
  suffix?: string
  /** 语义化 className */
  classNames?: InputNumberClassNames
  /** 语义化 style */
  styles?: InputNumberStyles
}

export const inputNumberProps = {
  value: Number,
  defaultValue: Number,
  min: { type: Number, default: -Infinity },
  max: { type: Number, default: Infinity },
  step: { type: Number, default: 1 },
  precision: Number,
  formatter: Function as PropType<(value: number, info: { userTyping: boolean; input: string }) => string>,
  parser: Function as PropType<(value: string) => number>,
  disabled: Boolean,
  readOnly: Boolean,
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  status: String as PropType<InputNumberStatus>,
  placeholder: String,
  controls: { type: [Boolean, Object] as PropType<boolean | ControlsConfig>, default: true },
  keyboard: { type: Boolean, default: true },
  stringMode: Boolean,
  changeOnBlur: { type: Boolean, default: true },
  changeOnWheel: Boolean,
  decimalSeparator: String,
  mode: { type: String as PropType<InputNumberMode>, default: 'input' },
  prefix: String,
  suffix: String,
  classNames: Object as PropType<InputNumberClassNames>,
  styles: Object as PropType<InputNumberStyles>,
}
