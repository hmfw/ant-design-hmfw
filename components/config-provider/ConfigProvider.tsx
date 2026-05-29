import { defineComponent, provide, computed, onMounted, ref, watch, type PropType } from 'vue'
import { CONFIG_PROVIDER_KEY } from './context'
import { defaultSeedTokens } from '../_theme/seed'
import { generateMapTokens } from '../_theme/map'
import { injectCssVars, injectScopedCssVars } from '../_theme/inject'
import { zhCN } from '../_locale'
import type { Locale } from '../_locale/types'
import type { SeedTokens } from '../_theme/seed'

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
    const containerRef = ref<HTMLElement | null>(null)

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

    // Inject CSS variables globally on first mount, scoped if nested
    onMounted(() => {
      if (containerRef.value) {
        injectScopedCssVars(containerRef.value, mapTokens.value, props.prefixCls)
      } else {
        injectCssVars(mapTokens.value, props.prefixCls)
      }
    })

    watch(mapTokens, (tokens) => {
      if (containerRef.value) {
        injectScopedCssVars(containerRef.value, tokens, props.prefixCls)
      } else {
        injectCssVars(tokens, props.prefixCls)
      }
    })

    return () => slots.default?.()
  },
})
