import { inject, provide, type InjectionKey } from 'vue'
import type { AnchorLinkItem } from './types'

export interface AnchorContext {
  registerLink: (link: string, targetOffset?: number) => void
  unregisterLink: (link: string) => void
  activeLink: string | null
  scrollTo: (link: string, targetOffset?: number) => void
  onClick?: (e: MouseEvent, link: { title: string; href: string }) => void
  direction: 'vertical' | 'horizontal'
  replace?: boolean
}

const AnchorContextKey: InjectionKey<AnchorContext> = Symbol('AnchorContext')

export function provideAnchorContext(context: AnchorContext) {
  provide(AnchorContextKey, context)
}

export function useAnchorContext() {
  return inject(AnchorContextKey, null)
}
