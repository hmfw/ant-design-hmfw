export type DatePickerValue = string // YYYY-MM-DD

export type DatePickerMode = 'date' | 'week' | 'month' | 'quarter' | 'year'
export type RangePickerValue = [string, string]

export interface DatePickerProps {
  value?: DatePickerValue
  defaultValue?: DatePickerValue
  format?: string
  disabled?: boolean
  size?: 'small' | 'middle' | 'large'
  placeholder?: string
  allowClear?: boolean
  mode?: DatePickerMode
  showTime?: boolean
  showToday?: boolean
  disabledDate?: (date: Date) => boolean
  status?: 'error' | 'warning' | ''
  open?: boolean
  picker?: DatePickerMode
}
