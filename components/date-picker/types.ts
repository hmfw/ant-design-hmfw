import type { ComponentSize } from '../config-provider'

export type DatePickerValue = string // YYYY-MM-DD

export type DatePickerMode = 'date' | 'week' | 'month' | 'quarter' | 'year'
export type RangePickerValue = [string, string]

export interface PresetItem {
  label: string
  value: string | (() => string)
}

export interface ShowTimeConfig {
  /** 时间格式，如 'HH:mm:ss'、'HH:mm' */
  format?: string
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 秒步长 */
  secondStep?: number
}

import type { CSSProperties } from 'vue'

/** DatePicker 各部分的自定义类名 */
export interface DatePickerClassNames {
  /** 根节点（触发器容器） */
  root?: string
  /** 输入框容器 */
  input?: string
  /** 清除按钮 */
  clear?: string
  /** 后缀图标 */
  suffix?: string
  /** 弹层容器 */
  popup?: string
  /** 面板容器 */
  panel?: string
  /** 面板头部 */
  panelHeader?: string
  /** 面板主体 */
  panelBody?: string
  /** 星期行容器 */
  weekdays?: string
  /** 单个星期标签 */
  weekday?: string
  /** 日期网格容器 */
  days?: string
  /** 单个日期单元格 */
  day?: string
  /** 月份网格容器 */
  months?: string
  /** 单个月份单元格 */
  month?: string
  /** 年份网格容器 */
  years?: string
  /** 单个年份单元格 */
  year?: string
  /** 季度网格容器 */
  quarters?: string
  /** 单个季度单元格 */
  quarter?: string
  /** 时间选择面板 */
  timePanel?: string
  /** 时间列容器 */
  timeContent?: string
  /** 单个时间列 */
  timeColumn?: string
  /** 时间单元格 */
  timeCell?: string
  /** 面板底部 */
  panelFooter?: string
  /** 底部额外内容区 */
  panelFooterExtra?: string
  /** 底部操作按钮区 */
  panelFooterActions?: string
  /** 预设按钮容器 */
  presets?: string
  /** 单个预设按钮 */
  presetBtn?: string
  /** 今天/此刻按钮 */
  today?: string
  /** 确定按钮（showTime 模式） */
  ok?: string
}

/** DatePicker 各部分的自定义样式 */
export interface DatePickerStyles {
  /** 根节点（触发器容器） */
  root?: CSSProperties
  /** 输入框容器 */
  input?: CSSProperties
  /** 清除按钮 */
  clear?: CSSProperties
  /** 后缀图标 */
  suffix?: CSSProperties
  /** 弹层容器 */
  popup?: CSSProperties
  /** 面板容器 */
  panel?: CSSProperties
  /** 面板头部 */
  panelHeader?: CSSProperties
  /** 面板主体 */
  panelBody?: CSSProperties
  /** 星期行容器 */
  weekdays?: CSSProperties
  /** 单个星期标签 */
  weekday?: CSSProperties
  /** 日期网格容器 */
  days?: CSSProperties
  /** 单个日期单元格 */
  day?: CSSProperties
  /** 月份网格容器 */
  months?: CSSProperties
  /** 单个月份单元格 */
  month?: CSSProperties
  /** 年份网格容器 */
  years?: CSSProperties
  /** 单个年份单元格 */
  year?: CSSProperties
  /** 季度网格容器 */
  quarters?: CSSProperties
  /** 单个季度单元格 */
  quarter?: CSSProperties
  /** 时间选择面板 */
  timePanel?: CSSProperties
  /** 时间列容器 */
  timeContent?: CSSProperties
  /** 单个时间列 */
  timeColumn?: CSSProperties
  /** 时间单元格 */
  timeCell?: CSSProperties
  /** 面板底部 */
  panelFooter?: CSSProperties
  /** 底部额外内容区 */
  panelFooterExtra?: CSSProperties
  /** 底部操作按钮区 */
  panelFooterActions?: CSSProperties
  /** 预设按钮容器 */
  presets?: CSSProperties
  /** 单个预设按钮 */
  presetBtn?: CSSProperties
  /** 今天/此刻按钮 */
  today?: CSSProperties
  /** 确定按钮（showTime 模式） */
  ok?: CSSProperties
}

export interface DatePickerProps {
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  format?: string
  disabled?: boolean
  size?: ComponentSize
  placeholder?: string
  allowClear?: boolean
  mode?: DatePickerMode
  showTime?: boolean | ShowTimeConfig
  showToday?: boolean
  showNow?: boolean
  disabledDate?: (date: Date) => boolean
  status?: 'error' | 'warning' | ''
  open?: boolean
  defaultOpen?: boolean
  picker?: DatePickerMode
  presets?: PresetItem[]
  minDate?: string
  maxDate?: string
  renderExtraFooter?: () => any
  cellRender?: (
    current: Date,
    info: {
      originNode: any
      today: Date
      range?: 'start' | 'end'
      type: 'date' | 'month' | 'year'
    },
  ) => any
  /** 自定义各部分类名 */
  classNames?: DatePickerClassNames
  /** 自定义各部分样式 */
  styles?: DatePickerStyles
}
