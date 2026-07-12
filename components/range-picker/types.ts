import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type RangeValue = [string | null, string | null]

export interface RangePreset {
  label: string
  /** Preset range value, or a factory returning one (evaluated on click). */
  value: RangeValue | (() => RangeValue)
}

/**
 * RangePicker 各部分的语义化 className
 */
export interface RangePickerClassNames {
  /** 根节点 div.hmfw-date-picker */
  root?: string
  /** 输入框容器 span.hmfw-date-picker-input */
  input?: string
  /** 开始日期输入框 input.hmfw-date-picker-input-inner */
  startInput?: string
  /** 结束日期输入框 input.hmfw-date-picker-input-inner */
  endInput?: string
  /** 分隔符 span.hmfw-date-picker-range-separator */
  separator?: string
  /** 清除按钮 span.hmfw-date-picker-clear */
  clear?: string
  /** 后缀图标 span.hmfw-date-picker-suffix */
  suffix?: string
  /** 弹出层容器 div.hmfw-date-picker-popup */
  popup?: string
  /** 范围选择器包裹容器 div.hmfw-date-picker-range-wrapper */
  rangeWrapper?: string
  /** 预设范围容器 div.hmfw-date-picker-presets */
  presets?: string
  /** 单个预设项 li.hmfw-date-picker-preset */
  preset?: string
  /** 面板容器（左右各一个） div.hmfw-date-picker-range-panels */
  rangePanels?: string
  /** 单个日历面板 div.hmfw-date-picker-panel */
  panel?: string
  /** 面板头部 div.hmfw-date-picker-panel-header */
  panelHeader?: string
  /** 头部按钮 button.hmfw-date-picker-panel-header-btn */
  panelHeaderBtn?: string
  /** 头部标题 span.hmfw-date-picker-panel-header-title */
  panelHeaderTitle?: string
  /** 面板主体 div.hmfw-date-picker-panel-body */
  panelBody?: string
  /** 星期标题行 div.hmfw-date-picker-weekdays */
  weekdays?: string
  /** 单个星期标题 span.hmfw-date-picker-weekday */
  weekday?: string
  /** 日期网格容器 div.hmfw-date-picker-days */
  days?: string
  /** 单个日期单元格 button.hmfw-date-picker-day */
  day?: string
  /** 今天的日期单元格 button.hmfw-date-picker-day-today */
  dayToday?: string
  /** 选中的日期单元格 button.hmfw-date-picker-day-selected */
  daySelected?: string
  /** 范围内的日期单元格 button.hmfw-date-picker-day-in-range */
  dayInRange?: string
  /** 范围起始日期 button.hmfw-date-picker-day-range-start */
  dayRangeStart?: string
  /** 范围结束日期 button.hmfw-date-picker-day-range-end */
  dayRangeEnd?: string
  /** 禁用的日期单元格 button.hmfw-date-picker-day-disabled */
  dayDisabled?: string
}

/**
 * RangePicker 各部分的语义化 style
 */
export interface RangePickerStyles {
  /** 根节点 div.hmfw-date-picker */
  root?: CSSProperties
  /** 输入框容器 span.hmfw-date-picker-input */
  input?: CSSProperties
  /** 开始日期输入框 input.hmfw-date-picker-input-inner */
  startInput?: CSSProperties
  /** 结束日期输入框 input.hmfw-date-picker-input-inner */
  endInput?: CSSProperties
  /** 分隔符 span.hmfw-date-picker-range-separator */
  separator?: CSSProperties
  /** 清除按钮 span.hmfw-date-picker-clear */
  clear?: CSSProperties
  /** 后缀图标 span.hmfw-date-picker-suffix */
  suffix?: CSSProperties
  /** 弹出层容器 div.hmfw-date-picker-popup */
  popup?: CSSProperties
  /** 范围选择器包裹容器 div.hmfw-date-picker-range-wrapper */
  rangeWrapper?: CSSProperties
  /** 预设范围容器 div.hmfw-date-picker-presets */
  presets?: CSSProperties
  /** 单个预设项 li.hmfw-date-picker-preset */
  preset?: CSSProperties
  /** 面板容器（左右各一个） div.hmfw-date-picker-range-panels */
  rangePanels?: CSSProperties
  /** 单个日历面板 div.hmfw-date-picker-panel */
  panel?: CSSProperties
  /** 面板头部 div.hmfw-date-picker-panel-header */
  panelHeader?: CSSProperties
  /** 头部按钮 button.hmfw-date-picker-panel-header-btn */
  panelHeaderBtn?: CSSProperties
  /** 头部标题 span.hmfw-date-picker-panel-header-title */
  panelHeaderTitle?: CSSProperties
  /** 面板主体 div.hmfw-date-picker-panel-body */
  panelBody?: CSSProperties
  /** 星期标题行 div.hmfw-date-picker-weekdays */
  weekdays?: CSSProperties
  /** 单个星期标题 span.hmfw-date-picker-weekday */
  weekday?: CSSProperties
  /** 日期网格容器 div.hmfw-date-picker-days */
  days?: CSSProperties
  /** 单个日期单元格 button.hmfw-date-picker-day */
  day?: CSSProperties
  /** 今天的日期单元格 button.hmfw-date-picker-day-today */
  dayToday?: CSSProperties
  /** 选中的日期单元格 button.hmfw-date-picker-day-selected */
  daySelected?: CSSProperties
  /** 范围内的日期单元格 button.hmfw-date-picker-day-in-range */
  dayInRange?: CSSProperties
  /** 范围起始日期 button.hmfw-date-picker-day-range-start */
  dayRangeStart?: CSSProperties
  /** 范围结束日期 button.hmfw-date-picker-day-range-end */
  dayRangeEnd?: CSSProperties
  /** 禁用的日期单元格 button.hmfw-date-picker-day-disabled */
  dayDisabled?: CSSProperties
}

export interface RangePickerProps {
  value?: RangeValue
  defaultValue?: RangeValue
  format?: string
  /** Disable the whole picker, or each input individually as `[start, end]`. */
  disabled?: boolean | [boolean, boolean]
  placeholder?: [string, string]
  allowClear?: boolean
  /** Allow start or end input to be left empty, as `[start, end]`. */
  allowEmpty?: [boolean, boolean]
  /** Auto order the two selected dates. Defaults to `true`. */
  order?: boolean
  /** Custom separator between the two inputs. */
  separator?: string
  /** Preset ranges for quick selection. */
  presets?: RangePreset[]
  size?: ComponentSize
  disabledDate?: (date: Date, info?: { from?: Date; type?: string }) => boolean
  status?: 'error' | 'warning' | ''
  /** Controlled open state. */
  open?: boolean
  /** 语义化 className */
  classNames?: RangePickerClassNames
  /** 语义化 style */
  styles?: RangePickerStyles
}
