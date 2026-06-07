import { defineComponent, ref, watch, inject, computed, provide, type PropType, onMounted, onBeforeUnmount } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CheckboxValueType, CheckboxChangeEvent, CheckboxOptionType } from './types'

const CHECKBOX_GROUP_KEY = Symbol('checkbox-group')

interface CheckboxGroupContext {
  value: CheckboxValueType[]
  disabled: boolean
  name?: string
  onChange: (val: CheckboxValueType, checked: boolean) => void
  registerValue: (val: CheckboxValueType) => void
  cancelValue: (val: CheckboxValueType) => void
}

export const Checkbox = defineComponent({
  name: 'Checkbox',
  props: {
    checked: { type: Boolean, default: undefined },
    defaultChecked: Boolean,
    indeterminate: Boolean,
    disabled: Boolean,
    value: [String, Number, Boolean] as PropType<CheckboxValueType>,
    autoFocus: Boolean,
    name: String,
    id: String,
    title: String,
    tabIndex: Number,
    required: Boolean,
    skipGroup: Boolean,
  },
  emits: ['update:checked', 'change', 'click', 'mouseenter', 'mouseleave', 'keypress', 'keydown', 'focus', 'blur'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('checkbox')
    const group = inject<CheckboxGroupContext | null>(CHECKBOX_GROUP_KEY, null)
    const inputRef = ref<HTMLInputElement | null>(null)

    const innerChecked = ref(props.defaultChecked ?? false)

    watch(
      () => props.checked,
      (v) => {
        if (v !== undefined) innerChecked.value = v
      },
    )

    const isChecked = computed(() => {
      if (!props.skipGroup && group) return group.value.includes(props.value as CheckboxValueType)
      return props.checked !== undefined ? props.checked : innerChecked.value
    })

    const isDisabled = computed(() => props.disabled || (!props.skipGroup && group?.disabled) || false)

    // Register/unregister with group
    onMounted(() => {
      if (!props.skipGroup && group && props.value !== undefined) {
        group.registerValue(props.value)
      }
      if (props.autoFocus && inputRef.value) {
        inputRef.value.focus()
      }
      // Set initial indeterminate state
      if (inputRef.value) {
        inputRef.value.indeterminate = props.indeterminate ?? false
      }
    })

    onBeforeUnmount(() => {
      if (!props.skipGroup && group && props.value !== undefined) {
        group.cancelValue(props.value)
      }
    })

    // Update indeterminate state
    watch(
      () => props.indeterminate,
      (val) => {
        if (inputRef.value) {
          inputRef.value.indeterminate = val ?? false
        }
      },
    )

    const handleChange = (e: Event) => {
      if (isDisabled.value) return
      const target = e.target as HTMLInputElement
      const next = target.checked

      const changeEvent: CheckboxChangeEvent = {
        target: {
          checked: next,
          value: props.value,
        },
        nativeEvent: e,
      }

      if (!props.skipGroup && group && props.value !== undefined) {
        group.onChange(props.value, next)
      } else {
        if (props.checked === undefined) {
          innerChecked.value = next
        }
        emit('update:checked', next)
      }
      emit('change', changeEvent)
    }

    const handleClick = (e: MouseEvent) => {
      emit('click', e)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      emit('mouseenter', e)
    }

    const handleMouseLeave = (e: MouseEvent) => {
      emit('mouseleave', e)
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      emit('keypress', e)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      emit('keydown', e)
    }

    const handleFocus = (e: FocusEvent) => {
      emit('focus', e)
    }

    const handleBlur = (e: FocusEvent) => {
      emit('blur', e)
    }

    // Expose input ref for parent access
    expose({
      input: inputRef,
    })

    const mergedName = computed(() => {
      if (!props.skipGroup && group?.name) return group.name
      return props.name
    })

    return () => (
      <label
        class={cls(`${prefixCls}-wrapper`, {
          [`${prefixCls}-wrapper-checked`]: isChecked.value,
          [`${prefixCls}-wrapper-disabled`]: isDisabled.value,
        })}
        onClick={handleClick}
        onMouseenter={handleMouseEnter}
        onMouseleave={handleMouseLeave}
      >
        <span
          class={cls(prefixCls, {
            [`${prefixCls}-checked`]: isChecked.value,
            [`${prefixCls}-indeterminate`]: props.indeterminate,
            [`${prefixCls}-disabled`]: isDisabled.value,
          })}
        >
          <input
            ref={inputRef}
            type="checkbox"
            class={`${prefixCls}-input`}
            checked={isChecked.value}
            disabled={isDisabled.value || undefined}
            name={mergedName.value}
            id={props.id}
            title={props.title}
            tabindex={props.tabIndex}
            required={props.required || undefined}
            value={props.value as any}
            onChange={handleChange}
            onKeypress={handleKeyPress}
            onKeydown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
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
    name: String,
    options: Array as PropType<Array<CheckboxValueType | CheckboxOptionType>>,
    style: Object as PropType<Record<string, any>>,
    className: String,
  },
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
