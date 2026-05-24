import { defineComponent, ref, watch, inject, computed, provide, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CheckboxValueType } from './types'

const CHECKBOX_GROUP_KEY = Symbol('checkbox-group')

interface CheckboxGroupContext {
  value: CheckboxValueType[]
  disabled: boolean
  onChange: (val: CheckboxValueType, checked: boolean) => void
}

export const Checkbox = defineComponent({
  name: 'Checkbox',
  props: {
    checked: { type: Boolean, default: undefined },
    defaultChecked: Boolean,
    indeterminate: Boolean,
    disabled: Boolean,
    value: [String, Number, Boolean] as PropType<CheckboxValueType>,
  },
  emits: ['update:checked', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('checkbox')
    const group = inject<CheckboxGroupContext | null>(CHECKBOX_GROUP_KEY, null)

    const innerChecked = ref(props.defaultChecked ?? false)

    watch(() => props.checked, (v) => { if (v !== undefined) innerChecked.value = v })

    const isChecked = computed(() => {
      if (group) return group.value.includes(props.value as CheckboxValueType)
      return props.checked !== undefined ? props.checked : innerChecked.value
    })

    const isDisabled = computed(() => props.disabled || (group?.disabled ?? false))

    const handleChange = (e: Event) => {
      if (isDisabled.value) return
      const next = !(isChecked.value)
      if (group && props.value !== undefined) {
        group.onChange(props.value, next)
      } else {
        innerChecked.value = next
        emit('update:checked', next)
        emit('change', e)
      }
    }

    return () => (
      <label class={cls(`${prefixCls}-wrapper`, {
        [`${prefixCls}-wrapper-checked`]: isChecked.value,
        [`${prefixCls}-wrapper-disabled`]: isDisabled.value,
      })}>
        <span class={cls(prefixCls, {
          [`${prefixCls}-checked`]: isChecked.value,
          [`${prefixCls}-indeterminate`]: props.indeterminate,
          [`${prefixCls}-disabled`]: isDisabled.value,
        })}>
          <input
            type="checkbox"
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

export const CheckboxGroup = defineComponent({
  name: 'CheckboxGroup',
  props: {
    value: Array as PropType<CheckboxValueType[]>,
    defaultValue: Array as PropType<CheckboxValueType[]>,
    disabled: Boolean,
    options: Array as PropType<Array<CheckboxValueType | { label: string; value: CheckboxValueType; disabled?: boolean }>>,
  },
  emits: ['update:value', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('checkbox')
    const innerValue = ref<CheckboxValueType[]>(props.defaultValue ?? [])

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const currentValue = computed(() => props.value !== undefined ? props.value : innerValue.value)

    const handleChange = (val: CheckboxValueType, checked: boolean) => {
      const next = checked
        ? [...currentValue.value, val]
        : currentValue.value.filter((v) => v !== val)
      innerValue.value = next
      emit('update:value', next)
      emit('change', next)
    }

    provide<CheckboxGroupContext>(CHECKBOX_GROUP_KEY, {
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
                ? opt as { label: string; value: CheckboxValueType; disabled?: boolean }
                : { label: String(opt), value: opt as CheckboxValueType }
              return (
                <Checkbox
                  key={String(item.value)}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </Checkbox>
              )
            })}
          </div>
        )
      }
      return <div class={`${prefixCls}-group`}>{slots.default?.()}</div>
    }
  },
})
