import type { VNodeChild } from 'vue'

export type TimePickerValue = string // HH:mm:ss

export interface DisabledTimeConfig {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
}

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
  disabledTime?: () => DisabledTimeConfig
  hideDisabledOptions?: boolean
  showNow?: boolean
  use12Hours?: boolean
  status?: 'error' | 'warning' | ''
  open?: boolean
  needConfirm?: boolean
  changeOnScroll?: boolean
  renderExtraFooter?: () => VNodeChild
  variant?: 'outlined' | 'borderless' | 'filled' | 'underlined'
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
}

