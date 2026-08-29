import type { CSSProperties, VNodeChild } from 'vue'

export type AlertType = 'success' | 'info' | 'warning' | 'error'
export type AlertVariant = 'outlined' | 'filled'

export type AlertCloseHandler = (e: MouseEvent) => void
export type AlertAfterCloseHandler = () => void

export interface AlertClosableConfig {
  closeIcon?: VNodeChild
  'aria-label'?: string
}
export type AlertClosable = boolean | AlertClosableConfig

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

export interface AlertProps {
  /** 标题内容 */
  title?: string
  /** 辅助描述文本，与 title 共同构成内容区 */
  description?: string

  /** 警告提示类型，决定状态色 */
  type?: AlertType
  /** 样式变体，@since AntD v6.4.0 */
  variant?: AlertVariant
  /** 是否为顶部横幅模式，通常无圆角且背景更深 */
  banner?: boolean

  /** 是否显示状态图标 */
  showIcon?: boolean
  /** 自定义状态图标，会覆盖默认的状态图标 */
  icon?: VNodeChild

  /**
   * 是否可关闭
   * - `true`: 显示默认关闭按钮
   * - `false`: 不显示
   * - 对象: 自定义关闭图标及 aria-label
   */
  closable?: AlertClosable
  /** 自定义操作项，位于内容区右侧（关闭按钮左侧） */
  action?: VNodeChild

  /** 语义化结构 className，用于精细化样式定制 */
  classNames?: AlertClassNames
  /** 语义化结构 style，用于精细化样式定制 */
  styles?: AlertStyles
}
