import { defineComponent, ref, watch, computed, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { LeftOutlined, RightOutlined } from '../icon/icons'
import { Select } from '../select'
import type { PaginationSize, ItemRenderFn, PaginationClassNames, PaginationStyles } from './types'

export const Pagination = defineComponent({
  name: 'Pagination',
  props: {
    current: Number,
    defaultCurrent: { type: Number, default: 1 },
    total: { type: Number, default: 0 },
    pageSize: Number,
    defaultPageSize: { type: Number, default: 10 },
    pageSizeOptions: {
      type: Array as PropType<number[]>,
      default: () => [10, 20, 50, 100],
    },
    showSizeChanger: Boolean,
    showQuickJumper: Boolean,
    showTotal: Function as PropType<(total: number, range: [number, number]) => string>,
    size: String as PropType<PaginationSize>,
    simple: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean,
    itemRender: Function as PropType<ItemRenderFn>,
    responsive: Boolean,
    align: String as PropType<'start' | 'center' | 'end'>,
    classNames: Object as PropType<PaginationClassNames>,
    styles: Object as PropType<PaginationStyles>,
  },
  emits: ['update:current', 'update:pageSize', 'change', 'showSizeChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('pagination')
    const innerCurrent = ref(props.defaultCurrent)
    const innerPageSize = ref(props.defaultPageSize)
    const jumpValue = ref('')

    watch(
      () => props.current,
      (v) => {
        if (v !== undefined) innerCurrent.value = v
      },
    )
    watch(
      () => props.pageSize,
      (v) => {
        if (v !== undefined) innerPageSize.value = v
      },
    )

    const currentPage = computed(() => (props.current !== undefined ? props.current : innerCurrent.value))

    const currentPageSize = computed(() => (props.pageSize !== undefined ? props.pageSize : innerPageSize.value))

    const totalPages = computed(() => Math.ceil(props.total / currentPageSize.value))

    const goTo = (page: number) => {
      if (props.disabled) return
      if (page < 1 || page > totalPages.value) return
      if (page === currentPage.value) return
      innerCurrent.value = page
      emit('update:current', page)
      emit('change', page, currentPageSize.value)
    }

    const changePageSize = (size: number) => {
      if (props.disabled) return
      innerPageSize.value = size
      emit('update:pageSize', size)
      // When pageSize changes, reset to page 1 if current page exceeds new total
      const newTotalPages = Math.ceil(props.total / size)
      const newPage = currentPage.value > newTotalPages ? 1 : currentPage.value
      if (newPage !== currentPage.value) {
        innerCurrent.value = newPage
        emit('update:current', newPage)
      }
      emit('showSizeChange', newPage, size)
      emit('change', newPage, size)
    }

    const handleJump = () => {
      const page = parseInt(jumpValue.value, 10)
      if (!isNaN(page)) {
        goTo(page)
      }
      jumpValue.value = ''
    }

    const range = computed<[number, number]>(() => [
      (currentPage.value - 1) * currentPageSize.value + 1,
      Math.min(currentPage.value * currentPageSize.value, props.total),
    ])

    const renderItem = (
      page: number,
      type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
      element: VNode,
    ): VNode => {
      if (props.itemRender) {
        return props.itemRender(page, type, element) as VNode
      }
      return element
    }

    return () => {
      if (props.hideOnSinglePage && totalPages.value <= 1) return null

      const pages: number[] = []
      const total = totalPages.value
      const cur = currentPage.value

      if (props.simple) {
        // Simple mode: just show current/total
        return (
          <ul
            class={cls(
              prefixCls,
              `${prefixCls}-simple`,
              {
                [`${prefixCls}-mini`]: props.size === 'small',
                [`${prefixCls}-disabled`]: !!props.disabled,
              },
              props.align ? `${prefixCls}-${props.align}` : null,
              props.classNames?.root,
            )}
            style={props.styles?.root}
            role="navigation"
            aria-label="分页"
          >
            {renderItem(
              cur - 1,
              'prev',
              <li
                class={cls(`${prefixCls}-prev`, { [`${prefixCls}-disabled`]: cur <= 1 }, props.classNames?.prev)}
                style={props.styles?.prev}
                onClick={() => goTo(cur - 1)}
                aria-label="Previous"
              >
                <button type="button" disabled={cur <= 1 || props.disabled} tabindex={-1}>
                  <Icon component={LeftOutlined} />
                </button>
              </li>,
            )}
            <li class={`${prefixCls}-simple-pager`}>
              <input
                type="text"
                value={jumpValue.value || cur}
                onInput={(e) => (jumpValue.value = (e.target as HTMLInputElement).value)}
                onKeydown={(e) => {
                  if (e.key === 'Enter') handleJump()
                }}
                onBlur={handleJump}
                disabled={props.disabled}
                size={3}
              />
              <span class={`${prefixCls}-slash`}>/</span>
              <span>{total}</span>
            </li>
            {renderItem(
              cur + 1,
              'next',
              <li
                class={cls(`${prefixCls}-next`, { [`${prefixCls}-disabled`]: cur >= total }, props.classNames?.next)}
                style={props.styles?.next}
                onClick={() => goTo(cur + 1)}
                aria-label="Next"
              >
                <button type="button" disabled={cur >= total || props.disabled} tabindex={-1}>
                  <Icon component={RightOutlined} />
                </button>
              </li>,
            )}
          </ul>
        )
      }

      // Normal mode: calculate page numbers
      if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i)
      } else {
        pages.push(1)
        if (cur > 4) pages.push(-1) // jump-prev ellipsis
        const start = Math.max(2, cur - 2)
        const end = Math.min(total - 1, cur + 2)
        for (let i = start; i <= end; i++) pages.push(i)
        if (cur < total - 3) pages.push(-2) // jump-next ellipsis
        pages.push(total)
      }

      return (
        <ul
          class={cls(
            prefixCls,
            {
              [`${prefixCls}-mini`]: props.size === 'small',
              [`${prefixCls}-disabled`]: !!props.disabled,
            },
            props.align ? `${prefixCls}-${props.align}` : null,
            props.classNames?.root,
          )}
          style={props.styles?.root}
          role="navigation"
          aria-label="分页"
        >
          {props.showTotal && (
            <li class={cls(`${prefixCls}-total-text`, props.classNames?.total)} style={props.styles?.total}>
              {props.showTotal(props.total, range.value)}
            </li>
          )}
          {renderItem(
            cur - 1,
            'prev',
            <li
              class={cls(`${prefixCls}-prev`, { [`${prefixCls}-disabled`]: cur <= 1 }, props.classNames?.prev)}
              style={props.styles?.prev}
              onClick={() => goTo(cur - 1)}
              aria-label="Previous"
            >
              <button type="button" disabled={cur <= 1 || props.disabled} tabindex={-1}>
                <Icon component={LeftOutlined} />
              </button>
            </li>,
          )}
          {pages.map((p) => {
            if (p === -1) {
              // jump-prev
              return renderItem(
                Math.max(1, cur - 5),
                'jump-prev',
                <li
                  key="jump-prev"
                  class={cls(`${prefixCls}-jump-prev`, props.classNames?.jumpPrev)}
                  style={props.styles?.jumpPrev}
                  onClick={() => goTo(Math.max(1, cur - 5))}
                  aria-label="向前 5 页"
                >
                  <button type="button" class={`${prefixCls}-item-link`} tabindex={-1}>
                    <div class={`${prefixCls}-item-container`}>
                      <span class={`${prefixCls}-item-link-icon`}>«</span>
                      <span class={`${prefixCls}-item-ellipsis`}>•••</span>
                    </div>
                  </button>
                </li>,
              )
            }
            if (p === -2) {
              // jump-next
              return renderItem(
                Math.min(total, cur + 5),
                'jump-next',
                <li
                  key="jump-next"
                  class={cls(`${prefixCls}-jump-next`, props.classNames?.jumpNext)}
                  style={props.styles?.jumpNext}
                  onClick={() => goTo(Math.min(total, cur + 5))}
                  aria-label="向后 5 页"
                >
                  <button type="button" class={`${prefixCls}-item-link`} tabindex={-1}>
                    <div class={`${prefixCls}-item-container`}>
                      <span class={`${prefixCls}-item-link-icon`}>»</span>
                      <span class={`${prefixCls}-item-ellipsis`}>•••</span>
                    </div>
                  </button>
                </li>,
              )
            }
            return renderItem(
              p,
              'page',
              <li
                key={p}
                class={cls(
                  `${prefixCls}-item`,
                  {
                    [`${prefixCls}-item-active`]: p === cur,
                  },
                  props.classNames?.item,
                  p === cur ? props.classNames?.itemActive : undefined,
                )}
                style={{ ...props.styles?.item, ...(p === cur ? props.styles?.itemActive : {}) }}
                onClick={() => goTo(p)}
              >
                <button
                  type="button"
                  aria-label={`第 ${p} 页`}
                  aria-current={p === cur ? 'page' : undefined}
                  tabindex={p === cur ? 0 : -1}
                >
                  {p}
                </button>
              </li>,
            )
          })}
          {renderItem(
            cur + 1,
            'next',
            <li
              class={cls(`${prefixCls}-next`, { [`${prefixCls}-disabled`]: cur >= total }, props.classNames?.next)}
              style={props.styles?.next}
              onClick={() => goTo(cur + 1)}
              aria-label="Next"
            >
              <button type="button" disabled={cur >= total || props.disabled} tabindex={-1}>
                <Icon component={RightOutlined} />
              </button>
            </li>,
          )}
          {props.showSizeChanger && (
            <li class={cls(`${prefixCls}-options`, props.classNames?.options)} style={props.styles?.options}>
              <Select
                value={currentPageSize.value}
                options={props.pageSizeOptions.map((size) => ({
                  value: size,
                  label: `${size} 条/页`,
                }))}
                size={props.size === 'small' ? 'small' : 'middle'}
                disabled={props.disabled}
                onChange={(val) => changePageSize(val as number)}
                class={cls(`${prefixCls}-options-size-changer`, props.classNames?.sizeChanger)}
              />
            </li>
          )}
          {props.showQuickJumper && (
            <li
              class={cls(`${prefixCls}-options-quick-jumper`, props.classNames?.quickJumper)}
              style={props.styles?.quickJumper}
            >
              跳至
              <input
                type="text"
                value={jumpValue.value}
                onInput={(e) => (jumpValue.value = (e.target as HTMLInputElement).value)}
                onKeydown={(e) => {
                  if (e.key === 'Enter') handleJump()
                }}
                onBlur={handleJump}
                disabled={props.disabled}
              />
              页
            </li>
          )}
        </ul>
      )
    }
  },
})
