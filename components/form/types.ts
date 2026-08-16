import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type FormLayout = 'horizontal' | 'vertical' | 'inline'
export type NamePath = string | number | (string | number)[]
export type ValidateStatus = '' | 'success' | 'warning' | 'error' | 'validating'

/** 校验触发时机 */
export type FormValidateTrigger = 'blur' | 'change' | ('blur' | 'change')[]

export interface FormRule {
  required?: boolean
  message?: string
  min?: number
  max?: number
  pattern?: RegExp
  validator?: (rule: FormRule, value: unknown) => Promise<void> | void
  type?: 'string' | 'number' | 'boolean' | 'array' | 'email' | 'url'
  whitespace?: boolean
  len?: number
  enum?: unknown[]
  /** Validation trigger; falls back to FormItem/Form `validateTrigger`. */
  trigger?: 'blur' | 'change' | ('blur' | 'change')[]
}

/** 栅格配置（同 Col 组件的 span / offset） */
export interface FormColConfig {
  span?: number
  offset?: number
}

/** 单个字段的错误信息 */
export interface FormFieldError {
  name: string
  errors: string[]
}

/**
 * Form finish 事件参数
 */
export interface FormFinishInfo {
  values: Record<string, unknown>
}

/**
 * Form finishFailed 事件参数
 */
export interface FormFinishFailedInfo {
  values: Record<string, unknown>
  errorFields: FormFieldError[]
}

/**
 * Form valuesChange 事件参数
 */
export interface FormValuesChangeInfo {
  changedValues: Record<string, unknown>
  allValues: Record<string, unknown>
}

/**
 * Form finish 事件处理函数类型
 */
export type FormFinishHandler = (values: Record<string, unknown>) => void

/**
 * Form finishFailed 事件处理函数类型
 */
export type FormFinishFailedHandler = (info: FormFinishFailedInfo) => void

/**
 * Form valuesChange 事件处理函数类型
 */
export type FormValuesChangeHandler = (
  changedValues: Record<string, unknown>,
  allValues: Record<string, unknown>,
) => void

/**
 * Form 各部分的语义化 className
 */
export interface FormClassNames {
  /** 根节点 form.hmfw-form */
  root?: string
}

/**
 * Form 各部分的语义化 style
 */
export interface FormStyles {
  /** 根节点 form.hmfw-form */
  root?: CSSProperties
}

/**
 * FormItem 各部分的语义化 className
 */
export interface FormItemClassNames {
  /** 表单项根节点 div.hmfw-form-item */
  root?: string
  /** 标签区域 div.hmfw-form-item-label */
  label?: string
  /** 控件区域 div.hmfw-form-item-control */
  control?: string
  /** 错误/帮助信息 div.hmfw-form-item-explain */
  feedback?: string
  /** 额外提示 div.hmfw-form-item-extra */
  extra?: string
}

/**
 * FormItem 各部分的语义化 style
 */
export interface FormItemStyles {
  /** 表单项根节点 div.hmfw-form-item */
  root?: CSSProperties
  /** 标签区域 div.hmfw-form-item-label */
  label?: CSSProperties
  /** 控件区域 div.hmfw-form-item-control */
  control?: CSSProperties
  /** 错误/帮助信息 div.hmfw-form-item-explain */
  feedback?: CSSProperties
  /** 额外提示 div.hmfw-form-item-extra */
  extra?: CSSProperties
}

export interface FormProps {
  model?: Record<string, unknown>
  rules?: Record<string, FormRule | FormRule[]>
  layout?: FormLayout
  labelCol?: FormColConfig
  wrapperCol?: FormColConfig
  colon?: boolean
  labelAlign?: 'left' | 'right'
  size?: ComponentSize
  disabled?: boolean
  scrollToFirstError?: boolean
  validateTrigger?: FormValidateTrigger
  /** AntD v6 `requiredMark`: false hides asterisks; `'optional'` marks non-required fields. */
  requiredMark?: boolean | 'optional'
  /** Whether to preserve field value when field is unmounted (default: false). */
  preserve?: boolean
  /** 语义化 className */
  classNames?: FormClassNames
  /** 语义化 style */
  styles?: FormStyles
}

export interface FormItemProps {
  name?: NamePath
  label?: string
  rules?: FormRule | FormRule[]
  required?: boolean
  colon?: boolean
  labelCol?: FormColConfig
  wrapperCol?: FormColConfig
  validateStatus?: ValidateStatus
  help?: string
  extra?: string
  hasFeedback?: boolean
  noStyle?: boolean
  hidden?: boolean
  tooltip?: string
  validateTrigger?: FormValidateTrigger
  /** 语义化 className */
  classNames?: FormItemClassNames
  /** 语义化 style */
  styles?: FormItemStyles
}
