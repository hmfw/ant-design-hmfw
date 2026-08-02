import { inject, computed, type InjectionKey, type ComputedRef, type Ref } from 'vue'
import type { ConfigContext } from './types'
import { defaultSeedTokens } from '../_theme/theme'
import { zhCN } from '../_locale'

export const CONFIG_PROVIDER_KEY: InjectionKey<ComputedRef<ConfigContext>> = Symbol('ConfigProvider')

/**
 * 根层默认配置。ConfigProvider 的 props 一律不写默认值（全部 `undefined`），
 * 缺省语义统一由这里承载 —— 这样嵌套时才能用 `??` 区分「未传」与「传了值」，
 * 逐项回退到父级配置而非被重置为默认值。
 */
export const defaultConfig: ConfigContext = {
  locale: zhCN,
  theme: defaultSeedTokens,
  componentSize: 'middle',
  componentDisabled: false,
  direction: 'ltr',
  prefixCls: 'hmfw',
  // 不兜底 `() => document.body`：保留 undefined 让弹层组件自行兜底，
  // 既能区分「未配置」与「配置为 body」，也避免 SSR 环境访问 document。
  getPopupContainer: undefined,
}

const defaultConfigRef = computed(() => defaultConfig)

export function useConfig(): ComputedRef<ConfigContext> {
  return inject(CONFIG_PROVIDER_KEY, defaultConfigRef)
}

export function usePrefixCls(componentName: string): string {
  const config = useConfig()
  return `${config.value.prefixCls}-${componentName}`
}

export function useLocale(): ComputedRef<ConfigContext['locale']> {
  const config = useConfig()
  return computed(() => config.value.locale)
}

/**
 * 合并控件自身的 `disabled` 与上层容器（Form / ConfigProvider）下发的禁用态。
 * 控件显式传入 `true` 时始终禁用；未显式设置（`false`/`undefined`）时回退到上下文。
 *
 * 注意：Vue 的 Boolean prop 会把缺省值归一为 `false`，无法区分「未传」与「传了 false」，
 * 因此这里采用「或」语义 —— 与 AntD 的 DisabledContext 行为一致：
 * 外层 Form 禁用时，内部控件无法单独反禁用。
 */
export function useMergedDisabled(disabled: Ref<boolean | undefined>): ComputedRef<boolean> {
  const config = useConfig()
  return computed(() => disabled.value || config.value.componentDisabled)
}
