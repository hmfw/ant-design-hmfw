import type { message } from '../message'
import type { notification } from '../notification'
import type { Modal } from '../modal'

export interface AppConfig {
  message: typeof message
  notification: typeof notification
  modal: {
    confirm: (props: Record<string, unknown>) => void
    info: (props: Record<string, unknown>) => void
    success: (props: Record<string, unknown>) => void
    warning: (props: Record<string, unknown>) => void
    error: (props: Record<string, unknown>) => void
  }
}
