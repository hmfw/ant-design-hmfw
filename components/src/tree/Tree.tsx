import {
  defineComponent, ref, computed, watch, type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TreeDataNode, TreeExpandedKeys, TreeSelectedKeys, TreeCheckedKeys } from './types'

interface FlatNode {
  node: TreeDataNode
  level: number
  parentKey: string | number | null
  hasChildren: boolean
  pos: string
}

export const Tree = defineComponent({
  name: 'Tree',
  props: {
    treeData: { type: Array as PropType<TreeDataNode[]>, default: () => [] },
    expandedKeys: Array as PropType<TreeExpandedKeys>,
    defaultExpandedKeys: { type: Array as PropType<TreeExpandedKeys>, default: () => [] },
    defaultExpandAll: Boolean,
    selectedKeys: Array as PropType<TreeSelectedKeys>,
    defaultSelectedKeys: { type: Array as PropType<TreeSelectedKeys>, default: () => [] },
    checkedKeys: Array as PropType<TreeCheckedKeys>,
    defaultCheckedKeys: { type: Array as PropType<TreeCheckedKeys>, default: () => [] },
    checkable: Boolean,
    checkStrictly: Boolean,
    multiple: Boolean,
    selectable: { type: Boolean, default: true },
    disabled: Boolean,
    showLine: Boolean,
    showIcon: Boolean,
    blockNode: Boolean,
    indent: { type: Number, default: 24 },
    fieldNames: Object as PropType<{ title?: string; key?: string; children?: string }>,
  },
  emits: ['update:expandedKeys', 'update:selectedKeys', 'update:checkedKeys', 'expand', 'select', 'check'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('tree')

    const keyField = computed(() => props.fieldNames?.key ?? 'key')
    const titleField = computed(() => props.fieldNames?.title ?? 'title')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getKey = (node: TreeDataNode) => node[keyField.value] as string | number
    const getTitle = (node: TreeDataNode) => node[titleField.value] as string
    const getChildren = (node: TreeDataNode) => node[childrenField.value] as TreeDataNode[] | undefined

    const getAllKeys = (nodes: TreeDataNode[]): (string | number)[] => {
      return nodes.flatMap((n) => [getKey(n), ...getAllKeys(getChildren(n) ?? [])])
    }

    const innerExpanded = ref<TreeExpandedKeys>(
      props.defaultExpandAll ? getAllKeys(props.treeData) : [...props.defaultExpandedKeys]
    )
    const innerSelected = ref<TreeSelectedKeys>([...props.defaultSelectedKeys])
    const innerChecked = ref<TreeCheckedKeys>([...props.defaultCheckedKeys])

    const expandedKeys = computed(() => props.expandedKeys ?? innerExpanded.value)
    const selectedKeys = computed(() => props.selectedKeys ?? innerSelected.value)
    const checkedKeys = computed(() => props.checkedKeys ?? innerChecked.value)

    watch(() => props.treeData, () => {
      if (props.defaultExpandAll) innerExpanded.value = getAllKeys(props.treeData)
    })

    const flattenNodes = (nodes: TreeDataNode[], level = 0, parentKey: string | number | null = null, parentPos = '0'): FlatNode[] => {
      return nodes.flatMap((node, i) => {
        const key = getKey(node)
        const children = getChildren(node)
        const pos = `${parentPos}-${i}`
        const result: FlatNode[] = [{ node, level, parentKey, hasChildren: !!(children?.length), pos }]
        if (children?.length && expandedKeys.value.includes(key)) {
          result.push(...flattenNodes(children, level + 1, key, pos))
        }
        return result
      })
    }

    const flatNodes = computed(() => flattenNodes(props.treeData))

    const getDescendantKeys = (nodes: TreeDataNode[]): (string | number)[] => {
      return nodes.flatMap((n) => {
        const children = getChildren(n)
        return [getKey(n), ...getDescendantKeys(children ?? [])]
      })
    }

    const getParentKeys = (key: string | number, nodes: TreeDataNode[], acc: (string | number)[] = []): (string | number)[] => {
      for (const node of nodes) {
        const children = getChildren(node)
        if (getKey(node) === key) return acc
        if (children?.length) {
          const found = getParentKeys(key, children, [...acc, getKey(node)])
          if (found.length > acc.length) return found
        }
      }
      return acc
    }

    const handleExpand = (key: string | number) => {
      const next = expandedKeys.value.includes(key)
        ? expandedKeys.value.filter((k) => k !== key)
        : [...expandedKeys.value, key]
      innerExpanded.value = next
      emit('update:expandedKeys', next)
      emit('expand', next, { expanded: !expandedKeys.value.includes(key), node: key })
    }

    const handleSelect = (key: string | number, node: TreeDataNode) => {
      if (!props.selectable || node.disabled || props.disabled) return
      let next: TreeSelectedKeys
      if (props.multiple) {
        next = selectedKeys.value.includes(key)
          ? selectedKeys.value.filter((k) => k !== key)
          : [...selectedKeys.value, key]
      } else {
        next = selectedKeys.value[0] === key ? [] : [key]
      }
      innerSelected.value = next
      emit('update:selectedKeys', next)
      emit('select', next, { selected: next.includes(key), node })
    }

    const handleCheck = (key: string | number, node: TreeDataNode) => {
      if (node.disableCheckbox || node.disabled || props.disabled) return
      const checked = checkedKeys.value.includes(key)
      let next: TreeCheckedKeys

      if (props.checkStrictly) {
        next = checked ? checkedKeys.value.filter((k) => k !== key) : [...checkedKeys.value, key]
      } else {
        const children = getChildren(node)
        const descendants = getDescendantKeys(children ?? [])
        if (checked) {
          next = checkedKeys.value.filter((k) => k !== key && !descendants.includes(k))
          const parents = getParentKeys(key, props.treeData)
          next = next.filter((k) => !parents.includes(k))
        } else {
          next = [...new Set([...checkedKeys.value, key, ...descendants])]
        }
      }
      innerChecked.value = next
      emit('update:checkedKeys', next)
      emit('check', next, { checked: !checked, node })
    }

    return () => (
      <div class={cls(prefixCls, {
        [`${prefixCls}-show-line`]: props.showLine,
        [`${prefixCls}-block-node`]: props.blockNode,
        [`${prefixCls}-disabled`]: props.disabled,
      })}>
        {flatNodes.value.map(({ node, level, hasChildren }) => {
          const key = getKey(node)
          const title = getTitle(node)
          const isExpanded = expandedKeys.value.includes(key)
          const isSelected = selectedKeys.value.includes(key)
          const isChecked = checkedKeys.value.includes(key)
          const children = getChildren(node)
          const isIndeterminate = !isChecked && !props.checkStrictly && !!(
            children && getDescendantKeys(children).some((k) => checkedKeys.value.includes(k))
          )

          return (
            <div
              key={key}
              class={cls(`${prefixCls}-treenode`, {
                [`${prefixCls}-treenode-selected`]: isSelected,
                [`${prefixCls}-treenode-disabled`]: node.disabled || props.disabled,
                [`${prefixCls}-treenode-leaf`]: !hasChildren,
              })}
              style={{ paddingLeft: `${level * props.indent}px` }}
            >
              {/* Switcher */}
              <span
                class={cls(`${prefixCls}-switcher`, {
                  [`${prefixCls}-switcher_open`]: hasChildren && isExpanded,
                  [`${prefixCls}-switcher_close`]: hasChildren && !isExpanded,
                  [`${prefixCls}-switcher-noop`]: !hasChildren,
                })}
                onClick={() => hasChildren && handleExpand(key)}
              >
                {hasChildren ? (isExpanded ? '▾' : '▸') : null}
              </span>

              {/* Checkbox */}
              {props.checkable && (
                <span
                  class={cls(`${prefixCls}-checkbox`, {
                    [`${prefixCls}-checkbox-checked`]: isChecked,
                    [`${prefixCls}-checkbox-indeterminate`]: isIndeterminate,
                    [`${prefixCls}-checkbox-disabled`]: node.disableCheckbox || node.disabled || props.disabled,
                  })}
                  onClick={() => handleCheck(key, node)}
                >
                  <span class={`${prefixCls}-checkbox-inner`} />
                </span>
              )}

              {/* Node content */}
              <span
                class={cls(`${prefixCls}-node-content-wrapper`, {
                  [`${prefixCls}-node-content-wrapper-normal`]: !hasChildren,
                  [`${prefixCls}-node-selected`]: isSelected,
                })}
                onClick={() => handleSelect(key, node)}
              >
                <span class={`${prefixCls}-title`}>{title}</span>
              </span>
            </div>
          )
        })}
      </div>
    )
  },
})
