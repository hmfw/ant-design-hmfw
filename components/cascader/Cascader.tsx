import {
  defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, Teleport, type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { CascaderOption, CascaderValue, CascaderExpandTrigger, CascaderShowCheckedStrategy } from './types'

export const Cascader = defineComponent({
  name: 'Cascader',
  inheritAttrs: false,
  props: {
    value: [Array, Object] as PropType<CascaderValue | CascaderValue[]>,
    defaultValue: { type: [Array, Object] as PropType<CascaderValue | CascaderValue[]>, default: () => [] },
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
    displayRender: Function as PropType<(labels: string[], selectedOptions?: CascaderOption[]) => string | VNode>,
    fieldNames: Object as PropType<{ label?: string; value?: string; children?: string }>,
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    notFoundContent: { type: String, default: '无匹配结果' },
    loadData: Function as PropType<(selectedOptions: CascaderOption[]) => void>,
    showCheckedStrategy: { type: String as PropType<CascaderShowCheckedStrategy>, default: 'SHOW_PARENT' },
    maxTagCount: Number,
    maxTagPlaceholder: [String, Function] as PropType<string | ((omittedValues: CascaderValue[]) => string)>,
    maxTagTextLength: Number,
  },
  emits: ['update:value', 'update:open', 'change', 'search', 'focus', 'blur', 'clear'],
  setup(props, { emit, attrs, expose }) {
    const prefixCls = usePrefixCls('cascader')

    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getLabel = (opt: CascaderOption) => opt[labelField.value as keyof CascaderOption] as string
    const getValue = (opt: CascaderOption) => opt[valueField.value as keyof CascaderOption] as string | number
    const getChildren = (opt: CascaderOption) => opt[childrenField.value as keyof CascaderOption] as CascaderOption[] | undefined

    // Normalize value to array of paths (for multiple) or single path
    const normalizeValue = (v: CascaderValue | CascaderValue[] | undefined): CascaderValue[] => {
      if (!v) return []
      if (props.multiple) {
        // Multiple: array of paths [[a,b], [c,d]]
        if (Array.isArray(v) && v.length > 0 && Array.isArray(v[0])) return v as CascaderValue[]
        return []
      }
      // Single: one path [a,b,c]
      if (Array.isArray(v) && v.length > 0 && !Array.isArray(v[0])) return [v as CascaderValue]
      return []
    }

    const innerValue = ref<CascaderValue[]>(normalizeValue(props.defaultValue ?? props.value))
    const innerOpen = ref(props.defaultOpen ?? false)
    const activePath = ref<(string | number)[]>([])
    const searchText = ref('')
    const triggerRef = ref<HTMLElement>()
    const dropdownRef = ref<HTMLElement>()
    const dropdownPos = ref({ top: 0, left: 0, width: 0 })
    const inputRef = ref<HTMLInputElement>()

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => isControlled.value ? normalizeValue(props.value) : innerValue.value)
    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = normalizeValue(v) })

    // Build option path from value path
    const getOptionPath = (valPath: CascaderValue, opts: CascaderOption[]): CascaderOption[] => {
      const result: CascaderOption[] = []
      let list = opts
      for (const v of valPath) {
        const found = list.find((o) => getValue(o) === v)
        if (!found) break
        result.push(found)
        list = getChildren(found) ?? []
      }
      return result
    }

    // Build label path from value path
    const getLabelPath = (valPath: CascaderValue, opts: CascaderOption[]): string[] => {
      return getOptionPath(valPath, opts).map(getLabel)
    }

    // 实现 showCheckedStrategy 过滤逻辑
    const getDisplayedPaths = computed(() => {
      if (!props.multiple) return currentValue.value

      const paths = currentValue.value
      if (!props.showCheckedStrategy || paths.length === 0) return paths

      if (props.showCheckedStrategy === 'SHOW_CHILD') {
        // 只显示叶子节点：过滤掉那些有子路径被选中的父路径
        return paths.filter((path) => {
          // 检查是否有其他路径以当前路径为前缀（即当前路径是父节点）
          const hasChild = paths.some((otherPath) =>
            otherPath.length > path.length &&
            path.every((v, i) => v === otherPath[i])
          )
          return !hasChild
        })
      }

      if (props.showCheckedStrategy === 'SHOW_PARENT') {
        // 只显示父节点：过滤掉那些父路径已被选中的子路径
        return paths.filter((path) => {
          // 检查是否有其他路径是当前路径的前缀（即有父路径被选中）
          const hasParent = paths.some((otherPath) =>
            otherPath.length < path.length &&
            otherPath.every((v, i) => v === path[i])
          )
          return !hasParent
        })
      }

      return paths
    })

    // 搜索高亮辅助函数
    const highlightText = (text: string, keyword: string): VNode[] => {
      if (!keyword) return [text as any]

      const lowerText = text.toLowerCase()
      const lowerKeyword = keyword.toLowerCase()
      const index = lowerText.indexOf(lowerKeyword)

      if (index === -1) return [text as any]

      const before = text.slice(0, index)
      const match = text.slice(index, index + keyword.length)
      const after = text.slice(index + keyword.length)

      const nodes: VNode[] = []
      if (before) nodes.push(before as any)
      nodes.push(
        <span class={`${prefixCls}-menu-item-highlight`}>{match}</span> as VNode
      )
      if (after) nodes.push(...highlightText(after, keyword))

      return nodes
    }

    const displayText = computed(() => {
      if (props.multiple) {
        const paths = getDisplayedPaths.value
        if (paths.length === 0) return ''
        // For multiple, show first path or tag count
        const firstLabels = getLabelPath(paths[0], props.options)
        const firstOptions = getOptionPath(paths[0], props.options)
        if (props.displayRender) return props.displayRender(firstLabels, firstOptions)
        return firstLabels.join(' / ')
      } else {
        if (currentValue.value.length === 0) return ''
        const labels = getLabelPath(currentValue.value[0], props.options)
        const options = getOptionPath(currentValue.value[0], props.options)
        if (props.displayRender) return props.displayRender(labels, options)
        return labels.join(' / ')
      }
    })

    // Columns to show
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
      const result: Array<{ labels: string[]; values: (string | number)[]; options: CascaderOption[] }> = []
      const flatten = (opts: CascaderOption[], labels: string[], values: (string | number)[], optPath: CascaderOption[]) => {
        for (const opt of opts) {
          const newLabels = [...labels, getLabel(opt)]
          const newValues = [...values, getValue(opt)]
          const newOptPath = [...optPath, opt]
          const children = getChildren(opt)
          if (children?.length && !opt.isLeaf) {
            flatten(children, newLabels, newValues, newOptPath)
          } else {
            result.push({ labels: newLabels, values: newValues, options: newOptPath })
          }
        }
      }
      flatten(props.options, [], [], [])
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
      if (!props.multiple && currentValue.value.length > 0) {
        activePath.value = [...currentValue.value[0]]
      }
      innerOpen.value = true
      emit('update:open', true)
    }

    const close = () => {
      innerOpen.value = false
      searchText.value = ''
      emit('update:open', false)
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        !triggerRef.value?.contains(e.target as Node) &&
        !dropdownRef.value?.contains(e.target as Node)
      ) close()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

    const emitChange = (paths: CascaderValue[]) => {
      const outValue = props.multiple ? paths : (paths[0] ?? [])
      const outOptions = props.multiple
        ? paths.map(p => getOptionPath(p, props.options))
        : getOptionPath(paths[0] ?? [], props.options)
      emit('update:value', outValue)
      emit('change', outValue, outOptions)
    }

    const handleOptionClick = (opt: CascaderOption, colIndex: number) => {
      if (opt.disabled) return
      const newPath = [...activePath.value.slice(0, colIndex), getValue(opt)]
      activePath.value = newPath
      const children = getChildren(opt)
      const isLeaf = !children?.length || opt.isLeaf

      if (props.loadData && !isLeaf && !children?.length) {
        // Lazy load
        const optPath = getOptionPath(newPath, props.options)
        props.loadData(optPath)
        return
      }

      if (props.multiple) {
        // Multiple mode: toggle selection
        if (isLeaf || props.changeOnSelect) {
          const paths = [...currentValue.value]
          const idx = paths.findIndex(p => p.length === newPath.length && p.every((v, i) => v === newPath[i]))
          if (idx >= 0) {
            paths.splice(idx, 1)
          } else {
            paths.push(newPath)
          }
          innerValue.value = paths
          emitChange(paths)
        }
      } else {
        // Single mode
        if (isLeaf || props.changeOnSelect) {
          innerValue.value = [newPath]
          emitChange([newPath])
          if (isLeaf) close()
        }
      }
    }

    const handleOptionHover = (opt: CascaderOption, colIndex: number) => {
      if (props.expandTrigger !== 'hover' || opt.disabled) return
      const newPath = [...activePath.value.slice(0, colIndex), getValue(opt)]
      activePath.value = newPath
    }

    const handleSearchSelect = (values: (string | number)[], options: CascaderOption[]) => {
      if (props.multiple) {
        const paths = [...currentValue.value, values]
        innerValue.value = paths
        emitChange(paths)
      } else {
        innerValue.value = [values]
        emitChange([values])
        close()
      }
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      innerValue.value = []
      emitChange([])
      emit('clear')
    }

    const handleRemoveTag = (path: CascaderValue, e: MouseEvent) => {
      e.stopPropagation()
      const paths = currentValue.value.filter(p => !(p.length === path.length && p.every((v, i) => v === path[i])))
      innerValue.value = paths
      emitChange(paths)
    }

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

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
              [`${prefixCls}-multiple`]: props.multiple,
              [`${prefixCls}-status-error`]: props.status === 'error',
              [`${prefixCls}-status-warning`]: props.status === 'warning',
            },
            attrs.class as any,
          )}
          style={attrs.style as any}
          onClick={open}
        >
          <span class={`${prefixCls}-selector`}>
            {props.multiple ? (
              <>
                {getDisplayedPaths.value.slice(0, props.maxTagCount ?? getDisplayedPaths.value.length).map((path) => {
                  const labels = getLabelPath(path, props.options)
                  const options = getOptionPath(path, props.options)
                  let text: string | VNode
                  if (props.displayRender) {
                    text = props.displayRender(labels, options)
                  } else {
                    text = labels.join(' / ')
                  }
                  if (typeof text === 'string' && props.maxTagTextLength && text.length > props.maxTagTextLength) {
                    text = text.slice(0, props.maxTagTextLength) + '...'
                  }
                  return (
                    <span key={path.join('-')} class={`${prefixCls}-selection-item`}>
                      <span class={`${prefixCls}-selection-item-content`}>{text}</span>
                      {!props.disabled && (
                        <span
                          class={`${prefixCls}-selection-item-remove`}
                          onClick={(e) => handleRemoveTag(path, e)}
                        >×</span>
                      )}
                    </span>
                  )
                })}
                {props.maxTagCount && getDisplayedPaths.value.length > props.maxTagCount && (
                  <span class={`${prefixCls}-selection-item`}>
                    {typeof props.maxTagPlaceholder === 'function'
                      ? props.maxTagPlaceholder(getDisplayedPaths.value.slice(props.maxTagCount))
                      : (props.maxTagPlaceholder ?? `+${getDisplayedPaths.value.length - props.maxTagCount}`)}
                  </span>
                )}
                {props.showSearch && isOpen.value && (
                  <input
                    ref={inputRef}
                    class={`${prefixCls}-search-input`}
                    value={searchText.value}
                    placeholder={currentValue.value.length === 0 ? props.placeholder : ''}
                    onInput={(e) => {
                      searchText.value = (e.target as HTMLInputElement).value
                      emit('search', searchText.value)
                    }}
                    onClick={(e) => e.stopPropagation()}
                    autofocus={true}
                  />
                )}
                {currentValue.value.length === 0 && !searchText.value && (
                  <span class={`${prefixCls}-selection-placeholder`}>{props.placeholder}</span>
                )}
              </>
            ) : (
              <>
                {props.showSearch && isOpen.value ? (
                  <input
                    ref={inputRef}
                    class={`${prefixCls}-search-input`}
                    value={searchText.value}
                    placeholder={typeof displayText.value === 'string' ? displayText.value || props.placeholder : props.placeholder}
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
              </>
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
                    <div class={`${prefixCls}-menu-item-empty`}>{props.notFoundContent}</div>
                  ) : filteredOptions.value.map((item, i) => (
                    <div
                      key={i}
                      class={`${prefixCls}-menu-item`}
                      onMousedown={(e) => { e.preventDefault(); handleSearchSelect(item.values, item.options) }}
                    >
                      {highlightText(item.labels.join(' / '), searchText.value)}
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
                        const hasChildren = !!(children?.length) && !opt.isLeaf
                        const isActive = activePath.value[colIndex] === val
                        const isSelected = props.multiple
                          ? currentValue.value.some(p => p[colIndex] === val && p.length > colIndex)
                          : currentValue.value[0]?.[colIndex] === val

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
                            {props.multiple && (
                              <span class={`${prefixCls}-menu-item-checkbox`}>
                                {currentValue.value.some(p => p.length === colIndex + 1 && p[colIndex] === val) && '✓'}
                              </span>
                            )}
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

