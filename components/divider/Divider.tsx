import { defineComponent, computed, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { DividerType, DividerOrientation } from './types'

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
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('divider')

    const hasChildren = computed(() => !!slots.default)

    const classes = computed(() =>
      cls(
        prefixCls,
        `${prefixCls}-${props.type}`,
        {
          [`${prefixCls}-with-text`]: hasChildren.value && props.type === 'horizontal',
          [`${prefixCls}-with-text-${props.orientation}`]: hasChildren.value && props.type === 'horizontal',
          [`${prefixCls}-dashed`]: props.dashed,
          [`${prefixCls}-plain`]: props.plain,
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
