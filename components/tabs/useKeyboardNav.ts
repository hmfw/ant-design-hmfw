/**
 * useKeyboardNav — Tabs 键盘导航
 *
 * 职责：
 * 1. 处理 ArrowLeft/ArrowUp（前一个 tab）和 ArrowRight/ArrowDown（后一个 tab）导航
 * 2. 处理 Enter/Space 激活当前 tab
 * 3. 自动跳过 disabled 的 tab
 * 4. 通过 onActivate 回调将激活逻辑与键盘事件分离，避免类型转换
 */
import type { Ref } from 'vue'
import type { TabItem } from './types'

export interface UseKeyboardNavOptions {
  /** 获取当前 items 列表 */
  items: () => TabItem[]
  /** 组件前缀类名 */
  prefixCls: string
  /** tab 列表容器 ref */
  navListRef: Ref<HTMLElement | null>
  /** 激活 tab 的回调（不触发 tabClick 事件） */
  onActivate: (key: string) => void
}

export interface UseKeyboardNavReturn {
  /** 键盘事件处理函数，绑定到 tab 元素的 onKeydown */
  handleKeyDown: (key: string, event: KeyboardEvent, index: number) => void
}

export function useKeyboardNav(options: UseKeyboardNavOptions): UseKeyboardNavReturn {
  const { items, prefixCls, navListRef, onActivate } = options

  /**
   * 键盘导航处理：
   * - ArrowLeft/ArrowUp：聚焦前一个非 disabled 的 tab（循环）
   * - ArrowRight/ArrowDown：聚焦后一个非 disabled 的 tab（循环）
   * - Enter/Space：激活当前 tab（通过 onActivate 回调，与 tabClick 事件分离）
   */
  const handleKeyDown = (key: string, event: KeyboardEvent, index: number) => {
    const tabItems = items()
    let targetIndex = index

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      targetIndex = index - 1
      if (targetIndex < 0) targetIndex = tabItems.length - 1
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      targetIndex = index + 1
      if (targetIndex >= tabItems.length) targetIndex = 0
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      if (!tabItems[index].disabled) {
        onActivate(key)
      }
      return
    } else {
      return
    }

    // 跳过 disabled 的 tab，循环查找
    let attempts = 0
    while (tabItems[targetIndex]?.disabled && attempts < tabItems.length) {
      targetIndex = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? targetIndex - 1 : targetIndex + 1
      if (targetIndex < 0) targetIndex = tabItems.length - 1
      if (targetIndex >= tabItems.length) targetIndex = 0
      attempts++
    }

    if (!tabItems[targetIndex]?.disabled) {
      const targetTab = navListRef.value?.querySelectorAll(`.${prefixCls}-tab`)[targetIndex] as HTMLElement
      targetTab?.focus()
    }
  }

  return { handleKeyDown }
}
