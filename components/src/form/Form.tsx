import { defineComponent, ref, provide, inject, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export interface FormRule {
  required?: boolean
  message?: string
  min?: number
  max?: number
  pattern?: RegExp
  validator?: (rule: FormRule, value: any) => Promise<void> | void
  type?: 'string' | 'number' | 'boolean' | 'array' | 'email' | 'url'
  whitespace?: boolean
  len?: number
  enum?: any[]
  trigger?: 'blur' | 'change' | ('blur' | 'change')[]
}

export interface FormProps {
  model?: Record<string, any>
  rules?: Record<string, FormRule | FormRule[]>
  layout?: 'horizontal' | 'vertical' | 'inline'
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
  colon?: boolean
  labelAlign?: 'left' | 'right'
  size?: 'small' | 'middle' | 'large'
  disabled?: boolean
  scrollToFirstError?: boolean
  validateTrigger?: 'blur' | 'change' | ('blur' | 'change')[]
}

export interface FormItemProps {
  name?: string | string[]
  label?: string
  rules?: FormRule | FormRule[]
  required?: boolean
  colon?: boolean
  labelCol?: { span?: number; offset?: number }
  wrapperCol?: { span?: number; offset?: number }
  validateStatus?: '' | 'success' | 'warning' | 'error' | 'validating'
  help?: string
  extra?: string
  hasFeedback?: boolean
  noStyle?: boolean
  hidden?: boolean
  tooltip?: string
}

const FORM_CONTEXT_KEY = Symbol('form-context')

interface FormContext {
  model: Record<string, any>
  rules: Record<string, FormRule | FormRule[]>
  layout: string
  colon: boolean
  labelAlign: string
  size: string
  disabled: boolean
  errors: Record<string, string>
  setError: (name: string, error: string) => void
  clearError: (name: string) => void
  validateField: (name: string) => Promise<boolean>
}

async function runRules(value: any, rules: FormRule[]): Promise<string | null> {
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
      } catch (e: any) {
        return e?.message ?? String(e) ?? '验证失败'
      }
    }
  }
  return null
}

export function useForm() {
  const ctx = inject<FormContext>(FORM_CONTEXT_KEY)
  return {
    validate: async () => {
      if (!ctx) return true
      const names = Object.keys(ctx.rules)
      const results = await Promise.all(names.map((n) => ctx.validateField(n)))
      return results.every(Boolean)
    },
    resetFields: () => {
      if (!ctx) return
      Object.keys(ctx.errors).forEach((k) => ctx.clearError(k))
    },
    getFieldValue: (name: string) => ctx?.model?.[name],
    setFieldValue: (name: string, value: any) => {
      if (ctx?.model) ctx.model[name] = value
    },
  }
}

export const Form = defineComponent({
  name: 'Form',
  props: {
    model: Object as PropType<Record<string, any>>,
    rules: Object as PropType<Record<string, FormRule | FormRule[]>>,
    layout: { type: String as PropType<'horizontal' | 'vertical' | 'inline'>, default: 'horizontal' },
    labelCol: Object as PropType<{ span?: number; offset?: number }>,
    wrapperCol: Object as PropType<{ span?: number; offset?: number }>,
    colon: { type: Boolean, default: true },
    labelAlign: { type: String as PropType<'left' | 'right'>, default: 'right' },
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    disabled: Boolean,
    scrollToFirstError: Boolean,
    validateTrigger: [String, Array] as PropType<'blur' | 'change' | ('blur' | 'change')[]>,
  },
  emits: ['finish', 'finishFailed', 'valuesChange'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('form')
    const errors = ref<Record<string, string>>({})

    const validateField = async (name: string): Promise<boolean> => {
      const rules = props.rules?.[name]
      if (!rules) return true
      const rulesArr = Array.isArray(rules) ? rules : [rules]
      const value = props.model?.[name]
      const error = await runRules(value, rulesArr)
      if (error) {
        errors.value = { ...errors.value, [name]: error }
        return false
      } else {
        const next = { ...errors.value }
        delete next[name]
        errors.value = next
        return true
      }
    }

    provide(FORM_CONTEXT_KEY, {
      get model() { return props.model ?? {} },
      get rules() { return props.rules ?? {} },
      get layout() { return props.layout },
      get colon() { return props.colon },
      get labelAlign() { return props.labelAlign },
      get size() { return props.size },
      get disabled() { return props.disabled ?? false },
      get errors() { return errors.value },
      setError: (name: string, error: string) => { errors.value = { ...errors.value, [name]: error } },
      clearError: (name: string) => {
        const next = { ...errors.value }
        delete next[name]
        errors.value = next
      },
      validateField,
    } as FormContext)

    const handleSubmit = async (e: Event) => {
      e.preventDefault()
      const names = Object.keys(props.rules ?? {})
      const results = await Promise.all(names.map(validateField))
      const allValid = results.every(Boolean)
      if (allValid) {
        emit('finish', props.model)
      } else {
        emit('finishFailed', { values: props.model, errorFields: Object.entries(errors.value).map(([name, errors]) => ({ name, errors: [errors] })) })
      }
    }

    return () => (
      <form
        class={cls(prefixCls, `${prefixCls}-${props.layout}`, {
          [`${prefixCls}-${props.size}`]: props.size !== 'middle',
        })}
        onSubmit={handleSubmit}
      >
        {slots.default?.()}
      </form>
    )
  },
})

export const FormItem = defineComponent({
  name: 'FormItem',
  props: {
    name: [String, Array] as PropType<string | string[]>,
    label: String,
    rules: [Object, Array] as PropType<FormRule | FormRule[]>,
    required: Boolean,
    colon: { type: Boolean, default: undefined },
    labelCol: Object as PropType<{ span?: number; offset?: number }>,
    wrapperCol: Object as PropType<{ span?: number; offset?: number }>,
    validateStatus: String as PropType<'' | 'success' | 'warning' | 'error' | 'validating'>,
    help: String,
    extra: String,
    hasFeedback: Boolean,
    noStyle: Boolean,
    hidden: Boolean,
    tooltip: String,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('form')
    const ctx = inject<FormContext>(FORM_CONTEXT_KEY)

    const fieldName = computed(() => {
      if (!props.name) return ''
      return Array.isArray(props.name) ? props.name.join('.') : props.name
    })

    const error = computed(() => {
      if (props.validateStatus === 'error' && props.help) return props.help
      return fieldName.value ? ctx?.errors[fieldName.value] : undefined
    })

    const status = computed(() => {
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

    if (props.noStyle) {
      return () => slots.default?.()
    }

    if (props.hidden) {
      return () => <div style={{ display: 'none' }}>{slots.default?.()}</div>
    }

    return () => (
      <div class={cls(`${prefixCls}-item`, {
        [`${prefixCls}-item-has-error`]: status.value === 'error',
        [`${prefixCls}-item-has-warning`]: status.value === 'warning',
        [`${prefixCls}-item-has-success`]: status.value === 'success',
        [`${prefixCls}-item-required`]: isRequired.value,
      })}>
        {props.label !== undefined && (
          <div class={`${prefixCls}-item-label`}>
            <label class={cls({ [`${prefixCls}-item-no-colon`]: !showColon.value })}>
              {props.label}
            </label>
          </div>
        )}
        <div class={`${prefixCls}-item-control`}>
          <div class={`${prefixCls}-item-control-input`}>
            {slots.default?.()}
          </div>
          {(error.value || props.help) && (
            <div class={cls(`${prefixCls}-item-explain`, {
              [`${prefixCls}-item-explain-error`]: status.value === 'error',
              [`${prefixCls}-item-explain-warning`]: status.value === 'warning',
              [`${prefixCls}-item-explain-success`]: status.value === 'success',
            })}>
              {error.value ?? props.help}
            </div>
          )}
          {props.extra && (
            <div class={`${prefixCls}-item-extra`}>{props.extra}</div>
          )}
        </div>
      </div>
    )
  },
})
