import { defineComponent, ref, watch, computed, provide, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CheckboxValueType, CheckboxOptionType, CheckboxGroupProps } from './types'
import { Checkbox } from './Checkbox'
import { CHECKBOX_GROUP_KEY, type CheckboxGroupContext } from './context'

const checkboxGroupProps = {
  value: { type: Array as PropType<CheckboxValueType[]>, default: undefined },
  defaultValue: { type: Array as PropType<CheckboxValueType[]>, default: undefined },
  disabled: { type: Boolean, default: false },
  name: { type: String, default: undefined },
  options: { type: Array as PropType<Array<CheckboxValueType | CheckboxOptionType>>, default: undefined },
  style: { type: Object as PropType<Record<string, any>>, default: undefined },
  className: { type: String, default: undefined },
} satisfies Record<keyof CheckboxGroupProps, any>

export const CheckboxGroup = defineComponent({
  name: 'CheckboxGroup',
  props: checkboxGroupProps,
  emits: ['update:value', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('checkbox')
    const innerValue = ref<CheckboxValueType[]>(props.defaultValue ?? [])
    const registeredValues = ref<CheckboxValueType[]>([])

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    const currentValue = computed(() => (props.value !== undefined ? props.value : innerValue.value))

    const registerValue = (val: CheckboxValueType) => {
      if (!registeredValues.value.includes(val)) {
        registeredValues.value.push(val)
      }
    }

    const cancelValue = (val: CheckboxValueType) => {
      registeredValues.value = registeredValues.value.filter((v) => v !== val)
    }

    const handleChange = (val: CheckboxValueType, checked: boolean) => {
      const next = checked ? [...currentValue.value, val] : currentValue.value.filter((v) => v !== val)

      // Filter to only include registered values and sort by registration order
      const filteredNext = next
        .filter((v) => registeredValues.value.includes(v))
        .sort((a, b) => {
          const indexA = registeredValues.value.indexOf(a)
          const indexB = registeredValues.value.indexOf(b)
          return indexA - indexB
        })

      innerValue.value = filteredNext
      emit('update:value', filteredNext)
      emit('change', filteredNext)
    }

    provide<CheckboxGroupContext>(CHECKBOX_GROUP_KEY, {
      get value() {
        return currentValue.value
      },
      get disabled() {
        return props.disabled ?? false
      },
      get name() {
        return props.name
      },
      onChange: handleChange,
      registerValue,
      cancelValue,
    })

    const normalizedOptions = computed(() => {
      if (!props.options) return []
      return props.options.map((opt) => {
        if (typeof opt === 'object' && opt !== null && 'value' in opt) {
          return opt as CheckboxOptionType
        }
        return { label: String(opt), value: opt as CheckboxValueType }
      })
    })

    return () => {
      const groupClass = cls(`${prefixCls}-group`, props.className)

      if (props.options && props.options.length > 0) {
        return (
          <div class={groupClass} style={props.style}>
            {normalizedOptions.value.map((opt) => {
              const itemDisabled = opt.disabled !== undefined ? opt.disabled : props.disabled
              return (
                <Checkbox
                  key={String(opt.value)}
                  value={opt.value}
                  disabled={itemDisabled}
                  style={opt.style}
                  class={cls(`${prefixCls}-group-item`, opt.className)}
                  title={opt.title}
                  id={opt.id}
                  required={opt.required}
                  v-slots={{
                    default: () => opt.label,
                  }}
                />
              )
            })}
          </div>
        )
      }
      return (
        <div class={groupClass} style={props.style}>
          {slots.default?.()}
        </div>
      )
    }
  },
})
