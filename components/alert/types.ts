export type AlertType = 'success' | 'info' | 'warning' | 'error'

export interface AlertProps {
  type?: AlertType
  message?: string
  description?: string
  showIcon?: boolean
  closable?: boolean
  closeText?: string
  banner?: boolean
  action?: unknown
}
