import type { SeedTokens } from '../_theme/theme'
import type { Locale } from '../_locale/types'

/** 组件尺寸统一类型，所有组件的 size prop 应优先使用此类型 */
export type ComponentSize = 'small' | 'middle' | 'large'

export interface ConfigProviderProps {
  locale?: Locale
  theme?: Partial<SeedTokens> & { prefix?: string }
  componentSize?: ComponentSize
  direction?: 'ltr' | 'rtl'
  prefixCls?: string
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
}

export interface ConfigContext {
  locale: Locale
  theme: SeedTokens
  componentSize: ComponentSize
  direction: 'ltr' | 'rtl'
  prefixCls: string
  getPopupContainer: (triggerNode?: HTMLElement) => HTMLElement
}
