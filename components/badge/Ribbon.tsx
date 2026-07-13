import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
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
  placement: {
    type: String as PropType<RibbonPlacement>,
    default: 'end',
  },
} satisfies Record<keyof RibbonProps, any>

export const Ribbon = defineComponent({
  name: 'BadgeRibbon',
  props: ribbonProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('ribbon')

    const presetColor = computed(() => isPresetColor(props.color))

    const ribbonCls = computed(() =>
      cls(prefixCls, `${prefixCls}-placement-${props.placement}`, {
        [`${prefixCls}-color-${props.color}`]: presetColor.value,
      }),
    )

    /**
     * 缎带主体的颜色样式
     * 自定义颜色通过内联样式应用
     */
    const colorStyle = computed(() =>
      props.color && !presetColor.value ? { background: props.color, color: props.color } : {},
    )

    /**
     * 缎带三角 corner 的颜色样式
     * corner 使用 border-color 实现三角形效果
     * 颜色应与主体一致但稍暗（通过 CSS filter: brightness(75%) 实现）
     */
    const cornerColorStyle = computed(() => {
      if (!props.color || presetColor.value) return {}
      // 自定义颜色需要同步到 corner 的 border-color
      return { borderColor: props.color }
    })

    return () => (
      <div class={`${prefixCls}-wrapper`}>
        {slots.default?.()}
        <div class={ribbonCls.value} style={colorStyle.value}>
          <span class={`${prefixCls}-text`}>{props.text ?? slots.text?.()}</span>
          <div class={`${prefixCls}-corner`} style={cornerColorStyle.value} />
        </div>
      </div>
    )
  },
})
