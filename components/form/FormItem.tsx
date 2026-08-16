import { defineComponent, type PropType, type CSSProperties, inject, computed, watch, onBeforeUnmount } from 'vue'
import { cls } from '../_utils/cls'
import { usePrefixCls } from '../config-provider'
import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, LoadingOutlined } from '@hmfw/icons'
import { FORM_CONTEXT_KEY, type FormContext } from './context'

import type {
  FormColConfig,
  FormItemClassNames,
  FormItemProps,
  FormItemStyles,
  FormRule,
  FormValidateTrigger,
  NamePath,
  ValidateStatus,
} from './types'

/** hasFeedback 状态图标映射，与 AntD v6 一致（三态用 Filled，validating 用转圈） */
const FEEDBACK_ICON_MAP: Partial<Record<ValidateStatus, typeof CheckCircleFilled>> = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
  validating: LoadingOutlined,
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

/** Flatten {span, offset} into a CSS flex-basis percentage; matches AntD 24-col grid math. */
function colToStyle(col?: FormColConfig) {
  if (!col) return undefined
  const style: CSSProperties = {}
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
