import { watch, onBeforeUnmount, type Ref } from 'vue'

const FOCUSABLE =
  'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'

/**
 * 焦点陷阱 Hook - 将焦点限制在指定元素内，用于弹出层无障碍
 *
 * @param elementRef - 要限制焦点的元素 ref
 * @param enabled - 是否启用焦点陷阱
 * @param restoreFocus - 关闭时是否恢复焦点到触发元素
 *
 * @example
 * const dialogRef = ref<HTMLElement | null>(null)
 * const isOpen = ref(false)
 * useFocusTrap(dialogRef, isOpen, true)
 */
export function useFocusTrap(elementRef: Ref<HTMLElement | null>, enabled: Ref<boolean>, restoreFocus = true): void {
  let cleanup: (() => void) | null = null

  watch(
    enabled,
    async (isEnabled) => {
      if (isEnabled) {
        // 等待 DOM 更新
        await Promise.resolve()
        const el = elementRef.value
        if (el) {
          cleanup = trapFocus(el, restoreFocus)
        }
      } else {
        cleanup?.()
        cleanup = null
      }
    },
    { flush: 'post' },
  )

  onBeforeUnmount(() => {
    cleanup?.()
    cleanup = null
  })
}

/**
 * 焦点陷阱核心实现
 */
function trapFocus(el: HTMLElement, restoreFocus: boolean): () => void {
  const prev = document.activeElement as HTMLElement | null
  const nodes = () => Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))

  // 自动聚焦第一个可聚焦元素
  nodes()[0]?.focus()

  const handler = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return
    const focusable = nodes()
    if (!focusable.length) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (e.shiftKey) {
      // Shift+Tab: 从第一个元素循环到最后一个
      if (document.activeElement === first) {
        e.preventDefault()
        last.focus()
      }
    } else {
      // Tab: 从最后一个元素循环到第一个
      if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }

  el.addEventListener('keydown', handler)

  return () => {
    el.removeEventListener('keydown', handler)
    if (restoreFocus) prev?.focus()
  }
}
