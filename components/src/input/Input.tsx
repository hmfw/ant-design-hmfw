import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { InputSize, InputStatus } from './types'

// ─── Base Input ───────────────────────────────────────────────────────────────

export const Input = defineComponent({
  name: 'Input',
  props: {
    value: String,
    defaultValue: String,
    placeholder: String,
    disabled: Boolean,
    readOnly: Boolean,
    size: {
      type: String as PropType<InputSize>,
      default: 'middle',
    },
    status: {
      type: String as PropType<InputStatus>,
      default: '',
    },
    allowClear: Boolean,
    maxLength: Number,
    showCount: Boolean,
    type: {
      type: String,
      default: 'text',
    },
  },
  emits: ['update:value', 'change', 'input', 'focus', 'blur', 'pressEnter', 'clear'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('input')
    const innerValue = ref(props.value ?? props.defaultValue ?? '')

    watch(
      () => props.value,
      (v) => { if (v !== undefined) innerValue.value = v },
    )

    const wrapperCls = computed(() =>
      cls(`${prefixCls}-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-disabled`]: props.disabled,
        [`${prefixCls}-affix-wrapper-lg`]: props.size === 'large',
        [`${prefixCls}-affix-wrapper-sm`]: props.size === 'small',
        [`${prefixCls}-affix-wrapper-status-error`]: props.status === 'error',
        [`${prefixCls}-affix-wrapper-status-warning`]: props.status === 'warning',
      }),
    )

    const inputCls = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-lg`]: props.size === 'large',
        [`${prefixCls}-sm`]: props.size === 'small',
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
      if (e.key === 'Enter') emit('pressEnter', e)
    }

    const handleClear = () => {
      innerValue.value = ''
      emit('update:value', '')
      emit('clear')
    }

    const hasFix = computed(() => slots.prefix || slots.suffix || props.allowClear || props.showCount)

    return () => {
      const inputEl = (
        <input
          class={hasFix.value ? prefixCls : inputCls.value}
          type={props.type}
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readOnly}
          maxlength={props.maxLength}
          aria-invalid={props.status === 'error' || undefined}
          onInput={handleInput}
          onKeydown={handleKeydown}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
      )

      if (!hasFix.value) return inputEl

      const clearBtn = props.allowClear && innerValue.value && (
        <span class={`${prefixCls}-clear-icon`} onClick={handleClear}>×</span>
      )

      const countNode = props.showCount && (
        <span class={`${prefixCls}-show-count-suffix`}>
          {props.maxLength
            ? `${innerValue.value.length} / ${props.maxLength}`
            : `${innerValue.value.length}`}
        </span>
      )

      return (
        <span class={wrapperCls.value}>
          {slots.prefix && <span class={`${prefixCls}-prefix`}>{slots.prefix()}</span>}
          {inputEl}
          {clearBtn}
          {slots.suffix && <span class={`${prefixCls}-suffix`}>{slots.suffix()}</span>}
          {countNode}
        </span>
      )
    }
  },
})

// ─── Password ─────────────────────────────────────────────────────────────────

export const InputPassword = defineComponent({
  name: 'InputPassword',
  props: {
    value: String,
    defaultValue: String,
    placeholder: String,
    disabled: Boolean,
    size: {
      type: String as PropType<InputSize>,
      default: 'middle',
    },
    status: {
      type: String as PropType<InputStatus>,
      default: '',
    },
    visibilityToggle: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:value', 'change', 'input', 'focus', 'blur'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('input')
    const visible = ref(false)
    const innerValue = ref(props.value ?? props.defaultValue ?? '')

    watch(
      () => props.value,
      (v) => { if (v !== undefined) innerValue.value = v },
    )

    const wrapperCls = computed(() =>
      cls(`${prefixCls}-affix-wrapper`, `${prefixCls}-password`, {
        [`${prefixCls}-affix-wrapper-disabled`]: props.disabled,
        [`${prefixCls}-affix-wrapper-lg`]: props.size === 'large',
        [`${prefixCls}-affix-wrapper-sm`]: props.size === 'small',
        [`${prefixCls}-affix-wrapper-status-error`]: props.status === 'error',
        [`${prefixCls}-affix-wrapper-status-warning`]: props.status === 'warning',
      }),
    )

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    return () => (
      <span class={wrapperCls.value}>
        <input
          class={prefixCls}
          type={visible.value ? 'text' : 'password'}
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onInput={handleInput}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
        {props.visibilityToggle && (
          <span
            class={`${prefixCls}-suffix`}
            onClick={() => (visible.value = !visible.value)}
            style={{ cursor: 'pointer' }}
          >
            {visible.value ? '🙈' : '👁'}
          </span>
        )}
      </span>
    )
  },
})

// ─── TextArea ─────────────────────────────────────────────────────────────────

export const TextArea = defineComponent({
  name: 'TextArea',
  props: {
    value: String,
    defaultValue: String,
    placeholder: String,
    disabled: Boolean,
    readOnly: Boolean,
    rows: {
      type: Number,
      default: 4,
    },
    maxLength: Number,
    showCount: Boolean,
    status: {
      type: String as PropType<InputStatus>,
      default: '',
    },
    allowClear: Boolean,
  },
  emits: ['update:value', 'change', 'input', 'focus', 'blur'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('input')
    const innerValue = ref(props.value ?? props.defaultValue ?? '')

    watch(
      () => props.value,
      (v) => { if (v !== undefined) innerValue.value = v },
    )

    const textareaCls = computed(() =>
      cls(prefixCls, `${prefixCls}-textarea`, {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-status-error`]: props.status === 'error',
        [`${prefixCls}-status-warning`]: props.status === 'warning',
      }),
    )

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLTextAreaElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    return () => {
      const textarea = (
        <textarea
          class={textareaCls.value}
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readOnly}
          rows={props.rows}
          maxlength={props.maxLength}
          onInput={handleInput}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
      )

      if (!props.showCount) return textarea

      return (
        <div class={`${prefixCls}-textarea-show-count`}>
          {textarea}
          <span class={`${prefixCls}-show-count-suffix`}>
            {props.maxLength
              ? `${innerValue.value.length} / ${props.maxLength}`
              : `${innerValue.value.length}`}
          </span>
        </div>
      )
    }
  },
})

// ─── Search ───────────────────────────────────────────────────────────────────

export const InputSearch = defineComponent({
  name: 'InputSearch',
  props: {
    value: String,
    defaultValue: String,
    placeholder: String,
    disabled: Boolean,
    size: {
      type: String as PropType<InputSize>,
      default: 'middle',
    },
    loading: Boolean,
    enterButton: {
      type: [Boolean, String],
      default: false,
    },
  },
  emits: ['update:value', 'change', 'input', 'search'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('input')
    const innerValue = ref(props.value ?? props.defaultValue ?? '')

    watch(
      () => props.value,
      (v) => { if (v !== undefined) innerValue.value = v },
    )

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    const handleSearch = () => {
      emit('search', innerValue.value)
    }

    return () => (
      <span class={cls(`${prefixCls}-search`, `${prefixCls}-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-lg`]: props.size === 'large',
        [`${prefixCls}-affix-wrapper-sm`]: props.size === 'small',
        [`${prefixCls}-affix-wrapper-disabled`]: props.disabled,
      })}>
        <input
          class={prefixCls}
          type="search"
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onInput={handleInput}
          onKeydown={(e: KeyboardEvent) => { if (e.key === 'Enter') handleSearch() }}
        />
        <span class={`${prefixCls}-suffix`}>
          <button
            class={`${prefixCls}-search-button`}
            disabled={props.disabled}
            onClick={handleSearch}
          >
            {typeof props.enterButton === 'string' ? props.enterButton : '🔍'}
          </button>
        </span>
      </span>
    )
  },
})
