import type { IconComponent } from '../icon/types'
import type { CSSProperties } from 'vue'

export type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link'
export type ButtonSize = 'small' | 'middle' | 'large'
export type ButtonHTMLType = 'submit' | 'button' | 'reset'
export type ButtonShape = 'default' | 'circle' | 'round'

export interface LoadingConfig {
  delay?: number
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
}
