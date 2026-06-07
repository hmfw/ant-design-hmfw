import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { ScrollNumber } from './ScrollNumber'
import type { BadgeStatus, BadgeSize } from './types'

const PRESET_COLORS = ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime']

export const Badge = defineComponent({
  name: 'Badge',
  props: {
    count: [Number, String] as PropType<number | string>,
    dot: Boolean,
    showZero: Boolean,
    overflowCount: {
      type: Number,
      default: 99,
    },
    status: String as PropType<BadgeStatus>,
    color: String,
    text: String,
    size: {
      type: String as PropType<BadgeSize>,
      default: 'default',
    },
    offset: {
      type: Array as unknown as PropType<[number, number]>,
    },
    title: String,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('badge')

    const displayCount = computed(() => {
      if (typeof props.count === 'number' && props.count > props.overflowCount) {
        return `${props.overflowCount}+`
      }
      return props.count
    })

    const isHidden = computed(() => {
      if (props.dot) return false
      if (props.status) return false
      const count = props.count
      if (count === undefined || count === null) return true
      if (typeof count === 'number' && count === 0 && !props.showZero) return true
      return false
    })

    const isPresetColor = computed(() =>
      props.color ? PRESET_COLORS.includes(props.color) : false,
    )

    const badgeStyle = computed(() => {
      const style: Record<string, string> = {}
      if (props.offset) {
        style.marginTop = `${props.offset[1]}px`
        style.right = `${-props.offset[0]}px`
      }
      if (props.color && !isPresetColor.value) {
        style.background = props.color
      }
      return style
    })

    return () => {
      // Status-only badge (no wrapper)
      if (props.status || (props.color && !slots.default)) {
        const statusCls = cls(
          `${prefixCls}-status-dot`,
          // 只有当没有自定义 color 时才使用 status 预设样式
          props.status && !props.color && `${prefixCls}-status-${props.status}`,
          // 只有当没有 status 时才使用 color 预设样式
          !props.status && props.color && isPresetColor.value && `${prefixCls}-color-${props.color}`,
        )
        // 自定义颜色优先级：color > status 预设颜色
        const dotStyle = props.color && !isPresetColor.value
          ? { background: props.color }
          : props.color && isPresetColor.value
          ? { background: props.color }
          : {}
        return (
          <span class={cls(prefixCls, `${prefixCls}-status`)}>
            <span class={statusCls} style={dotStyle} />
            {props.text && <span class={`${prefixCls}-status-text`}>{props.text}</span>}
          </span>
        )
      }

      const supCls = cls(`${prefixCls}-count`, {
        [`${prefixCls}-count-sm`]: props.size === 'small',
        [`${prefixCls}-dot`]: props.dot,
        [`${prefixCls}-count-show-zero`]: props.showZero,
        [`${prefixCls}-multiple-words`]: typeof displayCount.value === 'string' && displayCount.value.length > 1,
      })

      const sup = !isHidden.value && (
        <sup
          class={supCls}
          style={badgeStyle.value}
          title={props.title ?? String(props.count ?? '')}
        >
          {!props.dot && (
            <ScrollNumber count={displayCount.value ?? 0} />
          )}
        </sup>
      )

      if (!slots.default) {
        return <span class={cls(prefixCls, `${prefixCls}-not-a-wrapper`)}>{sup}</span>
      }

      return (
        <span class={cls(prefixCls)}>
          {slots.default()}
          {sup}
        </span>
      )
    }
  },
})
