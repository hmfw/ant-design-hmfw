import { ref, onMounted, onUnmounted } from 'vue'
import type { Breakpoint } from '../types'

export type ScreenMap = Partial<Record<Breakpoint, boolean>>

const responsiveMap: Record<Breakpoint, string> = {
  xs: '(max-width: 575px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
  xxl: '(min-width: 1600px)',
}

const responsiveArray: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']

export function useBreakpoint() {
  const screens = ref<ScreenMap>({})
  const mediaQueryLists: Map<Breakpoint, MediaQueryList> = new Map()

  const updateScreens = () => {
    const newScreens: ScreenMap = {}
    mediaQueryLists.forEach((mql, breakpoint) => {
      newScreens[breakpoint] = mql.matches
    })
    screens.value = newScreens
  }

  onMounted(() => {
    // SSR 或旧环境可能没有 matchMedia，此时退化为空断点表（视为非响应式）。
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
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
  })

  onUnmounted(() => {
    mediaQueryLists.forEach((mql) => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', updateScreens)
      } else {
        mql.removeListener(updateScreens)
      }
    })
    mediaQueryLists.clear()
  })

  return screens
}

export { responsiveArray }
