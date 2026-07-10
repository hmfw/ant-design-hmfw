import { ref, computed, provide, inject, type InjectionKey, type Ref, type ComputedRef } from 'vue'
import type { SeedTokens } from '@hmfw/ant-design'

// ---- 预设主题 ----

export interface ThemePreset {
  name: string
  label: string
  color: string
  theme: Partial<SeedTokens>
}

export const themePresets: ThemePreset[] = [
  { name: 'default', label: '默认', color: '#1677ff', theme: {} },
  { name: 'dark', label: '暗色', color: '#141414', theme: { colorTextBase: '#ffffff', colorBgBase: '#000000' } },
  { name: 'green', label: '科技绿', color: '#00b96b', theme: { colorPrimary: '#00b96b' } },
  { name: 'orange', label: '活力橙', color: '#fa541c', theme: { colorPrimary: '#fa541c' } },
  { name: 'purple', label: '极客紫', color: '#722ed1', theme: { colorPrimary: '#722ed1' } },
]

// ---- provide/inject 类型 ----

export interface ThemeContext {
  currentPreset: Ref<string>
  currentTheme: ComputedRef<Partial<SeedTokens>>
  setPreset: (name: string) => void
}

const THEME_KEY: InjectionKey<ThemeContext> = Symbol('theme')

// ---- Composable：在 App.vue 中提供 ----

export function provideTheme() {
  const currentPreset = ref('default')

  const currentTheme = computed(() => {
    const preset = themePresets.find((p) => p.name === currentPreset.value)
    return preset?.theme ?? {}
  })

  function setPreset(name: string) {
    currentPreset.value = name
  }

  const ctx: ThemeContext = { currentPreset, currentTheme, setPreset }
  provide(THEME_KEY, ctx)
  return ctx
}

// ---- Composable：在子组件中消费 ----

export function useTheme(): ThemeContext {
  const ctx = inject(THEME_KEY)
  if (!ctx) {
    throw new Error('useTheme() 必须在 provideTheme() 的子孙组件中使用')
  }
  return ctx
}
