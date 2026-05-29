import { defineComponent, ref, watch, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { PaginationSize } from './types'

export const Pagination = defineComponent({
  name: 'Pagination',
  props: {
    current: Number,
    defaultCurrent: { type: Number, default: 1 },
    total: { type: Number, default: 0 },
    pageSize: { type: Number, default: 10 },
    size: String as PropType<PaginationSize>,
    simple: Boolean,
    disabled: Boolean,
    hideOnSinglePage: Boolean,
    showTotal: Function as PropType<(total: number, range: [number, number]) => string>,
  },
  emits: ['update:current', 'change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('pagination')
    const innerCurrent = ref(props.defaultCurrent)

    watch(() => props.current, (v) => { if (v !== undefined) innerCurrent.value = v })

    const currentPage = computed(() =>
      props.current !== undefined ? props.current : innerCurrent.value,
    )

    const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

    const goTo = (page: number) => {
      if (props.disabled) return
      if (page < 1 || page > totalPages.value) return
      innerCurrent.value = page
      emit('update:current', page)
      emit('change', page, props.pageSize)
    }

    const range = computed<[number, number]>(() => [
      (currentPage.value - 1) * props.pageSize + 1,
      Math.min(currentPage.value * props.pageSize, props.total),
    ])

    return () => {
      if (props.hideOnSinglePage && totalPages.value <= 1) return null

      const pages: number[] = []
      const total = totalPages.value
      const cur = currentPage.value

      if (total <= 7) {
        for (let i = 1; i <= total; i++) pages.push(i)
      } else {
        pages.push(1)
        if (cur > 4) pages.push(-1) // ellipsis
        const start = Math.max(2, cur - 2)
        const end = Math.min(total - 1, cur + 2)
        for (let i = start; i <= end; i++) pages.push(i)
        if (cur < total - 3) pages.push(-2) // ellipsis
        pages.push(total)
      }

      return (
        <ul
          class={cls(prefixCls, {
            [`${prefixCls}-mini`]: props.size === 'small',
            [`${prefixCls}-disabled`]: props.disabled,
          })}
          role="navigation"
          aria-label="分页"
        >          {props.showTotal && (
            <li class={`${prefixCls}-total-text`}>
              {props.showTotal(props.total, range.value)}
            </li>
          )}
          <li
            class={cls(`${prefixCls}-prev`, { [`${prefixCls}-disabled`]: currentPage.value <= 1 })}
            onClick={() => goTo(currentPage.value - 1)}
            aria-label="Previous"
          >
            <button disabled={currentPage.value <= 1 || props.disabled}>‹</button>
          </li>
          {pages.map((p, i) =>
            p < 0 ? (
              <li key={`ellipsis-${i}`} class={`${prefixCls}-jump-prev`}>
                <span>•••</span>
              </li>
            ) : (
              <li
                key={p}
                class={cls(`${prefixCls}-item`, {
                  [`${prefixCls}-item-active`]: p === currentPage.value,
                })}
                onClick={() => goTo(p)}
              >
                <button
                  aria-label={`第 ${p} 页`}
                  aria-current={p === currentPage.value ? 'page' : undefined}
                >{p}</button>
              </li>
            ),
          )}
          <li
            class={cls(`${prefixCls}-next`, { [`${prefixCls}-disabled`]: currentPage.value >= totalPages.value })}
            onClick={() => goTo(currentPage.value + 1)}
            aria-label="Next"
          >
            <button disabled={currentPage.value >= totalPages.value || props.disabled}>›</button>
          </li>
        </ul>
      )
    }
  },
})
