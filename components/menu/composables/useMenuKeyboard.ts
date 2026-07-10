/**
 * useMenuKeyboard — 键盘导航
 *
 * 职责：
 * 1. 方向键导航（上下左右，根据 mode 做出不同行为）
 * 2. Enter/Space 激活当前项
 * 3. Home/End 快速跳转
 * 4. Escape 关闭子菜单
 * 5. Type-ahead 字母键搜索
 *
 * 设计模式：策略模式 — 不同 mode 下按键行为通过条件分发
 */
import { onBeforeUnmount, type Ref } from 'vue'
import { isClient } from '../../_utils/dom'
import { KEYS } from '../../_utils'
import { TYPEAHEAD_TIMEOUT } from './useMenuOpenState'

export interface UseMenuKeyboardOptions {
  /** 根元素 ref */
  rootRef: Ref<HTMLElement | undefined>
  /** 前缀类名 */
  prefixCls: string
  /** 菜单模式 */
  mode: Ref<string>
  /** 当前展开的 keys */
  currentOpen: Ref<string[]>
  /** 展开/关闭子菜单 */
  handleOpenChange: (key: string, open: boolean) => void
}

/**
 * 获取下一个可聚焦项的索引（循环）
 */
function getNextIndex(current: number, direction: 1 | -1, length: number): number {
  const next = current + direction
  if (next >= length) return 0
  if (next < 0) return length - 1
  return next
}

export function useMenuKeyboard(options: UseMenuKeyboardOptions) {
  const { rootRef, prefixCls, mode, currentOpen, handleOpenChange } = options

  // ---- TypeAhead 状态 ----
  let typeAheadBuffer = ''
  let typeAheadTimer: ReturnType<typeof setTimeout> | null = null

  // 组件卸载时清理 typeAhead timer
  onBeforeUnmount(() => {
    if (typeAheadTimer) clearTimeout(typeAheadTimer)
  })

  // ---- DOM 查询（浏览器环境） ----
  const getFocusableItems = (): HTMLElement[] => {
    if (!rootRef.value) return []
    const items = rootRef.value.querySelectorAll<HTMLElement>(`[data-menu-key]:not([aria-disabled="true"])`)
    return Array.from(items)
  }

  const getVisibleFocusableItems = (): HTMLElement[] => {
    return getFocusableItems().filter((el) => el.offsetParent !== null)
  }

  const focusItem = (el: HTMLElement | undefined) => {
    if (el) {
      el.focus()
      el.setAttribute('tabindex', '0')
    }
  }

  const blurItem = (el: HTMLElement | undefined) => {
    if (el) el.setAttribute('tabindex', '-1')
  }

  // ---- TypeAhead 处理 ----
  const handleTypeAhead = (char: string, items: HTMLElement[]) => {
    if (typeAheadTimer) clearTimeout(typeAheadTimer)
    typeAheadBuffer += char.toLowerCase()
    typeAheadTimer = setTimeout(() => {
      typeAheadBuffer = ''
    }, TYPEAHEAD_TIMEOUT)

    const matchIndex = items.findIndex((el) => {
      const label = el.getAttribute('data-menu-label')?.toLowerCase() || ''
      return label.startsWith(typeAheadBuffer)
    })

    if (matchIndex >= 0) {
      // SSR guard: document.activeElement only available in browser
      const currentIndex = isClient() ? items.findIndex((el) => el === document.activeElement) : -1
      blurItem(items[currentIndex])
      focusItem(items[matchIndex])
    }
  }

  // ---- 主导航处理 ----
  const handleKeyDown = (e: KeyboardEvent) => {
    const items = getVisibleFocusableItems()
    if (items.length === 0) return

    // SSR guard
    const currentIndex = isClient() ? items.findIndex((el) => el === document.activeElement) : -1

    const isHorizontal = mode.value === 'horizontal'
    const isInline = mode.value === 'inline'

    const navigateTo = (targetIndex: number) => {
      blurItem(items[currentIndex])
      focusItem(items[targetIndex])
    }

    const handleSubMenuInDirection = (openDirection: boolean) => {
      const currentEl = items[currentIndex]
      if (!currentEl) return
      const submenu = currentEl.closest(`.${prefixCls}-submenu`)
      if (!submenu) return
      const key = (submenu as HTMLElement).dataset.menuKey
      if (key) {
        const isCurrentlyOpen = currentOpen.value.includes(key)
        if (openDirection && !isCurrentlyOpen) {
          handleOpenChange(key, true)
        } else if (!openDirection && isCurrentlyOpen) {
          handleOpenChange(key, false)
        }
      }
    }

    switch (e.key) {
      case KEYS.ARROW_DOWN:
        if (isHorizontal) {
          e.preventDefault()
          handleSubMenuInDirection(true)
        } else {
          e.preventDefault()
          navigateTo(getNextIndex(currentIndex, 1, items.length))
        }
        break

      case KEYS.ARROW_UP:
        if (isHorizontal) {
          e.preventDefault()
          handleSubMenuInDirection(false)
        } else {
          e.preventDefault()
          navigateTo(getNextIndex(currentIndex, -1, items.length))
        }
        break

      case KEYS.ARROW_RIGHT:
        if (isHorizontal) {
          e.preventDefault()
          navigateTo(getNextIndex(currentIndex, 1, items.length))
        } else if (isInline) {
          e.preventDefault()
          handleSubMenuInDirection(true)
        }
        break

      case KEYS.ARROW_LEFT:
        if (isHorizontal) {
          e.preventDefault()
          navigateTo(getNextIndex(currentIndex, -1, items.length))
        } else if (isInline) {
          e.preventDefault()
          handleSubMenuInDirection(false)
        }
        break

      case KEYS.ENTER:
      case KEYS.SPACE: {
        e.preventDefault()
        const activeEl = items[currentIndex]
        if (activeEl) activeEl.click()
        break
      }

      case KEYS.HOME:
        e.preventDefault()
        navigateTo(0)
        break

      case KEYS.END:
        e.preventDefault()
        navigateTo(items.length - 1)
        break

      case KEYS.ESCAPE:
        if (currentOpen.value.length > 0) {
          e.preventDefault()
          const lastOpen = currentOpen.value[currentOpen.value.length - 1]
          handleOpenChange(lastOpen, false)
        }
        break

      default:
        // 字母键搜索（Type-ahead，忽略修饰键）
        if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
          handleTypeAhead(e.key, items)
        }
        break
    }
  }

  return { handleKeyDown, getFocusableItems, focusItem, blurItem }
}
