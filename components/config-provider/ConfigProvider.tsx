import { defineComponent, provide, computed, onMounted, watch, type PropType } from 'vue'
import { CONFIG_PROVIDER_KEY } from './context'
import { defaultSeedTokens, generateMapTokens, injectCssVars } from '../_theme/theme'
import { zhCN } from '../_locale'
import type { Locale } from '../_locale/types'
import type { SeedTokens } from '../_theme/theme'

export default defineComponent({
  name: 'ConfigProvider',
  props: {
    locale: {
      type: Object as PropType<Locale>,
      default: undefined,
    },
    theme: {
      type: Object as PropType<Partial<SeedTokens> & { prefix?: string }>,
      default: undefined,
    },
    componentSize: {
      type: String as PropType<'small' | 'middle' | 'large'>,
      default: 'middle',
    },
    direction: {
      type: String as PropType<'ltr' | 'rtl'>,
      default: 'ltr',
    },
    prefixCls: {
      type: String,
      default: 'hmfw',
    },
    getPopupContainer: {
      type: Function as PropType<(triggerNode?: HTMLElement) => HTMLElement>,
      default: () => document.body,
    },
  },
  setup(props, { slots }) {
    const mergedTheme = computed<SeedTokens>(() => ({
      ...defaultSeedTokens,
      ...props.theme,
    }))

    const mapTokens = computed(() => generateMapTokens(mergedTheme.value))

    const context = computed(() => ({
      locale: props.locale ?? zhCN,
      theme: mergedTheme.value,
      componentSize: props.componentSize,
      direction: props.direction,
      prefixCls: props.prefixCls,
      getPopupContainer: props.getPopupContainer,
    }))

    provide(CONFIG_PROVIDER_KEY, context)

    // 全局注入 CSS 变量：首次挂载 + theme 变化时更新
    onMounted(() => {
      injectCssVars(mapTokens.value, props.prefixCls)
    })

    watch(mapTokens, (tokens) => {
      injectCssVars(tokens, props.prefixCls)
    })

    return () => slots.default?.()
  },
})
