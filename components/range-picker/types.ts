export type RangeValue = [string, string] | [null, null]

export interface RangePickerProps {
  value?: RangeValue
  defaultValue?: RangeValue
  format?: string
  disabled?: boolean | [boolean, boolean]
  placeholder?: [string, string]
  allowClear?: boolean
  size?: 'small' | 'middle' | 'large'
  disabledDate?: (d: Date) => boolean
  status?: 'error' | 'warning' | ''
}
