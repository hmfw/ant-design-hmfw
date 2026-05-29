export type AvatarSize = 'large' | 'default' | 'small' | number
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  size?: AvatarSize
  shape?: AvatarShape
  src?: string
  srcSet?: string
  alt?: string
  icon?: unknown
  gap?: number
}

export interface AvatarGroupProps {
  maxCount?: number
  maxStyle?: Record<string, string>
  maxPopoverPlacement?: 'top' | 'bottom'
  size?: AvatarSize
  shape?: AvatarShape
}
