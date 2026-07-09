import { ref, computed, watch, type Ref, type ComputedRef } from 'vue'

/**
 * 虚拟滚动 composable — 提取自 VirtualList 的核心计算逻辑。
 *
 * 使用固定高度模式，通过 O(1) 算法计算可见范围、偏移量和总高度，
 * 适用于任何需要虚拟滚动的组件（VirtualList、Table 等）。
 *
 * 内置 data 变化时自动重置滚动位置的 watcher。
 */
export function useVirtualScroll(options: {
  /** 滚动容器的模板引用 */
  containerRef: Ref<HTMLElement | undefined>
  /** 数据源（响应式） */
  data: Ref<any[]> | ComputedRef<any[]>
  /** 每项固定高度 */
  itemHeight: Ref<number> | ComputedRef<number>
  /** 容器可见高度（响应式） */
  containerHeight: Ref<number> | ComputedRef<number>
  /** 上下各预渲染的额外项数，默认 5 */
  buffer?: number
  /** 滚动事件回调 */
  onScroll?: (scrollTop: number) => void
}) {
  const { containerRef, data, itemHeight, containerHeight } = options
  const buffer = options.buffer ?? 5

  const scrollTop = ref(0)

  // ----------------------------------------------------------------
  // 核心计算（O(1) 算法）
  // ----------------------------------------------------------------

  /** 所有数据项的总高度 */
  const totalHeight = computed(() => data.value.length * itemHeight.value)

  /** 可见区域起始索引（含上方缓冲区） */
  const startIndex = computed(() => {
    const index = Math.floor(scrollTop.value / itemHeight.value)
    return Math.max(0, index - buffer)
  })

  /** 可见区域结束索引（含下方缓冲区） */
  const endIndex = computed(() => {
    const index = Math.ceil((scrollTop.value + containerHeight.value) / itemHeight.value)
    return Math.min(data.value.length, index + buffer)
  })

  /** 当前可见的数据切片 */
  const visibleData = computed(() => {
    return data.value.slice(startIndex.value, endIndex.value)
  })

  /** 可见区域相对总内容的垂直偏移量 */
  const offsetY = computed(() => startIndex.value * itemHeight.value)

  // ----------------------------------------------------------------
  // 事件处理
  // ----------------------------------------------------------------

  /** data 变化时重置滚动位置，避免数据量骤减后显示空白 */
  watch(
    () => data.value,
    () => {
      if (containerRef.value) {
        containerRef.value.scrollTop = 0
        scrollTop.value = 0
      }
    },
  )

  /** 处理容器滚动事件，同步 scrollTop 并通知外部 */
  const handleScroll = (e: Event) => {
    const target = e.target as HTMLElement
    scrollTop.value = target.scrollTop
    options.onScroll?.(target.scrollTop)
  }

  // ----------------------------------------------------------------
  // 编程式滚动方法
  // ----------------------------------------------------------------

  /** 滚动到指定索引，支持 top / center / bottom 对齐方式 */
  const scrollToIndex = (index: number, align: 'top' | 'center' | 'bottom' = 'top') => {
    if (!containerRef.value) return

    const targetIndex = Math.max(0, Math.min(index, data.value.length - 1))
    let targetScrollTop = targetIndex * itemHeight.value

    if (align === 'center') {
      targetScrollTop -= containerHeight.value / 2 - itemHeight.value / 2
    } else if (align === 'bottom') {
      targetScrollTop -= containerHeight.value - itemHeight.value
    }

    containerRef.value.scrollTop = Math.max(0, targetScrollTop)
  }

  /** 滚动到列表顶部 */
  const scrollToTop = () => {
    if (containerRef.value) {
      containerRef.value.scrollTop = 0
    }
  }

  /** 滚动到列表底部 */
  const scrollToBottom = () => {
    if (containerRef.value) {
      containerRef.value.scrollTop = Math.max(0, totalHeight.value - containerHeight.value)
    }
  }

  return {
    scrollTop,
    startIndex,
    endIndex,
    visibleData,
    offsetY,
    totalHeight,
    handleScroll,
    scrollToIndex,
    scrollToTop,
    scrollToBottom,
  }
}
