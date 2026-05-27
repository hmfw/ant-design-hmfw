import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Spin } from '../spin'
import { Empty } from '../empty'
import { Pagination } from '../pagination'

export const ListItemMeta = defineComponent({
  name: 'ListItemMeta',
  props: {
    avatar: [String, Object],
    title: String,
    description: String,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('list')
    return () => (
      <div class={`${prefixCls}-item-meta`}>
        {(props.avatar || slots.avatar) && (
          <div class={`${prefixCls}-item-meta-avatar`}>
            {slots.avatar?.() ?? props.avatar}
          </div>
        )}
        <div class={`${prefixCls}-item-meta-content`}>
          {(props.title || slots.title) && (
            <h4 class={`${prefixCls}-item-meta-title`}>{slots.title?.() ?? props.title}</h4>
          )}
          {(props.description || slots.description) && (
            <div class={`${prefixCls}-item-meta-description`}>{slots.description?.() ?? props.description}</div>
          )}
        </div>
      </div>
    )
  },
})

export const ListItem = defineComponent({
  name: 'ListItem',
  props: {
    extra: String,
    actions: Array as PropType<unknown[]>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('list')
    return () => (
      <li class={`${prefixCls}-item`}>
        <div class={`${prefixCls}-item-main`}>
          {slots.default?.()}
        </div>
        {(props.extra || slots.extra) && (
          <div class={`${prefixCls}-item-extra`}>{slots.extra?.() ?? props.extra}</div>
        )}
        {(props.actions || slots.actions) && (
          <ul class={`${prefixCls}-item-action`}>
            {(slots.actions?.() ?? props.actions as any[])?.map((action: any, i: number) => (
              <li key={i}>{action}</li>
            ))}
          </ul>
        )}
      </li>
    )
  },
})

export const List = defineComponent({
  name: 'List',
  props: {
    dataSource: Array as PropType<unknown[]>,
    renderItem: Function as PropType<(item: unknown, index: number) => unknown>,
    header: String,
    footer: String,
    bordered: Boolean,
    size: { type: String as PropType<'default' | 'large' | 'small'>, default: 'default' },
    split: { type: Boolean, default: true },
    loading: Boolean,
    locale: Object as PropType<{ emptyText?: string }>,
    pagination: [Boolean, Object] as PropType<boolean | { pageSize?: number; current?: number; total?: number; onChange?: (page: number, pageSize: number) => void }>,
    grid: Object as PropType<{ column?: number; gutter?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number; xxl?: number }>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('list')

    return () => {
      const items = props.dataSource ?? []
      const isEmpty = items.length === 0

      const listContent = (
        <ul class={`${prefixCls}-items`}>
          {isEmpty
            ? (
              <li class={`${prefixCls}-empty-text`}>
                <Empty description={props.locale?.emptyText ?? '暂无数据'} />
              </li>
            )
            : items.map((item, index) => {
              if (props.renderItem) return props.renderItem(item, index)
              if (slots.renderItem) return slots.renderItem({ item, index })
              return null
            })
          }
        </ul>
      )

      const paginationConfig = typeof props.pagination === 'object' ? props.pagination : {}
      const showPagination = !!props.pagination

      return (
        <div class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-bordered`]: props.bordered,
          [`${prefixCls}-split`]: props.split,
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-grid`]: !!props.grid,
        })}>
          {(props.header || slots.header) && (
            <div class={`${prefixCls}-header`}>{slots.header?.() ?? props.header}</div>
          )}
          {props.loading ? (
            <div class={`${prefixCls}-spin`}>
              <Spin />
            </div>
          ) : listContent}
          {(props.footer || slots.footer) && (
            <div class={`${prefixCls}-footer`}>{slots.footer?.() ?? props.footer}</div>
          )}
          {showPagination && !isEmpty && (
            <div class={`${prefixCls}-pagination`}>
              <Pagination
                total={paginationConfig.total ?? items.length}
                pageSize={paginationConfig.pageSize ?? 10}
                current={paginationConfig.current}
                onChange={paginationConfig.onChange}
              />
            </div>
          )}
        </div>
      )
    }
  },
})
