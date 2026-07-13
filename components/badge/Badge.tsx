import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { ScrollNumber } from './ScrollNumber'
import { PRESET_COLORS } from './types'
import type { BadgeStatus, BadgeClassNames, BadgeStyles, BadgeProps } from './types'
import type { ComponentSize } from '../config-provider'

/** 默认的溢出上限 */
const DEFAULT_OVERFLOW_COUNT = 99

/**
 * 检查颜色是否为预设颜色
 */
const isPresetColor = (color?: string): boolean => {
  return !!color && PRESET_COLORS.includes(color as any)
}

/**
 * Badge 组件的 props 定义
 * 使用 satisfies 确保与 BadgeProps 接口完全一致
 */
const badgeProps = {
  count: { type: [Number, String] as PropType<number | string>, default: undefined },
  dot: { type: Boolean, default: false },
  showZero: { type: Boolean, default: false },
  overflowCount: { type: Number, default: DEFAULT_OVERFLOW_COUNT },
  status: { type: String as PropType<BadgeStatus>, default: undefined },
  color: { type: String, default: undefined },
  text: { type: String, default: undefined },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  offset: { type: Array as unknown as PropType<[number, number]>, default: undefined },
  title: { type: String, default: undefined },
  classNames: { type: Object as PropType<BadgeClassNames>, default: undefined },
  styles: { type: Object as PropType<BadgeStyles>, default: undefined },
} satisfies Record<keyof BadgeProps, any>

export const Badge = defineComponent({
  name: 'Badge',
  props: badgeProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('badge')

    /**
     * 安全的溢出上限（至少为 1，避免 "0+" 的荒谬显示）
     */
    const safeOverflowCount = computed(() => Math.max(1, props.overflowCount))

    /**
     * 计算徽标显示值
     * - 数字类型：超过 overflowCount 显示 "${overflowCount}+"
     * - 字符串类型：直接显示（支持自定义文本如 "new"、"hot"）
     */
    const displayCount = computed(() => {
      if (typeof props.count === 'number' && props.count > safeOverflowCount.value) {
        return `${safeOverflowCount.value}+`
      }
      return props.count
    })

    /**
     * 判断徽标是否应该隐藏
     * 隐藏条件：
     * 1. count 为 undefined/null
     * 2. count 为 0（数字或字符串 "0"）且 showZero 为 false
     *
     * 不隐藏条件（优先级高）：
     * 1. dot 模式 - 小红点始终显示
     * 2. status 模式 - 状态点始终显示
     */
    const isHidden = computed(() => {
      // dot 和 status 模式下不隐藏
      if (props.dot || props.status) return false

      const count = props.count

      // count 未定义时隐藏
      if (count === undefined || count === null) return true

      // 统一处理数字 0 和字符串 "0"
      const numCount = typeof count === 'string' ? Number(count) : count
      if (!isNaN(numCount) && numCount === 0 && !props.showZero) {
        return true
      }

      return false
    })

    /**
     * 计算徽标的样式
     * 包括：offset 偏移、自定义颜色
     */
    const indicatorStyle = computed(() => {
      const style: Record<string, string> = {}

      // 应用 offset 偏移（需要边界检查）
      if (props.offset && Array.isArray(props.offset) && props.offset.length === 2) {
        const [x, y] = props.offset
        // 确保 offset 值是有效数字
        if (typeof x === 'number' && !isNaN(x) && typeof y === 'number' && !isNaN(y)) {
          style.marginTop = `${y}px`
          style.right = `${-x}px` // 负值向左偏移
        }
      }

      // 应用自定义颜色（非预设颜色）
      if (props.color && !isPresetColor(props.color)) {
        style.background = props.color
      }

      return style
    })

    /**
     * 渲染状态点徽标（status 或独立 color 模式）
     * 适用场景：
     * 1. props.status 存在 → 状态点 + 可选文本
     * 2. props.color 存在且无子元素 → 独立颜色点 + 可选文本
     */
    const renderStatusBadge = () => {
      /**
       * 状态点的三种颜色优先级：
       * 1. 自定义 color（RGB/HEX）→ 内联样式（最高优先级）
       * 2. 预设 color（如 'red'）→ CSS 类名（次优先级）
       * 3. status 预设（如 'success'）→ CSS 类名（最低优先级）
       *
       * 优先级规则：color > status
       */
      const statusDotCls = cls(
        `${prefixCls}-status-dot`,
        // 如果有 color 且是预设颜色，使用 color 类名
        props.color && isPresetColor(props.color) && `${prefixCls}-color-${props.color}`,
        // 否则，如果有 status 且没有 color，使用 status 类名
        props.status && !props.color && `${prefixCls}-status-${props.status}`,
        props.classNames?.dot,
      )

      // 自定义颜色或预设颜色通过内联样式应用（预设颜色也可以通过内联样式覆盖）
      const dotStyle = props.color && !isPresetColor(props.color) ? { background: props.color } : {}

      return (
        <span class={cls(prefixCls, `${prefixCls}-status`, props.classNames?.root)} style={props.styles?.root}>
          <span class={statusDotCls} style={{ ...dotStyle, ...props.styles?.dot }} />
          {props.text && (
            <span class={cls(`${prefixCls}-status-text`, props.classNames?.text)} style={props.styles?.text}>
              {props.text}
            </span>
          )}
        </span>
      )
    }

    /**
     * 渲染数字/点徽标（包裹模式或独立模式）
     */
    const renderCountBadge = () => {
      // 徽标指示器的 CSS 类名
      const indicatorCls = cls(`${prefixCls}-count`, {
        [`${prefixCls}-count-sm`]: props.size === 'small',
        [`${prefixCls}-dot`]: props.dot,
        [`${prefixCls}-count-show-zero`]: props.showZero,
        [`${prefixCls}-multiple-words`]: typeof displayCount.value === 'string' && displayCount.value.length > 1,
        // 应用预设颜色类名（count/dot 模式）
        [`${prefixCls}-color-${props.color}`]: !!(props.color && isPresetColor(props.color)),
      })

      // 徽标指示器元素（sup）
      const badgeIndicator = !isHidden.value && (
        <sup
          class={cls(indicatorCls, props.classNames?.indicator)}
          style={{ ...indicatorStyle.value, ...props.styles?.indicator }}
          title={props.title ?? String(props.count ?? '')}
        >
          {!props.dot && <ScrollNumber count={displayCount.value ?? 0} />}
        </sup>
      )

      // 独立徽标（无子元素包裹）
      if (!slots.default) {
        return (
          <span class={cls(prefixCls, `${prefixCls}-not-a-wrapper`, props.classNames?.root)} style={props.styles?.root}>
            {badgeIndicator}
          </span>
        )
      }

      // 包裹子元素的徽标
      return (
        <span class={cls(prefixCls, props.classNames?.root)} style={props.styles?.root}>
          {slots.default()}
          {badgeIndicator}
        </span>
      )
    }

    return () => {
      // 判断渲染模式：status/独立 color 点 vs 数字/点徽标
      if (props.status || (props.color && !slots.default)) {
        return renderStatusBadge()
      }

      return renderCountBadge()
    }
  },
})
