import { ref, onUnmounted, type Ref } from 'vue'
import type { Breakpoint } from '../types'

export type ScreenMap = Partial<Record<Breakpoint, boolean>>

const responsiveMap: Record<Breakpoint, string> = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
  xxxl: '(min-width: 1920px)',
}

// 从大到小遍历：响应式取值时优先命中最大的匹配断点（与 AntD 一致）
const responsiveArray: Breakpoint[] = ['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']

interface SharedState {
  screens: Ref<ScreenMap>
  mediaQueryLists: Map<Breakpoint, MediaQueryList>
  refCount: number
  unsubscribe: () => void
}

// 模块级共享单例：所有使用方（Row、Pagination 等）共享同一份 matchMedia 监听，
// 而非每实例注册一套监听器（对齐 AntD responsiveObserver 的设计）
let sharedState: SharedState | null = null

function createSharedState(): SharedState {
  const screens = ref<ScreenMap>({})
  const mediaQueryLists: Map<Breakpoint, MediaQueryList> = new Map()

  const updateScreens = () => {
    const newScreens: ScreenMap = {}
    mediaQueryLists.forEach((mql, breakpoint) => {
      newScreens[breakpoint] = mql.matches
    })
    screens.value = newScreens
  }

  const unsubscribe = () => {
    mediaQueryLists.forEach((mql) => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', updateScreens)
      } else {
        mql.removeListener(updateScreens)
      }
    })
    mediaQueryLists.clear()
  }

  // SSR 或旧环境没有 matchMedia 时退化为空断点表（视为非响应式）
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    responsiveArray.forEach((breakpoint) => {
      const query = responsiveMap[breakpoint]
      const mql = window.matchMedia(query)
      mediaQueryLists.set(breakpoint, mql)

      // Modern browsers
      if (mql.addEventListener) {
        mql.addEventListener('change', updateScreens)
      } else {
        // Legacy browsers
        mql.addListener(updateScreens)
      }
    })
    updateScreens()
  }

  return { screens, mediaQueryLists, refCount: 0, unsubscribe }
}

export function useBreakpoint(): Ref<ScreenMap> {
  if (!sharedState) {
    sharedState = createSharedState()
  }
  const state = sharedState
  state.refCount++

  onUnmounted(() => {
    state.refCount--
    // 最后一个使用方卸载时移除全部监听并释放单例
    if (state.refCount === 0) {
      state.unsubscribe()
      sharedState = null
    }
  })

  return state.screens
}

export { responsiveArray }
