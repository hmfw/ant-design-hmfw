import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Spin } from '../spin'
import { Empty } from '../empty'
import { Pagination } from '../pagination'

export interface TableColumn<T = any> {
  key?: string
  dataIndex?: string
  title?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sorter?: boolean | ((a: T, b: T) => number)
  sortOrder?: 'ascend' | 'descend' | null
  filters?: { text: string; value: string | number }[]
  filteredValue?: (string | number)[]
  onFilter?: (value: string | number, record: T) => boolean
  render?: (value: any, record: T, index: number) => any
  ellipsis?: boolean
}

export interface TableProps<T = any> {
  dataSource?: T[]
  columns?: TableColumn<T>[]
  rowKey?: string | ((record: T) => string)
  loading?: boolean
  bordered?: boolean
  size?: 'default' | 'middle' | 'small'
  scroll?: { x?: number | string; y?: number | string }
  pagination?: false | { pageSize?: number; current?: number; total?: number; onChange?: (page: number, pageSize: number) => void }
  rowSelection?: { selectedRowKeys?: (string | number)[]; onChange?: (keys: (string | number)[], rows: T[]) => void; type?: 'checkbox' | 'radio' }
  expandable?: { expandedRowKeys?: string[]; onExpand?: (expanded: boolean, record: T) => void; expandedRowRender?: (record: T) => any }
  locale?: { emptyText?: string }
  showHeader?: boolean
  sticky?: boolean
  onChange?: (pagination: any, filters: any, sorter: any) => void
}

export const Table = defineComponent({
  name: 'Table',
  props: {
    dataSource: { type: Array as PropType<any[]>, default: () => [] },
    columns: { type: Array as PropType<TableColumn[]>, default: () => [] },
    rowKey: [String, Function] as PropType<string | ((record: any) => string)>,
    loading: Boolean,
    bordered: Boolean,
    size: { type: String as PropType<'default' | 'middle' | 'small'>, default: 'default' },
    scroll: Object as PropType<{ x?: number | string; y?: number | string }>,
    pagination: { type: [Boolean, Object] as PropType<false | any>, default: undefined },
    rowSelection: Object as PropType<any>,
    expandable: Object as PropType<any>,
    locale: Object as PropType<{ emptyText?: string }>,
    showHeader: { type: Boolean, default: true },
    sticky: Boolean,
    onChange: Function as PropType<(pagination: any, filters: any, sorter: any) => void>,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('table')
    const locale = useLocale()

    // Sort state
    const sortState = ref<{ key: string; order: 'ascend' | 'descend' | null }>({ key: '', order: null })
    // Filter state
    const filterState = ref<Record<string, (string | number)[]>>({})
    // Pagination state
    const currentPage = ref(1)
    const pageSize = ref(10)

    // Initialize filter state from columns
    watch(() => props.columns, (cols) => {
      if (!cols) return
      cols.forEach((col) => {
        const key = col.key ?? col.dataIndex ?? ''
        if (col.filteredValue !== undefined) {
          filterState.value[key] = col.filteredValue
        }
      })
    }, { immediate: true })

    const getRowKey = (record: any, index: number): string => {
      if (typeof props.rowKey === 'function') return props.rowKey(record)
      if (typeof props.rowKey === 'string') return record[props.rowKey]
      return record.key ?? String(index)
    }

    const getCellValue = (record: any, col: TableColumn): any => {
      if (col.dataIndex) return record[col.dataIndex]
      return undefined
    }

    // Filtered data
    const filteredData = computed(() => {
      let data = [...(props.dataSource ?? [])]
      props.columns?.forEach((col) => {
        const key = col.key ?? col.dataIndex ?? ''
        const filterVals = filterState.value[key]
        if (filterVals?.length && col.onFilter) {
          data = data.filter((record) =>
            filterVals.some((v) => col.onFilter!(v, record)),
          )
        }
      })
      return data
    })

    // Sorted data
    const sortedData = computed(() => {
      const data = [...filteredData.value]
      if (!sortState.value.key || !sortState.value.order) return data
      const col = props.columns?.find((c) => (c.key ?? c.dataIndex) === sortState.value.key)
      if (!col?.sorter) return data
      const sorterFn = typeof col.sorter === 'function' ? col.sorter : undefined
      if (!sorterFn) return data
      data.sort((a, b) => {
        const result = sorterFn(a, b)
        return sortState.value.order === 'descend' ? -result : result
      })
      return data
    })

    // Paginated data
    const paginationConfig = computed(() => {
      if (props.pagination === false) return null
      const cfg = typeof props.pagination === 'object' ? props.pagination : {}
      return {
        pageSize: cfg?.pageSize ?? pageSize.value,
        current: cfg?.current ?? currentPage.value,
        total: cfg?.total ?? sortedData.value.length,
        onChange: cfg?.onChange,
      }
    })

    const pagedData = computed(() => {
      if (!paginationConfig.value) return sortedData.value
      const { current, pageSize: ps } = paginationConfig.value
      const start = (current - 1) * ps
      return sortedData.value.slice(start, start + ps)
    })

    const handleSort = (col: TableColumn) => {
      if (!col.sorter) return
      const key = col.key ?? col.dataIndex ?? ''
      if (sortState.value.key !== key) {
        sortState.value = { key, order: 'ascend' }
      } else if (sortState.value.order === 'ascend') {
        sortState.value = { key, order: 'descend' }
      } else {
        sortState.value = { key: '', order: null }
      }
      emit('change', paginationConfig.value, filterState.value, sortState.value)
    }

    const handlePageChange = (page: number, ps: number) => {
      currentPage.value = page
      pageSize.value = ps
      paginationConfig.value?.onChange?.(page, ps)
      emit('change', { ...paginationConfig.value, current: page, pageSize: ps }, filterState.value, sortState.value)
    }

    const selectedKeys = ref<(string | number)[]>(props.rowSelection?.selectedRowKeys ?? [])
    watch(() => props.rowSelection?.selectedRowKeys, (v) => { if (v) selectedKeys.value = v })

    const handleRowSelect = (key: string | number, _record: any, checked: boolean) => {
      if (!props.rowSelection) return
      let next: (string | number)[]
      if (props.rowSelection.type === 'radio') {
        next = checked ? [key] : []
      } else {
        next = checked
          ? [...selectedKeys.value, key]
          : selectedKeys.value.filter((k) => k !== key)
      }
      selectedKeys.value = next
      const rows = props.dataSource?.filter((r, i) => next.includes(getRowKey(r, i))) ?? []
      props.rowSelection.onChange?.(next, rows)
    }

    const handleSelectAll = (checked: boolean) => {
      if (!props.rowSelection) return
      const next = checked ? pagedData.value.map((r, i) => getRowKey(r, i)) : []
      selectedKeys.value = next
      const rows = checked ? [...pagedData.value] : []
      props.rowSelection.onChange?.(next, rows)
    }

    return () => {
      const isEmpty = pagedData.value.length === 0
      const showSelection = !!props.rowSelection
      const isRadio = props.rowSelection?.type === 'radio'

      const allSelected = pagedData.value.length > 0 &&
        pagedData.value.every((r, i) => selectedKeys.value.includes(getRowKey(r, i)))
      const someSelected = pagedData.value.some((r, i) => selectedKeys.value.includes(getRowKey(r, i)))

      const tableEl = (
        <div class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-bordered`]: props.bordered,
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-scroll-horizontal`]: !!props.scroll?.x,
        })}>
          <div class={`${prefixCls}-container`}>
            <div
              class={`${prefixCls}-content`}
              style={props.scroll?.x ? { overflowX: 'auto' } : {}}
            >
              <table style={props.scroll?.x ? { minWidth: typeof props.scroll.x === 'number' ? `${props.scroll.x}px` : props.scroll.x } : {}}>
                {props.showHeader && (
                  <thead class={`${prefixCls}-thead`}>
                    <tr>
                      {showSelection && (
                        <th class={`${prefixCls}-cell ${prefixCls}-selection-column`}>
                          {!isRadio && (
                            <input
                              type="checkbox"
                              checked={allSelected}
                              indeterminate={someSelected && !allSelected}
                              onChange={(e) => handleSelectAll((e.target as HTMLInputElement).checked)}
                            />
                          )}
                        </th>
                      )}
                      {props.columns?.map((col) => {
                        const key = col.key ?? col.dataIndex ?? ''
                        const isSorted = sortState.value.key === key
                        return (
                          <th
                            key={key}
                            scope="col"
                            aria-sort={isSorted ? (sortState.value.order === 'ascend' ? 'ascending' : 'descending') : (col.sorter ? 'none' : undefined)}
                            class={cls(`${prefixCls}-cell`, {
                              [`${prefixCls}-column-sort`]: isSorted,
                              [`${prefixCls}-column-has-sorters`]: !!col.sorter,
                            })}
                            style={{
                              width: col.width ? (typeof col.width === 'number' ? `${col.width}px` : col.width) : undefined,
                              textAlign: col.align ?? 'left',
                            }}
                            onClick={() => handleSort(col)}
                          >
                            <div class={`${prefixCls}-column-title`}>
                              {col.title}
                              {col.sorter && (
                                <span class={`${prefixCls}-column-sorter`}>
                                  <span class={cls(`${prefixCls}-column-sorter-up`, { active: isSorted && sortState.value.order === 'ascend' })}>▲</span>
                                  <span class={cls(`${prefixCls}-column-sorter-down`, { active: isSorted && sortState.value.order === 'descend' })}>▼</span>
                                </span>
                              )}
                            </div>
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                )}
                <tbody class={`${prefixCls}-tbody`}>
                  {isEmpty ? (
                    <tr class={`${prefixCls}-placeholder`}>
                      <td colspan={(props.columns?.length ?? 0) + (showSelection ? 1 : 0)}>
                        <Empty description={props.locale?.emptyText ?? locale.value.Table.emptyText} />
                      </td>
                    </tr>
                  ) : (
                    pagedData.value.map((record, rowIndex) => {
                      const rowKey = getRowKey(record, rowIndex)
                      const isSelected = selectedKeys.value.includes(rowKey)
                      return (
                        <tr
                          key={rowKey}
                          class={cls(`${prefixCls}-row`, {
                            [`${prefixCls}-row-selected`]: isSelected,
                          })}
                        >
                          {showSelection && (
                            <td class={`${prefixCls}-cell ${prefixCls}-selection-column`}>
                              <input
                                type={isRadio ? 'radio' : 'checkbox'}
                                checked={isSelected}
                                onChange={(e) => handleRowSelect(rowKey, record, (e.target as HTMLInputElement).checked)}
                              />
                            </td>
                          )}
                          {props.columns?.map((col) => {
                            const colKey = col.key ?? col.dataIndex ?? ''
                            const value = getCellValue(record, col)
                            const content = col.render ? col.render(value, record, rowIndex) : value
                            return (
                              <td
                                key={colKey}
                                class={cls(`${prefixCls}-cell`, {
                                  [`${prefixCls}-cell-ellipsis`]: col.ellipsis,
                                })}
                                style={{ textAlign: col.align ?? 'left' }}
                              >
                                {content}
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {paginationConfig.value && !isEmpty && (
            <div class={`${prefixCls}-pagination ${prefixCls}-pagination-right`}>
              <Pagination
                total={paginationConfig.value.total}
                pageSize={paginationConfig.value.pageSize}
                current={paginationConfig.value.current}
                onChange={handlePageChange}
              />
            </div>
          )}
        </div>
      )

      if (props.loading) {
        return (
          <div style={{ position: 'relative' }}>
            <Spin style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} />
            <div style={{ opacity: 0.5 }}>{tableEl}</div>
          </div>
        )
      }

      return tableEl
    }
  },
})
