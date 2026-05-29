import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ProgressType, ProgressStatus } from './types'

export const Progress = defineComponent({
  name: 'Progress',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    type: {
      type: String as PropType<ProgressType>,
      default: 'line',
    },
    status: String as PropType<ProgressStatus>,
    showInfo: {
      type: Boolean,
      default: true,
    },
    strokeWidth: Number,
    strokeColor: String,
    trailColor: String,
    size: {
      type: String as PropType<'default' | 'small'>,
      default: 'default',
    },
    width: {
      type: Number,
      default: 120,
    },
    format: Function as PropType<(percent: number) => string>,
  },
  setup(props) {
    const prefixCls = usePrefixCls('progress')

    const computedStatus = computed(() => {
      if (props.status) return props.status
      if (props.percent >= 100) return 'success'
      return 'normal'
    })

    const infoText = computed(() => {
      if (props.format) return props.format(props.percent)
      if (computedStatus.value === 'exception') return '✕'
      if (computedStatus.value === 'success') return '✓'
      return `${props.percent}%`
    })

    return () => {
      if (props.type === 'circle' || props.type === 'dashboard') {
        const size = props.width
        const strokeW = props.strokeWidth ?? 6
        const radius = (size - strokeW) / 2
        const circumference = 2 * Math.PI * radius
        const isDashboard = props.type === 'dashboard'
        const gapDegree = isDashboard ? 75 : 0
        const totalArc = circumference - (isDashboard ? (gapDegree / 360) * circumference : 0)
        const offset = totalArc * (1 - props.percent / 100)

        return (
          <div class={cls(prefixCls, `${prefixCls}-circle`, `${prefixCls}-status-${computedStatus.value}`)}>
            <div class={`${prefixCls}-inner`} style={{ width: `${size}px`, height: `${size}px` }}>
              <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
                <circle
                  class={`${prefixCls}-circle-trail`}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={props.trailColor ?? '#f5f5f5'}
                  stroke-width={strokeW}
                  fill="none"
                />
                <circle
                  class={`${prefixCls}-circle-path`}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={props.strokeColor ?? (computedStatus.value === 'exception' ? '#ff4d4f' : computedStatus.value === 'success' ? '#52c41a' : '#1677ff')}
                  stroke-width={strokeW}
                  fill="none"
                  stroke-dasharray={`${totalArc}px ${circumference}px`}
                  stroke-dashoffset={`${offset}px`}
                  stroke-linecap="round"
                  transform={`rotate(${isDashboard ? 217.5 : -90} ${size / 2} ${size / 2})`}
                />
              </svg>
              {props.showInfo && (
                <div class={`${prefixCls}-text`}>{infoText.value}</div>
              )}
            </div>
          </div>
        )
      }

      // Line
      const strokeH = props.strokeWidth ?? (props.size === 'small' ? 6 : 8)
      return (
        <div class={cls(prefixCls, `${prefixCls}-line`, `${prefixCls}-status-${computedStatus.value}`, {
          [`${prefixCls}-small`]: props.size === 'small',
        })}>
          <div class={`${prefixCls}-outer`}>
            <div class={`${prefixCls}-inner`} style={{ height: `${strokeH}px`, background: props.trailColor }}>
              <div
                class={`${prefixCls}-bg`}
                style={{
                  width: `${props.percent}%`,
                  height: `${strokeH}px`,
                  background: props.strokeColor,
                  borderRadius: `${strokeH}px`,
                }}
              />
            </div>
          </div>
          {props.showInfo && (
            <span class={`${prefixCls}-text`}>{infoText.value}</span>
          )}
        </div>
      )
    }
  },
})
