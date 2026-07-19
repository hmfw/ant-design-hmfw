import { defineComponent, ref, computed, watch, type PropType, type VNode, type CSSProperties } from 'vue'
import { cls } from '../_utils'
import { Checkbox } from '../checkbox'
import { Input } from '../input'
import { Empty } from '../empty'
import { Dropdown } from '../dropdown'
import { Pagination } from '../pagination'
import { VirtualList } from '../_internal/virtual-list'
import { DownOutlined, DeleteOutlined, SearchOutlined } from '@hmfw/icons'
import type {
  TransferItem,
  TransferKey,
  TransferDirection,
  RenderResult,
  RenderResultObject,
  SelectAllLabel,
  PaginationType,
  TransferSearchOption,
  TransferSemanticClassNames,
  TransferSemanticStyles,
  TransferListProps,
} from './types'

interface RenderedItem {
  item: TransferItem
  renderedEl: VNode | string | null
  renderedText: string
}

function isRenderResultPlainObject(result: RenderResult): result is RenderResultObject {
  return (
    !!result && typeof result === 'object' && !('__v_isVNode' in (result as object)) && 'value' in (result as object)
  )
}

function getTextFromRenderResult(renderResult: RenderResult, item: TransferItem): string {
  for (const value of [renderResult, item.title, item.key]) {
    if (typeof value === 'string') return value
    if (typeof value === 'number') return String(value)
  }
  return ''
}

function getEnabledItemKeys(items: TransferItem[]): TransferKey[] {
  return items.filter((d) => !d.disabled).map((d) => d.key as TransferKey)
}

/**
 * 列表区（对齐 AntD `Section`）：
 * 头部（全选框 + selections 下拉 + 已选计数 + 标题）、搜索框、内容列表、底部、分页。
 */

const transferListProps = {
  prefixCls: { type: String, required: true },
  direction: { type: String as PropType<TransferDirection>, required: true },
  titleText: { type: [String, Object] as PropType<VNode | string>, default: '' },
  dataSource: { type: Array as PropType<TransferItem[]>, default: () => [] },
  checkedKeys: { type: Array as PropType<TransferKey[]>, default: () => [] },
  disabled: { type: Boolean, default: false },
  showSearch: {
    type: [Boolean, Object] as PropType<boolean | TransferSearchOption>,
    default: false,
  },
  showSelectAll: { type: Boolean, default: true },
  showRemove: { type: Boolean, default: false },
  draggable: { type: Boolean, default: false },
  pagination: { type: [Boolean, Object] as PropType<PaginationType>, default: undefined },
  selectAllLabel: {
    type: [String, Object, Function] as PropType<SelectAllLabel>,
    default: undefined,
  },
  render: { type: Function as PropType<(item: TransferItem) => RenderResult>, default: undefined },
  filterOption: {
    type: Function as PropType<(input: string, item: TransferItem, direction: TransferDirection) => boolean>,
    default: undefined,
  },
  footer: { type: Function as PropType<(info: any) => VNode | string | null>, default: undefined },
  listStyle: { type: Object as PropType<CSSProperties>, default: () => ({}) },
  classNames: { type: Object as PropType<TransferSemanticClassNames>, default: () => ({}) },
  styles: { type: Object as PropType<TransferSemanticStyles>, default: () => ({}) },
  virtual: { type: Boolean, default: false },
  listHeight: { type: Number, default: 400 },
  listItemHeight: { type: Number, default: 40 },
  searchPlaceholder: { type: String, default: '请输入搜索内容' },
  notFoundContent: {
    type: [String, Object, Array] as PropType<VNode | string | (VNode | string)[]>,
    default: undefined,
  },
  itemUnit: { type: String, default: '项' },
  itemsUnit: { type: String, default: '项' },
  selectAll: { type: String, default: '全选所有' },
  deselectAll: { type: String, default: '取消全选' },
  selectCurrent: { type: String, default: '全选当页' },
  selectInvert: { type: String, default: '反选当页' },
  removeAll: { type: String, default: '删除全部' },
  removeCurrent: { type: String, default: '删除当页' },
} satisfies Record<keyof TransferListProps, any>

export const TransferList = defineComponent({
  name: 'TransferList',
  props: transferListProps,
  emits: ['itemSelect', 'itemSelectAll', 'itemRemove', 'reorder', 'filter', 'scroll'],
  setup(props, { emit }) {
    const listPrefixCls = computed(() => `${props.prefixCls}-list`)
    const sectionPrefixCls = computed(() => `${props.prefixCls}-section`)

    // 搜索框默认值（showSearch 对象形式）
    const searchOptions = computed(() =>
      props.showSearch && typeof props.showSearch === 'object'
        ? { defaultValue: '', placeholder: '', ...props.showSearch }
        : { defaultValue: '', placeholder: '' },
    )
    const filterValue = ref(searchOptions.value.defaultValue || '')
    watch(
      () => searchOptions.value.defaultValue,
      (v) => {
        filterValue.value = v || ''
      },
    )

    // 分页：内部当前页
    const current = ref(1)
    const mergedPagination = computed(() => {
      if (!props.pagination) return null
      const opt = typeof props.pagination === 'object' ? props.pagination : {}
      return { simple: true, showSizeChanger: false, showLessItems: false, pageSize: 10, ...opt }
    })

    function renderItem(item: TransferItem): RenderedItem {
      const renderResult = props.render ? props.render(item) : null
      const isPlain = isRenderResultPlainObject(renderResult)
      const renderedEl = isPlain ? (renderResult as RenderResultObject).label : (renderResult as VNode | string | null)
      const renderedText = isPlain
        ? (renderResult as RenderResultObject).value
        : getTextFromRenderResult(renderResult, item)
      return { item, renderedEl: renderedEl ?? item.title ?? String(item.key), renderedText }
    }

    function matchFilter(text: string, item: TransferItem): boolean {
      if (props.filterOption) return props.filterOption(filterValue.value, item, props.direction!)
      return text.toLowerCase().includes(filterValue.value.toLowerCase())
    }

    // 过滤后的渲染项
    const filteredRenderItems = computed<RenderedItem[]>(() => {
      const result: RenderedItem[] = []
      props.dataSource.forEach((item) => {
        const r = renderItem(item)
        if (filterValue.value && !matchFilter(r.renderedText, item)) return
        result.push(r)
      })
      return result
    })
    const filteredItems = computed(() => filteredRenderItems.value.map((r) => r.item))

    // 修正当前页（数据/页大小变化时）
    watch([filteredRenderItems, mergedPagination], () => {
      const mp = mergedPagination.value
      if (mp) {
        const maxPage = Math.max(1, Math.ceil(filteredRenderItems.value.length / mp.pageSize))
        current.value = Math.min(current.value, maxPage)
      }
    })

    // 当前页展示项
    const pagedRenderItems = computed<RenderedItem[]>(() => {
      const mp = mergedPagination.value
      if (!mp) return filteredRenderItems.value
      return filteredRenderItems.value.slice((current.value - 1) * mp.pageSize, current.value * mp.pageSize)
    })

    const checkedActiveItems = computed(() =>
      filteredItems.value.filter((item) => props.checkedKeys.includes(item.key as TransferKey) && !item.disabled),
    )

    // 全选态：none / part / all
    const checkStatus = computed<'none' | 'part' | 'all'>(() => {
      if (checkedActiveItems.value.length === 0) return 'none'
      const checkedSet = new Set(props.checkedKeys)
      if (filteredItems.value.every((item) => checkedSet.has(item.key as TransferKey) || !!item.disabled)) return 'all'
      return 'part'
    })

    function handleFilter(val: string) {
      filterValue.value = val
      emit('filter', props.direction, val)
    }

    function handleSelectAll() {
      const keys = getEnabledItemKeys(filteredItems.value)
      emit('itemSelectAll', keys, checkStatus.value !== 'all')
    }

    function getSelectAllLabel(selectedCount: number, totalCount: number): VNode | string {
      const label = props.selectAllLabel
      if (label) {
        return typeof label === 'function' ? label({ selectedCount, totalCount }) : label
      }
      const unit = totalCount > 1 ? props.itemsUnit : props.itemUnit
      return `${selectedCount > 0 ? `${selectedCount}/` : ''}${totalCount} ${unit}`
    }

    // selections 下拉菜单项
    const dropdownItems = computed(() => {
      const mp = mergedPagination.value
      if (props.showRemove) {
        return [
          mp && {
            key: 'removeCurrent',
            label: props.removeCurrent,
            onClick: () => emit('itemRemove', getEnabledItemKeys(pagedRenderItems.value.map((r) => r.item))),
          },
          {
            key: 'removeAll',
            label: props.removeAll,
            onClick: () => emit('itemRemove', getEnabledItemKeys(filteredItems.value)),
          },
        ].filter(Boolean)
      }
      return [
        {
          key: 'selectAll',
          label: checkStatus.value === 'all' ? props.deselectAll : props.selectAll,
          onClick: () => {
            const keys = getEnabledItemKeys(filteredItems.value)
            emit('itemSelectAll', keys, keys.length !== props.checkedKeys.length)
          },
        },
        mp && {
          key: 'selectCurrent',
          label: props.selectCurrent,
          onClick: () => emit('itemSelectAll', getEnabledItemKeys(pagedRenderItems.value.map((r) => r.item)), true),
        },
        {
          key: 'selectInvert',
          label: props.selectInvert,
          onClick: () => {
            const pageKeys = getEnabledItemKeys(pagedRenderItems.value.map((r) => r.item))
            const set = new Set(props.checkedKeys)
            pageKeys.forEach((k) => (set.has(k) ? set.delete(k) : set.add(k)))
            emit('itemSelectAll', [...set], 'replace')
          },
        },
      ].filter(Boolean)
    })

    function sn(key: keyof TransferSemanticClassNames) {
      return props.classNames[key]
    }
    function ss(key: keyof TransferSemanticStyles): CSSProperties | undefined {
      return props.styles[key]
    }

    // ===== 拖拽排序状态 =====
    // 当前正在拖拽的项 key
    const draggingKey = ref<TransferKey | null>(null)
    // 当前作为放置目标的项 key
    const dragOverKey = ref<TransferKey | null>(null)
    // 放置位置：true 表示放到目标项之后，false 表示之前
    const dragOverAfter = ref(false)

    function canDragItem(item: TransferItem): boolean {
      return !!props.draggable && !props.disabled && !item.disabled
    }

    function handleDragStart(e: DragEvent, key: TransferKey) {
      draggingKey.value = key
      if (e.dataTransfer) {
        e.dataTransfer.effectAllowed = 'move'
        // 部分浏览器（Firefox）需要 setData 才能触发 drag
        try {
          e.dataTransfer.setData('text/plain', String(key))
        } catch {}
      }
    }

    function handleDragOver(e: DragEvent, key: TransferKey) {
      if (draggingKey.value === null || draggingKey.value === key) return
      e.preventDefault()
      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move'
      // 根据鼠标在目标项中的相对位置判断放在前还是后
      const target = e.currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const offset = e.clientY - rect.top
      const after = offset > rect.height / 2
      if (dragOverKey.value !== key || dragOverAfter.value !== after) {
        dragOverKey.value = key
        dragOverAfter.value = after
      }
    }

    function handleDragLeave(_e: DragEvent, key: TransferKey) {
      if (dragOverKey.value === key) {
        dragOverKey.value = null
      }
    }

    function handleDrop(e: DragEvent, key: TransferKey) {
      e.preventDefault()
      const fromKey = draggingKey.value
      const after = dragOverAfter.value
      draggingKey.value = null
      dragOverKey.value = null
      if (fromKey === null || fromKey === key) return
      emit('reorder', fromKey, key, after)
    }

    function handleDragEnd() {
      draggingKey.value = null
      dragOverKey.value = null
    }

    return () => {
      const lp = listPrefixCls.value
      const hasEnabled = props.dataSource.some((d) => !d.disabled)

      // 头部全选框
      const checkbox = (
        <Checkbox
          class={`${lp}-checkbox`}
          disabled={!hasEnabled || props.disabled}
          checked={checkStatus.value === 'all'}
          indeterminate={checkStatus.value === 'part'}
          onChange={handleSelectAll}
        />
      )

      // selections 下拉触发器（向下箭头）
      const dropdown = (
        <Dropdown
          class={`${lp}-header-dropdown`}
          disabled={props.disabled}
          menu={{ items: dropdownItems.value as any }}
        >
          <span class={`${lp}-header-dropdown-trigger`}>
            <DownOutlined class="hmfw-icon" />
          </span>
        </Dropdown>
      )

      // 搜索框
      const search = props.showSearch ? (
        <div class={`${lp}-body-search-wrapper`}>
          <Input
            class={`${lp}-search`}
            value={filterValue.value}
            placeholder={searchOptions.value.placeholder || props.searchPlaceholder}
            disabled={props.disabled}
            allowClear
            prefix={<SearchOutlined class="hmfw-icon" />}
            onInput={(e: Event) => handleFilter((e.target as HTMLInputElement).value)}
            onClear={() => handleFilter('')}
          />
        </div>
      ) : null

      // 内容项
      // 虚拟滚动启用条件：virtual=true 且无分页
      const virtualEnabled = computed(() => !!(props.virtual && !mergedPagination.value))

      const itemNodes = pagedRenderItems.value.map(({ item, renderedEl }) => {
        const key = item.key as TransferKey
        const mergedDisabled = props.disabled || item.disabled
        const checked = props.checkedKeys.includes(key)
        const isDragging = draggingKey.value === key
        const isDragOver = dragOverKey.value === key
        const dragHandlers = canDragItem(item)
          ? {
              draggable: true,
              onDragstart: (e: DragEvent) => handleDragStart(e, key),
              onDragover: (e: DragEvent) => handleDragOver(e, key),
              onDragleave: (e: DragEvent) => handleDragLeave(e, key),
              onDrop: (e: DragEvent) => handleDrop(e, key),
              onDragend: () => handleDragEnd(),
            }
          : {}
        const dragClass = {
          [`${lp}-content-item-draggable`]: !!props.draggable && !mergedDisabled,
          [`${lp}-content-item-dragging`]: isDragging,
          [`${lp}-content-item-drag-over`]: isDragOver && !isDragging,
          [`${lp}-content-item-drag-over-after`]: isDragOver && !isDragging && dragOverAfter.value,
          [`${lp}-content-item-drag-over-before`]: isDragOver && !isDragging && !dragOverAfter.value,
        }
        const labelNode = (
          <span class={cls(`${lp}-content-item-text`, sn('itemContent'))} style={ss('itemContent')}>
            {renderedEl}
          </span>
        )
        if (props.showRemove) {
          return (
            <li
              key={key}
              class={cls(`${lp}-content-item`, sn('item'), dragClass, {
                [`${lp}-content-item-disabled`]: mergedDisabled,
              })}
              style={ss('item')}
              {...dragHandlers}
            >
              {labelNode}
              <button
                type="button"
                disabled={mergedDisabled}
                class={`${lp}-content-item-remove`}
                aria-label={props.removeCurrent}
                onClick={() => !mergedDisabled && emit('itemRemove', [key])}
              >
                <DeleteOutlined class="hmfw-icon" />
              </button>
            </li>
          )
        }
        return (
          <li
            key={key}
            class={cls(`${lp}-content-item`, sn('item'), dragClass, {
              [`${lp}-content-item-disabled`]: mergedDisabled,
              [`${lp}-content-item-checked`]: checked && !mergedDisabled,
            })}
            style={ss('item')}
            {...dragHandlers}
            onClick={(e: MouseEvent) => !mergedDisabled && emit('itemSelect', key, !checked, e)}
          >
            <Checkbox
              class={cls(`${lp}-checkbox`, sn('itemIcon'))}
              style={ss('itemIcon')}
              checked={checked}
              disabled={mergedDisabled}
              onChange={(e: any) => {
                if (!mergedDisabled) {
                  e.nativeEvent?.stopPropagation()
                  emit('itemSelect', key, !checked)
                }
              }}
            />
            {labelNode}
          </li>
        )
      })

      const notFound = Array.isArray(props.notFoundContent)
        ? props.notFoundContent[props.direction === 'left' ? 0 : 1]
        : props.notFoundContent

      const bodyNode =
        filteredRenderItems.value.length === 0 ? (
          <div class={`${lp}-body-not-found`}>{notFound ?? <Empty description={false} />}</div>
        ) : virtualEnabled.value ? (
          /* 虚拟滚动模式 */
          <VirtualList
            data={filteredRenderItems.value}
            height={props.listHeight}
            itemHeight={props.listItemHeight}
            renderItem={(ri: RenderedItem, _index: number) => {
              const { item, renderedEl } = ri
              const key = item.key as TransferKey
              const mergedDisabled = props.disabled || item.disabled
              const checked = props.checkedKeys.includes(key)
              const isDragging = draggingKey.value === key
              const isDragOver = dragOverKey.value === key
              const dragHandlers =
                canDragItem(item) && !props.virtual
                  ? {
                      draggable: true,
                      onDragstart: (e: DragEvent) => handleDragStart(e, key),
                      onDragover: (e: DragEvent) => handleDragOver(e, key),
                      onDragleave: (e: DragEvent) => handleDragLeave(e, key),
                      onDrop: (e: DragEvent) => handleDrop(e, key),
                      onDragend: () => handleDragEnd(),
                    }
                  : {}
              const dragClass = {
                [`${lp}-content-item-draggable`]: !!props.draggable && !mergedDisabled,
                [`${lp}-content-item-dragging`]: isDragging,
                [`${lp}-content-item-drag-over`]: isDragOver && !isDragging,
                [`${lp}-content-item-drag-over-after`]: isDragOver && !isDragging && dragOverAfter.value,
                [`${lp}-content-item-drag-over-before`]: isDragOver && !isDragging && !dragOverAfter.value,
              }
              const labelNode = (
                <span class={cls(`${lp}-content-item-text`, sn('itemContent'))} style={ss('itemContent')}>
                  {renderedEl}
                </span>
              )

              if (props.showRemove) {
                return (
                  <li
                    key={key}
                    class={cls(`${lp}-content-item`, sn('item'), dragClass, {
                      [`${lp}-content-item-disabled`]: mergedDisabled,
                    })}
                    style={ss('item')}
                    {...dragHandlers}
                  >
                    {labelNode}
                    <button
                      type="button"
                      disabled={mergedDisabled}
                      class={`${lp}-content-item-remove`}
                      aria-label={props.removeCurrent}
                      onClick={() => !mergedDisabled && emit('itemRemove', [key])}
                    >
                      <DeleteOutlined class="hmfw-icon" />
                    </button>
                  </li>
                )
              }
              return (
                <li
                  key={key}
                  class={cls(`${lp}-content-item`, sn('item'), dragClass, {
                    [`${lp}-content-item-disabled`]: mergedDisabled,
                    [`${lp}-content-item-checked`]: checked && !mergedDisabled,
                  })}
                  style={ss('item')}
                  {...dragHandlers}
                  onClick={(e: MouseEvent) => !mergedDisabled && emit('itemSelect', key, !checked, e)}
                >
                  <Checkbox
                    class={cls(`${lp}-checkbox`, sn('itemIcon'))}
                    style={ss('itemIcon')}
                    checked={checked}
                    disabled={mergedDisabled}
                    onChange={(e: any) => {
                      if (!mergedDisabled) {
                        e.nativeEvent?.stopPropagation()
                        emit('itemSelect', key, !checked)
                      }
                    }}
                  />
                  {labelNode}
                </li>
              )
            }}
            itemKey={(ri: RenderedItem) => (ri.item.key as TransferKey) ?? ''}
          />
        ) : (
          /* 普通 / 分页模式 */
          <>
            <ul
              class={cls(`${lp}-content`, sn('list'), {
                [`${lp}-content-show-remove`]: props.showRemove,
              })}
              style={ss('list')}
              onScroll={(e: Event) => emit('scroll', props.direction, e)}
            >
              {itemNodes}
            </ul>
            {mergedPagination.value && (
              <Pagination
                size="small"
                disabled={props.disabled}
                simple={mergedPagination.value.simple}
                pageSize={mergedPagination.value.pageSize}
                showSizeChanger={mergedPagination.value.showSizeChanger}
                class={`${lp}-pagination`}
                total={filteredRenderItems.value.length}
                current={current.value}
                onChange={(cur: number) => {
                  current.value = cur
                }}
              />
            )}
          </>
        )

      // 底部
      const footerDom = props.footer
        ? props.footer({
            direction: props.direction,
            filteredItems: filteredItems.value,
            selectedKeys: props.checkedKeys,
            disabled: props.disabled,
          })
        : null

      return (
        <div
          class={cls(sectionPrefixCls.value, sn('section'), {
            [`${sectionPrefixCls.value}-with-pagination`]: !!mergedPagination.value,
            [`${sectionPrefixCls.value}-with-footer`]: !!footerDom,
          })}
          style={{ ...props.listStyle, ...ss('section') }}
        >
          <div class={cls(`${lp}-header`, sn('header'))} style={ss('header')}>
            {props.showSelectAll ? (
              <>
                {!props.showRemove && !mergedPagination.value && checkbox}
                {dropdown}
              </>
            ) : null}
            <span class={`${lp}-header-selected`}>
              {getSelectAllLabel(checkedActiveItems.value.length, filteredItems.value.length)}
            </span>
            <span class={cls(`${lp}-header-title`, sn('title'))} style={ss('title')}>
              {props.titleText}
            </span>
          </div>
          <div
            class={cls(`${lp}-body`, sn('body'), {
              [`${lp}-body-with-search`]: !!props.showSearch,
            })}
            style={ss('body')}
          >
            {search}
            {bodyNode}
          </div>
          {footerDom && (
            <div class={cls(`${lp}-footer`, sn('footer'))} style={ss('footer')}>
              {footerDom}
            </div>
          )}
        </div>
      )
    }
  },
})
