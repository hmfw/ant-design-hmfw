import { watch, onBeforeUnmount, type Ref } from 'vue'

// 全局引用计数，支持多个弹出层同时打开
let lockCount = 0
let cachedOverflow = ''

/**
 * 滚动锁定 Hook - 阻止 body 滚动（支持多层弹出层）
 *
 * @param enabled - 是否启用滚动锁定
 *
 * @example
 * const isOpen = ref(false)
 * useScrollLock(isOpen)
 */
export function useScrollLock(enabled: Ref<boolean>): void {
  let didLock = false

  watch(
    enabled,
    (isEnabled) => {
      if (isEnabled) {
        lockScroll()
        didLock = true
      } else {
        if (didLock) {
          unlockScroll()
          didLock = false
        }
      }
    },
    { flush: 'post' },
  )

  onBeforeUnmount(() => {
    if (didLock) {
      unlockScroll()
      didLock = false
    }
  })
}

/**
 * 锁定 body 滚动（引用计数）
 */
function lockScroll() {
  if (typeof document === 'undefined') return
  if (lockCount === 0) {
    cachedOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
  }
  lockCount += 1
}

/**
 * 解锁 body 滚动（引用计数）
 */
function unlockScroll() {
  if (typeof document === 'undefined') return
  lockCount = Math.max(0, lockCount - 1)
  if (lockCount === 0) {
    document.body.style.overflow = cachedOverflow
  }
}
