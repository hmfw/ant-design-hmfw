import { defineComponent, ref, computed, watch, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

type InputNumberSize = 'small' | 'middle' | 'large'
type InputNumberStatus = 'error' | 'warning'
type InputNumberVariant = 'outlined' | 'filled' | 'borderless' | 'underlined'
type InputNumberMode = 'input' | 'spinner'

interface ControlsConfig {
  upIcon?: VNode | string
  downIcon?: VNode | string
}

export const InputNumber = defineComponent({
  name: 'InputNumber',
  props: {
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
  },
  emits: ['update:value', 'change', 'step', 'pressEnter', 'focus', 'blur'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('input-number')

    const innerValue = ref<number | undefined>(props.defaultValue ?? props.value)
    const inputStr = ref('')
    const focused = ref(false)
    const inputRef = ref<HTMLInputElement>()

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => isControlled.value ? props.value : innerValue.value)

    // Expose methods
    expose({
      focus: (options?: { cursor?: 'start' | 'end' | 'all'; preventScroll?: boolean }) => {
        inputRef.value?.focus({ preventScroll: options?.preventScroll })
        if (options?.cursor === 'start') {
          inputRef.value?.setSelectionRange(0, 0)
        } else if (options?.cursor === 'end') {
          const len = inputRef.value?.value.length ?? 0
          inputRef.value?.setSelectionRange(len, len)
        } else if (options?.cursor === 'all') {
          inputRef.value?.select()
        }
      },
      blur: () => inputRef.value?.blur(),
      nativeElement: computed(() => inputRef.value),
    })

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
      const strVal = props.precision !== undefined ? v.toFixed(props.precision) : String(v)
      if (props.decimalSeparator && props.decimalSeparator !== '.') {
        return strVal.replace('.', props.decimalSeparator)
      }
      if (props.formatter) {
        return props.formatter(v, { userTyping: focused.value, input: strVal })
      }
      return strVal
    }

    const parseInput = (s: string): number | undefined => {
      if (!s.trim()) return undefined
      let normalized = s
      if (props.decimalSeparator && props.decimalSeparator !== '.') {
        normalized = s.replace(props.decimalSeparator, '.')
      }
      if (props.parser) return props.parser(normalized)
      const n = parseFloat(normalized.replace(/[^\d.-]/g, ''))
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
      if (props.changeOnBlur) {
        const parsed = parseInput(inputStr.value)
        setValue(parsed)
      }
      inputStr.value = ''
      emit('blur', e)
    }

    const handleInput = (e: Event) => {
      inputStr.value = (e.target as HTMLInputElement).value
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!props.keyboard) return
      if (e.key === 'ArrowUp') { e.preventDefault(); step(1, 'keydown') }
      if (e.key === 'ArrowDown') { e.preventDefault(); step(-1, 'keydown') }
      if (e.key === 'Enter') emit('pressEnter', e)
    }

    const handleWheel = (e: WheelEvent) => {
      if (!props.changeOnWheel || props.disabled || props.readOnly || !focused.value) return
      e.preventDefault()
      const dir = e.deltaY < 0 ? 1 : -1
      step(dir, 'wheel')
    }

    const step = (dir: 1 | -1, emitter: 'handler' | 'keydown' | 'wheel' = 'handler') => {
      if (props.disabled || props.readOnly) return
      const cur = currentValue.value ?? 0
      const next = applyPrecision(clamp(cur + dir * props.step))
      setValue(next)
      emit('step', next, { offset: dir * props.step, type: dir > 0 ? 'up' : 'down', emitter })
    }

    return () => {
      const displayValue = focused.value ? inputStr.value : formatDisplay(currentValue.value)

      const showControls = typeof props.controls === 'boolean' ? props.controls : true
      const controlsConfig = typeof props.controls === 'object' ? props.controls : {}

      // Determine icons based on mode
      const isSpinner = props.mode === 'spinner'
      const upIcon = controlsConfig.upIcon ?? (isSpinner ? '+' : '▲')
      const downIcon = controlsConfig.downIcon ?? (isSpinner ? '−' : '▼')

      const inputEl = (
        <div class={cls(prefixCls, `${prefixCls}-${props.size}`, `${prefixCls}-${props.variant}`, {
          [`${prefixCls}-focused`]: focused.value,
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-readonly`]: props.readOnly,
          [`${prefixCls}-status-${props.status}`]: !!props.status,
          [`${prefixCls}-without-controls`]: !showControls,
        })}>
          {(props.prefix || slots.prefix) && (
            <span class={`${prefixCls}-prefix`}>{slots.prefix?.() ?? props.prefix}</span>
          )}
          <input
            ref={inputRef}
            class={`${prefixCls}-input`}
            value={displayValue}
            disabled={props.disabled}
            readonly={props.readOnly}
            placeholder={props.placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onInput={handleInput}
            onKeydown={handleKeydown}
            onWheel={handleWheel}
          />
          {(props.suffix || slots.suffix) && (
            <span class={`${prefixCls}-suffix`}>{slots.suffix?.() ?? props.suffix}</span>
          )}
          {showControls && (
            <div class={`${prefixCls}-handler-wrap`}>
              <span
                class={cls(`${prefixCls}-handler`, `${prefixCls}-handler-up`, {
                  [`${prefixCls}-handler-up-disabled`]: props.disabled || (currentValue.value !== undefined && currentValue.value >= props.max),
                })}
                onMousedown={(e) => { e.preventDefault(); step(1) }}
              >
                <span class={`${prefixCls}-handler-up-inner`}>{upIcon}</span>
              </span>
              <span
                class={cls(`${prefixCls}-handler`, `${prefixCls}-handler-down`, {
                  [`${prefixCls}-handler-down-disabled`]: props.disabled || (currentValue.value !== undefined && currentValue.value <= props.min),
                })}
                onMousedown={(e) => { e.preventDefault(); step(-1) }}
              >
                <span class={`${prefixCls}-handler-down-inner`}>{downIcon}</span>
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
