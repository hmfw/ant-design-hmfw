import { defineComponent, computed, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { FlexAlign, FlexJustify, FlexWrap, FlexGap } from './types'

/**
 * gap 预设值映射到 Design Token，对应 ant-design v6 的 flexGapSM/flexGap/flexGapLG
 * - small  → --hmfw-padding-xs (8px)
 * - middle → --hmfw-padding    (16px)
 * - large  → --hmfw-padding-lg (24px)
 */
const GAP_MAP: Record<string, string> = {
  small: 'var(--hmfw-padding-xs)',
  middle: 'var(--hmfw-padding)',
  large: 'var(--hmfw-padding-lg)',
}

function resolveGap(gap: FlexGap | undefined): string | undefined {
  if (gap === undefined) return undefined
  if (typeof gap === 'number') return `${gap}px`
  if (gap in GAP_MAP) return GAP_MAP[gap as string]
  return gap as string
}

export const Flex = defineComponent({
  name: 'Flex',
  props: {
    vertical: Boolean,
    wrap: [Boolean, String] as PropType<boolean | FlexWrap>,
    justify: String as PropType<FlexJustify>,
    align: String as PropType<FlexAlign>,
    flex: [String, Number] as PropType<string | number>,
    gap: [String, Number] as PropType<FlexGap>,
    component: { type: String, default: 'div' },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('flex')

    const style = computed<CSSProperties>(() => {
      const s: CSSProperties = {}
      if (props.justify) s.justifyContent = props.justify
      if (props.align) s.alignItems = props.align
      if (props.flex !== undefined) s.flex = props.flex
      const gap = resolveGap(props.gap)
      if (gap) s.gap = gap
      if (props.wrap !== undefined) {
        if (props.wrap === true) s.flexWrap = 'wrap'
        else if (props.wrap === false) s.flexWrap = 'nowrap'
        else s.flexWrap = props.wrap
      }
      return s
    })

    const classes = computed(() =>
      cls(prefixCls, {
        [`${prefixCls}-vertical`]: props.vertical,
      }),
    )

    return () => {
      const Tag = props.component as keyof HTMLElementTagNameMap
      return (
        <Tag class={classes.value} style={style.value}>
          {slots.default?.()}
        </Tag>
      )
    }
  },
})
