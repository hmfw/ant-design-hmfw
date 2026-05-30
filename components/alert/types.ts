export type AlertType = 'success' | 'info' | 'warning' | 'error'
export type AlertVariant = 'outlined' | 'filled'

export interface AlertProps {
  type?: AlertType
  variant?: AlertVariant
  /** 标题内容（`message` 为其别名，已废弃） */
  title?: string
  /** @deprecated 请使用 `title` */
  message?: string
  description?: string
  showIcon?: boolean
  closable?: boolean
  closeText?: string
  banner?: boolean
  action?: unknown
}
