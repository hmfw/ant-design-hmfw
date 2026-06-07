import { defineComponent, ref, computed, watch, type PropType, type VNode } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { CloseOutlined, EyeOutlined, SearchOutlined, LoadingOutlined } from '../icon'
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
      default: undefined,
    },
    status: {
      type: String as PropType<InputStatus>,
      default: '',
    },
    allowClear: [Boolean, Object] as PropType<boolean | { clearIcon?: VNode; disabled?: boolean }>,
    maxLength: Number,
    showCount: [Boolean, Object] as PropType<
      | boolean
      | {
          formatter?: (info: { value: string; count: number; maxLength?: number }) => VNode | string
        }
    >,
    type: {
      type: String,
      default: 'text',
    },
    prefix: [String, Object] as PropType<string | VNode>,
    suffix: [String, Object] as PropType<string | VNode>,
    id: String,
    rootClassName: String,
    classNames: Object as PropType<{
      affixWrapper?: string
      prefix?: string
      suffix?: string
      input?: string
      count?: string
    }>,
    styles: Object as PropType<{
      affixWrapper?: Record<string, string>
      prefix?: Record<string, string>
      suffix?: Record<string, string>
      input?: Record<string, string>
      count?: Record<string, string>
    }>,
  },
  emits: ['update:value', 'change', 'input', 'focus', 'blur', 'pressEnter', 'clear', 'onPressEnter'],
  setup(props, { slots, emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const config = useConfig()
    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const inputRef = ref<HTMLInputElement>()

    const mergedSize = computed(() => props.size ?? config.value.componentSize)

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    // Expose focus/blur methods
    expose({
      focus: (options?: { preventScroll?: boolean; cursor?: 'start' | 'end' | 'all' }) => {
        inputRef.value?.focus(options)
        if (options?.cursor && inputRef.value) {
          const len = inputRef.value.value.length
          if (options.cursor === 'start') {
            inputRef.value.setSelectionRange(0, 0)
          } else if (options.cursor === 'end') {
            inputRef.value.setSelectionRange(len, len)
          } else if (options.cursor === 'all') {
            inputRef.value.setSelectionRange(0, len)
          }
        }
      },
      blur: () => inputRef.value?.blur(),
      input: inputRef,
    })

    const wrapperCls = computed(() =>
      cls(`${prefixCls}-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-disabled`]: props.disabled,
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize.value === 'large',
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize.value === 'small',
        [`${prefixCls}-affix-wrapper-status-error`]: props.status === 'error',
        [`${prefixCls}-affix-wrapper-status-warning`]: props.status === 'warning',
      }),
    )

    const inputCls = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-lg`]: mergedSize.value === 'large',
        [`${prefixCls}-sm`]: mergedSize.value === 'small',
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
      if (e.key === 'Enter') {
        emit('pressEnter', e)
        emit('onPressEnter', e)
      }
    }

    const allowClearConfig = computed(() => {
      if (typeof props.allowClear === 'object' && props.allowClear !== null) {
        return props.allowClear
      }
      return { disabled: false }
    })

    const handleClear = () => {
      if (allowClearConfig.value.disabled) return
      innerValue.value = ''
      emit('update:value', '')
      emit('clear')
      inputRef.value?.focus()
    }

    const hasFix = computed(
      () =>
        slots.prefix ||
        slots.suffix ||
        props.prefix ||
        props.suffix ||
        (props.allowClear && !allowClearConfig.value.disabled) ||
        props.showCount,
    )

    return () => {
      const inputEl = (
        <input
          ref={inputRef}
          class={cls(hasFix.value ? prefixCls : inputCls.value, props.classNames?.input)}
          style={props.styles?.input}
          type={props.type}
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readOnly}
          maxlength={props.maxLength}
          id={props.id}
          aria-invalid={props.status === 'error' || undefined}
          onInput={handleInput}
          onKeydown={handleKeydown}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
      )

      if (!hasFix.value) return inputEl

      const clearIcon = allowClearConfig.value.clearIcon || <CloseOutlined />
      const clearBtn = props.allowClear && innerValue.value && !allowClearConfig.value.disabled && (
        <span class={`${prefixCls}-clear-icon`} onClick={handleClear}>
          {clearIcon}
        </span>
      )

      const countNode = (() => {
        if (!props.showCount) return null
        const count = innerValue.value.length
        const max = props.maxLength
        if (typeof props.showCount === 'object' && props.showCount.formatter) {
          return (
            <span class={cls(`${prefixCls}-show-count-suffix`, props.classNames?.count)} style={props.styles?.count}>
              {props.showCount.formatter({ value: innerValue.value, count, maxLength: max })}
            </span>
          )
        }
        return (
          <span class={cls(`${prefixCls}-show-count-suffix`, props.classNames?.count)} style={props.styles?.count}>
            {max ? `${count} / ${max}` : `${count}`}
          </span>
        )
      })()

      const prefixNode = slots.prefix?.() || (props.prefix && <span>{props.prefix}</span>)
      const suffixNode = slots.suffix?.() || (props.suffix && <span>{props.suffix}</span>)

      return (
        <span
          class={cls(wrapperCls.value, props.rootClassName, props.classNames?.affixWrapper)}
          style={props.styles?.affixWrapper}
        >
          {prefixNode && (
            <span class={cls(`${prefixCls}-prefix`, props.classNames?.prefix)} style={props.styles?.prefix}>
              {prefixNode}
            </span>
          )}
          {inputEl}
          {clearBtn}
          {suffixNode && (
            <span class={cls(`${prefixCls}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
              {suffixNode}
            </span>
          )}
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
      default: undefined,
    },
    status: {
      type: String as PropType<InputStatus>,
      default: '',
    },
    visibilityToggle: {
      type: [Boolean, Object] as PropType<
        boolean | { visible?: boolean; onVisibleChange?: (visible: boolean) => void }
      >,
      default: true,
    },
    iconRender: Function as PropType<(visible: boolean) => VNode | string>,
    action: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click',
    },
    rootClassName: String,
  },
  emits: ['update:value', 'change', 'input', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const config = useConfig()
    const visible = ref(false)
    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const inputRef = ref<HTMLInputElement>()

    const mergedSize = computed(() => props.size ?? config.value.componentSize)

    const visibilityControlled = computed(
      () => typeof props.visibilityToggle === 'object' && props.visibilityToggle.visible !== undefined,
    )

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    watch(
      () =>
        visibilityControlled.value && typeof props.visibilityToggle === 'object'
          ? props.visibilityToggle.visible
          : undefined,
      (v) => {
        if (v !== undefined) visible.value = v
      },
    )

    // Expose focus/blur methods
    expose({
      focus: (options?: { preventScroll?: boolean; cursor?: 'start' | 'end' | 'all' }) => {
        inputRef.value?.focus(options)
        if (options?.cursor && inputRef.value) {
          const len = inputRef.value.value.length
          if (options.cursor === 'start') {
            inputRef.value.setSelectionRange(0, 0)
          } else if (options.cursor === 'end') {
            inputRef.value.setSelectionRange(len, len)
          } else if (options.cursor === 'all') {
            inputRef.value.setSelectionRange(0, len)
          }
        }
      },
      blur: () => inputRef.value?.blur(),
      input: inputRef,
    })

    const wrapperCls = computed(() =>
      cls(`${prefixCls}-affix-wrapper`, `${prefixCls}-password`, props.rootClassName, {
        [`${prefixCls}-affix-wrapper-disabled`]: props.disabled,
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize.value === 'large',
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize.value === 'small',
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

    const onVisibleChange = () => {
      if (props.disabled) return
      const nextVisible = !visible.value
      visible.value = nextVisible
      if (typeof props.visibilityToggle === 'object' && props.visibilityToggle.onVisibleChange) {
        props.visibilityToggle.onVisibleChange(nextVisible)
      }
    }

    const defaultIconRender = (vis: boolean) => {
      if (vis) return <EyeOutlined />
      // Temporary: use simple text until EyeInvisibleOutlined is added
      return <span style={{ fontSize: '14px' }}>👁‍🗨</span>
    }

    return () => {
      const showToggle = props.visibilityToggle !== false
      const iconRenderer = props.iconRender || defaultIconRender
      const icon = showToggle ? iconRenderer(visible.value) : null

      const actionMap: Record<string, string> = {
        click: 'onClick',
        hover: 'onMouseover',
      }
      const triggerEvent = actionMap[props.action] || 'onClick'

      return (
        <span class={wrapperCls.value}>
          <input
            ref={inputRef}
            class={prefixCls}
            type={visible.value ? 'text' : 'password'}
            value={innerValue.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            onInput={handleInput}
            onFocus={(e: FocusEvent) => emit('focus', e)}
            onBlur={(e: FocusEvent) => emit('blur', e)}
          />
          {showToggle && (
            <span
              class={`${prefixCls}-suffix ${prefixCls}-password-icon`}
              {...{ [triggerEvent]: onVisibleChange }}
              style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
            >
              {icon}
            </span>
          )}
        </span>
      )
    }
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
    showCount: [Boolean, Object] as PropType<
      | boolean
      | {
          formatter?: (info: { value: string; count: number; maxLength?: number }) => VNode | string
        }
    >,
    status: {
      type: String as PropType<InputStatus>,
      default: '',
    },
    allowClear: [Boolean, Object] as PropType<boolean | { clearIcon?: VNode; disabled?: boolean }>,
    autoSize: [Boolean, Object] as PropType<boolean | { minRows?: number; maxRows?: number }>,
    rootClassName: String,
    classNames: Object as PropType<{
      textarea?: string
      count?: string
    }>,
    styles: Object as PropType<{
      textarea?: Record<string, string>
      count?: Record<string, string>
    }>,
  },
  emits: ['update:value', 'change', 'input', 'focus', 'blur', 'clear', 'pressEnter', 'onPressEnter'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const textareaRef = ref<HTMLTextAreaElement>()

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    // Expose focus/blur methods
    expose({
      focus: (options?: { preventScroll?: boolean; cursor?: 'start' | 'end' | 'all' }) => {
        textareaRef.value?.focus(options)
        if (options?.cursor && textareaRef.value) {
          const len = textareaRef.value.value.length
          if (options.cursor === 'start') {
            textareaRef.value.setSelectionRange(0, 0)
          } else if (options.cursor === 'end') {
            textareaRef.value.setSelectionRange(len, len)
          } else if (options.cursor === 'all') {
            textareaRef.value.setSelectionRange(0, len)
          }
        }
      },
      blur: () => textareaRef.value?.blur(),
      resizableTextArea: textareaRef,
    })

    // Auto-resize logic
    const computedRows = ref(props.rows)
    const updateAutoSize = () => {
      if (!props.autoSize || !textareaRef.value) return
      const minRows = typeof props.autoSize === 'object' ? props.autoSize.minRows : props.rows
      const maxRows = typeof props.autoSize === 'object' ? props.autoSize.maxRows : undefined

      textareaRef.value.style.height = 'auto'
      const scrollHeight = textareaRef.value.scrollHeight
      const lineHeight = parseInt(getComputedStyle(textareaRef.value).lineHeight || '22', 10)
      const rows = Math.ceil(scrollHeight / lineHeight)

      if (minRows && rows < minRows) {
        computedRows.value = minRows
      } else if (maxRows && rows > maxRows) {
        computedRows.value = maxRows
      } else {
        computedRows.value = rows
      }
    }

    watch(() => innerValue.value, updateAutoSize)
    watch(() => props.autoSize, updateAutoSize)

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
      updateAutoSize()
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        emit('pressEnter', e)
        emit('onPressEnter', e)
      }
    }

    const allowClearConfig = computed(() => {
      if (typeof props.allowClear === 'object' && props.allowClear !== null) {
        return props.allowClear
      }
      return { disabled: false }
    })

    const handleClear = () => {
      if (allowClearConfig.value.disabled) return
      innerValue.value = ''
      emit('update:value', '')
      emit('clear')
      textareaRef.value?.focus()
      updateAutoSize()
    }

    const hasWrapper = computed(() => props.showCount || (props.allowClear && !allowClearConfig.value.disabled))

    return () => {
      const textarea = (
        <textarea
          ref={textareaRef}
          class={cls(textareaCls.value, props.classNames?.textarea)}
          style={props.styles?.textarea}
          value={innerValue.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readonly={props.readOnly}
          rows={props.autoSize ? computedRows.value : props.rows}
          maxlength={props.maxLength}
          onInput={handleInput}
          onKeydown={handleKeydown}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
      )

      if (!hasWrapper.value) return textarea

      const clearIcon = allowClearConfig.value.clearIcon || <CloseOutlined />
      const clearBtn = props.allowClear && innerValue.value && !allowClearConfig.value.disabled && (
        <span class={`${prefixCls}-clear-icon`} onClick={handleClear}>
          {clearIcon}
        </span>
      )

      const countNode = (() => {
        if (!props.showCount) return null
        const count = innerValue.value.length
        const max = props.maxLength
        if (typeof props.showCount === 'object' && props.showCount.formatter) {
          return (
            <span class={cls(`${prefixCls}-show-count-suffix`, props.classNames?.count)} style={props.styles?.count}>
              {props.showCount.formatter({ value: innerValue.value, count, maxLength: max })}
            </span>
          )
        }
        return (
          <span class={cls(`${prefixCls}-show-count-suffix`, props.classNames?.count)} style={props.styles?.count}>
            {max ? `${count} / ${max}` : `${count}`}
          </span>
        )
      })()

      return (
        <div class={cls(`${prefixCls}-textarea-show-count`, props.rootClassName)}>
          {textarea}
          {clearBtn}
          {countNode}
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
      default: undefined,
    },
    loading: Boolean,
    enterButton: {
      type: [Boolean, String],
      default: false,
    },
    searchIcon: [String, Object] as PropType<string | VNode>,
    rootClassName: String,
  },
  emits: ['update:value', 'change', 'input', 'search', 'pressEnter', 'onPressEnter'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const config = useConfig()
    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const inputRef = ref<HTMLInputElement>()

    const mergedSize = computed(() => props.size ?? config.value.componentSize)

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    // Expose focus/blur methods
    expose({
      focus: (options?: { preventScroll?: boolean; cursor?: 'start' | 'end' | 'all' }) => {
        inputRef.value?.focus(options)
        if (options?.cursor && inputRef.value) {
          const len = inputRef.value.value.length
          if (options.cursor === 'start') {
            inputRef.value.setSelectionRange(0, 0)
          } else if (options.cursor === 'end') {
            inputRef.value.setSelectionRange(len, len)
          } else if (options.cursor === 'all') {
            inputRef.value.setSelectionRange(0, len)
          }
        }
      },
      blur: () => inputRef.value?.blur(),
      input: inputRef,
    })

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    const handleSearch = (e: Event) => {
      emit('search', innerValue.value, e, { source: 'input' })
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        emit('pressEnter', e)
        emit('onPressEnter', e)
        handleSearch(e)
      }
    }

    return () => {
      const icon = props.loading ? (
        <LoadingOutlined class="hmfw-icon-loading" />
      ) : (
        props.searchIcon || <SearchOutlined />
      )

      return (
        <span
          class={cls(`${prefixCls}-search`, `${prefixCls}-affix-wrapper`, props.rootClassName, {
            [`${prefixCls}-affix-wrapper-lg`]: mergedSize.value === 'large',
            [`${prefixCls}-affix-wrapper-sm`]: mergedSize.value === 'small',
            [`${prefixCls}-affix-wrapper-disabled`]: props.disabled,
          })}
        >
          <input
            ref={inputRef}
            class={prefixCls}
            type="search"
            value={innerValue.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            onInput={handleInput}
            onKeydown={handleKeydown}
          />
          <span class={`${prefixCls}-suffix`}>
            <button
              class={`${prefixCls}-search-button`}
              disabled={props.disabled || props.loading}
              onClick={handleSearch}
            >
              {typeof props.enterButton === 'string' ? props.enterButton : icon}
            </button>
          </span>
        </span>
      )
    }
  },
})
