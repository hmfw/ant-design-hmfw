import {
  defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, Teleport,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CascaderOption, CascaderValue, CascaderExpandTrigger } from './types'

export const Cascader = defineComponent({
  name: 'Cascader',
  props: {
    value: Array as PropType<CascaderValue>,
    defaultValue: { type: Array as PropType<CascaderValue>, default: () => [] },
    options: { type: Array as PropType<CascaderOption[]>, default: () => [] },
    disabled: Boolean,
    placeholder: { type: String, default: '请选择' },
    allowClear: { type: Boolean, default: true },
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    expandTrigger: { type: String as PropType<CascaderExpandTrigger>, default: 'click' },
    multiple: Boolean,
    showSearch: Boolean,
    changeOnSelect: Boolean,
    displayRender: Function as PropType<(labels: string[]) => string>,
    fieldNames: Object as PropType<{ label?: string; value?: string; children?: string }>,
    open: { type: Boolean, default: undefined },
  },
  emits: ['update:value', 'change', 'search', 'focus', 'blur', 'clear'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('cascader')

    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getLabel = (opt: CascaderOption) => opt[labelField.value as keyof CascaderOption] as string
    const getValue = (opt: CascaderOption) => opt[valueField.value as keyof CascaderOption] as string | number
    const getChildren = (opt: CascaderOption) => opt[childrenField.value as keyof CascaderOption] as CascaderOption[] | undefined

    const innerValue = ref<CascaderValue>([...(props.defaultValue ?? props.value ?? [])])
    const innerOpen = ref(false)
    // activePath tracks which column selections are open (for hover expand)
    const activePath = ref<(string | number)[]>([])
    const searchText = ref('')
    const triggerRef = ref<HTMLElement>()
    const dropdownRef = ref<HTMLElement>()
    const dropdownPos = ref({ top: 0, left: 0, width: 0 })

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => isControlled.value ? props.value! : innerValue.value)
    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    watch(() => props.value, (v) => { if (v) innerValue.value = [...v] })

    // Build label path for selected value
    const getLabelPath = (val: CascaderValue, opts: CascaderOption[]): string[] => {
      const labels: string[] = []
      let list = opts
      for (const v of val) {
        const found = list.find((o) => getValue(o) === v)
        if (!found) break
        labels.push(getLabel(found))
        list = getChildren(found) ?? []
      }
      return labels
    }

    const displayText = computed(() => {
      if (!currentValue.value.length) return ''
      const labels = getLabelPath(currentValue.value, props.options)
      if (props.displayRender) return props.displayRender(labels)
      return labels.join(' / ')
    })

    // Columns to show: first column is always root options,
    // subsequent columns based on activePath
    const columns = computed<CascaderOption[][]>(() => {
      const cols: CascaderOption[][] = [props.options]
      let list = props.options
      for (const v of activePath.value) {
        const found = list.find((o) => getValue(o) === v)
        if (!found) break
        const children = getChildren(found)
        if (children?.length) {
          cols.push(children)
          list = children
        } else break
      }
      return cols
    })

    // Search: flatten all leaf paths
    const flatOptions = computed(() => {
      const result: Array<{ labels: string[]; values: (string | number)[] }> = []
      const flatten = (opts: CascaderOption[], labels: string[], values: (string | number)[]) => {
        for (const opt of opts) {
          const newLabels = [...labels, getLabel(opt)]
          const newValues = [...values, getValue(opt)]
          const children = getChildren(opt)
          if (children?.length) {
            flatten(children, newLabels, newValues)
          } else {
            result.push({ labels: newLabels, values: newValues })
          }
        }
      }
      flatten(props.options, [], [])
      return result
    })

    const filteredOptions = computed(() => {
      if (!searchText.value) return null
      const q = searchText.value.toLowerCase()
      return flatOptions.value.filter((item) =>
        item.labels.some((l) => l.toLowerCase().includes(q))
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

    const open = () => {
      if (props.disabled) return
      updatePos()
      // Init activePath from current value to show selected state
      activePath.value = [...currentValue.value]
      innerOpen.value = true
    }

    const close = () => {
      innerOpen.value = false
      searchText.value = ''
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        !triggerRef.value?.contains(e.target as Node) &&
        !dropdownRef.value?.contains(e.target as Node)
      ) close()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

    const handleOptionClick = (opt: CascaderOption, colIndex: number) => {
      if (opt.disabled) return
      const newPath = [...activePath.value.slice(0, colIndex), getValue(opt)]
      activePath.value = newPath
      const children = getChildren(opt)
      const isLeaf = !children?.length || opt.isLeaf
      if (isLeaf || props.changeOnSelect) {
        innerValue.value = newPath
        emit('update:value', newPath)
        emit('change', newPath, getLabelPath(newPath, props.options))
        if (isLeaf) close()
      }
    }

    const handleOptionHover = (opt: CascaderOption, colIndex: number) => {
      if (props.expandTrigger !== 'hover' || opt.disabled) return
      const newPath = [...activePath.value.slice(0, colIndex), getValue(opt)]
      activePath.value = newPath
    }

    const handleSearchSelect = (values: (string | number)[]) => {
      innerValue.value = values
      emit('update:value', values)
      emit('change', values, getLabelPath(values, props.options))
      close()
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      innerValue.value = []
      emit('update:value', [])
      emit('change', [], [])
      emit('clear')
    }

    return () => (
      <>
        <div
          ref={triggerRef}
          class={cls(
            prefixCls,
            `${prefixCls}-${props.size}`,
            {
              [`${prefixCls}-open`]: isOpen.value,
              [`${prefixCls}-disabled`]: props.disabled,
              [`${prefixCls}-status-error`]: props.status === 'error',
              [`${prefixCls}-status-warning`]: props.status === 'warning',
            }
          )}
          onClick={open}
        >
          <span class={`${prefixCls}-selector`}>
            {props.showSearch && isOpen.value ? (
              <input
                class={`${prefixCls}-search-input`}
                value={searchText.value}
                placeholder={displayText.value || props.placeholder}
                onInput={(e) => {
                  searchText.value = (e.target as HTMLInputElement).value
                  emit('search', searchText.value)
                }}
                onClick={(e) => e.stopPropagation()}
                autofocus={true}
              />
            ) : (
              <span class={cls(`${prefixCls}-selection-item`, {
                [`${prefixCls}-selection-placeholder`]: !displayText.value,
              })}>
                {displayText.value || props.placeholder}
              </span>
            )}
          </span>
          <span class={`${prefixCls}-suffix`}>
            {props.allowClear && currentValue.value.length > 0 && !props.disabled ? (
              <span
                class={`${prefixCls}-clear`}
                onMousedown={handleClear}
                onClick={(e) => e.stopPropagation()}
              >✕</span>
            ) : (
              <span class={cls(`${prefixCls}-arrow`, { [`${prefixCls}-arrow-open`]: isOpen.value })}>▾</span>
            )}
          </span>
        </div>

        {isOpen.value && (
          <Teleport to="body">
            <div
              ref={dropdownRef}
              class={`${prefixCls}-dropdown`}
              style={{
                position: 'absolute',
                top: `${dropdownPos.value.top}px`,
                left: `${dropdownPos.value.left}px`,
                zIndex: 1050,
              }}
            >
              {filteredOptions.value ? (
                /* Search results */
                <div class={`${prefixCls}-menu ${prefixCls}-menu-search`}>
                  {filteredOptions.value.length === 0 ? (
                    <div class={`${prefixCls}-menu-item-empty`}>无匹配结果</div>
                  ) : filteredOptions.value.map((item, i) => (
                    <div
                      key={i}
                      class={`${prefixCls}-menu-item`}
                      onMousedown={(e) => { e.preventDefault(); handleSearchSelect(item.values) }}
                    >
                      {item.labels.join(' / ')}
                    </div>
                  ))}
                </div>
              ) : (
                /* Normal columns */
                <div class={`${prefixCls}-menus`}>
                  {columns.value.map((colOpts, colIndex) => (
                    <ul key={colIndex} class={`${prefixCls}-menu`}>
                      {colOpts.map((opt) => {
                        const val = getValue(opt)
                        const children = getChildren(opt)
                        const hasChildren = !!(children?.length)
                        const isActive = activePath.value[colIndex] === val
                        const isSelected = currentValue.value[colIndex] === val

                        return (
                          <li
                            key={val}
                            class={cls(`${prefixCls}-menu-item`, {
                              [`${prefixCls}-menu-item-active`]: isActive,
                              [`${prefixCls}-menu-item-selected`]: isSelected,
                              [`${prefixCls}-menu-item-disabled`]: opt.disabled,
                              [`${prefixCls}-menu-item-expand`]: hasChildren,
                            })}
                            onClick={() => handleOptionClick(opt, colIndex)}
                            onMouseenter={() => handleOptionHover(opt, colIndex)}
                          >
                            <span class={`${prefixCls}-menu-item-content`}>{getLabel(opt)}</span>
                            {hasChildren && <span class={`${prefixCls}-menu-item-expand-icon`}>›</span>}
                          </li>
                        )
                      })}
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </Teleport>
        )}
      </>
    )
  },
})
