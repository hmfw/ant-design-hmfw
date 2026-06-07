import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { RibbonPlacement } from './types'

const PRESET_COLORS = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
]

export const Ribbon = defineComponent({
  name: 'BadgeRibbon',
  props: {
    text: String,
    color: String,
    placement: {
      type: String as PropType<RibbonPlacement>,
      default: 'end',
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('ribbon')

    const isPresetColor = computed(() => (props.color ? PRESET_COLORS.includes(props.color) : false))

    const ribbonCls = computed(() =>
      cls(prefixCls, `${prefixCls}-placement-${props.placement}`, {
        [`${prefixCls}-color-${props.color}`]: isPresetColor.value || undefined,
      }),
    )

    const colorStyle = computed(() => (props.color && !isPresetColor.value ? { background: props.color } : {}))

    const cornerColorStyle = computed(() => (props.color && !isPresetColor.value ? { color: props.color } : {}))

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
