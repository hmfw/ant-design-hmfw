import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Icon } from '../icon'
import { CheckOutlined, CloseOutlined } from '../icon/icons'
import type {
  ProgressType,
  ProgressStatus,
  ProgressSize,
  StrokeLinecap,
  SuccessProps,
  PercentPositionType,
  ProgressGradient,
} from './types'

// Utility functions
function validProgress(progress?: number): number {
  if (!progress || progress < 0) return 0
  if (progress > 100) return 100
  return progress
}

function getSuccessPercent(success?: SuccessProps): number | undefined {
  return success?.percent
}

function getSize(
  size: ProgressSize | number | { width?: number; height?: number } | undefined,
  type: ProgressType,
  extra?: { strokeWidth?: number; steps?: number }
): [number, number] {
  let width = -1
  let height = -1

  if (type === 'line') {
    const strokeWidth = extra?.strokeWidth
    if (typeof size === 'string' || size === undefined) {
      height = strokeWidth || (size === 'small' ? 6 : 8)
    } else if (typeof size === 'number') {
      height = size
    } else {
      width = size.width ?? -1
      height = size.height ?? 8
    }
  } else if (type === 'circle' || type === 'dashboard') {
    if (typeof size === 'string' || size === undefined) {
      const defaultSize = size === 'small' ? 60 : 120
      width = height = defaultSize
    } else if (typeof size === 'number') {
      width = height = size
    } else {
      width = height = size.width ?? size.height ?? 120
    }
  }

  return [width, height]
}

function handleGradient(strokeColor: ProgressGradient): string {
  const { from, to, direction = 'to right', ...rest } = strokeColor

  if (Object.keys(rest).length > 0) {
    // Sort gradient stops
    const stops = Object.entries(rest)
      .map(([key, value]) => {
        const numKey = parseFloat(key.replace(/%/g, ''))
        return { key: numKey, value }
      })
      .filter(item => !isNaN(item.key))
      .sort((a, b) => a.key - b.key)
      .map(({ key, value }) => `${value} ${key}%`)
      .join(', ')
    return `linear-gradient(${direction}, ${stops})`
  }

  return `linear-gradient(${direction}, ${from || '#1677ff'}, ${to || '#1677ff'})`
}

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
    strokeColor: [String, Object] as PropType<string | ProgressGradient>,
    trailColor: String,
    railColor: String,
    size: {
      type: [String, Number, Object] as PropType<ProgressSize | number | { width?: number; height?: number }>,
      default: 'default',
    },
    width: {
      type: Number,
      default: 120,
    },
    format: Function as PropType<(percent: number, successPercent?: number) => string>,
    strokeLinecap: {
      type: String as PropType<StrokeLinecap>,
      default: 'round',
    },
    success: Object as PropType<SuccessProps>,
    steps: Number,
    gapDegree: Number,
    percentPosition: {
      type: Object as PropType<PercentPositionType>,
      default: () => ({ align: 'end', type: 'outer' }),
    },
  },
  setup(props) {
    const prefixCls = usePrefixCls('progress')

    const mergedRailColor = computed(() => props.railColor ?? props.trailColor)
    const infoAlign = computed(() => props.percentPosition?.align ?? 'end')
    const infoPosition = computed(() => props.percentPosition?.type ?? 'outer')

    const computedStatus = computed<ProgressStatus>(() => {
      if (props.status) return props.status
      const successPercent = getSuccessPercent(props.success)
      const realPercent = successPercent !== undefined ? successPercent : props.percent
      if (realPercent >= 100) return 'success'
      return 'normal'
    })

    const infoText = computed(() => {
      const successPercent = getSuccessPercent(props.success)
      if (props.format) {
        return props.format(props.percent, successPercent)
      }

      // Show icons for success/exception unless custom format or inner position
      if (infoPosition.value === 'outer' && !props.format) {
        if (computedStatus.value === 'exception') {
          return props.type === 'line' ? <Icon component={CloseOutlined} /> : <Icon component={CloseOutlined} />
        }
        if (computedStatus.value === 'success') {
          return props.type === 'line' ? <Icon component={CheckOutlined} /> : <Icon component={CheckOutlined} />
        }
      }

      return `${props.percent}%`
    })

    const renderLine = () => {
      const [width, height] = getSize(props.size, 'line', { strokeWidth: props.strokeWidth })
      const borderRadius = props.strokeLinecap === 'square' || props.strokeLinecap === 'butt' ? 0 : undefined

      const railStyle = {
        backgroundColor: mergedRailColor.value || undefined,
        borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
        height: `${height}px`,
      }

      const successPercent = getSuccessPercent(props.success)
      const mainPercent = validProgress(props.percent)

      let trackStyle: any = {
        width: `${mainPercent}%`,
        height: `${height}px`,
        borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
      }

      // Handle gradient or solid color
      if (props.strokeColor && typeof props.strokeColor === 'object') {
        trackStyle.background = handleGradient(props.strokeColor)
      } else {
        trackStyle.background = props.strokeColor || undefined
      }

      const successTrackStyle = successPercent !== undefined ? {
        width: `${validProgress(successPercent)}%`,
        height: `${height}px`,
        borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
        backgroundColor: props.success?.strokeColor,
      } : null

      const indicator = props.showInfo && (
        <span class={cls(`${prefixCls}-indicator`, `${prefixCls}-indicator-${infoAlign.value}`, `${prefixCls}-indicator-${infoPosition.value}`)}>
          {infoText.value}
        </span>
      )

      return (
        <div
          class={cls(`${prefixCls}-body`, {
            [`${prefixCls}-body-layout-bottom`]: infoAlign.value === 'center' && infoPosition.value === 'outer',
          })}
          style={{ width: width > 0 ? `${width}px` : '100%' }}
        >
          <div class={`${prefixCls}-rail`} style={railStyle}>
            <div class={`${prefixCls}-track`} style={trackStyle}>
              {infoPosition.value === 'inner' && indicator}
            </div>
            {successTrackStyle && (
              <div class={cls(`${prefixCls}-track`, `${prefixCls}-track-success`)} style={successTrackStyle} />
            )}
          </div>
          {infoPosition.value === 'outer' && indicator}
        </div>
      )
    }

    const renderSteps = () => {
      if (!props.steps) return null

      const [width, height] = getSize(props.size, 'line', { strokeWidth: props.strokeWidth, steps: props.steps })
      const stepWidth = width / props.steps
      const current = Math.round(props.steps * (props.percent / 100))

      const stepsItems = Array.from({ length: props.steps }, (_, i) => {
        const isActive = i < current
        return (
          <div
            key={i}
            class={cls(`${prefixCls}-steps-item`, {
              [`${prefixCls}-steps-item-active`]: isActive,
            })}
            style={{
              width: `${stepWidth}px`,
              height: `${height}px`,
              backgroundColor: isActive ? (props.strokeColor as string) || undefined : mergedRailColor.value || undefined,
            }}
          />
        )
      })

      const indicator = props.showInfo && (
        <span class={`${prefixCls}-indicator`}>{infoText.value}</span>
      )

      return (
        <div class={`${prefixCls}-steps-body`}>
          {stepsItems}
          {indicator}
        </div>
      )
    }

    const renderCircle = () => {
      const [size] = getSize(props.size, props.type, {})
      const strokeW = props.strokeWidth ?? Math.max((3 / size) * 100, 6)
      const radius = (size - strokeW) / 2
      const circumference = 2 * Math.PI * radius
      const isDashboard = props.type === 'dashboard'
      const gapDegree = props.gapDegree !== undefined ? props.gapDegree : (isDashboard ? 75 : 0)
      const totalArc = circumference - (gapDegree / 360) * circumference

      const successPercent = getSuccessPercent(props.success)
      const mainPercent = validProgress(props.percent)
      const offset = totalArc * (1 - mainPercent / 100)

      const successOffset = successPercent !== undefined
        ? totalArc * (1 - validProgress(successPercent) / 100)
        : null

      const rotation = isDashboard ? 90 + gapDegree / 2 : -90

      const indicator = props.showInfo && (
        <div class={`${prefixCls}-indicator`}>{infoText.value}</div>
      )

      return (
        <div class={`${prefixCls}-body`} style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size * 0.15 + 6}px` }}>
          <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
            <circle
              class={`${prefixCls}-circle-rail`}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={mergedRailColor.value ?? '#f5f5f5'}
              stroke-width={strokeW}
              fill="none"
            />
            <circle
              class={`${prefixCls}-circle-path`}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={(props.strokeColor as string) ?? undefined}
              stroke-width={strokeW}
              fill="none"
              stroke-dasharray={`${totalArc}px ${circumference}px`}
              stroke-dashoffset={`${offset}px`}
              stroke-linecap={props.strokeLinecap}
              transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
            />
            {successOffset !== null && (
              <circle
                class={cls(`${prefixCls}-circle-path`, `${prefixCls}-circle-path-success`)}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={props.success?.strokeColor ?? '#52c41a'}
                stroke-width={strokeW}
                fill="none"
                stroke-dasharray={`${totalArc}px ${circumference}px`}
                stroke-dashoffset={`${successOffset}px`}
                stroke-linecap={props.strokeLinecap}
                transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
              />
            )}
          </svg>
          {indicator}
        </div>
      )
    }

    return () => {
      const isLineType = props.type === 'line'
      const isPureLineType = isLineType && !props.steps

      return (
        <div
          class={cls(
            prefixCls,
            `${prefixCls}-status-${computedStatus.value}`,
            {
              [`${prefixCls}-${props.type === 'dashboard' ? 'circle' : props.type}`]: props.type !== 'line',
              [`${prefixCls}-line`]: isPureLineType,
              [`${prefixCls}-line-align-${infoAlign.value}`]: isPureLineType,
              [`${prefixCls}-line-position-${infoPosition.value}`]: isPureLineType,
              [`${prefixCls}-steps`]: !!props.steps,
              [`${prefixCls}-show-info`]: props.showInfo,
              [`${prefixCls}-small`]: props.size === 'small',
            }
          )}
          role="progressbar"
          aria-valuenow={props.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${props.percent}%`}
        >
          {props.steps ? renderSteps() : isLineType ? renderLine() : renderCircle()}
        </div>
      )
    }
  },
})
