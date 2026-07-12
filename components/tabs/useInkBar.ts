/**
 * useInkBar — Tabs 墨条（ink-bar）位置/尺寸管理
 *
 * 职责：
 * 1. 计算并更新 ink-bar DOM 元素的位置和尺寸，使其对齐当前激活的 tab
 * 2. 监听 currentKey 变化，下一帧更新 ink-bar
 * 3. 使用 ResizeObserver 响应 tab 标签尺寸变化（如动态文本、i18n 切换等）
 * 4. 使用 IntersectionObserver 响应 tabs 进入视口（初始挂载时可能不可见）
 * 5. 监听 window resize 事件（centered 模式下需要重新计算偏移）
 * 6. SSR 兼容：window / ResizeObserver / IntersectionObserver 均添加 typeof 守卫
 */
import { watch, onMounted, onBeforeUnmount, nextTick, type Ref, type ComputedRef } from 'vue'
import type { TabsType, TabsPosition } from './types'

/** Ink bar 线条宽度/高度 */
const INK_BAR_SIZE = '2px'

export interface UseInkBarOptions {
  /** tab 列表容器 ref */
  navListRef: Ref<HTMLElement | null>
  /** ink-bar DOM 元素 ref */
  inkBarRef: Ref<HTMLElement | null>
  /** 组件前缀类名 */
  prefixCls: string
  /** 获取当前 type（仅 'line' 类型需要 ink-bar） */
  type: () => TabsType | undefined
  /** 获取当前 tabPosition */
  tabPosition: () => TabsPosition | undefined
  /** 当前激活的 key */
  currentKey: ComputedRef<string>
}

export interface UseInkBarReturn {
  /** 手动触发 ink-bar 更新（供外部在特殊场景调用） */
  updateInkBar: () => void
}

export function useInkBar(options: UseInkBarOptions): UseInkBarReturn {
  const { navListRef, inkBarRef, prefixCls, type, tabPosition, currentKey } = options

  let resizeObserver: ResizeObserver | null = null
  let intersectionObserver: IntersectionObserver | null = null
  /** debounce 用的 rAF id，确保同一帧内多次调用只执行一次 */
  let rafId: number | null = null

  /**
   * 更新 ink-bar 的位置和尺寸，使其与当前激活的 tab 对齐。
   * 使用 getBoundingClientRect 获取实际渲染位置，
   * 避免 offsetLeft 在 centered / flex auto-margin 等场景下不准确的问题。
   * 支持水平（top/bottom）和垂直（left/right）两种布局。
   */
  const updateInkBar = () => {
    if (!navListRef.value || !inkBarRef.value || type() !== 'line') return

    const activeTab = navListRef.value.querySelector(`.${prefixCls}-tab-active`) as HTMLElement

    if (!activeTab) return

    const inkBarParent = inkBarRef.value.parentElement
    if (!inkBarParent) return

    const isVertical = tabPosition() === 'left' || tabPosition() === 'right'

    if (isVertical) {
      const parentRect = inkBarParent.getBoundingClientRect()
      const activeTabRect = activeTab.getBoundingClientRect()

      inkBarRef.value.style.top = `${activeTabRect.top - parentRect.top}px`
      inkBarRef.value.style.height = `${activeTabRect.height}px`
      inkBarRef.value.style.width = INK_BAR_SIZE
      inkBarRef.value.style.left = tabPosition() === 'left' ? 'auto' : '0'
      inkBarRef.value.style.right = tabPosition() === 'left' ? '0' : 'auto'
    } else {
      const parentRect = inkBarParent.getBoundingClientRect()
      const activeTabRect = activeTab.getBoundingClientRect()

      inkBarRef.value.style.left = `${activeTabRect.left - parentRect.left}px`
      inkBarRef.value.style.width = `${activeTabRect.width}px`
      inkBarRef.value.style.height = INK_BAR_SIZE
      inkBarRef.value.style.top = 'auto'
      inkBarRef.value.style.bottom = '0'
    }
  }

  /**
   * debounce 版 updateInkBar：通过 requestAnimationFrame 确保同一帧内多次调用只执行一次。
   * 用于 resize / ResizeObserver / IntersectionObserver 等高频触发场景，避免不必要的 DOM 读写。
   * 非浏览器环境下回退到 setTimeout（兼容测试和 SSR）。
   */
  const debouncedUpdateInkBar = () => {
    if (rafId !== null) return
    if (typeof requestAnimationFrame !== 'undefined') {
      rafId = requestAnimationFrame(() => {
        rafId = null
        updateInkBar()
      })
    } else {
      rafId = setTimeout(() => {
        rafId = null
        updateInkBar()
      }, 0) as unknown as number
    }
  }

  // 监听 currentKey 变化，下一帧更新 ink-bar（等待 DOM 渲染完成）
  watch(currentKey, () => {
    nextTick(updateInkBar)
  })

  onMounted(() => {
    // 监听窗口大小变化（centered 模式下很重要），使用 debounce 避免高频触发
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debouncedUpdateInkBar)
    }

    // ResizeObserver：监听 tab 标签尺寸变化（动态文本、i18n 切换等）
    if (typeof ResizeObserver !== 'undefined' && navListRef.value) {
      resizeObserver = new ResizeObserver(() => {
        nextTick(debouncedUpdateInkBar)
      })
      resizeObserver.observe(navListRef.value)
    }

    // IntersectionObserver：解决初始挂载时 tabs 不在视口内导致 getBoundingClientRect
    // 返回错误坐标的问题。当 tabs 进入视口时自动修正 ink-bar 位置。
    if (typeof IntersectionObserver !== 'undefined' && navListRef.value) {
      intersectionObserver = new IntersectionObserver((entries) => {
        if (entries[0]?.isIntersecting) {
          nextTick(debouncedUpdateInkBar)
        }
      })
      intersectionObserver.observe(navListRef.value)
    }

    // 两个 Observer 都不可用时（测试/SSR 环境），手动触发初始更新
    if (typeof ResizeObserver === 'undefined' && typeof IntersectionObserver === 'undefined') {
      nextTick(() => {
        updateInkBar()
      })
    }
  })

  onBeforeUnmount(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', debouncedUpdateInkBar)
    }
    resizeObserver?.disconnect()
    resizeObserver = null
    intersectionObserver?.disconnect()
    intersectionObserver = null
    // 清理未执行的 debounce
    if (rafId !== null) {
      if (typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(rafId)
      } else {
        clearTimeout(rafId)
      }
      rafId = null
    }
  })

  return { updateInkBar }
}
