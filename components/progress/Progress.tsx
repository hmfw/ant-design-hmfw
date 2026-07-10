import { defineComponent, computed, type PropType, type CSSProperties, type VNode } from 'vue'
// 圆形渐变 id 计数器：保证每个实例 id 稳定且唯一，避免 Math.random 在每次渲染时变化
let circleGradientSeed = 0
import { useConfig, usePrefixCls } from '../config-provider'
import { Tooltip } from '../tooltip'
import { cls } from '../_utils'
import { CheckCircleFilled, CloseCircleFilled, CheckOutlined, CloseOutlined } from '@hmfw/icons'
import type {
  ProgressType,
  ProgressStatus,
  ProgressSize,
  StrokeLinecap,
  SuccessProps,
  PercentPositionType,
  ProgressGradient,
  ProgressClassNames,
  ProgressStyles,
  ProgressFormat,
  ProgressStepsConfig,
  GapPlacement,
} from './types'
import {
  validProgress,
  getSuccessPercent,
  getSize,
  handleGradient,
  isLightColor,
  pickFirstColor,
  getSuccessStrokeColor,
  getCircleGradientStops,
} from './utils'

const ProgressStatusList: ProgressStatus[] = ['normal', 'exception', 'active', 'success']

export const Progress = defineComponent({
  name: 'Progress',
  inheritAttrs: false,
  props: {
    prefixCls: String,
    classNames: Object as PropType<ProgressClassNames>,
    styles: Object as PropType<ProgressStyles>,
    percent: { type: Number, default: 0 },
    type: { type: String as PropType<ProgressType>, default: 'line' },
    status: String as PropType<ProgressStatus>,
    showInfo: { type: Boolean, default: true },
    strokeWidth: Number,
    strokeColor: [String, Array, Object] as PropType<string | string[] | ProgressGradient>,
    railColor: String,
    size: {
      type: [String, Number, Object, Array] as PropType<
        ProgressSize | number | [number | string, number] | { width?: number; height?: number }
      >,
      default: 'medium',
    },
    format: Function as PropType<ProgressFormat>,
    strokeLinecap: { type: String as PropType<StrokeLinecap>, default: 'round' },
    success: Object as PropType<SuccessProps>,
    steps: [Number, Object] as PropType<number | ProgressStepsConfig>,
    gapDegree: Number,
    gapPlacement: String as PropType<GapPlacement>,
    percentPosition: {
      type: Object as PropType<PercentPositionType>,
      default: () => ({}),
    },
    rounding: Function as PropType<(step: number) => number>,
  },
  setup(props, { attrs }) {
    const prefixCls = usePrefixCls('progress')
    const config = useConfig()
    const isRTL = computed(() => config.value.direction === 'rtl')
    // 当前实例的圆形渐变 id 种子（稳定且唯一，避免每次渲染随机变化导致 SVG 重绘/SSR 不一致）
    const gradientUid = circleGradientSeed++

    const mergedRailColor = computed(() => props.railColor)
    const infoAlign = computed(() => props.percentPosition?.align ?? 'end')
    const infoPosition = computed(() => props.percentPosition?.type ?? 'outer')

    // strokeColor 归一化：数组 → 第一个；line 渐变保留对象，circle/steps 用 string/array
    const strokeColorNotArray = computed(() =>
      Array.isArray(props.strokeColor) ? props.strokeColor[0] : props.strokeColor,
    )
    const strokeColorIsBright = computed(() => {
      const first = pickFirstColor(props.strokeColor)
      return isLightColor(first)
    })

    const percentNumber = computed<number>(() => {
      const successPercent = getSuccessPercent(props)
      const v = successPercent !== undefined ? successPercent : props.percent
      return Number.parseInt(String(v ?? 0), 10)
    })

    const computedStatus = computed<ProgressStatus>(() => {
      if (!ProgressStatusList.includes(props.status as ProgressStatus) && percentNumber.value >= 100) {
        return 'success'
      }
      return props.status || 'normal'
    })

    // size 默认值 medium 行为：与 'default' 等价
    const normalizedSize = computed(() => {
      if (props.size === 'medium') return 'default' as const
      return props.size
    })

    const isLineType = computed(() => props.type === 'line')
    const isPureLineType = computed(() => isLineType.value && !props.steps)

    // ====== Indicator ======
    const renderIndicator = (): VNode | null => {
      if (!props.showInfo) return null
      const successPercent = getSuccessPercent(props)
      const isBrightInnerColor = isLineType.value && strokeColorIsBright.value && infoPosition.value === 'inner'
      let textNode: VNode | string | number | null = null

      if (
        infoPosition.value === 'inner' ||
        props.format ||
        (computedStatus.value !== 'exception' && computedStatus.value !== 'success')
      ) {
        const fmt = props.format ?? ((p?: number) => `${p}%`)
        textNode = fmt(validProgress(props.percent), validProgress(successPercent)) as any
      } else if (computedStatus.value === 'exception') {
        textNode = isLineType.value ? <CloseCircleFilled class="hmfw-icon" /> : <CloseOutlined class="hmfw-icon" />
      } else if (computedStatus.value === 'success') {
        textNode = isLineType.value ? <CheckCircleFilled class="hmfw-icon" /> : <CheckOutlined class="hmfw-icon" />
      }

      const indicatorClass = cls(
        `${prefixCls}-indicator`,
        {
          [`${prefixCls}-indicator-bright`]: isBrightInnerColor,
          [`${prefixCls}-indicator-${infoAlign.value}`]: isPureLineType.value,
          [`${prefixCls}-indicator-${infoPosition.value}`]: isPureLineType.value,
        },
        props.classNames?.indicator,
      )

      const title = typeof textNode === 'string' || typeof textNode === 'number' ? String(textNode) : undefined

      return (
        <span class={indicatorClass} style={props.styles?.indicator} title={title}>
          {textNode}
        </span>
      )
    }

    // ====== Line ======
    const renderLine = () => {
      const [width, height] = getSize(normalizedSize.value as any, 'line', {
        strokeWidth: props.strokeWidth,
      })
      const borderRadius = props.strokeLinecap === 'square' || props.strokeLinecap === 'butt' ? 0 : undefined

      const railStyle: CSSProperties = {
        backgroundColor: mergedRailColor.value || undefined,
        borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
        height: `${height}px`,
        ...props.styles?.rail,
      }

      const successPercent = getSuccessPercent(props)
      const mainPercent = validProgress(props.percent)

      const trackStyle: CSSProperties = {
        width: `${mainPercent}%`,
        height: `${height}px`,
        borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
      }

      const sc = strokeColorNotArray.value
      if (sc && typeof sc !== 'string') {
        trackStyle.background = handleGradient(sc as ProgressGradient, isRTL.value)
      } else if (typeof sc === 'string') {
        trackStyle.background = sc
      }
      Object.assign(trackStyle, props.styles?.track || {})

      const successTrackStyle: CSSProperties | null =
        successPercent !== undefined
          ? {
              width: `${validProgress(successPercent)}%`,
              height: `${height}px`,
              borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
              backgroundColor: props.success?.strokeColor,
              ...props.styles?.track,
            }
          : null

      const indicator = renderIndicator()
      const trackCls = `${prefixCls}-track`

      return (
        <div
          class={cls(`${prefixCls}-body`, props.classNames?.body, {
            [`${prefixCls}-body-layout-bottom`]: infoAlign.value === 'center' && infoPosition.value === 'outer',
          })}
          style={{ width: width > 0 ? `${width}px` : '100%', ...props.styles?.body }}
        >
          <div class={cls(`${prefixCls}-rail`, props.classNames?.rail)} style={railStyle}>
            <div class={cls(trackCls, props.classNames?.track)} style={trackStyle}>
              {infoPosition.value === 'inner' && indicator}
            </div>
            {successTrackStyle && (
              <div class={cls(trackCls, `${trackCls}-success`, props.classNames?.track)} style={successTrackStyle} />
            )}
          </div>
          {infoPosition.value === 'outer' && indicator}
        </div>
      )
    }

    // ====== Steps ======
    const stepsCount = computed(() => {
      if (!props.steps) return 0
      return typeof props.steps === 'number' ? props.steps : props.steps.count
    })
    const stepsGap = computed(() => {
      if (!props.steps || typeof props.steps === 'number') return undefined
      return props.steps.gap
    })

    const renderSteps = () => {
      const steps = stepsCount.value
      if (!steps) return null

      const strokeWidth = props.strokeWidth ?? 8
      const [width, height] = getSize(normalizedSize.value as any, 'step', { steps, strokeWidth })
      const unitWidth = width / steps
      const rounding = props.rounding ?? Math.round
      const current = rounding(steps * (validProgress(props.percent) / 100))

      const stepsItems: VNode[] = []
      for (let i = 0; i < steps; i++) {
        const isActive = i <= current - 1
        const color = Array.isArray(props.strokeColor)
          ? props.strokeColor[i]
          : typeof props.strokeColor === 'string'
            ? props.strokeColor
            : undefined
        stepsItems.push(
          <div
            key={i}
            class={cls(
              `${prefixCls}-steps-item`,
              { [`${prefixCls}-steps-item-active`]: isActive },
              props.classNames?.track,
            )}
            style={{
              backgroundColor: isActive ? color : mergedRailColor.value,
              width: `${unitWidth}px`,
              height: `${height}px`,
              ...props.styles?.track,
            }}
          />,
        )
      }

      const bodyStyle: CSSProperties = { ...props.styles?.body }
      if (stepsGap.value !== undefined) {
        bodyStyle.gap = `${stepsGap.value}px`
      }

      return (
        <div class={cls(`${prefixCls}-steps-body`, props.classNames?.body)} style={bodyStyle}>
          {stepsItems}
          {renderIndicator()}
        </div>
      )
    }

    // ====== Circle / Dashboard ======
    const circleSize = computed(() => {
      const [w] = getSize(normalizedSize.value as any, props.type === 'dashboard' ? 'dashboard' : 'circle')
      return w
    })

    const renderCircle = () => {
      const size = circleSize.value
      // 默认 strokeWidth：v6 公式 max((3/size)*100, 6)，但需保证 radius > 0
      const defaultStrokeW = Math.max((3 / size) * 100, 6)
      const cappedDefault = Math.min(defaultStrokeW, Math.max(size / 2 - 1, 1))
      const strokeW = props.strokeWidth ?? cappedDefault
      const radius = Math.max((size - strokeW) / 2, 0.5)
      const circumference = 2 * Math.PI * radius
      const isDashboard = props.type === 'dashboard'

      // gapDegree 默认值
      const gapDegree = props.gapDegree !== undefined ? props.gapDegree : isDashboard ? 75 : 0

      // gapPlacement 取值
      const placement: GapPlacement | undefined = props.gapPlacement ?? (isDashboard ? 'bottom' : undefined)

      // 计算旋转：根据 placement 决定 dash 起点
      let rotation = -90
      if (placement === 'bottom') rotation = 90 + gapDegree / 2
      else if (placement === 'top') rotation = -90 + gapDegree / 2
      else if (placement === 'start') rotation = 180 + gapDegree / 2 - (isRTL.value ? 180 : 0)
      else if (placement === 'end') rotation = (isRTL.value ? 180 : 0) + gapDegree / 2

      const totalArc = circumference - (gapDegree / 360) * circumference

      const successPercent = getSuccessPercent(props)
      const mainPercent = validProgress(props.percent)
      const offset = totalArc * (1 - mainPercent / 100)

      const successOffset = successPercent !== undefined ? totalArc * (1 - validProgress(successPercent) / 100) : null

      // circle 渐变定义
      const sc = strokeColorNotArray.value
      const isGradient = !!(sc && typeof sc !== 'string')
      // 使用实例级稳定 id（含 size），避免 Math.random 每次渲染变化、且不与其它实例冲突
      const gradientId = `${prefixCls}-gradient-${gradientUid}-${size}`
      let pathStroke: string | undefined
      if (isGradient) {
        pathStroke = `url(#${gradientId})`
      } else if (typeof sc === 'string') {
        pathStroke = sc
      }

      const indicator = props.showInfo && renderIndicator()
      const smallCircle = size <= 20

      const bodyClass = cls(
        `${prefixCls}-body`,
        { [`${prefixCls}-circle-gradient`]: isGradient },
        props.classNames?.body,
      )

      const node = (
        <div
          class={bodyClass}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            fontSize: `${size * 0.15 + 6}px`,
            ...props.styles?.body,
          }}
        >
          <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
            {isGradient && (
              <defs>
                {/*
                  使用 userSpaceOnUse + gradientTransform 抵消 path 的 rotate，
                  使渐变在屏幕空间内始终保持水平（左→右）。
                  否则在 circle(-90°) / dashboard(90+gap/2°) 旋转下，
                  objectBoundingBox 渐变会随 path 一起旋转，导致显示异常。
                */}
                <linearGradient
                  id={gradientId}
                  gradientUnits="userSpaceOnUse"
                  x1={isRTL.value ? size : 0}
                  y1={size / 2}
                  x2={isRTL.value ? 0 : size}
                  y2={size / 2}
                  gradientTransform={`rotate(${-rotation} ${size / 2} ${size / 2})`}
                >
                  {getCircleGradientStops(sc as ProgressGradient).map(({ offset, color }) => (
                    <stop key={offset} offset={offset} stop-color={color} />
                  ))}
                </linearGradient>
              </defs>
            )}
            <circle
              class={cls(`${prefixCls}-circle-rail`, props.classNames?.rail)}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={mergedRailColor.value ?? '#f5f5f5'}
              stroke-width={strokeW}
              fill="none"
              stroke-dasharray={`${totalArc}px ${circumference}px`}
              transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
              style={props.styles?.rail}
            />
            <circle
              class={cls(`${prefixCls}-circle-path`, props.classNames?.track)}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke={pathStroke}
              stroke-width={strokeW}
              fill="none"
              stroke-dasharray={`${totalArc}px ${circumference}px`}
              stroke-dashoffset={`${offset}px`}
              stroke-linecap={props.strokeLinecap}
              transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
              style={props.styles?.track}
            />
            {successOffset !== null && (
              <circle
                class={cls(`${prefixCls}-circle-path`, `${prefixCls}-circle-path-success`, props.classNames?.track)}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={getSuccessStrokeColor(props.success)}
                stroke-width={strokeW}
                fill="none"
                stroke-dasharray={`${totalArc}px ${circumference}px`}
                stroke-dashoffset={`${successOffset}px`}
                stroke-linecap={props.strokeLinecap}
                transform={`rotate(${rotation} ${size / 2} ${size / 2})`}
              />
            )}
          </svg>
          {!smallCircle && indicator}
        </div>
      )

      if (smallCircle && indicator) {
        return <Tooltip title={indicator}>{node}</Tooltip>
      }
      return node
    }

    return () => {
      const isInlineCircle = props.type === 'circle' && circleSize.value <= 20

      const rootClass = cls(
        prefixCls,
        `${prefixCls}-status-${computedStatus.value}`,
        {
          [`${prefixCls}-${props.type === 'dashboard' ? 'circle' : props.type}`]: props.type !== 'line',
          [`${prefixCls}-inline-circle`]: isInlineCircle,
          [`${prefixCls}-line`]: isPureLineType.value,
          [`${prefixCls}-line-align-${infoAlign.value}`]: isPureLineType.value,
          [`${prefixCls}-line-position-${infoPosition.value}`]: isPureLineType.value,
          [`${prefixCls}-steps`]: !!stepsCount.value,
          [`${prefixCls}-show-info`]: props.showInfo,
          [`${prefixCls}-small`]: props.size === 'small',
          [`${prefixCls}-rtl`]: isRTL.value,
        },
        props.classNames?.root,
        attrs.class as string,
      )

      // 透传 aria-label：用户提供时优先；否则用 percent
      const userAriaLabel = attrs['aria-label'] as string | undefined
      const ariaLabel = userAriaLabel ?? `${percentNumber.value}%`
      const userAriaLabelledby = attrs['aria-labelledby'] as string | undefined

      // 从 attrs 中过滤出已经显式渲染的 aria 项，避免 v-bind="$attrs" 重复
      const restAttrs: Record<string, unknown> = { ...attrs }
      delete restAttrs['aria-label']
      delete restAttrs['aria-labelledby']
      delete restAttrs['class']
      delete restAttrs['style']

      return (
        <div
          {...restAttrs}
          class={rootClass}
          style={{ ...(props.styles?.root || {}), ...((attrs.style as CSSProperties) || {}) }}
          role="progressbar"
          aria-valuenow={percentNumber.value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={ariaLabel}
          aria-labelledby={userAriaLabelledby}
        >
          {stepsCount.value ? renderSteps() : isLineType.value ? renderLine() : renderCircle()}
        </div>
      )
    }
  },
})
