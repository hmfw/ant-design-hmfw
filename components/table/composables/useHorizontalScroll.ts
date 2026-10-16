import { ref, watch, nextTick, onMounted, onUnmounted, type Ref, type ComputedRef } from 'vue'
import type { TableProps } from '../interface'

/** 归一化后的 sticky 配置 */
export interface StickyConfig {
  offsetHeader?: number
  offsetScroll?: number
  getContainer?: () => HTMLElement
}

export interface UseHorizontalScrollOptions {
  /** 表体滚动容器 */
  tbodyRef: Ref<HTMLElement | undefined>
  /** sticky 配置（true 已归一化为默认值） */
  stickyConfig: ComputedRef<StickyConfig | undefined>
  scroll: ComputedRef<TableProps['scroll']>
  /** 尺寸相关依赖：数据/列变化后重新测量 */
  dataSource: ComputedRef<TableProps['dataSource']>
  columns: ComputedRef<TableProps['columns']>
}

/**
 * 横向滚动辅助状态：
 * - 固定列阴影（ping）：横向滚动后左/右侧固定列显示阴影
 * - 吸底横向滚动条（sticky.offsetScroll）：真实滚动条滚出可视区域后，在容器/视口底部吸附一条可拖拽的滚动条
 */
export function useHorizontalScroll(options: UseHorizontalScrollOptions) {
  const { tbodyRef, stickyConfig, scroll, dataSource, columns } = options

  // 固定列阴影
  const pingLeft = ref(false)
  const pingRight = ref(false)

  // 吸底横向滚动条状态
  const stickyBarVisible = ref(false)
  const stickyBarWrapWidth = ref(0)
  const stickyBarThumbWidth = ref(0)
  const stickyBarThumbLeft = ref(0)
  const stickyBarDragging = ref(false)

  // 读取 sticky.getContainer 指定的滚动容器（默认 window）
  const getStickyContainer = (): HTMLElement | null => {
    const c = stickyConfig.value?.getContainer?.()
    return c instanceof HTMLElement ? c : null
  }

  const updateScrollState = () => {
    const el = tbodyRef.value
    if (!el || typeof window === 'undefined') return
    const { scrollLeft, scrollWidth, clientWidth } = el

    // ping：仅当存在横向溢出（内容宽于容器）时才有意义
    pingLeft.value = scrollLeft > 0
    pingRight.value = Math.ceil(scrollLeft) + clientWidth < scrollWidth

    // 吸底滚动条：无横向溢出时不渲染
    if (!stickyConfig.value || scrollWidth <= clientWidth || clientWidth <= 0) {
      stickyBarVisible.value = false
      return
    }
    stickyBarWrapWidth.value = clientWidth
    stickyBarThumbWidth.value = (clientWidth * clientWidth) / scrollWidth
    stickyBarThumbLeft.value = (scrollLeft / scrollWidth) * clientWidth

    // 真实滚动条已在可视区域内（或表头已滚出）时隐藏吸底滚动条
    const scrollBarSize = el.offsetHeight - el.clientHeight || 15
    const rect = el.getBoundingClientRect()
    const container = getStickyContainer()
    const clientBottom = container ? container.getBoundingClientRect().bottom : window.innerHeight
    const offsetScroll = stickyConfig.value.offsetScroll ?? 0
    stickyBarVisible.value = !(rect.bottom - scrollBarSize <= clientBottom || rect.top >= clientBottom - offsetScroll)
  }

  // 吸底滚动条拖拽
  const stickyDragState = { startX: 0, startLeft: 0 }

  const onStickyBarMouseMove = (e: MouseEvent) => {
    const el = tbodyRef.value
    if (!el || !stickyBarDragging.value || stickyBarWrapWidth.value <= 0) return
    const maxLeft = stickyBarWrapWidth.value - stickyBarThumbWidth.value
    const left = Math.max(0, Math.min(maxLeft, stickyDragState.startLeft + (e.pageX - stickyDragState.startX)))
    el.scrollLeft = (left / stickyBarWrapWidth.value) * el.scrollWidth
    updateScrollState()
  }

  const stopStickyDrag = () => {
    stickyBarDragging.value = false
    document.removeEventListener('mousemove', onStickyBarMouseMove)
    document.removeEventListener('mouseup', stopStickyDrag)
  }

  const onStickyBarMousedown = (e: MouseEvent) => {
    e.preventDefault()
    stickyBarDragging.value = true
    stickyDragState.startX = e.pageX
    stickyDragState.startLeft = stickyBarThumbLeft.value
    document.addEventListener('mousemove', onStickyBarMouseMove)
    document.addEventListener('mouseup', stopStickyDrag)
  }

  let resizeObserver: ResizeObserver | undefined

  onMounted(() => {
    // 布局可能尚未稳定（页面其余内容仍在渲染），挂载后再于下一帧补算一次
    updateScrollState()
    nextTick(() => {
      updateScrollState()
      if (typeof requestAnimationFrame !== 'undefined') {
        requestAnimationFrame(() => updateScrollState())
      }
    })
    // 任意祖先滚动（capture）与窗口尺寸变化时刷新
    window.addEventListener('scroll', updateScrollState, true)
    window.addEventListener('resize', updateScrollState)
    if (typeof ResizeObserver !== 'undefined' && tbodyRef.value) {
      resizeObserver = new ResizeObserver(() => updateScrollState())
      resizeObserver.observe(tbodyRef.value)
    }
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollState, true)
    window.removeEventListener('resize', updateScrollState)
    resizeObserver?.disconnect()
    stopStickyDrag()
  })

  // 横向滚动状态随内容尺寸变化（数据/列宽变化）刷新
  watch([dataSource, columns, () => scroll.value?.x], () => nextTick(updateScrollState))

  return {
    pingLeft,
    pingRight,
    stickyBarVisible,
    stickyBarWrapWidth,
    stickyBarThumbWidth,
    stickyBarThumbLeft,
    stickyBarDragging,
    onStickyBarMousedown,
    updateScrollState,
  }
}
