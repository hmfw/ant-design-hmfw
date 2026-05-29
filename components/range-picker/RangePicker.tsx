import {
  defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, Teleport,
} from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import type { RangeValue } from './types'

function pad(n: number) { return String(n).padStart(2, '0') }

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
    placeholder: { type: Array as unknown as PropType<[string, string]>, default: () => ['开始日期', '结束日期'] },
    allowClear: { type: Boolean, default: true },
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    disabledDate: Function as PropType<(d: Date) => boolean>,
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
  },
  emits: ['update:value', 'change', 'openChange', 'calendarChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('date-picker')
    const locale = useLocale()
    const now = new Date()

    const parseValue = (v: RangeValue | undefined): [Date | null, Date | null] => {
      if (!v) return [null, null]
      return [parseDate(v[0]), parseDate(v[1])]
    }

    const innerValue = ref<[Date | null, Date | null]>(parseValue(props.defaultValue ?? props.value))
    watch(() => props.value, (v) => { innerValue.value = parseValue(v) })

    const startDate = computed(() => {
      if (props.value) return parseDate(props.value[0])
      return innerValue.value[0]
    })
    const endDate = computed(() => {
      if (props.value) return parseDate(props.value[1])
      return innerValue.value[1]
    })

    const innerOpen = ref(false)
    const selecting = ref<'start' | 'end'>('start')
    const hoverDate = ref<Date | null>(null)

    // Left panel shows start month, right panel shows next month
    const leftYear = ref((startDate.value ?? now).getFullYear())
    const leftMonth = ref((startDate.value ?? now).getMonth())
    const rightYear = computed(() => leftMonth.value === 11 ? leftYear.value + 1 : leftYear.value)
    const rightMonth = computed(() => leftMonth.value === 11 ? 0 : leftMonth.value + 1)

    const triggerRef = ref<HTMLElement>()
    const panelRef = ref<HTMLElement>()
    const panelPos = ref({ top: 0, left: 0 })

    const isDisabled = computed(() => {
      if (typeof props.disabled === 'boolean') return props.disabled
      return false
    })

    const displayStart = computed(() => startDate.value ? formatDate(startDate.value, props.format) : '')
    const displayEnd = computed(() => endDate.value ? formatDate(endDate.value, props.format) : '')

    const updatePos = () => {
      if (!triggerRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      panelPos.value = { top: rect.bottom + window.scrollY + 4, left: rect.left + window.scrollX }
    }

    const openPanel = () => {
      if (isDisabled.value) return
      updatePos()
      const d = startDate.value ?? now
      leftYear.value = d.getFullYear()
      leftMonth.value = d.getMonth()
      selecting.value = 'start'
      innerOpen.value = true
      emit('openChange', true)
    }

    const closePanel = () => {
      innerOpen.value = false
      hoverDate.value = null
      emit('openChange', false)
    }

    const handleOutsideClick = (e: MouseEvent) => {
      if (!triggerRef.value?.contains(e.target as Node) && !panelRef.value?.contains(e.target as Node))
        closePanel()
    }

    onMounted(() => document.addEventListener('mousedown', handleOutsideClick))
    onUnmounted(() => document.removeEventListener('mousedown', handleOutsideClick))

    const selectDate = (d: Date) => {
      if (props.disabledDate?.(d)) return
      if (selecting.value === 'start') {
        innerValue.value = [d, null]
        selecting.value = 'end'
        emit('calendarChange', [formatDate(d, props.format), null])
      } else {
        let start = innerValue.value[0]
        let end = d
        if (start && end < start) { [start, end] = [end, start] }
        innerValue.value = [start, end]
        const result = [
          start ? formatDate(start, props.format) : null,
          end ? formatDate(end, props.format) : null,
        ] as RangeValue
        emit('update:value', result)
        emit('change', result, [start, end])
        emit('calendarChange', result)
        closePanel()
      }
    }

    const clearValue = (e: MouseEvent) => {
      e.stopPropagation()
      innerValue.value = [null, null]
      emit('update:value', [null, null])
      emit('change', [null, null], [null, null])
    }

    const prevMonth = () => {
      if (leftMonth.value === 0) { leftYear.value--; leftMonth.value = 11 }
      else leftMonth.value--
    }
    const nextMonth = () => {
      if (leftMonth.value === 11) { leftYear.value++; leftMonth.value = 0 }
      else leftMonth.value++
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
        <div class={`${prefixCls}-panel`}>
          <div class={`${prefixCls}-panel-header`}>
            {side === 'left' && <button class={`${prefixCls}-panel-header-btn`} onClick={prevMonth}>‹</button>}
            {side === 'right' && <span class={`${prefixCls}-panel-header-btn`} style="visibility:hidden">‹</span>}
            <span class={`${prefixCls}-panel-header-title`}>
              {year}年 {locale.value.DatePicker.months[month]}
            </span>
            {side === 'right' && <button class={`${prefixCls}-panel-header-btn`} onClick={nextMonth}>›</button>}
            {side === 'left' && <span class={`${prefixCls}-panel-header-btn`} style="visibility:hidden">›</span>}
          </div>
          <div class={`${prefixCls}-panel-body`}>
            <div class={`${prefixCls}-weekdays`}>
              {locale.value.DatePicker.weekdays.map((d) => <span key={d} class={`${prefixCls}-weekday`}>{d}</span>)}
            </div>
            <div class={`${prefixCls}-days`}>
              {calendar.map(({ date, inCurrentMonth }, i) => {
                const isToday = isSameDay(date, now)
                const isDisabledDay = props.disabledDate?.(date) ?? false
                const inRange = isInRange(date)
                const rangeStart = isRangeStart(date)
                const rangeEnd = isRangeEnd(date)
                return (
                  <button
                    key={i}
                    class={cls(`${prefixCls}-day`, {
                      [`${prefixCls}-day-other-month`]: !inCurrentMonth,
                      [`${prefixCls}-day-today`]: isToday,
                      [`${prefixCls}-day-selected`]: rangeStart || rangeEnd,
                      [`${prefixCls}-day-disabled`]: isDisabledDay,
                      [`${prefixCls}-day-in-range`]: inRange,
                      [`${prefixCls}-day-range-start`]: rangeStart,
                      [`${prefixCls}-day-range-end`]: rangeEnd,
                    })}
                    disabled={isDisabledDay}
                    onClick={() => selectDate(date)}
                    onMouseenter={() => { if (selecting.value === 'end') hoverDate.value = date }}
                    onMouseleave={() => { if (selecting.value === 'end') hoverDate.value = null }}
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

    return () => (
      <>
        <div
          ref={triggerRef}
          class={cls(`${prefixCls}`, `${prefixCls}-range`, `${prefixCls}-${props.size}`, {
            [`${prefixCls}-open`]: innerOpen.value,
            [`${prefixCls}-disabled`]: isDisabled.value,
            [`${prefixCls}-status-error`]: props.status === 'error',
            [`${prefixCls}-status-warning`]: props.status === 'warning',
          })}
          onClick={openPanel}
        >
          <span class={`${prefixCls}-input`}>
            <input
              readonly
              value={displayStart.value}
              placeholder={props.placeholder[0]}
              disabled={isDisabled.value}
              class={`${prefixCls}-input-inner`}
            />
            <span class={`${prefixCls}-range-separator`}>→</span>
            <input
              readonly
              value={displayEnd.value}
              placeholder={props.placeholder[1]}
              disabled={isDisabled.value}
              class={`${prefixCls}-input-inner`}
            />
            {props.allowClear && (displayStart.value || displayEnd.value) && !isDisabled.value && (
              <span class={`${prefixCls}-clear`} onClick={clearValue}>✕</span>
            )}
            <span class={`${prefixCls}-suffix`}>📅</span>
          </span>
        </div>

        {innerOpen.value && (
          <Teleport to="body">
            <div
              ref={panelRef}
              class={`${prefixCls}-popup ${prefixCls}-range-popup`}
              style={{ position: 'absolute', top: `${panelPos.value.top}px`, left: `${panelPos.value.left}px`, zIndex: 1050 }}
            >
              <div class={`${prefixCls}-range-panels`}>
                {renderPanel(leftYear.value, leftMonth.value, 'left')}
                {renderPanel(rightYear.value, rightMonth.value, 'right')}
              </div>
            </div>
          </Teleport>
        )}
      </>
    )
  },
})
