import { defineComponent, type PropType, type CSSProperties, type VNode, ref, onMounted, onUnmounted, watch } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Skeleton } from '../skeleton'
import type { CountdownProps, StatisticClassNames, StatisticStyles } from './types'

/**
 * 格式化时间，支持多种占位符
 */
function formatCountdown(milliseconds: number, format = 'HH:mm:ss'): string {
  if (milliseconds <= 0) {
    return format.replace(/Y+|M+|D+|H+|m+|s+|S+/g, (match) => {
      return '0'.repeat(match.length)
    })
  }

  const totalSeconds = Math.floor(milliseconds / 1000)
  const totalMinutes = Math.floor(totalSeconds / 60)
  const totalHours = Math.floor(totalMinutes / 60)
  const totalDays = Math.floor(totalHours / 24)

  const seconds = totalSeconds % 60
  const minutes = totalMinutes % 60
  const hours = totalHours % 24

  // 支持的占位符
  const replacements: Record<string, string> = {
    DD: String(totalDays).padStart(2, '0'),
    D: String(totalDays),
    HH: String(hours).padStart(2, '0'),
    H: String(hours),
    mm: String(minutes).padStart(2, '0'),
    m: String(minutes),
    ss: String(seconds).padStart(2, '0'),
    s: String(seconds),
    SSS: String(milliseconds % 1000).padStart(3, '0'),
  }

  return format.replace(/DD|D|HH|H|mm|m|ss|s|SSS/g, (match) => {
    return replacements[match] ?? match
  })
}

const countdownProps = {
  title: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  value: { type: [Number, Date] as PropType<number | Date>, default: undefined },
  format: { type: String, default: 'HH:mm:ss' },
  prefix: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  suffix: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  valueStyle: { type: Object as PropType<CSSProperties>, default: undefined },
  loading: { type: Boolean, default: false },
  valueRender: { type: Function as PropType<(value: string) => VNode>, default: undefined },
  classNames: { type: Object as PropType<StatisticClassNames>, default: undefined },
  styles: { type: Object as PropType<StatisticStyles>, default: undefined },
} satisfies Record<keyof CountdownProps, any>

export const Countdown = defineComponent({
  name: 'Countdown',
  props: countdownProps,
  emits: ['finish', 'change'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('statistic')
    const config = useConfig()

    const remainingTime = ref(0)
    let rafId: number | null = null
    let lastTime = 0

    // 计算剩余时间
    const calculateRemaining = (): number => {
      if (!props.value) return 0

      const targetTime = props.value instanceof Date ? props.value.getTime() : props.value

      const now = Date.now()
      return Math.max(0, targetTime - now)
    }

    // 更新倒计时
    const updateCountdown = (_timestamp: number) => {
      // 计算剩余时间
      const remaining = calculateRemaining()
      remainingTime.value = remaining

      // 触发 change 事件：仅在剩余时间实际变化时
      if (remaining !== lastTime) {
        emit('change', remaining)
        lastTime = remaining
      }

      // 如果倒计时结束
      if (remaining <= 0) {
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
        emit('finish')
        return
      }

      // 继续下一帧
      rafId = requestAnimationFrame(updateCountdown)
    }

    // 启动倒计时
    const startCountdown = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
      remainingTime.value = calculateRemaining()
      lastTime = remainingTime.value
      rafId = requestAnimationFrame(updateCountdown)
    }

    // 停止倒计时
    const stopCountdown = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }

    // 监听 value 变化，重新启动倒计时
    watch(
      () => props.value,
      () => {
        startCountdown()
      },
    )

    onMounted(() => {
      startCountdown()
    })

    onUnmounted(() => {
      stopCountdown()
    })

    return () => {
      // 如果是加载状态，显示骨架屏
      if (props.loading) {
        return (
          <div
            class={cls(prefixCls, props.classNames?.root, {
              [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
            })}
            style={props.styles?.root}
          >
            {props.title && (
              <div class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
                {props.title}
              </div>
            )}
            <Skeleton active title={false} paragraph={{ rows: 1, width: '100%' }} />
          </div>
        )
      }

      // 格式化倒计时
      const formattedValue = formatCountdown(remainingTime.value, props.format)

      // 渲染数值内容
      const renderValue = () => {
        if (props.valueRender) {
          return props.valueRender(formattedValue)
        }
        return formattedValue
      }

      return (
        <div
          class={cls(prefixCls, `${prefixCls}-countdown`, props.classNames?.root, {
            [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
          })}
          style={props.styles?.root}
        >
          {props.title && (
            <div class={cls(`${prefixCls}-title`, props.classNames?.title)} style={props.styles?.title}>
              {props.title}
            </div>
          )}
          <div
            class={cls(`${prefixCls}-content`, props.classNames?.content)}
            style={{ ...props.valueStyle, ...props.styles?.content }}
          >
            {props.prefix && (
              <span class={cls(`${prefixCls}-content-prefix`, props.classNames?.prefix)} style={props.styles?.prefix}>
                {props.prefix}
              </span>
            )}
            <span class={cls(`${prefixCls}-content-value`, props.classNames?.value)} style={props.styles?.value}>
              {renderValue()}
            </span>
            {props.suffix && (
              <span class={cls(`${prefixCls}-content-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
                {props.suffix}
              </span>
            )}
          </div>
        </div>
      )
    }
  },
})
