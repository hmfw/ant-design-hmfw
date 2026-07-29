import type { SeedTokens } from '../_theme/theme'
import type { Locale } from '../_locale/types'

/** 组件尺寸统一类型，所有组件的 size prop 应优先使用此类型 */
export type ComponentSize = 'small' | 'middle' | 'large'

export interface ConfigProviderProps {
  locale?: Locale
  theme?: Partial<SeedTokens> & { prefix?: string }
  componentSize?: ComponentSize
  /** 统一下发禁用态；与控件自身 `disabled` 取「或」，即容器禁用时控件无法单独反禁用 */
  componentDisabled?: boolean
  direction?: 'ltr' | 'rtl'
  prefixCls?: string
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement
}

export interface ConfigContext {
  locale: Locale
  theme: SeedTokens
  componentSize: ComponentSize
  /**
   * 由上层容器（如 Form）下发的禁用态。
   * 控件自身的 `disabled` prop 优先级更高；仅当控件未显式设置时才回退到此值。
   */
  componentDisabled: boolean
  direction: 'ltr' | 'rtl'
  prefixCls: string
  getPopupContainer: (triggerNode?: HTMLElement) => HTMLElement
}
