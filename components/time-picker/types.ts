import type { VNodeChild, CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type TimePickerValue = string // HH:mm:ss

export interface DisabledTimeConfig {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
}

/**
 * TimePicker 各部分的语义化 className
 */
export interface TimePickerClassNames {
  /** 根节点 div.hmfw-time-picker */
  root?: string
  /** 输入区域 span.hmfw-time-picker-input */
  input?: string
  /** 清除按钮 span.hmfw-time-picker-clear */
  clear?: string
  /** 后缀图标 span.hmfw-time-picker-suffix */
  suffix?: string
  /** 弹层容器 div.hmfw-time-picker-popup */
  popup?: string
  /** 面板 div.hmfw-time-picker-panel */
  panel?: string
  /** 面板内部容器 div.hmfw-time-picker-panel-inner */
  panelInner?: string
  /** 时间列 ul.hmfw-time-picker-panel-column */
  column?: string
  /** 时间单元格 li.hmfw-time-picker-panel-cell */
  cell?: string
  /** 底部区域 div.hmfw-time-picker-panel-footer */
  footer?: string
  /** 额外底部内容 div.hmfw-time-picker-panel-footer-extra */
  footerExtra?: string
  /** 底部按钮区域 div.hmfw-time-picker-panel-footer-actions */
  footerActions?: string
  /** "此刻"按钮 button.hmfw-time-picker-panel-footer-btn */
  now?: string
  /** "确定"按钮 button.hmfw-time-picker-panel-footer-ok */
  ok?: string
}

/**
 * TimePicker 各部分的语义化 style
 */
export interface TimePickerStyles {
  /** 根节点 div.hmfw-time-picker */
  root?: CSSProperties
  /** 输入区域 span.hmfw-time-picker-input */
  input?: CSSProperties
  /** 清除按钮 span.hmfw-time-picker-clear */
  clear?: CSSProperties
  /** 后缀图标 span.hmfw-time-picker-suffix */
  suffix?: CSSProperties
  /** 弹层容器 div.hmfw-time-picker-popup */
  popup?: CSSProperties
  /** 面板 div.hmfw-time-picker-panel */
  panel?: CSSProperties
  /** 面板内部容器 div.hmfw-time-picker-panel-inner */
  panelInner?: CSSProperties
  /** 时间列 ul.hmfw-time-picker-panel-column */
  column?: CSSProperties
  /** 时间单元格 li.hmfw-time-picker-panel-cell */
  cell?: CSSProperties
  /** 底部区域 div.hmfw-time-picker-panel-footer */
  footer?: CSSProperties
  /** 额外底部内容 div.hmfw-time-picker-panel-footer-extra */
  footerExtra?: CSSProperties
  /** 底部按钮区域 div.hmfw-time-picker-panel-footer-actions */
  footerActions?: CSSProperties
  /** "此刻"按钮 button.hmfw-time-picker-panel-footer-btn */
  now?: CSSProperties
  /** "确定"按钮 button.hmfw-time-picker-panel-footer-ok */
  ok?: CSSProperties
}

export interface TimePickerProps {
  value?: TimePickerValue
  defaultValue?: TimePickerValue
  format?: string
  disabled?: boolean
  size?: ComponentSize
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
  /** 语义化 className */
  classNames?: TimePickerClassNames
  /** 语义化 style */
  styles?: TimePickerStyles
}

/**
 * TimePicker change 事件的回调函数类型
 */
export type TimePickerChangeHandler = (value: string | undefined, timeString: string) => void

/**
 * TimePicker openChange 事件的回调函数类型
 */
export type TimePickerOpenChangeHandler = (open: boolean) => void
