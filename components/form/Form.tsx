import { defineComponent, ref, provide, inject, computed, watch, onMounted, onBeforeUnmount, type PropType } from 'vue'
import { usePrefixCls, useConfig, CONFIG_PROVIDER_KEY } from '../config-provider'
import type { ComponentSize } from '../config-provider'
import type { Locale } from '../_locale'
import { cls } from '../_utils'
import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, LoadingOutlined } from '@hmfw/icons'
import type {
  FormClassNames,
  FormColConfig,
  FormItemClassNames,
  FormItemProps,
  FormItemStyles,
  FormProps,
  FormRule,
  FormStyles,
  FormValidateTrigger,
  NamePath,
  ValidateStatus,
} from './types'

export type * from './types'

/** hasFeedback 状态图标映射，与 AntD v6 一致（三态用 Filled，validating 用转圈） */
const FEEDBACK_ICON_MAP: Partial<Record<ValidateStatus, typeof CheckCircleFilled>> = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined,
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
  labelCol?: FormColConfig
  wrapperCol?: FormColConfig
  validateTrigger: FormValidateTrigger
  requiredMark: boolean | 'optional'
  preserve: boolean
  errors: Record<string, string>
  touched: Record<string, boolean>
  setError: (name: string, error: string) => void
  clearError: (name: string) => void
  validateField: (name: string, trigger?: 'blur' | 'change') => Promise<boolean>
  notifyValueChange: (name: string, value: unknown) => void
  setFieldTouched: (name: string, touched: boolean) => void
  resetFields: (nameList?: string[]) => void
  /** FormItem 挂载时上报自身 rules，使其参与 validate()/validateFields() */
  registerField: (name: string, rules: FormRule[]) => void
  unregisterField: (name: string) => void
  /** Form.rules 与 FormItem.rules 的并集字段名 */
  allFieldNames: () => string[]
}

/** Resolve `NamePath` to a dot-joined string key (used as the errors map key). */
function namePathKey(name: NamePath | undefined): string {
  if (name === undefined || name === null || name === '') return ''
  return Array.isArray(name) ? name.join('.') : String(name)
}

/** Inverse of `namePathKey`: turn a dotted string key back into a NamePath. */
function parseNamePath(key: string): NamePath {
  return key.includes('.') ? key.split('.') : key
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

/** Write a deep value into an object using a NamePath; intermediate objects are created as needed. */
function setValueByPath(obj: Record<string, unknown>, name: NamePath, value: unknown): void {
  if (!Array.isArray(name)) {
    obj[String(name)] = value
    return
  }
  if (name.length === 0) return
  let cur: Record<string, unknown> = obj
  // 逐段下钻到倒数第二层，缺失的中间层按普通对象补齐
  for (let i = 0; i < name.length - 1; i += 1) {
    const seg = String(name[i])
    const next = cur[seg]
    if (next == null || typeof next !== 'object') {
      cur[seg] = {}
    }
    cur = cur[seg] as Record<string, unknown>
  }
  cur[String(name[name.length - 1])] = value
}

/** Structured deep clone with a JSON fallback; used to snapshot initial values. */
function cloneDeep<T>(value: T): T {
  if (value == null || typeof value !== 'object') return value
  if (typeof structuredClone === 'function') {
    try {
      return structuredClone(value)
    } catch {
      // 含函数/Symbol 等不可克隆值时降级
    }
  }
  try {
    return JSON.parse(JSON.stringify(value)) as T
  } catch {
    return value
  }
}

/** 缺省校验文案来自语言包，由调用方注入（此函数在组件外层，无法自行 inject） */
async function runRules(value: unknown, rules: FormRule[], locale: Locale['Form']): Promise<string | null> {
  for (const rule of rules) {
    if (rule.required && (value === undefined || value === null || value === '')) {
      return rule.message ?? locale.required
    }
    if (rule.min !== undefined && typeof value === 'string' && value.length < rule.min) {
      return rule.message ?? locale.min(rule.min)
    }
    if (rule.max !== undefined && typeof value === 'string' && value.length > rule.max) {
      return rule.message ?? locale.max(rule.max)
    }
    if (rule.pattern && !rule.pattern.test(String(value ?? ''))) {
      return rule.message ?? locale.pattern
    }
    if (rule.type === 'email' && value) {
      const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailReg.test(String(value))) return rule.message ?? locale.email
    }
    if (rule.validator) {
      try {
        await rule.validator(rule, value)
      } catch (e: unknown) {
        // 优先使用 Error.message，其次转为字符串，最后使用默认消息
        if (e instanceof Error) {
          return e.message || locale.validateFailed
        }
        if (typeof e === 'string') {
          return e || locale.validateFailed
        }
        return locale.validateFailed
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
      const names = nameList ?? ctx.allFieldNames()
      const results = await Promise.all(names.map((n) => ctx.validateField(n)))
      return results.every(Boolean)
    },
    /** Alias for AntD parity. */
    validateFields: async (nameList?: string[]) => {
      if (!ctx) return {}
      const names = nameList ?? ctx.allFieldNames()
      const results = await Promise.all(names.map((n) => ctx.validateField(n)))
      if (results.every(Boolean)) return ctx.model
      throw {
        values: ctx.model,
        errorFields: Object.entries(ctx.errors).map(([name, error]) => ({ name, errors: [error] })),
      }
    },
    /** 恢复初始值并清除校验状态；初始值快照由 Form 在挂载时记录。 */
    resetFields: (nameList?: string[]) => {
      if (!ctx) return
      ctx.resetFields(nameList)
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
      const names = nameList ?? ctx.allFieldNames()
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
      const names = nameList ?? ctx.allFieldNames()
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

const formProps = {
  model: { type: Object as PropType<Record<string, unknown>>, default: undefined },
  rules: { type: Object as PropType<Record<string, FormRule | FormRule[]>>, default: undefined },
  layout: {
    type: String as PropType<'horizontal' | 'vertical' | 'inline'>,
    default: 'horizontal',
  },
  labelCol: { type: Object as PropType<FormColConfig>, default: undefined },
  wrapperCol: { type: Object as PropType<FormColConfig>, default: undefined },
  colon: { type: Boolean, default: true },
  labelAlign: { type: String as PropType<'left' | 'right'>, default: 'right' },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  disabled: { type: Boolean, default: false },
  scrollToFirstError: { type: Boolean, default: false },
  validateTrigger: {
    type: [String, Array] as PropType<FormValidateTrigger>,
    default: 'change',
  },
  requiredMark: {
    type: [Boolean, String] as PropType<boolean | 'optional'>,
    default: true,
  },
  preserve: { type: Boolean, default: false },
  classNames: { type: Object as PropType<FormClassNames>, default: undefined },
  styles: { type: Object as PropType<FormStyles>, default: undefined },
} satisfies Record<keyof FormProps, any>

export const Form = defineComponent({
  name: 'Form',
  props: formProps,
  emits: ['finish', 'finishFailed', 'valuesChange'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('form')

    // 向下重新提供 config，把 Form 的 size / disabled 下发给内部所有控件。
    // 控件已统一从 config 读取 componentSize / componentDisabled，无需逐个改造。
    const parentConfig = useConfig()
    provide(
      CONFIG_PROVIDER_KEY,
      computed(() => ({
        ...parentConfig.value,
        componentSize: props.size ?? parentConfig.value.componentSize,
        componentDisabled: props.disabled || parentConfig.value.componentDisabled,
      })),
    )

    const errors = ref<Record<string, string>>({})
    const touched = ref<Record<string, boolean>>({})
    // 挂载时对 model 做深拷贝快照，供 resetFields 恢复初始值
    const initialValues = ref<Record<string, unknown>>({})
    // FormItem 自带的 rules 注册表：key 为字段名，随 FormItem 挂载/卸载增删
    const fieldRules = ref<Record<string, FormRule[]>>({})

    onMounted(() => {
      initialValues.value = cloneDeep(props.model ?? {})
    })

    const registerField = (name: string, rules: FormRule[]) => {
      if (!name) return
      fieldRules.value = { ...fieldRules.value, [name]: rules }
    }

    const unregisterField = (name: string) => {
      if (!name || !(name in fieldRules.value)) return
      const next = { ...fieldRules.value }
      delete next[name]
      fieldRules.value = next
    }

    /** 参与校验的字段全集：Form.rules 的键 ∪ 已注册 FormItem 的字段名 */
    const allFieldNames = () => [...new Set([...Object.keys(props.rules ?? {}), ...Object.keys(fieldRules.value)])]

    /** 合并 Form.rules 与 FormItem.rules（两者都生效，Form 级先执行）。 */
    const resolveRules = (name: string): FormRule[] => {
      const formLevel = props.rules?.[name]
      const formArr = formLevel ? (Array.isArray(formLevel) ? formLevel : [formLevel]) : []
      return [...formArr, ...(fieldRules.value[name] ?? [])]
    }

    /**
     * 校验单个字段。
     * @param trigger 指定触发时机时，仅执行未声明 `trigger` 或声明包含该时机的规则；
     *                不传（如 submit/主动 validate）时执行全部规则。
     */
    const validateField = async (name: string, trigger?: 'blur' | 'change'): Promise<boolean> => {
      let rulesArr = resolveRules(name)
      if (trigger) {
        rulesArr = rulesArr.filter((r) => {
          if (!r.trigger) return true
          return Array.isArray(r.trigger) ? r.trigger.includes(trigger) : r.trigger === trigger
        })
      }
      if (rulesArr.length === 0) return true
      // Allow nested name keys ('a.b' or array path).
      const namePath: NamePath = name.includes('.') ? name.split('.') : name
      const value = getValueByPath(props.model, namePath)
      const error = await runRules(value, rulesArr, parentConfig.value.locale.Form)
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
      // 延迟转发到下方定义的 resetFields，避免在 provide 时引用尚未初始化的变量
      resetFields: (nameList?: string[]) => resetFields(nameList),
      registerField,
      unregisterField,
      allFieldNames,
    } as FormContext)

    const submit = async () => {
      const names = allFieldNames()
      const results = await Promise.all(names.map((n) => validateField(n)))
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
      const names = nameList ?? allFieldNames()
      const results = await Promise.all(names.map((n) => validateField(n)))
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
    /**
     * 重置字段：恢复挂载时的初始值并清除校验状态（对齐 AntD resetFields 行为）。
     * 不传 nameList 时重置 model 上的全部字段。
     */
    const resetFields = (nameList?: string[]) => {
      const names = nameList ?? Object.keys(initialValues.value)
      if (props.model) {
        names.forEach((name) => {
          // 'a.b' 形式的键还原为路径数组，保证嵌套字段能正确写回
          const namePath: NamePath = name.includes('.') ? name.split('.') : name
          setValueByPath(
            props.model as Record<string, unknown>,
            namePath,
            cloneDeep(getValueByPath(initialValues.value, namePath)),
          )
        })
      }
      // touched 状态同步复位，否则 isFieldsTouched 会残留旧值
      if (nameList) {
        const nextTouched = { ...touched.value }
        names.forEach((n) => {
          delete nextTouched[n]
        })
        touched.value = nextTouched
      } else {
        touched.value = {}
      }
      clearValidate(nameList)
    }
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
        const names = nameList ?? allFieldNames()
        return names.map((name) => ({
          name,
          errors: errors.value[name] ? [errors.value[name]] : [],
        }))
      },
      isFieldsTouched: (nameList?: string[], allTouched = false) => {
        const names = nameList ?? allFieldNames()
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
          `${prefixCls}-label-${props.labelAlign}`,
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
function colToStyle(col?: FormColConfig) {
  if (!col) return undefined
  const style: Record<string, string> = {}
  if (col.span !== undefined) style.flex = `0 0 ${(col.span / 24) * 100}%`
  if (col.offset !== undefined) style.marginLeft = `${(col.offset / 24) * 100}%`
  return style
}

const formItemProps = {
  name: { type: [String, Number, Array] as PropType<NamePath>, default: undefined },
  label: { type: String, default: undefined },
  rules: { type: [Object, Array] as PropType<FormRule | FormRule[]>, default: undefined },
  required: { type: Boolean, default: false },
  colon: { type: Boolean, default: undefined },
  labelCol: { type: Object as PropType<FormColConfig>, default: undefined },
  wrapperCol: { type: Object as PropType<FormColConfig>, default: undefined },
  validateStatus: { type: String as PropType<ValidateStatus>, default: undefined },
  help: { type: String, default: undefined },
  extra: { type: String, default: undefined },
  hasFeedback: { type: Boolean, default: false },
  noStyle: { type: Boolean, default: false },
  hidden: { type: Boolean, default: false },
  tooltip: { type: String, default: undefined },
  validateTrigger: { type: [String, Array] as PropType<FormValidateTrigger>, default: undefined },
  classNames: { type: Object as PropType<FormItemClassNames>, default: undefined },
  styles: { type: Object as PropType<FormItemStyles>, default: undefined },
} satisfies Record<keyof FormItemProps, any>

export const FormItem = defineComponent({
  name: 'FormItem',
  props: formItemProps,
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

    /**
     * hasFeedback 反馈图标：仅在有明确校验状态时渲染。
     * validating 用 Loading 转圈，其余三态对齐 AntD 使用 Filled 图标。
     */
    const feedbackIcon = computed(() => {
      if (!props.hasFeedback || !status.value) return null
      const Icon = FEEDBACK_ICON_MAP[status.value]
      return Icon ? <Icon /> : null
    })

    /** FormItem 自身声明的 rules，规整为数组 */
    const ownRules = computed<FormRule[]>(() => {
      if (!props.rules) return []
      return Array.isArray(props.rules) ? props.rules : [props.rules]
    })

    const isRequired = computed(() => {
      if (props.required) return true
      const formLevel = ctx?.rules[fieldName.value]
      const formArr = formLevel ? (Array.isArray(formLevel) ? formLevel : [formLevel]) : []
      return [...formArr, ...ownRules.value].some((r) => r.required)
    })

    // 把自身 rules 注册进 Form，使 validate()/validateFields() 能覆盖到该字段。
    // 用 watch 而非 onMounted，rules 或 name 变化时同步更新注册表。
    watch(
      [fieldName, ownRules],
      ([name], old) => {
        const prevName = old?.[0]
        if (prevName && prevName !== name) ctx?.unregisterField(prevName)
        if (name) ctx?.registerField(name, ownRules.value)
      },
      { immediate: true },
    )

    onBeforeUnmount(() => {
      // preserve=true 时保留注册信息，与 AntD 的字段保留语义一致
      if (fieldName.value && !ctx?.preserve) ctx?.unregisterField(fieldName.value)
    })

    /** 生效的触发时机：FormItem.validateTrigger 优先于 Form.validateTrigger，默认 change。 */
    const mergedTrigger = computed<('blur' | 'change')[]>(() => {
      const t = props.validateTrigger ?? ctx?.validateTrigger ?? 'change'
      return Array.isArray(t) ? t : [t]
    })

    const hasRulesFor = () => {
      if (ownRules.value.length > 0) return true
      return Boolean(fieldName.value && ctx?.rules[fieldName.value])
    }

    // change 触发：监听 model 上该字段的值变化。
    // watch 默认不 immediate，因此初始渲染不会校验，仅在值真正变化后触发。
    watch(
      () => (fieldName.value && ctx ? getValueByPath(ctx.model, parseNamePath(fieldName.value)) : undefined),
      () => {
        if (!fieldName.value || !ctx || !hasRulesFor()) return
        if (!mergedTrigger.value.includes('change')) return
        void ctx.validateField(fieldName.value, 'change')
      },
    )

    // blur 触发：控件类型任意，统一用捕获阶段的 focusout 代理，无需侵入子组件 props
    const onFocusOut = () => {
      if (!fieldName.value || !ctx || !hasRulesFor()) return
      ctx.setFieldTouched(fieldName.value, true)
      if (!mergedTrigger.value.includes('blur')) return
      void ctx.validateField(fieldName.value, 'blur')
    }

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
              // optional 模式下不显示必填星号，改由非必填项标注「可选」，与 AntD 一致
              [`${prefixCls}-item-required-mark-optional`]: ctx?.requiredMark === 'optional',
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
          data-field-name={fieldName.value || undefined}
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
            <div class={`${prefixCls}-item-control-input`} onFocusout={onFocusOut}>
              <div class={`${prefixCls}-item-control-input-content`}>{slots.default?.()}</div>
              {feedbackIcon.value && (
                <span class={cls(`${prefixCls}-item-feedback-icon`, `${prefixCls}-item-feedback-icon-${status.value}`)}>
                  {feedbackIcon.value}
                </span>
              )}
            </div>
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
