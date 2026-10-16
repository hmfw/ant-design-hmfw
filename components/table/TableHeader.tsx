import { defineComponent, type PropType } from 'vue'
import { cls } from '../_utils/cls'
import { Checkbox } from '../checkbox'
import { Dropdown } from '../dropdown'
import { FilterOutlined } from '@hmfw/icons'
import { FilterDropdown } from './FilterDropdown'
import { CustomFilterDropdown } from './CustomFilterDropdown'
import type { TableColumn, TableLocale, TableRowSelection } from './interface'

/** 表头单元格插槽：展开列 / 选择列 / 数据列（由 Table 计算后传入） */
export type HeaderCellSlot =
  { type: 'expand' } | { type: 'selection' } | { type: 'data'; col: TableColumn; colIndex: number }

export interface HeaderSortState {
  key: string
  order: 'ascend' | 'descend' | null
  column: TableColumn
}

/**
 * 表格表头（<thead>）：
 * 排序箭头 / 筛选入口（内置或自定义面板）/ 选择列全选框 / 展开列 / onHeaderCell 合并
 */
export const TableHeader = defineComponent({
  name: 'TableHeader',
  props: {
    prefixCls: { type: String, required: true },
    cellSlots: { type: Array as PropType<HeaderCellSlot[]>, required: true },
    /** 参与渲染的列（onHeaderRow 回调参数） */
    columns: { type: Array as PropType<TableColumn[]>, default: () => [] },
    sortStates: { type: Array as PropType<HeaderSortState[]>, default: () => [] },
    filterState: { type: Object as PropType<Record<string, (string | number)[]>>, default: () => ({}) },
    filterDropdownOpen: { type: Object as PropType<Record<string, boolean>>, default: () => ({}) },
    rowSelection: { type: Object as PropType<TableRowSelection | undefined>, default: undefined },
    isRadio: { type: Boolean, default: false },
    allSelected: { type: Boolean, default: false },
    someSelected: { type: Boolean, default: false },
    tableLocale: { type: Object as PropType<TableLocale>, required: true },
    classNames: { type: Object as PropType<{ header?: string } | undefined>, default: undefined },
    styles: { type: Object as PropType<{ header?: any } | undefined>, default: undefined },
    onHeaderRow: {
      type: Function as PropType<((columns: TableColumn[], index: number) => Record<string, any>) | undefined>,
      default: undefined,
    },
    onSort: { type: Function as PropType<(col: TableColumn, e?: MouseEvent) => void>, default: undefined },
    onFilterConfirm: { type: Function as PropType<(key: string, keys: any[]) => void>, default: undefined },
    onFilterDropdownOpen: { type: Function as PropType<(key: string, open: boolean) => void>, default: undefined },
    onSelectAll: { type: Function as PropType<(checked: boolean) => void>, default: undefined },
  },
  setup(props) {
    return () => (
      <thead
        class={cls(`${props.prefixCls}-thead`, props.classNames?.header)}
        role="rowgroup"
        style={props.styles?.header}
      >
        <tr {...(props.onHeaderRow?.(props.columns ?? [], 0) ?? {})} role="row">
          {props.cellSlots.map((slot) => {
            if (slot.type === 'expand') {
              return (
                <th
                  key="__expand__"
                  class={`${props.prefixCls}-cell ${props.prefixCls}-expand-icon-col`}
                  style={{ width: '48px' }}
                  role="columnheader"
                ></th>
              )
            }
            if (slot.type === 'selection') {
              return (
                <th
                  key="__selection__"
                  class={cls(`${props.prefixCls}-cell ${props.prefixCls}-selection-column`, {
                    [`${props.prefixCls}-cell-fix-left`]: !!props.rowSelection?.fixed,
                  })}
                  style={props.rowSelection?.columnWidth ? { width: props.rowSelection.columnWidth } : undefined}
                  role="columnheader"
                  aria-label="Row selection"
                >
                  {props.rowSelection?.columnTitle ??
                    (!props.isRadio && !props.rowSelection?.hideSelectAll ? (
                      <Checkbox
                        checked={props.allSelected}
                        indeterminate={props.someSelected && !props.allSelected}
                        onChange={(e: any) => props.onSelectAll?.(e.target.checked)}
                      />
                    ) : null)}
                </th>
              )
            }
            const col = slot.col
            // 表头单元格动态属性（onHeaderCell 优先于列级静态 colSpan）
            const headerCellProps = col.onHeaderCell?.(col) ?? {}
            const mergedHeaderColSpan = headerCellProps.colSpan ?? col.colSpan ?? 1
            // colSpan 为 0：已被相邻表头合并，不渲染该 th
            if (mergedHeaderColSpan === 0) return null
            const {
              colSpan: _hColSpan,
              className: headerClassName,
              style: headerStyle,
              onClick: headerOnClick,
              ...headerRest
            } = headerCellProps
            const key = col.key ?? col.dataIndex ?? ''
            const sortState = props.sortStates.find((s) => s.key === key)
            const isSorted = !!sortState
            const fixedLeft = col.fixed === 'left'
            const fixedRight = col.fixed === 'right'
            // 提供 filters 或 filterDropdown 之一即渲染筛选入口
            const hasFilter = (col.filters && col.filters.length > 0) || !!col.filterDropdown
            const isFiltered = props.filterState[key]?.length > 0

            // 排序提示文案（showSorterTooltip 关闭时不展示）
            const sorterTip =
              col.sorter && col.showSorterTooltip !== false
                ? isSorted
                  ? sortState?.order === 'descend'
                    ? props.tableLocale.triggerDesc
                    : props.tableLocale.triggerAsc
                  : props.tableLocale.sortTitle
                : undefined

            return (
              <th
                {...headerRest}
                key={key}
                scope="col"
                role="columnheader"
                title={sorterTip}
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
                    props.onSort?.(col, e as any)
                  }
                }}
                class={cls(
                  `${props.prefixCls}-cell`,
                  {
                    [`${props.prefixCls}-column-sort`]: isSorted,
                    [`${props.prefixCls}-column-has-sorters`]: !!col.sorter,
                    [`${props.prefixCls}-cell-fix-left`]: fixedLeft,
                    [`${props.prefixCls}-cell-fix-right`]: fixedRight,
                  },
                  col.className,
                  headerClassName,
                )}
                style={{
                  width: col.width ? (typeof col.width === 'number' ? `${col.width}px` : col.width) : undefined,
                  textAlign: col.align ?? 'left',
                  ...headerStyle,
                }}
                colspan={mergedHeaderColSpan !== 1 ? mergedHeaderColSpan : undefined}
                onClick={(e) => {
                  headerOnClick?.(e)
                  if (col.sorter) props.onSort?.(col, e)
                }}
              >
                <div class={`${props.prefixCls}-column-title`}>
                  {col.title}
                  {col.sorter && (
                    <span class={`${props.prefixCls}-column-sorter`}>
                      <span
                        class={cls(`${props.prefixCls}-column-sorter-up`, {
                          active: isSorted && sortState?.order === 'ascend',
                        })}
                      >
                        ▲
                      </span>
                      <span
                        class={cls(`${props.prefixCls}-column-sorter-down`, {
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
                      open={props.filterDropdownOpen[key]}
                      onUpdate:open={(v) => (props.filterDropdownOpen[key] = v)}
                    >
                      {{
                        default: () => (
                          <span
                            class={cls(`${props.prefixCls}-filter-trigger`, {
                              active: isFiltered,
                            })}
                            onClick={(e) => {
                              // 阻止冒泡到表头触发排序；由受控状态自行切换开关
                              e.stopPropagation()
                              props.filterDropdownOpen[key] = !props.filterDropdownOpen[key]
                            }}
                          >
                            {col.filterIcon ? (
                              typeof col.filterIcon === 'function' ? (
                                col.filterIcon(isFiltered)
                              ) : (
                                col.filterIcon
                              )
                            ) : (
                              <FilterOutlined />
                            )}
                          </span>
                        ),
                        overlay: () =>
                          col.filterDropdown ? (
                            typeof col.filterDropdown === 'function' ? (
                              <CustomFilterDropdown
                                prefixCls={props.prefixCls}
                                column={col}
                                filters={col.filters}
                                filteredValue={props.filterState[key] || []}
                                filterMultiple={col.filterMultiple ?? true}
                                renderContent={col.filterDropdown}
                                onConfirm={(keys) => props.onFilterConfirm?.(key, keys)}
                              />
                            ) : (
                              col.filterDropdown
                            )
                          ) : (
                            <FilterDropdown
                              prefixCls={props.prefixCls}
                              filters={col.filters!}
                              filteredValue={props.filterState[key] || []}
                              filterMultiple={col.filterMultiple ?? true}
                              locale={props.tableLocale}
                              onConfirm={(keys) => props.onFilterConfirm?.(key, keys)}
                            />
                          ),
                      }}
                    </Dropdown>
                  )}
                </div>
              </th>
            )
          })}
        </tr>
      </thead>
    )
  },
})
