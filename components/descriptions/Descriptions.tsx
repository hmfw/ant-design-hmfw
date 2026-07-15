import {
  defineComponent,
  computed,
  ref,
  onMounted,
  onUnmounted,
  type PropType,
  type VNode,
  type CSSProperties,
} from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls, debounce } from '../_utils'
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

// 响应式断点检测 composable（支持窗口 resize）
function useBreakpoint() {
  // 创建响应式 ref 存储窗口宽度
  const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

  // 更新窗口宽度
  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth
    }
  }

  // 防抖处理，避免频繁计算（100ms 延迟）
  const debouncedUpdate = debounce(updateWidth, 100)

  // 挂载时添加 resize 监听器
  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', debouncedUpdate)
    }
  })

  // 卸载时移除 resize 监听器
  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', debouncedUpdate)
    }
  })

  // 返回响应式的断点状态
  return computed(() => ({
    xs: true, // xs 永远激活（mobile-first）
    sm: windowWidth.value >= 576,
    md: windowWidth.value >= 768,
    lg: windowWidth.value >= 992,
    xl: windowWidth.value >= 1200,
    xxl: windowWidth.value >= 1600,
  }))
}

/**
 * 匹配当前屏幕断点配置（desktop-first 策略）
 *
 * 从大屏到小屏查找第一个匹配的断点配置。
 * 例如：屏幕宽度 1400px 同时激活 xxl/xl/lg/md/sm/xs，
 * 但返回 xxl 的配置（最具体的匹配）。
 *
 * @param screens - 当前激活的断点集合
 * @param map - 断点到值的映射
 * @returns 匹配的值，未找到返回 undefined
 */
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

const descriptionsProps = {
  title: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  extra: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  bordered: { type: Boolean, default: false },
  column: {
    type: [Number, Object] as PropType<number | Partial<Record<Breakpoint, number>>>,
    default: 3,
  },
  size: {
    type: String as PropType<'default' | 'middle' | 'small' | 'medium'>,
    default: 'default',
  },
  layout: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
  colon: { type: Boolean, default: true },
  items: { type: Array as PropType<DescriptionsItemProps[]>, default: undefined },
  labelStyle: { type: Object as PropType<CSSProperties>, default: undefined },
  contentStyle: { type: Object as PropType<CSSProperties>, default: undefined },
  classNames: { type: Object as PropType<import('./types').DescriptionsClassNames>, default: undefined },
  styles: { type: Object as PropType<import('./types').DescriptionsStyles>, default: undefined },
} satisfies Record<keyof import('./types').DescriptionsProps, any>

export const Descriptions = defineComponent({
  name: 'Descriptions',
  props: descriptionsProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('descriptions')
    const config = useConfig()

    // 使用响应式断点检测
    const breakpointStates = useBreakpoint()

    // Compute responsive column count
    const mergedColumn = computed(() => {
      const screens = breakpointStates.value
      let col: number
      if (typeof props.column === 'number') {
        col = props.column
      } else {
        col = matchScreen(screens, props.column) ?? matchScreen(screens, DEFAULT_COLUMN_MAP) ?? 3
      }
      // 防御：确保列数至少为 1
      return Math.max(1, col)
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
        .filter((vnode: VNode) => {
          // 保留组件 VNode，排除文本节点和注释节点
          return vnode.type && (typeof vnode.type === 'object' || typeof vnode.type === 'function')
        })
        .map((vnode: VNode, index: number) => ({
          ...(vnode.props || {}),
          children: vnode.children,
          key: vnode.key ?? index,
        })) as InternalDescriptionsItem[]
    })

    // Process items with responsive span
    const processedItems = computed(() => {
      const screens = breakpointStates.value
      return mergedItems.value.map((item) => {
        const { span, ...rest } = item
        if (span === 'filled') {
          return { ...rest, filled: true, computedSpan: 1 }
        }
        const computedSpan =
          typeof span === 'number' ? span : (matchScreen(screens, span as Partial<Record<Breakpoint, number>>) ?? 1)
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
        // 处理 filled 项：填充剩余列并强制换行
        if (item.filled) {
          const remainingSpan = column - currentSpan
          currentRow.push({ ...item, computedSpan: remainingSpan })
          result.push(currentRow)
          currentRow = []
          currentSpan = 0
          continue
        }

        const span = item.computedSpan ?? 1
        const restSpan = column - currentSpan

        // 当前行已满且有内容时，推入结果并开始新行
        if (currentSpan + span > column && currentRow.length > 0) {
          result.push(currentRow)
          currentRow = []
          currentSpan = 0
        }

        // 处理超宽项：限制为剩余空间
        if (currentSpan + span > column) {
          currentRow.push({ ...item, computedSpan: restSpan })
          currentSpan = column
        } else {
          currentRow.push(item)
          currentSpan += span
        }

        // 当前行已满，推入结果
        if (currentSpan >= column) {
          result.push(currentRow)
          currentRow = []
          currentSpan = 0
        }
      }

      // 保留未满的最后一行
      if (currentRow.length > 0) {
        result.push(currentRow)
      }

      // 自动扩展最后一项填满行
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
        const hasStyle = Object.keys(mergedLabelStyle).length > 0
        // 仅在需要应用样式时才包裹 span
        if (hasStyle) {
          return <span style={mergedLabelStyle}>{item.label}</span>
        }
        return item.label
      }

      const renderContent = (item: InternalDescriptionsItem) => {
        const mergedContentStyle = { ...props.contentStyle, ...item.contentStyle }
        const hasStyle = Object.keys(mergedContentStyle).length > 0
        // 仅在需要应用样式时才包裹 span
        if (hasStyle) {
          return <span style={mergedContentStyle}>{item.children as any}</span>
        }
        return item.children as any
      }

      return (
        <div
          class={cls(
            prefixCls,
            {
              [`${prefixCls}-${size}`]: size !== 'default',
              [`${prefixCls}-bordered`]: props.bordered,
              [`${prefixCls}-rtl`]: direction === 'rtl',
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
        >
          {(props.title || props.extra || slots.title || slots.extra) && (
            <div class={cls(`${prefixCls}-header`, props.classNames?.header)} style={props.styles?.header}>
              {(props.title || slots.title) && (
                <div class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
                  {slots.title?.() ?? props.title}
                </div>
              )}
              {(props.extra || slots.extra) && (
                <div class={cls(`${prefixCls}-extra`, props.classNames?.extra)} style={props.styles?.extra}>
                  {slots.extra?.() ?? props.extra}
                </div>
              )}
            </div>
          )}
          <div class={cls(`${prefixCls}-view`, props.classNames?.view)} style={props.styles?.view}>
            <table>
              <tbody>
                {rows.value.map((row, rowIdx) => {
                  if (props.layout === 'vertical') {
                    return (
                      <>
                        <tr
                          key={`label-${rowIdx}`}
                          class={cls(`${prefixCls}-row`, props.classNames?.row)}
                          style={props.styles?.row}
                        >
                          {row.map((item, i) => (
                            <th
                              key={`label-${item.key ?? i}`}
                              class={cls(`${prefixCls}-item-label`, props.classNames?.label)}
                              colspan={item.computedSpan ?? 1}
                              style={props.styles?.label}
                            >
                              {renderLabel(item)}
                            </th>
                          ))}
                        </tr>
                        <tr
                          key={`content-${rowIdx}`}
                          class={cls(`${prefixCls}-row`, props.classNames?.row)}
                          style={props.styles?.row}
                        >
                          {row.map((item, i) => (
                            <td
                              key={`content-${item.key ?? i}`}
                              class={cls(`${prefixCls}-item-content`, props.classNames?.content)}
                              colspan={item.computedSpan ?? 1}
                              style={props.styles?.content}
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
                      <tr key={rowIdx} class={cls(`${prefixCls}-row`, props.classNames?.row)} style={props.styles?.row}>
                        {row.map((item, i) => [
                          <th
                            key={`label-${item.key ?? i}`}
                            class={cls(`${prefixCls}-item-label`, props.classNames?.label)}
                            style={props.styles?.label}
                          >
                            {renderLabel(item)}
                          </th>,
                          <td
                            key={`content-${item.key ?? i}`}
                            class={cls(`${prefixCls}-item-content`, props.classNames?.content)}
                            colspan={(item.computedSpan ?? 1) * 2 - 1}
                            style={props.styles?.content}
                          >
                            {renderContent(item)}
                          </td>,
                        ])}
                      </tr>
                    )
                  }

                  return (
                    <tr key={rowIdx} class={cls(`${prefixCls}-row`, props.classNames?.row)} style={props.styles?.row}>
                      {row.map((item, i) => (
                        <td
                          key={`item-${item.key ?? i}`}
                          class={cls(`${prefixCls}-item`, props.classNames?.item)}
                          colspan={item.computedSpan ?? 1}
                          style={props.styles?.item}
                        >
                          <div
                            class={cls(`${prefixCls}-item-container`, props.classNames?.itemContainer)}
                            style={props.styles?.itemContainer}
                          >
                            {item.label && (
                              <span
                                class={cls(
                                  `${prefixCls}-item-label`,
                                  {
                                    [`${prefixCls}-item-no-colon`]: !props.colon,
                                  },
                                  props.classNames?.label,
                                )}
                                style={props.styles?.label}
                              >
                                {renderLabel(item)}
                              </span>
                            )}
                            <span
                              class={cls(`${prefixCls}-item-content`, props.classNames?.content)}
                              style={props.styles?.content}
                            >
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
