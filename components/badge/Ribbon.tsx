import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils/cls'
import { PRESET_COLORS } from './types'
import type { RibbonPlacement, RibbonProps } from './types'

/**
 * 检查颜色是否为预设颜色
 */
const isPresetColor = (color?: string): boolean => {
  return !!color && PRESET_COLORS.includes(color as any)
}

/**
 * Ribbon 组件的 props 定义
 * 使用 satisfies 确保与 RibbonProps 接口完全一致
 */
const ribbonProps = {
  text: { type: String, default: undefined },
  color: { type: String, default: undefined },
  placement: { type: String as PropType<RibbonPlacement>, default: 'end' },
} satisfies Record<keyof RibbonProps, any>

export const Ribbon = defineComponent({
  name: 'BadgeRibbon',
  props: ribbonProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('ribbon')

    const ribbonCls = computed(() => {
      const preset = isPresetColor(props.color)
      return cls(prefixCls, `${prefixCls}-placement-${props.placement}`, {
        [`${prefixCls}-color-${props.color}`]: preset,
      })
    })

    const colorStyle = computed(() => {
      const isPreset = isPresetColor(props.color)
      if (!props.color || isPreset) return {}
      return {
        background: props.color,
        color: props.color,
        // 同时处理 corner 的样式
        '--corner-color': props.color,
      }
    })

    return () => (
      <div class={`${prefixCls}-wrapper`}>
        {slots.default?.()}
        <div class={ribbonCls.value} style={colorStyle.value}>
          <span class={`${prefixCls}-text`}>{props.text ?? slots.text?.()}</span>
          <div class={`${prefixCls}-corner`} style={{ borderColor: colorStyle.value['--corner-color'] }} />
        </div>
      </div>
    )
  },
})
