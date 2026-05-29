import { defineComponent, computed, provide, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { Gutter, Align, Justify } from './types'

const RowContextKey = Symbol('RowContext')

export default defineComponent({
  name: 'Row',
  props: {
    gutter: {
      type: [Number, Array, Object] as PropType<Gutter | [Gutter, Gutter]>,
      default: 0,
    },
    align: {
      type: String as PropType<Align>,
      default: undefined,
    },
    justify: {
      type: String as PropType<Justify>,
      default: undefined,
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('row')

    const gutters = computed(() => {
      const results: [number, number] = [0, 0]
      const normalizedGutter = Array.isArray(props.gutter) ? props.gutter : [props.gutter, 0]

      normalizedGutter.forEach((g, index) => {
        if (typeof g === 'object') {
          // For responsive gutter, use default value for now
          // In real implementation, should use media query
          results[index] = 0
        } else {
          results[index] = g || 0
        }
      })

      return results
    })

    const rowStyle = computed(() => {
      const [horizontalGutter, verticalGutter] = gutters.value
      const style: CSSProperties = {}

      if (horizontalGutter > 0) {
        style.marginLeft = `${-horizontalGutter / 2}px`
        style.marginRight = `${-horizontalGutter / 2}px`
      }

      if (verticalGutter > 0) {
        style.rowGap = `${verticalGutter}px`
      }

      return style
    })

    const classes = computed(() => {
      const align = props.align
      const justify = props.justify
      return cls(
        prefixCls,
        {
          [`${prefixCls}-no-wrap`]: !props.wrap,
          [`${prefixCls}-${justify}`]: !!justify,
          [`${prefixCls}-${align}`]: !!align,
        }
      )
    })

    // Provide gutter to Col components
    provide(RowContextKey, {
      gutter: gutters,
    })

    return () => (
      <div class={classes.value} style={rowStyle.value}>
        {slots.default?.()}
      </div>
    )
  },
})

export { RowContextKey }
