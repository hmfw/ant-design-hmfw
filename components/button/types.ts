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
 * - root: 根元素
 * - icon: 图标容器
 * - loading: 加载图标容器（loading 状态下的图标）
 */
export interface ButtonClassNames {
  root?: string
  icon?: string
  loading?: string
}

/**
 * Button 语义化结构 style 配置
 */
export interface ButtonStyles {
  root?: CSSProperties
  icon?: CSSProperties
  loading?: CSSProperties
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
