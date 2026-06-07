import {
  defineComponent, ref, computed, watch, onMounted, onBeforeUnmount, nextTick, Teleport, type PropType, type VNode,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type {
  TreeSelectNode, ShowCheckedStrategy, TreeSelectValue, TreeIcon, MaxTagPlaceholder,
} from './types'

type Key = string | number

interface FlatNode {
  node: TreeSelectNode
  level: number
  hasChildren: boolean
  valueKey: Key
  label: string
  /** 搜索态下强制展开 */
  forceExpand: boolean
}

export const TreeSelect = defineComponent({
  name: 'TreeSelect',
  props: {
    value: [String, Number, Array] as PropType<TreeSelectValue>,
    defaultValue: [String, Number, Array] as PropType<TreeSelectValue>,
    treeData: { type: Array as PropType<TreeSelectNode[]>, default: () => [] },
    multiple: Boolean,
    treeCheckable: Boolean,
    treeCheckStrictly: Boolean,
    showCheckedStrategy: { type: String as PropType<ShowCheckedStrategy>, default: 'SHOW_CHILD' },
    showSearch: Boolean,
    autoClearSearchValue: { type: Boolean, default: true },
    allowClear: Boolean,
    placeholder: { type: String, default: '请选择' },
    disabled: Boolean,
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    maxCount: Number,
    notFoundContent: { type: String, default: '暂无数据' },
    treeDefaultExpandAll: Boolean,
    treeDefaultExpandedKeys: { type: Array as PropType<Key[]>, default: () => [] },
    open: { type: Boolean, default: undefined },
    defaultOpen: Boolean,
    fieldNames: Object as PropType<{ label?: string; value?: string; children?: string }>,
    virtual: { type: Boolean, default: true },
    listHeight: { type: Number, default: 256 },
    itemHeight: { type: Number, default: 28 },
    treeIcon: [Boolean, Object, String, Function] as PropType<TreeIcon>,
    maxTagCount: [Number, String] as PropType<number | 'responsive'>,
    maxTagPlaceholder: [String, Function] as PropType<MaxTagPlaceholder>,
    maxTagTextLength: Number,
  },
  emits: ['update:value', 'update:open', 'change', 'search', 'select', 'treeExpand', 'dropdownVisibleChange', 'openChange', 'clear'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tree-select')
    const selectorRef = ref<HTMLElement | null>(null)
    const dropdownRef = ref<HTMLElement | null>(null)
    const listRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(!!props.defaultOpen)
    const dropdownPos = ref({ top: 0, left: 0, width: 0 })
    const searchText = ref('')
    const scrollTop = ref(0)

    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getLabel = (n: TreeSelectNode) => n[labelField.value] as string
    const getValue = (n: TreeSelectNode) => n[valueField.value] as Key
    const getChildren = (n: TreeSelectNode) => n[childrenField.value] as TreeSelectNode[] | undefined

    const isMultiple = computed(() => props.multiple || props.treeCheckable)
    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    const normalizeValue = (v: TreeSelectValue | undefined) => {
      if (v === undefined || v === null) return isMultiple.value ? [] : undefined
      return v
    }

    const innerValue = ref<TreeSelectValue | undefined>(
      normalizeValue(props.defaultValue ?? props.value),
    )
    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const currentValue = computed(() => (props.value !== undefined ? props.value : innerValue.value))
    const selectedValues = computed<Key[]>(() => {
      const v = currentValue.value
      if (v === undefined || v === null) return []
      return Array.isArray(v) ? v : [v]
    })

    // ===================== Tree maps =====================
    interface TreeMaps {
      nodeMap: Map<Key, TreeSelectNode>
      parentMap: Map<Key, Key | undefined>
      childKeysMap: Map<Key, Key[]>
      labelMap: Map<Key, string>
      rootKeys: Key[]
    }
    const maps = computed<TreeMaps>(() => {
      const nodeMap = new Map<Key, TreeSelectNode>()
      const parentMap = new Map<Key, Key | undefined>()
      const childKeysMap = new Map<Key, Key[]>()
      const labelMap = new Map<Key, string>()
      const walk = (nodes: TreeSelectNode[], parent: Key | undefined) => {
        for (const n of nodes) {
          const k = getValue(n)
          nodeMap.set(k, n)
          parentMap.set(k, parent)
          labelMap.set(k, getLabel(n))
          const ch = getChildren(n)
          if (ch?.length) {
            childKeysMap.set(k, ch.map(getValue))
            walk(ch, k)
          }
        }
      }
      walk(props.treeData, undefined)
      return { nodeMap, parentMap, childKeysMap, labelMap, rootKeys: props.treeData.map(getValue) }
    })

    const descendantLeaves = (key: Key): Key[] => {
      const children = maps.value.childKeysMap.get(key)
      if (!children?.length) return [key]
      return children.flatMap((c) => descendantLeaves(c))
    }

    // Conduct checked state from a set of checked leaf keys (cascade up).
    const conductCheck = (checkedLeaves: Set<Key>): { checked: Set<Key>; half: Set<Key> } => {
      const { childKeysMap, rootKeys } = maps.value
      const checked = new Set<Key>(checkedLeaves)
      const half = new Set<Key>()
      const visit = (key: Key): 'checked' | 'half' | 'none' => {
        const children = childKeysMap.get(key)
        if (!children?.length) return checked.has(key) ? 'checked' : 'none'
        let allChecked = true
        let anyChecked = false
        for (const c of children) {
          const s = visit(c)
          if (s === 'checked') anyChecked = true
          else if (s === 'half') { anyChecked = true; allChecked = false }
          else allChecked = false
        }
        if (allChecked) { checked.add(key); return 'checked' }
        checked.delete(key)
        if (anyChecked) { half.add(key); return 'half' }
        return 'none'
      }
      rootKeys.forEach(visit)
      return { checked, half }
    }

    // ===================== Expand keys =====================
    const getAllKeys = (nodes: TreeSelectNode[]): Key[] =>
      nodes.flatMap((n) => [getValue(n), ...getAllKeys(getChildren(n) ?? [])])

    const initExpandedKeys = computed(() => {
      if (props.treeDefaultExpandAll) return getAllKeys(props.treeData)
      return props.treeDefaultExpandedKeys
    })
    const expandedKeys = ref<Key[]>([...initExpandedKeys.value])
    watch(initExpandedKeys, (v) => { expandedKeys.value = [...v] })

    // ===================== Flatten tree =====================
    function flattenTree(nodes: TreeSelectNode[], level = 0, forceExpand = false): FlatNode[] {
      return nodes.flatMap((node) => {
        const children = getChildren(node)
        const key = getValue(node)
        const result: FlatNode[] = [{
          node,
          level,
          hasChildren: !!(children?.length),
          valueKey: key,
          label: getLabel(node),
          forceExpand,
        }]
        if (children?.length && (forceExpand || expandedKeys.value.includes(key))) {
          result.push(...flattenTree(children, level + 1, forceExpand))
        }
        return result
      })
    }

    // ===================== Search =====================
    const flatNodes = computed(() => {
      if (!searchText.value) return flattenTree(props.treeData)
      const q = searchText.value.toLowerCase()
      const matchKeys = new Set<Key>()
      const ancestorKeys = new Set<Key>()
      const walk = (nodes: TreeSelectNode[]) => {
        for (const n of nodes) {
          const k = getValue(n)
          const label = getLabel(n)
          if (label.toLowerCase().includes(q)) {
            matchKeys.add(k)
            let p = maps.value.parentMap.get(k)
            while (p !== undefined) {
              ancestorKeys.add(p)
              p = maps.value.parentMap.get(p)
            }
          }
          const ch = getChildren(n)
          if (ch) walk(ch)
        }
      }
      walk(props.treeData)
      const filter = (nodes: TreeSelectNode[], level = 0): FlatNode[] => {
        return nodes.flatMap((node) => {
          const k = getValue(node)
          const isMatch = matchKeys.has(k)
          const isAncestor = ancestorKeys.has(k)
          if (!isMatch && !isAncestor) return []
          const children = getChildren(node)
          const result: FlatNode[] = [{
            node,
            level,
            hasChildren: !!(children?.length),
            valueKey: k,
            label: getLabel(node),
            forceExpand: isAncestor,
          }]
          if (children && isAncestor) {
            result.push(...filter(children, level + 1))
          }
          return result
        })
      }
      return filter(props.treeData)
    })

    // ===================== Display labels =====================
    const selectedLabels = computed(() =>
      selectedValues.value.map((v) => maps.value.labelMap.get(v) ?? String(v)),
    )

    // ===================== Virtual scroll =====================
    const useVirtual = computed(() =>
      props.virtual && props.itemHeight > 0 && flatNodes.value.length * props.itemHeight > props.listHeight,
    )
    const visibleRange = computed(() => {
      if (!useVirtual.value) return { start: 0, end: flatNodes.value.length, offset: 0 }
      const total = flatNodes.value.length
      const buffer = 5
      const start = Math.max(0, Math.floor(scrollTop.value / props.itemHeight) - buffer)
      const visibleCount = Math.ceil(props.listHeight / props.itemHeight) + buffer * 2
      const end = Math.min(total, start + visibleCount)
      return { start, end, offset: start * props.itemHeight }
    })
    const handleListScroll = (e: Event) => {
      scrollTop.value = (e.target as HTMLElement).scrollTop
    }
    // 切换搜索/数据/展开时复位滚动
    watch([searchText, () => props.treeData, expandedKeys], () => {
      scrollTop.value = 0
      if (listRef.value) listRef.value.scrollTop = 0
    })

    // ===================== Tag display helpers =====================
    const truncateLabel = (label: string) => {
      const max = props.maxTagTextLength
      if (max && max > 0 && label.length > max) return `${label.slice(0, max)}...`
      return label
    }
    const renderMaxTagPlaceholder = (omitted: Key[]): string => {
      const placeholder = props.maxTagPlaceholder
      if (typeof placeholder === 'function') return placeholder(omitted)
      if (typeof placeholder === 'string') return placeholder
      return `+ ${omitted.length} ...`
    }
    const visibleTagCount = computed(() => {
      const total = selectedValues.value.length
      const max = props.maxTagCount
      if (max === undefined || max === 'responsive') return total
      const n = Number(max)
      if (!Number.isFinite(n) || n < 0) return total
      return Math.min(n, total)
    })

    // ===================== Tree icon =====================
    const renderTreeIcon = (node: TreeSelectNode): VNode | string | null => {
      // 节点级 icon 优先
      if (node.icon !== undefined && node.icon !== null) {
        if (typeof node.icon === 'function') return (node.icon as (n: TreeSelectNode) => VNode | string)(node)
        return node.icon as VNode | string
      }
      const ti = props.treeIcon
      if (ti === undefined || ti === null || ti === false) return null
      if (ti === true) {
        // 默认图标：父节点显示文件夹图标，叶子显示文件图标
        const ch = getChildren(node)
        return ch?.length ? '📁' : '📄'
      }
      if (typeof ti === 'function') return (ti as (n: TreeSelectNode) => VNode | string | null)(node)
      return ti as VNode | string
    }

    // ===================== Dropdown =====================
    async function openDropdown() {
      if (props.disabled) return
      innerOpen.value = true
      emit('update:open', true)
      emit('dropdownVisibleChange', true)
      emit('openChange', true)
      await nextTick()
      if (selectorRef.value) {
        const rect = selectorRef.value.getBoundingClientRect()
        dropdownPos.value = {
          top: rect.bottom + window.scrollY + 4,
          left: rect.left + window.scrollX,
          width: rect.width,
        }
      }
    }

    function closeDropdown() {
      innerOpen.value = false
      searchText.value = ''
      emit('update:open', false)
      emit('dropdownVisibleChange', false)
      emit('openChange', false)
    }

    function toggleExpand(key: Key) {
      if (expandedKeys.value.includes(key)) {
        expandedKeys.value = expandedKeys.value.filter((k) => k !== key)
      } else {
        expandedKeys.value = [...expandedKeys.value, key]
      }
      emit('treeExpand', expandedKeys.value)
    }

    // ===================== Selection =====================
    function selectNode(node: TreeSelectNode) {
      const selectable = node.selectable !== false
      if (!selectable || node.disabled || props.disabled) return
      const key = getValue(node)
      const label = getLabel(node)

      if (props.treeCheckable) {
        // Checkable mode
        if (node.disableCheckbox) return
        let newVals: Key[]
        if (props.treeCheckStrictly) {
          // Strict: no cascade
          const vals = [...selectedValues.value]
          const idx = vals.indexOf(key)
          if (idx >= 0) vals.splice(idx, 1)
          else vals.push(key)
          newVals = vals
        } else {
          // Cascade: toggle all descendants
          const leaves = descendantLeaves(key)
          const currentLeaves = new Set(selectedValues.value)
          const allChecked = leaves.every((l) => currentLeaves.has(l))
          if (allChecked) {
            leaves.forEach((l) => currentLeaves.delete(l))
          } else {
            leaves.forEach((l) => currentLeaves.add(l))
          }
          const { checked } = conductCheck(currentLeaves)
          // Apply showCheckedStrategy
          if (props.showCheckedStrategy === 'SHOW_ALL') {
            newVals = Array.from(checked)
          } else if (props.showCheckedStrategy === 'SHOW_PARENT') {
            // Only show parent if all children checked
            newVals = Array.from(checked).filter((k) => {
              const children = maps.value.childKeysMap.get(k)
              if (!children?.length) return true
              return children.every((c) => checked.has(c))
            })
          } else {
            // SHOW_CHILD: only leaves
            newVals = Array.from(checked).filter((k) => !maps.value.childKeysMap.get(k)?.length)
          }
        }
        if (props.maxCount !== undefined && newVals.length > props.maxCount) return
        innerValue.value = newVals
        emit('update:value', newVals)
        emit('change', newVals, newVals.map((v) => maps.value.labelMap.get(v) ?? String(v)))
        emit('select', key, node)
        if (props.autoClearSearchValue) searchText.value = ''
      } else if (isMultiple.value) {
        // Multiple (non-checkable)
        const vals = [...selectedValues.value]
        const idx = vals.indexOf(key)
        if (idx >= 0) vals.splice(idx, 1)
        else {
          if (props.maxCount !== undefined && vals.length >= props.maxCount) return
          vals.push(key)
        }
        innerValue.value = vals
        emit('update:value', vals)
        emit('change', vals, vals.map((v) => maps.value.labelMap.get(v) ?? String(v)))
        emit('select', key, node)
        if (props.autoClearSearchValue) searchText.value = ''
      } else {
        // Single
        innerValue.value = key
        emit('update:value', key)
        emit('change', key, label)
        emit('select', key, node)
        closeDropdown()
      }
    }

    function removeTag(val: Key, e: MouseEvent) {
      e.stopPropagation()
      const vals = selectedValues.value.filter((v) => v !== val)
      innerValue.value = vals
      emit('update:value', vals)
      emit('change', vals, vals.map((v) => maps.value.labelMap.get(v) ?? String(v)))
    }

    function clearAll(e: MouseEvent) {
      e.stopPropagation()
      const empty = isMultiple.value ? [] : undefined
      innerValue.value = empty
      emit('update:value', empty)
      emit('change', empty, [])
      emit('clear')
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!isOpen.value) return
      if (selectorRef.value?.contains(e.target as Node) || dropdownRef.value?.contains(e.target as Node)) return
      closeDropdown()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick))

    // ===================== Render helpers =====================
    const renderTreeNode = (flat: FlatNode, checkedSet: Set<Key>, halfSet: Set<Key>): VNode => {
      const { node, level, hasChildren, valueKey, label, forceExpand } = flat
      const isSelected = selectedValues.value.includes(valueKey)
      const isExpanded = forceExpand || expandedKeys.value.includes(valueKey)
      const isChecked = checkedSet.has(valueKey)
      const isHalf = halfSet.has(valueKey)
      const iconNode = renderTreeIcon(node)
      return (
        <div
          key={valueKey}
          class={cls(`${prefixCls}-tree-node`, {
            [`${prefixCls}-tree-node-selected`]: isSelected,
            [`${prefixCls}-tree-node-disabled`]: node.disabled,
          })}
          style={{
            paddingLeft: `${level * 20 + 8}px`,
            height: useVirtual.value ? `${props.itemHeight}px` : undefined,
            minHeight: useVirtual.value ? `${props.itemHeight}px` : undefined,
          }}
        >
          <span
            class={cls(`${prefixCls}-tree-switcher`, {
              [`${prefixCls}-tree-switcher-noop`]: !hasChildren,
            })}
            onClick={(e) => { e.stopPropagation(); if (hasChildren && !forceExpand) toggleExpand(valueKey) }}
          >
            {hasChildren && !forceExpand ? (isExpanded ? '▾' : '▸') : null}
          </span>
          {props.treeCheckable && (
            <span
              class={cls(`${prefixCls}-tree-checkbox`, {
                [`${prefixCls}-tree-checkbox-checked`]: isChecked,
                [`${prefixCls}-tree-checkbox-indeterminate`]: isHalf,
                [`${prefixCls}-tree-checkbox-disabled`]: node.disabled || node.disableCheckbox,
              })}
              onClick={(e) => { e.stopPropagation(); selectNode(node) }}
            >
              <span class={`${prefixCls}-tree-checkbox-inner`} />
            </span>
          )}
          {iconNode !== null && (
            <span class={`${prefixCls}-tree-icon`}>{iconNode}</span>
          )}
          <span
            class={`${prefixCls}-tree-node-content`}
            onClick={() => selectNode(node)}
          >
            {label}
          </span>
        </div>
      )
    }

    // ===================== Render =====================
    return () => {
      const hasValue = selectedValues.value.length > 0
      const showClear = props.allowClear && hasValue && !props.disabled

      // Compute checked/half for checkable mode
      let checkedSet = new Set<Key>()
      let halfSet = new Set<Key>()
      if (props.treeCheckable && !props.treeCheckStrictly) {
        const leaves = new Set(selectedValues.value)
        const result = conductCheck(leaves)
        checkedSet = result.checked
        halfSet = result.half
      } else if (props.treeCheckable) {
        checkedSet = new Set(selectedValues.value)
      }

      return (
        <div class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-open`]: isOpen.value,
          [`${prefixCls}-disabled`]: props.disabled,
          [`${prefixCls}-status-error`]: props.status === 'error',
          [`${prefixCls}-status-warning`]: props.status === 'warning',
        })}>
          <div
            ref={selectorRef}
            class={`${prefixCls}-selector`}
            onClick={isOpen.value ? closeDropdown : openDropdown}
          >
            {isMultiple.value ? (
              <>
                {selectedLabels.value.slice(0, visibleTagCount.value).map((label, i) => (
                  <span key={selectedValues.value[i]} class={`${prefixCls}-selection-item`}>
                    <span class={`${prefixCls}-selection-item-content`}>{truncateLabel(label)}</span>
                    <span class={`${prefixCls}-selection-item-remove`} onClick={(e) => removeTag(selectedValues.value[i], e)}>×</span>
                  </span>
                ))}
                {selectedValues.value.length > visibleTagCount.value && (
                  <span class={cls(`${prefixCls}-selection-item`, `${prefixCls}-selection-overflow`)}>
                    <span class={`${prefixCls}-selection-item-content`}>
                      {renderMaxTagPlaceholder(selectedValues.value.slice(visibleTagCount.value))}
                    </span>
                  </span>
                )}
                {props.showSearch && (
                  <input
                    class={`${prefixCls}-selection-search`}
                    value={searchText.value}
                    onInput={(e) => {
                      searchText.value = (e.target as HTMLInputElement).value
                      emit('search', searchText.value)
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
                {!hasValue && !searchText.value && (
                  <span class={`${prefixCls}-selection-placeholder`}>{props.placeholder}</span>
                )}
              </>
            ) : (
              <>
                {hasValue ? (
                  <span class={`${prefixCls}-selection-item`}>{selectedLabels.value[0]}</span>
                ) : (
                  <span class={`${prefixCls}-selection-placeholder`}>{props.placeholder}</span>
                )}
                {props.showSearch && isOpen.value && (
                  <input
                    class={`${prefixCls}-selection-search`}
                    value={searchText.value}
                    onInput={(e) => {
                      searchText.value = (e.target as HTMLInputElement).value
                      emit('search', searchText.value)
                    }}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </>
            )}
          </div>

          <div class={`${prefixCls}-arrow`}>
            <span class={cls(`${prefixCls}-arrow-icon`, { [`${prefixCls}-arrow-icon-open`]: isOpen.value })}>▾</span>
          </div>

          {showClear && (
            <span class={`${prefixCls}-clear`} onClick={clearAll}>×</span>
          )}

          {isOpen.value && (
            <Teleport to="body">
              <div
                ref={dropdownRef}
                class={`${prefixCls}-dropdown`}
                style={{
                  position: 'absolute',
                  top: `${dropdownPos.value.top}px`,
                  left: `${dropdownPos.value.left}px`,
                  minWidth: `${dropdownPos.value.width}px`,
                  zIndex: 1050,
                }}
              >
                {flatNodes.value.length === 0 ? (
                  <div class={`${prefixCls}-dropdown-empty`}>{props.notFoundContent}</div>
                ) : (
                  <div
                    ref={listRef}
                    class={`${prefixCls}-dropdown-list`}
                    style={{
                      maxHeight: `${props.listHeight}px`,
                      overflowY: 'auto',
                      position: 'relative',
                    }}
                    onScroll={handleListScroll}
                  >
                    {useVirtual.value ? (
                      <div
                        class={`${prefixCls}-dropdown-list-holder`}
                        style={{
                          height: `${flatNodes.value.length * props.itemHeight}px`,
                          position: 'relative',
                        }}
                      >
                        <div
                          class={`${prefixCls}-dropdown-list-inner`}
                          style={{
                            transform: `translateY(${visibleRange.value.offset}px)`,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                          }}
                        >
                          {flatNodes.value.slice(visibleRange.value.start, visibleRange.value.end).map((flat) =>
                            renderTreeNode(flat, checkedSet, halfSet),
                          )}
                        </div>
                      </div>
                    ) : (
                      flatNodes.value.map((flat) => renderTreeNode(flat, checkedSet, halfSet))
                    )}
                  </div>
                )}
              </div>
            </Teleport>
          )}
        </div>
      )
    }
  },
})

