import { defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import type { ComponentSize } from '../config-provider'
import { cls } from '../_utils/cls'
import { Spin } from '../spin'
import { Empty } from '../empty'
import { Pagination } from '../pagination'
import { Checkbox } from '../checkbox'
import { Radio } from '../radio'
import { TableHeader } from './TableHeader'
import { PlusOutlined, MinusOutlined } from '@hmfw/icons'
import { useVirtualScroll } from '../_internal/virtual-list'
import { useHorizontalScroll, type StickyConfig } from './composables/useHorizontalScroll'
import { useTreeData } from './composables/useTreeData'
import { useRowSelection } from './composables/useRowSelection'
import { useTableSort, getSorterFn } from './composables/useTableSort'
import type {
  TableColumn,
  TableRowSelection,
  TablePaginationConfig,
  Key,
  TableLocale,
  SorterResult,
  TableCurrentDataSource,
  ExpandableConfig,
  TableProps,
  TableSemanticClassNames,
  TableSemanticStyles,
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

const tableProps = {
  dataSource: { type: Array as PropType<any[]>, default: () => [] },
  columns: { type: Array as PropType<TableColumn[]>, default: () => [] },
  rowKey: { type: [String, Function] as PropType<string | ((record: any) => Key)>, default: undefined },
  loading: { type: Boolean, default: false },
  bordered: { type: Boolean, default: false },
  size: { type: String as PropType<ComponentSize>, default: 'default' },
  scroll: {
    type: Object as PropType<{
      x?: number | string
      y?: number | string
      scrollToFirstRowOnChange?: boolean
    }>,
    default: undefined,
  },
  pagination: {
    type: [Boolean, Object] as PropType<false | TablePaginationConfig>,
    default: undefined,
  },
  rowSelection: { type: Object as PropType<TableRowSelection<any>>, default: undefined },
  expandable: { type: Object as PropType<ExpandableConfig<any>>, default: undefined },
  locale: { type: Object as PropType<TableLocale>, default: undefined },
  showHeader: { type: Boolean, default: true },
  sticky: {
    type: [Boolean, Object] as PropType<
      boolean | { offsetHeader?: number; offsetScroll?: number; getContainer?: () => HTMLElement }
    >,
    default: undefined,
  },
  summary: { type: Function as PropType<(pageData: any[]) => any>, default: undefined },
  title: { type: [String, Function] as PropType<string | ((currentData: any[]) => any)>, default: undefined },
  footer: { type: [String, Function] as PropType<string | ((currentData: any[]) => any)>, default: undefined },
  rowClassName: {
    type: [String, Function] as PropType<string | ((record: any, index: number) => string)>,
    default: undefined,
  },
  onRow: { type: Function as PropType<(record: any, index: number) => Record<string, any>>, default: undefined },
  onHeaderRow: {
    type: Function as PropType<(columns: TableColumn[], index: number) => Record<string, any>>,
    default: undefined,
  },
  onChange: {
    type: Function as PropType<(pagination: any, filters: any, sorter: any, extra?: TableCurrentDataSource) => void>,
    default: undefined,
  },
  classNames: { type: Object as PropType<TableSemanticClassNames>, default: undefined },
  styles: { type: Object as PropType<TableSemanticStyles>, default: undefined },
} satisfies Record<keyof TableProps, any>

export const Table = defineComponent({
  name: 'Table',
  props: tableProps,
  emits: ['change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('table')
    const locale = useLocale()
    // 组件级 locale 覆盖全局语言包中 Table 命名空间的文案
    const tableLocale = computed(() => ({ ...locale.value.Table, ...props.locale }))

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
    // sticky 模式下独立的表头容器（横向滚动需与表体同步）
    const stickyHeaderRef = ref<HTMLElement>()

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

    // ---------------- 排序：受控 sortOrder / defaultSortOrder / sortDirections / 多列排序 ----------------
    // 回调内引用的 sortedData / paginationConfig / filterState 声明在后，均在事件触发时求值
    const { sortStates, handleSort } = useTableSort({
      responsiveColumns,
      scrollToTop: () => scrollToTopIfNeeded(),
      onSortChange: (sorterResult) => {
        const extra: TableCurrentDataSource = {
          currentDataSource: sortedData.value,
          action: 'sort',
        }
        emit('change', paginationConfig.value, filterState.value, sorterResult, extra)
      },
    })

    // Filter state
    const filterState = ref<Record<string, (string | number)[]>>({})
    const filterDropdownOpen = ref<Record<string, boolean>>({})
    // Pagination state
    const paginationCfg = computed<TablePaginationConfig>(() =>
      typeof props.pagination === 'object' && props.pagination ? props.pagination : {},
    )
    const currentPage = ref(paginationCfg.value.defaultCurrent ?? 1)
    const pageSize = ref(paginationCfg.value.defaultPageSize ?? 10)

    // Initialize filter state from columns
    watch(
      () => responsiveColumns.value,
      (cols) => {
        if (!cols) return
        cols.forEach((col) => {
          const key = col.key ?? col.dataIndex ?? ''
          if (col.filteredValue !== undefined && col.filteredValue !== null) {
            filterState.value[key] = col.filteredValue as (string | number)[]
          } else if (
            col.defaultFilteredValue !== undefined &&
            col.defaultFilteredValue !== null &&
            filterState.value[key] === undefined
          ) {
            // 默认筛选值仅在首次（未被受控值或用户操作占据时）写入
            filterState.value[key] = col.defaultFilteredValue as (string | number)[]
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
          if (!sortState.order) continue

          const sorterFn = getSorterFn(col)
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
      const cfg = paginationCfg.value
      return {
        pageSize: cfg.pageSize ?? pageSize.value,
        current: cfg.current ?? currentPage.value,
        total: cfg.total ?? sortedData.value.length,
        onChange: cfg.onChange,
        onShowSizeChange: cfg.onShowSizeChange,
        showQuickJumper: cfg.showQuickJumper,
        showSizeChanger: cfg.showSizeChanger,
        showTotal: cfg.showTotal,
        pageSizeOptions: cfg.pageSizeOptions,
        size: cfg.size,
        simple: cfg.simple,
        disabled: cfg.disabled,
        hideOnSinglePage: cfg.hideOnSinglePage,
      }
    })

    // 分页位置：position 首项决定上下与水平对齐（默认 bottomRight）
    const paginationPlacement = computed(() => {
      const pos = paginationCfg.value.position?.[0] ?? 'bottomRight'
      return {
        top: pos.startsWith('top'),
        align: pos.endsWith('Left') ? 'left' : pos.endsWith('Center') ? 'center' : 'right',
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

    // scrollToFirstRowOnChange：分页/排序/筛选变化后滚动回表格顶部
    const scrollToTopIfNeeded = () => {
      if (props.scroll?.scrollToFirstRowOnChange && tbodyRef.value) {
        tbodyRef.value.scrollTop = 0
      }
    }

    // ----------------------------------------------------------------
    // 横向滚动辅助：固定列阴影（ping）与吸底横向滚动条（sticky.offsetScroll）
    // ----------------------------------------------------------------
    // ---------------- 横向滚动：固定列阴影（ping）与吸底滚动条（sticky.offsetScroll） ----------------
    // Sticky 配置归一化：true → 默认偏移；对象 → 原样
    const stickyConfig = computed<StickyConfig | undefined>(() => {
      if (typeof props.sticky === 'object' && props.sticky) return props.sticky
      return props.sticky ? { offsetHeader: 0, offsetScroll: 0 } : undefined
    })

    const {
      pingLeft,
      pingRight,
      stickyBarVisible,
      stickyBarWrapWidth,
      stickyBarThumbWidth,
      stickyBarThumbLeft,
      stickyBarDragging,
      onStickyBarMousedown,
      updateScrollState,
    } = useHorizontalScroll({
      tbodyRef,
      stickyConfig,
      scroll: computed(() => props.scroll),
      dataSource: computed(() => props.dataSource),
      columns: computed(() => props.columns),
    })

    // 内容区滚动：虚拟滚动 + 横向滚动状态 + 同步吸顶表头的横向位置
    const handleContentScroll = (e: Event) => {
      onTableScroll(e)
      updateScrollState()
      if (stickyHeaderRef.value && tbodyRef.value) {
        stickyHeaderRef.value.scrollLeft = tbodyRef.value.scrollLeft
      }
    }

    const handlePageChange = (page: number, ps: number) => {
      currentPage.value = page
      pageSize.value = ps
      paginationConfig.value?.onChange?.(page, ps)
      scrollToTopIfNeeded()

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
    }
    // ---------------- 树形数据（嵌套 children）：展开状态 / 展平 / 级联勾选 ----------------
    const { childrenColumnName, indentSize, treeMode, expandedKeys, handleExpand, flattenRecords, cascadeSelect } =
      useTreeData({ props, getRowKey })

    // ---------------- 行选择状态 ----------------
    const { selectedKeys, handleRowSelect, handleSelectAll } = useRowSelection({
      props,
      getRowKey,
      treeMode,
      flattenRecords,
      cascadeSelect,
      pagedData,
    })

    // Filter handlers
    const handleFilterConfirm = (columnKey: string, selectedKeys: Key[]) => {
      filterState.value[columnKey] = selectedKeys as (string | number)[]
      filterDropdownOpen.value[columnKey] = false // 关闭 Dropdown
      scrollToTopIfNeeded()

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
    }

    return () => {
      const isEmpty = pagedData.value.length === 0
      const showSelection = !!props.rowSelection
      const isRadio = props.rowSelection?.type === 'radio'
      // 自定义展开行（expandedRowRender）：使用独立的展开图标列
      const hasExpandable = !!props.expandable?.expandedRowRender
      // 树形数据：展开图标内嵌在数据列中（与 expandedRowRender 互斥）
      const isTreeMode = treeMode.value
      const indentUnit = indentSize.value
      const childrenKey = childrenColumnName.value

      // ---------------- 列插槽：展开列 / 选择列 / 数据列 ----------------
      // expandIconColumnIndex 为展开图标在最终列序中的索引（含选择列）：
      // - expandedRowRender 模式：展开图标独立成列，插到该位置（默认 0，即选择列之前）
      // - 树形模式：图标内嵌到对应的数据列（默认紧随选择列之后）
      const expandColumnIndex = Math.max(0, props.expandable?.expandIconColumnIndex ?? 0)
      // 选择列默认在首位；展开列占用首位时选择列顺延
      const selectionColumnIndex = hasExpandable && expandColumnIndex === 0 ? 1 : 0
      // 树形模式下图标内嵌的数据列索引（最终索引减去选择列后得到）
      const treeIconColIndex = Math.max(
        0,
        (props.expandable?.expandIconColumnIndex ?? (showSelection ? 1 : 0)) - (showSelection ? 1 : 0),
      )

      // 渲染顺序均由插槽序列决定（展开列/选择列可位于任意位置）
      const cellSlots: (
        { type: 'expand' } | { type: 'selection' } | { type: 'data'; col: TableColumn; colIndex: number }
      )[] = (() => {
        const specials = new Map<number, { type: 'expand' } | { type: 'selection' }>()
        if (hasExpandable) {
          const maxIndex = responsiveColumns.value.length + (showSelection ? 1 : 0)
          specials.set(Math.min(expandColumnIndex, maxIndex), { type: 'expand' })
        }
        if (showSelection) specials.set(selectionColumnIndex, { type: 'selection' })

        const slots: typeof cellSlots = []
        const total = specials.size + responsiveColumns.value.length
        let dataIdx = 0
        for (let i = 0; i < total; i++) {
          const special = specials.get(i)
          if (special) {
            slots.push(special)
          } else {
            const col = responsiveColumns.value[dataIdx]
            if (col) slots.push({ type: 'data', col, colIndex: dataIdx })
            dataIdx++
          }
        }
        return slots
      })()

      // 展开图标：支持自定义 expandIcon，否则使用默认 +/- 按钮
      const renderExpandIcon = (record: any, isExpanded: boolean) => {
        if (props.expandable?.expandIcon) {
          return props.expandable.expandIcon({
            expanded: isExpanded,
            record,
            onExpand: (rec, _e) => handleExpand(!isExpanded, rec),
          })
        }
        return (
          <button
            type="button"
            class={cls(`${prefixCls}-expand-icon`, {
              [`${prefixCls}-expand-icon-expanded`]: isExpanded,
            })}
            onClick={(e) => {
              e.stopPropagation()
              handleExpand(!isExpanded, record)
            }}
            aria-label={isExpanded ? tableLocale.value.collapse : tableLocale.value.expand}
            aria-expanded={isExpanded}
          >
            {isExpanded ? <MinusOutlined /> : <PlusOutlined />}
          </button>
        )
      }

      // 全选态基于当前页所有层级（含树形子节点）
      const flatPageRecords = showSelection ? flattenRecords(pagedData.value) : []
      const allSelected = flatPageRecords.length > 0 && flatPageRecords.every((x) => selectedKeys.value.includes(x.key))
      const someSelected = flatPageRecords.some((x) => selectedKeys.value.includes(x.key))

      const colSpan = cellSlots.length

      // sticky 开启时表头与表体拆分渲染：表体位于横向滚动容器内，
      // 表头独立吸顶（否则 overflow-x 容器会困住 position: sticky，表头无法吸附外层容器）
      const stickyHeaderMode = !!stickyConfig.value && props.showHeader

      // 列宽 colgroup：拆分为两个 table 时保证列宽一致（table-layout: fixed 下按 col 宽度分配）
      const colWidthStyle = (slot: (typeof cellSlots)[number]) => {
        if (slot.type === 'expand') return { width: '48px' }
        if (slot.type === 'selection')
          return props.rowSelection?.columnWidth ? { width: props.rowSelection.columnWidth } : { width: '32px' }
        const w = slot.col.width
        return w ? { width: typeof w === 'number' ? `${w}px` : w } : undefined
      }
      const colgroupNode = stickyHeaderMode ? (
        <colgroup>
          {cellSlots.map((slot, i) => (
            <col key={i} style={colWidthStyle(slot)} />
          ))}
        </colgroup>
      ) : null

      // 表体 table 的宽度（与表头 table 保持一致）
      const tableStyle = props.scroll?.x
        ? { minWidth: typeof props.scroll.x === 'number' ? `${props.scroll.x}px` : props.scroll.x }
        : {}

      // 递归渲染数据行（树形：按展开状态展开子节点并缩进；expandedRowRender：追加展开行）
      // records: 当前层级的记录数组；level: 嵌套深度（0 为顶层）；baseIndex: 顶层索引偏移（虚拟滚动用）
      const buildRows = (records: any[], level: number, baseIndex: number): any[] => {
        const out: any[] = []
        records.forEach((record, i) => {
          const rowIndex = baseIndex + i
          const rowKey = getRowKey(record, rowIndex)
          const isSelected = selectedKeys.value.includes(rowKey)
          const isExpanded = expandedKeys.value.includes(rowKey)

          // 树形：当前行是否可展开（有子节点且未被 rowExpandable 否决）
          const childList: any[] | undefined = isTreeMode ? record[childrenKey] : undefined
          const hasChildren = Array.isArray(childList) && childList.length > 0
          const treeExpandable =
            hasChildren && (props.expandable?.rowExpandable ? props.expandable.rowExpandable(record) : true)
          const rowExpandable = hasExpandable || treeExpandable

          const customRowClassName =
            typeof props.rowClassName === 'function' ? props.rowClassName(record, rowIndex) : props.rowClassName

          // 合并 onRow 返回的属性；expandRowByClick 时点击整行切换展开
          const rowAttrs = props.onRow?.(record, rowIndex) ?? {}
          if (props.expandable?.expandRowByClick && rowExpandable) {
            const originalClick = rowAttrs.onClick as ((e: Event) => void) | undefined
            rowAttrs.onClick = (e: Event) => {
              originalClick?.(e)
              handleExpand(!isExpanded, record)
            }
          }

          out.push(
            <tr
              key={rowKey}
              role="row"
              aria-selected={showSelection ? isSelected : undefined}
              aria-expanded={rowExpandable ? isExpanded : undefined}
              class={cls(
                `${prefixCls}-row`,
                {
                  [`${prefixCls}-row-selected`]: isSelected,
                  [`${prefixCls}-row-level-${level}`]: isTreeMode && level > 0,
                },
                customRowClassName,
                props.classNames?.row,
              )}
              style={props.styles?.row}
              {...rowAttrs}
            >
              {cellSlots.map((slot) => {
                if (slot.type === 'expand') {
                  return (
                    <td key="__expand__" class={`${prefixCls}-cell ${prefixCls}-expand-icon-cell`} role="cell">
                      {renderExpandIcon(record, isExpanded)}
                    </td>
                  )
                }
                if (slot.type === 'selection') {
                  return (
                    <td
                      key="__selection__"
                      class={cls(`${prefixCls}-cell ${prefixCls}-selection-column`, {
                        [`${prefixCls}-cell-fix-left`]: !!props.rowSelection?.fixed,
                      })}
                      role="cell"
                    >
                      {isRadio ? (
                        <Radio
                          checked={isSelected}
                          onChange={(e: any) => handleRowSelect(rowKey, record, e.target.checked)}
                        />
                      ) : (
                        <Checkbox
                          checked={isSelected}
                          onChange={(e: any) => handleRowSelect(rowKey, record, e.target.checked)}
                          {...(props.rowSelection?.getCheckboxProps?.(record) ?? {})}
                        />
                      )}
                    </td>
                  )
                }
                const { col, colIndex } = slot
                // 树形模式下，承载展开图标的数据列内嵌缩进 + 图标
                const isTreeCell = isTreeMode && colIndex === treeIconColIndex
                // 数据单元格合并仅通过 onCell 动态返回（列级 colSpan 只作用于表头）
                const cellProps = col.onCell?.(record, rowIndex) ?? {}
                const mergedColSpan = cellProps.colSpan ?? 1
                const mergedRowSpan = cellProps.rowSpan ?? 1
                // colSpan/rowSpan 为 0：已被相邻单元格合并，不渲染（树形图标列除外，否则展开图标丢失）
                if ((mergedColSpan === 0 || mergedRowSpan === 0) && !isTreeCell) return null
                const {
                  colSpan: _colSpan,
                  rowSpan: _rowSpan,
                  className: cellClassName,
                  style: cellStyle,
                  ...cellRest
                } = cellProps
                const colKey = col.key ?? col.dataIndex ?? ''
                const value = getCellValue(record, col)
                const content = col.render ? col.render(value, record, rowIndex) : value
                const fixedLeft = col.fixed === 'left'
                const fixedRight = col.fixed === 'right'
                return (
                  <td
                    {...cellRest}
                    key={colKey}
                    role="cell"
                    colspan={mergedColSpan !== 1 ? mergedColSpan : undefined}
                    rowspan={mergedRowSpan !== 1 ? mergedRowSpan : undefined}
                    class={cls(
                      `${prefixCls}-cell`,
                      {
                        [`${prefixCls}-cell-ellipsis`]: col.ellipsis,
                        [`${prefixCls}-cell-fix-left`]: fixedLeft,
                        [`${prefixCls}-cell-fix-right`]: fixedRight,
                      },
                      col.className,
                      props.classNames?.cell,
                      cellClassName,
                    )}
                    style={{ textAlign: col.align ?? 'left', ...props.styles?.cell, ...cellStyle }}
                  >
                    {isTreeCell ? (
                      <div class={`${prefixCls}-cell-tree`}>
                        <span class={`${prefixCls}-row-indent`} style={{ paddingLeft: `${level * indentUnit}px` }} />
                        {treeExpandable ? (
                          <span class={`${prefixCls}-row-expand-icon-wrap`}>
                            {renderExpandIcon(record, isExpanded)}
                          </span>
                        ) : (
                          <span class={`${prefixCls}-row-expand-icon-spacer`} />
                        )}
                        <span class={`${prefixCls}-cell-content`}>{content}</span>
                      </div>
                    ) : (
                      content
                    )}
                  </td>
                )
              })}
            </tr>,
          )

          // 自定义展开行（expandedRowRender）
          if (hasExpandable && isExpanded && props.expandable?.expandedRowRender) {
            out.push(
              <tr key={`${rowKey}-expanded`} class={`${prefixCls}-expanded-row`} role="row">
                <td colspan={colSpan} class={`${prefixCls}-cell`} role="cell">
                  {props.expandable.expandedRowRender(record, rowIndex, level + 1, isExpanded)}
                </td>
              </tr>,
            )
          } else if (isTreeMode && treeExpandable && isExpanded) {
            // 树形：展开时递归渲染子节点
            out.push(...buildRows(childList!, level + 1, 0))
          }
        })
        return out
      }

      // 吸顶表头容器样式（表头 table 的定位载体）
      const stickyHeaderStyle: CSSProperties = {
        position: 'sticky',
        top: `${stickyConfig.value?.offsetHeader || 0}px`,
        zIndex: 3,
        overflow: 'hidden',
      }

      // 分页节点（position 含 top* 时渲染在表格上方，否则下方）
      const paginationNode =
        paginationConfig.value && !isEmpty ? (
          <div
            class={cls(
              `${prefixCls}-pagination`,
              `${prefixCls}-pagination-${paginationPlacement.value.align}`,
              props.classNames?.pagination,
            )}
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
              size={paginationConfig.value.size}
              simple={paginationConfig.value.simple}
              disabled={paginationConfig.value.disabled}
              hideOnSinglePage={paginationConfig.value.hideOnSinglePage}
              align={
                paginationPlacement.value.align === 'left'
                  ? 'start'
                  : paginationPlacement.value.align === 'center'
                    ? 'center'
                    : 'end'
              }
              onChange={handlePageChange}
              onShowSizeChange={(page: number, ps: number) => {
                paginationConfig.value?.onShowSizeChange?.(page, ps)
              }}
            />
          </div>
        ) : null

      // 表头：sticky 模式下与表体分离渲染（表体在横向滚动容器内，表头独立吸顶）
      const renderHeader = () => (
        <TableHeader
          prefixCls={prefixCls}
          cellSlots={cellSlots}
          columns={responsiveColumns.value ?? []}
          sortStates={sortStates.value}
          filterState={filterState.value}
          filterDropdownOpen={filterDropdownOpen.value}
          rowSelection={props.rowSelection}
          isRadio={isRadio}
          allSelected={allSelected}
          someSelected={someSelected}
          tableLocale={tableLocale.value}
          classNames={props.classNames}
          styles={props.styles}
          onHeaderRow={props.onHeaderRow}
          onSort={handleSort}
          onFilterConfirm={handleFilterConfirm}
          onFilterDropdownOpen={(key, open) => {
            filterDropdownOpen.value[key] = open
          }}
          onSelectAll={handleSelectAll}
        />
      )

      const tableEl = (
        <div
          class={cls(
            prefixCls,
            `${prefixCls}-${props.size}`,
            {
              [`${prefixCls}-bordered`]: props.bordered,
              [`${prefixCls}-loading`]: props.loading,
              [`${prefixCls}-scroll-horizontal`]: !!props.scroll?.x,
              [`${prefixCls}-sticky`]: !!stickyConfig.value,
              [`${prefixCls}-split-header`]: stickyHeaderMode,
              [`${prefixCls}-ping-left`]: pingLeft.value,
              [`${prefixCls}-ping-right`]: pingRight.value,
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
          {paginationPlacement.value.top && paginationNode}
          <div class={`${prefixCls}-container`}>
            {/* 吸顶表头：独立 table，位于横向滚动容器之外，可吸附外层容器/页面 */}
            {stickyHeaderMode && (
              <div ref={stickyHeaderRef} class={`${prefixCls}-header`} style={stickyHeaderStyle}>
                <table style={tableStyle}>
                  {colgroupNode}
                  {renderHeader()}
                </table>
              </div>
            )}
            <div
              ref={tbodyRef}
              class={`${prefixCls}-content`}
              style={{
                // scroll.x 时容器横向滚动；overflow-y 用 clip 而非默认的 auto，
                // 否则该容器会成为纵向滚动容器，吸顶表头（position: sticky）将无法吸附到外层容器/页面
                ...(props.scroll?.x ? { overflowX: 'auto', overflowY: virtualEnabled.value ? 'auto' : 'clip' } : {}),
                ...(virtualEnabled.value
                  ? {
                      overflowY: 'auto',
                      maxHeight: typeof props.scroll?.y === 'number' ? `${props.scroll.y}px` : props.scroll?.y,
                    }
                  : {}),
              }}
              onScroll={handleContentScroll}
              role="presentation"
            >
              <table role="table" aria-rowcount={pagedData.value.length} aria-colcount={colSpan} style={tableStyle}>
                {colgroupNode}
                {!stickyHeaderMode && props.showHeader && renderHeader()}
                <tbody
                  class={cls(`${prefixCls}-tbody`, props.classNames?.body)}
                  role="rowgroup"
                  style={props.styles?.body}
                >
                  {isEmpty ? (
                    <tr class={`${prefixCls}-placeholder`} role="row">
                      <td colspan={colSpan} role="cell">
                        <Empty description={tableLocale.value.emptyText} />
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

                      {/* 统一的数据行渲染（虚拟 / 非虚拟共用，树形递归展开子节点） */}
                      {buildRows(
                        virtualEnabled.value ? virtualVisibleData.value : pagedData.value,
                        0,
                        virtualEnabled.value ? startIndex.value : 0,
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
          {!paginationPlacement.value.top && paginationNode}
          {/* 吸底横向滚动条：真实滚动条滚出视口时固定在底部（sticky.offsetScroll） */}
          {stickyConfig.value && stickyBarVisible.value && (
            <div
              class={`${prefixCls}-sticky-scroll`}
              style={{
                width: `${stickyBarWrapWidth.value}px`,
                bottom: `${stickyConfig.value.offsetScroll ?? 0}px`,
              }}
            >
              <div
                class={cls(`${prefixCls}-sticky-scroll-bar`, {
                  [`${prefixCls}-sticky-scroll-bar-active`]: stickyBarDragging.value,
                })}
                style={{
                  width: `${stickyBarThumbWidth.value}px`,
                  transform: `translate3d(${stickyBarThumbLeft.value}px, 0, 0)`,
                }}
                onMousedown={onStickyBarMousedown}
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
