import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

type InputNumberSize = 'small' | 'middle' | 'large'
type InputNumberStatus = 'error' | 'warning'

export const InputNumber = defineComponent({
  name: 'InputNumber',
  props: {
    value: Number,
    defaultValue: Number,
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
    step: { type: Number, default: 1 },
    precision: Number,
    formatter: Function as PropType<(value: number) => string>,
    parser: Function as PropType<(value: string) => number>,
    disabled: Boolean,
    readOnly: Boolean,
    size: { type: String as PropType<InputNumberSize>, default: 'middle' },
    status: String as PropType<InputNumberStatus>,
    placeholder: String,
    controls: { type: Boolean, default: true },
    keyboard: { type: Boolean, default: true },
    stringMode: Boolean,
    addonBefore: String,
    addonAfter: String,
    prefix: String,
  },
  emits: ['update:value', 'change', 'step', 'pressEnter', 'focus', 'blur'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('input-number')

    const innerValue = ref<number | undefined>(props.defaultValue ?? props.value)
    const inputStr = ref('')
    const focused = ref(false)

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => isControlled.value ? props.value : innerValue.value)

    watch(() => props.value, (v) => {
      if (v !== undefined) innerValue.value = v
    })

    const clamp = (v: number) => Math.min(props.max, Math.max(props.min, v))

    const applyPrecision = (v: number) => {
      if (props.precision !== undefined) {
        return parseFloat(v.toFixed(props.precision))
      }
      return v
    }

    const formatDisplay = (v: number | undefined) => {
      if (v === undefined || v === null || isNaN(v)) return ''
      if (props.formatter) return props.formatter(v)
      return props.precision !== undefined ? v.toFixed(props.precision) : String(v)
    }

    const parseInput = (s: string): number | undefined => {
      if (!s.trim()) return undefined
      if (props.parser) return props.parser(s)
      const n = parseFloat(s.replace(/[^\d.-]/g, ''))
      return isNaN(n) ? undefined : n
    }

    const setValue = (v: number | undefined) => {
      if (v === undefined) {
        innerValue.value = undefined
        emit('update:value', undefined)
        emit('change', undefined)
        return
      }
      const clamped = applyPrecision(clamp(v))
      innerValue.value = clamped
      emit('update:value', clamped)
      emit('change', clamped)
    }

    const handleFocus = (e: FocusEvent) => {
      focused.value = true
      inputStr.value = formatDisplay(currentValue.value)
      emit('focus', e)
    }

    const handleBlur = (e: FocusEvent) => {
      focused.value = false
      const parsed = parseInput(inputStr.value)
      setValue(parsed)
      inputStr.value = ''
      emit('blur', e)
    }

    const handleInput = (e: Event) => {
      inputStr.value = (e.target as HTMLInputElement).value
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!props.keyboard) return
      if (e.key === 'ArrowUp') { e.preventDefault(); step(1) }
      if (e.key === 'ArrowDown') { e.preventDefault(); step(-1) }
      if (e.key === 'Enter') emit('pressEnter', e)
    }

    const step = (dir: 1 | -1) => {
      if (props.disabled || props.readOnly) return
      const cur = currentValue.value ?? 0
      const next = applyPrecision(clamp(cur + dir * props.step))
      setValue(next)
      emit('step', next, { offset: dir * props.step, type: dir > 0 ? 'up' : 'down' })
    }

    return () => {
      const displayValue = focused.value ? inputStr.value : formatDisplay(currentValue.value)

      const inputEl = (
        <div class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-focused`]: focused.value,
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-readonly`]: props.readOnly,
          [`${prefixCls}-status-${props.status}`]: !!props.status,
        })}>
          {(props.prefix || slots.prefix) && (
            <span class={`${prefixCls}-prefix`}>{slots.prefix?.() ?? props.prefix}</span>
          )}
          <input
            class={`${prefixCls}-input`}
            value={displayValue}
            disabled={props.disabled}
            readonly={props.readOnly}
            placeholder={props.placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
            onKeydown={handleKeydown}
          />
          {props.controls && (
            <div class={`${prefixCls}-handler-wrap`}>
              <span
                class={cls(`${prefixCls}-handler`, `${prefixCls}-handler-up`, {
                  [`${prefixCls}-handler-up-disabled`]: props.disabled || (currentValue.value !== undefined && currentValue.value >= props.max),
                })}
                onMousedown={(e) => { e.preventDefault(); step(1) }}
              >
                <span class={`${prefixCls}-handler-up-inner`}>▲</span>
              </span>
              <span
                class={cls(`${prefixCls}-handler`, `${prefixCls}-handler-down`, {
                  [`${prefixCls}-handler-down-disabled`]: props.disabled || (currentValue.value !== undefined && currentValue.value <= props.min),
                })}
                onMousedown={(e) => { e.preventDefault(); step(-1) }}
              >
                <span class={`${prefixCls}-handler-down-inner`}>▼</span>
              </span>
            </div>
          )}
        </div>
      )

      if (props.addonBefore || props.addonAfter || slots.addonBefore || slots.addonAfter) {
        return (
          <div class={`${prefixCls}-group-wrapper`}>
            <div class={`${prefixCls}-wrapper ${prefixCls}-group`}>
              {(props.addonBefore || slots.addonBefore) && (
                <span class={`${prefixCls}-group-addon`}>{slots.addonBefore?.() ?? props.addonBefore}</span>
              )}
              {inputEl}
              {(props.addonAfter || slots.addonAfter) && (
                <span class={`${prefixCls}-group-addon`}>{slots.addonAfter?.() ?? props.addonAfter}</span>
              )}
            </div>
          </div>
        )
      }

      return inputEl
    }
  },
})
