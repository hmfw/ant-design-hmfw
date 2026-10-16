import { computed, ref, watch } from 'vue'
import type { ExpandableConfig, Key } from '../interface'

export interface UseTreeDataOptions {
  props: { expandable?: ExpandableConfig; dataSource?: any[] }
  /** 行 key 计算函数（与行渲染保持一致） */
  getRowKey: (record: any, index: number) => Key
}

/**
 * 树形数据（嵌套 children）支持：
 * - 树形判定与展开图标内嵌
 * - defaultExpandAllRows / defaultExpandedRowKeys / 受控 expandedRowKeys
 * - 展平、后代收集、父子映射与级联勾选
 */
export function useTreeData(options: UseTreeDataOptions) {
  const { props, getRowKey } = options

  const childrenColumnName = computed(() => props.expandable?.childrenColumnName ?? 'children')
  const indentSize = computed(() => props.expandable?.indentSize ?? 15)

  // 递归判断某记录是否存在非空子节点
  const nodeHasChildren = (record: any): boolean => {
    const children = record?.[childrenColumnName.value]
    return Array.isArray(children) && children.length > 0
  }

  // 是否为树形数据（顶层记录中存在带子节点的记录）
  const hasTreeData = computed(() => (props.dataSource ?? []).some((r) => nodeHasChildren(r)))

  // 是否处于树形渲染模式（与 expandedRowRender 互斥）
  const treeMode = computed(() => hasTreeData.value && !props.expandable?.expandedRowRender)

  // Expandable state
  // defaultExpandAllRows：默认展开所有带子节点的行（仅在未提供受控/默认 keys 时生效）
  const getInitialExpandedKeys = (): Key[] => {
    if (props.expandable?.expandedRowKeys) return props.expandable.expandedRowKeys
    if (props.expandable?.defaultExpandedRowKeys) return props.expandable.defaultExpandedRowKeys
    if (props.expandable?.defaultExpandAllRows) {
      const keys: Key[] = []
      const walk = (arr: any[]) => {
        arr?.forEach((r, i) => {
          if (nodeHasChildren(r)) {
            keys.push(getRowKey(r, i))
            walk(r[childrenColumnName.value])
          }
        })
      }
      walk(props.dataSource ?? [])
      return keys
    }
    return []
  }

  const expandedKeys = ref<Key[]>(getInitialExpandedKeys())
  watch(
    () => props.expandable?.expandedRowKeys,
    (v) => {
      if (v !== undefined) expandedKeys.value = v
    },
  )

  const handleExpand = (expanded: boolean, record: any) => {
    const key = getRowKey(record, 0)
    if (expanded) {
      expandedKeys.value = [...expandedKeys.value, key]
    } else {
      expandedKeys.value = expandedKeys.value.filter((k) => k !== key)
    }
    props.expandable?.onExpand?.(expanded, record)
    props.expandable?.onExpandedRowsChange?.(expandedKeys.value)
  }

  // 递归展开 dataSource（含树形子节点），key 计算方式与行渲染一致（同级索引）
  const flattenRecords = (records: any[]): { record: any; key: Key }[] =>
    records.flatMap((r, i) => {
      const children = r?.[childrenColumnName.value]
      const self = { record: r, key: getRowKey(r, i) }
      return Array.isArray(children) ? [self, ...flattenRecords(children)] : [self]
    })

  // 收集某节点的全部后代 key
  const collectDescendantKeys = (record: any): Key[] => {
    const children = record?.[childrenColumnName.value]
    if (!Array.isArray(children) || children.length === 0) return []
    return children.flatMap((c: any, i: number) => [getRowKey(c, i), ...collectDescendantKeys(c)])
  }

  // 构建树形「子记录 → 父记录」与「记录 → key」映射，用于级联勾选时向上重算
  const buildTreeMaps = () => {
    const parentMap = new Map<any, any>()
    const keyOf = new Map<any, Key>()
    const walk = (records: any[], parent: any) => {
      records.forEach((r, i) => {
        keyOf.set(r, getRowKey(r, i))
        parentMap.set(r, parent)
        const children = r?.[childrenColumnName.value]
        if (Array.isArray(children)) walk(children, r)
      })
    }
    walk(props.dataSource ?? [], null)
    return { parentMap, keyOf }
  }

  // 树形级联勾选：勾选/取消行时联动全部后代，并自底向上重算祖先状态
  const cascadeSelect = (key: Key, record: any, checked: boolean, currentKeys: Key[]): Key[] => {
    const selected = new Set(currentKeys)
    // 1. 自身 + 全部后代
    const affected = [key, ...collectDescendantKeys(record)]
    affected.forEach((k) => (checked ? selected.add(k) : selected.delete(k)))

    // 2. 自底向上重算祖先：全部子节点选中 ⇒ 祖先选中，否则取消
    const { parentMap, keyOf } = buildTreeMaps()
    let parent = parentMap.get(record)
    while (parent) {
      const parentKey = keyOf.get(parent)!
      const siblings = (parent?.[childrenColumnName.value] ?? []) as any[]
      const allChildrenChecked = siblings.every((c) => selected.has(keyOf.get(c)!))
      if (allChildrenChecked) selected.add(parentKey)
      else selected.delete(parentKey)
      parent = parentMap.get(parent)
    }

    return [...selected]
  }

  return {
    childrenColumnName,
    indentSize,
    nodeHasChildren,
    hasTreeData,
    treeMode,
    expandedKeys,
    handleExpand,
    flattenRecords,
    collectDescendantKeys,
    buildTreeMaps,
    cascadeSelect,
  }
}
