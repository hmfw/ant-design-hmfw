import { defineComponent, computed, inject, type PropType, type CSSProperties, type ComputedRef } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ColSpan, ColSize, FlexType } from './types'
import { RowContextKey } from './Row'

interface RowContext {
  gutter: ComputedRef<[number | string, number | string]>
  wrap: ComputedRef<boolean>
}

function parseFlex(flex: FlexType): string {
  if (flex === 'auto') {
    return '1 1 auto'
  }
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }
  return flex
}

export default defineComponent({
  name: 'Col',
  props: {
    flex: {
      type: [Number, String] as PropType<FlexType>,
      default: undefined,
    },
    span: {
      type: [Number, String] as PropType<ColSpan>,
      default: undefined,
    },
    offset: {
      type: Number,
      default: 0,
    },
    order: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    xs: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    sm: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    md: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    lg: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    xl: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
    xxl: {
      type: [Number, Object] as PropType<ColSize>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('col')
    const rowContext = inject<RowContext | null>(RowContextKey, null)

    const classes = computed(() => {
      const classNames: string[] = [prefixCls]

      // Span
      if (props.span !== undefined) {
        classNames.push(`${prefixCls}-${props.span}`)
      }

      // Offset
      if (props.offset) {
        classNames.push(`${prefixCls}-offset-${props.offset}`)
      }

      // Order
      if (props.order) {
        classNames.push(`${prefixCls}-order-${props.order}`)
      }

      // Pull
      if (props.pull) {
        classNames.push(`${prefixCls}-pull-${props.pull}`)
      }

      // Push
      if (props.push) {
        classNames.push(`${prefixCls}-push-${props.push}`)
      }

      // Responsive sizes
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const
      sizes.forEach((size) => {
        const sizeProps = props[size]
        if (typeof sizeProps === 'number') {
          classNames.push(`${prefixCls}-${size}-${sizeProps}`)
        } else if (typeof sizeProps === 'object' && sizeProps !== null) {
          if (sizeProps.span !== undefined) {
            classNames.push(`${prefixCls}-${size}-${sizeProps.span}`)
          }
          if (sizeProps.offset !== undefined && sizeProps.offset !== 0) {
            classNames.push(`${prefixCls}-${size}-offset-${sizeProps.offset}`)
          }
          if (sizeProps.order !== undefined && sizeProps.order !== 0) {
            classNames.push(`${prefixCls}-${size}-order-${sizeProps.order}`)
          }
          if (sizeProps.pull !== undefined && sizeProps.pull !== 0) {
            classNames.push(`${prefixCls}-${size}-pull-${sizeProps.pull}`)
          }
          if (sizeProps.push !== undefined && sizeProps.push !== 0) {
            classNames.push(`${prefixCls}-${size}-push-${sizeProps.push}`)
          }
        }
      })

      return cls(...classNames)
    })

    const colStyle = computed(() => {
      const style: CSSProperties = {}

      if (rowContext) {
        const [horizontalGutter] = rowContext.gutter.value
        if (horizontalGutter) {
          const hGutter = typeof horizontalGutter === 'number'
            ? `${horizontalGutter / 2}px`
            : `calc(${horizontalGutter} / 2)`
          style.paddingInline = hGutter
        }
      }

      if (props.flex) {
        style.flex = parseFlex(props.flex)
        // Hack for Firefox to avoid size issue
        if (rowContext && !rowContext.wrap.value && !style.minWidth) {
          style.minWidth = 0
        }
      }

      return style
    })

    return () => (
      <div class={classes.value} style={colStyle.value}>
        {slots.default?.()}
      </div>
    )
  },
})
