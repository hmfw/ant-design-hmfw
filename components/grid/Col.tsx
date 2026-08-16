import { defineComponent, computed, inject, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils/cls'
import type { ColProps, ColSize, FlexType } from './types'
import { RowContextKey } from './context'
import type { RowContext } from './context'

const colProps = {
  flex: { type: [Number, String] as PropType<FlexType>, default: undefined },
  span: { type: [Number, String] as PropType<ColProps['span']>, default: undefined },
  offset: { type: [Number, String] as PropType<ColProps['offset']>, default: 0 },
  order: { type: [Number, String] as PropType<ColProps['order']>, default: 0 },
  pull: { type: [Number, String] as PropType<ColProps['pull']>, default: 0 },
  push: { type: [Number, String] as PropType<ColProps['push']>, default: 0 },
  xs: { type: [Number, Object] as PropType<ColSize>, default: undefined },
  sm: { type: [Number, Object] as PropType<ColSize>, default: undefined },
  md: { type: [Number, Object] as PropType<ColSize>, default: undefined },
  lg: { type: [Number, Object] as PropType<ColSize>, default: undefined },
  xl: { type: [Number, Object] as PropType<ColSize>, default: undefined },
  xxl: { type: [Number, Object] as PropType<ColSize>, default: undefined },
  xxxl: { type: [Number, Object] as PropType<ColSize>, default: undefined },
} satisfies Record<keyof ColProps, any>

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'] as const

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
  props: colProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('col')
    const rowContext = inject<RowContext | null>(RowContextKey, null)

    const classes = computed(() => {
      const classNames: string[] = [prefixCls]

      // Span（0 时由 .hmfw-col-0 display:none 隐藏）
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
      sizes.forEach((size) => {
        const sizeProps = props[size]
        if (typeof sizeProps === 'number') {
          classNames.push(`${prefixCls}-${size}-${sizeProps}`)
        } else if (typeof sizeProps === 'object' && sizeProps !== null) {
          if (sizeProps.span !== undefined) {
            classNames.push(`${prefixCls}-${size}-${sizeProps.span}`)
          }
          // 响应式 0 值允许重置上级断点的 offset/order/pull/push（与 antd v6 行为一致）
          if (sizeProps.offset !== undefined) {
            classNames.push(`${prefixCls}-${size}-offset-${sizeProps.offset}`)
          }
          if (sizeProps.order !== undefined) {
            classNames.push(`${prefixCls}-${size}-order-${sizeProps.order}`)
          }
          if (sizeProps.pull !== undefined) {
            classNames.push(`${prefixCls}-${size}-pull-${sizeProps.pull}`)
          }
          if (sizeProps.push !== undefined) {
            classNames.push(`${prefixCls}-${size}-push-${sizeProps.push}`)
          }
          // 响应式 flex：类名控制断点生效时机，CSS 变量传递取值（对齐 AntD v6）
          if (sizeProps.flex !== undefined) {
            classNames.push(`${prefixCls}-${size}-flex`)
          }
        }
      })

      return cls(...classNames)
    })

    const colStyle = computed(() => {
      const style: CSSProperties = {}
      // 响应式 flex 的 CSS 变量（由 .hmfw-col-{size}-flex 类消费）
      const flexVars: Record<string, string> = {}

      if (rowContext) {
        const [horizontalGutter] = rowContext.gutter.value
        if (horizontalGutter) {
          const hGutter =
            typeof horizontalGutter === 'number' ? `${horizontalGutter / 2}px` : `calc(${horizontalGutter} / 2)`
          style.paddingInline = hGutter
        }
      }

      // flex=0 为合法值（对齐 AntD flex || flex === 0），故用 !== undefined 判定
      if (props.flex !== undefined) {
        style.flex = parseFlex(props.flex)
        // Hack for Firefox to avoid size issue
        if (rowContext && !rowContext.wrap.value && !style.minWidth) {
          style.minWidth = 0
        }
      }

      sizes.forEach((size) => {
        const sizeProps = props[size]
        if (typeof sizeProps === 'object' && sizeProps !== null && sizeProps.flex !== undefined) {
          flexVars[`--hmfw-col-${size}-flex`] = parseFlex(sizeProps.flex)
        }
      })

      return { ...style, ...flexVars }
    })

    return () => (
      <div class={classes.value} style={colStyle.value}>
        {slots.default?.()}
      </div>
    )
  },
})
