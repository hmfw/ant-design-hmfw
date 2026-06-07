import { defineComponent, computed, ref, watch, type PropType, type VNode, Fragment } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Spin } from '../spin'
import { Empty } from '../empty'
import { Pagination } from '../pagination'
import { Row } from '../grid'
import { VirtualList } from '../_internal/virtual-list'
import { provideListContext } from './context'
import type { ListSize, ListItemLayout, ListGridType, PaginationConfig } from './types'

export const List = defineComponent({
  name: 'List',
  props: {
    dataSource: Array as PropType<any[]>,
    renderItem: Function as PropType<(item: any, index: number) => VNode | null>,
    header: [String, Object] as PropType<string | VNode>,
    footer: [String, Object] as PropType<string | VNode>,
    bordered: Boolean,
    size: { type: String as PropType<ListSize>, default: 'default' },
    split: { type: Boolean, default: true },
    loading: [Boolean, Object] as PropType<boolean | { spinning?: boolean }>,
    locale: Object as PropType<{ emptyText?: string | VNode }>,
    pagination: [Boolean, Object] as PropType<boolean | PaginationConfig>,
    grid: Object as PropType<ListGridType>,
    itemLayout: { type: String as PropType<ListItemLayout>, default: 'horizontal' },
    rowKey: [String, Function] as PropType<string | ((item: any) => string | number)>,
    loadMore: Object as PropType<VNode>,
    virtual: Boolean,
    height: [Number, String] as PropType<number | string>,
    itemHeight: {
      type: Number,
      default: 48,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('list')

    // Pagination state
    const paginationConfig = computed(() => (typeof props.pagination === 'object' ? props.pagination : {}))

    const internalCurrent = ref(paginationConfig.value.defaultCurrent || 1)
    const internalPageSize = ref(paginationConfig.value.defaultPageSize || 10)

    watch(
      () => paginationConfig.value.current,
      (val) => {
        if (val !== undefined) {
          internalCurrent.value = val
        }
      },
    )

    watch(
      () => paginationConfig.value.pageSize,
      (val) => {
        if (val !== undefined) {
          internalPageSize.value = val
        }
      },
    )

    const currentPage = computed(() => paginationConfig.value.current ?? internalCurrent.value)
    const pageSize = computed(() => paginationConfig.value.pageSize ?? internalPageSize.value)

    const handlePageChange = (page: number, size: number) => {
      internalCurrent.value = page
      internalPageSize.value = size
      paginationConfig.value.onChange?.(page, size)
    }

    // Loading state
    const loadingConfig = computed(() =>
      typeof props.loading === 'boolean' ? { spinning: props.loading } : props.loading || {},
    )
    const isLoading = computed(() => !!loadingConfig.value.spinning)

    // Provide context for children
    provideListContext({
      grid: props.grid,
      itemLayout: props.itemLayout,
    })

    // Get key for item
    const getKey = (item: any, index: number): string | number => {
      if (typeof props.rowKey === 'function') {
        return props.rowKey(item)
      }
      if (typeof props.rowKey === 'string') {
        return item[props.rowKey]
      }
      if (item && typeof item === 'object' && 'key' in item) {
        return item.key
      }
      return `list-item-${index}`
    }

    return () => {
      const items = props.dataSource ?? []
      const isEmpty = items.length === 0 && !slots.default

      // Pagination data slicing
      let displayItems = items
      if (props.pagination && items.length > 0) {
        const start = (currentPage.value - 1) * pageSize.value
        const end = start + pageSize.value
        displayItems = items.slice(start, end)
      }

      // Render items
      const renderInternalItem = (item: any, index: number) => {
        if (!props.renderItem) return null
        const key = getKey(item, index)
        return <Fragment key={key}>{props.renderItem(item, index)}</Fragment>
      }

      const renderedItems = displayItems.map(renderInternalItem)

      // Grid layout
      let childrenContent: VNode | VNode[] | null = null
      if (isLoading.value && displayItems.length === 0) {
        childrenContent = <div style={{ minHeight: '53px' }} />
      } else if (displayItems.length > 0) {
        // 虚拟滚动模式
        if (props.virtual && props.height) {
          if (props.grid) {
            // Grid 模式暂不支持虚拟滚动
            childrenContent = (
              <Row class={`${prefixCls}-container`} gutter={props.grid.gutter}>
                {renderedItems}
              </Row>
            )
          } else {
            // 普通列表支持虚拟滚动
            childrenContent = (
              <VirtualList
                data={displayItems}
                height={props.height}
                itemHeight={props.itemHeight}
                renderItem={(item: any, index: number) => {
                  return props.renderItem?.(item, index) || null
                }}
                itemKey={(item: any, index: number) => getKey(item, index)}
              />
            )
          }
        } else {
          // 常规模式
          if (props.grid) {
            childrenContent = (
              <Row class={`${prefixCls}-container`} gutter={props.grid.gutter}>
                {renderedItems}
              </Row>
            )
          } else {
            childrenContent = <ul class={`${prefixCls}-items`}>{renderedItems}</ul>
          }
        }
      } else if (isEmpty) {
        childrenContent = (
          <div class={`${prefixCls}-empty-text`}>{props.locale?.emptyText || <Empty description="暂无数据" />}</div>
        )
      }

      // Pagination rendering
      const paginationPosition = paginationConfig.value.position || 'bottom'
      const showPagination = !!props.pagination && items.length > 0
      const paginationNode = showPagination ? (
        <div class={`${prefixCls}-pagination`}>
          <Pagination
            current={currentPage.value}
            pageSize={pageSize.value}
            total={paginationConfig.value.total ?? items.length}
            onChange={handlePageChange}
          />
        </div>
      ) : null

      const isSomethingAfterLastItem = !!(props.loadMore || showPagination || props.footer || slots.footer)

      const classes = cls(prefixCls, {
        [`${prefixCls}-sm`]: props.size === 'small',
        [`${prefixCls}-lg`]: props.size === 'large',
        [`${prefixCls}-bordered`]: !!props.bordered,
        [`${prefixCls}-split`]: !!props.split,
        [`${prefixCls}-loading`]: !!isLoading.value,
        [`${prefixCls}-grid`]: !!props.grid,
        [`${prefixCls}-vertical`]: props.itemLayout === 'vertical',
        [`${prefixCls}-something-after-last-item`]: !!isSomethingAfterLastItem,
      })

      return (
        <div class={classes}>
          {(paginationPosition === 'top' || paginationPosition === 'both') && paginationNode}
          {(props.header || slots.header) && (
            <div class={`${prefixCls}-header`}>{slots.header?.() ?? props.header}</div>
          )}
          <Spin spinning={isLoading.value}>
            {childrenContent}
            {slots.default?.()}
          </Spin>
          {(props.footer || slots.footer) && (
            <div class={`${prefixCls}-footer`}>{slots.footer?.() ?? props.footer}</div>
          )}
          {props.loadMore || ((paginationPosition === 'bottom' || paginationPosition === 'both') && paginationNode)}
        </div>
      )
    }
  },
})
