import {
  defineComponent, ref, computed, watch, onMounted, onUnmounted, nextTick, type PropType, Teleport,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AutoCompleteOption, AutoCompleteAllowClear } from './types'

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
  },
  emits: ['update:value', 'change', 'select', 'search', 'focus', 'blur', 'clear', 'openChange'],
  setup(props, { slots, emit, attrs, expose }) {
    const prefixCls = usePrefixCls('auto-complete')
    const inputPfx = usePrefixCls('input')

    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const innerOpen = ref(props.defaultOpen ?? false)
    const activeIndex = ref(-1)
    const triggerRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()
    const dropdownRef = ref<HTMLElement>()
    const dropdownPos = ref({ top: 0, left: 0, width: 0 })

    const isControlled = computed(() => props.value !== undefined)
    const inputValue = computed(() => isControlled.value ? props.value! : innerValue.value)
    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const filteredOptions = computed(() => {
      const input = inputValue.value
      if (!input) return props.options
      if (props.filterOption === false) return props.options
      if (typeof props.filterOption === 'function') {
        return props.options.filter((opt) => (props.filterOption as Function)(input, opt))
      }
      return props.options.filter((opt) =>
        opt.value.toLowerCase().includes(input.toLowerCase()) ||
        (opt.label ?? opt.value).toLowerCase().includes(input.toLowerCase())
      )
    })

    // AntD only renders the popup when there are options to show; an empty
    // `options` list never displays an empty panel (even with `open` set).
    const hasPanelContent = computed(() =>
      filteredOptions.value.length > 0 || !!props.notFoundContent
    )

    // index of the first non-disabled option, used by defaultActiveFirstOption
    const firstEnabledIndex = computed(() =>
      filteredOptions.value.findIndex((o) => !o.disabled)
    )

    const resetActive = () => {
      activeIndex.value = props.defaultActiveFirstOption ? firstEnabledIndex.value : -1
    }

    // Options often arrive asynchronously (controlled `search` pattern). Keep the
    // highlighted index valid: clamp out-of-range, and re-highlight the first
    // option when the list changes while the panel is open.
    watch(() => filteredOptions.value, (opts) => {
      if (!isOpen.value) return
      if (activeIndex.value >= opts.length || (activeIndex.value >= 0 && opts[activeIndex.value]?.disabled)) {
        resetActive()
      } else if (activeIndex.value === -1) {
        resetActive()
      }
    })

    const setOpen = (next: boolean) => {
      if (innerOpen.value === next) return
      innerOpen.value = next
      emit('openChange', next)
    }

    const updatePos = () => {
      if (!triggerRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      dropdownPos.value = {
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      }
    }

    const openDropdown = () => {
      updatePos()
      setOpen(true)
    }

    const closeDropdown = () => {
      setOpen(false)
      activeIndex.value = -1
    }

    const setValue = (val: string) => {
      innerValue.value = val
      emit('update:value', val)
      emit('change', val)
    }

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      setValue(val)
      emit('search', val)
      openDropdown()
      resetActive()
    }

    const handleSelect = (opt: AutoCompleteOption) => {
      if (opt.disabled) return
      setValue(opt.value)
      emit('select', opt.value, opt)
      closeDropdown()
    }

    const handleClear = (e: MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setValue('')
      emit('clear')
      inputRef.value?.focus()
    }

    const scrollActiveIntoView = () => {
      nextTick(() => {
        const node = dropdownRef.value?.querySelector(`.${prefixCls}-dropdown-item-active`)
        if (node && typeof (node as HTMLElement).scrollIntoView === 'function') {
          (node as HTMLElement).scrollIntoView({ block: 'nearest' })
        }
      })
    }

    // Move active index over non-disabled options only.
    const moveActive = (offset: number) => {
      const opts = filteredOptions.value
      if (!opts.length) return
      let next = activeIndex.value
      for (let i = 0; i < opts.length; i++) {
        next = (next + offset + opts.length) % opts.length
        if (!opts[next].disabled) break
      }
      activeIndex.value = next
      if (props.backfill && opts[next] && !opts[next].disabled) setValue(opts[next].value)
      scrollActiveIntoView()
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen.value) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault()
          openDropdown()
          resetActive()
        }
        return
      }
      const opts = filteredOptions.value
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        moveActive(1)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        moveActive(-1)
      } else if (e.key === 'Enter') {
        if (activeIndex.value >= 0 && opts[activeIndex.value] && !opts[activeIndex.value].disabled) {
          e.preventDefault()
          handleSelect(opts[activeIndex.value])
        } else {
          closeDropdown()
        }
      } else if (e.key === 'Escape') {
        closeDropdown()
      }
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        !triggerRef.value?.contains(e.target as Node) &&
        !dropdownRef.value?.contains(e.target as Node)
      ) closeDropdown()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

    const renderClearIcon = () => {
      if (typeof props.allowClear === 'object' && props.allowClear.clearIcon) {
        return props.allowClear.clearIcon
      }
      return '✕'
    }

    const sfx = computed(() => sizeSuffix(props.size))

    return () => (
      <>
        <div
          ref={triggerRef}
          class={cls(
            prefixCls,
            `${inputPfx}-affix-wrapper`,
            sfx.value && `${inputPfx}-affix-wrapper-${sfx.value}`,
            {
              [`${inputPfx}-affix-wrapper-disabled`]: props.disabled,
              [`${inputPfx}-affix-wrapper-status-error`]: props.status === 'error',
              [`${inputPfx}-affix-wrapper-status-warning`]: props.status === 'warning',
              [`${inputPfx}-affix-wrapper-focused`]: isOpen.value,
            }
          )}
          style={attrs.style as any}
        >
          {slots.prefix && <span class={`${inputPfx}-prefix`}>{slots.prefix()}</span>}
          <input
            ref={inputRef}
            class={cls(inputPfx, sfx.value && `${inputPfx}-${sfx.value}`)}
            value={inputValue.value}
            disabled={props.disabled}
            placeholder={props.placeholder}
            onInput={handleInput}
            onFocus={(e) => { openDropdown(); resetActive(); emit('focus', e) }}
            onBlur={(e) => emit('blur', e)}
            onKeydown={handleKeydown}
            autocomplete="off"
          />
          {!!props.allowClear && inputValue.value && !props.disabled && (
            <span class={`${inputPfx}-clear-icon`} onMousedown={handleClear}>{renderClearIcon()}</span>
          )}
          {slots.suffix && <span class={`${inputPfx}-suffix`}>{slots.suffix()}</span>}
        </div>

        {isOpen.value && hasPanelContent.value && (
          <Teleport to="body">
            <div
              ref={dropdownRef}
              class={`${prefixCls}-dropdown`}
              style={{
                position: 'absolute',
                top: `${dropdownPos.value.top}px`,
                left: `${dropdownPos.value.left}px`,
                width: `${dropdownPos.value.width}px`,
                zIndex: 1050,
              }}
            >
              {filteredOptions.value.length > 0 ? (
                filteredOptions.value.map((opt, i) => (
                  <div
                    key={opt.value}
                    class={cls(`${prefixCls}-dropdown-item`, {
                      [`${prefixCls}-dropdown-item-active`]: activeIndex.value === i,
                      [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
                      [`${prefixCls}-dropdown-item-selected`]: opt.value === inputValue.value,
                    })}
                    onMouseenter={() => { if (!opt.disabled) activeIndex.value = i }}
                    onMousedown={(e) => { e.preventDefault(); handleSelect(opt) }}
                  >
                    {opt.label ?? opt.value}
                  </div>
                ))
              ) : (
                <div class={`${prefixCls}-dropdown-empty`}>{props.notFoundContent}</div>
              )}
            </div>
          </Teleport>
        )}
      </>
    )
  },
})
