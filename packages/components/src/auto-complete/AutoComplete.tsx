import {
  defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, Teleport,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { AutoCompleteOption } from './types'

export const AutoComplete = defineComponent({
  name: 'AutoComplete',
  props: {
    value: String,
    defaultValue: { type: String, default: '' },
    options: { type: Array as PropType<AutoCompleteOption[]>, default: () => [] },
    disabled: Boolean,
    placeholder: String,
    allowClear: { type: Boolean, default: false },
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    filterOption: {
      type: [Boolean, Function] as PropType<boolean | ((input: string, opt: AutoCompleteOption) => boolean)>,
      default: true,
    },
    backfill: Boolean,
    open: { type: Boolean, default: undefined },
  },
  emits: ['update:value', 'change', 'select', 'search', 'focus', 'blur', 'clear'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('auto-complete')
    const inputPfx = usePrefixCls('input')

    const innerValue = ref(props.defaultValue ?? props.value ?? '')
    const innerOpen = ref(false)
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
      innerOpen.value = true
    }

    const closeDropdown = () => {
      innerOpen.value = false
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
      activeIndex.value = -1
    }

    const handleSelect = (opt: AutoCompleteOption) => {
      setValue(opt.value)
      emit('select', opt.value, opt)
      closeDropdown()
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      setValue('')
      emit('clear')
      inputRef.value?.focus()
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen.value) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') openDropdown()
        return
      }
      const opts = filteredOptions.value
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value + 1) % opts.length
        if (props.backfill && opts[activeIndex.value]) setValue(opts[activeIndex.value].value)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value - 1 + opts.length) % opts.length
        if (props.backfill && opts[activeIndex.value]) setValue(opts[activeIndex.value].value)
      } else if (e.key === 'Enter') {
        if (activeIndex.value >= 0 && opts[activeIndex.value]) {
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

    return () => (
      <>
        <div
          ref={triggerRef}
          class={cls(
            prefixCls,
            `${inputPfx}-affix-wrapper`,
            `${inputPfx}-affix-wrapper-${props.size}`,
            {
              [`${inputPfx}-affix-wrapper-disabled`]: props.disabled,
              [`${inputPfx}-affix-wrapper-status-error`]: props.status === 'error',
              [`${inputPfx}-affix-wrapper-status-warning`]: props.status === 'warning',
              [`${inputPfx}-affix-wrapper-focused`]: isOpen.value,
            }
          )}
        >
          {slots.prefix && <span class={`${inputPfx}-prefix`}>{slots.prefix()}</span>}
          <input
            ref={inputRef}
            class={cls(inputPfx, `${inputPfx}-${props.size}`)}
            value={inputValue.value}
            disabled={props.disabled}
            placeholder={props.placeholder}
            onInput={handleInput}
            onFocus={() => { openDropdown(); emit('focus') }}
            onBlur={() => emit('blur')}
            onKeydown={handleKeydown}
            autocomplete="off"
          />
          {props.allowClear && inputValue.value && !props.disabled && (
            <span class={`${inputPfx}-clear-icon`} onMousedown={handleClear}>✕</span>
          )}
          {slots.suffix && <span class={`${inputPfx}-suffix`}>{slots.suffix()}</span>}
        </div>

        {isOpen.value && filteredOptions.value.length > 0 && (
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
              {filteredOptions.value.map((opt, i) => (
                <div
                  key={opt.value}
                  class={cls(`${prefixCls}-dropdown-item`, {
                    [`${prefixCls}-dropdown-item-active`]: activeIndex.value === i,
                    [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
                    [`${prefixCls}-dropdown-item-selected`]: opt.value === inputValue.value,
                  })}
                  onMousedown={(e) => { e.preventDefault(); !opt.disabled && handleSelect(opt) }}
                >
                  {opt.label ?? opt.value}
                </div>
              ))}
            </div>
          </Teleport>
        )}
      </>
    )
  },
})
