import { computed, ref, type ComputedRef } from 'vue'
import type { CompareFn, SorterResult, SortOrder, TableColumn } from '../interface'

export interface UseTableSortOptions {
  /** 参与渲染的列（已按响应式断点过滤） */
  responsiveColumns: ComputedRef<TableColumn[]>
  /** 排序发生变化时回调（用于抛出 change 事件） */
  onSortChange: (sorter: SorterResult | SorterResult[]) => void
  /** 排序后滚动到表格顶部（scroll.scrollToFirstRowOnChange） */
  scrollToTop: () => void
}

export type SortState = { key: string; order: SortOrder; column: TableColumn }

export const getColumnSortKey = (col: TableColumn) => col.key ?? col.dataIndex ?? ''

// 提取列的比较函数：支持 CompareFn 与 { compare, multiple } 对象形式
export const getSorterFn = (col: TableColumn): CompareFn | undefined => {
  if (typeof col.sorter === 'function') return col.sorter
  if (col.sorter && typeof col.sorter === 'object') return col.sorter.compare
  return undefined
}

// 排序方向循环序列
const getSortDirections = (col: TableColumn): SortOrder[] => col.sortDirections ?? ['ascend', 'descend', null]

/**
 * 排序状态：
 * - 受控排序（列级 sortOrder）与非受控状态（点击 / defaultSortOrder）合并
 * - sortDirections 控制点击方向循环
 * - sorter 支持函数与 { compare, multiple } 对象形式（multiple 参与多列排序）
 */
export function useTableSort(options: UseTableSortOptions) {
  const { responsiveColumns, onSortChange, scrollToTop } = options

  // 受控排序状态：由列的 sortOrder 派生（sortOrder 非 undefined 即为受控列）
  const controlledSortStates = computed<SortState[]>(() =>
    responsiveColumns.value
      .filter((col) => col.sortOrder)
      .map((col) => ({ key: getColumnSortKey(col), order: col.sortOrder!, column: col })),
  )

  // 非受控排序状态：由点击与 defaultSortOrder 维护
  const internalSortStates = ref<SortState[]>(
    responsiveColumns.value
      .filter((col) => col.sortOrder === undefined && col.defaultSortOrder)
      .map((col) => ({ key: getColumnSortKey(col), order: col.defaultSortOrder!, column: col })),
  )

  // 实际生效的排序状态 = 受控列 + 非受控列（受控列优先）
  const sortStates = computed<SortState[]>(() => {
    const controlledKeys = new Set(
      responsiveColumns.value.filter((col) => col.sortOrder !== undefined).map(getColumnSortKey),
    )
    return [...controlledSortStates.value, ...internalSortStates.value.filter((s) => !controlledKeys.has(s.key))]
  })

  const handleSort = (col: TableColumn, event?: MouseEvent) => {
    if (!col.sorter) return

    const key = getColumnSortKey(col)
    const directions = getSortDirections(col)
    // 多列排序：Shift 点击，或 sorter 对象形式声明 multiple
    const isMultiple = !!event?.shiftKey || (typeof col.sorter === 'object' && !!col.sorter.multiple)

    // 当前生效方向（受控列取 props，非受控列取内部状态）
    const currentOrder = sortStates.value.find((s) => s.key === key)?.order ?? null
    const existingIndex = internalSortStates.value.findIndex((s) => s.key === key)
    const replaced: SortState = { key, order: null, column: col }

    let nextStates: SortState[]
    if (currentOrder) {
      // 已排序：按 sortDirections 循环到下一方向，越过末尾则清除该列排序
      const dirIndex = directions.indexOf(currentOrder)
      const nextOrder = dirIndex >= 0 && dirIndex < directions.length - 1 ? directions[dirIndex + 1] : null
      if (nextOrder == null) {
        nextStates = internalSortStates.value.filter((s) => s.key !== key)
      } else {
        replaced.order = nextOrder
        if (existingIndex >= 0) {
          nextStates = internalSortStates.value.slice()
          nextStates[existingIndex] = replaced
        } else {
          // 受控列且内部无记录：意图仅用于事件回调
          nextStates = isMultiple ? [...internalSortStates.value, replaced] : [replaced]
        }
      }
    } else {
      const firstOrder = directions.find((d) => d != null) ?? 'ascend'
      replaced.order = firstOrder
      nextStates = isMultiple ? [...internalSortStates.value, replaced] : [replaced]
    }

    // 受控列（sortOrder 非 undefined）不改内部状态，仅抛出 change 交由外部更新
    if (col.sortOrder === undefined) {
      internalSortStates.value = nextStates
    }

    // 事件回调中的排序结果按「点击后的意图状态」计算
    const controlledKeys = new Set(controlledSortStates.value.map((s) => s.key))
    const effectiveStates: SortState[] = nextStates.filter((s) => !controlledKeys.has(s.key))
    controlledSortStates.value.forEach((s) => {
      if (s.key === key) {
        const intent = nextStates.find((n) => n.key === key)
        if (intent) effectiveStates.push(intent)
      } else {
        effectiveStates.push(s)
      }
    })

    const sorterResults: SorterResult[] = effectiveStates.map((s) => ({
      column: s.column,
      order: s.order,
      field: s.column.dataIndex,
      columnKey: s.key,
    }))

    scrollToTop()
    onSortChange(sorterResults.length === 1 ? sorterResults[0] : sorterResults)
  }

  return { sortStates, handleSort }
}
