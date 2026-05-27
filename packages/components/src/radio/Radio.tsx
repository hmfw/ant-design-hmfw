import { defineComponent, ref, watch, inject, computed, provide, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { RadioValueType } from './types'

const RADIO_GROUP_KEY = Symbol('radio-group')

interface RadioGroupContext {
  value: RadioValueType | undefined
  disabled: boolean
  onChange: (val: RadioValueType) => void
}

export const Radio = defineComponent({
  name: 'Radio',
  props: {
    checked: { type: Boolean, default: undefined },
    defaultChecked: Boolean,
    disabled: Boolean,
    value: [String, Number, Boolean] as PropType<RadioValueType>,
  },
  emits: ['update:checked', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('radio')
    const group = inject<RadioGroupContext | null>(RADIO_GROUP_KEY, null)

    const innerChecked = ref(props.defaultChecked ?? false)
    watch(() => props.checked, (v) => { if (v !== undefined) innerChecked.value = v })

    const isChecked = computed(() => {
      if (group) return group.value === props.value
      return props.checked !== undefined ? props.checked : innerChecked.value
    })

    const isDisabled = computed(() => props.disabled || (group?.disabled ?? false))

    const handleChange = () => {
      if (isDisabled.value) return
      if (group && props.value !== undefined) {
        group.onChange(props.value)
      } else {
        innerChecked.value = true
        emit('update:checked', true)
        emit('change', true)
      }
    }

    return () => (
      <label class={cls(`${prefixCls}-wrapper`, {
        [`${prefixCls}-wrapper-checked`]: isChecked.value,
        [`${prefixCls}-wrapper-disabled`]: isDisabled.value,
      })}>
        <span class={cls(prefixCls, {
          [`${prefixCls}-checked`]: isChecked.value,
          [`${prefixCls}-disabled`]: isDisabled.value,
        })}>
          <input
            type="radio"
            class={`${prefixCls}-input`}
            checked={isChecked.value}
            disabled={isDisabled.value}
            onChange={handleChange}
          />
          <span class={`${prefixCls}-inner`} />
        </span>
        {slots.default && <span class={`${prefixCls}-label`}>{slots.default()}</span>}
      </label>
    )
  },
})

export const RadioGroup = defineComponent({
  name: 'RadioGroup',
  props: {
    value: [String, Number, Boolean] as PropType<RadioValueType>,
    defaultValue: [String, Number, Boolean] as PropType<RadioValueType>,
    disabled: Boolean,
    options: Array as PropType<Array<RadioValueType | { label: string; value: RadioValueType; disabled?: boolean }>>,
  },
  emits: ['update:value', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('radio')
    const innerValue = ref<RadioValueType | undefined>(props.defaultValue)

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const currentValue = computed(() => props.value !== undefined ? props.value : innerValue.value)

    const handleChange = (val: RadioValueType) => {
      innerValue.value = val
      emit('update:value', val)
      emit('change', val)
    }

    provide<RadioGroupContext>(RADIO_GROUP_KEY, {
      get value() { return currentValue.value },
      get disabled() { return props.disabled ?? false },
      onChange: handleChange,
    })

    return () => {
      if (props.options) {
        return (
          <div class={`${prefixCls}-group`}>
            {props.options.map((opt) => {
              const item = typeof opt === 'object' && opt !== null && 'value' in opt
                ? opt as { label: string; value: RadioValueType; disabled?: boolean }
                : { label: String(opt), value: opt as RadioValueType }
              return (
                <Radio
                  key={String(item.value)}
                  value={item.value}
                  disabled={item.disabled}
                  v-slots={{ default: () => item.label }}
                />
              )
            })}
          </div>
        )
      }
      return <div class={`${prefixCls}-group`}>{slots.default?.()}</div>
    }
  },
})
