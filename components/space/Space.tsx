import { defineComponent, computed, Fragment, Comment, Text, type PropType, type VNode, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils/cls'
import type { SpaceProps, SpaceSize, SpaceDirection, SpaceAlign, SpaceClassNames, SpaceStyles } from './types'

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

const spaceProps = {
  orientation: {
    type: String as PropType<SpaceDirection>,
    default: undefined,
  },
  direction: {
    type: String as PropType<SpaceDirection>,
    default: 'horizontal',
  },
  /** `orientation="vertical"` 的简写 */
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
  /** 分隔符（与 AntD v6 对齐） */
  separator: {
    type: [Object, String] as PropType<VNode | string>,
    default: undefined,
  },
  classNames: {
    type: Object as PropType<SpaceClassNames>,
    default: undefined,
  },
  styles: {
    type: Object as PropType<SpaceStyles>,
    default: undefined,
  },
} satisfies Record<keyof SpaceProps, any>

export default defineComponent({
  name: 'Space',
  props: spaceProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('space')

    const mergedDirection = computed<SpaceDirection>(() => {
      // orientation 优先级最高（与 AntD v6 对齐）
      if (props.orientation) return props.orientation
      // vertical 简写次之
      if (props.vertical) return 'vertical'
      // direction 兜底
      return props.direction
    })

    // 优先级：slot > separator prop
    const mergedSeparator = computed(() => slots.split?.() ?? props.separator)

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
        },
        props.classNames?.root,
      )
    })

    const containerStyle = computed(() => {
      const [horizontalSize, verticalSize] = sizes.value
      const style: CSSProperties = {
        columnGap: `${horizontalSize}px`,
        rowGap: `${verticalSize}px`,
      }
      if (props.wrap) style.flexWrap = 'wrap'
      return { ...style, ...props.styles?.root }
    })

    return () => {
      const rawChildren = slots.default?.() || []
      const children = flattenChildren(rawChildren)
      const separator = mergedSeparator.value
      const items: VNode[] = []

      children.forEach((child, index) => {
        items.push(
          <div
            key={child.key ?? `item-${index}`}
            class={cls(`${prefixCls}-item`, props.classNames?.item)}
            style={props.styles?.item}
          >
            {child}
          </div>,
        )

        // 在元素之间插入分隔符
        if (separator && index < children.length - 1) {
          items.push(
            <span
              key={`split-${index}`}
              class={cls(`${prefixCls}-item-split`, props.classNames?.split)}
              style={props.styles?.split}
            >
              {separator}
            </span>,
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
