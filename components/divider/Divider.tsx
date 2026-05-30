import { defineComponent, computed, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { DividerType, DividerOrientation, DividerVariant, DividerSize } from './types'

export default defineComponent({
  name: 'Divider',
  props: {
    type: {
      type: String as PropType<DividerType>,
      default: 'horizontal',
    },
    dashed: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String as PropType<DividerVariant>,
      default: undefined,
    },
    orientation: {
      type: String as PropType<DividerOrientation>,
      default: 'center',
    },
    orientationMargin: {
      type: [String, Number],
      default: undefined,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<DividerSize>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('divider')

    const hasChildren = computed(() => !!slots.default)

    // variant 优先级高于 dashed；dashed 等价于 variant="dashed"
    const mergedVariant = computed<DividerVariant>(() => {
      if (props.variant) return props.variant
      return props.dashed ? 'dashed' : 'solid'
    })

    const classes = computed(() =>
      cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        {
          [`${prefixCls}-with-text`]: hasChildren.value && props.type === 'horizontal',
          [`${prefixCls}-with-text-${props.orientation}`]: hasChildren.value && props.type === 'horizontal',
          [`${prefixCls}-${mergedVariant.value}`]: mergedVariant.value !== 'solid',
          [`${prefixCls}-plain`]: props.plain,
          [`${prefixCls}-sm`]: props.size === 'small' && props.type === 'horizontal',
          [`${prefixCls}-md`]: props.size === 'middle' && props.type === 'horizontal',
        }
      )
    )

    const innerStyle = computed(() => {
      const style: CSSProperties = {}

      if (props.orientationMargin !== undefined) {
        if (props.orientation === 'left') {
          style.marginLeft = typeof props.orientationMargin === 'number'
            ? `${props.orientationMargin}px`
            : props.orientationMargin
        } else if (props.orientation === 'right') {
          style.marginRight = typeof props.orientationMargin === 'number'
            ? `${props.orientationMargin}px`
            : props.orientationMargin
        }
      }

      return style
    })

    return () => {
      const children = slots.default?.()

      if (props.type === 'vertical') {
        return <div class={classes.value} role="separator" />
      }

      if (hasChildren.value) {
        return (
          <div class={classes.value} role="separator">
            <span class={`${prefixCls}-inner-text`} style={innerStyle.value}>
              {children}
            </span>
          </div>
        )
      }

      return <div class={classes.value} role="separator" />
    }
  },
})
