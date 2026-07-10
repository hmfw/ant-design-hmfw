import { inject, computed, type InjectionKey, type ComputedRef } from 'vue'
import type { ConfigContext } from './types'
import { defaultSeedTokens } from '../_theme/theme'
import { zhCN } from '../_locale'

export const CONFIG_PROVIDER_KEY: InjectionKey<ComputedRef<ConfigContext>> = Symbol('ConfigProvider')

export const defaultConfig: ConfigContext = {
  locale: zhCN,
  theme: defaultSeedTokens,
  componentSize: 'middle',
  direction: 'ltr',
  prefixCls: 'hmfw',
  getPopupContainer: () => document.body,
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
