import { ref, watch, type ComputedRef } from 'vue'
import type { Key, TableRowSelection } from '../interface'

export interface UseRowSelectionOptions {
  props: { rowSelection?: TableRowSelection; dataSource?: any[] }
  getRowKey: (record: any, index: number) => Key
  /** 是否处于树形模式（决定是否默认父子联动） */
  treeMode: ComputedRef<boolean>
  /** 展平记录（含树形子节点） */
  flattenRecords: (records: any[]) => { record: any; key: Key }[]
  /** 树形级联勾选（返回新的完整 key 列表） */
  cascadeSelect: (key: Key, record: any, checked: boolean, currentKeys: Key[]) => Key[]
  /** 当前页数据（全选范围） */
  pagedData: ComputedRef<any[]>
}

/**
 * 行选择状态：
 * - 受控 selectedRowKeys / 默认 defaultSelectedRowKeys
 * - 树形数据默认父子联动（checkStrictly 可关闭）
 * - preserveSelectedRowKeys：行移出 dataSource 后仍保留选中并缓存行数据
 */
export function useRowSelection(options: UseRowSelectionOptions) {
  const { props, treeMode, flattenRecords, cascadeSelect, pagedData } = options

  const selectedKeys = ref<Key[]>(
    props.rowSelection?.selectedRowKeys ?? props.rowSelection?.defaultSelectedRowKeys ?? [],
  )
  watch(
    () => props.rowSelection?.selectedRowKeys,
    (v) => {
      if (v) selectedKeys.value = v
    },
  )

  // preserveSelectedRowKeys：行移出 dataSource 后仍保留选中，需要缓存行数据用于回调
  const selectedRecordsCache = new Map<Key, any>()

  // 按 key 解析选中行记录（优先当前 dataSource，其次缓存）
  const resolveSelectedRows = (keys: Key[]): any[] => {
    const flat = flattenRecords(props.dataSource ?? [])
    return keys
      .map((k) => flat.find((x) => x.key === k)?.record ?? selectedRecordsCache.get(k))
      .filter((r) => r !== undefined)
  }

  const handleRowSelect = (key: Key, record: any, checked: boolean) => {
    if (!props.rowSelection) return
    let next: Key[]
    let method: 'single' | 'multiple' = 'single'

    if (props.rowSelection.type === 'radio') {
      next = checked ? [key] : []
    } else if (treeMode.value && !props.rowSelection.checkStrictly) {
      // 树形数据默认父子联动（checkStrictly 可关闭）
      next = cascadeSelect(key, record, checked, selectedKeys.value)
      method = 'multiple'
    } else {
      next = checked ? [...selectedKeys.value, key] : selectedKeys.value.filter((k) => k !== key)
      method = 'multiple'
    }

    // 缓存记录，供 preserveSelectedRowKeys 在行移出 dataSource 后回传
    selectedRecordsCache.set(key, record)

    selectedKeys.value = next
    const rows = resolveSelectedRows(next)
    props.rowSelection.onChange?.(next, rows, { type: method })
    props.rowSelection.onSelect?.(record, checked, rows, new Event('change'))
  }

  const handleSelectAll = (checked: boolean) => {
    if (!props.rowSelection) return
    // 树形数据下全选包含所有层级
    const flat = flattenRecords(pagedData.value)
    const next = checked ? flat.map((x) => x.key) : []
    selectedKeys.value = next
    const rows = flat.map((x) => x.record)
    props.rowSelection.onChange?.(next, checked ? rows : [], { type: checked ? 'all' : 'none' })
    props.rowSelection.onSelectAll?.(checked, checked ? rows : [], rows)
  }

  // 未开启 preserveSelectedRowKeys 时，选中项随行移出 dataSource 而移除
  watch(
    () => props.dataSource,
    () => {
      if (props.rowSelection?.preserveSelectedRowKeys) return
      const validKeys = new Set(flattenRecords(props.dataSource ?? []).map((x) => x.key))
      const next = selectedKeys.value.filter((k) => validKeys.has(k))
      if (next.length !== selectedKeys.value.length) {
        selectedKeys.value = next
        props.rowSelection?.onChange?.(next, resolveSelectedRows(next), { type: 'none' })
      }
    },
  )

  return { selectedKeys, handleRowSelect, handleSelectAll, resolveSelectedRows }
}
