import { defineComponent, ref, computed, watch, nextTick, type PropType, h } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { VirtualList } from '../_internal/virtual-list'
import { Icon, DownOutlined, LoadingOutlined } from '../icon'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type { SelectSize, SelectMode, SelectStatus, SelectOption, LabeledValue, SelectValue } from './types'

export const Select = defineComponent({
  name: 'Select',
  props: {
    value: [String, Number, Array, Object] as PropType<SelectValue>,
    defaultValue: [String, Number, Array, Object] as PropType<SelectValue>,
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
    maxCount: Number,
    maxTagPlaceholder: [String, Function] as PropType<string | ((omittedValues: (string | number)[]) => string)>,
    open: {
      type: Boolean,
      default: undefined,
    },
    dropdownMatchSelectWidth: {
      type: Boolean,
      default: true,
    },
    labelInValue: Boolean,
    tokenSeparators: Array as PropType<string[]>,
    optionRender: Function as PropType<(option: SelectOption, info: { index: number }) => any>,
    labelRender: Function as PropType<(props: LabeledValue) => any>,
    tagRender: Function as PropType<
      (props: { label: string; value: string | number; closable: boolean; onClose: () => void }) => any
    >,
    autoClearSearchValue: {
      type: Boolean,
      default: true,
    },
    fieldNames: Object as PropType<{ label?: string; value?: string; options?: string }>,
    virtual: Boolean,
    listHeight: {
      type: Number,
      default: 256,
    },
    listItemHeight: {
      type: Number,
      default: 32,
    },
    classNames: Object as PropType<import('./types').SelectClassNames>,
    styles: Object as PropType<import('./types').SelectStyles>,
  },
  emits: ['update:value', 'change', 'search', 'select', 'deselect', 'clear', 'dropdownVisibleChange', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('select')
    const locale = useLocale()
    const selectorRef = ref<HTMLElement | null>(null)
    const searchRef = ref<HTMLInputElement | null>(null)
    const activeIndex = ref(-1)

    const isMultiple = computed(() => props.mode === 'multiple' || props.mode === 'tags')
    const isTags = computed(() => props.mode === 'tags')

    // Field name mapping
    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const optionsField = computed(() => props.fieldNames?.options ?? 'options')

    // Flatten options (handle OptGroup)
    const flatOptions = computed(() => {
      const result: SelectOption[] = []
      const flatten = (opts: SelectOption[]) => {
        opts.forEach((opt) => {
          if (opt[optionsField.value as keyof SelectOption]) {
            flatten(opt[optionsField.value as keyof SelectOption] as SelectOption[])
          } else {
            result.push(opt)
          }
        })
      }
      flatten(props.options)
      return result
    })

    // Dynamic options for tags mode
    const dynamicOptions = ref<SelectOption[]>([])

    const allOptions = computed(() => [...flatOptions.value, ...dynamicOptions.value])

    const extractRawValues = (v: SelectValue | undefined): (string | number)[] | undefined => {
      if (v === undefined || v === null) return isMultiple.value ? [] : undefined
      if (Array.isArray(v)) {
        if (v.length === 0) return []
        if (typeof v[0] === 'object' && v[0] !== null && 'value' in v[0]) {
          return (v as LabeledValue[]).map((lv) => lv.value)
        }
        return v as (string | number)[]
      }
      if (typeof v === 'object' && v !== null && 'value' in v) {
        return [(v as LabeledValue).value]
      }
      return [v as string | number]
    }

    const innerValue = ref<(string | number)[] | undefined>(extractRawValues(props.defaultValue ?? props.value))
    const innerOpen = ref(false)
    const searchText = ref('')

    const isControlled = computed(() => props.value !== undefined)
    const currentRawValues = computed(() => (isControlled.value ? extractRawValues(props.value) : innerValue.value))

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = extractRawValues(v)
      },
    )

    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    const selectedValues = computed(() => currentRawValues.value ?? [])

    const getOptionByValue = (val: string | number): SelectOption | undefined => {
      return allOptions.value.find((o) => o[valueField.value as keyof SelectOption] === val)
    }

    const getLabeledValue = (val: string | number): LabeledValue => {
      const opt = getOptionByValue(val)
      return {
        value: val,
        label: opt ? String(opt[labelField.value as keyof SelectOption]) : String(val),
        key: String(val),
      }
    }

    const buildEmitValue = (rawVals: (string | number)[] | undefined): SelectValue => {
      if (rawVals === undefined) return undefined
      if (!props.labelInValue) {
        return isMultiple.value ? rawVals : rawVals[0]
      }
      const labeled = rawVals.map(getLabeledValue)
      return isMultiple.value ? labeled : labeled[0]
    }

    const buildEmitOptions = (rawVals: (string | number)[]): SelectOption | SelectOption[] => {
      const opts = rawVals.map((v) => getOptionByValue(v)).filter(Boolean) as SelectOption[]
      return isMultiple.value ? opts : opts[0]
    }

    const filteredOptions = computed(() => {
      if (!searchText.value || !props.showSearch) return allOptions.value
      const input = searchText.value.toLowerCase()
      return allOptions.value.filter((opt) => {
        if (typeof props.filterOption === 'function') {
          return props.filterOption(input, opt)
        }
        if (props.filterOption === false) return true
        return String(opt[labelField.value as keyof SelectOption])
          .toLowerCase()
          .includes(input)
      })
    })

    const selectedLabels = computed(() => {
      return selectedValues.value.map((v) => {
        const opt = getOptionByValue(v)
        return opt ? String(opt[labelField.value as keyof SelectOption]) : String(v)
      })
    })

    const openDropdown = async () => {
      if (props.disabled) return
      innerOpen.value = true
      emit('dropdownVisibleChange', true)
      await nextTick()
      if (props.showSearch) searchRef.value?.focus()
    }

    const closeDropdown = () => {
      innerOpen.value = false
      searchText.value = ''
      activeIndex.value = -1
      emit('dropdownVisibleChange', false)
    }

    const updateValue = (rawVals: (string | number)[] | undefined) => {
      innerValue.value = rawVals
      const emitVal = buildEmitValue(rawVals)
      const emitOpts = rawVals && rawVals.length > 0 ? buildEmitOptions(rawVals) : isMultiple.value ? [] : undefined
      emit('update:value', emitVal)
      emit('change', emitVal, emitOpts)
    }

    const selectOption = (opt: SelectOption) => {
      if (opt.disabled) return
      const val = opt[valueField.value as keyof SelectOption] as string | number
      if (isMultiple.value) {
        const vals = [...selectedValues.value]
        const idx = vals.indexOf(val)
        if (idx >= 0) {
          vals.splice(idx, 1)
          emit('deselect', val)
        } else {
          // Check maxCount
          if (props.maxCount !== undefined && vals.length >= props.maxCount) {
            return
          }
          vals.push(val)
          emit('select', val, opt)
        }
        updateValue(vals)
        if (props.autoClearSearchValue) searchText.value = ''
      } else {
        updateValue([val])
        emit('select', val, opt)
        closeDropdown()
      }
    }

    const removeTag = (val: string | number, e: MouseEvent) => {
      e.stopPropagation()
      const vals = selectedValues.value.filter((v) => v !== val)
      updateValue(vals)
      emit('deselect', val)
    }

    const clearAll = (e: MouseEvent) => {
      e.stopPropagation()
      const empty = isMultiple.value ? [] : undefined
      updateValue(empty)
      emit('clear')
    }

    const handleSearchInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      searchText.value = val
      emit('search', val)

      // Tags mode: tokenSeparators
      if (isTags.value && props.tokenSeparators && props.tokenSeparators.length > 0) {
        for (const sep of props.tokenSeparators) {
          if (val.includes(sep)) {
            const tokens = val
              .split(sep)
              .map((t) => t.trim())
              .filter(Boolean)
            const vals = [...selectedValues.value]
            tokens.forEach((token) => {
              if (!vals.includes(token)) {
                // Create dynamic option if not exists
                if (!getOptionByValue(token)) {
                  dynamicOptions.value.push({ label: token, value: token })
                }
                if (props.maxCount === undefined || vals.length < props.maxCount) {
                  vals.push(token)
                }
              }
            })
            updateValue(vals)
            searchText.value = ''
            return
          }
        }
      }
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen.value) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault()
          openDropdown()
        }
        return
      }
      const opts = filteredOptions.value
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value + 1) % opts.length
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value - 1 + opts.length) % opts.length
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (activeIndex.value >= 0 && opts[activeIndex.value]) {
          selectOption(opts[activeIndex.value])
        } else if (isTags.value && searchText.value.trim()) {
          // Create new tag
          const token = searchText.value.trim()
          if (!getOptionByValue(token)) {
            dynamicOptions.value.push({ label: token, value: token })
          }
          const vals = [...selectedValues.value]
          if (!vals.includes(token) && (props.maxCount === undefined || vals.length < props.maxCount)) {
            vals.push(token)
            updateValue(vals)
          }
          searchText.value = ''
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        closeDropdown()
      }
    }

    const focus = () => {
      if (props.showSearch && searchRef.value) {
        searchRef.value.focus()
      } else {
        selectorRef.value?.focus()
      }
    }

    const blur = () => {
      if (props.showSearch && searchRef.value) {
        searchRef.value.blur()
      } else {
        selectorRef.value?.blur()
      }
    }

    expose({ focus, blur })

    const renderDropdownContent = () => {
      if (filteredOptions.value.length === 0) {
        return (
          <div class={`${prefixCls}-item-empty`}>{props.notFoundContent ?? locale.value.Select.notFoundContent}</div>
        )
      }

      if (props.virtual) {
        return (
          <VirtualList
            data={filteredOptions.value}
            height={props.listHeight}
            itemHeight={props.listItemHeight}
            renderItem={(opt: SelectOption, index: number) => {
              const val = opt[valueField.value as keyof SelectOption] as string | number
              const label = String(opt[labelField.value as keyof SelectOption])
              const isSelected = selectedValues.value.includes(val)
              const isActive = index === activeIndex.value

              return h(
                'div',
                {
                  class: cls(
                    `${prefixCls}-item`,
                    {
                      [`${prefixCls}-item-selected`]: isSelected,
                      [`${prefixCls}-item-active`]: isActive,
                      [`${prefixCls}-item-disabled`]: opt.disabled,
                    },
                    props.classNames?.option,
                  ),
                  style: props.styles?.option,
                  onClick: () => {
                    if (!opt.disabled) selectOption(opt)
                  },
                  onMouseenter: () => {
                    if (!opt.disabled) activeIndex.value = index
                  },
                },
                props.optionRender
                  ? props.optionRender(opt, { index })
                  : [
                      h(
                        'div',
                        {
                          class: cls(`${prefixCls}-item-content`, props.classNames?.optionLabel),
                          style: props.styles?.optionLabel,
                        },
                        label,
                      ),
                      isSelected &&
                        h(
                          'span',
                          {
                            class: cls(`${prefixCls}-item-check`, props.classNames?.optionState),
                            style: props.styles?.optionState,
                          },
                          '✓',
                        ),
                    ],
              )
            }}
            itemKey={(opt: SelectOption, index: number) => String(opt[valueField.value as keyof SelectOption] ?? index)}
          />
        )
      }

      // Non-virtual rendering
      const renderOptions = (opts: SelectOption[], level = 0): any[] => {
        const result: any[] = []
        opts.forEach((opt, i) => {
          if (opt[optionsField.value as keyof SelectOption]) {
            // OptGroup
            result.push(
              <div key={`group-${i}`} class={`${prefixCls}-item-group`}>
                <div class={`${prefixCls}-item-group-label`}>{opt[labelField.value as keyof SelectOption]}</div>
                {renderOptions(opt[optionsField.value as keyof SelectOption] as SelectOption[], level + 1)}
              </div>,
            )
          } else {
            const val = opt[valueField.value as keyof SelectOption] as string | number
            const label = String(opt[labelField.value as keyof SelectOption])
            const isSelected = selectedValues.value.includes(val)
            const isActive = filteredOptions.value.indexOf(opt) === activeIndex.value

            result.push(
              <div
                key={val}
                class={cls(
                  `${prefixCls}-item`,
                  `${prefixCls}-item-option`,
                  {
                    [`${prefixCls}-item-option-selected`]: isSelected,
                    [`${prefixCls}-item-option-disabled`]: opt.disabled,
                    [`${prefixCls}-item-option-active`]: !opt.disabled && isActive,
                  },
                  props.classNames?.option,
                )}
                style={props.styles?.option}
                role="option"
                aria-selected={isSelected}
                aria-disabled={opt.disabled || undefined}
                title={opt.title ?? label}
                onMousedown={(e: MouseEvent) => e.preventDefault()}
                onMouseenter={() => {
                  if (!opt.disabled) activeIndex.value = filteredOptions.value.indexOf(opt)
                }}
                onClick={() => selectOption(opt)}
              >
                {props.optionRender ? (
                  props.optionRender(opt, { index: filteredOptions.value.indexOf(opt) })
                ) : (
                  <>
                    <div
                      class={cls(`${prefixCls}-item-option-content`, props.classNames?.optionLabel)}
                      style={props.styles?.optionLabel}
                    >
                      {label}
                    </div>
                    {isSelected && (
                      <span
                        class={cls(`${prefixCls}-item-option-state`, props.classNames?.optionState)}
                        style={props.styles?.optionState}
                      >
                        ✓
                      </span>
                    )}
                  </>
                )}
              </div>,
            )
          }
        })
        return result
      }

      return renderOptions(props.options)
    }

    return () => {
      const hasValue = selectedValues.value.length > 0
      const showClear = props.allowClear && hasValue && !props.disabled

      const displayTags = isMultiple.value
        ? props.maxTagCount !== undefined
          ? selectedValues.value.slice(0, props.maxTagCount)
          : selectedValues.value
        : []
      const overflowCount =
        isMultiple.value && props.maxTagCount !== undefined
          ? Math.max(0, selectedValues.value.length - props.maxTagCount)
          : 0
      const omittedValues =
        isMultiple.value && props.maxTagCount !== undefined ? selectedValues.value.slice(props.maxTagCount) : []

      const renderTag = (val: string | number, _idx: number) => {
        const label = selectedLabels.value[selectedValues.value.indexOf(val)]
        const onClose = () => removeTag(val, new MouseEvent('click'))

        if (props.tagRender) {
          return props.tagRender({ label, value: val, closable: !props.disabled, onClose })
        }

        return (
          <span key={val} class={`${prefixCls}-selection-item`}>
            <span class={`${prefixCls}-selection-item-content`}>{label}</span>
            {!props.disabled && (
              <span class={`${prefixCls}-selection-item-remove`} onClick={(e) => removeTag(val, e)}>
                ×
              </span>
            )}
          </span>
        )
      }

      const renderSelectedLabel = () => {
        if (!hasValue) return null
        const firstVal = selectedValues.value[0]
        const labeledVal = getLabeledValue(firstVal)
        if (props.labelRender) {
          return props.labelRender(labeledVal)
        }
        return selectedLabels.value[0]
      }

      const renderOptions = (opts: SelectOption[], level = 0): any[] => {
        const result: any[] = []
        opts.forEach((opt, i) => {
          if (opt[optionsField.value as keyof SelectOption]) {
            // OptGroup
            result.push(
              <div key={`group-${i}`} class={`${prefixCls}-item-group`}>
                <div class={`${prefixCls}-item-group-label`}>{opt[labelField.value as keyof SelectOption]}</div>
                {renderOptions(opt[optionsField.value as keyof SelectOption] as SelectOption[], level + 1)}
              </div>,
            )
          } else {
            const val = opt[valueField.value as keyof SelectOption] as string | number
            const label = String(opt[labelField.value as keyof SelectOption])
            const isSelected = selectedValues.value.includes(val)
            const isActive = filteredOptions.value.indexOf(opt) === activeIndex.value

            result.push(
              <div
                key={val}
                class={cls(
                  `${prefixCls}-item`,
                  `${prefixCls}-item-option`,
                  {
                    [`${prefixCls}-item-option-selected`]: isSelected,
                    [`${prefixCls}-item-option-disabled`]: opt.disabled,
                    [`${prefixCls}-item-option-active`]: !opt.disabled && isActive,
                  },
                  props.classNames?.option,
                )}
                style={props.styles?.option}
                role="option"
                aria-selected={isSelected}
                aria-disabled={opt.disabled || undefined}
                title={opt.title ?? label}
                onMousedown={(e) => e.preventDefault()}
                onMouseenter={() => {
                  if (!opt.disabled) activeIndex.value = filteredOptions.value.indexOf(opt)
                }}
                onClick={() => selectOption(opt)}
              >
                {props.optionRender ? (
                  props.optionRender(opt, { index: filteredOptions.value.indexOf(opt) })
                ) : (
                  <>
                    <div
                      class={cls(`${prefixCls}-item-option-content`, props.classNames?.optionLabel)}
                      style={props.styles?.optionLabel}
                    >
                      {label}
                    </div>
                    {isSelected && (
                      <span
                        class={cls(`${prefixCls}-item-option-state`, props.classNames?.optionState)}
                        style={props.styles?.optionState}
                      >
                        ✓
                      </span>
                    )}
                  </>
                )}
              </div>,
            )
          }
        })
        return result
      }

      return (
        <Trigger
          open={isOpen.value}
          trigger="click"
          placement={'bottomLeft' as Placement}
          disabled={props.disabled}
          destroyOnHidden
          matchWidth={props.dropdownMatchSelectWidth}
          triggerClass={cls(
            prefixCls,
            `${prefixCls}-${props.size}`,
            {
              [`${prefixCls}-open`]: isOpen.value,
              [`${prefixCls}-disabled`]: props.disabled,
              [`${prefixCls}-loading`]: props.loading,
              [`${prefixCls}-multiple`]: isMultiple.value,
              [`${prefixCls}-status-${props.status}`]: !!props.status,
              [`${prefixCls}-allow-clear`]: props.allowClear,
            },
            props.classNames?.root,
          )}
          triggerStyle={props.styles?.root}
          popupClass={cls(`${prefixCls}-dropdown`, props.classNames?.dropdown)}
          popupStyle={props.styles?.dropdown}
          onOpenChange={(v: boolean) => {
            if (v) openDropdown()
            else closeDropdown()
          }}
        >
          {{
            default: () => (
              <>
                <div
                  ref={selectorRef}
                  class={cls(`${prefixCls}-selector`, props.classNames?.selector)}
                  style={props.styles?.selector}
                  role="combobox"
                  aria-expanded={isOpen.value}
                  aria-haspopup="listbox"
                  aria-disabled={props.disabled || undefined}
                  tabindex={props.disabled ? -1 : 0}
                  onKeydown={handleKeydown}
                  onFocus={() => emit('focus')}
                  onBlur={() => emit('blur')}
                >
                  {isMultiple.value ? (
                    <>
                      {displayTags.map((val) => renderTag(val, selectedValues.value.indexOf(val)))}
                      {overflowCount > 0 && (
                        <span
                          class={cls(`${prefixCls}-selection-item`, props.classNames?.item)}
                          style={props.styles?.item}
                        >
                          {typeof props.maxTagPlaceholder === 'function'
                            ? props.maxTagPlaceholder(omittedValues)
                            : (props.maxTagPlaceholder ?? `+${overflowCount}`)}
                        </span>
                      )}
                      {props.showSearch && (
                        <input
                          ref={searchRef}
                          class={`${prefixCls}-selection-search-input`}
                          value={searchText.value}
                          onInput={handleSearchInput}
                          onKeydown={handleKeydown}
                          style={{ width: `${Math.max(4, searchText.value.length + 1)}ch` }}
                        />
                      )}
                      {!hasValue && !searchText.value && (
                        <span
                          class={cls(`${prefixCls}-selection-placeholder`, props.classNames?.placeholder)}
                          style={props.styles?.placeholder}
                        >
                          {props.placeholder ?? locale.value.Select.placeholder}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {hasValue && !searchText.value ? (
                        <span
                          class={cls(`${prefixCls}-selection-item`, props.classNames?.item)}
                          style={props.styles?.item}
                        >
                          {renderSelectedLabel()}
                        </span>
                      ) : (
                        !searchText.value && (
                          <span
                            class={cls(`${prefixCls}-selection-placeholder`, props.classNames?.placeholder)}
                            style={props.styles?.placeholder}
                          >
                            {props.placeholder ?? locale.value.Select.placeholder}
                          </span>
                        )
                      )}
                      {props.showSearch && isOpen.value && (
                        <input
                          ref={searchRef}
                          class={`${prefixCls}-selection-search-input`}
                          value={searchText.value}
                          onInput={handleSearchInput}
                          onKeydown={handleKeydown}
                        />
                      )}
                    </>
                  )}
                </div>

                <div class={cls(`${prefixCls}-arrow`, props.classNames?.arrow)} style={props.styles?.arrow}>
                  {props.loading
                    ? h(Icon, { component: LoadingOutlined, spin: true, class: `${prefixCls}-loading-icon` })
                    : h(DownOutlined, {
                        class: cls(`${prefixCls}-suffix`, { [`${prefixCls}-suffix-open`]: isOpen.value }),
                      })}
                </div>

                {showClear && (
                  <span
                    class={cls(`${prefixCls}-clear`, props.classNames?.clear)}
                    style={props.styles?.clear}
                    onClick={clearAll}
                  >
                    ×
                  </span>
                )}
              </>
            ),
            popup: ({ placement }: { placement: Placement }) => renderDropdownContent(),
          }}
        </Trigger>
      )
    }
  },
})
