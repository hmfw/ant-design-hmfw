import { defineComponent, ref, computed, watch, type PropType, h } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Select } from '../select'
import { Radio, RadioGroup } from '../radio'
import type {
  CalendarMode,
  CellRender,
  HeaderRender,
  ValidRange,
  DateCellRender,
  MonthCellRender,
  DateRange,
  DateRangeString,
} from './types'

// 日期工具函数
function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatDate(d: Date, fmt = 'YYYY-MM-DD'): string {
  return fmt
    .replace('YYYY', String(d.getFullYear()))
    .replace('MM', pad(d.getMonth() + 1))
    .replace('DD', pad(d.getDate()))
}

function parseDate(val: string | Date | undefined): Date | null {
  if (!val) return null
  if (val instanceof Date) return val
  const d = new Date(val)
  return isNaN(d.getTime()) ? null : d
}

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

function isInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false
  const time = date.getTime()
  return time >= start.getTime() && time <= end.getTime()
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

  // 填充上月末尾日期
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthDays - i),
      inCurrentMonth: false,
    })
  }

  // 当月日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      inCurrentMonth: true,
    })
  }

  // 填充下月开始日期
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      inCurrentMonth: false,
    })
  }

  return days
}

export const Calendar = defineComponent({
  name: 'Calendar',
  props: {
    value: [String, Date] as PropType<string | Date>,
    defaultValue: [String, Date] as PropType<string | Date>,
    mode: {
      type: String as PropType<CalendarMode>,
      default: 'month',
    },
    fullscreen: {
      type: Boolean,
      default: true,
    },
    disabledDate: Function as PropType<(date: Date) => boolean>,
    validRange: Array as unknown as PropType<[Date, Date]>,
    cellRender: Function as PropType<CellRender>,
    // Legacy API (向后兼容)
    dateCellRender: Function as PropType<DateCellRender>,
    monthCellRender: Function as PropType<MonthCellRender>,
    headerRender: Function as PropType<HeaderRender>,
    // 范围选择模式
    range: {
      type: Boolean,
      default: false,
    },
    rangeValue: Array as unknown as PropType<DateRange>,
    defaultRangeValue: Array as unknown as PropType<DateRange>,
  },
  emits: ['update:value', 'change', 'select', 'panelChange', 'update:rangeValue', 'rangeChange'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('calendar')
    const locale = useLocale()
    const now = new Date()

    // 内部状态
    const innerValue = ref<Date>(parseDate(props.defaultValue ?? props.value) ?? now)
    const innerMode = ref<CalendarMode>(props.mode)

    // 范围选择状态
    const innerRangeValue = ref<DateRange>(props.defaultRangeValue ?? props.rangeValue ?? [null, null])
    const rangeSelectingStart = ref(true) // true = 选择开始日期, false = 选择结束日期

    // 视图年月
    const viewYear = ref(innerValue.value.getFullYear())
    const viewMonth = ref(innerValue.value.getMonth())

    // 受控模式
    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => {
      if (isControlled.value) {
        const parsed = parseDate(props.value)
        return parsed ?? now
      }
      return innerValue.value
    })

    // 范围选择受控模式
    const isRangeControlled = computed(() => props.rangeValue !== undefined)
    const currentRangeValue = computed<DateRange>(() => {
      if (isRangeControlled.value && props.rangeValue) {
        return props.rangeValue
      }
      return innerRangeValue.value
    })

    watch(
      () => props.value,
      (v) => {
        const parsed = parseDate(v)
        if (parsed) {
          innerValue.value = parsed
          viewYear.value = parsed.getFullYear()
          viewMonth.value = parsed.getMonth()
        }
      },
    )

    watch(
      () => props.rangeValue,
      (v) => {
        if (v) {
          innerRangeValue.value = v
        }
      },
    )

    watch(
      () => props.mode,
      (v) => {
        innerMode.value = v
      },
    )

    // validRange 边界检查
    const isDateInValidRange = (date: Date): boolean => {
      if (!props.validRange) return true
      const [start, end] = props.validRange
      return date >= start && date <= end
    }

    const isDateDisabled = (date: Date): boolean => {
      if (!isDateInValidRange(date)) return true
      return props.disabledDate?.(date) ?? false
    }

    // 日历数据
    const calendar = computed(() => buildCalendar(viewYear.value, viewMonth.value))

    // 更新值
    const updateValue = (date: Date) => {
      if (isDateDisabled(date)) return
      innerValue.value = date
      const str = formatDate(date, 'YYYY-MM-DD')
      emit('update:value', str)
      emit('change', str, date)
      emit('select', str, date)
    }

    // 选择日期
    const selectDate = (date: Date) => {
      if (props.range) {
        // 范围选择模式
        if (rangeSelectingStart.value) {
          // 选择开始日期
          innerRangeValue.value = [date, null]
          rangeSelectingStart.value = false
        } else {
          // 选择结束日期
          const [start] = currentRangeValue.value
          if (start) {
            const end = date
            // 确保 start <= end
            const range: DateRange = start <= end ? [start, end] : [end, start]
            innerRangeValue.value = range
            const rangeStr: DateRangeString = [formatDate(range[0]!, 'YYYY-MM-DD'), formatDate(range[1]!, 'YYYY-MM-DD')]
            emit('update:rangeValue', range)
            emit('rangeChange', rangeStr, range)
          }
          rangeSelectingStart.value = true
        }
      } else {
        // 单日期选择模式
        updateValue(date)
      }
    }

    // 选择月份
    const selectMonth = (month: number) => {
      const date = new Date(viewYear.value, month, currentValue.value.getDate())
      updateValue(date)
      viewMonth.value = month
    }

    // 导航按钮
    const prevMonth = () => {
      if (viewMonth.value === 0) {
        viewYear.value--
        viewMonth.value = 11
      } else {
        viewMonth.value--
      }
      emit('panelChange', null, innerMode.value)
    }

    const nextMonth = () => {
      if (viewMonth.value === 11) {
        viewYear.value++
        viewMonth.value = 0
      } else {
        viewMonth.value++
      }
      emit('panelChange', null, innerMode.value)
    }

    const prevYear = () => {
      viewYear.value--
      emit('panelChange', null, innerMode.value)
    }

    const nextYear = () => {
      viewYear.value++
      emit('panelChange', null, innerMode.value)
    }

    // 头部年份选项
    const yearOptions = computed(() => {
      const currentYear = now.getFullYear()
      const years = []
      for (let i = currentYear - 100; i <= currentYear + 50; i++) {
        years.push({ label: `${i}年`, value: i })
      }
      return years
    })

    // 头部月份选项
    const monthOptions = computed(() =>
      locale.value.DatePicker.months.map((label, i) => ({
        label,
        value: i,
      })),
    )

    // 头部模式切换
    const onModeChange = (mode: CalendarMode) => {
      innerMode.value = mode
      emit('panelChange', null, mode)
    }

    // 默认头部渲染
    const renderDefaultHeader = () => {
      return (
        <div class={`${prefixCls}-header`}>
          <div class={`${prefixCls}-header-left`}>
            <Select
              value={viewYear.value}
              options={yearOptions.value}
              size={props.fullscreen ? 'middle' : 'small'}
              onChange={(val) => {
                viewYear.value = val as number
                emit('panelChange', null, innerMode.value)
              }}
              style={{ width: '100px' }}
            />
            {innerMode.value === 'month' && (
              <Select
                value={viewMonth.value}
                options={monthOptions.value}
                size={props.fullscreen ? 'middle' : 'small'}
                onChange={(val) => {
                  viewMonth.value = val as number
                  emit('panelChange', null, innerMode.value)
                }}
                style={{ width: '80px', marginLeft: '8px' }}
              />
            )}
          </div>
          <div class={`${prefixCls}-header-right`}>
            <RadioGroup
              value={innerMode.value}
              onChange={(e) => onModeChange(e.target.value as CalendarMode)}
              size={props.fullscreen ? 'middle' : 'small'}
            >
              <Radio value="month">{locale.value.Calendar?.month ?? '月'}</Radio>
              <Radio value="year">{locale.value.Calendar?.year ?? '年'}</Radio>
            </RadioGroup>
          </div>
        </div>
      )
    }

    // 渲染日期单元格内容
    const renderDateCell = (date: Date, inCurrentMonth: boolean) => {
      const originNode = h('div', { class: `${prefixCls}-date` }, date.getDate())

      // 优先使用新 API cellRender
      if (props.cellRender) {
        return props.cellRender(date, {
          originNode,
          today: now,
          type: 'month',
          locale: locale.value,
        })
      }

      // 向后兼容：dateCellRender
      if (props.dateCellRender) {
        return props.dateCellRender(date, { originNode, today: now })
      }

      return originNode
    }

    // 渲染月份单元格内容
    const renderMonthCell = (month: number) => {
      const date = new Date(viewYear.value, month, 1)
      const originNode = h('div', { class: `${prefixCls}-month` }, locale.value.DatePicker.months[month])

      // 优先使用新 API cellRender
      if (props.cellRender) {
        return props.cellRender(date, {
          originNode,
          today: now,
          type: 'year',
          locale: locale.value,
        })
      }

      // 向后兼容：monthCellRender
      if (props.monthCellRender) {
        return props.monthCellRender(date, locale.value)
      }

      return originNode
    }

    // 渲染月视图
    const renderMonthView = () => (
      <div class={`${prefixCls}-panel`}>
        {/* 星期头 */}
        <div class={`${prefixCls}-weekdays`}>
          {locale.value.DatePicker.weekdays.map((day) => (
            <div key={day} class={`${prefixCls}-weekday-cell`}>
              {day}
            </div>
          ))}
        </div>
        {/* 日期格子 */}
        <div class={`${prefixCls}-body`}>
          {calendar.value.map(({ date, inCurrentMonth }, i) => {
            const isToday = isSameDay(date, now)
            const isDisabled = isDateDisabled(date)

            // 单选模式
            let isSelected = false
            let isRangeStart = false
            let isRangeEnd = false
            let isInRangeValue = false

            if (props.range) {
              const [start, end] = currentRangeValue.value
              isRangeStart = start ? isSameDay(date, start) : false
              isRangeEnd = end ? isSameDay(date, end) : false
              isSelected = isRangeStart || isRangeEnd
              isInRangeValue = isInRange(date, start, end)
            } else {
              isSelected = isSameDay(date, currentValue.value)
            }

            return (
              <div
                key={i}
                class={cls(`${prefixCls}-cell`, {
                  [`${prefixCls}-cell-in-view`]: inCurrentMonth,
                  [`${prefixCls}-cell-today`]: isToday,
                  [`${prefixCls}-cell-selected`]: isSelected,
                  [`${prefixCls}-cell-disabled`]: isDisabled,
                  [`${prefixCls}-cell-range-start`]: isRangeStart,
                  [`${prefixCls}-cell-range-end`]: isRangeEnd,
                  [`${prefixCls}-cell-in-range`]: isInRangeValue && !isSelected,
                })}
                onClick={() => !isDisabled && selectDate(date)}
              >
                <div class={`${prefixCls}-cell-inner`}>{renderDateCell(date, inCurrentMonth)}</div>
              </div>
            )
          })}
        </div>
      </div>
    )

    // 渲染年视图
    const renderYearView = () => (
      <div class={`${prefixCls}-panel`}>
        <div class={`${prefixCls}-year-panel`}>
          {Array.from({ length: 12 }, (_, i) => {
            const date = new Date(viewYear.value, i, 1)
            const isSelected = isSameMonth(date, currentValue.value)
            const isDisabled = isDateDisabled(date)

            return (
              <div
                key={i}
                class={cls(`${prefixCls}-cell`, `${prefixCls}-month-cell`, {
                  [`${prefixCls}-cell-selected`]: isSelected,
                  [`${prefixCls}-cell-disabled`]: isDisabled,
                })}
                onClick={() => !isDisabled && selectMonth(i)}
              >
                <div class={`${prefixCls}-cell-inner`}>{renderMonthCell(i)}</div>
              </div>
            )
          })}
        </div>
      </div>
    )

    return () => {
      // 自定义头部渲染
      const headerContent = props.headerRender
        ? props.headerRender({
            value: currentValue.value,
            type: innerMode.value,
            onChange: updateValue,
            onTypeChange: onModeChange,
          })
        : renderDefaultHeader()

      return (
        <div
          class={cls(prefixCls, {
            [`${prefixCls}-fullscreen`]: props.fullscreen,
            [`${prefixCls}-mini`]: !props.fullscreen,
          })}
        >
          {headerContent}
          <div class={`${prefixCls}-content`}>{innerMode.value === 'month' ? renderMonthView() : renderYearView()}</div>
        </div>
      )
    }
  },
})
