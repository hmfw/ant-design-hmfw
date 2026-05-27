import {
  defineComponent,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
  Teleport,
  type PropType,
} from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import type { SelectSize, SelectMode, SelectStatus, SelectOption } from './types'

export const Select = defineComponent({
  name: 'Select',
  props: {
    value: [String, Number, Array] as PropType<string | number | (string | number)[]>,
    defaultValue: [String, Number, Array] as PropType<string | number | (string | number)[]>,
    options: {
      type: Array as PropType<SelectOption[]>,
      default: () => [],
    },
    mode: String as PropType<SelectMode>,
    size: {
      type: String as PropType<SelectSize>,
      default: 'middle',
    },
    status: String as PropType<SelectStatus>,
    placeholder: {
      type: String,
      default: undefined,
    },
    disabled: Boolean,
    loading: Boolean,
    allowClear: Boolean,
    showSearch: Boolean,
    filterOption: {
      type: [Boolean, Function] as PropType<boolean | ((input: string, option: SelectOption) => boolean)>,
      default: true,
    },
    notFoundContent: {
      type: String,
      default: undefined,
    },
    maxTagCount: Number,
    open: {
      type: Boolean,
      default: undefined,
    },
    dropdownMatchSelectWidth: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:value', 'change', 'search', 'select', 'deselect', 'clear', 'dropdownVisibleChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('select')
    const locale = useLocale()
    const selectorRef = ref<HTMLElement | null>(null)
    const dropdownRef = ref<HTMLElement | null>(null)
    const searchRef = ref<HTMLInputElement | null>(null)

    const isMultiple = computed(() => props.mode === 'multiple' || props.mode === 'tags')

    const normalizeValue = (v: typeof props.value) => {
      if (v === undefined || v === null) return isMultiple.value ? [] : undefined
      return v
    }

    const innerValue = ref<string | number | (string | number)[] | undefined>(
      normalizeValue(props.defaultValue ?? props.value),
    )
    const innerOpen = ref(false)
    const searchText = ref('')
    const dropdownPos = ref({ top: 0, left: 0, width: 0 })

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() =>
      isControlled.value ? props.value : innerValue.value,
    )

    watch(() => props.value, (v) => {
      if (v !== undefined) innerValue.value = v
    })

    const isOpen = computed(() =>
      props.open !== undefined ? props.open : innerOpen.value,
    )

    const selectedValues = computed(() => {
      const v = currentValue.value
      if (v === undefined || v === null) return []
      return Array.isArray(v) ? v : [v]
    })

    const filteredOptions = computed(() => {
      if (!searchText.value || !props.showSearch) return props.options
      const input = searchText.value.toLowerCase()
      return props.options.filter((opt) => {
        if (typeof props.filterOption === 'function') {
          return props.filterOption(input, opt)
        }
        if (props.filterOption === false) return true
        return opt.label.toLowerCase().includes(input)
      })
    })

    const selectedLabels = computed(() => {
      return selectedValues.value.map((v) => {
        const opt = props.options.find((o) => o.value === v)
        return opt?.label ?? String(v)
      })
    })

    const updateDropdownPos = () => {
      if (!selectorRef.value) return
      const rect = selectorRef.value.getBoundingClientRect()
      dropdownPos.value = {
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      }
    }

    const openDropdown = async () => {
      if (props.disabled) return
      innerOpen.value = true
      emit('dropdownVisibleChange', true)
      await nextTick()
      updateDropdownPos()
      if (props.showSearch) searchRef.value?.focus()
    }

    const closeDropdown = () => {
      innerOpen.value = false
      searchText.value = ''
      emit('dropdownVisibleChange', false)
    }

    const selectOption = (opt: SelectOption) => {
      if (opt.disabled) return
      if (isMultiple.value) {
        const vals = [...selectedValues.value]
        const idx = vals.indexOf(opt.value)
        if (idx >= 0) {
          vals.splice(idx, 1)
          emit('deselect', opt.value)
        } else {
          vals.push(opt.value)
          emit('select', opt.value)
        }
        innerValue.value = vals
        emit('update:value', vals)
        emit('change', vals)
        searchText.value = ''
      } else {
        innerValue.value = opt.value
        emit('update:value', opt.value)
        emit('change', opt.value)
        emit('select', opt.value)
        closeDropdown()
      }
    }

    const removeTag = (val: string | number, e: MouseEvent) => {
      e.stopPropagation()
      const vals = selectedValues.value.filter((v) => v !== val)
      innerValue.value = vals
      emit('update:value', vals)
      emit('change', vals)
      emit('deselect', val)
    }

    const clearAll = (e: MouseEvent) => {
      e.stopPropagation()
      const empty = isMultiple.value ? [] : undefined
      innerValue.value = empty
      emit('update:value', empty)
      emit('change', empty)
      emit('clear')
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!isOpen.value) return
      if (
        selectorRef.value?.contains(e.target as Node) ||
        dropdownRef.value?.contains(e.target as Node)
      ) return
      closeDropdown()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick))

    return () => {
      const hasValue = selectedValues.value.length > 0
      const showClear = props.allowClear && hasValue && !props.disabled

      const displayTags = isMultiple.value
        ? (props.maxTagCount !== undefined
          ? selectedLabels.value.slice(0, props.maxTagCount)
          : selectedLabels.value)
        : []
      const overflowCount = isMultiple.value && props.maxTagCount !== undefined
        ? Math.max(0, selectedValues.value.length - props.maxTagCount)
        : 0

      return (
        <div
          class={cls(prefixCls, `${prefixCls}-${props.size}`, {
            [`${prefixCls}-open`]: isOpen.value,
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-loading`]: props.loading,
            [`${prefixCls}-multiple`]: isMultiple.value,
            [`${prefixCls}-status-${props.status}`]: !!props.status,
            [`${prefixCls}-allow-clear`]: props.allowClear,
          })}
        >
          <div
            ref={selectorRef}
            class={`${prefixCls}-selector`}
            role="combobox"
            aria-expanded={isOpen.value}
            aria-haspopup="listbox"
            aria-disabled={props.disabled || undefined}
            onClick={isOpen.value ? closeDropdown : openDropdown}
          >
            {isMultiple.value ? (
              <>
                {displayTags.map((label, i) => (
                  <span key={selectedValues.value[i]} class={`${prefixCls}-selection-item`}>
                    <span class={`${prefixCls}-selection-item-content`}>{label}</span>
                    <span
                      class={`${prefixCls}-selection-item-remove`}
                      onClick={(e) => removeTag(selectedValues.value[i], e)}
                    >
                      ×
                    </span>
                  </span>
                ))}
                {overflowCount > 0 && (
                  <span class={`${prefixCls}-selection-item`}>+{overflowCount}</span>
                )}
                {props.showSearch && (
                  <input
                    ref={searchRef}
                    class={`${prefixCls}-selection-search-input`}
                    value={searchText.value}
                    onInput={(e) => {
                      searchText.value = (e.target as HTMLInputElement).value
                      emit('search', searchText.value)
                    }}
                    style={{ width: `${Math.max(4, searchText.value.length + 1)}ch` }}
                  />
                )}
                {!hasValue && !searchText.value && (
                  <span class={`${prefixCls}-selection-placeholder`}>{props.placeholder ?? locale.value.Select.placeholder}</span>
                )}
              </>
            ) : (
              <>
                {hasValue && !searchText.value ? (
                  <span class={`${prefixCls}-selection-item`}>{selectedLabels.value[0]}</span>
                ) : (
                  !searchText.value && (
                    <span class={`${prefixCls}-selection-placeholder`}>{props.placeholder ?? locale.value.Select.placeholder}</span>
                  )
                )}
                {props.showSearch && isOpen.value && (
                  <input
                    ref={searchRef}
                    class={`${prefixCls}-selection-search-input`}
                    value={searchText.value}
                    onInput={(e) => {
                      searchText.value = (e.target as HTMLInputElement).value
                      emit('search', searchText.value)
                    }}
                  />
                )}
              </>
            )}
          </div>

          <div class={`${prefixCls}-arrow`}>
            {props.loading ? (
              <span class={`${prefixCls}-loading-icon`}>⟳</span>
            ) : (
              <span class={cls(`${prefixCls}-suffix`, { [`${prefixCls}-suffix-open`]: isOpen.value })}>▾</span>
            )}
          </div>

          {showClear && (
            <span class={`${prefixCls}-clear`} onClick={clearAll}>×</span>
          )}

          {isOpen.value && (
            <Teleport to="body">
              <div
                ref={dropdownRef}
                class={`${prefixCls}-dropdown`}
                role="listbox"
                aria-multiselectable={isMultiple.value || undefined}
                style={{
                  position: 'absolute',
                  top: `${dropdownPos.value.top}px`,
                  left: `${dropdownPos.value.left}px`,
                  width: props.dropdownMatchSelectWidth ? `${dropdownPos.value.width}px` : 'auto',
                  minWidth: `${dropdownPos.value.width}px`,
                  zIndex: '1050',
                }}
              >
                {filteredOptions.value.length === 0 ? (
                  <div class={`${prefixCls}-item-empty`}>{props.notFoundContent ?? locale.value.Select.notFoundContent}</div>
                ) : (
                  filteredOptions.value.map((opt) => (
                    <div
                      key={opt.value}
                      class={cls(`${prefixCls}-item`, `${prefixCls}-item-option`, {
                        [`${prefixCls}-item-option-selected`]: selectedValues.value.includes(opt.value),
                        [`${prefixCls}-item-option-disabled`]: opt.disabled,
                        [`${prefixCls}-item-option-active`]: !opt.disabled,
                      })}
                      role="option"
                      aria-selected={selectedValues.value.includes(opt.value)}
                      aria-disabled={opt.disabled || undefined}
                      title={opt.title ?? opt.label}
                      onMousedown={(e) => e.preventDefault()}
                      onClick={() => selectOption(opt)}
                    >
                      <div class={`${prefixCls}-item-option-content`}>{opt.label}</div>
                      {selectedValues.value.includes(opt.value) && (
                        <span class={`${prefixCls}-item-option-state`}>✓</span>
                      )}
                    </div>
                  ))
                )}
              </div>
            </Teleport>
          )}
        </div>
      )
    }
  },
})
