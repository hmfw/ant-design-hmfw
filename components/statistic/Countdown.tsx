import { defineComponent, type PropType, type CSSProperties, type VNode, ref, onMounted, onUnmounted, watch } from 'vue'
import { usePrefixCls, useConfig } from '../config-provider'
import { cls } from '../_utils'
import { Skeleton } from '../skeleton'

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

export const Countdown = defineComponent({
  name: 'Countdown',
  props: {
    title: [String, Object] as PropType<string | VNode>,
    value: [Number, Date] as PropType<number | Date>,
    format: { type: String, default: 'HH:mm:ss' },
    prefix: [String, Object] as PropType<string | VNode>,
    suffix: [String, Object] as PropType<string | VNode>,
    valueStyle: Object as PropType<CSSProperties>,
    loading: Boolean,
    valueRender: Function as PropType<(value: string) => VNode>,
    onFinish: Function as PropType<() => void>,
    onChange: Function as PropType<(value: number) => void>,
  },
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

      // 触发 onChange 回调
      if (props.onChange && remaining !== lastTime) {
        props.onChange(remaining)
        lastTime = remaining
      }

      // 如果倒计时结束
      if (remaining <= 0) {
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
        props.onFinish?.()
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
            class={cls(prefixCls, {
              [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
            })}
          >
            {props.title && <div class={`${prefixCls}-title`}>{props.title}</div>}
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
          class={cls(prefixCls, `${prefixCls}-countdown`, {
            [`${prefixCls}-rtl`]: config.value.direction === 'rtl',
          })}
        >
          {props.title && <div class={`${prefixCls}-title`}>{props.title}</div>}
          <div class={`${prefixCls}-content`} style={props.valueStyle}>
            {props.prefix && <span class={`${prefixCls}-content-prefix`}>{props.prefix}</span>}
            <span class={`${prefixCls}-content-value`}>{renderValue()}</span>
            {props.suffix && <span class={`${prefixCls}-content-suffix`}>{props.suffix}</span>}
          </div>
        </div>
      )
    }
  },
})
