import { onBeforeUnmount, ref } from 'vue'

/**
 * 延迟执行回调，使用 requestAnimationFrame
 */
export default function useDelay(callback: () => void) {
  const idRef = ref<number>(0)

  const clearRaf = () => {
    if (idRef.value) {
      cancelAnimationFrame(idRef.value)
    }
  }

  onBeforeUnmount(() => {
    clearRaf()
  })

  const triggerFn = () => {
    clearRaf()
    idRef.value = requestAnimationFrame(callback)
  }

  return triggerFn
}
