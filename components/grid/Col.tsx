import { defineComponent, computed, inject, type PropType, type CSSProperties, type ComputedRef } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ColSpan, ColSize } from './types'
import { RowContextKey } from './Row'

interface RowContext {
  gutter: ComputedRef<[number, number]>
}

function parseFlex(flex: ColSpan): string {
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
        } else if (typeof sizeProps === 'object') {
          if (sizeProps.span !== undefined) {
            classNames.push(`${prefixCls}-${size}-${sizeProps.span}`)
          }
          if (sizeProps.offset) {
            classNames.push(`${prefixCls}-${size}-offset-${sizeProps.offset}`)
          }
          if (sizeProps.order) {
            classNames.push(`${prefixCls}-${size}-order-${sizeProps.order}`)
          }
          if (sizeProps.pull) {
            classNames.push(`${prefixCls}-${size}-pull-${sizeProps.pull}`)
          }
          if (sizeProps.push) {
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
        if (horizontalGutter > 0) {
          style.paddingLeft = `${horizontalGutter / 2}px`
          style.paddingRight = `${horizontalGutter / 2}px`
        }
      }

      if (props.span !== undefined && typeof props.span === 'string') {
        style.flex = parseFlex(props.span)
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
