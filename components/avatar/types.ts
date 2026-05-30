export type AvatarSize = 'large' | 'default' | 'small' | number
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
  gap?: number
}

export interface AvatarGroupProps {
  maxCount?: number
  maxStyle?: Record<string, string>
  size?: AvatarSize
  shape?: AvatarShape
}
