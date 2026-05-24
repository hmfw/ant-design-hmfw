import {
  defineComponent, ref, computed, watch, onMounted, onUnmounted, type PropType, Teleport,
} from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { DatePickerMode } from './types'

// --- Date utilities ---
function pad(n: number) { return String(n).padStart(2, '0') }

function formatDate(d: Date, fmt = 'YYYY-MM-DD'): string {
  return fmt
    .replace('YYYY', String(d.getFullYear()))
    .replace('MM', pad(d.getMonth() + 1))
    .replace('DD', pad(d.getDate()))
    .replace('HH', pad(d.getHours()))
    .replace('mm', pad(d.getMinutes()))
    .replace('ss', pad(d.getSeconds()))
}

function parseDate(val: string | undefined): Date | null {
  if (!val) return null
  const d = new Date(val)
  return isNaN(d.getTime()) ? null : d
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

function isSameYear(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear()
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']
const MONTHS = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

// --- Date panel ---
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

export const DatePicker = defineComponent({
  name: 'DatePicker',
  props: {
    value: String,
    defaultValue: String,
    format: String,
    disabled: Boolean,
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    placeholder: String,
    allowClear: { type: Boolean, default: true },
    picker: { type: String as PropType<DatePickerMode>, default: 'date' },
    showTime: Boolean,
    showToday: { type: Boolean, default: true },
    disabledDate: Function as PropType<(d: Date) => boolean>,
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    open: { type: Boolean, default: undefined },
  },
  emits: ['update:value', 'change', 'openChange', 'panelChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('date-picker')
    const now = new Date()

    const fmt = computed(() => {
      if (props.format) return props.format
      if (props.picker === 'year') return 'YYYY'
      if (props.picker === 'month') return 'YYYY-MM'
      if (props.picker === 'quarter') return 'YYYY-[Q]Q'
      if (props.showTime) return 'YYYY-MM-DD HH:mm:ss'
      return 'YYYY-MM-DD'
    })

    const placeholder = computed(() => {
      if (props.placeholder) return props.placeholder
      if (props.picker === 'year') return '请选择年份'
      if (props.picker === 'month') return '请选择月份'
      return '请选择日期'
    })

    const innerValue = ref<Date | null>(parseDate(props.defaultValue ?? props.value))
    const viewYear = ref((innerValue.value ?? now).getFullYear())
    const viewMonth = ref((innerValue.value ?? now).getMonth())
    const innerOpen = ref(false)
    const panelMode = ref<'date' | 'month' | 'year'>(
      props.picker === 'year' ? 'year' : props.picker === 'month' ? 'month' : 'date'
    )
    const triggerRef = ref<HTMLElement>()
    const panelRef = ref<HTMLElement>()
    const panelPos = ref({ top: 0, left: 0 })

    const isOpen = computed(() => props.open !== undefined ? props.open : innerOpen.value)

    const selectedDate = computed(() => {
      if (props.value) return parseDate(props.value)
      return innerValue.value
    })

    const displayText = computed(() => {
      const d = selectedDate.value
      if (!d) return ''
      if (props.picker === 'quarter') {
        const q = Math.floor(d.getMonth() / 3) + 1
        return `${d.getFullYear()}-Q${q}`
      }
      return formatDate(d, fmt.value)
    })

    watch(() => props.value, (v) => { innerValue.value = parseDate(v) })

    const updatePos = () => {
      if (!triggerRef.value) return
      const rect = triggerRef.value.getBoundingClientRect()
      panelPos.value = { top: rect.bottom + window.scrollY + 4, left: rect.left + window.scrollX }
    }

    const openPanel = () => {
      if (props.disabled) return
      updatePos()
      const d = selectedDate.value ?? now
      viewYear.value = d.getFullYear()
      viewMonth.value = d.getMonth()
      panelMode.value = props.picker === 'year' ? 'year' : props.picker === 'month' ? 'month' : 'date'
      innerOpen.value = true
      emit('openChange', true)
    }

    const closePanel = () => {
      innerOpen.value = false
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
      innerValue.value = d
      const str = props.picker === 'quarter'
        ? `${d.getFullYear()}-Q${Math.floor(d.getMonth() / 3) + 1}`
        : formatDate(d, fmt.value)
      emit('update:value', str)
      emit('change', str, d)
      if (!props.showTime) closePanel()
    }

    const clearValue = (e: MouseEvent) => {
      e.stopPropagation()
      innerValue.value = null
      emit('update:value', undefined)
      emit('change', undefined, null)
    }

    const prevMonth = () => {
      if (viewMonth.value === 0) { viewYear.value--; viewMonth.value = 11 }
      else viewMonth.value--
    }
    const nextMonth = () => {
      if (viewMonth.value === 11) { viewYear.value++; viewMonth.value = 0 }
      else viewMonth.value++
    }
    const prevYear = () => { viewYear.value-- }
    const nextYear = () => { viewYear.value++ }

    const calendar = computed(() => buildCalendar(viewYear.value, viewMonth.value))

    // Year panel: show 12 years around current
    const yearRange = computed(() => {
      const base = Math.floor(viewYear.value / 10) * 10
      return Array.from({ length: 10 }, (_, i) => base + i)
    })

    const renderDatePanel = () => (
      <div class={`${prefixCls}-panel`}>
        {/* Header */}
        <div class={`${prefixCls}-panel-header`}>
          <button class={`${prefixCls}-panel-header-btn`} onClick={prevYear}>«</button>
          <button class={`${prefixCls}-panel-header-btn`} onClick={prevMonth}>‹</button>
          <span class={`${prefixCls}-panel-header-title`}>
            <button class={`${prefixCls}-panel-header-title-btn`} onClick={() => { panelMode.value = 'year' }}>
              {viewYear.value}年
            </button>
            <button class={`${prefixCls}-panel-header-title-btn`} onClick={() => { panelMode.value = 'month' }}>
              {MONTHS[viewMonth.value]}
            </button>
          </span>
          <button class={`${prefixCls}-panel-header-btn`} onClick={nextMonth}>›</button>
          <button class={`${prefixCls}-panel-header-btn`} onClick={nextYear}>»</button>
        </div>
        {/* Weekday row */}
        <div class={`${prefixCls}-panel-body`}>
          <div class={`${prefixCls}-weekdays`}>
            {WEEKDAYS.map((d) => <span key={d} class={`${prefixCls}-weekday`}>{d}</span>)}
          </div>
          <div class={`${prefixCls}-days`}>
            {calendar.value.map(({ date, inCurrentMonth }, i) => {
              const isToday = isSameDay(date, now)
              const isSelected = selectedDate.value ? isSameDay(date, selectedDate.value) : false
              const isDisabled = props.disabledDate?.(date) ?? false
              return (
                <button
                  key={i}
                  class={cls(`${prefixCls}-day`, {
                    [`${prefixCls}-day-other-month`]: !inCurrentMonth,
                    [`${prefixCls}-day-today`]: isToday,
                    [`${prefixCls}-day-selected`]: isSelected,
                    [`${prefixCls}-day-disabled`]: isDisabled,
                  })}
                  disabled={isDisabled}
                  onClick={() => selectDate(date)}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
        </div>
        {/* Footer */}
        {(props.showToday || props.showTime) && (
          <div class={`${prefixCls}-panel-footer`}>
            {props.showToday && (
              <button class={`${prefixCls}-panel-footer-today`} onClick={() => selectDate(new Date())}>今天</button>
            )}
            {props.showTime && (
              <button class={`${prefixCls}-panel-footer-ok`} onClick={closePanel}>确定</button>
            )}
          </div>
        )}
      </div>
    )

    const renderMonthPanel = () => (
      <div class={`${prefixCls}-panel`}>
        <div class={`${prefixCls}-panel-header`}>
          <button class={`${prefixCls}-panel-header-btn`} onClick={prevYear}>«</button>
          <span class={`${prefixCls}-panel-header-title`}>
            <button class={`${prefixCls}-panel-header-title-btn`} onClick={() => { panelMode.value = 'year' }}>
              {viewYear.value}年
            </button>
          </span>
          <button class={`${prefixCls}-panel-header-btn`} onClick={nextYear}>»</button>
        </div>
        <div class={`${prefixCls}-panel-body`}>
          <div class={`${prefixCls}-months`}>
            {MONTHS.map((m, i) => {
              const d = new Date(viewYear.value, i, 1)
              const isSelected = selectedDate.value ? isSameMonth(d, selectedDate.value) : false
              return (
                <button
                  key={i}
                  class={cls(`${prefixCls}-month`, { [`${prefixCls}-month-selected`]: isSelected })}
                  onClick={() => {
                    viewMonth.value = i
                    if (props.picker === 'month') selectDate(d)
                    else panelMode.value = 'date'
                  }}
                >
                  {m}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )

    const renderYearPanel = () => (
      <div class={`${prefixCls}-panel`}>
        <div class={`${prefixCls}-panel-header`}>
          <button class={`${prefixCls}-panel-header-btn`} onClick={() => { viewYear.value -= 10 }}>«</button>
          <span class={`${prefixCls}-panel-header-title`}>
            {yearRange.value[0]}年 - {yearRange.value[yearRange.value.length - 1]}年
          </span>
          <button class={`${prefixCls}-panel-header-btn`} onClick={() => { viewYear.value += 10 }}>»</button>
        </div>
        <div class={`${prefixCls}-panel-body`}>
          <div class={`${prefixCls}-years`}>
            {yearRange.value.map((y) => {
              const isSelected = selectedDate.value ? isSameYear(new Date(y, 0, 1), selectedDate.value) : false
              return (
                <button
                  key={y}
                  class={cls(`${prefixCls}-year`, { [`${prefixCls}-year-selected`]: isSelected })}
                  onClick={() => {
                    viewYear.value = y
                    if (props.picker === 'year') selectDate(new Date(y, 0, 1))
                    else panelMode.value = 'month'
                  }}
                >
                  {y}年
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )

    const renderQuarterPanel = () => (
      <div class={`${prefixCls}-panel`}>
        <div class={`${prefixCls}-panel-header`}>
          <button class={`${prefixCls}-panel-header-btn`} onClick={prevYear}>«</button>
          <span class={`${prefixCls}-panel-header-title`}>{viewYear.value}年</span>
          <button class={`${prefixCls}-panel-header-btn`} onClick={nextYear}>»</button>
        </div>
        <div class={`${prefixCls}-panel-body`}>
          <div class={`${prefixCls}-quarters`}>
            {[1, 2, 3, 4].map((q) => {
              const d = new Date(viewYear.value, (q - 1) * 3, 1)
              const isSelected = selectedDate.value ? (
                selectedDate.value.getFullYear() === viewYear.value &&
                Math.floor(selectedDate.value.getMonth() / 3) + 1 === q
              ) : false
              return (
                <button
                  key={q}
                  class={cls(`${prefixCls}-quarter`, { [`${prefixCls}-quarter-selected`]: isSelected })}
                  onClick={() => selectDate(d)}
                >
                  Q{q}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )

    return () => (
      <>
        <div
          ref={triggerRef}
          class={cls(prefixCls, `${prefixCls}-${props.size}`, {
            [`${prefixCls}-open`]: isOpen.value,
            [`${prefixCls}-disabled`]: props.disabled,
            [`${prefixCls}-status-error`]: props.status === 'error',
            [`${prefixCls}-status-warning`]: props.status === 'warning',
          })}
          onClick={openPanel}
        >
          <span class={`${prefixCls}-input`}>
            <input
              readonly
              value={displayText.value}
              placeholder={placeholder.value}
              disabled={props.disabled}
              class={`${prefixCls}-input-inner`}
            />
            {props.allowClear && displayText.value && !props.disabled && (
              <span class={`${prefixCls}-clear`} onClick={clearValue}>✕</span>
            )}
            <span class={`${prefixCls}-suffix`}>📅</span>
          </span>
        </div>

        {isOpen.value && (
          <Teleport to="body">
            <div
              ref={panelRef}
              class={`${prefixCls}-popup`}
              style={{ position: 'absolute', top: `${panelPos.value.top}px`, left: `${panelPos.value.left}px`, zIndex: 1050 }}
            >
              {panelMode.value === 'date' && props.picker !== 'quarter' && renderDatePanel()}
              {panelMode.value === 'month' && renderMonthPanel()}
              {panelMode.value === 'year' && renderYearPanel()}
              {props.picker === 'quarter' && panelMode.value === 'date' && renderQuarterPanel()}
            </div>
          </Teleport>
        )}
      </>
    )
  },
})
