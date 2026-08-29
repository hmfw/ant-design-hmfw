import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils/cls'
import {
  buildCalendar,
  formatDate,
  formatQuarter,
  isSameDay,
  isSameMonth,
  isSameWeek,
  isSameYear,
  parseDate,
  parseWeek,
  weekStart,
} from '../_utils/date'
import { generateTimeOptions } from '../_utils/time'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { TimeColumn } from '../_internal/time-column'
import { PickerInput } from '../_internal/picker-input'
import type { PickerVariant } from '../_internal/picker-input'
import { CalendarOutlined } from '@hmfw/icons'
import type {
  DatePickerMode,
  DatePickerProps,
  PresetItem,
  ShowTimeConfig,
  DatePickerClassNames,
  DatePickerStyles,
} from './types'
import type { ComponentSize } from '../config-provider'
import type { CellRender } from './types'

// Props 定义（使用 satisfies 确保与 DatePickerProps 接口同步）
const datePickerProps = {
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: undefined },
  format: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  placeholder: { type: String, default: undefined },
  allowClear: { type: Boolean, default: true },
  picker: { type: String as PropType<DatePickerMode>, default: 'date' },
  showTime: { type: [Boolean, Object] as PropType<boolean | ShowTimeConfig>, default: undefined },
  showToday: { type: Boolean, default: true },
  showNow: { type: Boolean, default: false },
  disabledDate: {
    type: Function as PropType<(d: Date, info?: { from?: Date; type?: DatePickerMode }) => boolean>,
    default: undefined,
  },
  status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  presets: { type: Array as PropType<PresetItem[]>, default: undefined },
  minDate: { type: String, default: undefined },
  maxDate: { type: String, default: undefined },
  renderExtraFooter: { type: Function as PropType<() => any>, default: undefined },
  cellRender: { type: Function as PropType<CellRender>, default: undefined },
  placement: { type: String as PropType<Placement>, default: 'bottomLeft' },
  variant: { type: String as PropType<PickerVariant>, default: 'outlined' },
  classNames: { type: Object as PropType<DatePickerClassNames>, default: undefined },
  styles: { type: Object as PropType<DatePickerStyles>, default: undefined },
} satisfies Record<keyof DatePickerProps, any>

export const DatePicker = defineComponent({
  name: 'DatePicker',
  props: datePickerProps,
  emits: ['update:value', 'change', 'openChange', 'panelChange', 'focus', 'blur'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('date-picker')
    const locale = useLocale()
    const now = new Date()

    const fmt = computed(() => {
      if (props.format) return props.format
      if (props.picker === 'year') return 'YYYY'
      if (props.picker === 'month') return 'YYYY-MM'
      if (props.picker === 'quarter') return 'YYYY-[Q]Q'
      if (props.picker === 'week') return 'YYYY-ww'
      if (props.showTime) return 'YYYY-MM-DD HH:mm:ss'
      return 'YYYY-MM-DD'
    })

    const placeholder = computed(() => {
      if (props.placeholder) return props.placeholder
      const dp = locale.value.DatePicker
      if (props.picker === 'year') return dp.yearPlaceholder
      if (props.picker === 'month') return dp.monthPlaceholder
      if (props.picker === 'week') return dp.weekPlaceholder
      return dp.placeholder
    })

    // 按 picker 类型解析值：week 模式优先解析 'YYYY-ww' 周字符串，失败则回退标准日期解析
    const parsePickerValue = (val: string | null | undefined): Date | null => {
      if (!val) return null
      return props.picker === 'week' ? (parseWeek(val) ?? parseDate(val)) : parseDate(val)
    }

    const innerValue = ref<Date | null>(parsePickerValue(props.defaultValue ?? props.value))

    // 时间选择状态（仅 showTime 时使用）
    const innerHour = ref(innerValue.value?.getHours() ?? 0)
    const innerMinute = ref(innerValue.value?.getMinutes() ?? 0)
    const innerSecond = ref(innerValue.value?.getSeconds() ?? 0)

    // showTime 配置
    const showTimeConfig = computed(() => {
      if (!props.showTime) return null
      if (typeof props.showTime === 'boolean') return {}
      return props.showTime
    })
    const hasShowTime = computed(() => !!props.showTime)

    const viewYear = ref((innerValue.value ?? now).getFullYear())
    const viewMonth = ref((innerValue.value ?? now).getMonth())
    const innerOpen = ref(props.defaultOpen ?? false)
    const panelMode = ref<'date' | 'month' | 'year'>(
      props.picker === 'year' ? 'year' : props.picker === 'month' ? 'month' : 'date',
    )

    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    const selectedDate = computed(() => {
      if (props.value) return parsePickerValue(props.value)
      return innerValue.value
    })

    const minDateObj = computed(() => (props.minDate ? parseDate(props.minDate) : null))
    const maxDateObj = computed(() => (props.maxDate ? parseDate(props.maxDate) : null))

    const displayText = computed(() => {
      const d = selectedDate.value
      if (!d) return ''
      if (props.picker === 'quarter') return formatQuarter(d)
      return formatDate(d, fmt.value)
    })

    watch(
      () => props.value,
      (v) => {
        innerValue.value = parsePickerValue(v)
      },
    )

    const openPanel = () => {
      if (props.disabled) return
      const d = selectedDate.value ?? now
      viewYear.value = d.getFullYear()
      viewMonth.value = d.getMonth()
      panelMode.value = props.picker === 'year' ? 'year' : props.picker === 'month' ? 'month' : 'date'
      // showTime 模式下同步时间到内部状态
      if (hasShowTime.value && d) {
        innerHour.value = d.getHours()
        innerMinute.value = d.getMinutes()
        innerSecond.value = d.getSeconds()
      }
      innerOpen.value = true
      emit('openChange', true)
    }

    const closePanel = () => {
      innerOpen.value = false
      emit('openChange', false)
    }

    const selectDate = (d: Date) => {
      if (props.disabledDate?.(d, { type: props.picker })) return
      if (minDateObj.value && d < minDateObj.value) return
      if (maxDateObj.value && d > maxDateObj.value) return

      // week 模式：值取所选日期所在周的周日
      const value = props.picker === 'week' ? weekStart(d) : d

      // showTime 模式下，保留已选时间，合成完整日期时间
      if (hasShowTime.value) {
        const combined = new Date(
          value.getFullYear(),
          value.getMonth(),
          value.getDate(),
          innerHour.value,
          innerMinute.value,
          innerSecond.value,
        )
        innerValue.value = combined
        // 不立即关闭面板，等用户点"确定"
        return
      }

      // 非 showTime 模式：选择日期后立即 emit 并关闭
      innerValue.value = value
      const str = props.picker === 'quarter' ? formatQuarter(value) : formatDate(value, fmt.value)
      emit('update:value', str)
      emit('change', str, value)
      closePanel()
    }

    // showTime 时间选择 handler
    const selectHour = (h: number) => {
      innerHour.value = h
      if (innerValue.value) {
        const d = innerValue.value
        innerValue.value = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, innerMinute.value, innerSecond.value)
      }
    }
    const selectMinute = (m: number) => {
      innerMinute.value = m
      if (innerValue.value) {
        const d = innerValue.value
        innerValue.value = new Date(d.getFullYear(), d.getMonth(), d.getDate(), innerHour.value, m, innerSecond.value)
      }
    }
    const selectSecond = (s: number) => {
      innerSecond.value = s
      if (innerValue.value) {
        const d = innerValue.value
        innerValue.value = new Date(d.getFullYear(), d.getMonth(), d.getDate(), innerHour.value, innerMinute.value, s)
      }
    }

    // showTime 确认按钮：提交并关闭
    const confirmDateTime = () => {
      if (!innerValue.value) return
      const str = formatDate(innerValue.value, fmt.value)
      emit('update:value', str)
      emit('change', str, innerValue.value)
      closePanel()
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      innerValue.value = null
      emit('update:value', undefined)
      emit('change', undefined, null)
    }

    const applyPreset = (preset: PresetItem) => {
      const val = typeof preset.value === 'function' ? preset.value() : preset.value
      const d = parsePickerValue(val)
      if (d) selectDate(d)
    }

    const prevMonth = () => {
      if (viewMonth.value === 0) {
        viewYear.value--
        viewMonth.value = 11
      } else viewMonth.value--
      emit('panelChange', null, panelMode.value)
    }
    const nextMonth = () => {
      if (viewMonth.value === 11) {
        viewYear.value++
        viewMonth.value = 0
      } else viewMonth.value++
      emit('panelChange', null, panelMode.value)
    }
    const prevYear = () => {
      viewYear.value--
      emit('panelChange', null, panelMode.value)
    }
    const nextYear = () => {
      viewYear.value++
      emit('panelChange', null, panelMode.value)
    }

    const calendar = computed(() => buildCalendar(viewYear.value, viewMonth.value))

    // showTime 时间列数据
    const hourStep = computed(() => {
      const cfg = showTimeConfig.value
      return cfg && typeof cfg === 'object' && 'hourStep' in cfg && cfg.hourStep ? cfg.hourStep : 1
    })
    const minuteStep = computed(() => {
      const cfg = showTimeConfig.value
      return cfg && typeof cfg === 'object' && 'minuteStep' in cfg && cfg.minuteStep ? cfg.minuteStep : 1
    })
    const secondStep = computed(() => {
      const cfg = showTimeConfig.value
      return cfg && typeof cfg === 'object' && 'secondStep' in cfg && cfg.secondStep ? cfg.secondStep : 1
    })

    const hours = computed(() => generateTimeOptions(24, hourStep.value))
    const minutes = computed(() => generateTimeOptions(60, minuteStep.value))
    const seconds = computed(() => generateTimeOptions(60, secondStep.value))

    // 是否显示秒列（根据 format 判断）
    const showSecondColumn = computed(() => {
      if (!hasShowTime.value) return false
      // 如果 showTimeConfig 指定了 format，用它；否则用 fmt
      const timeFormat =
        showTimeConfig.value && 'format' in showTimeConfig.value && showTimeConfig.value.format
          ? showTimeConfig.value.format
          : fmt.value
      return timeFormat.includes('ss') || timeFormat.includes('s')
    })

    // Year panel: show 12 years around current
    const yearRange = computed(() => {
      const base = Math.floor(viewYear.value / 10) * 10
      return Array.from({ length: 10 }, (_, i) => base + i)
    })

    // 渲染时间列（复用共享 TimeColumn 组件，与 TimePicker 同构）
    const renderTimeColumn = (values: number[], selectedValue: number, onSelect: (v: number) => void) => (
      <TimeColumn
        colClass={cls(`${prefixCls}-time-column`, props.classNames?.timeColumn)}
        cellClass={cls(`${prefixCls}-time-cell`, props.classNames?.timeCell)}
        style={props.styles?.timeColumn}
        cellStyle={props.styles?.timeCell}
        items={values.map((v) => ({ value: v, disabled: false }))}
        selectedValue={selectedValue}
        onSelect={(v: number | string) => onSelect(v as number)}
        active={isOpen.value}
      />
    )

    const renderDatePanel = () => (
      <div
        class={cls(
          `${prefixCls}-panel`,
          { [`${prefixCls}-panel-has-time`]: hasShowTime.value },
          props.classNames?.panel,
        )}
        style={props.styles?.panel}
      >
        {/* 日期面板 + 时间面板并排布局 */}
        <div class={`${prefixCls}-panel-layout`}>
          {/* 日期面板（头部 + 主体） */}
          <div class={`${prefixCls}-date-panel`}>
            {/* Header */}
            <div
              class={cls(`${prefixCls}-panel-header`, props.classNames?.panelHeader)}
              style={props.styles?.panelHeader}
            >
              <button class={`${prefixCls}-panel-header-btn`} onClick={prevYear}>
                «
              </button>
              <button class={`${prefixCls}-panel-header-btn`} onClick={prevMonth}>
                ‹
              </button>
              <span class={`${prefixCls}-panel-header-title`}>
                <button
                  class={`${prefixCls}-panel-header-title-btn`}
                  onClick={() => {
                    panelMode.value = 'year'
                    emit('panelChange', null, 'year')
                  }}
                >
                  {locale.value.DatePicker.yearFormat(viewYear.value)}
                </button>
                <button
                  class={`${prefixCls}-panel-header-title-btn`}
                  onClick={() => {
                    panelMode.value = 'month'
                    emit('panelChange', null, 'month')
                  }}
                >
                  {locale.value.DatePicker.months[viewMonth.value]}
                </button>
              </span>
              <button class={`${prefixCls}-panel-header-btn`} onClick={nextMonth}>
                ›
              </button>
              <button class={`${prefixCls}-panel-header-btn`} onClick={nextYear}>
                »
              </button>
            </div>
            {/* Weekday row */}
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
                {calendar.value.map(({ date, inCurrentMonth }, i) => {
                  const isToday = isSameDay(date, now)
                  // week 模式：选中态按「同周」整行高亮；其他模式按「同日」
                  const isSelected = selectedDate.value
                    ? props.picker === 'week'
                      ? isSameWeek(date, selectedDate.value)
                      : isSameDay(date, selectedDate.value)
                    : false
                  const isDisabled = props.disabledDate?.(date, { type: props.picker }) ?? false

                  const originNode = <span>{date.getDate()}</span>
                  const cellContent = props.cellRender
                    ? props.cellRender(date, { originNode, today: now, type: 'date' })
                    : originNode

                  return (
                    <button
                      key={i}
                      class={cls(
                        `${prefixCls}-day`,
                        {
                          [`${prefixCls}-day-other-month`]: !inCurrentMonth,
                          [`${prefixCls}-day-today`]: isToday,
                          [`${prefixCls}-day-selected`]: isSelected,
                          [`${prefixCls}-day-week-selected`]: props.picker === 'week' && isSelected,
                          [`${prefixCls}-day-disabled`]: isDisabled,
                        },
                        props.classNames?.day,
                      )}
                      style={props.styles?.day}
                      disabled={isDisabled}
                      onClick={() => selectDate(date)}
                    >
                      {cellContent}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          {/* showTime 时间列 */}
          {hasShowTime.value && (
            <div class={cls(`${prefixCls}-time-panel`, props.classNames?.timePanel)} style={props.styles?.timePanel}>
              <div
                class={cls(`${prefixCls}-time-content`, props.classNames?.timeContent)}
                style={props.styles?.timeContent}
              >
                {renderTimeColumn(hours.value, innerHour.value, selectHour)}
                {renderTimeColumn(minutes.value, innerMinute.value, selectMinute)}
                {showSecondColumn.value && renderTimeColumn(seconds.value, innerSecond.value, selectSecond)}
              </div>
            </div>
          )}
        </div>
        {/* Footer */}
        {(props.showToday || props.showNow || props.showTime || props.presets?.length || props.renderExtraFooter) && (
          <div
            class={cls(`${prefixCls}-panel-footer`, props.classNames?.panelFooter)}
            style={props.styles?.panelFooter}
          >
            <div
              class={cls(`${prefixCls}-panel-footer-extra`, props.classNames?.panelFooterExtra)}
              style={props.styles?.panelFooterExtra}
            >
              {props.presets?.length && (
                <div class={cls(`${prefixCls}-presets`, props.classNames?.presets)} style={props.styles?.presets}>
                  {props.presets.map((preset, i) => (
                    <button
                      key={i}
                      class={cls(`${prefixCls}-preset-btn`, props.classNames?.presetBtn)}
                      style={props.styles?.presetBtn}
                      onClick={() => applyPreset(preset)}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              )}
              {props.renderExtraFooter?.()}
            </div>
            <div
              class={cls(`${prefixCls}-panel-footer-actions`, props.classNames?.panelFooterActions)}
              style={props.styles?.panelFooterActions}
            >
              {(props.showToday || props.showNow) && (
                <button
                  class={cls(`${prefixCls}-panel-footer-today`, props.classNames?.today)}
                  style={props.styles?.today}
                  onClick={() => selectDate(new Date())}
                >
                  {props.showNow ? locale.value.DatePicker.now : locale.value.DatePicker.today}
                </button>
              )}
              {props.showTime && (
                <button
                  class={cls(`${prefixCls}-panel-footer-ok`, props.classNames?.ok)}
                  style={props.styles?.ok}
                  onClick={confirmDateTime}
                >
                  {locale.value.DatePicker.ok}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    )

    const renderMonthPanel = () => (
      <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
        <div class={cls(`${prefixCls}-panel-header`, props.classNames?.panelHeader)} style={props.styles?.panelHeader}>
          <button class={`${prefixCls}-panel-header-btn`} onClick={prevYear}>
            «
          </button>
          <span class={`${prefixCls}-panel-header-title`}>
            <button
              class={`${prefixCls}-panel-header-title-btn`}
              onClick={() => {
                panelMode.value = 'year'
                emit('panelChange', null, 'year')
              }}
            >
              {locale.value.DatePicker.yearFormat(viewYear.value)}
            </button>
          </span>
          <button class={`${prefixCls}-panel-header-btn`} onClick={nextYear}>
            »
          </button>
        </div>
        <div class={cls(`${prefixCls}-panel-body`, props.classNames?.panelBody)} style={props.styles?.panelBody}>
          <div class={cls(`${prefixCls}-months`, props.classNames?.months)} style={props.styles?.months}>
            {locale.value.DatePicker.months.map((m, i) => {
              const d = new Date(viewYear.value, i, 1)
              const isSelected = selectedDate.value ? isSameMonth(d, selectedDate.value) : false
              return (
                <button
                  key={i}
                  class={cls(
                    `${prefixCls}-month`,
                    { [`${prefixCls}-month-selected`]: isSelected },
                    props.classNames?.month,
                  )}
                  style={props.styles?.month}
                  onClick={() => {
                    viewMonth.value = i
                    if (props.picker === 'month') selectDate(d)
                    else {
                      panelMode.value = 'date'
                      emit('panelChange', null, 'date')
                    }
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
      <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
        <div class={cls(`${prefixCls}-panel-header`, props.classNames?.panelHeader)} style={props.styles?.panelHeader}>
          <button
            class={`${prefixCls}-panel-header-btn`}
            onClick={() => {
              viewYear.value -= 10
            }}
          >
            «
          </button>
          <span class={`${prefixCls}-panel-header-title`}>
            {locale.value.DatePicker.yearFormat(yearRange.value[0])} -{' '}
            {locale.value.DatePicker.yearFormat(yearRange.value[yearRange.value.length - 1])}
          </span>
          <button
            class={`${prefixCls}-panel-header-btn`}
            onClick={() => {
              viewYear.value += 10
            }}
          >
            »
          </button>
        </div>
        <div class={cls(`${prefixCls}-panel-body`, props.classNames?.panelBody)} style={props.styles?.panelBody}>
          <div class={cls(`${prefixCls}-years`, props.classNames?.years)} style={props.styles?.years}>
            {yearRange.value.map((y) => {
              const isSelected = selectedDate.value ? isSameYear(new Date(y, 0, 1), selectedDate.value) : false
              return (
                <button
                  key={y}
                  class={cls(
                    `${prefixCls}-year`,
                    { [`${prefixCls}-year-selected`]: isSelected },
                    props.classNames?.year,
                  )}
                  style={props.styles?.year}
                  onClick={() => {
                    viewYear.value = y
                    if (props.picker === 'year') selectDate(new Date(y, 0, 1))
                    else {
                      panelMode.value = 'month'
                      emit('panelChange', null, 'month')
                    }
                  }}
                >
                  {locale.value.DatePicker.yearFormat(y)}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )

    const renderQuarterPanel = () => (
      <div class={cls(`${prefixCls}-panel`, props.classNames?.panel)} style={props.styles?.panel}>
        <div class={cls(`${prefixCls}-panel-header`, props.classNames?.panelHeader)} style={props.styles?.panelHeader}>
          <button class={`${prefixCls}-panel-header-btn`} onClick={prevYear}>
            «
          </button>
          <span class={`${prefixCls}-panel-header-title`}>{locale.value.DatePicker.yearFormat(viewYear.value)}</span>
          <button class={`${prefixCls}-panel-header-btn`} onClick={nextYear}>
            »
          </button>
        </div>
        <div class={cls(`${prefixCls}-panel-body`, props.classNames?.panelBody)} style={props.styles?.panelBody}>
          <div class={cls(`${prefixCls}-quarters`, props.classNames?.quarters)} style={props.styles?.quarters}>
            {[1, 2, 3, 4].map((q) => {
              const d = new Date(viewYear.value, (q - 1) * 3, 1)
              const isSelected = selectedDate.value
                ? selectedDate.value.getFullYear() === viewYear.value &&
                  Math.floor(selectedDate.value.getMonth() / 3) + 1 === q
                : false
              return (
                <button
                  key={q}
                  class={cls(
                    `${prefixCls}-quarter`,
                    {
                      [`${prefixCls}-quarter-selected`]: isSelected,
                    },
                    props.classNames?.quarter,
                  )}
                  style={props.styles?.quarter}
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

    const renderPopup = () => (
      <>
        {panelMode.value === 'date' && props.picker !== 'quarter' && renderDatePanel()}
        {panelMode.value === 'month' && renderMonthPanel()}
        {panelMode.value === 'year' && renderYearPanel()}
        {props.picker === 'quarter' && panelMode.value === 'date' && renderQuarterPanel()}
      </>
    )

    const renderInput = () => (
      <PickerInput
        size={props.size}
        status={props.status}
        variant={props.variant}
        disabled={props.disabled}
        open={isOpen.value}
        hasValue={!!displayText.value}
        allowClear={props.allowClear}
        value={displayText.value}
        placeholder={placeholder.value}
        onFocus={() => emit('focus')}
        onBlur={() => emit('blur')}
        classNames={{
          root: cls(prefixCls, props.classNames?.root),
          input: cls(`${prefixCls}-input-inner`, props.classNames?.input),
          clear: props.classNames?.clear,
          suffix: props.classNames?.suffix,
        }}
        styles={{
          root: props.styles?.root,
          input: props.styles?.input,
          clear: props.styles?.clear,
          suffix: props.styles?.suffix,
        }}
        onClear={handleClear}
      >
        {{
          suffix: () => <CalendarOutlined />,
        }}
      </PickerInput>
    )

    return () => (
      <Trigger
        open={isOpen.value}
        trigger="click"
        placement={props.placement}
        disabled={props.disabled}
        destroyOnHidden
        popupClass={cls(`${prefixCls}-popup`, props.classNames?.popup)}
        popupStyle={props.styles?.popup}
        onOpenChange={(v: boolean) => {
          if (v) openPanel()
          else closePanel()
        }}
      >
        {{
          default: renderInput,
          popup: renderPopup,
        }}
      </Trigger>
    )
  },
})
