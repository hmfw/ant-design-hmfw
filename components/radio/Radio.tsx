import { defineComponent, ref, watch, inject, computed, provide, toRef, type PropType, type ComputedRef, type Ref } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { RadioValueType, RadioChangeEvent } from './types'

const RADIO_GROUP_KEY = Symbol('radio-group')

interface RadioGroupContext {
  value: ComputedRef<RadioValueType | undefined>
  disabled: ComputedRef<boolean>
  name: ComputedRef<string | undefined>
  optionType: ComputedRef<'default' | 'button' | undefined>
  block: ComputedRef<boolean | undefined>
  onChange: (val: RadioValueType, e: Event) => void
}

export const Radio = defineComponent({
  name: 'Radio',
  props: {
    checked: { type: Boolean, default: undefined },
    defaultChecked: Boolean,
    disabled: Boolean,
    value: [String, Number, Boolean] as PropType<RadioValueType>,
    name: String,
    id: String,
  },
  emits: ['update:checked', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('radio')
    const groupContext = inject<RadioGroupContext | null>(RADIO_GROUP_KEY, null)

    const innerChecked = ref(props.defaultChecked ?? false)
    watch(() => props.checked, (v) => { if (v !== undefined) innerChecked.value = v })

    const isChecked = computed(() => {
      if (groupContext) {
        return groupContext.value.value === props.value
      }
      return props.checked !== undefined ? props.checked : innerChecked.value
    })

    const isDisabled = computed(() => props.disabled || (groupContext?.disabled.value ?? false))
    const isButton = computed(() => groupContext?.optionType.value === 'button')
    const isBlock = computed(() => groupContext?.block.value ?? false)

    const actualPrefixCls = computed(() =>
      isButton.value ? `${prefixCls}-button` : prefixCls
    )

    const handleChange = (e: Event) => {
      if (isDisabled.value) return

      const changeEvent: RadioChangeEvent = {
        target: {
          checked: true,
          value: props.value,
        },
        nativeEvent: e,
      }

      if (groupContext && props.value !== undefined) {
        groupContext.onChange(props.value, e)
      } else {
        innerChecked.value = true
        emit('update:checked', true)
        emit('change', changeEvent)
      }
    }

    const radioName = computed(() => props.name || groupContext?.name.value)

    return () => {
      if (isButton.value) {
        return (
          <label
            class={cls(`${actualPrefixCls.value}-wrapper`, {
              [`${actualPrefixCls.value}-wrapper-checked`]: isChecked.value,
              [`${actualPrefixCls.value}-wrapper-disabled`]: isDisabled.value,
              [`${actualPrefixCls.value}-wrapper-block`]: isBlock.value,
            })}
            id={props.id}
          >
            <input
              type="radio"
              class={`${actualPrefixCls.value}-input`}
              checked={isChecked.value}
              disabled={isDisabled.value}
              name={radioName.value}
              value={props.value as any}
              onChange={handleChange}
            />
            <span class={`${actualPrefixCls.value}-label`}>{slots.default?.()}</span>
          </label>
        )
      }

      return (
        <label
          class={cls(`${actualPrefixCls.value}-wrapper`, {
            [`${actualPrefixCls.value}-wrapper-checked`]: isChecked.value,
            [`${actualPrefixCls.value}-wrapper-disabled`]: isDisabled.value,
            [`${actualPrefixCls.value}-wrapper-block`]: isBlock.value,
          })}
          id={props.id}
        >
          <span
            class={cls(actualPrefixCls.value, {
              [`${actualPrefixCls.value}-checked`]: isChecked.value,
              [`${actualPrefixCls.value}-disabled`]: isDisabled.value,
            })}
          >
            <input
              type="radio"
              class={`${actualPrefixCls.value}-input`}
              checked={isChecked.value}
              disabled={isDisabled.value}
              name={radioName.value}
              value={props.value as any}
              onChange={handleChange}
            />
            <span class={`${actualPrefixCls.value}-inner`} />
          </span>
          {slots.default && <span class={`${actualPrefixCls.value}-label`}>{slots.default()}</span>}
        </label>
      )
    }
  },
})

export const RadioButton = defineComponent({
  name: 'RadioButton',
  props: {
    checked: { type: Boolean, default: undefined },
    defaultChecked: Boolean,
    disabled: Boolean,
    value: [String, Number, Boolean] as PropType<RadioValueType>,
    name: String,
    id: String,
  },
  emits: ['update:checked', 'change'],
  setup(props, { slots, emit }) {
    const group = inject<RadioGroupContext | null>(RADIO_GROUP_KEY, null)
    const contextWithButton = computed<RadioGroupContext | null>(() =>
      group ? { ...group, optionType: computed(() => 'button' as const) } : null
    )

    return () => (
      <Radio {...props} v-slots={slots} onUpdate:checked={(v: boolean) => emit('update:checked', v)} onChange={(e: RadioChangeEvent) => emit('change', e)} />
    )
  },
})

export const RadioGroup = defineComponent({
  name: 'RadioGroup',
  props: {
    value: [String, Number, Boolean] as PropType<RadioValueType>,
    defaultValue: [String, Number, Boolean] as PropType<RadioValueType>,
    disabled: Boolean,
    buttonStyle: { type: String as PropType<'outline' | 'solid'>, default: 'outline' },
    optionType: { type: String as PropType<'default' | 'button'>, default: 'default' },
    size: { type: String as PropType<'large' | 'middle' | 'small'>, default: 'middle' },
    name: String,
    block: Boolean,
    options: Array as PropType<Array<RadioValueType | {
      label: string
      value: RadioValueType
      disabled?: boolean
      id?: string
    }>>,
  },
  emits: ['update:value', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('radio')
    const innerValue = ref<RadioValueType | undefined>(props.defaultValue)

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const currentValue = computed(() => props.value !== undefined ? props.value : innerValue.value)

    const handleChange = (val: RadioValueType, e: Event) => {
      const lastValue = currentValue.value
      // Update inner value first for uncontrolled mode
      if (props.value === undefined) {
        innerValue.value = val
      }
      // Always emit events when value changes
      if (val !== lastValue) {
        emit('update:value', val)
        const changeEvent: RadioChangeEvent = {
          target: {
            checked: true,
            value: val,
          },
          nativeEvent: e,
        }
        emit('change', changeEvent)
      }
    }

    // Provide reactive context with computed refs
    const context: RadioGroupContext = {
      value: currentValue,
      disabled: computed(() => props.disabled ?? false),
      name: computed(() => props.name),
      optionType: computed(() => props.optionType),
      block: computed(() => props.block),
      onChange: handleChange,
    }

    provide(RADIO_GROUP_KEY, context)

    const groupCls = computed(() =>
      cls(`${prefixCls}-group`, {
        [`${prefixCls}-group-${props.buttonStyle}`]: props.optionType === 'button',
        [`${prefixCls}-group-${props.size}`]: props.size !== 'middle',
        [`${prefixCls}-group-block`]: props.block,
      })
    )

    return () => {
      if (props.options) {
        return (
          <div class={groupCls.value}>
            {props.options.map((opt) => {
              const item = typeof opt === 'object' && opt !== null && 'value' in opt
                ? opt as { label: string; value: RadioValueType; disabled?: boolean; id?: string }
                : { label: String(opt), value: opt as RadioValueType }
              return (
                <Radio
                  key={String(item.value)}
                  value={item.value}
                  disabled={item.disabled}
                  id={item.id}
                >
                  {item.label}
                </Radio>
              )
            })}
          </div>
        )
      }
      return <div class={groupCls.value}>{slots.default?.()}</div>
    }
  },
})

