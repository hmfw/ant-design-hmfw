import { defineComponent, provide, inject, computed, onMounted, watch, h, type PropType } from 'vue'
import { CONFIG_PROVIDER_KEY, defaultConfig } from './context'
import { generateMapTokens, injectCssVars, tokensToCssVarRecord } from '../_theme/theme'
import type { MapTokens, SeedTokens } from '../_theme/theme'
import type { Locale } from '../_locale/types'
import type { ComponentSize, ConfigContext, ConfigProviderProps, DirectionType, GetPopupContainer } from './types'

/**
 * 所有 props 的 default 一律为 `undefined`，缺省语义由 `defaultConfig` 承载。
 * 这样嵌套时才能用 `??` 区分「未传」与「传了值」，逐项回退父级配置而非重置为默认值。
 */
const configProviderProps = {
  locale: { type: Object as PropType<Locale>, default: undefined },
  theme: { type: Object as PropType<Partial<SeedTokens>>, default: undefined },
  componentSize: { type: String as PropType<ComponentSize>, default: undefined },
  // Boolean prop 显式给 default 后，未传时保持 undefined 而不被归一为 false
  componentDisabled: { type: Boolean, default: undefined },
  direction: { type: String as PropType<DirectionType>, default: undefined },
  prefixCls: { type: String, default: undefined },
  getPopupContainer: { type: Function as PropType<GetPopupContainer>, default: undefined },
} satisfies Record<keyof ConfigProviderProps, any>

export default defineComponent({
  name: 'ConfigProvider',
  props: configProviderProps,
  setup(props, { slots }) {
    // 注入结果即嵌套判定：拿不到上层 context 说明自己是根 Provider。
    // 注意 Form 也会重新 provide 同一个 key，因此 ConfigProvider 嵌在 Form 内同样算嵌套。
    const parentConfig = inject(CONFIG_PROVIDER_KEY, null)
    const isRoot = !parentConfig
    const inherited = computed<ConfigContext>(() => parentConfig?.value ?? defaultConfig)

    // theme 是「部分覆盖」语义：未列出的 seed 字段继承上层，而非回落到库默认值
    const mergedTheme = computed<SeedTokens>(() => ({ ...inherited.value.theme, ...props.theme }))
    const mergedPrefixCls = computed(() => props.prefixCls ?? inherited.value.prefixCls)
    const mapTokens = computed(() => generateMapTokens(mergedTheme.value))

    const context = computed<ConfigContext>(() => ({
      ...inherited.value,
      locale: props.locale ?? inherited.value.locale,
      theme: mergedTheme.value,
      componentSize: props.componentSize ?? inherited.value.componentSize,
      componentDisabled: props.componentDisabled ?? inherited.value.componentDisabled,
      direction: props.direction ?? inherited.value.direction,
      prefixCls: mergedPrefixCls.value,
      getPopupContainer: props.getPopupContainer ?? inherited.value.getPopupContainer,
    }))

    provide(CONFIG_PROVIDER_KEY, context)

    // 根 Provider：配置作用于整个文档，CSS 变量注入 :root，不产生任何 DOM。
    if (isRoot) {
      const syncGlobal = () => {
        injectCssVars(mapTokens.value, mergedPrefixCls.value)
        // 仅在显式传入 direction 时写 <html dir>，避免把用户已设好的文档方向覆盖成 ltr
        if (props.direction && typeof document !== 'undefined') {
          document.documentElement.dir = props.direction
        }
      }
      onMounted(syncGlobal)
      watch([mapTokens, mergedPrefixCls, () => props.direction], syncGlobal)

      return () => slots.default?.()
    }

    // 嵌套 Provider：主题必须限定在自己的子树内，绝不能写 :root（否则同 prefix 的
    // 多个 Provider 会抢同一个 <style> 节点，后挂载者污染全站，且卸载后不还原）。
    // 做法是渲染一个 display:contents 的作用域节点，把 CSS 变量挂在它上面靠继承生效 ——
    // display:contents 不产生盒模型、不进无障碍树，对布局与语义均透明。
    const scopedVars = computed<Record<string, string>>(() => {
      const prefix = mergedPrefixCls.value

      // prefixCls 变化会导致整套变量改名，无法与父级逐项比对，只能全量输出
      if (prefix !== inherited.value.prefixCls) {
        return tokensToCssVarRecord(mapTokens.value, prefix)
      }

      // 仅输出与父级有差异的 token，避免把 138 个变量全部堆进 inline style
      const parentMap = generateMapTokens(inherited.value.theme) as unknown as Record<string, unknown>
      const ownMap = mapTokens.value as unknown as Record<string, unknown>
      const diff: Record<string, unknown> = {}
      for (const key of Object.keys(ownMap)) {
        if (ownMap[key] !== parentMap[key]) diff[key] = ownMap[key]
      }
      return tokensToCssVarRecord(diff as Partial<MapTokens>, prefix)
    })

    return () =>
      h(
        'div',
        {
          class: `${mergedPrefixCls.value}-config-provider`,
          style: { display: 'contents', ...scopedVars.value },
          // 显式指定方向时才输出 dir，未指定则由更外层的 dir 继承
          dir: props.direction,
        },
        slots.default?.(),
      )
  },
})
