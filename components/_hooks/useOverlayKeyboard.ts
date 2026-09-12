import { watch, type Ref } from 'vue'

export interface OverlayKeyboardOptions {
  /** ESC 键关闭回调 */
  onClose?: () => void
  /** 左箭头回调（用于 ImagePreview 等） */
  onPrev?: () => void
  /** 右箭头回调（用于 ImagePreview 等） */
  onNext?: () => void
  /** 是否启用键盘事件 */
  keyboard?: Ref<boolean>
}

/**
 * 弹出层键盘事件 Hook
 *
 * @param visible - 弹出层是否可见
 * @param options - 键盘事件配置
 *
 * @example
 * // Modal/Drawer 场景
 * useOverlayKeyboard(isOpen, {
 *   onClose: () => close(),
 *   keyboard: computed(() => props.keyboard)
 * })
 *
 * // ImagePreview 场景
 * useOverlayKeyboard(isOpen, {
 *   onClose: () => close(),
 *   onPrev: () => prev(),
 *   onNext: () => next(),
 * })
 */
export function useOverlayKeyboard(visible: Ref<boolean>, options: OverlayKeyboardOptions): void {
  const { onClose, onPrev, onNext, keyboard } = options

  const handleKeydown = (e: KeyboardEvent) => {
    if (!visible.value) return

    // 检查是否启用键盘事件（默认 true）
    const isKeyboardEnabled = keyboard?.value ?? true
    if (!isKeyboardEnabled) return

    if (e.key === 'Escape' && onClose) {
      onClose()
    } else if (e.key === 'ArrowLeft' && onPrev) {
      onPrev()
    } else if (e.key === 'ArrowRight' && onNext) {
      onNext()
    }
  }

  // 监听 visible 变化来添加/移除事件监听
  watch(
    visible,
    (isVisible) => {
      if (typeof window === 'undefined') return

      if (isVisible) {
        window.addEventListener('keydown', handleKeydown)
      } else {
        window.removeEventListener('keydown', handleKeydown)
      }
    },
    { immediate: true },
  )
}
