export interface AvatarResponsiveSize {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export type AvatarSize = 'large' | 'default' | 'small' | number | AvatarResponsiveSize
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  size?: AvatarSize
  shape?: AvatarShape
  src?: string
  srcSet?: string
  alt?: string
  icon?: unknown
  draggable?: boolean | 'true' | 'false'
  crossOrigin?: '' | 'anonymous' | 'use-credentials'
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url'
  gap?: number
}

export interface AvatarGroupProps {
  maxCount?: number
  maxStyle?: Record<string, string>
  size?: AvatarSize
  shape?: AvatarShape
}
