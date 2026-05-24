import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'

export type TimelineItemColor = 'blue' | 'red' | 'green' | 'gray' | string

export interface TimelineItem {
  label?: string
  children?: unknown
  color?: TimelineItemColor
  dot?: string
  pending?: boolean
}

export const Timeline = defineComponent({
  name: 'Timeline',
  props: {
    pending: [Boolean, String] as PropType<boolean | string>,
    pendingDot: String,
    reverse: Boolean,
    mode: { type: String as PropType<'left' | 'alternate' | 'right'>, default: 'left' },
    items: Array as PropType<TimelineItem[]>,
  },
  setup(props) {
    const prefixCls = usePrefixCls('timeline')

    return () => {
      let items = [...(props.items ?? [])]

      if (props.pending) {
        items.push({
          children: typeof props.pending === 'string' ? props.pending : undefined,
          dot: props.pendingDot ?? '...',
          pending: true,
          color: 'gray',
        })
      }

      if (props.reverse) items = items.reverse()

      return (
        <ul class={cls(prefixCls, {
          [`${prefixCls}-pending`]: !!props.pending,
          [`${prefixCls}-reverse`]: props.reverse,
          [`${prefixCls}-${props.mode}`]: props.mode !== 'left',
        })}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            const color = item.color ?? 'blue'
            const isCustomColor = !['blue', 'red', 'green', 'gray'].includes(color)

            return (
              <li
                key={index}
                class={cls(`${prefixCls}-item`, {
                  [`${prefixCls}-item-last`]: isLast,
                  [`${prefixCls}-item-pending`]: !!item.pending,
                })}
              >
                {item.label && (
                  <div class={`${prefixCls}-item-label`}>{item.label}</div>
                )}
                <div class={`${prefixCls}-item-tail`} />
                <div
                  class={cls(`${prefixCls}-item-head`, {
                    [`${prefixCls}-item-head-${color}`]: !isCustomColor,
                    [`${prefixCls}-item-head-custom`]: !!item.dot || isCustomColor,
                  })}
                  style={isCustomColor ? { borderColor: color, color } : {}}
                >
                  {item.dot ?? ''}
                </div>
                <div class={`${prefixCls}-item-content`}>
                  {item.children as any}
                </div>
              </li>
            )
          })}
        </ul>
      )
    }
  },
})
