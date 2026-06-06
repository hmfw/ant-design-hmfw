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

export interface DatePickerProps {
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  format?: string
  disabled?: boolean
  size?: 'small' | 'middle' | 'large'
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
  cellRender?: (current: Date, info: { originNode: any; today: Date; range?: 'start' | 'end'; type: 'date' | 'month' | 'year' }) => any
}
