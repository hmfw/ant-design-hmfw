import { defineComponent, ref, computed, type PropType, type Ref, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { LeftOutlined, RightOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@hmfw/icons'
import { Select } from '../select'
import { useBreakpoint } from '../grid/hooks/useBreakpoint'
import type { ComponentSize } from '../config-provider'
import type {
  PaginationAlign,
  PaginationItemType,
  ShowTotalFn,
  ItemRenderFn,
  PaginationClassNames,
  PaginationStyles,
  PaginationProps,
} from './types'

const paginationProps = {
  current: { type: Number, default: 1 },
  total: { type: Number, default: 0 },
  pageSize: { type: Number, default: 10 },
  pageSizeOptions: { type: Array as PropType<number[]>, default: () => [10, 20, 50, 100] },
  showSizeChanger: { type: Boolean, default: false },
  showQuickJumper: { type: Boolean, default: false },
  showTotal: { type: Function as PropType<ShowTotalFn>, default: undefined },
  // 默认 undefined：responsive 需据「是否显式指定 size」判断是否在 xs 断点自动缩小；
  // 具体渲染尺寸由 isSmall 兜底为 'middle'
  size: { type: String as PropType<ComponentSize>, default: undefined },
  simple: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  hideOnSinglePage: { type: Boolean, default: false },
  itemRender: { type: Function as PropType<ItemRenderFn>, default: undefined },
  responsive: { type: Boolean, default: false },
  align: { type: String as PropType<PaginationAlign>, default: undefined },
  classNames: { type: Object as PropType<PaginationClassNames>, default: undefined },
  styles: { type: Object as PropType<PaginationStyles>, default: undefined },
} satisfies Record<keyof PaginationProps, any>

/** 快速跳转（jump-prev / jump-next）单次跨越的页数 */
const JUMP_SIZE = 5
/** 页数超过此阈值时才启用省略号折叠，否则平铺显示全部页码 */
const ELLIPSIS_THRESHOLD = 7
/** pages 数组中代表 jump-prev 省略号的哨兵值 */
const JUMP_PREV = -1
/** pages 数组中代表 jump-next 省略号的哨兵值 */
const JUMP_NEXT = -2

export const Pagination = defineComponent({
  name: 'Pagination',
  props: paginationProps,
  emits: ['update:current', 'update:pageSize', 'change', 'showSizeChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('pagination')
    // simple 模式页码框与 normal 模式 quick-jumper 语义不同（前者回显当前页，后者纯输入），
    // 且二者互斥渲染，故各用独立 ref，避免隐式耦合。
    const simpleJumpValue = ref('')
    const quickJumpValue = ref('')

    const screens = useBreakpoint()
    // 是否采用 small 尺寸：显式 size='small'，或开启 responsive 且未指定 size 时在 xs 断点自动缩小。
    const isSmall = computed(() => props.size === 'small' || (props.responsive && !props.size && !!screens.value.xs))

    const currentPageSize = computed(() => {
      // 防止除零，确保 pageSize 至少为 1
      return Math.max(1, props.pageSize)
    })

    const totalPages = computed(() => Math.ceil(props.total / currentPageSize.value))

    const goTo = (page: number) => {
      if (props.disabled) return
      if (page < 1 || page > totalPages.value) return
      if (page === props.current) return
      emit('update:current', page)
      emit('change', page, currentPageSize.value)
    }

    const changePageSize = (size: number) => {
      if (props.disabled) return
      emit('update:pageSize', size)
      // When pageSize changes, reset to page 1 if current page exceeds new total
      const newTotalPages = Math.ceil(props.total / size)
      const newPage = props.current > newTotalPages ? 1 : props.current
      if (newPage !== props.current) {
        emit('update:current', newPage)
      }
      emit('showSizeChange', newPage, size)
      emit('change', newPage, size)
    }

    // 边界校验统一由 goTo 兜底（越界值会被忽略），此处只负责解析与清空输入框。
    const handleJump = (jumpRef: Ref<string>) => {
      const page = parseInt(jumpRef.value, 10)
      if (!isNaN(page)) {
        goTo(page)
      }
      jumpRef.value = ''
    }

    // 当前页数据区间 [起, 止]，供 showTotal 使用；total 为 0 时返回 [0, 0]。
    const range = computed<[number, number]>(() => {
      if (props.total === 0) return [0, 0]
      return [
        (props.current - 1) * currentPageSize.value + 1,
        Math.min(props.current * currentPageSize.value, props.total),
      ]
    })

    const renderItem = (page: number, type: PaginationItemType, element: VNode): VNode => {
      if (props.itemRender) {
        return props.itemRender(page, type, element) as VNode
      }
      return element
    }

    const renderPrevButton = () => {
      const prevCls = cls(
        `${prefixCls}-prev`,
        { [`${prefixCls}-disabled`]: props.current <= 1 },
        props.classNames?.prev,
      )

      return renderItem(
        props.current - 1,
        'prev',
        <li
          key="prev"
          class={prevCls}
          style={props.styles?.prev}
          onClick={() => goTo(props.current - 1)}
          aria-label="Previous"
        >
          <button type="button" disabled={props.current <= 1 || props.disabled} tabindex={-1}>
            <LeftOutlined class="hmfw-icon" />
          </button>
        </li>,
      )
    }

    const renderJumpPrevButton = () => {
      return renderItem(
        Math.max(1, props.current - JUMP_SIZE),
        'jump-prev',
        <li
          key="jump-prev"
          class={cls(`${prefixCls}-jump-prev`, props.classNames?.jumpPrev)}
          style={props.styles?.jumpPrev}
          onClick={() => goTo(Math.max(1, props.current - JUMP_SIZE))}
          aria-label={`向前 ${JUMP_SIZE} 页`}
        >
          <button type="button" class={`${prefixCls}-item-link`} tabindex={-1}>
            <div class={`${prefixCls}-item-container`}>
              <DoubleLeftOutlined class={`${prefixCls}-item-link-icon`} />
              <span class={`${prefixCls}-item-ellipsis`}>•••</span>
            </div>
          </button>
        </li>,
      )
    }

    const renderNextButton = () => {
      const total = totalPages.value

      const nextCls = cls(
        `${prefixCls}-next`,
        { [`${prefixCls}-disabled`]: props.current >= total },
        props.classNames?.next,
      )

      return renderItem(
        props.current + 1,
        'next',
        <li
          key="next"
          class={nextCls}
          style={props.styles?.next}
          onClick={() => goTo(props.current + 1)}
          aria-label="Next"
        >
          <button type="button" disabled={props.current >= total || props.disabled} tabindex={-1}>
            <RightOutlined class="hmfw-icon" />
          </button>
        </li>,
      )
    }

    const renderJumpNextButton = () => {
      const total = totalPages.value
      return renderItem(
        Math.min(total, props.current + JUMP_SIZE),
        'jump-next',
        <li
          key="jump-next"
          class={cls(`${prefixCls}-jump-next`, props.classNames?.jumpNext)}
          style={props.styles?.jumpNext}
          onClick={() => goTo(Math.min(total, props.current + JUMP_SIZE))}
          aria-label={`向后 ${JUMP_SIZE} 页`}
        >
          <button type="button" class={`${prefixCls}-item-link`} tabindex={-1}>
            <div class={`${prefixCls}-item-container`}>
              <DoubleRightOutlined class={`${prefixCls}-item-link-icon`} />
              <span class={`${prefixCls}-item-ellipsis`}>•••</span>
            </div>
          </button>
        </li>,
      )
    }

    const renderPageButton = (page: number) => {
      const pageItemCls = cls(
        `${prefixCls}-item`,
        {
          [`${prefixCls}-item-active`]: page === props.current,
        },
        props.classNames?.item,
        page === props.current ? props.classNames?.itemActive : undefined,
      )

      const pageItemStyle = { ...props.styles?.item, ...(page === props.current ? props.styles?.itemActive : {}) }

      return renderItem(
        page,
        'page',
        <li key={`page-${page}`} class={pageItemCls} style={pageItemStyle} onClick={() => goTo(page)}>
          <button
            type="button"
            aria-label={`第 ${page} 页`}
            aria-current={page === props.current ? 'page' : undefined}
            tabindex={page === props.current ? 0 : -1}
          >
            {page}
          </button>
        </li>,
      )
    }

    const renderSimplePager = () => {
      return (
        <li key="simple-pager" class={`${prefixCls}-simple-pager`}>
          <input
            type="text"
            value={simpleJumpValue.value || props.current}
            onInput={(e) => (simpleJumpValue.value = (e.target as HTMLInputElement).value)}
            onKeydown={(e) => {
              if (e.key === 'Enter') handleJump(simpleJumpValue)
            }}
            onBlur={() => handleJump(simpleJumpValue)}
            disabled={props.disabled}
            size={3}
          />
          <span class={`${prefixCls}-slash`}>/</span>
          <span>{totalPages.value}</span>
        </li>
      )
    }

    const renderSizeChanger = () => {
      return (
        <li key="options" class={cls(`${prefixCls}-options`, props.classNames?.options)} style={props.styles?.options}>
          <Select
            value={currentPageSize.value}
            options={sizeOptions.value}
            size={isSmall.value ? 'small' : 'middle'}
            disabled={props.disabled}
            onChange={(val) => changePageSize(val as number)}
            class={cls(`${prefixCls}-options-size-changer`, props.classNames?.sizeChanger)}
          />
        </li>
      )
    }

    const renderQuickJumper = () => {
      return (
        <li
          key="quick-jumper"
          class={cls(`${prefixCls}-options-quick-jumper`, props.classNames?.quickJumper)}
          style={props.styles?.quickJumper}
        >
          跳至
          <input
            type="text"
            value={quickJumpValue.value}
            onInput={(e) => (quickJumpValue.value = (e.target as HTMLInputElement).value)}
            onKeydown={(e) => {
              if (e.key === 'Enter') handleJump(quickJumpValue)
            }}
            onBlur={() => handleJump(quickJumpValue)}
            disabled={props.disabled}
          />
          页
        </li>
      )
    }

    // 预计算页码选项
    const sizeOptions = computed(() =>
      props.pageSizeOptions.map((size) => ({
        value: size,
        label: `${size} 条/页`,
      })),
    )

    // 预计算分页页码数组
    const pages = computed(() => {
      const result: number[] = []
      const total = totalPages.value
      const cur = props.current

      if (total <= ELLIPSIS_THRESHOLD) {
        for (let i = 1; i <= total; i++) result.push(i)
      } else {
        result.push(1)
        if (cur > 4) result.push(JUMP_PREV)
        const start = Math.max(2, cur - 2)
        const end = Math.min(total - 1, cur + 2)
        for (let i = start; i <= end; i++) result.push(i)
        if (cur < total - 3) result.push(JUMP_NEXT)
        result.push(total)
      }

      return result
    })

    const renderSimplePagination = () => {
      const simpleCls = cls(
        prefixCls,
        `${prefixCls}-simple`,
        {
          [`${prefixCls}-mini`]: isSmall.value,
          [`${prefixCls}-disabled`]: !!props.disabled,
        },
        props.align ? `${prefixCls}-${props.align}` : null,
        props.classNames?.root,
      )

      return (
        <ul class={simpleCls} style={props.styles?.root} role="navigation" aria-label="分页">
          {renderPrevButton()}
          {renderSimplePager()}
          {renderNextButton()}
        </ul>
      )
    }

    const renderNormalPagination = () => {
      const normalCls = cls(
        prefixCls,
        {
          [`${prefixCls}-mini`]: isSmall.value,
          [`${prefixCls}-disabled`]: !!props.disabled,
        },
        props.align ? `${prefixCls}-${props.align}` : null,
        props.classNames?.root,
      )

      return (
        <ul class={normalCls} style={props.styles?.root} role="navigation" aria-label="分页">
          {props.showTotal && (
            <li key="total" class={cls(`${prefixCls}-total-text`, props.classNames?.total)} style={props.styles?.total}>
              {props.showTotal(props.total, range.value)}
            </li>
          )}
          {renderPrevButton()}
          {pages.value.map((page) => {
            if (page === JUMP_PREV) return renderJumpPrevButton()
            if (page === JUMP_NEXT) return renderJumpNextButton()
            return renderPageButton(page)
          })}
          {renderNextButton()}
          {props.showSizeChanger && renderSizeChanger()}
          {props.showQuickJumper && renderQuickJumper()}
        </ul>
      )
    }

    return () => {
      if (props.hideOnSinglePage && totalPages.value <= 1) return null
      return props.simple ? renderSimplePagination() : renderNormalPagination()
    }
  },
})
