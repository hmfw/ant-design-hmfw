import { defineComponent, computed, Fragment, Comment, Text, type PropType, type VNode } from 'vue'
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

// 展平 Fragment（v-for 会产生单个 Fragment 节点），并过滤注释/空节点
function flattenChildren(children: VNode[]): VNode[] {
  const result: VNode[] = []
  children.forEach((child) => {
    if (child == null) return
    if (child.type === Comment) return
    if (child.type === Fragment && Array.isArray(child.children)) {
      result.push(...flattenChildren(child.children as VNode[]))
      return
    }
    // 空文本节点也跳过
    if (child.type === Text && typeof child.children === 'string' && child.children.trim() === '') {
      return
    }
    result.push(child)
  })
  return result
}

export default defineComponent({
  name: 'Space',
  props: {
    direction: {
      type: String as PropType<SpaceDirection>,
      default: 'horizontal',
    },
    /** `direction="vertical"` 的简写 */
    vertical: {
      type: Boolean,
      default: false,
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
      type: [Object, String] as PropType<VNode | string>,
      default: undefined,
    },
    /** `split` 的别名（与 AntD v6 对齐） */
    separator: {
      type: [Object, String] as PropType<VNode | string>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('space')

    const mergedDirection = computed<SpaceDirection>(() =>
      props.vertical ? 'vertical' : props.direction
    )

    const mergedSeparator = computed(() => props.separator ?? props.split)

    const mergedAlign = computed(() => {
      if (props.align) return props.align
      return mergedDirection.value === 'horizontal' ? 'center' : undefined
    })

    const sizes = computed<[number, number]>(() => {
      const size = props.size
      if (Array.isArray(size)) {
        return [getNumberSize(size[0]), getNumberSize(size[1])]
      }
      const s = getNumberSize(size)
      return [s, s]
    })

    const classes = computed(() => {
      const align = mergedAlign.value
      return cls(
        prefixCls,
        `${prefixCls}-${mergedDirection.value}`,
        {
          [`${prefixCls}-align-${align}`]: !!align,
          [`${prefixCls}-wrap`]: props.wrap,
        }
      )
    })

    const containerStyle = computed(() => {
      const [horizontalSize, verticalSize] = sizes.value
      const style: Record<string, string> = {
        columnGap: `${horizontalSize}px`,
        rowGap: `${verticalSize}px`,
      }
      if (props.wrap) style.flexWrap = 'wrap'
      return style
    })

    return () => {
      const rawChildren = slots.default?.() || []
      const children = flattenChildren(rawChildren)
      const separator = mergedSeparator.value
      const items: VNode[] = []

      children.forEach((child, index) => {
        items.push(
          <div key={child.key ?? `item-${index}`} class={`${prefixCls}-item`}>
            {child}
          </div>
        )

        // 在元素之间插入分隔符
        if (separator && index < children.length - 1) {
          items.push(
            <span key={`split-${index}`} class={`${prefixCls}-item-split`}>
              {separator}
            </span>
          )
        }
      })

      if (items.length === 0) return null

      return (
        <div class={classes.value} style={containerStyle.value}>
          {items}
        </div>
      )
    }
  },
})
