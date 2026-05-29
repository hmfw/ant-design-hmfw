import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export interface DescriptionsItem {
  label: string
  children?: unknown
  span?: number
  labelStyle?: Record<string, string>
  contentStyle?: Record<string, string>
}

export const Descriptions = defineComponent({
  name: 'Descriptions',
  props: {
    title: String,
    extra: String,
    bordered: Boolean,
    column: { type: Number, default: 3 },
    size: { type: String as PropType<'default' | 'middle' | 'small'>, default: 'default' },
    layout: { type: String as PropType<'horizontal' | 'vertical'>, default: 'horizontal' },
    colon: { type: Boolean, default: true },
    items: Array as PropType<DescriptionsItem[]>,
    labelStyle: Object as PropType<Record<string, string>>,
    contentStyle: Object as PropType<Record<string, string>>,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('descriptions')

    return () => {
      const items = props.items ?? []

      // Build rows based on column count and span
      const rows: DescriptionsItem[][] = []
      let currentRow: DescriptionsItem[] = []
      let currentSpan = 0

      for (const item of items) {
        const span = item.span ?? 1
        if (currentSpan + span > props.column && currentRow.length > 0) {
          rows.push(currentRow)
          currentRow = []
          currentSpan = 0
        }
        currentRow.push(item)
        currentSpan += span
        if (currentSpan >= props.column) {
          rows.push(currentRow)
          currentRow = []
          currentSpan = 0
        }
      }
      if (currentRow.length > 0) rows.push(currentRow)

      return (
        <div class={cls(prefixCls, `${prefixCls}-${props.size}`, {
          [`${prefixCls}-bordered`]: props.bordered,
          [`${prefixCls}-${props.layout}`]: props.layout !== 'horizontal',
        })}>
          {(props.title || props.extra || slots.title || slots.extra) && (
            <div class={`${prefixCls}-header`}>
              <div class={`${prefixCls}-title`}>{slots.title?.() ?? props.title}</div>
              {(props.extra || slots.extra) && (
                <div class={`${prefixCls}-extra`}>{slots.extra?.() ?? props.extra}</div>
              )}
            </div>
          )}
          <div class={`${prefixCls}-view`}>
            <table>
              <tbody>
                {rows.map((row, rowIdx) => {
                  if (props.layout === 'vertical') {
                    return (
                      <>
                        <tr key={`label-${rowIdx}`} class={`${prefixCls}-row`}>
                          {row.map((item, i) => (
                            <th
                              key={i}
                              class={`${prefixCls}-item-label`}
                              colspan={item.span ?? 1}
                              style={{ ...props.labelStyle, ...item.labelStyle }}
                            >
                              {item.label}{props.colon && props.bordered ? ':' : ''}
                            </th>
                          ))}
                        </tr>
                        <tr key={`content-${rowIdx}`} class={`${prefixCls}-row`}>
                          {row.map((item, i) => (
                            <td
                              key={i}
                              class={`${prefixCls}-item-content`}
                              colspan={item.span ?? 1}
                              style={{ ...props.contentStyle, ...item.contentStyle }}
                            >
                              {item.children as any}
                            </td>
                          ))}
                        </tr>
                      </>
                    )
                  }

                  return (
                    <tr key={rowIdx} class={`${prefixCls}-row`}>
                      {row.map((item, i) => (
                        <>
                          <th
                            key={`label-${i}`}
                            class={`${prefixCls}-item-label`}
                            style={{ ...props.labelStyle, ...item.labelStyle }}
                          >
                            {item.label}{props.colon && props.bordered ? ':' : ''}
                          </th>
                          <td
                            key={`content-${i}`}
                            class={`${prefixCls}-item-content`}
                            colspan={item.span ? item.span * 2 - 1 : 1}
                            style={{ ...props.contentStyle, ...item.contentStyle }}
                          >
                            {item.children as any}
                          </td>
                        </>
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
