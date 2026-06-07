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
  needConfirm?: boolean // 默认 true，是否需要点击确定按钮才提交变更
  changeOnScroll?: boolean // 默认 false，是否滚动时即触发 change（与 needConfirm 互斥）
  renderExtraFooter?: () => VNodeChild
  variant?: 'outlined' | 'borderless' | 'filled' | 'underlined'
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
}
