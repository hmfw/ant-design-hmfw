import { defineComponent, ref, computed, watch, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type { AutoCompleteOption, AutoCompleteAllowClear, AutoCompleteClassNames, AutoCompleteStyles } from './types'

// Map AntD-style size to the Input style suffix convention (-lg / -sm).
const sizeSuffix = (size: 'small' | 'middle' | 'large'): '' | 'lg' | 'sm' =>
  size === 'large' ? 'lg' : size === 'small' ? 'sm' : ''

export const AutoComplete = defineComponent({
  name: 'AutoComplete',
  inheritAttrs: false,
  props: {
    value: String,
    defaultValue: { type: String, default: '' },
    options: { type: Array as PropType<AutoCompleteOption[]>, default: () => [] },
    disabled: Boolean,
    placeholder: String,
    allowClear: { type: [Boolean, Object] as PropType<AutoCompleteAllowClear>, default: false },
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    filterOption: {
      type: [Boolean, Function] as PropType<boolean | ((input: string, opt: AutoCompleteOption) => boolean)>,
      default: true,
    },
    backfill: Boolean,
    defaultActiveFirstOption: { type: Boolean, default: true },
    notFoundContent: String,
    defaultOpen: Boolean,
    open: { type: Boolean, default: undefined },
    classNames: { type: Object as PropType<AutoCompleteClassNames> },
    styles: { type: Object as PropType<AutoCompleteStyles> },
  },
  emits: ['update:value', 'change', 'select', 'search', 'focus', 'blur', 'clear', 'openChange'],
  setup(props, { slots, emit, attrs, expose }) {
    const prefixCls = usePrefixCls('auto-complete')
    const inputPfx = usePrefixCls('input')

    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const innerOpen = ref(props.defaultOpen ?? false)
    const activeIndex = ref(-1)
    const inputRef = ref<HTMLInputElement>()

    const isControlled = computed(() => props.value !== undefined)
    const inputValue = computed(() => (isControlled.value ? props.value! : innerValue.value))
    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    const filteredOptions = computed(() => {
      const input = inputValue.value
      if (!input) return props.options
      if (props.filterOption === false) return props.options
      if (typeof props.filterOption === 'function') {
        return props.options.filter((opt) => (props.filterOption as Function)(input, opt))
      }
      return props.options.filter(
        (opt) =>
          opt.value.toLowerCase().includes(input.toLowerCase()) ||
          (opt.label ?? opt.value).toLowerCase().includes(input.toLowerCase()),
      )
    })

    const hasPanelContent = computed(() => filteredOptions.value.length > 0 || !!props.notFoundContent)
    const firstEnabledIndex = computed(() => filteredOptions.value.findIndex((o) => !o.disabled))

    const resetActive = () => {
      activeIndex.value = props.defaultActiveFirstOption ? firstEnabledIndex.value : -1
    }

    watch(
      () => filteredOptions.value,
      (opts) => {
        if (!isOpen.value) return
        if (activeIndex.value >= opts.length) activeIndex.value = opts.length - 1
        if (activeIndex.value < 0 && props.defaultActiveFirstOption) {
          activeIndex.value = firstEnabledIndex.value
        }
      },
    )

    const setOpen = (v: boolean) => {
      if (innerOpen.value === v) return
      innerOpen.value = v
      emit('openChange', v)
    }

    const setValue = (val: string) => {
      innerValue.value = val
      emit('update:value', val)
      emit('change', val)
    }

    const handleSelect = (opt: AutoCompleteOption) => {
      if (opt.disabled) return
      setValue(opt.value)
      emit('select', opt.value, opt)
      setOpen(false)
    }

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      setValue(val)
      emit('search', val)
      if (!isOpen.value && hasPanelContent.value) setOpen(true)
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      setValue('')
      emit('clear')
      inputRef.value?.focus()
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen.value) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault()
          if (hasPanelContent.value) setOpen(true)
        }
        return
      }
      const opts = filteredOptions.value
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        let next = activeIndex.value + 1
        while (next < opts.length && opts[next].disabled) next++
        if (next < opts.length) {
          activeIndex.value = next
          if (props.backfill) setValue(opts[next].value)
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        let prev = activeIndex.value - 1
        while (prev >= 0 && opts[prev].disabled) prev--
        if (prev >= 0) {
          activeIndex.value = prev
          if (props.backfill) setValue(opts[prev].value)
        }
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (activeIndex.value >= 0 && activeIndex.value < opts.length) {
          handleSelect(opts[activeIndex.value])
        }
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    expose({ focus: () => inputRef.value?.focus(), blur: () => inputRef.value?.blur() })

    const renderClearIcon = () => {
      if (typeof props.allowClear === 'object' && props.allowClear.clearIcon) {
        return props.allowClear.clearIcon
      }
      return '✕'
    }

    const sfx = computed(() => sizeSuffix(props.size))

    const renderPopup = () => (
      <>
        {filteredOptions.value.length > 0 ? (
          filteredOptions.value.map((opt, i) => (
            <div
              key={opt.value}
              class={cls(
                `${prefixCls}-dropdown-item`,
                {
                  [`${prefixCls}-dropdown-item-active`]: activeIndex.value === i,
                  [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
                  [`${prefixCls}-dropdown-item-selected`]: opt.value === inputValue.value,
                },
                props.classNames?.option,
              )}
              style={props.styles?.option}
              onMouseenter={() => {
                if (!opt.disabled) activeIndex.value = i
              }}
              onMousedown={(e: MouseEvent) => {
                e.preventDefault()
                handleSelect(opt)
              }}
            >
              {opt.label ?? opt.value}
            </div>
          ))
        ) : (
          <div class={cls(`${prefixCls}-dropdown-empty`, props.classNames?.empty)} style={props.styles?.empty}>
            {props.notFoundContent}
          </div>
        )}
      </>
    )

    return () => (
      <Trigger
        open={isOpen.value && hasPanelContent.value}
        trigger="click"
        placement={'bottomLeft' as Placement}
        disabled={props.disabled}
        destroyOnHidden
        matchWidth
        popupClass={cls(`${prefixCls}-dropdown`, props.classNames?.dropdown)}
        popupStyle={props.styles?.dropdown}
        onOpenChange={(v: boolean) => setOpen(v)}
      >
        {{
          default: () => (
            <div
              class={cls(
                prefixCls,
                `${inputPfx}-affix-wrapper`,
                sfx.value && `${inputPfx}-affix-wrapper-${sfx.value}`,
                {
                  [`${inputPfx}-affix-wrapper-disabled`]: props.disabled,
                  [`${inputPfx}-affix-wrapper-status-error`]: props.status === 'error',
                  [`${inputPfx}-affix-wrapper-status-warning`]: props.status === 'warning',
                  [`${inputPfx}-affix-wrapper-focused`]: isOpen.value,
                },
                props.classNames?.root,
              )}
              style={{ ...(attrs.style as any), ...props.styles?.root }}
            >
              {slots.prefix && (
                <span class={cls(`${inputPfx}-prefix`, props.classNames?.prefix)} style={props.styles?.prefix}>
                  {slots.prefix()}
                </span>
              )}
              <input
                ref={inputRef}
                class={cls(inputPfx, sfx.value && `${inputPfx}-${sfx.value}`, props.classNames?.input)}
                style={props.styles?.input}
                value={inputValue.value}
                disabled={props.disabled}
                placeholder={props.placeholder}
                onInput={handleInput}
                onFocus={(e) => {
                  if (hasPanelContent.value) setOpen(true)
                  resetActive()
                  emit('focus', e)
                }}
                onBlur={(e) => emit('blur', e)}
                onKeydown={handleKeydown}
                autocomplete="off"
              />
              {!!props.allowClear && inputValue.value && !props.disabled && (
                <span
                  class={cls(`${inputPfx}-clear-icon`, props.classNames?.clear)}
                  style={props.styles?.clear}
                  onMousedown={handleClear}
                >
                  {renderClearIcon()}
                </span>
              )}
              {slots.suffix && (
                <span class={cls(`${inputPfx}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
                  {slots.suffix()}
                </span>
              )}
            </div>
          ),
          popup: renderPopup,
        }}
      </Trigger>
    )
  },
})
