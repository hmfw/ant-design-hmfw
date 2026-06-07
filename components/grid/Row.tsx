import { defineComponent, computed, provide, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { Gutter, ResponsiveAlign, ResponsiveJustify } from './types'
import { useBreakpoint, responsiveArray, type ScreenMap } from './hooks/useBreakpoint'

const RowContextKey = Symbol('RowContext')

function getGutterValue(gutter: Gutter | undefined, screens: ScreenMap): number | string {
  if (typeof gutter === 'object' && gutter !== null) {
    for (const breakpoint of responsiveArray) {
      if (screens[breakpoint] && gutter[breakpoint] !== undefined) {
        return gutter[breakpoint]!
      }
    }
    return 0
  }
  return gutter || 0
}

function getResponsiveValue<T extends string>(
  prop: T | Partial<Record<string, T>> | undefined,
  screens: ScreenMap,
): T | undefined {
  if (typeof prop === 'string') {
    return prop
  }
  if (typeof prop === 'object' && prop !== null) {
    for (const breakpoint of responsiveArray) {
      if (screens[breakpoint] && prop[breakpoint] !== undefined) {
        return prop[breakpoint] as T
      }
    }
  }
  return undefined
}

export default defineComponent({
  name: 'Row',
  props: {
    gutter: {
      type: [Number, String, Array, Object] as PropType<Gutter | [Gutter, Gutter]>,
      default: 0,
    },
    align: {
      type: [String, Object] as PropType<ResponsiveAlign>,
      default: undefined,
    },
    justify: {
      type: [String, Object] as PropType<ResponsiveJustify>,
      default: undefined,
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('row')
    const screens = useBreakpoint()

    const gutters = computed(() => {
      const results: [number | string, number | string] = [0, 0]
      const normalizedGutter = Array.isArray(props.gutter) ? props.gutter : [props.gutter, undefined]

      results[0] = getGutterValue(normalizedGutter[0], screens.value)
      results[1] = getGutterValue(normalizedGutter[1], screens.value)

      return results
    })

    const mergedAlign = computed(() => getResponsiveValue(props.align, screens.value))
    const mergedJustify = computed(() => getResponsiveValue(props.justify, screens.value))

    const rowStyle = computed(() => {
      const [horizontalGutter, verticalGutter] = gutters.value
      const style: CSSProperties = {}

      if (horizontalGutter) {
        const hGutter =
          typeof horizontalGutter === 'number' ? `${horizontalGutter / -2}px` : `calc(${horizontalGutter} / -2)`
        style.marginInline = hGutter
      }

      if (verticalGutter) {
        style.rowGap = typeof verticalGutter === 'number' ? `${verticalGutter}px` : verticalGutter
      }

      return style
    })

    const classes = computed(() => {
      return cls(prefixCls, {
        [`${prefixCls}-no-wrap`]: !props.wrap,
        [`${prefixCls}-${mergedJustify.value}`]: !!mergedJustify.value,
        [`${prefixCls}-${mergedAlign.value}`]: !!mergedAlign.value,
      })
    })

    // Provide gutter and wrap to Col components
    provide(RowContextKey, {
      gutter: gutters,
      wrap: computed(() => props.wrap),
    })

    return () => (
      <div class={classes.value} style={rowStyle.value}>
        {slots.default?.()}
      </div>
    )
  },
})

export { RowContextKey }
