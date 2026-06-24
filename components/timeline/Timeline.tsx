import { defineComponent, type PropType, type VNode, Fragment, Comment } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { LoadingOutlined } from '@hmfw/icons'
import type { TimelineItemProps, TimelineMode, TimelineOrientation, TimelineVariant } from './types'

// Helper to normalize mode (left/right → start/end)
function normalizeMode(mode?: TimelineMode): 'start' | 'end' | 'alternate' {
  if (mode === 'left') return 'start'
  if (mode === 'right') return 'end'
  if (mode === 'start' || mode === 'end' || mode === 'alternate') return mode
  return 'start'
}

// Helper to get item placement
function getItemPlacement(
  item: TimelineItemProps,
  index: number,
  mode: 'start' | 'end' | 'alternate',
): 'start' | 'end' {
  // Primary API
  if (item.placement) return item.placement
  // Legacy API
  if (item.position === 'left') return 'start'
  if (item.position === 'right') return 'end'
  // Mode-based
  if (mode === 'alternate') {
    return index % 2 === 0 ? 'start' : 'end'
  }
  return mode
}

// Helper to extract items from VNode children (Timeline.Item pattern)
function extractItemsFromChildren(children?: VNode[]): TimelineItemProps[] {
  if (!children) return []
  const items: TimelineItemProps[] = []

  for (const child of children) {
    if (!child) continue
    if (child.type === Comment) continue
    if (child.type === Fragment && Array.isArray(child.children)) {
      items.push(...extractItemsFromChildren(child.children as VNode[]))
      continue
    }
    // Extract props from TimelineItem VNode
    if (child.props) {
      items.push(child.props as TimelineItemProps)
    }
  }

  return items
}

export const TimelineItem = defineComponent({
  name: 'TimelineItem',
  props: {
    title: [String, Object] as PropType<string | VNode>,
    content: [String, Object] as PropType<string | VNode>,
    icon: [String, Object] as PropType<string | VNode>,
    placement: String as PropType<'start' | 'end'>,
    loading: Boolean,
    // Legacy
    label: [String, Object] as PropType<string | VNode>,
    children: null as unknown as PropType<unknown>,
    dot: [String, Object] as PropType<string | VNode>,
    position: String as PropType<'left' | 'right'>,
    // Common
    color: String,
    className: String,
    style: Object,
  },
  setup(props, { slots }) {
    // This component is only used for type checking and children extraction
    // The actual rendering is done by Timeline
    return () => slots.default?.()
  },
})

export const Timeline = defineComponent({
  name: 'Timeline',
  props: {
    items: Array as PropType<TimelineItemProps[]>,
    mode: { type: String as PropType<TimelineMode>, default: 'left' },
    orientation: { type: String as PropType<TimelineOrientation>, default: 'vertical' },
    variant: { type: String as PropType<TimelineVariant>, default: 'outlined' },
    reverse: Boolean,
    titleSpan: [Number, String] as PropType<number | string>,
    // Deprecated
    pending: [Boolean, String, Object] as PropType<boolean | string | VNode>,
    pendingDot: [String, Object] as PropType<string | VNode>,
    classNames: Object as PropType<import('./types').TimelineClassNames>,
    styles: Object as PropType<import('./types').TimelineStyles>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('timeline')

    return () => {
      const mergedMode = normalizeMode(props.mode)

      // Get items from props or children
      let rawItems: TimelineItemProps[] = []
      if (props.items) {
        rawItems = [...props.items]
      } else if (slots.default) {
        const children = slots.default()
        rawItems = extractItemsFromChildren(children)
      }

      // Add pending item if needed
      if (props.pending) {
        const pendingContent =
          typeof props.pending === 'string' ? props.pending : props.pending === true ? undefined : props.pending
        rawItems.push({
          content: pendingContent,
          icon: props.pendingDot,
          loading: !props.pendingDot,
          color: 'gray',
        })
      }

      // Reverse if needed
      const items = props.reverse ? [...rawItems].reverse() : rawItems

      const rootClass = cls(
        prefixCls,
        {
          [`${prefixCls}-${props.orientation}`]: props.orientation === 'horizontal',
          [`${prefixCls}-${mergedMode}`]: mergedMode !== 'start',
          [`${prefixCls}-${props.variant}`]: props.variant !== 'outlined',
          [`${prefixCls}-pending`]: !!props.pending,
          [`${prefixCls}-reverse`]: props.reverse,
        },
        props.classNames?.root,
      )

      const rootStyle: Record<string, any> = { ...props.styles?.root }
      if (props.titleSpan !== undefined && mergedMode !== 'alternate') {
        if (typeof props.titleSpan === 'number') {
          rootStyle['--hmfw-timeline-title-span'] = `${props.titleSpan}px`
        } else {
          rootStyle['--hmfw-timeline-title-span'] = props.titleSpan
        }
      }

      return (
        <ul class={rootClass} style={rootStyle}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const placement = getItemPlacement(item, index, mergedMode)

            // Merge primary and legacy API
            const title = item.title ?? item.label
            const content = item.content ?? item.children
            let icon = item.icon ?? item.dot

            // Handle loading state
            if (item.loading && !icon) {
              icon = <LoadingOutlined class="hmfw-icon hmfw-icon-spin" />
            }

            const color = item.color ?? 'blue'
            const isPresetColor = ['blue', 'red', 'green', 'gray'].includes(color)
            const hasCustomIcon = !!icon || item.loading

            const itemClass = cls(
              `${prefixCls}-item`,
              {
                [`${prefixCls}-item-last`]: isLast,
                [`${prefixCls}-item-${placement}`]: placement === 'end',
                [`${prefixCls}-item-loading`]: item.loading,
              },
              item.className,
              props.classNames?.item,
            )

            const headClass = cls(
              `${prefixCls}-item-head`,
              {
                [`${prefixCls}-item-head-${color}`]: isPresetColor,
                [`${prefixCls}-item-head-custom`]: hasCustomIcon || !isPresetColor,
              },
              props.classNames?.dot,
            )

            const headStyle: Record<string, any> = { ...item.style, ...props.styles?.dot }
            if (!isPresetColor) {
              headStyle.borderColor = color
              headStyle.color = color
            }

            return (
              <li key={item.key ?? index} class={itemClass} style={props.styles?.item}>
                {title && (
                  <div class={cls(`${prefixCls}-item-label`, props.classNames?.label)} style={props.styles?.label}>
                    {title}
                  </div>
                )}
                <div class={cls(`${prefixCls}-item-tail`, props.classNames?.tail)} style={props.styles?.tail} />
                <div class={headClass} style={headStyle}>
                  {icon}
                </div>
                <div class={cls(`${prefixCls}-item-content`, props.classNames?.content)} style={props.styles?.content}>
                  {content as any}
                </div>
              </li>
            )
          })}
        </ul>
      )
    }
  },
})
