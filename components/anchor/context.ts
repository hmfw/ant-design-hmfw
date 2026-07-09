import { inject, provide, type InjectionKey, type Ref } from 'vue'
import type { AnchorClassNames, AnchorStyles } from './types'

export interface AnchorContext {
  registerLink: (link: string, targetOffset?: number) => void
  unregisterLink: (link: string) => void
  activeLink: Ref<string | null>
  scrollTo: (link: string, targetOffset?: number) => void
  onClick?: (e: MouseEvent, link: { title: string; href: string }) => void
  direction: Ref<'vertical' | 'horizontal'>
  replace: Ref<boolean | undefined>
  classNames: Ref<AnchorClassNames | undefined>
  styles: Ref<AnchorStyles | undefined>
}

const AnchorContextKey: InjectionKey<AnchorContext> = Symbol('AnchorContext')

export function provideAnchorContext(context: AnchorContext) {
  provide(AnchorContextKey, context)
}

export function useAnchorContext() {
  return inject(AnchorContextKey, null)
}
