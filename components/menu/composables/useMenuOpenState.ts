/**
 * useMenuOpenState — 子菜单展开状态管理
 *
 * 职责：
 * 1. 受控/非受控双模式支持（openKeys / v-model）
 * 2. 延迟打开/关闭逻辑（hover 触发时）
 * 3. Resource 安全清理（组件卸载时清除所有 timer）
 *
 * 设计模式：组合式 API + 策略模式（延迟 vs 立即执行）
 */
import { ref, computed, watch, onBeforeUnmount, type Ref, type ComputedRef } from 'vue'
import { MenuEmitFn, type MenuTriggerSubMenuAction } from '../types'

export interface UseMenuOpenStateOptions {
  /** 展开 keys（**必须**是 Ref 以支持响应式更新），初始值即默认展开 */
  openKeys: Ref<string[] | undefined>
  /** 菜单模式（支持 Ref 或静态值） */
  mode?: string | Ref<string>
  /** 触发子菜单的动作（支持 Ref 或静态值） */
  triggerSubMenuAction?: MenuTriggerSubMenuAction | Ref<MenuTriggerSubMenuAction>
}

export interface UseMenuOpenStateReturn {
  /** 当前展开的 keys */
  currentOpen: ComputedRef<string[]>
  /** 是否为受控模式 */
  isControlled: ComputedRef<boolean>
  /** 展开/关闭处理（支持延迟） */
  handleOpenChange: (key: string, open: boolean) => void
  /** 立即展开/关闭（跳过延迟） */
  handleOpenImmediate: (key: string, open: boolean) => void
  /** 内部状态（用于 emit） */
  innerOpen: Ref<string[]>
}

/** TypeAhead 搜索缓冲区过期时间 (ms) */
export const TYPEAHEAD_TIMEOUT = 500

/** 子菜单关闭延迟 (s)，hover 触发时防止鼠标从标题移动到弹出层过程中误关闭 */
const SUBMENU_CLOSE_DELAY = 0.1

/** 解析为一个可响应的值 */
function toReactiveValue<T>(value: T | Ref<T>): Ref<T> {
  return isRef(value) ? value : (ref(value) as Ref<T>)
}

function isRef<T>(value: unknown): value is Ref<T> {
  return value !== null && typeof value === 'object' && '__v_isRef' in (value as Record<string, unknown>)
}

export function useMenuOpenState(options: UseMenuOpenStateOptions, emit: MenuEmitFn): UseMenuOpenStateReturn {
  const { openKeys, triggerSubMenuAction: triggerRaw = 'hover' } = options

  const modeRef = toReactiveValue(options.mode ?? 'vertical')
  const triggerActionRef = toReactiveValue(triggerRaw)

  const innerOpen = ref<string[]>(openKeys.value ?? [])
  const isControlled = computed(() => openKeys.value !== undefined)

  const currentOpen = computed(() => (isControlled.value ? openKeys.value! : innerOpen.value))

  // 受控模式下同步外部变化
  watch(openKeys, (v) => {
    if (v) innerOpen.value = v
  })

  // ---- 延迟 Timer 管理 ----
  const delayTimers = new Map<string, ReturnType<typeof setTimeout>>()

  const clearDelayTimer = (key: string) => {
    const timer = delayTimers.get(key)
    if (timer) {
      clearTimeout(timer)
      delayTimers.delete(key)
    }
  }

  // 组件卸载时清理所有 timer，防止内存泄漏
  onBeforeUnmount(() => {
    delayTimers.forEach((t) => clearTimeout(t))
    delayTimers.clear()
  })

  // 仅非 inline 模式 + hover 触发时应用延迟
  const shouldDelay = computed(() => modeRef.value !== 'inline' && triggerActionRef.value === 'hover')

  const handleOpenChange = (key: string, open: boolean) => {
    clearDelayTimer(key)

    const applyChange = () => {
      const next = open
        ? [...currentOpen.value.filter((k) => k !== key), key]
        : currentOpen.value.filter((k) => k !== key)
      innerOpen.value = next
      emit('update:openKeys', next)
      emit('openChange', next)
    }

    if (!open && shouldDelay.value) {
      delayTimers.set(key, setTimeout(applyChange, SUBMENU_CLOSE_DELAY * 1000))
    } else {
      applyChange()
    }
  }

  const handleOpenImmediate = (key: string, open: boolean) => {
    clearDelayTimer(key)
    const next = open
      ? [...currentOpen.value.filter((k) => k !== key), key]
      : currentOpen.value.filter((k) => k !== key)
    innerOpen.value = next
    emit('update:openKeys', next)
    emit('openChange', next)
  }

  return {
    currentOpen,
    isControlled,
    handleOpenChange,
    handleOpenImmediate,
    innerOpen,
  }
}
