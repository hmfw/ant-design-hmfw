import { defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Spin } from '../spin'
import { Empty } from '../empty'
import { Pagination } from '../pagination'
import { Checkbox } from '../checkbox'
import { Radio } from '../radio'
import { Dropdown } from '../dropdown'
import { FilterDropdown } from './FilterDropdown'
import { FilterOutlined, PlusOutlined, MinusOutlined } from '@hmfw/icons'
import { useVirtualScroll } from '../_internal/virtual-list'
import type {
  TableColumn,
  TableRowSelection,
  TablePaginationConfig,
  Key,
  SorterResult,
  TableCurrentDataSource,
  ExpandableConfig,
} from './interface'

export type { TableColumn, TableProps } from './interface'

// Responsive breakpoints
const BREAKPOINTS: Record<string, number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
}

export const Table = defineComponent({
  name: 'Table',
  props: {
    dataSource: { type: Array as PropType<any[]>, default: () => [] },
    columns: { type: Array as PropType<TableColumn[]>, default: () => [] },
    rowKey: [String, Function] as PropType<string | ((record: any) => Key)>,
    loading: Boolean,
    bordered: Boolean,
    size: { type: String as PropType<'default' | 'middle' | 'small'>, default: 'default' },
    scroll: Object as PropType<{
      x?: number | string
      y?: number | string
      scrollToFirstRowOnChange?: boolean
    }>,
    pagination: {
      type: [Boolean, Object] as PropType<false | TablePaginationConfig>,
      default: undefined,
    },
    rowSelection: Object as PropType<TableRowSelection<any>>,
    expandable: Object as PropType<ExpandableConfig<any>>,
    locale: Object as PropType<{ emptyText?: string }>,
    showHeader: { type: Boolean, default: true },
    sticky: [Boolean, Object] as PropType<
      boolean | { offsetHeader?: number; offsetScroll?: number; getContainer?: () => HTMLElement }
    >,
    summary: Function as PropType<(pageData: any[]) => any>,
    title: [String, Function] as PropType<string | ((currentData: any[]) => any)>,
    footer: [String, Function] as PropType<string | ((currentData: any[]) => any)>,
    onRow: Function as PropType<(record: any, index: number) => Record<string, any>>,
    onHeaderRow: Function as PropType<(columns: TableColumn[], index: number) => Record<string, any>>,
    onChange: Function as PropType<
      (pagination: any, filters: any, sorter: any, extra?: TableCurrentDataSource) => void
    >,
    classNames: Object as PropType<import('./interface').TableSemanticClassNames>,
    styles: Object as PropType<import('./interface').TableSemanticStyles>,
  },
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('table')
    const locale = useLocale()

    // 行高映射（与 CSS padding 保持一致：default=54, middle=46, small=38）
    const ROW_HEIGHT_MAP: Record<string, number> = { default: 54, middle: 46, small: 38 }
    const virtualItemHeight = computed(() => ROW_HEIGHT_MAP[props.size] ?? 54)

    // 判断是否启用虚拟滚动（scroll.y 存在且数据量 > 20）
    const virtualEnabled = computed(() => {
      return !!(props.scroll?.y && props.dataSource && props.dataSource.length > 20)
    })

    // 容器可见高度
    const containerHeight = computed(() => {
      if (!props.scroll?.y) return 400
      if (typeof props.scroll.y === 'number') return props.scroll.y
      return parseInt(props.scroll.y) || 400
    })

    // tbodyRef 作为滚动容器引用，由 useVirtualScroll 管理滚动事件
    const tbodyRef = ref<HTMLElement>()

    // Responsive breakpoint detection
    const currentBreakpoint = ref<string>('xxl')

    const updateBreakpoint = () => {
      const width = window.innerWidth
      const breakpoint =
        Object.entries(BREAKPOINTS)
          .reverse()
          .find(([_, minWidth]) => width >= minWidth)?.[0] || 'xs'
      currentBreakpoint.value = breakpoint
    }

    onMounted(() => {
      updateBreakpoint()
      window.addEventListener('resize', updateBreakpoint)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateBreakpoint)
    })

    // Filter columns by responsive breakpoint
    const responsiveColumns = computed(() => {
      return (
        props.columns?.filter((col) => {
          if (!col.responsive || col.responsive.length === 0) return true
          return col.responsive.includes(currentBreakpoint.value)
        }) ?? []
      )
    })

    // Sort state - support multiple columns
    const sortStates = ref<Array<{ key: string; order: 'ascend' | 'descend' | null; column: TableColumn }>>([])
    // Filter state
    const filterState = ref<Record<string, (string | number)[]>>({})
    const filterDropdownOpen = ref<Record<string, boolean>>({})
    // Pagination state
    const currentPage = ref(1)
    const pageSize = ref(10)

    // Initialize filter state from columns
    watch(
      () => responsiveColumns.value,
      (cols) => {
        if (!cols) return
        cols.forEach((col) => {
          const key = col.key ?? col.dataIndex ?? ''
          if (col.filteredValue !== undefined && col.filteredValue !== null) {
            filterState.value[key] = col.filteredValue as (string | number)[]
          }
        })
      },
      { immediate: true },
    )

    const getRowKey = (record: any, index: number): Key => {
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
      responsiveColumns.value.forEach((col) => {
        const key = col.key ?? col.dataIndex ?? ''
        const filterVals = filterState.value[key]
        if (filterVals?.length && col.onFilter) {
          data = data.filter((record) => filterVals.some((v) => col.onFilter!(v, record)))
        }
      })
      return data
    })

    // Sorted data - support multiple columns
    const sortedData = computed(() => {
      const data = [...filteredData.value]
      if (sortStates.value.length === 0) return data

      data.sort((a, b) => {
        for (const sortState of sortStates.value) {
          const col = sortState.column
          if (!col.sorter || !sortState.order) continue

          const sorterFn = typeof col.sorter === 'function' ? col.sorter : undefined
          if (!sorterFn) continue

          const result = sorterFn(a, b)
          if (result !== 0) {
            return sortState.order === 'descend' ? -result : result
          }
        }
        return 0
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
        showQuickJumper: cfg?.showQuickJumper,
        showSizeChanger: cfg?.showSizeChanger,
        showTotal: cfg?.showTotal,
        pageSizeOptions: cfg?.pageSizeOptions,
      }
    })

    const pagedData = computed(() => {
      if (!paginationConfig.value) return sortedData.value
      const { current, pageSize: ps } = paginationConfig.value
      const start = (current - 1) * ps
      return sortedData.value.slice(start, start + ps)
    })

    // ----------------------------------------------------------------
    // 虚拟滚动计算（使用共享 composable，O(1) 算法）
    // ----------------------------------------------------------------
    const {
      startIndex,
      endIndex,
      visibleData: virtualVisibleData,
      offsetY,
      totalHeight,
      handleScroll: onTableScroll,
    } = useVirtualScroll({
      containerRef: tbodyRef,
      data: computed(() => pagedData.value),
      itemHeight: virtualItemHeight,
      containerHeight,
      buffer: 5,
    })

    const handleSort = (col: TableColumn, event?: MouseEvent) => {
      if (!col.sorter) return

      const key = col.key ?? col.dataIndex ?? ''
      const isMultiple = event?.shiftKey || (typeof col.sorter === 'object' && 'multiple' in col.sorter)

      const existingIndex = sortStates.value.findIndex((s) => s.key === key)

      if (existingIndex >= 0) {
        const existing = sortStates.value[existingIndex]
        if (existing.order === 'ascend') {
          sortStates.value[existingIndex] = { key, order: 'descend', column: col }
        } else if (existing.order === 'descend') {
          // Remove this sort
          sortStates.value = sortStates.value.filter((_, i) => i !== existingIndex)
        }
      } else {
        const newState = { key, order: 'ascend' as const, column: col }
        if (isMultiple) {
          sortStates.value = [...sortStates.value, newState]
        } else {
          sortStates.value = [newState]
        }
      }

      const sorterResults: SorterResult[] = sortStates.value.map((s) => ({
        column: s.column,
        order: s.order,
        field: s.column.dataIndex,
        columnKey: s.key,
      }))

      const extra: TableCurrentDataSource = {
        currentDataSource: sortedData.value,
        action: 'sort',
      }

      const sorterResult = sorterResults.length === 1 ? sorterResults[0] : sorterResults
      emit('change', paginationConfig.value, filterState.value, sorterResult, extra)
      props.onChange?.(paginationConfig.value, filterState.value, sorterResult, extra)
    }

    const handlePageChange = (page: number, ps: number) => {
      currentPage.value = page
      pageSize.value = ps
      paginationConfig.value?.onChange?.(page, ps)

      const extra: TableCurrentDataSource = {
        currentDataSource: pagedData.value,
        action: 'paginate',
      }

      const sorterResults: SorterResult[] = sortStates.value.map((s) => ({
        column: s.column,
        order: s.order,
        field: s.column.dataIndex,
        columnKey: s.key,
      }))
      const sorterResult = sorterResults.length === 1 ? sorterResults[0] : sorterResults

      const updatedPagination = { ...paginationConfig.value, current: page, pageSize: ps }
      emit('change', updatedPagination, filterState.value, sorterResult, extra)
      props.onChange?.(updatedPagination, filterState.value, sorterResult, extra)
    }

    const selectedKeys = ref<Key[]>(props.rowSelection?.selectedRowKeys ?? [])
    watch(
      () => props.rowSelection?.selectedRowKeys,
      (v) => {
        if (v) selectedKeys.value = v
      },
    )

    // Expandable state
    const expandedKeys = ref<Key[]>(props.expandable?.expandedRowKeys ?? props.expandable?.defaultExpandedRowKeys ?? [])
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

    // Filter handlers
    const handleFilterConfirm = (columnKey: string, selectedKeys: Key[]) => {
      filterState.value[columnKey] = selectedKeys as (string | number)[]
      filterDropdownOpen.value[columnKey] = false // 关闭 Dropdown

      const extra: TableCurrentDataSource = {
        currentDataSource: filteredData.value,
        action: 'filter',
      }

      const sorterResults: SorterResult[] = sortStates.value.map((s) => ({
        column: s.column,
        order: s.order,
        field: s.column.dataIndex,
        columnKey: s.key,
      }))
      const sorterResult = sorterResults.length === 1 ? sorterResults[0] : sorterResults

      emit('change', paginationConfig.value, filterState.value, sorterResult, extra)
      props.onChange?.(paginationConfig.value, filterState.value, sorterResult, extra)
    }

    const handleRowSelect = (key: Key, record: any, checked: boolean) => {
      if (!props.rowSelection) return
      let next: Key[]
      let method: 'single' | 'multiple' = 'single'

      if (props.rowSelection.type === 'radio') {
        next = checked ? [key] : []
      } else {
        next = checked ? [...selectedKeys.value, key] : selectedKeys.value.filter((k) => k !== key)
        method = 'multiple'
      }

      selectedKeys.value = next
      const rows = props.dataSource?.filter((r, i) => next.includes(getRowKey(r, i))) ?? []
      props.rowSelection.onChange?.(next, rows, { type: method })
      props.rowSelection.onSelect?.(record, checked, rows, new Event('change'))
    }

    const handleSelectAll = (checked: boolean) => {
      if (!props.rowSelection) return
      const next = checked ? pagedData.value.map((r, i) => getRowKey(r, i)) : []
      selectedKeys.value = next
      const rows = checked ? [...pagedData.value] : []
      props.rowSelection.onChange?.(next, rows, { type: checked ? 'all' : 'none' })
      props.rowSelection.onSelectAll?.(checked, rows, pagedData.value)
    }

    return () => {
      const isEmpty = pagedData.value.length === 0
      const showSelection = !!props.rowSelection
      const isRadio = props.rowSelection?.type === 'radio'
      const hasExpandable = !!props.expandable?.expandedRowRender

      const allSelected =
        pagedData.value.length > 0 && pagedData.value.every((r, i) => selectedKeys.value.includes(getRowKey(r, i)))
      const someSelected = pagedData.value.some((r, i) => selectedKeys.value.includes(getRowKey(r, i)))

      const colSpan = (responsiveColumns.value.length ?? 0) + (showSelection ? 1 : 0) + (hasExpandable ? 1 : 0)

      // Sticky 配置
      const stickyConfig =
        typeof props.sticky === 'object'
          ? props.sticky
          : props.sticky
            ? { offsetHeader: 0, offsetScroll: 0 }
            : undefined

      const theadStyle: CSSProperties = stickyConfig
        ? {
            position: 'sticky',
            top: `${stickyConfig.offsetHeader || 0}px`,
            zIndex: 3,
          }
        : {}

      const tableEl = (
        <div
          class={cls(
            prefixCls,
            `${prefixCls}-${props.size}`,
            {
              [`${prefixCls}-bordered`]: props.bordered,
              [`${prefixCls}-loading`]: props.loading,
              [`${prefixCls}-scroll-horizontal`]: !!props.scroll?.x,
              [`${prefixCls}-sticky`]: !!stickyConfig,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
          role="region"
          aria-label="Data table"
        >
          {props.title && (
            <div class={`${prefixCls}-title`}>
              {typeof props.title === 'function' ? props.title(sortedData.value) : props.title}
            </div>
          )}
          <div class={`${prefixCls}-container`}>
            <div
              ref={tbodyRef}
              class={`${prefixCls}-content`}
              style={{
                ...(props.scroll?.x ? { overflowX: 'auto' } : {}),
                ...(virtualEnabled.value
                  ? {
                      overflowY: 'auto',
                      maxHeight: typeof props.scroll?.y === 'number' ? `${props.scroll.y}px` : props.scroll?.y,
                    }
                  : {}),
              }}
              onScroll={onTableScroll}
              role="presentation"
            >
              <table
                role="table"
                aria-rowcount={pagedData.value.length}
                aria-colcount={colSpan}
                style={
                  props.scroll?.x
                    ? {
                        minWidth: typeof props.scroll.x === 'number' ? `${props.scroll.x}px` : props.scroll.x,
                      }
                    : {}
                }
              >
                {props.showHeader && (
                  <thead
                    class={cls(`${prefixCls}-thead`, props.classNames?.header)}
                    role="rowgroup"
                    style={{ ...theadStyle, ...props.styles?.header }}
                  >
                    <tr {...(props.onHeaderRow?.(responsiveColumns.value ?? [], 0) ?? {})} role="row">
                      {hasExpandable && (
                        <th
                          class={`${prefixCls}-cell ${prefixCls}-expand-icon-col`}
                          style={{ width: '48px' }}
                          role="columnheader"
                        ></th>
                      )}
                      {showSelection && (
                        <th
                          class={`${prefixCls}-cell ${prefixCls}-selection-column`}
                          role="columnheader"
                          aria-label="Row selection"
                        >
                          {!isRadio && (
                            <Checkbox
                              checked={allSelected}
                              indeterminate={someSelected && !allSelected}
                              onChange={(checked) => handleSelectAll(checked)}
                            />
                          )}
                        </th>
                      )}
                      {responsiveColumns.value.map((col) => {
                        const key = col.key ?? col.dataIndex ?? ''
                        const sortState = sortStates.value.find((s) => s.key === key)
                        const isSorted = !!sortState
                        const fixedLeft = col.fixed === 'left'
                        const fixedRight = col.fixed === 'right'
                        const hasFilter = col.filters && col.filters.length > 0
                        const isFiltered = filterState.value[key]?.length > 0

                        return (
                          <th
                            key={key}
                            scope="col"
                            role="columnheader"
                            aria-sort={
                              isSorted
                                ? sortState.order === 'ascend'
                                  ? 'ascending'
                                  : 'descending'
                                : col.sorter
                                  ? 'none'
                                  : undefined
                            }
                            tabindex={col.sorter ? 0 : undefined}
                            onKeydown={(e) => {
                              if (col.sorter && (e.key === 'Enter' || e.key === ' ')) {
                                e.preventDefault()
                                handleSort(col, e as any)
                              }
                            }}
                            class={cls(`${prefixCls}-cell`, {
                              [`${prefixCls}-column-sort`]: isSorted,
                              [`${prefixCls}-column-has-sorters`]: !!col.sorter,
                              [`${prefixCls}-cell-fix-left`]: fixedLeft,
                              [`${prefixCls}-cell-fix-right`]: fixedRight,
                            })}
                            style={{
                              width: col.width
                                ? typeof col.width === 'number'
                                  ? `${col.width}px`
                                  : col.width
                                : undefined,
                              textAlign: col.align ?? 'left',
                            }}
                            onClick={(e) => col.sorter && handleSort(col, e)}
                          >
                            <div class={`${prefixCls}-column-title`}>
                              {col.title}
                              {col.sorter && (
                                <span class={`${prefixCls}-column-sorter`}>
                                  <span
                                    class={cls(`${prefixCls}-column-sorter-up`, {
                                      active: isSorted && sortState?.order === 'ascend',
                                    })}
                                  >
                                    ▲
                                  </span>
                                  <span
                                    class={cls(`${prefixCls}-column-sorter-down`, {
                                      active: isSorted && sortState?.order === 'descend',
                                    })}
                                  >
                                    ▼
                                  </span>
                                </span>
                              )}
                              {hasFilter && (
                                <Dropdown
                                  trigger={['click']}
                                  open={filterDropdownOpen.value[key]}
                                  onUpdate:open={(v) => (filterDropdownOpen.value[key] = v)}
                                  v-slots={{
                                    default: () => (
                                      <span
                                        class={cls(`${prefixCls}-filter-trigger`, {
                                          active: isFiltered,
                                        })}
                                        onClick={(e) => {
                                          // 阻止冒泡到表头触发排序；由受控状态自行切换开关
                                          e.stopPropagation()
                                          filterDropdownOpen.value[key] = !filterDropdownOpen.value[key]
                                        }}
                                      >
                                        <FilterOutlined />
                                      </span>
                                    ),
                                    overlay: () => (
                                      <FilterDropdown
                                        prefixCls={prefixCls}
                                        filters={col.filters!}
                                        filteredValue={filterState.value[key] || []}
                                        filterMultiple={col.filterMultiple ?? true}
                                        locale={locale.value.Table}
                                        onConfirm={(keys) => handleFilterConfirm(key, keys)}
                                      />
                                    ),
                                  }}
                                />
                              )}
                            </div>
                          </th>
                        )
                      })}
                    </tr>
                  </thead>
                )}
                <tbody
                  class={cls(`${prefixCls}-tbody`, props.classNames?.body)}
                  role="rowgroup"
                  style={props.styles?.body}
                >
                  {isEmpty ? (
                    <tr class={`${prefixCls}-placeholder`} role="row">
                      <td colspan={colSpan} role="cell">
                        <Empty description={props.locale?.emptyText ?? locale.value.Table.emptyText} />
                      </td>
                    </tr>
                  ) : (
                    <>
                      {/* 虚拟滚动：上部 spacer（撑开已滚动过的高度） */}
                      {virtualEnabled.value && offsetY.value > 0 && (
                        <tr style={{ height: `${offsetY.value}px` }} aria-hidden="true">
                          <td colspan={colSpan}></td>
                        </tr>
                      )}

                      {/* 统一的数据行渲染（虚拟 / 非虚拟共用） */}
                      {(virtualEnabled.value ? virtualVisibleData.value : pagedData.value).flatMap(
                        (record: any, visibleIndex: number) => {
                          const rowIndex = virtualEnabled.value ? startIndex.value + visibleIndex : visibleIndex
                          const rowKey = getRowKey(record, rowIndex)
                          const isSelected = selectedKeys.value.includes(rowKey)
                          const isExpanded = expandedKeys.value.includes(rowKey)

                          const rows = [
                            <tr
                              key={rowKey}
                              role="row"
                              aria-selected={showSelection ? isSelected : undefined}
                              aria-expanded={hasExpandable ? isExpanded : undefined}
                              class={cls(
                                `${prefixCls}-row`,
                                {
                                  [`${prefixCls}-row-selected`]: isSelected,
                                },
                                props.classNames?.row,
                              )}
                              style={props.styles?.row}
                              {...(props.onRow?.(record, rowIndex) ?? {})}
                            >
                              {hasExpandable && (
                                <td class={`${prefixCls}-cell ${prefixCls}-expand-icon-cell`} role="cell">
                                  <button
                                    type="button"
                                    class={cls(`${prefixCls}-expand-icon`, {
                                      [`${prefixCls}-expand-icon-expanded`]: isExpanded,
                                    })}
                                    onClick={() => handleExpand(!isExpanded, record)}
                                    aria-label={isExpanded ? 'Collapse row' : 'Expand row'}
                                    aria-expanded={isExpanded}
                                  >
                                    {isExpanded ? <MinusOutlined /> : <PlusOutlined />}
                                  </button>
                                </td>
                              )}
                              {showSelection && (
                                <td class={`${prefixCls}-cell ${prefixCls}-selection-column`} role="cell">
                                  {isRadio ? (
                                    <Radio
                                      checked={isSelected}
                                      onChange={(checked) => handleRowSelect(rowKey, record, checked)}
                                    />
                                  ) : (
                                    <Checkbox
                                      checked={isSelected}
                                      onChange={(checked) => handleRowSelect(rowKey, record, checked)}
                                      {...(props.rowSelection?.getCheckboxProps?.(record) ?? {})}
                                    />
                                  )}
                                </td>
                              )}
                              {responsiveColumns.value.map((col) => {
                                const colKey = col.key ?? col.dataIndex ?? ''
                                const value = getCellValue(record, col)
                                const content = col.render ? col.render(value, record, rowIndex) : value
                                const fixedLeft = col.fixed === 'left'
                                const fixedRight = col.fixed === 'right'
                                return (
                                  <td
                                    key={colKey}
                                    role="cell"
                                    class={cls(
                                      `${prefixCls}-cell`,
                                      {
                                        [`${prefixCls}-cell-ellipsis`]: col.ellipsis,
                                        [`${prefixCls}-cell-fix-left`]: fixedLeft,
                                        [`${prefixCls}-cell-fix-right`]: fixedRight,
                                      },
                                      props.classNames?.cell,
                                    )}
                                    style={{ textAlign: col.align ?? 'left', ...props.styles?.cell }}
                                  >
                                    {content}
                                  </td>
                                )
                              })}
                            </tr>,
                          ]

                          // Add expanded row if applicable
                          if (hasExpandable && isExpanded && props.expandable?.expandedRowRender) {
                            rows.push(
                              <tr key={`${rowKey}-expanded`} class={`${prefixCls}-expanded-row`} role="row">
                                <td colspan={colSpan} class={`${prefixCls}-cell`} role="cell">
                                  {props.expandable.expandedRowRender(record, rowIndex, 0, isExpanded)}
                                </td>
                              </tr>,
                            )
                          }

                          return rows
                        },
                      )}

                      {/* 虚拟滚动：下部 spacer（撑开剩余未渲染的高度） */}
                      {virtualEnabled.value &&
                        (() => {
                          const remainingHeight =
                            totalHeight.value -
                            offsetY.value -
                            virtualVisibleData.value.length * virtualItemHeight.value
                          return remainingHeight > 0 ? (
                            <tr style={{ height: `${remainingHeight}px` }} aria-hidden="true">
                              <td colspan={colSpan}></td>
                            </tr>
                          ) : null
                        })()}
                    </>
                  )}
                </tbody>
                {props.summary && !isEmpty && (
                  <tfoot class={`${prefixCls}-summary`}>{props.summary(pagedData.value)}</tfoot>
                )}
              </table>
            </div>
          </div>
          {props.footer && (
            <div class={cls(`${prefixCls}-footer`, props.classNames?.footer)} style={props.styles?.footer}>
              {typeof props.footer === 'function' ? props.footer(sortedData.value) : props.footer}
            </div>
          )}
          {paginationConfig.value && !isEmpty && (
            <div
              class={cls(`${prefixCls}-pagination`, `${prefixCls}-pagination-right`, props.classNames?.pagination)}
              style={props.styles?.pagination}
            >
              <Pagination
                total={paginationConfig.value.total}
                pageSize={paginationConfig.value.pageSize}
                current={paginationConfig.value.current}
                showQuickJumper={paginationConfig.value.showQuickJumper}
                showSizeChanger={paginationConfig.value.showSizeChanger}
                showTotal={paginationConfig.value.showTotal}
                pageSizeOptions={paginationConfig.value.pageSizeOptions}
                onChange={handlePageChange}
              />
            </div>
          )}
        </div>
      )

      if (props.loading) {
        return (
          <div style={{ position: 'relative' }}>
            <Spin
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
            />
            <div style={{ opacity: 0.5 }}>{tableEl}</div>
          </div>
        )
      }

      return tableEl
    }
  },
})
