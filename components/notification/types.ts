export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'top' | 'bottom'
export type NotificationType = 'success' | 'info' | 'warning' | 'error'

export interface NotificationConfig {
  message: string
  description?: string
  duration?: number
  placement?: NotificationPlacement
  key?: string
  type?: NotificationType
  onClick?: () => void
  onClose?: () => void
  style?: Record<string, string>
  className?: string
}

export interface NotificationInstance {
  open: (config: NotificationConfig) => void
  success: (config: Omit<NotificationConfig, 'type'>) => void
  info: (config: Omit<NotificationConfig, 'type'>) => void
  warning: (config: Omit<NotificationConfig, 'type'>) => void
  error: (config: Omit<NotificationConfig, 'type'>) => void
  destroy: (key?: string) => void
}
