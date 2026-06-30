import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { CalendarOutlined, CloseCircleFilled } from '@hmfw/icons'
import type { RangeValue, RangePreset, RangePickerClassNames, RangePickerStyles } from './types'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatDate(d: Date, fmt = 'YYYY-MM-DD'): string {
  return fmt
    .replace('YYYY', String(d.getFullYear()))
    .replace('MM', pad(d.getMonth() + 1))
    .replace('DD', pad(d.getDate()))
}

function parseDate(val: string | null | undefined): Date | null {
  if (!val) return null
  const d = new Date(val)
  return isNaN(d.getTime()) ? null : d
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

function buildCalendar(year: number, month: number) {
  const days: Array<{ date: Date; inCurrentMonth: boolean }> = []
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInMonth = getDaysInMonth(year, month)
  const prevMonthDays = getDaysInMonth(year, month - 1)
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ date: new Date(year, month - 1, prevMonthDays - i), inCurrentMonth: false })
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ date: new Date(year, month, i), inCurrentMonth: true })
  }
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({ date: new Date(year, month + 1, i), inCurrentMonth: false })
  }
  return days
}
export const RangePicker = defineComponent({
  name: 'RangePicker',
  props: {
    value: Array as unknown as PropType<RangeValue>,
    defaultValue: Array as unknown as PropType<RangeValue>,
    format: { type: String, default: 'YYYY-MM-DD' },
    disabled: { type: [Boolean, Array] as PropType<boolean | [boolean, boolean]>, default: false },
    placeholder: { type: Array as unknown as PropType<[string, string]> },
    allowClear: { type: Boolean, default: true },
    allowEmpty: { type: Array as unknown as PropType<[boolean, boolean]> },
    order: { type: Boolean, default: true },
    separator: { type: String, default: '→' },
    presets: { type: Array as PropType<RangePreset[]> },
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    disabledDate: Function as PropType<(d: Date, info?: { from?: Date; type?: string }) => boolean>,
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    open: { type: Boolean, default: undefined },
    classNames: Object as PropType<RangePickerClassNames>,
    styles: Object as PropType<RangePickerStyles>,
  },
  emits: ['update:value', 'change', 'openChange', 'calendarChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('date-picker')
    const locale = useLocale()
    const now = new Date()

    const placeholders = computed<[string, string]>(() => {
      if (props.placeholder) return props.placeholder
      const range = locale.value.DatePicker.rangePlaceholder
      return (range as [string, string]) ?? ['Start date', 'End date']
    })

    const parseValue = (v: RangeValue | undefined): [Date | null, Date | null] => {
      if (!v) return [null, null]
      return [parseDate(v[0]), parseDate(v[1])]
    }

    const innerValue = ref<[Date | null, Date | null]>(parseValue(props.defaultValue ?? props.value))
    watch(
      () => props.value,
      (v) => {
        innerValue.value = parseValue(v)
      },
    )

    const startDate = computed(() => {
      if (props.value) return parseDate(props.value[0])
      return innerValue.value[0]
    })
    const endDate = computed(() => {
      if (props.value) return parseDate(props.value[1])
      return innerValue.value[1]
    })

    const innerOpen = ref(false)
    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))
    const selecting = ref<'start' | 'end'>('start')
    const hoverDate = ref<Date | null>(null)

    // Left panel shows start month, right panel shows next month
    const leftYear = ref((startDate.value ?? now).getFullYear())
    const leftMonth = ref((startDate.value ?? now).getMonth())
    const rightYear = computed(() => (leftMonth.value === 11 ? leftYear.value + 1 : leftYear.value))
    const rightMonth = computed(() => (leftMonth.value === 11 ? 0 : leftMonth.value + 1))

    const panelRef = ref<HTMLElement>()

    // Whole-picker disabled state (boolean form only).
    const isDisabled = computed(() => typeof props.disabled === 'boolean' && props.disabled)
    const startDisabled = computed(() => (Array.isArray(props.disabled) ? !!props.disabled[0] : !!props.disabled))
    const endDisabled = computed(() => (Array.isArray(props.disabled) ? !!props.disabled[1] : !!props.disabled))

    const displayStart = computed(() => (startDate.value ? formatDate(startDate.value, props.format) : ''))
    const displayEnd = computed(() => (endDate.value ? formatDate(endDate.value, props.format) : ''))

    const hasValue = computed(() => !!(startDate.value || endDate.value))

    const setOpen = (next: boolean) => {
      if (props.open === undefined) innerOpen.value = next
      emit('openChange', next)
    }

    const openPanel = () => {
      if (isDisabled.value || isOpen.value) return
      const d = startDate.value ?? now
      leftYear.value = d.getFullYear()
      leftMonth.value = d.getMonth()
      // Resume selection from the side that is still empty.
      selecting.value = startDate.value && !endDate.value ? 'end' : 'start'
      setOpen(true)
    }

    const closePanel = () => {
      hoverDate.value = null
      setOpen(false)
    }

    const toStr = (d: Date | null) => (d ? formatDate(d, props.format) : null)

    const emitCalendarChange = (pair: [Date | null, Date | null], range: 'start' | 'end') => {
      emit('calendarChange', [toStr(pair[0]), toStr(pair[1])] as RangeValue, pair, { range })
    }

    const commit = (pair: [Date | null, Date | null]) => {
      const result = [toStr(pair[0]), toStr(pair[1])] as RangeValue
      innerValue.value = pair
      emit('update:value', result)
      emit('change', result, pair)
    }

    const selectDate = (d: Date) => {
      if (props.disabledDate?.(d, { type: 'date', from: innerValue.value[0] ?? undefined })) return
      if (selecting.value === 'start') {
        innerValue.value = [d, null]
        selecting.value = 'end'
        emitCalendarChange([d, null], 'start')
      } else {
        let start = innerValue.value[0]
        let end = d
        if (props.order && start && end < start) {
          ;[start, end] = [end, start]
        }
        const pair: [Date | null, Date | null] = [start, end]
        emitCalendarChange(pair, 'end')
        commit(pair)
        closePanel()
      }
    }

    const applyPreset = (preset: RangePreset) => {
      const raw = typeof preset.value === 'function' ? preset.value() : preset.value
      const pair: [Date | null, Date | null] = [parseDate(raw[0]), parseDate(raw[1])]
      emitCalendarChange(pair, 'end')
      commit(pair)
      closePanel()
    }

    const clearValue = (e: MouseEvent) => {
      e.stopPropagation()
      innerValue.value = [null, null]
      selecting.value = 'start'
      emit('update:value', [null, null])
      emit('change', [null, null], [null, null])
    }

    const prevMonth = () => {
      if (leftMonth.value === 0) {
        leftYear.value--
        leftMonth.value = 11
      } else leftMonth.value--
    }
    const nextMonth = () => {
      if (leftMonth.value === 11) {
        leftYear.value++
        leftMonth.value = 0
      } else leftMonth.value++
    }

    function isInRange(d: Date): boolean {
      const s = innerValue.value[0]
      const e = selecting.value === 'end' ? (hoverDate.value ?? innerValue.value[1]) : innerValue.value[1]
      if (!s || !e) return false
      const [lo, hi] = s <= e ? [s, e] : [e, s]
      return d > lo && d < hi
    }

    function isRangeStart(d: Date): boolean {
      const s = innerValue.value[0]
      return !!(s && isSameDay(d, s))
    }

    function isRangeEnd(d: Date): boolean {
      const e = selecting.value === 'end' ? (hoverDate.value ?? innerValue.value[1]) : innerValue.value[1]
      return !!(e && isSameDay(d, e))
    }

    function renderPanel(year: number, month: number, side: 'left' | 'right') {
      const calendar = buildCalendar(year, month)
      return (
        <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
          <div
            class={cls(`${prefixCls}-panel-header`, props.classNames?.panelHeader)}
            style={props.styles?.panelHeader}
          >
            {side === 'left' && (
              <button
                class={cls(`${prefixCls}-panel-header-btn`, props.classNames?.panelHeaderBtn)}
                style={props.styles?.panelHeaderBtn}
                onClick={prevMonth}
              >
                ‹
              </button>
            )}
            {side === 'right' && (
              <span
                class={cls(`${prefixCls}-panel-header-btn`, props.classNames?.panelHeaderBtn)}
                style={{ visibility: 'hidden', ...props.styles?.panelHeaderBtn }}
              >
                ‹
              </span>
            )}
            <span
              class={cls(`${prefixCls}-panel-header-title`, props.classNames?.panelHeaderTitle)}
              style={props.styles?.panelHeaderTitle}
            >
              {year}年 {locale.value.DatePicker.months[month]}
            </span>
            {side === 'right' && (
              <button
                class={cls(`${prefixCls}-panel-header-btn`, props.classNames?.panelHeaderBtn)}
                style={props.styles?.panelHeaderBtn}
                onClick={nextMonth}
              >
                ›
              </button>
            )}
            {side === 'left' && (
              <span
                class={cls(`${prefixCls}-panel-header-btn`, props.classNames?.panelHeaderBtn)}
                style={{ visibility: 'hidden', ...props.styles?.panelHeaderBtn }}
              >
                ›
              </span>
            )}
          </div>
          <div class={cls(`${prefixCls}-panel-body`, props.classNames?.panelBody)} style={props.styles?.panelBody}>
            <div class={cls(`${prefixCls}-weekdays`, props.classNames?.weekdays)} style={props.styles?.weekdays}>
              {locale.value.DatePicker.weekdays.map((d) => (
                <span
                  key={d}
                  class={cls(`${prefixCls}-weekday`, props.classNames?.weekday)}
                  style={props.styles?.weekday}
                >
                  {d}
                </span>
              ))}
            </div>
            <div class={cls(`${prefixCls}-days`, props.classNames?.days)} style={props.styles?.days}>
              {calendar.map(({ date, inCurrentMonth }, i) => {
                const isToday = isSameDay(date, now)
                const isDisabledDay =
                  props.disabledDate?.(date, {
                    type: 'date',
                    from: innerValue.value[0] ?? undefined,
                  }) ?? false
                const inRange = isInRange(date)
                const rangeStart = isRangeStart(date)
                const rangeEnd = isRangeEnd(date)

                // 构建日期单元格的样式
                let dayStyle = props.styles?.day
                if (isToday && props.styles?.dayToday) {
                  dayStyle = { ...dayStyle, ...props.styles.dayToday }
                }
                if ((rangeStart || rangeEnd) && props.styles?.daySelected) {
                  dayStyle = { ...dayStyle, ...props.styles.daySelected }
                }
                if (inRange && props.styles?.dayInRange) {
                  dayStyle = { ...dayStyle, ...props.styles.dayInRange }
                }
                if (rangeStart && props.styles?.dayRangeStart) {
                  dayStyle = { ...dayStyle, ...props.styles.dayRangeStart }
                }
                if (rangeEnd && props.styles?.dayRangeEnd) {
                  dayStyle = { ...dayStyle, ...props.styles.dayRangeEnd }
                }
                if (isDisabledDay && props.styles?.dayDisabled) {
                  dayStyle = { ...dayStyle, ...props.styles.dayDisabled }
                }

                return (
                  <button
                    key={i}
                    class={cls(
                      `${prefixCls}-day`,
                      {
                        [`${prefixCls}-day-other-month`]: !inCurrentMonth,
                        [`${prefixCls}-day-today`]: isToday,
                        [`${prefixCls}-day-selected`]: rangeStart || rangeEnd,
                        [`${prefixCls}-day-disabled`]: isDisabledDay,
                        [`${prefixCls}-day-in-range`]: inRange,
                        [`${prefixCls}-day-range-start`]: rangeStart,
                        [`${prefixCls}-day-range-end`]: rangeEnd,
                      },
                      props.classNames?.day,
                      isToday && props.classNames?.dayToday,
                      (rangeStart || rangeEnd) && props.classNames?.daySelected,
                      inRange && props.classNames?.dayInRange,
                      rangeStart && props.classNames?.dayRangeStart,
                      rangeEnd && props.classNames?.dayRangeEnd,
                      isDisabledDay && props.classNames?.dayDisabled,
                    )}
                    style={dayStyle}
                    disabled={isDisabledDay}
                    onClick={() => selectDate(date)}
                    onMouseenter={() => {
                      if (selecting.value === 'end') hoverDate.value = date
                    }}
                    onMouseleave={() => {
                      if (selecting.value === 'end') hoverDate.value = null
                    }}
                  >
                    {date.getDate()}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )
    }

    const renderPopup = () => (
      <div
        ref={panelRef}
        class={cls(`${prefixCls}-popup`, `${prefixCls}-range-popup`, props.classNames?.popup)}
        style={props.styles?.popup}
      >
        <div
          class={cls(`${prefixCls}-range-wrapper`, props.classNames?.rangeWrapper)}
          style={props.styles?.rangeWrapper}
        >
          {props.presets && props.presets.length > 0 && (
            <div class={cls(`${prefixCls}-presets`, props.classNames?.presets)} style={props.styles?.presets}>
              <ul>
                {props.presets.map((preset) => (
                  <li
                    key={preset.label}
                    class={cls(`${prefixCls}-preset`, props.classNames?.preset)}
                    style={props.styles?.preset}
                    onClick={() => applyPreset(preset)}
                  >
                    {preset.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div
            class={cls(`${prefixCls}-range-panels`, props.classNames?.rangePanels)}
            style={props.styles?.rangePanels}
          >
            {renderPanel(leftYear.value, leftMonth.value, 'left')}
            {renderPanel(rightYear.value, rightMonth.value, 'right')}
          </div>
        </div>
      </div>
    )

    return () => (
      <Trigger
        open={isOpen.value}
        trigger="click"
        placement={'bottomLeft' as Placement}
        disabled={isDisabled.value}
        destroyOnHidden
        triggerClass={cls(
          `${prefixCls}`,
          `${prefixCls}-range`,
          `${prefixCls}-${props.size}`,
          {
            [`${prefixCls}-open`]: isOpen.value,
            [`${prefixCls}-disabled`]: isDisabled.value,
            [`${prefixCls}-status-error`]: props.status === 'error',
            [`${prefixCls}-status-warning`]: props.status === 'warning',
          },
          props.classNames?.root,
        )}
        triggerStyle={props.styles?.root}
        popupClass={cls(`${prefixCls}-popup`, `${prefixCls}-range-popup`, props.classNames?.popup)}
        popupStyle={props.styles?.popup}
        onOpenChange={(v: boolean) => {
          if (v) openPanel()
          else closePanel()
        }}
      >
        {{
          default: () => (
            <span class={cls(`${prefixCls}-input`, props.classNames?.input)} style={props.styles?.input}>
              <input
                readonly
                value={displayStart.value}
                placeholder={placeholders.value[0]}
                disabled={startDisabled.value}
                class={cls(`${prefixCls}-input-inner`, props.classNames?.startInput)}
                style={props.styles?.startInput}
              />
              <span
                class={cls(`${prefixCls}-range-separator`, props.classNames?.separator)}
                style={props.styles?.separator}
              >
                {props.separator}
              </span>
              <input
                readonly
                value={displayEnd.value}
                placeholder={placeholders.value[1]}
                disabled={endDisabled.value}
                class={cls(`${prefixCls}-input-inner`, props.classNames?.endInput)}
                style={props.styles?.endInput}
              />
              {props.allowClear && hasValue.value && !isDisabled.value && (
                <span
                  class={cls(`${prefixCls}-clear`, props.classNames?.clear)}
                  style={props.styles?.clear}
                  onClick={clearValue}
                >
                  <CloseCircleFilled />
                </span>
              )}
              <span class={cls(`${prefixCls}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
                <CalendarOutlined />
              </span>
            </span>
          ),
          popup: ({ placement }: { placement: Placement }) => renderPopup(),
        }}
      </Trigger>
    )
  },
})
