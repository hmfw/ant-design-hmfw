import { defineComponent, ref, watch, inject, computed, provide, type PropType, type ComputedRef } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { RadioValueType, RadioChangeEvent } from './types'
import type { ComponentSize } from '../config-provider'

const RADIO_GROUP_KEY = Symbol('radio-group')

interface RadioGroupContext {
  value: ComputedRef<RadioValueType | undefined>
  disabled: ComputedRef<boolean>
  name: ComputedRef<string | undefined>
  optionType: ComputedRef<'default' | 'button' | undefined>
  block: ComputedRef<boolean | undefined>
  onChange: (val: RadioValueType, e: Event) => void
}

const radioProps = {
  checked: { type: Boolean, default: undefined },
  defaultChecked: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  value: { type: [String, Number, Boolean] as PropType<RadioValueType>, default: undefined },
  name: { type: String, default: undefined },
  id: { type: String, default: undefined },
  classNames: { type: Object as PropType<import('./types').RadioClassNames>, default: undefined },
  styles: { type: Object as PropType<import('./types').RadioStyles>, default: undefined },
} satisfies Record<keyof import('./types').RadioProps, any>

export const Radio = defineComponent({
  name: 'Radio',
  props: radioProps,
  emits: ['update:checked', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('radio')
    const groupContext = inject<RadioGroupContext | null>(RADIO_GROUP_KEY, null)

    const innerChecked = ref(props.defaultChecked ?? false)
    watch(
      () => props.checked,
      (v) => {
        if (v !== undefined) innerChecked.value = v
      },
    )

    const isChecked = computed(() => {
      if (groupContext) {
        return groupContext.value.value === props.value
      }
      return props.checked !== undefined ? props.checked : innerChecked.value
    })

    const isDisabled = computed(() => props.disabled || (groupContext?.disabled.value ?? false))
    const isButton = computed(() => groupContext?.optionType.value === 'button')
    const isBlock = computed(() => groupContext?.block.value ?? false)

    const actualPrefixCls = computed(() => (isButton.value ? `${prefixCls}-button` : prefixCls))

    const handleChange = (e: Event) => {
      if (isDisabled.value) return

      const changeEvent: RadioChangeEvent = {
        target: {
          checked: true,
          value: props.value,
        },
        nativeEvent: e,
        stopPropagation: () => e.stopPropagation(),
        preventDefault: () => e.preventDefault(),
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
          >
            <input
              type="radio"
              class={`${actualPrefixCls.value}-input`}
              checked={isChecked.value}
              disabled={isDisabled.value}
              name={radioName.value}
              value={props.value as any}
              id={props.id}
              onChange={handleChange}
            />
            <span class={`${actualPrefixCls.value}-label`}>{slots.default?.()}</span>
          </label>
        )
      }

      return (
        <label
          class={cls(
            `${actualPrefixCls.value}-wrapper`,
            {
              [`${actualPrefixCls.value}-wrapper-checked`]: isChecked.value,
              [`${actualPrefixCls.value}-wrapper-disabled`]: isDisabled.value,
              [`${actualPrefixCls.value}-wrapper-block`]: isBlock.value,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
        >
          <span
            class={cls(
              actualPrefixCls.value,
              {
                [`${actualPrefixCls.value}-checked`]: isChecked.value,
                [`${actualPrefixCls.value}-disabled`]: isDisabled.value,
              },
              props.classNames?.radio,
            )}
            style={props.styles?.radio}
          >
            <input
              type="radio"
              class={cls(`${actualPrefixCls.value}-input`, props.classNames?.input)}
              style={props.styles?.input}
              checked={isChecked.value}
              disabled={isDisabled.value}
              name={radioName.value}
              value={props.value as any}
              id={props.id}
              onChange={handleChange}
            />
            <span class={cls(`${actualPrefixCls.value}-inner`, props.classNames?.inner)} style={props.styles?.inner} />
          </span>
          {slots.default && (
            <span class={cls(`${actualPrefixCls.value}-label`, props.classNames?.label)} style={props.styles?.label}>
              {slots.default()}
            </span>
          )}
        </label>
      )
    }
  },
})

const radioButtonProps = {
  checked: { type: Boolean, default: undefined },
  defaultChecked: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  value: { type: [String, Number, Boolean] as PropType<RadioValueType>, default: undefined },
  name: { type: String, default: undefined },
  id: { type: String, default: undefined },
  classNames: { type: Object as PropType<import('./types').RadioButtonClassNames>, default: undefined },
  styles: { type: Object as PropType<import('./types').RadioButtonStyles>, default: undefined },
} satisfies Record<keyof import('./types').RadioButtonProps, any>

export const RadioButton = defineComponent({
  name: 'RadioButton',
  props: radioButtonProps,
  emits: ['update:checked', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('radio-button')
    const groupContext = inject<RadioGroupContext | null>(RADIO_GROUP_KEY, null)

    const innerChecked = ref(props.defaultChecked ?? false)
    watch(
      () => props.checked,
      (v) => {
        if (v !== undefined) innerChecked.value = v
      },
    )

    const isChecked = computed(() => {
      if (groupContext) {
        return groupContext.value.value === props.value
      }
      return props.checked !== undefined ? props.checked : innerChecked.value
    })

    const isDisabled = computed(() => props.disabled || (groupContext?.disabled.value ?? false))
    const isBlock = computed(() => groupContext?.block.value ?? false)

    const handleChange = (e: Event) => {
      if (isDisabled.value) return

      const changeEvent: RadioChangeEvent = {
        target: {
          checked: true,
          value: props.value,
        },
        nativeEvent: e,
        stopPropagation: () => e.stopPropagation(),
        preventDefault: () => e.preventDefault(),
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

    return () => (
      <label
        class={cls(
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-wrapper-checked`]: isChecked.value,
            [`${prefixCls}-wrapper-disabled`]: isDisabled.value,
            [`${prefixCls}-wrapper-block`]: isBlock.value,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
      >
        <input
          type="radio"
          class={cls(`${prefixCls}-input`, props.classNames?.input)}
          style={props.styles?.input}
          checked={isChecked.value}
          disabled={isDisabled.value}
          name={radioName.value}
          value={props.value as any}
          id={props.id}
          onChange={handleChange}
        />
        <span class={cls(`${prefixCls}-label`, props.classNames?.label)} style={props.styles?.label}>
          {slots.default?.()}
        </span>
      </label>
    )
  },
})

const radioGroupProps = {
  value: { type: [String, Number, Boolean] as PropType<RadioValueType>, default: undefined },
  defaultValue: { type: [String, Number, Boolean] as PropType<RadioValueType>, default: undefined },
  disabled: { type: Boolean, default: false },
  buttonStyle: { type: String as PropType<'outline' | 'solid'>, default: 'outline' },
  optionType: { type: String as PropType<'default' | 'button'>, default: 'default' },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  name: { type: String, default: undefined },
  block: { type: Boolean, default: false },
  direction: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  classNames: { type: Object as PropType<import('./types').RadioGroupClassNames>, default: undefined },
  styles: { type: Object as PropType<import('./types').RadioGroupStyles>, default: undefined },
  options: {
    type: Array as PropType<
      Array<
        | RadioValueType
        | {
            label: string
            value: RadioValueType
            disabled?: boolean
            id?: string
          }
      >
    >,
    default: undefined,
  },
} satisfies Record<keyof import('./types').RadioGroupProps, any>

export const RadioGroup = defineComponent({
  name: 'RadioGroup',
  props: radioGroupProps,
  emits: ['update:value', 'change'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('radio')
    const innerValue = ref<RadioValueType | undefined>(props.defaultValue)

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    const currentValue = computed(() => (props.value !== undefined ? props.value : innerValue.value))

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
          stopPropagation: () => e.stopPropagation(),
          preventDefault: () => e.preventDefault(),
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
      cls(
        `${prefixCls}-group`,
        `${prefixCls}-group-${props.size}`,
        `${prefixCls}-group-${props.direction}`,
        {
          [`${prefixCls}-group-${props.buttonStyle}`]: props.optionType === 'button',
          [`${prefixCls}-group-block`]: props.block,
        },
        props.classNames?.root,
      ),
    )

    return () => {
      if (props.options) {
        return (
          <div class={groupCls.value} style={props.styles?.root}>
            {props.options.map((opt) => {
              const item =
                typeof opt === 'object' && opt !== null && 'value' in opt
                  ? (opt as {
                      label: string
                      value: RadioValueType
                      disabled?: boolean
                      id?: string
                    })
                  : { label: String(opt), value: opt as RadioValueType }
              const Component = props.optionType === 'button' ? RadioButton : Radio
              return (
                <Component key={String(item.value)} value={item.value} disabled={item.disabled} id={item.id}>
                  {item.label}
                </Component>
              )
            })}
          </div>
        )
      }
      return (
        <div class={groupCls.value} style={props.styles?.root}>
          {slots.default?.()}
        </div>
      )
    }
  },
})
