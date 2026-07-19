import type { CSSProperties, VNode } from 'vue'

export type CalendarMode = 'month' | 'year'

/**
 * Calendar 组件各部分的自定义类名
 */
export interface CalendarClassNames {
  /** 根节点类名 */
  root?: string
  /** 头部区域类名 */
  header?: string
  /** 内容区域类名 */
  content?: string
  /** 面板容器类名 */
  panel?: string
  /** 星期头容器类名 */
  weekdays?: string
  /** 星期单元格类名 */
  weekdayCell?: string
  /** 日期格子容器类名 */
  body?: string
  /** 日期/月份单元格类名 */
  cell?: string
  /** 单元格内部类名 */
  cellInner?: string
  /** 日期内容节点类名 */
  date?: string
  /** 月份内容节点类名 */
  month?: string
  /** 年视图面板类名 */
  yearPanel?: string
  /** 月份单元格类名（年视图） */
  monthCell?: string
}

/**
 * Calendar 组件各部分的自定义样式
 */
export interface CalendarStyles {
  /** 根节点样式 */
  root?: CSSProperties
  /** 头部区域样式 */
  header?: CSSProperties
  /** 内容区域样式 */
  content?: CSSProperties
  /** 面板容器样式 */
  panel?: CSSProperties
  /** 星期头容器样式 */
  weekdays?: CSSProperties
  /** 星期单元格样式 */
  weekdayCell?: CSSProperties
  /** 日期格子容器样式 */
  body?: CSSProperties
  /** 日期/月份单元格样式 */
  cell?: CSSProperties
  /** 单元格内部样式 */
  cellInner?: CSSProperties
  /** 日期内容节点样式 */
  date?: CSSProperties
  /** 月份内容节点样式 */
  month?: CSSProperties
  /** 年视图面板样式 */
  yearPanel?: CSSProperties
  /** 月份单元格样式（年视图） */
  monthCell?: CSSProperties
}

export interface CalendarHeaderConfig {
  value: Date
  type: CalendarMode
  onChange: (date: Date) => void
  onTypeChange: (type: CalendarMode) => void
}

export interface CellRenderInfo {
  originNode: VNode
  today: Date
  type: CalendarMode
  locale?: any
}

export type CellRender = (current: Date, info: CellRenderInfo) => VNode | null

export type HeaderRender = (config: CalendarHeaderConfig) => VNode | null

export interface DateCellRenderInfo {
  originNode: VNode
  today: Date
}

// Legacy API (向后兼容)
export type DateCellRender = (current: Date, info?: DateCellRenderInfo) => VNode | null
export type MonthCellRender = (current: Date, locale?: any) => VNode | null

export type ValidRange = [Date, Date]

// 范围选择相关类型
export type DateRange = [Date | null, Date | null]
export type DateRangeString = [string | null, string | null]

// 事件类型
export interface CalendarSelectInfo {
  source: 'year' | 'month' | 'date' | 'customize'
}

export type CalendarChangeHandler = (dateStr: string, date: Date) => void
export type CalendarSelectHandler = (dateStr: string, date: Date, info?: CalendarSelectInfo) => void
export type CalendarPanelChangeHandler = (date: string | null, mode: CalendarMode) => void
export type CalendarRangeChangeHandler = (range: DateRangeString, dates: DateRange) => void

// Props 接口
export interface CalendarProps {
  value?: string | Date
  defaultValue?: string | Date
  mode?: CalendarMode
  fullscreen?: boolean
  disabledDate?: (date: Date) => boolean
  validRange?: ValidRange
  cellRender?: CellRender
  dateCellRender?: DateCellRender
  monthCellRender?: MonthCellRender
  headerRender?: HeaderRender
  range?: boolean
  rangeValue?: DateRange
  defaultRangeValue?: DateRange
  classNames?: CalendarClassNames
  styles?: CalendarStyles
}
