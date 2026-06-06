import type { VNodeChild } from 'vue'

export type AlertType = 'success' | 'info' | 'warning' | 'error'
export type AlertVariant = 'outlined' | 'filled'

/** closable 为对象时的配置（与 AntD v6 对齐） */
export interface AlertClosableConfig {
  /** 自定义关闭图标 */
  closeIcon?: VNodeChild
  /** 关闭按钮的 aria-label */
  'aria-label'?: string
}

export type AlertClosable = boolean | AlertClosableConfig

export interface AlertProps {
  type?: AlertType
  /**
   * 样式变体
   * @since AntD v6.4.0
   */
  variant?: AlertVariant
  /** 标题内容（`message` 为其别名，已废弃） */
  title?: string
  /** @deprecated 请使用 `title` */
  message?: string
  description?: string
  showIcon?: boolean
  /** 是否可关闭；可传对象自定义 closeIcon 与 aria-label */
  closable?: AlertClosable
  /** @deprecated 请使用 `closable.closeIcon` */
  closeText?: VNodeChild
  /** 自定义关闭图标（@deprecated 请使用 `closable.closeIcon`） */
  closeIcon?: VNodeChild
  /** 自定义图标 */
  icon?: VNodeChild
  banner?: boolean
  /** 自定义操作项 */
  action?: VNodeChild
  /** 根元素 role，默认 `alert` */
  role?: string
}
