/**
 * useMenuOverflow — 水平菜单溢出检测
 *
 * 职责：
 * 1. 检测水平模式下菜单项是否溢出容器宽度
 * 2. 使用 ResizeObserver 响应容器尺寸变化
 * 3. Resource 安全清理（组件卸载时 disconnect observer）
 *
 * 限制：
 * - 仅对水平模式生效
 * - 溢出检测基于 DOM 实际宽度，但 item 间距使用固定值 8px
 *   （TODO: 应读取 CSS 变量 --hmfw-menu-item-margin-inline 实现精确计算）
 */
import { ref, computed, onMounted, onBeforeUnmount, nextTick, type Ref } from 'vue'
import type { ItemType } from '../types'

export interface UseMenuOverflowOptions {
  /** 菜单模式 */
  mode: Ref<string>
  /** 根元素 ref */
  rootRef: Ref<HTMLElement | undefined>
  /** 前缀类名 */
  prefixCls: string
}

export interface UseMenuOverflowReturn {
  /** 溢出的 item key 列表 */
  overflowKeys: Ref<string[]>
  /** 可见项 */
  visibleItems: Ref<ItemType[]>
  /** 溢出项 */
  overflowedItems: Ref<ItemType[]>
  /** 是否有溢出项 */
  showOverflow: Ref<boolean>
  /** 更新溢出检测（供外部在 items 变化时调用） */
  checkOverflow: () => void
}

/** 项目间默认间距 (px)，对应 --hmfw-menu-item-margin-inline */
const ITEM_GAP = 8
/** 溢出指示器预留宽度 (px) */
const INDICATOR_WIDTH = 40

export function useMenuOverflow(options: UseMenuOverflowOptions, items: Ref<ItemType[]>): UseMenuOverflowReturn {
  const { mode, rootRef, prefixCls } = options

  const overflowKeys = ref<string[]>([])
  const observerRef = ref<ResizeObserver>()

  const checkOverflow = () => {
    if (mode.value !== 'horizontal' || !rootRef.value) return

    const container = rootRef.value
    const itemElements = container.querySelectorAll<HTMLElement>(
      `:scope > .${prefixCls}-item, :scope > .${prefixCls}-submenu`,
    )

    const containerWidth = container.offsetWidth
    const availableWidth = containerWidth - INDICATOR_WIDTH

    let accumulatedWidth = 0
    const overflow: string[] = []

    itemElements.forEach((el) => {
      accumulatedWidth += el.offsetWidth + ITEM_GAP
      const key = el.dataset.menuKey
      if (accumulatedWidth > availableWidth && key) {
        overflow.push(key)
      }
    })

    overflowKeys.value = overflow
  }

  onMounted(() => {
    if (mode.value === 'horizontal' && typeof ResizeObserver !== 'undefined') {
      nextTick(checkOverflow)
      observerRef.value = new ResizeObserver(() => {
        checkOverflow()
      })
      if (rootRef.value) {
        observerRef.value.observe(rootRef.value)
      }
    }
  })

  // 组件卸载时清理 ResizeObserver，防止内存泄漏
  onBeforeUnmount(() => {
    observerRef.value?.disconnect()
  })

  // ---- 派生可见/溢出项 ----
  const visibleItems = computed(() => {
    if (mode.value !== 'horizontal' || overflowKeys.value.length === 0) {
      return items.value
    }
    return items.value.filter((item) => {
      if (!item || typeof item !== 'object') return true
      const key = 'key' in item ? ((item as unknown as Record<string, unknown>).key as string) : undefined
      return !key || !overflowKeys.value.includes(key)
    })
  })

  const overflowedItems = computed(() => {
    if (overflowKeys.value.length === 0) return []
    return items.value.filter((item) => {
      if (!item || typeof item !== 'object') return false
      const key = 'key' in item ? ((item as unknown as Record<string, unknown>).key as string) : undefined
      return !!key && overflowKeys.value.includes(key)
    })
  })

  const showOverflow = computed(() => mode.value === 'horizontal' && overflowedItems.value.length > 0)

  return { overflowKeys, visibleItems, overflowedItems, showOverflow, checkOverflow }
}
