import type { CSSProperties, PropType, VNode } from 'vue'

export type InputNumberSize = 'small' | 'middle' | 'large'
export type InputNumberStatus = 'error' | 'warning'
export type InputNumberVariant = 'outlined' | 'filled' | 'borderless' | 'underlined'
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
  /** 外层分组容器 div.hmfw-input-number-group-wrapper */
  groupWrapper?: string
  /** 内层包装 div.hmfw-input-number-wrapper */
  wrapper?: string
  /** 前置标签 span.hmfw-input-number-group-addon（addonBefore） */
  addonBefore?: string
  /** 后置标签 span.hmfw-input-number-group-addon（addonAfter） */
  addonAfter?: string
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
  /** 外层分组容器 div.hmfw-input-number-group-wrapper */
  groupWrapper?: CSSProperties
  /** 内层包装 div.hmfw-input-number-wrapper */
  wrapper?: CSSProperties
  /** 前置标签 span.hmfw-input-number-group-addon（addonBefore） */
  addonBefore?: CSSProperties
  /** 后置标签 span.hmfw-input-number-group-addon（addonAfter） */
  addonAfter?: CSSProperties
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
  size?: InputNumberSize
  status?: InputNumberStatus
  variant?: InputNumberVariant
  placeholder?: string
  controls?: boolean | ControlsConfig
  keyboard?: boolean
  stringMode?: boolean
  changeOnBlur?: boolean
  changeOnWheel?: boolean
  decimalSeparator?: string
  mode?: InputNumberMode
  addonBefore?: string
  addonAfter?: string
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
  size: { type: String as PropType<InputNumberSize>, default: 'middle' },
  status: String as PropType<InputNumberStatus>,
  variant: { type: String as PropType<InputNumberVariant>, default: 'outlined' },
  placeholder: String,
  controls: { type: [Boolean, Object] as PropType<boolean | ControlsConfig>, default: true },
  keyboard: { type: Boolean, default: true },
  stringMode: Boolean,
  changeOnBlur: { type: Boolean, default: true },
  changeOnWheel: Boolean,
  decimalSeparator: String,
  mode: { type: String as PropType<InputNumberMode>, default: 'input' },
  addonBefore: String,
  addonAfter: String,
  prefix: String,
  suffix: String,
  classNames: Object as PropType<InputNumberClassNames>,
  styles: Object as PropType<InputNumberStyles>,
}
