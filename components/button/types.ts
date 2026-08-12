import type { IconComponent } from '@hmfw/icons'
import type { CSSProperties } from 'vue'

export type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link'
export type ButtonSize = 'small' | 'middle' | 'large'
export type ButtonHTMLType = 'submit' | 'button' | 'reset'
export type ButtonShape = 'default' | 'circle' | 'round'

export interface LoadingConfig {
  delay?: number
}

/**
 * Button 语义化结构 className 配置
 * - root: 根元素（`<button>` 或 `href` 存在时的 `<a>`）
 * - icon: 图标容器（loading 状态下复用同一节点，额外带 `.hmfw-btn-loading-icon`）
 * - content: 文本内容容器（无子节点时不渲染，如纯图标按钮）
 */
export interface ButtonClassNames {
  root?: string
  icon?: string
  content?: string
}

/**
 * Button 语义化结构 style 配置
 */
export interface ButtonStyles {
  root?: CSSProperties
  icon?: CSSProperties
  content?: CSSProperties
}

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  htmlType?: ButtonHTMLType
  loading?: boolean | LoadingConfig
  disabled?: boolean
  danger?: boolean
  block?: boolean
  ghost?: boolean
  icon?: IconComponent
  iconPosition?: 'start' | 'end'
  href?: string
  target?: string
  autoInsertSpace?: boolean
  /** 语义化结构 className，对子元素细粒度控制 */
  classNames?: ButtonClassNames
  /** 语义化结构 style，对子元素细粒度控制 */
  styles?: ButtonStyles
}
