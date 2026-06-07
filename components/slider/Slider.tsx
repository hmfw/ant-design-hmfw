import {
  defineComponent,
  ref,
  computed,
  watch,
  type PropType,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls, KEYS } from '../_utils'
import type { SliderMarkValue, SliderMarks, SliderTooltipProps } from './types'

export const Slider = defineComponent({
  name: 'Slider',
  props: {
    value: [Number, Array] as PropType<number | [number, number]>,
    defaultValue: [Number, Array] as PropType<number | [number, number]>,
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number as PropType<number | null>, default: 1 },
    disabled: Boolean,
    range: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    marks: Object as PropType<SliderMarks>,
    tooltip: { type: Object as PropType<SliderTooltipProps> },
    included: { type: Boolean, default: true },
    dots: Boolean,
    keyboard: { type: Boolean, default: true },
  },
  emits: ['update:value', 'change', 'afterChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('slider')
    const trackRef = ref<HTMLElement | null>(null)
    const dragging = ref<null | 'start' | 'end'>(null)
    const tooltipVisible = ref<null | 'start' | 'end'>(null)

    const clamp = (v: number) => Math.min(props.max, Math.max(props.min, v))

    /**
     * 规范化值：确保在 [min, max] 范围内，range 模式下确保 start <= end
     */
    const normalize = (v: number | [number, number]): number | [number, number] => {
      if (props.range) {
        const arr = Array.isArray(v) ? v : [props.min, props.min]
        const [a, b] = arr
        const clamped1 = clamp(a)
        const clamped2 = clamp(b)
        return [Math.min(clamped1, clamped2), Math.max(clamped1, clamped2)]
      }
      return clamp(typeof v === 'number' ? v : props.min)
    }

    const defaultVal = normalize(props.defaultValue ?? props.value ?? (props.range ? [0, 0] : 0))
    const innerValue = ref<number | [number, number]>(defaultVal)

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => {
      const val = isControlled.value ? props.value! : innerValue.value
      return normalize(val)
    })

    watch(() => props.value, (v) => {
      if (v !== undefined) {
        innerValue.value = normalize(v) as any
      }
    })

    const getMarkPoints = () => {
      if (!props.marks) return []
      return Object.keys(props.marks).map(Number).sort((a, b) => a - b)
    }

    const snapToStep = (v: number) => {
      // When step is null, only snap to marks, min, and max
      if (props.step === null) {
        const markPoints = getMarkPoints()
        const validPoints = [props.min, ...markPoints, props.max]
        const closest = validPoints.reduce((prev, curr) =>
          Math.abs(curr - v) < Math.abs(prev - v) ? curr : prev
        )
        return closest
      }
      const steps = Math.round((v - props.min) / props.step)
      return clamp(props.min + steps * props.step)
    }

    const getPercent = (v: number) => ((v - props.min) / (props.max - props.min)) * 100

    const getValueFromEvent = (e: MouseEvent | TouchEvent) => {
      if (!trackRef.value) return 0
      const rect = trackRef.value.getBoundingClientRect()
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
      let ratio: number
      if (props.vertical) {
        ratio = props.reverse
          ? (clientY - rect.top) / rect.height
          : 1 - (clientY - rect.top) / rect.height
      } else {
        ratio = props.reverse
          ? 1 - (clientX - rect.left) / rect.width
          : (clientX - rect.left) / rect.width
      }
      ratio = Math.max(0, Math.min(1, ratio))
      return snapToStep(props.min + ratio * (props.max - props.min))
    }

    const setValue = (v: number | [number, number]) => {
      const normalized = normalize(v)
      innerValue.value = normalized as any
      emit('update:value', normalized)
      emit('change', normalized)
    }

    const handleTrackClick = (e: MouseEvent) => {
      if (props.disabled) return
      const newVal = getValueFromEvent(e)
      if (props.range) {
        const [start, end] = currentValue.value as [number, number]
        const distStart = Math.abs(newVal - start)
        const distEnd = Math.abs(newVal - end)
        if (distStart <= distEnd) setValue([newVal, end])
        else setValue([start, newVal])
      } else {
        setValue(newVal)
      }
    }

    const startDrag = (which: 'start' | 'end') => (e: MouseEvent | TouchEvent) => {
      if (props.disabled) return
      e.preventDefault()
      dragging.value = which
      tooltipVisible.value = which

      const onMove = (ev: MouseEvent | TouchEvent) => {
        const newVal = getValueFromEvent(ev)
        if (props.range) {
          const [start, end] = currentValue.value as [number, number]
          if (which === 'start') setValue([Math.min(newVal, end), end])
          else setValue([start, Math.max(newVal, start)])
        } else {
          setValue(newVal)
        }
      }

      const onUp = () => {
        dragging.value = null
        tooltipVisible.value = null
        emit('afterChange', currentValue.value)
        document.removeEventListener('mousemove', onMove)
        document.removeEventListener('mouseup', onUp)
        document.removeEventListener('touchmove', onMove)
        document.removeEventListener('touchend', onUp)
      }

      document.addEventListener('mousemove', onMove)
      document.addEventListener('mouseup', onUp)
      document.addEventListener('touchmove', onMove)
      document.addEventListener('touchend', onUp)
    }

    const formatTooltip = (v: number) => {
      if (props.tooltip?.formatter === null) return null
      if (props.tooltip?.formatter) return props.tooltip.formatter(v)
      return String(v)
    }

    const shouldShowTooltip = (which: 'start' | 'end') => {
      // If tooltip.open is explicitly set, use it
      if (props.tooltip?.open !== undefined) return props.tooltip.open
      // Otherwise show on hover/drag
      return tooltipVisible.value === which
    }

    const handleKeyDown = (which: 'start' | 'end') => (e: KeyboardEvent) => {
      if (props.disabled || !props.keyboard) return

      const currentVal = props.range
        ? which === 'start'
          ? (currentValue.value as [number, number])[0]
          : (currentValue.value as [number, number])[1]
        : (currentValue.value as number)

      let delta = 0
      const stepSize = props.step === null ? 1 : props.step

      switch (e.key) {
        case KEYS.ARROW_RIGHT:
        case KEYS.ARROW_UP:
          delta = stepSize
          break
        case KEYS.ARROW_LEFT:
        case KEYS.ARROW_DOWN:
          delta = -stepSize
          break
        case KEYS.HOME:
          delta = props.min - currentVal
          break
        case KEYS.END:
          delta = props.max - currentVal
          break
        default:
          return
      }

      e.preventDefault()
      const newVal = snapToStep(currentVal + delta)

      if (props.range) {
        const [start, end] = currentValue.value as [number, number]
        if (which === 'start') {
          setValue([Math.min(newVal, end), end])
        } else {
          setValue([start, Math.max(newVal, start)])
        }
      } else {
        setValue(newVal)
      }
    }

    return () => {
      const val = currentValue.value
      const startVal = props.range ? (val as [number, number])[0] : (val as number)
      const endVal = props.range ? (val as [number, number])[1] : (val as number)

      const startPct = getPercent(startVal)
      const endPct = getPercent(endVal)

      const trackStyle = props.vertical
        ? props.included
          ? { bottom: `${props.range ? startPct : 0}%`, height: `${props.range ? endPct - startPct : endPct}%` }
          : {}
        : props.included
          ? { left: `${props.range ? startPct : 0}%`, width: `${props.range ? endPct - startPct : endPct}%` }
          : {}

      const markEntries = props.marks
        ? Object.entries(props.marks).map(([k, v]) => ({
            value: Number(k),
            label: typeof v === 'string' ? v : v.label,
            style: typeof v === 'object' && v.style ? v.style : undefined,
          }))
        : []

      // Generate dots for step-based slider
      const dotPoints: number[] = []
      if (props.dots && props.step !== null && props.step > 0) {
        for (let i = props.min; i <= props.max; i += props.step) {
          dotPoints.push(i)
        }
      }

      const handleMarkClick = (mv: number) => {
        if (props.disabled) return
        if (props.range) {
          const [start, end] = currentValue.value as [number, number]
          const distStart = Math.abs(mv - start)
          const distEnd = Math.abs(mv - end)
          if (distStart <= distEnd) {
            setValue([mv, end])
          } else {
            setValue([start, mv])
          }
        } else {
          setValue(mv)
        }
      }

      return (
        <div
          class={cls(prefixCls, {
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-vertical`]: props.vertical,
            [`${prefixCls}-with-marks`]: markEntries.length > 0,
          })}
        >
          <div
            ref={trackRef}
            class={`${prefixCls}-rail`}
            onClick={handleTrackClick}
          >
            <div class={`${prefixCls}-track`} style={trackStyle} />

            {/* Dots from marks */}
            {markEntries.map(({ value: mv }) => {
              const pct = getPercent(mv)
              const dotStyle = props.vertical ? { bottom: `${pct}%` } : { left: `${pct}%` }
              return (
                <span
                  key={mv}
                  class={cls(`${prefixCls}-dot`, {
                    [`${prefixCls}-dot-active`]: props.range
                      ? mv >= startVal && mv <= endVal
                      : mv <= endVal,
                  })}
                  style={dotStyle}
                />
              )
            })}

            {/* Dots from step (when dots=true) */}
            {dotPoints.map((dp) => {
              const pct = getPercent(dp)
              const dotStyle = props.vertical ? { bottom: `${pct}%` } : { left: `${pct}%` }
              return (
                <span
                  key={dp}
                  class={cls(`${prefixCls}-dot`, {
                    [`${prefixCls}-dot-active`]: props.range
                      ? dp >= startVal && dp <= endVal
                      : dp <= endVal,
                  })}
                  style={dotStyle}
                />
              )
            })}

            {/* Start handle */}
            {props.range && (
              <div
                class={cls(`${prefixCls}-handle`, `${prefixCls}-handle-1`, {
                  [`${prefixCls}-handle-dragging`]: dragging.value === 'start',
                })}
                style={props.vertical ? { bottom: `${startPct}%` } : { left: `${startPct}%` }}
                role="slider"
                aria-label="最小值"
                aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
                aria-valuemin={props.min}
                aria-valuemax={endVal}
                aria-valuenow={startVal}
                aria-disabled={props.disabled}
                tabindex={props.disabled ? -1 : 0}
                onMousedown={startDrag('start')}
                onTouchstart={startDrag('start')}
                onMouseenter={() => { tooltipVisible.value = 'start' }}
                onMouseleave={() => { if (dragging.value !== 'start') tooltipVisible.value = null }}
                onKeydown={handleKeyDown('start')}
              >
                {shouldShowTooltip('start') && formatTooltip(startVal) !== null && (
                  <div class={`${prefixCls}-tooltip`}>{formatTooltip(startVal)}</div>
                )}
              </div>
            )}

            {/* End / single handle */}
            <div
              class={cls(`${prefixCls}-handle`, props.range ? `${prefixCls}-handle-2` : '', {
                [`${prefixCls}-handle-dragging`]: dragging.value === 'end' || (!props.range && dragging.value !== null),
              })}
              style={props.vertical ? { bottom: `${endPct}%` } : { left: `${endPct}%` }}
              role="slider"
              aria-label={props.range ? '最大值' : '滑块'}
              aria-orientation={props.vertical ? 'vertical' : 'horizontal'}
              aria-valuemin={props.range ? startVal : props.min}
              aria-valuemax={props.max}
              aria-valuenow={endVal}
              aria-disabled={props.disabled}
              tabindex={props.disabled ? -1 : 0}
              onMousedown={startDrag(props.range ? 'end' : 'end')}
              onTouchstart={startDrag(props.range ? 'end' : 'end')}
              onMouseenter={() => { tooltipVisible.value = 'end' }}
              onMouseleave={() => { if (dragging.value !== 'end') tooltipVisible.value = null }}
              onKeydown={handleKeyDown(props.range ? 'end' : 'start')}
            >
              {shouldShowTooltip('end') && formatTooltip(endVal) !== null && (
                <div class={`${prefixCls}-tooltip`}>{formatTooltip(endVal)}</div>
              )}
            </div>
          </div>

          {/* Mark labels */}
          {markEntries.length > 0 && (
            <div class={`${prefixCls}-mark`}>
              {markEntries.map(({ value: mv, label, style: markStyle }) => {
                const pct = getPercent(mv)
                const labelStyle = props.vertical ? { bottom: `${pct}%` } : { left: `${pct}%` }
                const combinedStyle = markStyle ? { ...labelStyle, ...markStyle } : labelStyle
                return (
                  <span
                    key={mv}
                    class={cls(`${prefixCls}-mark-text`, {
                      [`${prefixCls}-mark-text-active`]: props.range
                        ? mv >= startVal && mv <= endVal
                        : mv <= endVal,
                    })}
                    style={combinedStyle}
                    onClick={() => handleMarkClick(mv)}
                  >
                    {label}
                  </span>
                )
              })}
            </div>
          )}
        </div>
      )
    }
  },
})
