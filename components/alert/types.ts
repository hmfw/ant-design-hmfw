import type { CSSProperties, VNodeChild } from 'vue'

export type AlertType = 'success' | 'info' | 'warning' | 'error'
export type AlertVariant = 'outlined' | 'filled'

/** 语义化结构 className */
export interface AlertClassNames {
  root?: string // 警告提示根容器
  icon?: string // 状态图标容器
  section?: string // 标题与描述的内容区
  title?: string // 标题文本
  description?: string // 辅助描述文本
  actions?: string // 自定义操作项容器
  closeIcon?: string // 关闭按钮
}

/** 语义化结构 style */
export interface AlertStyles {
  root?: CSSProperties
  icon?: CSSProperties
  section?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
  actions?: CSSProperties
  closeIcon?: CSSProperties
}

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
  /** 标题内容 */
  title?: string
  description?: string
  showIcon?: boolean
  /** 是否可关闭；可传对象自定义 closeIcon 与 aria-label */
  closable?: AlertClosable
  /** 自定义图标 */
  icon?: VNodeChild
  banner?: boolean
  /** 自定义操作项 */
  action?: VNodeChild
  /** 根元素 role，默认 `alert` */
  role?: string
  /** 语义化结构 className */
  classNames?: AlertClassNames
  /** 语义化结构 style */
  styles?: AlertStyles
}
