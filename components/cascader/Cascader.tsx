import { defineComponent, ref, computed, watch, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { DownOutlined } from '@hmfw/icons'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type {
  CascaderOption,
  CascaderValue,
  CascaderExpandTrigger,
  CascaderShowCheckedStrategy,
  CascaderClassNames,
  CascaderStyles,
} from './types'

export const Cascader = defineComponent({
  name: 'Cascader',
  inheritAttrs: false,
  props: {
    value: [Array, Object] as PropType<CascaderValue | CascaderValue[]>,
    defaultValue: {
      type: [Array, Object] as PropType<CascaderValue | CascaderValue[]>,
      default: () => [],
    },
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
    showCheckedStrategy: {
      type: String as PropType<CascaderShowCheckedStrategy>,
      default: 'SHOW_PARENT',
    },
    maxTagCount: Number,
    maxTagPlaceholder: [String, Function] as PropType<string | ((omittedValues: CascaderValue[]) => string)>,
    maxTagTextLength: Number,
    classNames: Object as PropType<CascaderClassNames>,
    styles: Object as PropType<CascaderStyles>,
  },
  emits: ['update:value', 'update:open', 'change', 'search', 'focus', 'blur', 'clear'],
  setup(props, { emit, attrs, expose }) {
    const prefixCls = usePrefixCls('cascader')

    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getLabel = (opt: CascaderOption) => opt[labelField.value as keyof CascaderOption] as string
    const getValue = (opt: CascaderOption) => opt[valueField.value as keyof CascaderOption] as string | number
    const getChildren = (opt: CascaderOption) =>
      opt[childrenField.value as keyof CascaderOption] as CascaderOption[] | undefined

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
    const inputRef = ref<HTMLInputElement>()

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => (isControlled.value ? normalizeValue(props.value) : innerValue.value))
    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = normalizeValue(v)
      },
    )

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
          const hasChild = paths.some(
            (otherPath) => otherPath.length > path.length && path.every((v, i) => v === otherPath[i]),
          )
          return !hasChild
        })
      }

      if (props.showCheckedStrategy === 'SHOW_PARENT') {
        // 只显示父节点：过滤掉那些父路径已被选中的子路径
        return paths.filter((path) => {
          // 检查是否有其他路径是当前路径的前缀（即有父路径被选中）
          const hasParent = paths.some(
            (otherPath) => otherPath.length < path.length && otherPath.every((v, i) => v === path[i]),
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
        (
          <span
            class={cls(`${prefixCls}-menu-item-highlight`, props.classNames?.menuItemHighlight)}
            style={props.styles?.menuItemHighlight}
          >
            {match}
          </span>
        ) as VNode,
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
      const result: Array<{
        labels: string[]
        values: (string | number)[]
        options: CascaderOption[]
      }> = []
      const flatten = (
        opts: CascaderOption[],
        labels: string[],
        values: (string | number)[],
        optPath: CascaderOption[],
      ) => {
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
      return flatOptions.value.filter((item) => item.labels.some((l) => l.toLowerCase().includes(q)))
    })

    const open = () => {
      if (props.disabled) return
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

    const emitChange = (paths: CascaderValue[]) => {
      const outValue = props.multiple ? paths : (paths[0] ?? [])
      const outOptions = props.multiple
        ? paths.map((p) => getOptionPath(p, props.options))
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
          const idx = paths.findIndex((p) => p.length === newPath.length && p.every((v, i) => v === newPath[i]))
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

    const handleSearchSelect = (values: (string | number)[], _options: CascaderOption[]) => {
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
      const paths = currentValue.value.filter((p) => !(p.length === path.length && p.every((v, i) => v === path[i])))
      innerValue.value = paths
      emitChange(paths)
    }

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

    const renderDropdownContent = () => (
      <>
        {filteredOptions.value ? (
          /* Search results */
          <div
            class={cls(`${prefixCls}-menu`, `${prefixCls}-menu-search`, props.classNames?.menu)}
            style={props.styles?.menu}
          >
            {filteredOptions.value.length === 0 ? (
              <div
                class={cls(`${prefixCls}-menu-item-empty`, props.classNames?.menuItemEmpty)}
                style={props.styles?.menuItemEmpty}
              >
                {props.notFoundContent}
              </div>
            ) : (
              filteredOptions.value.map((item, i) => (
                <div
                  key={i}
                  class={cls(`${prefixCls}-menu-item`, props.classNames?.menuItem)}
                  style={props.styles?.menuItem}
                  onMousedown={(e) => {
                    e.preventDefault()
                    handleSearchSelect(item.values, item.options)
                  }}
                >
                  {highlightText(item.labels.join(' / '), searchText.value)}
                </div>
              ))
            )}
          </div>
        ) : (
          /* Normal columns */
          <div class={cls(`${prefixCls}-menus`, props.classNames?.menus)} style={props.styles?.menus}>
            {columns.value.map((colOpts, colIndex) => (
              <ul key={colIndex} class={cls(`${prefixCls}-menu`, props.classNames?.menu)} style={props.styles?.menu}>
                {colOpts.map((opt) => {
                  const val = getValue(opt)
                  const children = getChildren(opt)
                  const hasChildren = !!children?.length && !opt.isLeaf
                  const isActive = activePath.value[colIndex] === val
                  const isSelected = props.multiple
                    ? currentValue.value.some((p) => p[colIndex] === val && p.length > colIndex)
                    : currentValue.value[0]?.[colIndex] === val

                  return (
                    <li
                      key={val}
                      class={cls(
                        `${prefixCls}-menu-item`,
                        {
                          [`${prefixCls}-menu-item-active`]: isActive,
                          [`${prefixCls}-menu-item-selected`]: isSelected,
                          [`${prefixCls}-menu-item-disabled`]: opt.disabled,
                          [`${prefixCls}-menu-item-expand`]: hasChildren,
                        },
                        props.classNames?.menuItem,
                      )}
                      style={props.styles?.menuItem}
                      onClick={() => handleOptionClick(opt, colIndex)}
                      onMouseenter={() => handleOptionHover(opt, colIndex)}
                    >
                      {props.multiple && (
                        <span
                          class={cls(`${prefixCls}-menu-item-checkbox`, props.classNames?.menuItemCheckbox)}
                          style={props.styles?.menuItemCheckbox}
                        >
                          {currentValue.value.some((p) => p.length === colIndex + 1 && p[colIndex] === val) && '✓'}
                        </span>
                      )}
                      <span
                        class={cls(`${prefixCls}-menu-item-content`, props.classNames?.menuItemContent)}
                        style={props.styles?.menuItemContent}
                      >
                        {getLabel(opt)}
                      </span>
                      {hasChildren && (
                        <span
                          class={cls(`${prefixCls}-menu-item-expand-icon`, props.classNames?.menuItemExpandIcon)}
                          style={props.styles?.menuItemExpandIcon}
                        >
                          ›
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            ))}
          </div>
        )}
      </>
    )

    return () => (
      <Trigger
        open={isOpen.value}
        trigger="click"
        placement={'bottomLeft' as Placement}
        disabled={props.disabled}
        destroyOnHidden
        popupClass={cls(`${prefixCls}-dropdown`, props.classNames?.dropdown)}
        popupStyle={props.styles?.dropdown}
        onOpenChange={(v: boolean) => {
          if (v) open()
          else close()
        }}
      >
        {{
          default: () => (
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
                props.classNames?.root,
                attrs.class as any,
              )}
              style={{ ...props.styles?.root, ...(attrs.style as any) }}
            >
              <span class={cls(`${prefixCls}-selector`, props.classNames?.selector)} style={props.styles?.selector}>
                {props.multiple ? (
                  <>
                    {getDisplayedPaths.value
                      .slice(0, props.maxTagCount ?? getDisplayedPaths.value.length)
                      .map((path) => {
                        const labels = getLabelPath(path, props.options)
                        const options = getOptionPath(path, props.options)
                        let text: string | VNode
                        if (props.displayRender) {
                          text = props.displayRender(labels, options)
                        } else {
                          text = labels.join(' / ')
                        }
                        if (
                          typeof text === 'string' &&
                          props.maxTagTextLength &&
                          text.length > props.maxTagTextLength
                        ) {
                          text = text.slice(0, props.maxTagTextLength) + '...'
                        }
                        return (
                          <span
                            key={path.join('-')}
                            class={cls(`${prefixCls}-selection-item`, props.classNames?.selectionItem)}
                            style={props.styles?.selectionItem}
                          >
                            <span
                              class={cls(`${prefixCls}-selection-item-content`, props.classNames?.selectionItemContent)}
                              style={props.styles?.selectionItemContent}
                            >
                              {text}
                            </span>
                            {!props.disabled && (
                              <span
                                class={cls(`${prefixCls}-selection-item-remove`, props.classNames?.selectionItemRemove)}
                                style={props.styles?.selectionItemRemove}
                                onClick={(e) => handleRemoveTag(path, e)}
                              >
                                ×
                              </span>
                            )}
                          </span>
                        )
                      })}
                    {props.maxTagCount && getDisplayedPaths.value.length > props.maxTagCount && (
                      <span
                        class={cls(`${prefixCls}-selection-item`, props.classNames?.selectionItem)}
                        style={props.styles?.selectionItem}
                      >
                        {typeof props.maxTagPlaceholder === 'function'
                          ? props.maxTagPlaceholder(getDisplayedPaths.value.slice(props.maxTagCount))
                          : (props.maxTagPlaceholder ?? `+${getDisplayedPaths.value.length - props.maxTagCount}`)}
                      </span>
                    )}
                    {props.showSearch && isOpen.value && (
                      <input
                        ref={inputRef}
                        class={cls(`${prefixCls}-search-input`, props.classNames?.searchInput)}
                        style={props.styles?.searchInput}
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
                      <span
                        class={cls(`${prefixCls}-selection-placeholder`, props.classNames?.selectionPlaceholder)}
                        style={props.styles?.selectionPlaceholder}
                      >
                        {props.placeholder}
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    {props.showSearch && isOpen.value ? (
                      <input
                        ref={inputRef}
                        class={cls(`${prefixCls}-search-input`, props.classNames?.searchInput)}
                        style={props.styles?.searchInput}
                        value={searchText.value}
                        placeholder={
                          typeof displayText.value === 'string'
                            ? displayText.value || props.placeholder
                            : props.placeholder
                        }
                        onInput={(e) => {
                          searchText.value = (e.target as HTMLInputElement).value
                          emit('search', searchText.value)
                        }}
                        onClick={(e) => e.stopPropagation()}
                        autofocus={true}
                      />
                    ) : (
                      <span
                        class={cls(
                          `${prefixCls}-selection-item`,
                          {
                            [`${prefixCls}-selection-placeholder`]: !displayText.value,
                          },
                          props.classNames?.selectionItem,
                        )}
                        style={props.styles?.selectionItem}
                      >
                        {displayText.value || props.placeholder}
                      </span>
                    )}
                  </>
                )}
              </span>
              <span class={cls(`${prefixCls}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
                {props.allowClear && currentValue.value.length > 0 && !props.disabled ? (
                  <span
                    class={cls(`${prefixCls}-clear`, props.classNames?.clear)}
                    style={props.styles?.clear}
                    onMousedown={handleClear}
                    onClick={(e) => e.stopPropagation()}
                  >
                    ✕
                  </span>
                ) : (
                  <DownOutlined
                    class={cls(
                      `${prefixCls}-arrow`,
                      { [`${prefixCls}-arrow-open`]: isOpen.value },
                      props.classNames?.arrow,
                    )}
                    style={props.styles?.arrow}
                  />
                )}
              </span>
            </div>
          ),
          popup: ({ placement }: { placement: Placement }) => renderDropdownContent(),
        }}
      </Trigger>
    )
  },
})
