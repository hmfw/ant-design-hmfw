import { defineComponent, ref, computed, toRef, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CloseOutlined } from '@hmfw/icons'
import type {
  InputSize,
  InputStatus,
  InputAffix,
  InputProps,
  AllowClearConfig,
  ShowCountConfig,
  InputClassNames,
  InputStyles,
} from './types'
import {
  useMergedValue,
  useFocusExpose,
  useMergedSize,
  useAffixWrapperCls,
  useAllowClear,
  defaultCountStrategy,
} from './hooks'
import { renderAffix } from './shared'

const inputProps = {
  // 值与基础状态
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: undefined },
  placeholder: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  // 通用配置
  size: { type: String as PropType<InputSize>, default: undefined },
  status: { type: String as PropType<InputStatus>, default: '' },
  maxLength: { type: Number, default: undefined },
  id: { type: String, default: undefined },
  // 组件专属
  type: { type: String, default: 'text' },
  prefix: { type: [String, Object, Function] as PropType<InputAffix>, default: undefined },
  suffix: { type: [String, Object, Function] as PropType<InputAffix>, default: undefined },
  allowClear: { type: [Boolean, Object] as PropType<boolean | AllowClearConfig>, default: undefined },
  showCount: { type: [Boolean, Object] as PropType<boolean | ShowCountConfig>, default: undefined },
  // 语义化 API
  classNames: { type: Object as PropType<InputClassNames>, default: undefined },
  styles: { type: Object as PropType<InputStyles>, default: undefined },
} satisfies Record<keyof InputProps, any>

export const Input = defineComponent({
  name: 'Input',
  props: inputProps,
  emits: ['update:value', 'change', 'input', 'focus', 'blur', 'pressEnter', 'clear', 'onPressEnter'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const innerValue = useMergedValue(props)
    const inputRef = ref<HTMLInputElement>()

    const mergedSize = useMergedSize(toRef(props, 'size'))
    const allowClearConfig = useAllowClear(toRef(props, 'allowClear'))

    // Expose focus/blur methods
    expose({ ...useFocusExpose(inputRef), input: inputRef })

    const wrapperCls = useAffixWrapperCls(prefixCls, props, mergedSize)

    const inputCls = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-lg`]: mergedSize.value === 'large',
        [`${prefixCls}-sm`]: mergedSize.value === 'small',
        [`${prefixCls}-status-error`]: props.status === 'error',
        [`${prefixCls}-status-warning`]: props.status === 'warning',
      }),
    )

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        emit('pressEnter', e)
        emit('onPressEnter', e)
      }
    }

    const handleClear = () => {
      if (allowClearConfig.value.disabled) return
      innerValue.value = ''
      emit('update:value', '')
      emit('clear')
      inputRef.value?.focus()
    }

    const hasFix = computed(
      () =>
        slots.prefix ||
        slots.suffix ||
        props.prefix ||
        props.suffix ||
        (props.allowClear && !allowClearConfig.value.disabled) ||
        props.showCount,
    )

    return () => {
      const inputEl = (
        <input
          ref={inputRef}
          class={cls(hasFix.value ? prefixCls : inputCls.value, props.classNames?.input)}
          style={props.styles?.input}
          type={props.type}
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readOnly}
          maxlength={props.maxLength}
          id={props.id}
          aria-invalid={props.status === 'error' || undefined}
          onInput={handleInput}
          onKeydown={handleKeydown}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
      )

      if (!hasFix.value) return inputEl

      const clearIcon = allowClearConfig.value.clearIcon || <CloseOutlined />
      const clearBtn = props.allowClear && innerValue.value && !allowClearConfig.value.disabled && (
        <span class={`${prefixCls}-clear-icon`} onClick={handleClear}>
          {clearIcon}
        </span>
      )

      const countNode = (() => {
        if (!props.showCount) return null
        const strategy = (typeof props.showCount === 'object' && props.showCount.strategy) || defaultCountStrategy
        const count = strategy(innerValue.value)
        const max = props.maxLength
        if (typeof props.showCount === 'object' && props.showCount.formatter) {
          return (
            <span class={cls(`${prefixCls}-show-count-suffix`, props.classNames?.count)} style={props.styles?.count}>
              {props.showCount.formatter({ value: innerValue.value, count, maxLength: max })}
            </span>
          )
        }
        return (
          <span class={cls(`${prefixCls}-show-count-suffix`, props.classNames?.count)} style={props.styles?.count}>
            {max ? `${count} / ${max}` : `${count}`}
          </span>
        )
      })()

      const prefixNode = slots.prefix?.() || (props.prefix && renderAffix(props.prefix))
      const suffixNode = slots.suffix?.() || (props.suffix && renderAffix(props.suffix))

      return (
        <span class={cls(wrapperCls.value, props.classNames?.affixWrapper)} style={props.styles?.affixWrapper}>
          {prefixNode && (
            <span class={cls(`${prefixCls}-prefix`, props.classNames?.prefix)} style={props.styles?.prefix}>
              {prefixNode}
            </span>
          )}
          {inputEl}
          {clearBtn}
          {suffixNode && (
            <span class={cls(`${prefixCls}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
              {suffixNode}
            </span>
          )}
          {countNode}
        </span>
      )
    }
  },
})
