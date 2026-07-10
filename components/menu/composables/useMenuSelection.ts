/**
 * useMenuSelection — 菜单选中状态管理
 *
 * 职责：
 * 1. 受控/非受控双模式支持（selectedKeys / v-model）
 * 2. 单选/多选逻辑（multiple prop）
 * 3. 通过 emit 同步状态到父组件（v-model:selectedKeys）
 *
 * 设计模式：组合式 API — 单一职责，可独立测试
 */
import { ref, computed, watch, type Ref, type ComputedRef } from 'vue'
import { MenuEmitFn } from '../types'

export interface UseMenuSelectionOptions {
  /** 选中 keys（**必须**是 Ref 以支持响应式更新），初始值即默认选中 */
  selectedKeys: Ref<string[] | undefined>
  /** 是否支持多选 */
  multiple?: boolean
  /** 是否允许选择，false 时仅触发 click 事件 */
  selectable?: boolean
}

export interface UseMenuSelectionReturn {
  /** 当前选中 keys（受控或内部状态） */
  currentSelected: ComputedRef<string[]>
  /** 是否为受控模式 */
  isControlled: ComputedRef<boolean>
  /** 选中项处理 */
  handleSelect: (key: string) => void
  /** 取消选中处理 */
  handleDeselect: (key: string) => void
  /** 内部状态（用于 emit v-model 同步） */
  innerSelected: Ref<string[]>
}

export function useMenuSelection(options: UseMenuSelectionOptions, emit: MenuEmitFn): UseMenuSelectionReturn {
  const { selectedKeys, multiple = false, selectable = true } = options

  const innerSelected = ref<string[]>(selectedKeys.value ?? [])
  const isControlled = computed(() => selectedKeys.value !== undefined)

  const currentSelected = computed(() => (isControlled.value ? selectedKeys.value! : innerSelected.value))

  // 受控模式下同步外部变化
  watch(selectedKeys, (v) => {
    if (v) innerSelected.value = v
  })

  const handleSelect = (key: string) => {
    emit('click', { key })
    if (!selectable) return

    let next: string[]

    if (multiple) {
      if (currentSelected.value.includes(key)) {
        next = currentSelected.value.filter((k) => k !== key)
        innerSelected.value = next
        emit('update:selectedKeys', next)
        emit('deselect', { key, selectedKeys: next })
      } else {
        next = [...currentSelected.value, key]
        innerSelected.value = next
        emit('update:selectedKeys', next)
        emit('select', { key, selectedKeys: next })
      }
    } else {
      next = [key]
      innerSelected.value = next
      emit('update:selectedKeys', next)
      emit('select', { key, selectedKeys: next })
    }
  }

  const handleDeselect = (key: string) => {
    const next = currentSelected.value.filter((k) => k !== key)
    innerSelected.value = next
    emit('update:selectedKeys', next)
    emit('deselect', { key, selectedKeys: next })
  }

  return { currentSelected, isControlled, handleSelect, handleDeselect, innerSelected }
}
