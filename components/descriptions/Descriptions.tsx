import { defineComponent, computed, type PropType, type VNode } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import type { DescriptionsItemProps, Breakpoint } from './types'

interface InternalDescriptionsItem extends DescriptionsItemProps {
  key?: string | number
  filled?: boolean
  computedSpan?: number
}

// Default responsive column map
const DEFAULT_COLUMN_MAP: Record<Breakpoint, number> = {
  xxl: 3,
  xl: 3,
  lg: 3,
  md: 3,
  sm: 2,
  xs: 1,
}

// Simple responsive breakpoint detection (client-side only)
function useBreakpoint(): Partial<Record<Breakpoint, boolean>> {
  // For SSR safety, return empty object
  if (typeof window === 'undefined') {
    return {}
  }

  const width = window.innerWidth
  return {
    xs: width >= 0,
    sm: width >= 576,
    md: width >= 768,
    lg: width >= 992,
    xl: width >= 1200,
    xxl: width >= 1600,
  }
}

// Match screen breakpoints (mobile-first cascade)
function matchScreen<T>(
  screens: Partial<Record<Breakpoint, boolean>>,
  map?: Partial<Record<Breakpoint, T>>,
): T | undefined {
  if (!map) return undefined
  const breakpoints: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs']
  for (const breakpoint of breakpoints) {
    if (screens[breakpoint] && map[breakpoint] !== undefined) {
      return map[breakpoint]
    }
  }
  return undefined
}

export const Descriptions = defineComponent({
  name: 'Descriptions',
  props: {
    title: [String, Object],
    extra: [String, Object],
    bordered: Boolean,
    column: { type: [Number, Object] as PropType<number | Partial<Record<Breakpoint, number>>>, default: 3 },
    size: { type: String as PropType<'default' | 'middle' | 'small' | 'medium'>, default: 'default' },
    layout: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    colon: { type: Boolean, default: true },
    items: Array as PropType<DescriptionsItemProps[]>,
    labelStyle: Object,
    contentStyle: Object,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('descriptions')
    const config = useConfig()

    // Compute responsive column count
    const mergedColumn = computed(() => {
      const screens = useBreakpoint()
      if (typeof props.column === 'number') {
        return props.column
      }
      return matchScreen(screens, props.column) ?? matchScreen(screens, DEFAULT_COLUMN_MAP) ?? 3
    })

    // Convert children to items (support both items prop and slot children)
    const mergedItems = computed(() => {
      if (props.items) {
        return props.items.map((item, index) => ({
          ...item,
          key: index,
        }))
      }
      // Extract from slot children (Descriptions.Item components)
      const children = slots.default?.() || []
      return children
        .filter((vnode: VNode) => vnode.type && typeof vnode.type === 'object')
        .map((vnode: VNode, index: number) => ({
          ...(vnode.props || {}),
          children: vnode.children,
          key: vnode.key ?? index,
        })) as InternalDescriptionsItem[]
    })

    // Process items with responsive span
    const processedItems = computed(() => {
      const screens = useBreakpoint()
      return mergedItems.value.map((item) => {
        const { span, ...rest } = item
        if (span === 'filled') {
          return { ...rest, filled: true, computedSpan: 1 }
        }
        const computedSpan = typeof span === 'number'
          ? span
          : matchScreen(screens, span as Partial<Record<Breakpoint, number>>) ?? 1
        return { ...rest, computedSpan }
      })
    })

    // Build rows with proper span calculation
    const rows = computed(() => {
      const column = mergedColumn.value
      const items = processedItems.value
      const result: InternalDescriptionsItem[][] = []
      let currentRow: InternalDescriptionsItem[] = []
      let currentSpan = 0

      for (const item of items) {
        if (item.filled) {
          // filled: fill remaining columns in current row, then start new row
          const remainingSpan = column - currentSpan
          currentRow.push({ ...item, computedSpan: remainingSpan })
          result.push(currentRow)
          currentRow = []
          currentSpan = 0
          continue
        }

        const span = item.computedSpan ?? 1
        const restSpan = column - currentSpan

        if (currentSpan + span > column && currentRow.length > 0) {
          // Exceed column, push current row and start new
          result.push(currentRow)
          currentRow = []
          currentSpan = 0
        }

        if (currentSpan + span > column) {
          // Item span exceeds remaining space, clamp it
          currentRow.push({ ...item, computedSpan: restSpan })
          currentSpan = column
        } else {
          currentRow.push(item)
          currentSpan += span
        }

        if (currentSpan >= column) {
          result.push(currentRow)
          currentRow = []
          currentSpan = 0
        }
      }

      if (currentRow.length > 0) {
        result.push(currentRow)
      }

      // Auto-fill last item span to fill row
      return result.map((row) => {
        const totalSpan = row.reduce((sum, item) => sum + (item.computedSpan ?? 1), 0)
        if (totalSpan < column && row.length > 0) {
          const lastItem = row[row.length - 1]
          const lastSpan = lastItem.computedSpan ?? 1
          lastItem.computedSpan = column - (totalSpan - lastSpan)
        }
        return row
      })
    })

    // Normalize size (medium -> middle)
    const normalizedSize = computed(() => {
      return props.size === 'medium' ? 'middle' : props.size
    })

    return () => {
      const direction = config.value.direction
      const size = normalizedSize.value

      const renderLabel = (item: InternalDescriptionsItem) => {
        const mergedLabelStyle = { ...props.labelStyle, ...item.labelStyle }
        return (
          <span style={mergedLabelStyle}>
            {item.label}
          </span>
        )
      }

      const renderContent = (item: InternalDescriptionsItem) => {
        const mergedContentStyle = { ...props.contentStyle, ...item.contentStyle }
        return (
          <span style={mergedContentStyle}>
            {item.children as any}
          </span>
        )
      }

      return (
        <div
          class={cls(prefixCls, {
            [`${prefixCls}-${size}`]: size !== 'default',
            [`${prefixCls}-bordered`]: props.bordered,
            [`${prefixCls}-rtl`]: direction === 'rtl',
          })}
        >
          {(props.title || props.extra || slots.title || slots.extra) && (
            <div class={`${prefixCls}-header`}>
              {(props.title || slots.title) && (
                <div class={`${prefixCls}-title`}>{slots.title?.() ?? props.title}</div>
              )}
              {(props.extra || slots.extra) && (
                <div class={`${prefixCls}-extra`}>{slots.extra?.() ?? props.extra}</div>
              )}
            </div>
          )}
          <div class={`${prefixCls}-view`}>
            <table>
              <tbody>
                {rows.value.map((row, rowIdx) => {
                  if (props.layout === 'vertical') {
                    return (
                      <>
                        <tr key={`label-${rowIdx}`} class={`${prefixCls}-row`}>
                          {row.map((item, i) => (
                            <th
                              key={`label-${item.key ?? i}`}
                              class={`${prefixCls}-item-label`}
                              colspan={item.computedSpan ?? 1}
                            >
                              {renderLabel(item)}
                            </th>
                          ))}
                        </tr>
                        <tr key={`content-${rowIdx}`} class={`${prefixCls}-row`}>
                          {row.map((item, i) => (
                            <td
                              key={`content-${item.key ?? i}`}
                              class={`${prefixCls}-item-content`}
                              colspan={item.computedSpan ?? 1}
                            >
                              {renderContent(item)}
                            </td>
                          ))}
                        </tr>
                      </>
                    )
                  }

                  if (props.bordered) {
                    return (
                      <tr key={rowIdx} class={`${prefixCls}-row`}>
                        {row.map((item, i) => [
                          <th
                            key={`label-${item.key ?? i}`}
                            class={`${prefixCls}-item-label`}
                          >
                            {renderLabel(item)}
                          </th>,
                          <td
                            key={`content-${item.key ?? i}`}
                            class={`${prefixCls}-item-content`}
                            colspan={(item.computedSpan ?? 1) * 2 - 1}
                          >
                            {renderContent(item)}
                          </td>,
                        ])}
                      </tr>
                    )
                  }

                  return (
                    <tr key={rowIdx} class={`${prefixCls}-row`}>
                      {row.map((item, i) => (
                        <td
                          key={`item-${item.key ?? i}`}
                          class={`${prefixCls}-item`}
                          colspan={item.computedSpan ?? 1}
                        >
                          <div class={`${prefixCls}-item-container`}>
                            {item.label && (
                              <span
                                class={cls(`${prefixCls}-item-label`, {
                                  [`${prefixCls}-item-no-colon`]: !props.colon,
                                })}
                              >
                                {renderLabel(item)}
                              </span>
                            )}
                            <span class={`${prefixCls}-item-content`}>
                              {renderContent(item)}
                            </span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  },
})
