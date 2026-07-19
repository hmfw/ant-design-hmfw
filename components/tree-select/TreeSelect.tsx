import { defineComponent, ref, computed, watch, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { CaretRightFilled, CaretDownFilled, DownOutlined } from '@hmfw/icons'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { VirtualList } from '../_internal/virtual-list'
import type {
  TreeSelectNode,
  ShowCheckedStrategy,
  TreeSelectValue,
  TreeIcon,
  MaxTagPlaceholder,
  TreeSelectProps,
} from './types'
import type { ComponentSize } from '../config-provider'

type Key = string | number

// 树节点缩进与布局常量
const TREE_INDENT_SIZE = 20 // 每层缩进像素
const TREE_BASE_PADDING = 8 // 基础左侧内边距

interface FlatNode {
  node: TreeSelectNode
  level: number
  hasChildren: boolean
  valueKey: Key
  label: string
  /** 搜索态下强制展开 */
  forceExpand: boolean
}

const treeSelectProps = {
  value: { type: [String, Number, Array] as PropType<TreeSelectValue>, default: undefined },
  defaultValue: { type: [String, Number, Array] as PropType<TreeSelectValue>, default: undefined },
  treeData: { type: Array as PropType<TreeSelectNode[]>, default: () => [] },
  multiple: { type: Boolean, default: false },
  treeCheckable: { type: Boolean, default: false },
  treeCheckStrictly: { type: Boolean, default: false },
  showCheckedStrategy: { type: String as PropType<ShowCheckedStrategy>, default: 'SHOW_CHILD' },
  showSearch: { type: Boolean, default: false },
  autoClearSearchValue: { type: Boolean, default: true },
  allowClear: { type: Boolean, default: false },
  placeholder: { type: String, default: '请选择' },
  disabled: { type: Boolean, default: false },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
  maxCount: { type: Number, default: undefined },
  notFoundContent: { type: String, default: '暂无数据' },
  treeDefaultExpandAll: { type: Boolean, default: false },
  treeDefaultExpandedKeys: { type: Array as PropType<Key[]>, default: () => [] },
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  fieldNames: { type: Object as PropType<{ label?: string; value?: string; children?: string }>, default: undefined },
  virtual: { type: Boolean, default: true },
  listHeight: { type: Number, default: 256 },
  itemHeight: { type: Number, default: 28 },
  treeIcon: { type: [Boolean, Object, String, Function] as PropType<TreeIcon>, default: undefined },
  maxTagCount: { type: [Number, String] as PropType<number | 'responsive'>, default: undefined },
  maxTagPlaceholder: { type: [String, Function] as PropType<MaxTagPlaceholder>, default: undefined },
  maxTagTextLength: { type: Number, default: undefined },
  classNames: { type: Object as PropType<import('./types').TreeSelectClassNames>, default: undefined },
  styles: { type: Object as PropType<import('./types').TreeSelectStyles>, default: undefined },
} satisfies Record<keyof TreeSelectProps, any>

export const TreeSelect = defineComponent({
  name: 'TreeSelect',
  props: treeSelectProps,
  emits: ['update:value', 'update:open', 'change', 'search', 'select', 'treeExpand', 'openChange', 'clear'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tree-select')
    const selectorRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(!!props.defaultOpen)
    const searchText = ref('')

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

    const innerValue = ref<TreeSelectValue | undefined>(normalizeValue(props.defaultValue ?? props.value))
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

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
          else if (s === 'half') {
            anyChecked = true
            allChecked = false
          } else allChecked = false
        }
        if (allChecked) {
          checked.add(key)
          return 'checked'
        }
        checked.delete(key)
        if (anyChecked) {
          half.add(key)
          return 'half'
        }
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
    watch(initExpandedKeys, (v) => {
      expandedKeys.value = [...v]
    })

    // ===================== Flatten tree =====================
    function flattenTree(nodes: TreeSelectNode[], level = 0, forceExpand = false): FlatNode[] {
      return nodes.flatMap((node) => {
        const children = getChildren(node)
        const key = getValue(node)
        const result: FlatNode[] = [
          {
            node,
            level,
            hasChildren: !!children?.length,
            valueKey: key,
            label: getLabel(node),
            forceExpand,
          },
        ]
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
          const result: FlatNode[] = [
            {
              node,
              level,
              hasChildren: !!children?.length,
              valueKey: k,
              label: getLabel(node),
              forceExpand: isAncestor,
            },
          ]
          if (children && isAncestor) {
            result.push(...filter(children, level + 1))
          }
          return result
        })
      }
      return filter(props.treeData)
    })

    // ===================== Display labels =====================
    const selectedLabels = computed(() => selectedValues.value.map((v) => maps.value.labelMap.get(v) ?? String(v)))

    // ===================== Virtual scroll =====================
    const useVirtual = computed(
      () => props.virtual && props.itemHeight > 0 && flatNodes.value.length * props.itemHeight > props.listHeight,
    )

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
    function openDropdown() {
      if (props.disabled) return
      innerOpen.value = true
      emit('update:open', true)
      emit('openChange', true)
    }

    function closeDropdown() {
      innerOpen.value = false
      searchText.value = ''
      emit('update:open', false)
      emit('openChange', false)
    }

    // 键盘无障碍：Enter/Space/Down 打开下拉，Esc 关闭
    function onSelectorKeydown(e: KeyboardEvent) {
      if (props.disabled) return
      const { key } = e
      if (key === 'Escape') {
        if (isOpen.value) {
          e.preventDefault()
          closeDropdown()
        }
        return
      }
      if (key === 'ArrowDown' || key === 'Enter' || key === ' ' || key === 'Spacebar') {
        // 已打开时避免 Space/Enter 误触发页面滚动或表单提交
        if (!isOpen.value) {
          e.preventDefault()
          openDropdown()
        } else if (key === 'ArrowDown') {
          e.preventDefault()
        }
      }
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
        emit(
          'change',
          newVals,
          newVals.map((v) => maps.value.labelMap.get(v) ?? String(v)),
        )
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
        emit(
          'change',
          vals,
          vals.map((v) => maps.value.labelMap.get(v) ?? String(v)),
        )
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
      emit(
        'change',
        vals,
        vals.map((v) => maps.value.labelMap.get(v) ?? String(v)),
      )
    }

    function clearAll(e: MouseEvent) {
      e.stopPropagation()
      const empty = isMultiple.value ? [] : undefined
      innerValue.value = empty
      emit('update:value', empty)
      emit('change', empty, [])
      emit('clear')
    }

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
          role="treeitem"
          aria-selected={isSelected}
          aria-expanded={hasChildren ? isExpanded : undefined}
          aria-disabled={node.disabled || undefined}
          aria-checked={props.treeCheckable ? (isHalf ? 'mixed' : isChecked) : undefined}
          class={cls(`${prefixCls}-tree-node`, props.classNames?.treeNode, {
            [`${prefixCls}-tree-node-selected`]: isSelected,
            [`${prefixCls}-tree-node-disabled`]: node.disabled,
          })}
          style={{
            paddingLeft: `${level * TREE_INDENT_SIZE + TREE_BASE_PADDING}px`,
            height: useVirtual.value ? `${props.itemHeight}px` : undefined,
            minHeight: useVirtual.value ? `${props.itemHeight}px` : undefined,
            ...props.styles?.treeNode,
          }}
        >
          <span
            class={cls(`${prefixCls}-tree-switcher`, props.classNames?.treeSwitcher, {
              [`${prefixCls}-tree-switcher-noop`]: !hasChildren,
            })}
            style={props.styles?.treeSwitcher}
            onClick={(e) => {
              e.stopPropagation()
              if (hasChildren && !forceExpand) toggleExpand(valueKey)
            }}
          >
            {hasChildren && !forceExpand ? isExpanded ? <CaretDownFilled /> : <CaretRightFilled /> : null}
          </span>
          {props.treeCheckable && (
            <span
              class={cls(`${prefixCls}-tree-checkbox`, props.classNames?.treeCheckbox, {
                [`${prefixCls}-tree-checkbox-checked`]: isChecked,
                [`${prefixCls}-tree-checkbox-indeterminate`]: isHalf,
                [`${prefixCls}-tree-checkbox-disabled`]: node.disabled || node.disableCheckbox,
              })}
              style={props.styles?.treeCheckbox}
              onClick={(e) => {
                e.stopPropagation()
                selectNode(node)
              }}
            >
              <span class={`${prefixCls}-tree-checkbox-inner`} />
            </span>
          )}
          {iconNode !== null && (
            <span class={cls(`${prefixCls}-tree-icon`, props.classNames?.treeIcon)} style={props.styles?.treeIcon}>
              {iconNode}
            </span>
          )}
          <span
            class={cls(`${prefixCls}-tree-node-content`, props.classNames?.treeNodeContent)}
            style={props.styles?.treeNodeContent}
            onClick={() => selectNode(node)}
          >
            {label}
          </span>
        </div>
      )
    }

    // ===================== Dropdown Content =====================
    const renderDropdownContent = (checkedSet: Set<Key>, halfSet: Set<Key>) => {
      if (flatNodes.value.length === 0) {
        return (
          <div
            class={cls(`${prefixCls}-dropdown-empty`, props.classNames?.dropdownEmpty)}
            style={props.styles?.dropdownEmpty}
          >
            {props.notFoundContent}
          </div>
        )
      }

      return (
        <div class={`${prefixCls}-dropdown-list`} role="tree" aria-multiselectable={isMultiple.value || undefined}>
          {useVirtual.value ? (
            <VirtualList
              data={flatNodes.value}
              height={props.listHeight}
              itemHeight={props.itemHeight}
              buffer={5}
              renderItem={(flat: FlatNode, _index: number) => renderTreeNode(flat, checkedSet, halfSet)}
              itemKey={(flat: FlatNode) => flat.valueKey}
            />
          ) : (
            flatNodes.value.map((flat) => renderTreeNode(flat, checkedSet, halfSet))
          )}
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
        <Trigger
          open={isOpen.value}
          trigger="click"
          placement={'bottomLeft' as Placement}
          disabled={props.disabled}
          destroyOnHidden
          matchWidth
          triggerClass={cls(prefixCls, `${prefixCls}-${props.size}`, props.classNames?.root, {
            [`${prefixCls}-open`]: isOpen.value,
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-status-error`]: props.status === 'error',
            [`${prefixCls}-status-warning`]: props.status === 'warning',
          })}
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
                  aria-haspopup="tree"
                  aria-disabled={props.disabled || undefined}
                  tabindex={props.disabled ? undefined : 0}
                  onKeydown={onSelectorKeydown}
                >
                  {isMultiple.value ? (
                    <>
                      {selectedLabels.value.slice(0, visibleTagCount.value).map((label, i) => (
                        <span
                          key={selectedValues.value[i]}
                          class={cls(`${prefixCls}-selection-item`, props.classNames?.item)}
                          style={props.styles?.item}
                        >
                          <span class={`${prefixCls}-selection-item-content`}>{truncateLabel(label)}</span>
                          <span
                            class={`${prefixCls}-selection-item-remove`}
                            onClick={(e) => removeTag(selectedValues.value[i], e)}
                          >
                            ×
                          </span>
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
                          class={cls(`${prefixCls}-selection-search`, props.classNames?.search)}
                          style={props.styles?.search}
                          value={searchText.value}
                          onInput={(e) => {
                            searchText.value = (e.target as HTMLInputElement).value
                            emit('search', searchText.value)
                          }}
                          onClick={(e) => e.stopPropagation()}
                        />
                      )}
                      {!hasValue && !searchText.value && (
                        <span
                          class={cls(`${prefixCls}-selection-placeholder`, props.classNames?.placeholder)}
                          style={props.styles?.placeholder}
                        >
                          {props.placeholder}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {hasValue ? (
                        <span
                          class={cls(`${prefixCls}-selection-item`, props.classNames?.item)}
                          style={props.styles?.item}
                        >
                          {selectedLabels.value[0]}
                        </span>
                      ) : (
                        <span
                          class={cls(`${prefixCls}-selection-placeholder`, props.classNames?.placeholder)}
                          style={props.styles?.placeholder}
                        >
                          {props.placeholder}
                        </span>
                      )}
                      {props.showSearch && isOpen.value && (
                        <input
                          class={cls(`${prefixCls}-selection-search`, props.classNames?.search)}
                          style={props.styles?.search}
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

                <div class={cls(`${prefixCls}-arrow`, props.classNames?.arrow)} style={props.styles?.arrow}>
                  <DownOutlined
                    class={cls(`${prefixCls}-arrow-icon`, {
                      [`${prefixCls}-arrow-icon-open`]: isOpen.value,
                    })}
                  />
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
            popup: () => renderDropdownContent(checkedSet, halfSet),
          }}
        </Trigger>
      )
    }
  },
})
