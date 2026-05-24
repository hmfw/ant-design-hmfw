import { inject, type InjectionKey } from 'vue'
import type { ConfigContext } from './types'
import { defaultSeedTokens } from '../_theme/seed'
import { zhCN } from '../_locale'

export const CONFIG_PROVIDER_KEY: InjectionKey<ConfigContext> = Symbol('ConfigProvider')

export const defaultConfig: ConfigContext = {
  locale: zhCN,
  theme: defaultSeedTokens,
  componentSize: 'middle',
  direction: 'ltr',
  prefixCls: 'hmfw',
  getPopupContainer: () => document.body,
}

export function useConfig(): ConfigContext {
  return inject(CONFIG_PROVIDER_KEY, defaultConfig)
}

export function usePrefixCls(componentName: string): string {
  const config = useConfig()
  return `${config.prefixCls}-${componentName}`
}

export function useLocale() {
  const config = useConfig()
  return config.locale
}
