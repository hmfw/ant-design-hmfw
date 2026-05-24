import type { IconProps } from '../icon/types'

export type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link'
export type ButtonSize = 'small' | 'middle' | 'large'
export type ButtonHTMLType = 'submit' | 'button' | 'reset'
export type IconConfig = IconProps

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  htmlType?: ButtonHTMLType
  loading?: boolean
  disabled?: boolean
  danger?: boolean
  block?: boolean
  ghost?: boolean
  icon?: IconConfig
}
