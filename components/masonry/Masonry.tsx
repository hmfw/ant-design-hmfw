import type { CSSProperties, PropType } from 'vue'
import { computed, defineComponent, ref, watch, watchEffect } from 'vue'
import { useConfig, usePrefixCls } from '../config-provider/context'
import { useBreakpoint } from '../grid/hooks/useBreakpoint'
import { responsiveArray } from '../grid/hooks/useBreakpoint'
import useDelay from './hooks/useDelay'
import usePositions from './hooks/usePositions'
import useRefs from './hooks/useRefs'
import MasonryItem from './MasonryItem'
import type { MasonryClassNames, MasonryItemType, MasonryProps, MasonryStyles } from './types'
import type { Breakpoint } from '../grid/types'

const masonryProps = {
  prefixCls: { type: String, default: undefined },
  className: { type: String, default: undefined },
  style: { type: Object as PropType<CSSProperties>, default: undefined },
  classNames: { type: Object as PropType<MasonryClassNames>, default: undefined },
  styles: { type: Object as PropType<MasonryStyles>, default: undefined },
  gutter: { type: [Number, Array] as PropType<number | [number, number]>, default: 0 },
  items: { type: Array as PropType<MasonryItemType[]>, default: () => [] },
  columns: { type: [Number, Object] as PropType<number | Partial<Record<Breakpoint, number>>>, default: 3 },
  onLayoutChange: {
    type: Function as PropType<(sortInfo: { key: any; column: number }[]) => void>,
    default: undefined,
  },
  fresh: { type: Boolean, default: false },
} satisfies Record<keyof MasonryProps, any>

export default defineComponent({
  name: 'Masonry',
  props: masonryProps,
  setup(props, { slots, expose }) {
    const prefixCls = props.prefixCls || usePrefixCls('masonry')
    const config = useConfig()

    // ======================= Refs =======================
    const containerRef = ref<HTMLDivElement>()
    const [setItemRef, getItemRef] = useRefs()

    expose({
      get nativeElement() {
        return containerRef.value!
      },
    })

    // ==================== Breakpoint ====================
    const screens = useBreakpoint()

    const gutters = computed(() => {
      const gutter = props.gutter
      if (Array.isArray(gutter)) {
        return gutter
      }
      return [gutter, gutter]
    })

    const horizontalGutter = computed(() => gutters.value[0] || 0)
    const verticalGutter = computed(() => gutters.value[1] || gutters.value[0] || 0)

    // ====================== Layout ======================
    const columnCount = computed(() => {
      const cols = props.columns
      if (!cols) {
        return 3
      }

      if (typeof cols === 'number') {
        return cols
      }

      // 响应式断点：从大到小查找第一个匹配的断点
      const matchingBreakpoint = responsiveArray.find(
        (breakpoint) => screens.value[breakpoint] && cols[breakpoint] !== undefined,
      )

      if (matchingBreakpoint) {
        return cols[matchingBreakpoint] as number
      }

      return cols.xs ?? 1
    })

    // ================== Items Position ==================
    const mergedItems = computed(() => props.items || [])

    const itemHeights = ref<[any, number, number?][]>([])

    const collectItemSize = useDelay(() => {
      const nextItemsHeight = mergedItems.value.map((item, index) => {
        const itemKey = item.key ?? index
        const itemEle = getItemRef(itemKey)
        const rect = itemEle?.getBoundingClientRect()
        return [itemKey, rect ? rect.height : 0, item.column] as [any, number, number?]
      })

      // 只在高度变化时更新 - 使用浅比较
      const changed =
        itemHeights.value.length !== nextItemsHeight.length ||
        itemHeights.value.some((item, i) => {
          const next = nextItemsHeight[i]
          return item[0] !== next[0] || item[1] !== next[1] || item[2] !== next[2]
        })

      if (changed) {
        itemHeights.value = nextItemsHeight
      }
    })

    const positions = usePositions(
      () => itemHeights.value,
      () => columnCount.value,
      () => verticalGutter.value,
    )

    const itemPositions = computed(() => positions.value.itemPositions)
    const totalHeight = computed(() => positions.value.totalHeight)

    const itemWithPositions = computed(() =>
      mergedItems.value.map((item, index) => {
        const key = item.key ?? index
        return {
          item,
          itemIndex: index,
          itemKey: key,
          key,
          position: itemPositions.value.get(key),
        }
      }),
    )

    // 监听 items 和列数变化，重新收集尺寸
    watch(
      [() => mergedItems.value, () => columnCount.value],
      () => {
        collectItemSize()
      },
      { flush: 'post' },
    )

    // =================== Layout Change ==================
    watch(
      () => itemWithPositions.value,
      (items) => {
        if (props.onLayoutChange && items.every(({ position }) => position)) {
          const sortInfo = items.map(({ item, position }) => ({
            key: item.key,
            column: position!.column,
          }))
          props.onLayoutChange(sortInfo)
        }
      },
      { flush: 'post' },
    )

    // 监听容器尺寸变化
    const resizeObserver = ref<ResizeObserver>()

    watchEffect((onCleanup) => {
      if (containerRef.value && typeof ResizeObserver !== 'undefined') {
        resizeObserver.value = new ResizeObserver(() => {
          collectItemSize()
        })
        resizeObserver.value.observe(containerRef.value)
      }

      onCleanup(() => {
        resizeObserver.value?.disconnect()
      })
    })

    // ====================== Render ======================
    return () => {
      const { className, style, classNames, styles } = props

      const rootStyle: CSSProperties = {
        height: `${totalHeight.value}px`,
        position: 'relative',
        ...styles?.root,
        ...style,
      }

      const isRtl = config.value.direction === 'rtl'

      return (
        <div
          ref={containerRef}
          class={[prefixCls, classNames?.root, className, { [`${prefixCls}-rtl`]: isRtl }]}
          style={rootStyle}
          onLoad={collectItemSize}
          onError={collectItemSize}
        >
          {itemWithPositions.value.map(({ item, itemKey, position, itemIndex }) => {
            const columnIndex = position?.column ?? 0

            // 使用变量减少重复计算
            const itemWidth = `calc((100% + ${horizontalGutter.value}px) / ${columnCount.value})`
            const itemStyle: CSSProperties = {
              position: 'absolute',
              [isRtl ? 'right' : 'left']: `calc(${itemWidth} * ${columnIndex})`,
              width: `calc(${itemWidth} - ${horizontalGutter.value}px)`,
              top: position?.top !== undefined ? `${position.top}px` : undefined,
              ...styles?.item,
            }

            return (
              <MasonryItem
                key={itemKey}
                ref={(el: any) => {
                  if (el?.element) {
                    setItemRef(itemKey, el.element)
                  }
                }}
                prefixCls={prefixCls}
                item={item}
                style={itemStyle}
                className={classNames?.item}
                index={itemIndex}
                column={columnIndex}
                fresh={props.fresh}
                onResize={props.fresh ? collectItemSize : undefined}
                v-slots={{
                  default: slots.default,
                }}
              />
            )
          })}
        </div>
      )
    }
  },
})
