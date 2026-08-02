import type { SeedTokens } from '../_theme/theme'
import type { Locale } from '../_locale/types'

/** 组件尺寸统一类型，所有组件的 size prop 应优先使用此类型 */
export type ComponentSize = 'small' | 'middle' | 'large'

/** 布局文本方向 */
export type DirectionType = 'ltr' | 'rtl'

/** 弹层挂载容器解析函数 */
export type GetPopupContainer = (triggerNode?: HTMLElement) => HTMLElement

export interface ConfigProviderProps {
  locale?: Locale
  /** 覆盖 seed token，未列出的字段继承上层 ConfigProvider（无上层则取默认值） */
  theme?: Partial<SeedTokens>
  componentSize?: ComponentSize
  /** 统一下发禁用态；与控件自身 `disabled` 取「或」，即容器禁用时控件无法单独反禁用 */
  componentDisabled?: boolean
  direction?: DirectionType
  prefixCls?: string
  getPopupContainer?: GetPopupContainer
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
  direction: DirectionType
  prefixCls: string
  /**
   * 全局弹层容器。`undefined` 表示未配置，由弹层组件自行兜底到 body，
   * 以便区分「用户未配置」与「用户显式配置为 body」，同时避免 SSR 下访问 document。
   */
  getPopupContainer?: GetPopupContainer
}
