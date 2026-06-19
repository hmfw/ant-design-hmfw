import type { VNode, CSSProperties } from 'vue'

export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom'
export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export type NotificationContent = string | number | VNode | (() => VNode)

// 语义化结构 className
export interface NotificationClassNames {
  notice?: string // 单条通知根容器
  icon?: string // 左侧图标容器
  message?: string // 标题文本
  description?: string // 描述文本
  btn?: string // 自定义按钮容器
  close?: string // 关闭按钮
}

// 语义化结构 style
export interface NotificationStyles {
  notice?: CSSProperties
  icon?: CSSProperties
  message?: CSSProperties
  description?: CSSProperties
  btn?: CSSProperties
  close?: CSSProperties
}

export interface ArgsProps {
  message?: NotificationContent
  description?: NotificationContent
  duration?: number
  placement?: NotificationPlacement
  key?: string
  type?: NotificationType
  onClick?: () => void
  onClose?: () => void
  style?: CSSProperties
  className?: string
  icon?: VNode | (() => VNode)
  closeIcon?: VNode | (() => VNode)
  btn?: VNode | (() => VNode)
  pauseOnHover?: boolean
  showProgress?: boolean
  role?: 'alert' | 'status'
  classNames?: NotificationClassNames
  styles?: NotificationStyles
}

export interface ConfigOptions {
  top?: number
  bottom?: number
  duration?: number
  getContainer?: () => HTMLElement
  placement?: NotificationPlacement
  maxCount?: number
  pauseOnHover?: boolean
  showProgress?: boolean
  closeIcon?: VNode | (() => VNode)
  rtl?: boolean
}

export interface NotificationInstance {
  open: (config: ArgsProps) => void
  success: (config: Omit<ArgsProps, 'type'>) => void
  info: (config: Omit<ArgsProps, 'type'>) => void
  warning: (config: Omit<ArgsProps, 'type'>) => void
  error: (config: Omit<ArgsProps, 'type'>) => void
  destroy: (key?: string) => void
  config: (options: ConfigOptions) => void
}
