import type { SeedTokens } from '../_theme/seed'
import type { Locale } from '../_locale/types'

export interface ConfigProviderProps {
  locale?: Locale
  theme?: Partial<SeedTokens> & { prefix?: string }
  componentSize?: 'small' | 'middle' | 'large'
  direction?: 'ltr' | 'rtl'
  prefixCls?: string
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
}

export interface ConfigContext {
  locale: Locale
  theme: SeedTokens
  componentSize: 'small' | 'middle' | 'large'
  direction: 'ltr' | 'rtl'
  prefixCls: string
  getPopupContainer: (triggerNode?: HTMLElement) => HTMLElement
}
