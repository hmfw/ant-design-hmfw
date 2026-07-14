import { defineComponent, ref, watch, inject, computed, type PropType, onMounted, onBeforeUnmount } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CheckboxValueType, CheckboxChangeEvent, CheckboxProps, CheckboxClassNames, CheckboxStyles } from './types'
import { CHECKBOX_GROUP_KEY, type CheckboxGroupContext } from './context'

const checkboxProps = {
  checked: { type: Boolean, default: undefined },
  defaultChecked: { type: Boolean, default: false },
  indeterminate: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  value: { type: [String, Number, Boolean] as PropType<CheckboxValueType>, default: undefined },
  autoFocus: { type: Boolean, default: false },
  name: { type: String, default: undefined },
  id: { type: String, default: undefined },
  title: { type: String, default: undefined },
  tabIndex: { type: Number, default: undefined },
  required: { type: Boolean, default: false },
  skipGroup: { type: Boolean, default: false },
  classNames: { type: Object as PropType<CheckboxClassNames>, default: undefined },
  styles: { type: Object as PropType<CheckboxStyles>, default: undefined },
} satisfies Record<keyof CheckboxProps, any>

export const Checkbox = defineComponent({
  name: 'Checkbox',
  props: checkboxProps,
  emits: ['update:checked', 'change', 'click', 'mouseenter', 'mouseleave', 'keypress', 'keydown', 'focus', 'blur'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('checkbox')
    const group = inject<CheckboxGroupContext | null>(CHECKBOX_GROUP_KEY, null)
    const inputRef = ref<HTMLInputElement | null>(null)

    const innerChecked = ref(props.defaultChecked ?? false)

    // Handle controlled/uncontrolled mode switching
    watch(
      () => props.checked,
      (newVal, oldVal) => {
        if (newVal !== undefined) {
          // Controlled mode: sync checked value
          innerChecked.value = newVal
        } else if (oldVal !== undefined && newVal === undefined) {
          // Switching from controlled to uncontrolled: preserve last controlled value
          innerChecked.value = oldVal
        }
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
      // SSR compatible: only focus in browser environment
      if (props.autoFocus && inputRef.value && typeof window !== 'undefined') {
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

    // Expose input ref and helper methods for parent access
    expose({
      input: inputRef,
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

    const mergedName = computed(() => {
      if (!props.skipGroup && group?.name) return group.name
      return props.name
    })

    return () => (
      <label
        class={cls(
          `${prefixCls}-wrapper`,
          {
            [`${prefixCls}-wrapper-checked`]: isChecked.value,
            [`${prefixCls}-wrapper-disabled`]: isDisabled.value,
          },
          props.classNames?.root,
        )}
        style={props.styles?.root}
        onClick={handleClick}
        onMouseenter={handleMouseEnter}
        onMouseleave={handleMouseLeave}
      >
        <span
          class={cls(
            prefixCls,
            {
              [`${prefixCls}-checked`]: isChecked.value,
              [`${prefixCls}-indeterminate`]: props.indeterminate,
              [`${prefixCls}-disabled`]: isDisabled.value,
            },
            props.classNames?.checkbox,
          )}
          style={props.styles?.checkbox}
        >
          <input
            ref={inputRef}
            type="checkbox"
            class={cls(`${prefixCls}-input`, props.classNames?.input)}
            style={props.styles?.input}
            checked={isChecked.value}
            disabled={isDisabled.value || undefined}
            name={mergedName.value}
            id={props.id}
            title={props.title}
            tabindex={props.tabIndex}
            required={props.required || undefined}
            value={props.value !== undefined ? String(props.value) : undefined}
            onChange={handleChange}
            onKeypress={handleKeyPress}
            onKeydown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <span class={cls(`${prefixCls}-inner`, props.classNames?.inner)} style={props.styles?.inner} />
        </span>
        {slots.default && (
          <span class={cls(`${prefixCls}-label`, props.classNames?.label)} style={props.styles?.label}>
            {slots.default()}
          </span>
        )}
      </label>
    )
  },
})
