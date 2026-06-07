import { defineComponent, ref, watch, onBeforeUnmount, onMounted, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { SpinSize } from './types'

// percent='auto' 时模拟递增的参数（与 AntD v6 usePercent 对齐）
const AUTO_INTERVAL = 200
const STEP_BUCKETS: [limit: number, stepPtg: number][] = [
  [30, 0.05],
  [70, 0.03],
  [96, 0.01],
]

export const Spin = defineComponent({
  name: 'Spin',
  props: {
    spinning: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<SpinSize>,
      default: 'default',
    },
    tip: String,
    // description 为 tip 的新名（与 AntD v6 对齐）
    description: String,
    delay: {
      type: Number,
      default: 0,
    },
    fullscreen: Boolean,
    // percent：number 受控 / 'auto' 自动模拟递增（与 AntD v6 对齐）
    percent: {
      type: [Number, String] as PropType<number | 'auto'>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('spin')

    // delay：spinning 置 true 后延迟 delay ms 才真正显示，避免闪烁
    // 无 delay 且 spinning 为 true 时直接激活；有 delay 时等 onMounted 后才计时
    const active = ref(props.spinning && !props.delay)
    let timer: ReturnType<typeof setTimeout> | null = null
    let mounted = false

    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
    }

    // 根据 spinning/delay 计算 active
    const applySpinning = (val: boolean | undefined) => {
      clearTimer()
      if (val) {
        if (props.delay > 0) {
          // 仅 mounted 后才开始计时，避免 setup 阶段提前触发
          if (mounted) {
            timer = setTimeout(() => {
              active.value = true
            }, props.delay)
          }
        } else {
          active.value = true
        }
      } else {
        // spinning 改为 false 时立即清空 timer 并隐藏
        active.value = false
      }
    }

    watch(() => props.spinning, applySpinning, { immediate: true })

    onMounted(() => {
      mounted = true
      // 如果挂载时 spinning=true 且有 delay，此时才真正开始计时
      if (props.spinning && props.delay > 0 && !active.value) {
        timer = setTimeout(() => {
          active.value = true
        }, props.delay)
      }
    })

    // ======================= percent =======================
    const isAuto = computed(() => props.percent === 'auto')
    const mockPercent = ref(0)
    let mockTimer: ReturnType<typeof setInterval> | null = null

    const clearMockTimer = () => {
      if (mockTimer) {
        clearInterval(mockTimer)
        mockTimer = null
      }
    }

    watch(
      [isAuto, active],
      ([auto, spinning]) => {
        clearMockTimer()
        if (auto && spinning) {
          mockPercent.value = 0
          mockTimer = setInterval(() => {
            const prev = mockPercent.value
            const restPTG = 100 - prev
            for (let i = 0; i < STEP_BUCKETS.length; i += 1) {
              const [limit, stepPtg] = STEP_BUCKETS[i]
              if (prev <= limit) {
                mockPercent.value = prev + restPTG * stepPtg
                return
              }
            }
          }, AUTO_INTERVAL)
        }
      },
      { immediate: true },
    )

    const mergedPercent = computed<number | undefined>(() =>
      isAuto.value ? mockPercent.value : (props.percent as number | undefined),
    )

    onBeforeUnmount(() => {
      clearTimer()
      clearMockTimer()
    })

    // ======================= Progress 环形进度 =======================
    const viewSize = 100
    const borderWidth = viewSize / 5
    const radius = viewSize / 2 - borderWidth / 2
    const circumference = radius * 2 * Math.PI
    const center = 50

    const renderProgress = () => {
      const percent = mergedPercent.value
      if (percent === undefined || percent === 0) return null
      const safePtg = Math.max(Math.min(percent, 100), 0)
      const dotCls = `${prefixCls}-dot`
      const holderCls = `${dotCls}-holder`
      const circleStyle = {
        strokeDashoffset: `${circumference / 4}`,
        strokeDasharray: `${(circumference * safePtg) / 100} ${(circumference * (100 - safePtg)) / 100}`,
      }
      return (
        <span
          class={cls(holderCls, `${dotCls}-progress`, {
            [`${holderCls}-hidden`]: safePtg <= 0,
          })}
        >
          <svg
            viewBox={`0 0 ${viewSize} ${viewSize}`}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={safePtg}
          >
            <circle
              class={cls(`${dotCls}-circle`, `${dotCls}-circle-bg`)}
              r={radius}
              cx={center}
              cy={center}
              stroke-width={borderWidth}
            />
            <circle
              class={`${dotCls}-circle`}
              r={radius}
              cx={center}
              cy={center}
              stroke-width={borderWidth}
              style={circleStyle}
            />
          </svg>
        </span>
      )
    }

    // 根据 size 返回对应的像素尺寸，用于自定义 indicator 的容器自适应
    const sizeMap: Record<SpinSize, number> = { small: 14, default: 20, large: 32 }

    const renderIndicator = () => {
      if (slots.indicator) {
        const sizeVal = sizeMap[props.size] || sizeMap.default
        const indicatorStyle = {
          width: `${sizeVal}px`,
          height: `${sizeVal}px`,
          fontSize: `${sizeVal}px`,
        }
        return (
          <span class={`${prefixCls}-dot`} style={indicatorStyle}>
            {slots.indicator({ percent: mergedPercent.value })}
          </span>
        )
      }
      // percent>0 时隐藏四点 holder，仅显示环形进度（与 AntD v6 一致）
      const showProgress = mergedPercent.value !== undefined && mergedPercent.value > 0
      const holderCls = `${prefixCls}-dot-holder`
      return (
        <>
          <span class={cls(holderCls, { [`${holderCls}-hidden`]: showProgress })}>
            <span class={cls(`${prefixCls}-dot`, `${prefixCls}-dot-spin`)}>
              {[0, 1, 2, 3].map((i) => (
                <i key={i} class={`${prefixCls}-dot-item`} />
              ))}
            </span>
          </span>
          {renderProgress()}
        </>
      )
    }

    const renderSpin = () => {
      const desc = props.description ?? props.tip
      return (
        <span
          class={cls(prefixCls, {
            [`${prefixCls}-sm`]: props.size === 'small',
            [`${prefixCls}-lg`]: props.size === 'large',
            [`${prefixCls}-spinning`]: active.value,
          })}
          aria-live="polite"
          aria-busy={active.value}
        >
          {renderIndicator()}
          {desc && <div class={`${prefixCls}-description`}>{desc}</div>}
        </span>
      )
    }

    return () => {
      // fullscreen 模式：覆盖整个视口
      if (props.fullscreen) {
        return (
          <div
            class={cls(`${prefixCls}-fullscreen`, {
              [`${prefixCls}-fullscreen-show`]: active.value,
            })}
          >
            {renderSpin()}
          </div>
        )
      }

      if (!slots.default) return renderSpin()

      return (
        <div class={cls(`${prefixCls}-nested-loading`)}>
          {active.value && <div class={`${prefixCls}-container`}>{renderSpin()}</div>}
          <div class={cls(`${prefixCls}-blur-container`, { [`${prefixCls}-blur`]: active.value })}>
            {slots.default()}
          </div>
        </div>
      )
    }
  },
})
