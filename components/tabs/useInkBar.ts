/**
 * useInkBar — Tabs 墨条（ink-bar）位置/尺寸管理
 *
 * 架构对齐 rc-tabs：采用数据驱动模式，ink bar 位置/尺寸由 computed 派生，
 * 不再直接操作 DOM ref。核心管线：
 *
 *   ResizeObserver → updateTabSizes() → tabSizes (Map) → activeTabOffset (computed) → indicatorStyle (computed)
 *
 * 这样 ink bar 的位置/尺寸变更完全依赖 Vue 响应式系统：
 *   - tab 激活切换 → currentKey 变化 → activeTabOffset 自动选中新 key → indicatorStyle 自动重新计算
 *   - tab 尺寸变化 → ResizeObserver → updateTabSizes() → tabSizes 替换 → 链路自动传播
 *
 * 额外监听：
 *   - IntersectionObserver：解决初始挂载时不在视口内导致 getBoundingClientRect 返回零值
 *   - SSR 兼容：Observer/requestAnimationFrame API 均添加 typeof 守卫
 */
import {
  computed,
  onMounted,
  onBeforeUnmount,
  shallowRef,
  nextTick,
  type Ref,
  type ComputedRef,
  type CSSProperties,
} from 'vue'
import type { TabsPosition } from './types'

/** Tab 在 navList 容器内的位置和尺寸（相对容器坐标系） */
export interface TabOffset {
  width: number
  height: number
  left: number
  top: number
}

export interface UseInkBarOptions {
  /** tab 列表容器 ref（.hmfw-tabs-nav-list） */
  navListRef: Ref<HTMLElement | null>
  /** 组件前缀类名 */
  prefixCls: string
  /** 获取当前 type（仅 'line' 类型需要 ink-bar） */
  type: () => string | undefined
  /** 获取当前 tabPosition */
  tabPosition: () => TabsPosition | undefined
  /** 当前激活的 key */
  currentKey: ComputedRef<string>
  /** 自定义 indicator 宽度（对齐 rc-tabs indicatorSize），(原始宽度) => 目标宽度 */
  indicatorSize?: (origin: number) => number
}

export interface UseInkBarReturn {
  /** ink bar 的内联样式（直接绑定到模板 :style） */
  indicatorStyle: ComputedRef<CSSProperties>
  /** 手动触发 tabSizes 刷新（供外部特殊场景调用） */
  updateTabSizes: () => void
}

/**
 * 获取单个 tab 在容器中的位置和尺寸。
 * 使用 getBoundingClientRect 获取子像素精度坐标，
 * 返回 [width, height, left, top]（left/top 相对于 containerRect）。
 *
 * 注：rc-tabs 中有 getBoundingClientRect 与 offsetWidth 交叉校验以处理小数舍入，
 * 但该逻辑在 jsdom（offsetWidth 恒为 0）下会导致 mock 失效。
 * 由于我们的 ink bar 位置由 CSS transition 驱动，子像素误差不可感知，
 * 统一使用 getBoundingClientRect 足够。
 */
function getTabSize(tab: HTMLElement, containerRect: DOMRect): [number, number, number, number] {
  const { width, height, x, y } = tab.getBoundingClientRect()
  return [width, height, x - containerRect.x, y - containerRect.y]
}

export function useInkBar(options: UseInkBarOptions): UseInkBarReturn {
  const { navListRef, prefixCls, type, tabPosition, currentKey, indicatorSize } = options

  // ====================== tabSizes 缓存 ======================
  // 使用 shallowRef：整个 Map 一次性替换，避免深度追踪 Map 内部操作
  const tabSizes = shallowRef<Map<string, TabOffset>>(new Map())

  // ====================== indicatorStyle 计算链 ======================
  // 当前激活 tab 在容器中的偏移（从缓存读取，纯计算，无 DOM 操作）
  const activeTabOffset = computed<TabOffset | null>(() => {
    return tabSizes.value.get(currentKey.value) ?? null
  })

  const isHorizontal = computed(() => {
    const pos = tabPosition()
    return pos !== 'left' && pos !== 'right'
  })

  /**
   * ink bar 的内联样式，由 activeTabOffset 派生。
   * 当 activeTabOffset 变化时自动重新计算，CSS transition 负责动画（0.3s）。
   * tabSizes 缓存为空时返回 display: none，等待首次测量。
   */
  const indicatorStyle = computed(() => {
    const style: CSSProperties = {}

    if (type() !== 'line') {
      style.display = 'none'
      return style
    }

    const offset = activeTabOffset.value
    if (!offset) {
      style.display = 'none'
      return style
    }

    if (isHorizontal.value) {
      const width = indicatorSize ? indicatorSize(offset.width) : offset.width
      style.width = `${width}px`
      style.left = `${offset.left}px`
    } else {
      const height = indicatorSize ? indicatorSize(offset.height) : offset.height
      style.height = `${height}px`
      style.top = `${offset.top}px`
    }

    return style
  })

  // ====================== DOM 测量 ======================
  let resizeObserver: ResizeObserver | null = null
  let intersectionObserver: IntersectionObserver | null = null
  let rafId: number | null = null

  /**
   * 扫描 navList 内所有 tab 元素，更新 tabSizes 缓存。
   * 尺寸为相对于 navList 容器（getBoundingClientRect）的坐标系。
   */
  const updateTabSizes = () => {
    const navList = navListRef.value
    if (!navList || type() !== 'line') return

    const listRect = navList.getBoundingClientRect()
    const newSizes = new Map<string, TabOffset>()
    const tabElements = navList.querySelectorAll<HTMLElement>(`.${prefixCls}-tab`)

    tabElements.forEach((tab) => {
      const key = tab.getAttribute('id')?.replace('tab-', '')
      if (key) {
        const [width, height, left, top] = getTabSize(tab, listRect)
        newSizes.set(key, { width, height, left, top })
      }
    })

    tabSizes.value = newSizes
  }

  /** rAF 去抖：同一帧内多次调用只执行一次 */
  const debouncedUpdate = () => {
    if (rafId !== null) return
    if (typeof requestAnimationFrame !== 'undefined') {
      rafId = requestAnimationFrame(() => {
        rafId = null
        updateTabSizes()
      })
    } else {
      rafId = setTimeout(() => {
        rafId = null
        updateTabSizes()
      }, 0) as unknown as number
    }
  }

  // ====================== 生命周期 ======================

  onMounted(() => {
    // ResizeObserver：tab 数量变化、标签文本变更、i18n 切换等
    if (typeof ResizeObserver !== 'undefined') {
      const navList = navListRef.value
      if (navList) {
        resizeObserver = new ResizeObserver(debouncedUpdate)
        resizeObserver.observe(navList)
      }
    }

    // IntersectionObserver：初始挂载时不在视口内，等待进入视口再测量
    if (typeof IntersectionObserver !== 'undefined') {
      const navList = navListRef.value
      if (navList) {
        intersectionObserver = new IntersectionObserver((entries) => {
          if (entries[0]?.isIntersecting) {
            debouncedUpdate()
          }
        })
        intersectionObserver.observe(navList)
      }
    }

    // 初始测量（nextTick 确保 Vue 渲染完成 + 对齐 React useEffect 时序，
    // 避免测试中 mock 尚未就绪的问题）
    nextTick(() => updateTabSizes())
  })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
    resizeObserver = null
    intersectionObserver?.disconnect()
    intersectionObserver = null

    if (rafId !== null) {
      if (typeof cancelAnimationFrame !== 'undefined') {
        cancelAnimationFrame(rafId)
      } else {
        clearTimeout(rafId)
      }
      rafId = null
    }
  })

  return { indicatorStyle, updateTabSizes }
}
