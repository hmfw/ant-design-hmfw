import { defineComponent, ref, computed, watch, type PropType, h } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Select } from '../select'
import { Radio, RadioGroup } from '../radio'
import type {
  CalendarMode,
  CellRender,
  HeaderRender,
  DateCellRender,
  MonthCellRender,
  DateRange,
  DateRangeString,
  CalendarClassNames,
  CalendarStyles,
  CalendarProps,
  ValidRange,
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

/**
 * 构建日历矩阵（6 周 × 7 天 = 42 个格子）
 *
 * 算法：
 * 1. 计算当月 1 号是星期几（firstDay），向前补齐上月末尾日期
 * 2. 填充当月所有日期（1 ~ daysInMonth）
 * 3. 向后补齐下月开头日期，凑满 42 格（6 行 7 列标准日历布局）
 *
 * @param year 年份
 * @param month 月份（0-11）
 * @returns 42 个日期对象，包含 date 和 inCurrentMonth 标记
 */
function buildCalendar(year: number, month: number) {
  const days: Array<{ date: Date; inCurrentMonth: boolean }> = []
  const firstDay = getFirstDayOfWeek(year, month)
  const daysInMonth = getDaysInMonth(year, month)
  const prevMonthDays = getDaysInMonth(year, month - 1)

  // 1. 填充上月末尾日期（补齐第一周）
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthDays - i),
      inCurrentMonth: false,
    })
  }

  // 2. 当月日期
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      date: new Date(year, month, i),
      inCurrentMonth: true,
    })
  }

  // 3. 填充下月开头日期（补齐最后一周）
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      inCurrentMonth: false,
    })
  }

  return days
}

// Props 定义（使用 satisfies 确保与 CalendarProps 接口同步）
const calendarProps = {
  value: { type: [String, Date] as PropType<string | Date>, default: undefined },
  defaultValue: { type: [String, Date] as PropType<string | Date>, default: undefined },
  mode: { type: String as PropType<CalendarMode>, default: 'month' },
  fullscreen: { type: Boolean, default: true },
  disabledDate: { type: Function as PropType<(date: Date) => boolean>, default: undefined },
  validRange: { type: Array as unknown as PropType<ValidRange>, default: undefined },
  cellRender: { type: Function as PropType<CellRender>, default: undefined },
  dateCellRender: { type: Function as PropType<DateCellRender>, default: undefined },
  monthCellRender: { type: Function as PropType<MonthCellRender>, default: undefined },
  headerRender: { type: Function as PropType<HeaderRender>, default: undefined },
  range: { type: Boolean, default: false },
  rangeValue: { type: Array as unknown as PropType<DateRange>, default: undefined },
  defaultRangeValue: { type: Array as unknown as PropType<DateRange>, default: undefined },
  classNames: { type: Object as PropType<CalendarClassNames>, default: undefined },
  styles: { type: Object as PropType<CalendarStyles>, default: undefined },
} satisfies Record<keyof CalendarProps, any>

export const Calendar = defineComponent({
  name: 'Calendar',
  props: calendarProps,
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
          // 防御：start 可能为 null（异常状态兜底，重新开始选择）
          if (!start) {
            innerRangeValue.value = [date, null]
            rangeSelectingStart.value = false
            return
          }
          const end = date
          // 确保 start <= end
          const range: DateRange = start <= end ? [start, end] : [end, start]
          innerRangeValue.value = range
          const rangeStr: DateRangeString = [formatDate(range[0]!, 'YYYY-MM-DD'), formatDate(range[1]!, 'YYYY-MM-DD')]
          emit('update:rangeValue', range)
          emit('rangeChange', rangeStr, range)
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
        <div class={cls(`${prefixCls}-header`, props.classNames?.header)} style={props.styles?.header}>
          <Select
            class={cls(`${prefixCls}-year-select`)}
            value={viewYear.value}
            options={yearOptions.value}
            size={props.fullscreen ? 'middle' : 'small'}
            onChange={(val) => {
              viewYear.value = val as number
              emit('panelChange', null, innerMode.value)
            }}
          />
          {innerMode.value === 'month' && (
            <Select
              class={cls(`${prefixCls}-month-select`)}
              value={viewMonth.value}
              options={monthOptions.value}
              size={props.fullscreen ? 'middle' : 'small'}
              onChange={(val) => {
                viewMonth.value = val as number
                emit('panelChange', null, innerMode.value)
              }}
            />
          )}
          <RadioGroup
            value={innerMode.value}
            option-type="button"
            onChange={(e) => onModeChange(e.target.value as CalendarMode)}
            size={props.fullscreen ? 'middle' : 'small'}
          >
            <Radio value="month">{locale.value.Calendar?.month ?? '月'}</Radio>
            <Radio value="year">{locale.value.Calendar?.year ?? '年'}</Radio>
          </RadioGroup>
        </div>
      )
    }

    // 渲染日期单元格内容（返回 date-value 和 date-content 的数组）
    const renderDateCell = (date: Date, _inCurrentMonth: boolean) => {
      // 日期值节点（只显示数字）
      const dateValueNode = h(
        'div',
        { class: cls(`${prefixCls}-date-value`, props.classNames?.date), style: props.styles?.date },
        date.getDate(),
      )

      // 日期内容节点（用于显示自定义内容）
      let dateContentNode = null

      // 优先使用新 API cellRender
      if (props.cellRender) {
        const customContent = props.cellRender(date, {
          originNode: dateValueNode,
          today: now,
          type: 'month',
          locale: locale.value,
        })
        // cellRender 返回的内容放在 date-content 中
        if (customContent && customContent !== dateValueNode) {
          dateContentNode = h('div', { class: `${prefixCls}-date-content` }, customContent)
        }
      }
      // 向后兼容：dateCellRender
      else if (props.dateCellRender) {
        const customContent = props.dateCellRender(date, { originNode: dateValueNode, today: now })
        if (customContent && customContent !== dateValueNode) {
          dateContentNode = h('div', { class: `${prefixCls}-date-content` }, customContent)
        }
      }

      // 返回 date-value 和 date-content（不包裹额外层级）
      return [dateValueNode, dateContentNode].filter(Boolean)
    }

    // 渲染月份单元格内容
    const renderMonthCell = (month: number) => {
      const date = new Date(viewYear.value, month, 1)
      const originNode = h(
        'div',
        { class: cls(`${prefixCls}-month`, props.classNames?.month), style: props.styles?.month },
        locale.value.DatePicker.months[month],
      )

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
      <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
        {/* 星期头 */}
        <div class={cls(`${prefixCls}-weekdays`, props.classNames?.weekdays)} style={props.styles?.weekdays}>
          {locale.value.DatePicker.weekdays.map((day) => (
            <div
              key={day}
              class={cls(`${prefixCls}-weekday-cell`, props.classNames?.weekdayCell)}
              style={props.styles?.weekdayCell}
            >
              {day}
            </div>
          ))}
        </div>
        {/* 日期格子 */}
        <div class={cls(`${prefixCls}-body`, props.classNames?.body)} style={props.styles?.body}>
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
                class={cls(`${prefixCls}-cell`, props.classNames?.cell, {
                  [`${prefixCls}-cell-in-view`]: inCurrentMonth,
                  [`${prefixCls}-cell-today`]: isToday,
                  [`${prefixCls}-cell-selected`]: isSelected,
                  [`${prefixCls}-cell-disabled`]: isDisabled,
                  [`${prefixCls}-cell-range-start`]: isRangeStart,
                  [`${prefixCls}-cell-range-end`]: isRangeEnd,
                  [`${prefixCls}-cell-in-range`]: isInRangeValue && !isSelected,
                })}
                style={props.styles?.cell}
                onClick={() => !isDisabled && selectDate(date)}
              >
                <div
                  class={cls(`${prefixCls}-cell-inner`, `${prefixCls}-date`, props.classNames?.cellInner)}
                  style={props.styles?.cellInner}
                >
                  {renderDateCell(date, inCurrentMonth)}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )

    // 渲染年视图
    const renderYearView = () => (
      <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
        <div class={cls(`${prefixCls}-year-panel`, props.classNames?.yearPanel)} style={props.styles?.yearPanel}>
          {Array.from({ length: 12 }, (_, i) => {
            const date = new Date(viewYear.value, i, 1)
            const isSelected = isSameMonth(date, currentValue.value)
            const isDisabled = isDateDisabled(date)

            return (
              <div
                key={i}
                class={cls(`${prefixCls}-cell`, `${prefixCls}-month-cell`, props.classNames?.monthCell, {
                  [`${prefixCls}-cell-selected`]: isSelected,
                  [`${prefixCls}-cell-disabled`]: isDisabled,
                })}
                style={props.styles?.monthCell}
                onClick={() => !isDisabled && selectMonth(i)}
              >
                <div
                  class={cls(`${prefixCls}-cell-inner`, props.classNames?.cellInner)}
                  style={props.styles?.cellInner}
                >
                  {renderMonthCell(i)}
                </div>
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
          class={cls(prefixCls, props.classNames?.root, {
            [`${prefixCls}-fullscreen`]: props.fullscreen,
            [`${prefixCls}-mini`]: !props.fullscreen,
          })}
          style={props.styles?.root}
        >
          {headerContent}
          <div class={cls(`${prefixCls}-content`, props.classNames?.content)} style={props.styles?.content}>
            {innerMode.value === 'month' ? renderMonthView() : renderYearView()}
          </div>
        </div>
      )
    }
  },
})
