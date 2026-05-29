export type TimePickerValue = string // HH:mm:ss

export interface TimePickerProps {
  value?: TimePickerValue
  defaultValue?: TimePickerValue
  format?: string
  disabled?: boolean
  size?: 'small' | 'middle' | 'large'
  placeholder?: string
  allowClear?: boolean
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  disabledHours?: () => number[]
  disabledMinutes?: (hour: number) => number[]
  disabledSeconds?: (hour: number, minute: number) => number[]
  showNow?: boolean
  use12Hours?: boolean
  status?: 'error' | 'warning' | ''
  open?: boolean
}
