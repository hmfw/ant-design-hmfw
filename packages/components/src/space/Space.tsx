import { defineComponent, computed, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { SpaceSize, SpaceDirection, SpaceAlign } from './types'

const spaceSize = {
  small: 8,
  middle: 16,
  large: 24,
}

function getNumberSize(size: SpaceSize): number {
  return typeof size === 'number' ? size : spaceSize[size]
}

export default defineComponent({
  name: 'Space',
  props: {
    direction: {
      type: String as PropType<SpaceDirection>,
      default: 'horizontal',
    },
    size: {
      type: [String, Number, Array] as PropType<SpaceSize | [SpaceSize, SpaceSize]>,
      default: 'small',
    },
    align: {
      type: String as PropType<SpaceAlign>,
      default: undefined,
    },
    wrap: {
      type: Boolean,
      default: false,
    },
    split: {
      type: Object,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('space')

    const mergedAlign = computed(() => {
      if (props.align) return props.align
      return props.direction === 'horizontal' ? 'center' : undefined
    })

    const [horizontalSize, verticalSize] = computed(() => {
      const size = props.size
      if (Array.isArray(size)) {
        return [getNumberSize(size[0]), getNumberSize(size[1])]
      }
      const s = getNumberSize(size)
      return [s, s]
    }).value

    const classes = computed(() => {
      const align = mergedAlign.value
      return cls(
        prefixCls,
        `${prefixCls}-${props.direction}`,
        {
          [`${prefixCls}-align-${align}`]: !!align,
          [`${prefixCls}-wrap`]: props.wrap,
        }
      )
    })

    const itemStyle = computed(() => {
      const style: Record<string, string> = {}

      if (props.direction === 'horizontal') {
        style.marginRight = `${horizontalSize}px`
      } else {
        style.marginBottom = `${verticalSize}px`
      }

      return style
    })

    return () => {
      const children = slots.default?.() || []
      const items: VNode[] = []

      children.forEach((child, index) => {
        if (!child || (child.type === Comment)) return

        items.push(
          <div
            key={index}
            class={`${prefixCls}-item`}
            style={index === children.length - 1 ? {} : itemStyle.value}
          >
            {child}
          </div>
        )

        // Add split element between items
        if (props.split && index < children.length - 1) {
          items.push(
            <div key={`split-${index}`} class={`${prefixCls}-item-split`}>
              {props.split}
            </div>
          )
        }
      })

      return (
        <div class={classes.value}>
          {items}
        </div>
      )
    }
  },
})
