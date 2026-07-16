import { defineComponent, type PropType, type VNode, Fragment, Comment } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { LoadingOutlined } from '@hmfw/icons'
import type {
  TimelineItemProps,
  TimelineMode,
  TimelineOrientation,
  TimelineVariant,
  TimelineProps,
  TimelineClassNames,
  TimelineStyles,
} from './types'

/**
 * 标准化布局模式：将废弃的 left/right 转换为 start/end
 * left/right 为向后兼容保留，推荐使用 start/end 以支持国际化（LTR/RTL）
 */
function normalizeMode(mode?: TimelineMode): 'start' | 'end' | 'alternate' {
  if (mode === 'left') return 'start'
  if (mode === 'right') return 'end'
  if (mode === 'start' || mode === 'end' || mode === 'alternate') return mode
  return 'start'
}

/**
 * 计算时间轴项的放置位置
 * @param item 时间轴项配置
 * @param index 项在列表中的索引
 * @param mode 时间轴布局模式
 * @returns 'start' 或 'end'，决定项位于时间线的左侧或右侧
 */
function getItemPlacement(
  item: TimelineItemProps,
  index: number,
  mode: 'start' | 'end' | 'alternate',
): 'start' | 'end' {
  // 1. 项级 placement 优先级最高
  if (item.placement) return item.placement

  // 2. alternate 模式：偶数索引在左（start），奇数索引在右（end）
  if (mode === 'alternate') {
    return index % 2 === 0 ? 'start' : 'end'
  }

  // 3. 使用全局 mode 设置
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
    // 验证是否为 TimelineItem 组件（通过 type 或 displayName）
    if (
      child.type &&
      (child.type === TimelineItem ||
        (typeof child.type === 'object' && (child.type as any).name === 'TimelineItem') ||
        (typeof child.type === 'function' && (child.type as any).name === 'TimelineItem')) &&
      child.props
    ) {
      items.push(child.props as TimelineItemProps)
    }
  }

  return items
}

const timelineItemProps = {
  title: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  content: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  icon: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  placement: { type: String as PropType<'start' | 'end'>, default: undefined },
  loading: { type: Boolean, default: false },
  // Common
  color: { type: String, default: undefined },
  className: { type: String, default: undefined },
  style: { type: Object, default: undefined },
  key: { type: [String, Number] as PropType<string | number>, default: undefined },
} satisfies Record<keyof TimelineItemProps, any>

export const TimelineItem = defineComponent({
  name: 'TimelineItem',
  props: timelineItemProps,
  setup(props, { slots }) {
    // This component is only used for type checking and children extraction
    // The actual rendering is done by Timeline
    return () => slots.default?.()
  },
})

const timelineProps = {
  items: { type: Array as PropType<TimelineItemProps[]>, default: undefined },
  mode: { type: String as PropType<TimelineMode>, default: 'left' },
  orientation: { type: String as PropType<TimelineOrientation>, default: 'vertical' },
  variant: { type: String as PropType<TimelineVariant>, default: 'outlined' },
  reverse: { type: Boolean, default: false },
  titleSpan: { type: [Number, String] as PropType<number | string>, default: undefined },
  classNames: { type: Object as PropType<TimelineClassNames>, default: undefined },
  styles: { type: Object as PropType<TimelineStyles>, default: undefined },
} satisfies Record<keyof TimelineProps, any>

export const Timeline = defineComponent({
  name: 'Timeline',
  props: timelineProps,
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

      // Reverse if needed
      const items = props.reverse ? [...rawItems].reverse() : rawItems

      const rootClass = cls(
        prefixCls,
        {
          [`${prefixCls}-${props.orientation}`]: props.orientation === 'horizontal',
          // 交替布局类名与 antd v6 对齐（layout-alternate）
          [`${prefixCls}-layout-alternate`]: mergedMode === 'alternate',
          [`${prefixCls}-${props.variant}`]: props.variant !== 'outlined',
          [`${prefixCls}-reverse`]: props.reverse,
        },
        props.classNames?.root,
      )

      const rootStyle: Record<string, any> = { ...props.styles?.root }
      if (props.titleSpan !== undefined && mergedMode !== 'alternate') {
        if (typeof props.titleSpan === 'number') {
          // 确保 titleSpan 为非负数
          const span = Math.max(0, props.titleSpan)
          rootStyle['--hmfw-timeline-title-span'] = `${span}px`
        } else {
          rootStyle['--hmfw-timeline-title-span'] = props.titleSpan
        }
      }

      return (
        <ul class={rootClass} style={rootStyle}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const placement = getItemPlacement(item, index, mergedMode)

            const title = item.title
            const content = item.content
            let icon = item.icon

            // Handle loading state
            if (item.loading && !icon) {
              icon = <LoadingOutlined spin />
            }

            const color = item.color ?? 'blue'
            const isPresetColor = ['blue', 'red', 'green', 'gray'].includes(color)
            const hasCustomIcon = !!icon || item.loading

            const itemClass = cls(
              `${prefixCls}-item`,
              {
                [`${prefixCls}-item-last`]: isLast,
                // placement 类与 antd v6 对齐（item-placement-start / item-placement-end）
                [`${prefixCls}-item-placement-${placement}`]: true,
                [`${prefixCls}-item-loading`]: item.loading,
              },
              item.className,
              props.classNames?.item,
            )

            const iconClass = cls(
              `${prefixCls}-item-icon`,
              {
                // 颜色类与 antd v6 对齐（item-color-blue 等）
                [`${prefixCls}-item-color-${color}`]: isPresetColor,
                [`${prefixCls}-item-icon-custom`]: hasCustomIcon || !isPresetColor,
              },
              props.classNames?.itemIcon,
            )

            const iconStyle: Record<string, any> = { ...item.style, ...props.styles?.itemIcon }
            if (!isPresetColor) {
              iconStyle.borderColor = color
              iconStyle.color = color
            }

            return (
              <li key={item.key ?? index} class={itemClass} style={props.styles?.item}>
                {title && (
                  <div
                    class={cls(`${prefixCls}-item-title`, props.classNames?.itemTitle)}
                    style={props.styles?.itemTitle}
                  >
                    {title}
                  </div>
                )}
                <div class={cls(`${prefixCls}-item-rail`, props.classNames?.itemRail)} style={props.styles?.itemRail} />
                <div class={iconClass} style={iconStyle}>
                  {icon}
                </div>
                <div
                  class={cls(`${prefixCls}-item-content`, props.classNames?.itemContent)}
                  style={props.styles?.itemContent}
                >
                  {content}
                </div>
              </li>
            )
          })}
        </ul>
      )
    }
  },
})
