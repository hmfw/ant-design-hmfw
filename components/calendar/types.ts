import type { VNode } from 'vue'

export type CalendarMode = 'month' | 'year'

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
