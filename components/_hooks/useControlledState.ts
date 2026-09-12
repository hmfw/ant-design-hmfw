import { ref, watch, type Ref } from 'vue'

/**
 * 受控/非受控状态管理 Hook
 * 统一处理组件的受控和非受控模式
 *
 * @param controlledValue - 受控值（来自 props）
 * @param defaultValue - 默认值（非受控时使用）
 * @param onChange - 值变化回调
 * @returns 内部状态值和更新函数
 *
 * @example
 * // 在组件中使用
 * const [innerOpen, setInnerOpen] = useControlledState(
 *   () => props.open,
 *   props.defaultOpen ?? false,
 *   (value) => emit('update:open', value)
 * )
 *
 * // 使用
 * if (innerOpen.value) { ... }
 * setInnerOpen(true)
 */
export function useControlledState<T>(
  controlledValue: () => T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void,
): [Ref<T>, (value: T) => void] {
  const innerValue = ref<T>(defaultValue) as Ref<T>

  // 监听受控值变化
  watch(
    controlledValue,
    (newValue) => {
      if (newValue !== undefined) {
        innerValue.value = newValue
      }
    },
    { immediate: true },
  )

  const setValue = (value: T) => {
    const controlled = controlledValue()
    // 非受控模式：更新内部状态
    if (controlled === undefined) {
      innerValue.value = value
    }
    // 触发回调（受控和非受控都触发）
    onChange?.(value)
  }

  return [innerValue, setValue]
}
