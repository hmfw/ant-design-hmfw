import {
  defineComponent, ref, computed, watch, onMounted, onBeforeUnmount, nextTick, Teleport, type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TreeSelectNode } from './types'

interface FlatNode {
  node: TreeSelectNode
  level: number
  hasChildren: boolean
  valueKey: string | number
  label: string
}

export const TreeSelect = defineComponent({
  name: 'TreeSelect',
  props: {
    value: [String, Number, Array] as PropType<string | number | (string | number)[]>,
    defaultValue: [String, Number, Array] as PropType<string | number | (string | number)[]>,
    treeData: { type: Array as PropType<TreeSelectNode[]>, default: () => [] },
    multiple: Boolean,
    treeCheckable: Boolean,
    showSearch: Boolean,
    allowClear: Boolean,
    placeholder: { type: String, default: '请选择' },
    disabled: Boolean,
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    treeDefaultExpandAll: Boolean,
    fieldNames: Object as PropType<{ label?: string; value?: string; children?: string }>,
  },
  emits: ['update:value', 'change', 'search', 'dropdownVisibleChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tree-select')
    const selectorRef = ref<HTMLElement | null>(null)
    const dropdownRef = ref<HTMLElement | null>(null)
    const innerOpen = ref(false)
    const dropdownPos = ref({ top: 0, left: 0, width: 0 })
    const searchText = ref('')

    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getLabel = (n: TreeSelectNode) => n[labelField.value] as string
    const getValue = (n: TreeSelectNode) => n[valueField.value] as string | number
    const getChildren = (n: TreeSelectNode) => n[childrenField.value] as TreeSelectNode[] | undefined

    const isMultiple = computed(() => props.multiple || props.treeCheckable)

    const normalizeValue = (v: typeof props.value) => {
      if (v === undefined || v === null) return isMultiple.value ? [] : undefined
      return v
    }

    const innerValue = ref<string | number | (string | number)[] | undefined>(
      normalizeValue(props.defaultValue ?? props.value)
    )
    watch(() => props.value, (v) => { if (v !== undefined) innerValue.value = v })

    const currentValue = computed(() => props.value !== undefined ? props.value : innerValue.value)
    const selectedValues = computed(() => {
      const v = currentValue.value
      if (v === undefined || v === null) return []
      return Array.isArray(v) ? v : [v]
    })

    // Flatten tree for rendering
    const getAllKeys = (nodes: TreeSelectNode[]): (string | number)[] =>
      nodes.flatMap((n) => [getValue(n), ...getAllKeys(getChildren(n) ?? [])])

    const expandedKeys = ref<(string | number)[]>(
      props.treeDefaultExpandAll ? getAllKeys(props.treeData) : []
    )

    function flattenTree(nodes: TreeSelectNode[], level = 0): FlatNode[] {
      return nodes.flatMap((node) => {
        const children = getChildren(node)
        const key = getValue(node)
        const result: FlatNode[] = [{
          node,
          level,
          hasChildren: !!(children?.length),
          valueKey: key,
          label: getLabel(node),
        }]
        if (children?.length && expandedKeys.value.includes(key)) {
          result.push(...flattenTree(children, level + 1))
        }
        return result
      })
    }

    const flatNodes = computed(() => {
      const all = flattenTree(props.treeData)
      if (!searchText.value) return all
      const q = searchText.value.toLowerCase()
      return all.filter((n) => n.label.toLowerCase().includes(q))
    })

    // Build label map for display
    function buildLabelMap(nodes: TreeSelectNode[], map: Map<string | number, string> = new Map()) {
      for (const n of nodes) {
        map.set(getValue(n), getLabel(n))
        const children = getChildren(n)
        if (children) buildLabelMap(children, map)
      }
      return map
    }
    const labelMap = computed(() => buildLabelMap(props.treeData))

    const selectedLabels = computed(() =>
      selectedValues.value.map((v) => labelMap.value.get(v) ?? String(v))
    )

    async function openDropdown() {
      if (props.disabled) return
      innerOpen.value = true
      emit('dropdownVisibleChange', true)
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
      emit('dropdownVisibleChange', false)
    }

    function toggleExpand(key: string | number) {
      if (expandedKeys.value.includes(key)) {
        expandedKeys.value = expandedKeys.value.filter((k) => k !== key)
      } else {
        expandedKeys.value = [...expandedKeys.value, key]
      }
    }

    function selectNode(node: TreeSelectNode) {
      if (node.disabled || props.disabled) return
      const key = getValue(node)
      if (isMultiple.value) {
        const vals = [...selectedValues.value]
        const idx = vals.indexOf(key)
        if (idx >= 0) vals.splice(idx, 1)
        else vals.push(key)
        innerValue.value = vals
        emit('update:value', vals)
        emit('change', vals, selectedLabels.value)
      } else {
        innerValue.value = key
        emit('update:value', key)
        emit('change', key, getLabel(node))
        closeDropdown()
      }
    }

    function removeTag(val: string | number, e: MouseEvent) {
      e.stopPropagation()
      const vals = selectedValues.value.filter((v) => v !== val)
      innerValue.value = vals
      emit('update:value', vals)
      emit('change', vals, vals.map((v) => labelMap.value.get(v) ?? String(v)))
    }

    function clearAll(e: MouseEvent) {
      e.stopPropagation()
      const empty = isMultiple.value ? [] : undefined
      innerValue.value = empty
      emit('update:value', empty)
      emit('change', empty, [])
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!innerOpen.value) return
      if (selectorRef.value?.contains(e.target as Node) || dropdownRef.value?.contains(e.target as Node)) return
      closeDropdown()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideClick))

    return () => {
      const hasValue = selectedValues.value.length > 0
      const showClear = props.allowClear && hasValue && !props.disabled

      return (
        <div class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-open`]: innerOpen.value,
          [`${prefixCls}-disabled`]: props.disabled,
        })}>
          <div
            ref={selectorRef}
            class={`${prefixCls}-selector`}
            onClick={innerOpen.value ? closeDropdown : openDropdown}
          >
            {isMultiple.value ? (
              <>
                {selectedLabels.value.map((label, i) => (
                  <span key={selectedValues.value[i]} class={`${prefixCls}-selection-item`}>
                    <span class={`${prefixCls}-selection-item-content`}>{label}</span>
                    <span class={`${prefixCls}-selection-item-remove`} onClick={(e) => removeTag(selectedValues.value[i], e)}>×</span>
                  </span>
                ))}
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
                {props.showSearch && innerOpen.value && (
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
            <span class={cls(`${prefixCls}-arrow-icon`, { [`${prefixCls}-arrow-icon-open`]: innerOpen.value })}>▾</span>
          </div>

          {showClear && (
            <span class={`${prefixCls}-clear`} onClick={clearAll}>×</span>
          )}

          {innerOpen.value && (
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
                  <div class={`${prefixCls}-dropdown-empty`}>暂无数据</div>
                ) : (
                  flatNodes.value.map(({ node, level, hasChildren, valueKey, label }) => {
                    const isSelected = selectedValues.value.includes(valueKey)
                    const isExpanded = expandedKeys.value.includes(valueKey)
                    return (
                      <div
                        key={valueKey}
                        class={cls(`${prefixCls}-tree-node`, {
                          [`${prefixCls}-tree-node-selected`]: isSelected,
                          [`${prefixCls}-tree-node-disabled`]: node.disabled,
                        })}
                        style={{ paddingLeft: `${level * 20 + 8}px` }}
                      >
                        <span
                          class={cls(`${prefixCls}-tree-switcher`, {
                            [`${prefixCls}-tree-switcher-noop`]: !hasChildren,
                          })}
                          onClick={(e) => { e.stopPropagation(); if (hasChildren) toggleExpand(valueKey) }}
                        >
                          {hasChildren ? (isExpanded ? '▾' : '▸') : null}
                        </span>
                        {props.treeCheckable && (
                          <span
                            class={cls(`${prefixCls}-tree-checkbox`, {
                              [`${prefixCls}-tree-checkbox-checked`]: isSelected,
                              [`${prefixCls}-tree-checkbox-disabled`]: node.disabled,
                            })}
                            onClick={(e) => { e.stopPropagation(); selectNode(node) }}
                          >
                            <span class={`${prefixCls}-tree-checkbox-inner`} />
                          </span>
                        )}
                        <span
                          class={`${prefixCls}-tree-node-content`}
                          onClick={() => selectNode(node)}
                        >
                          {label}
                        </span>
                      </div>
                    )
                  })
                )}
              </div>
            </Teleport>
          )}
        </div>
      )
    }
  },
})
