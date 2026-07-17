import { defineComponent, ref, provide, inject, computed, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import type { ComponentSize } from '../config-provider'
import { cls } from '../_utils'

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

export type NamePath = string | number | (string | number)[]
export type ValidateStatus = '' | 'success' | 'warning' | 'error' | 'validating'

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
  layout?: 'horizontal' | 'vertical' | 'inline'
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
  colon?: boolean
  labelAlign?: 'left' | 'right'
  size?: ComponentSize
  disabled?: boolean
  scrollToFirstError?: boolean
  validateTrigger?: 'blur' | 'change' | ('blur' | 'change')[]
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
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
  validateStatus?: ValidateStatus
  help?: string
  extra?: string
  hasFeedback?: boolean
  noStyle?: boolean
  hidden?: boolean
  tooltip?: string
  validateTrigger?: 'blur' | 'change' | ('blur' | 'change')[]
  /** 语义化 className */
  classNames?: FormItemClassNames
  /** 语义化 style */
  styles?: FormItemStyles
}

const FORM_CONTEXT_KEY = Symbol('form-context')

interface FormContext {
  model: Record<string, unknown>
  rules: Record<string, FormRule | FormRule[]>
  layout: string
  colon: boolean
  labelAlign: string
  size: string
  disabled: boolean
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
  validateTrigger: 'blur' | 'change' | ('blur' | 'change')[]
  requiredMark: boolean | 'optional'
  preserve: boolean
  errors: Record<string, string>
  touched: Record<string, boolean>
  setError: (name: string, error: string) => void
  clearError: (name: string) => void
  validateField: (name: string) => Promise<boolean>
  notifyValueChange: (name: string, value: unknown) => void
  setFieldTouched: (name: string, touched: boolean) => void
}

/** Resolve `NamePath` to a dot-joined string key (used as the errors map key). */
function namePathKey(name: NamePath | undefined): string {
  if (name === undefined || name === null || name === '') return ''
  return Array.isArray(name) ? name.join('.') : String(name)
}

/** Read a deep value from an object using a NamePath. */
function getValueByPath(obj: Record<string, unknown> | undefined, name: NamePath): unknown {
  if (!obj) return undefined
  if (!Array.isArray(name)) return obj[String(name)]
  let cur: unknown = obj
  for (const seg of name) {
    if (cur == null) return undefined
    cur = (cur as Record<string, unknown>)[String(seg)]
  }
  return cur
}

async function runRules(value: unknown, rules: FormRule[]): Promise<string | null> {
  for (const rule of rules) {
    if (rule.required && (value === undefined || value === null || value === '')) {
      return rule.message ?? '此字段为必填项'
    }
    if (rule.min !== undefined && typeof value === 'string' && value.length < rule.min) {
      return rule.message ?? `最少 ${rule.min} 个字符`
    }
    if (rule.max !== undefined && typeof value === 'string' && value.length > rule.max) {
      return rule.message ?? `最多 ${rule.max} 个字符`
    }
    if (rule.pattern && !rule.pattern.test(String(value ?? ''))) {
      return rule.message ?? '格式不正确'
    }
    if (rule.type === 'email' && value) {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailReg.test(String(value))) return rule.message ?? '请输入有效的邮箱地址'
    }
    if (rule.validator) {
      try {
        await rule.validator(rule, value)
      } catch (e: unknown) {
        // 优先使用 Error.message，其次转为字符串，最后使用默认消息
        if (e instanceof Error) {
          return e.message || '验证失败'
        }
        if (typeof e === 'string') {
          return e || '验证失败'
        }
        return '验证失败'
      }
    }
  }
  return null
}

/** Composable matching ant-design-vue conventions; AntD React's `Form.useForm` is a different model. */
export function useForm() {
  const ctx = inject<FormContext | undefined>(FORM_CONTEXT_KEY, undefined)
  return {
    validate: async (nameList?: string[]) => {
      if (!ctx) return true
      const names = nameList ?? Object.keys(ctx.rules)
      const results = await Promise.all(names.map((n) => ctx.validateField(n)))
      return results.every(Boolean)
    },
    /** Alias for AntD parity. */
    validateFields: async (nameList?: string[]) => {
      if (!ctx) return {}
      const names = nameList ?? Object.keys(ctx.rules)
      const results = await Promise.all(names.map((n) => ctx.validateField(n)))
      if (results.every(Boolean)) return ctx.model
      throw {
        values: ctx.model,
        errorFields: Object.entries(ctx.errors).map(([name, error]) => ({ name, errors: [error] })),
      }
    },
    resetFields: () => {
      if (!ctx) return
      Object.keys(ctx.errors).forEach((k) => ctx.clearError(k))
    },
    clearValidate: (nameList?: string[]) => {
      if (!ctx) return
      const names = nameList ?? Object.keys(ctx.errors)
      names.forEach((n) => ctx.clearError(n))
    },
    getFieldValue: (name: string) => ctx?.model?.[name],
    getFieldsValue: () => ctx?.model ?? {},
    setFieldValue: (name: string, value: unknown) => {
      if (ctx?.model) (ctx.model as Record<string, unknown>)[name] = value
    },
    setFieldsValue: (values: Record<string, unknown>) => {
      if (!ctx?.model) return
      Object.entries(values).forEach(([k, v]) => {
        ;(ctx.model as Record<string, unknown>)[k] = v
      })
    },
    /** Get all field errors. Returns array of {name, errors[]} objects. */
    getFieldsError: (nameList?: string[]) => {
      if (!ctx) return []
      const names = nameList ?? Object.keys(ctx.rules)
      return names.map((name) => ({
        name,
        errors: ctx.errors[name] ? [ctx.errors[name]] : [],
      }))
    },
    /** Get single field error. */
    getFieldError: (name: string) => {
      return ctx?.errors[name] ? [ctx.errors[name]] : []
    },
    /** Check if fields have been touched (user interacted). */
    isFieldsTouched: (nameList?: string[], allTouched = false) => {
      if (!ctx) return false
      const names = nameList ?? Object.keys(ctx.rules)
      if (allTouched) {
        return names.every((name) => ctx.touched[name])
      }
      return names.some((name) => ctx.touched[name])
    },
    /** Check if single field has been touched. */
    isFieldTouched: (name: string) => {
      return ctx?.touched[name] ?? false
    },
    /** Check if fields are validating (not implemented yet, returns false). */
    isFieldsValidating: (_nameList?: string[]) => {
      // Placeholder - would need async validation state tracking
      return false
    },
    /** Scroll to first error field. */
    scrollToField: (name: string) => {
      const prefixCls = 'hmfw-form'
      const el =
        document.querySelector(`[data-field-name="${name}"]`) ?? document.querySelector(`.${prefixCls}-item-has-error`)
      el?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' })
    },
  }
}

export const Form = defineComponent({
  name: 'Form',
  props: {
    model: Object as PropType<Record<string, unknown>>,
    rules: Object as PropType<Record<string, FormRule | FormRule[]>>,
    layout: {
      type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
      default: 'horizontal',
    },
    labelCol: Object as PropType<{ span?: number; offset?: number }>,
    wrapperCol: Object as PropType<{ span?: number; offset?: number }>,
    colon: { type: Boolean, default: true },
    labelAlign: { type: String as PropType<'left' | 'right'>, default: 'right' },
    size: { type: String as PropType<ComponentSize>, default: 'middle' },
    disabled: Boolean,
    scrollToFirstError: Boolean,
    validateTrigger: {
      type: [String, Array] as PropType<'blur' | 'change' | ('blur' | 'change')[]>,
      default: 'change',
    },
    requiredMark: {
      type: [Boolean, String] as PropType<boolean | 'optional'>,
      default: true,
    },
    preserve: { type: Boolean, default: false },
    classNames: Object as PropType<FormClassNames>,
    styles: Object as PropType<FormStyles>,
  },
  emits: ['finish', 'finishFailed', 'valuesChange'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('form')
    const errors = ref<Record<string, string>>({})
    const touched = ref<Record<string, boolean>>({})

    const validateField = async (name: string): Promise<boolean> => {
      const rules = props.rules?.[name]
      if (!rules) return true
      const rulesArr = Array.isArray(rules) ? rules : [rules]
      // Allow nested name keys ('a.b' or array path).
      const namePath: NamePath = name.includes('.') ? name.split('.') : name
      const value = getValueByPath(props.model, namePath)
      const error = await runRules(value, rulesArr)
      if (error) {
        errors.value = { ...errors.value, [name]: error }
        return false
      }
      const next = { ...errors.value }
      delete next[name]
      errors.value = next
      return true
    }

    const scrollToFirstErrorField = () => {
      // Find the first FormItem with `-has-error` class and scroll to it.
      const el = document.querySelector(`.${prefixCls}-item-has-error`)
      el?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' })
    }

    provide(FORM_CONTEXT_KEY, {
      get model() {
        return props.model ?? {}
      },
      get rules() {
        return props.rules ?? {}
      },
      get layout() {
        return props.layout
      },
      get colon() {
        return props.colon
      },
      get labelAlign() {
        return props.labelAlign
      },
      get size() {
        return props.size
      },
      get disabled() {
        return props.disabled ?? false
      },
      get labelCol() {
        return props.labelCol
      },
      get wrapperCol() {
        return props.wrapperCol
      },
      get validateTrigger() {
        return props.validateTrigger ?? 'change'
      },
      get requiredMark() {
        return props.requiredMark ?? true
      },
      get preserve() {
        return props.preserve ?? false
      },
      get errors() {
        return errors.value
      },
      get touched() {
        return touched.value
      },
      setError: (name: string, error: string) => {
        errors.value = { ...errors.value, [name]: error }
      },
      clearError: (name: string) => {
        const next = { ...errors.value }
        delete next[name]
        errors.value = next
      },
      validateField,
      notifyValueChange: (name: string, value: unknown) => {
        emit('valuesChange', { [name]: value }, props.model ?? {})
      },
      setFieldTouched: (name: string, touchedState: boolean) => {
        touched.value = { ...touched.value, [name]: touchedState }
      },
    } as FormContext)

    const submit = async () => {
      const names = Object.keys(props.rules ?? {})
      const results = await Promise.all(names.map(validateField))
      const allValid = results.every(Boolean)
      if (allValid) {
        emit('finish', props.model)
      } else {
        emit('finishFailed', {
          values: props.model,
          errorFields: Object.entries(errors.value).map(([name, error]) => ({
            name,
            errors: [error],
          })),
        })
        if (props.scrollToFirstError) scrollToFirstErrorField()
      }
    }

    const handleSubmit = (e: Event) => {
      e.preventDefault()
      submit()
    }

    /** Public ref API — keeps `formRef.validate()/clearValidate()` working in templates. */
    const validate = async (nameList?: string[]) => {
      const names = nameList ?? Object.keys(props.rules ?? {})
      const results = await Promise.all(names.map(validateField))
      if (results.every(Boolean)) return props.model
      throw {
        values: props.model,
        errorFields: Object.entries(errors.value).map(([name, error]) => ({
          name,
          errors: [error],
        })),
      }
    }
    const clearValidate = (nameList?: string[]) => {
      const names = nameList ?? Object.keys(errors.value)
      const next = { ...errors.value }
      names.forEach((n) => {
        delete next[n]
      })
      errors.value = next
    }
    const resetFields = () => clearValidate()
    const scrollToField = (name: string) => {
      const el =
        document.querySelector(`[data-field-name="${name}"]`) ?? document.querySelector(`.${prefixCls}-item-has-error`)
      el?.scrollIntoView?.({ block: 'nearest', behavior: 'smooth' })
    }

    expose({
      validate,
      validateFields: validate,
      clearValidate,
      resetFields,
      submit,
      scrollToField,
      getFieldsValue: () => props.model ?? {},
      getFieldsError: (nameList?: string[]) => {
        const names = nameList ?? Object.keys(props.rules ?? {})
        return names.map((name) => ({
          name,
          errors: errors.value[name] ? [errors.value[name]] : [],
        }))
      },
      isFieldsTouched: (nameList?: string[], allTouched = false) => {
        const names = nameList ?? Object.keys(props.rules ?? {})
        if (allTouched) {
          return names.every((name) => touched.value[name])
        }
        return names.some((name) => touched.value[name])
      },
    })

    return () => (
      <form
        class={cls(
          prefixCls,
          `${prefixCls}-${props.layout}`,
          `${prefixCls}-${props.size}`,
          {
            [`${prefixCls}-hide-required-mark`]: props.requiredMark === false,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
        onSubmit={handleSubmit}
      >
        {slots.default?.()}
      </form>
    )
  },
})

/** Flatten {span, offset} into a CSS flex-basis percentage; matches AntD 24-col grid math. */
function colToStyle(col?: { span?: number; offset?: number }) {
  if (!col) return undefined
  const style: Record<string, string> = {}
  if (col.span !== undefined) style.flex = `0 0 ${(col.span / 24) * 100}%`
  if (col.offset !== undefined) style.marginLeft = `${(col.offset / 24) * 100}%`
  return style
}

export const FormItem = defineComponent({
  name: 'FormItem',
  props: {
    name: [String, Number, Array] as PropType<NamePath>,
    label: String,
    rules: [Object, Array] as PropType<FormRule | FormRule[]>,
    required: Boolean,
    colon: { type: Boolean, default: undefined },
    labelCol: Object as PropType<{ span?: number; offset?: number }>,
    wrapperCol: Object as PropType<{ span?: number; offset?: number }>,
    validateStatus: String as PropType<ValidateStatus>,
    help: String,
    extra: String,
    hasFeedback: Boolean,
    noStyle: Boolean,
    hidden: Boolean,
    tooltip: String,
    validateTrigger: [String, Array] as PropType<'blur' | 'change' | ('blur' | 'change')[]>,
    classNames: Object as PropType<FormItemClassNames>,
    styles: Object as PropType<FormItemStyles>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('form')
    // 提供默认值 undefined，允许 FormItem 脱离 Form 独立使用而不触发注入告警
    const ctx = inject<FormContext | undefined>(FORM_CONTEXT_KEY, undefined)

    const fieldName = computed(() => namePathKey(props.name))

    const error = computed(() => {
      if (props.validateStatus === 'error' && props.help) return props.help
      return fieldName.value ? ctx?.errors[fieldName.value] : undefined
    })

    const status = computed<ValidateStatus>(() => {
      if (props.validateStatus) return props.validateStatus
      if (error.value) return 'error'
      return ''
    })

    const isRequired = computed(() => {
      if (props.required) return true
      const rules = props.rules ?? ctx?.rules[fieldName.value]
      if (!rules) return false
      const arr = Array.isArray(rules) ? rules : [rules]
      return arr.some((r) => r.required)
    })

    const showColon = computed(() => {
      if (props.colon !== undefined) return props.colon
      return ctx?.colon ?? true
    })

    const mergedLabelCol = computed(() => props.labelCol ?? ctx?.labelCol)
    const mergedWrapperCol = computed(() => props.wrapperCol ?? ctx?.wrapperCol)

    const isHorizontal = computed(() => ctx?.layout === 'horizontal' || ctx?.layout === undefined)

    if (props.noStyle) {
      return () => slots.default?.()
    }

    if (props.hidden) {
      return () => <div style={{ display: 'none' }}>{slots.default?.()}</div>
    }

    return () => {
      const labelStyle = isHorizontal.value ? colToStyle(mergedLabelCol.value) : undefined
      const wrapperStyle = isHorizontal.value ? colToStyle(mergedWrapperCol.value) : undefined
      const showOptionalMark = ctx?.requiredMark === 'optional' && !isRequired.value

      return (
        <div
          class={cls(
            `${prefixCls}-item`,
            {
              [`${prefixCls}-item-has-error`]: status.value === 'error',
              [`${prefixCls}-item-has-warning`]: status.value === 'warning',
              [`${prefixCls}-item-has-success`]: status.value === 'success',
              [`${prefixCls}-item-required`]: isRequired.value && ctx?.requiredMark !== false,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
        >
          {(props.label !== undefined || slots.label) && (
            <div
              class={cls(`${prefixCls}-item-label`, props.classNames?.label)}
              style={{ ...labelStyle, ...props.styles?.label }}
            >
              <label class={cls({ [`${prefixCls}-item-no-colon`]: !showColon.value })}>
                {slots.label ? slots.label() : props.label}
                {props.tooltip && (
                  <span class={`${prefixCls}-item-tooltip`} title={props.tooltip}>
                    ⓘ
                  </span>
                )}
                {showOptionalMark && <span class={`${prefixCls}-item-optional`}>（可选）</span>}
              </label>
            </div>
          )}
          <div
            class={cls(`${prefixCls}-item-control`, props.classNames?.control)}
            style={{ ...wrapperStyle, ...props.styles?.control }}
          >
            <div class={`${prefixCls}-item-control-input`}>{slots.default?.()}</div>
            {(error.value || props.help) && (
              <div
                class={cls(
                  `${prefixCls}-item-explain`,
                  {
                    [`${prefixCls}-item-explain-error`]: status.value === 'error',
                    [`${prefixCls}-item-explain-warning`]: status.value === 'warning',
                    [`${prefixCls}-item-explain-success`]: status.value === 'success',
                  },
                  props.classNames?.feedback,
                )}
                style={props.styles?.feedback}
              >
                {error.value ?? props.help}
              </div>
            )}
            {props.extra && (
              <div class={cls(`${prefixCls}-item-extra`, props.classNames?.extra)} style={props.styles?.extra}>
                {props.extra}
              </div>
            )}
          </div>
        </div>
      )
    }
  },
})
