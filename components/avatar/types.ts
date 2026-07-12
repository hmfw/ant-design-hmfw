import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export interface AvatarResponsiveSize {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

export type AvatarSize = ComponentSize | number | AvatarResponsiveSize
export type AvatarShape = 'circle' | 'square'

/**
 * Avatar 各部分的语义化 className
 */
export interface AvatarClassNames {
  /** 根节点 span.hmfw-avatar */
  root?: string
  /** 图片元素 img（src 模式下渲染） */
  img?: string
  /** 文本内容包裹层 span.hmfw-avatar-string（slot 文本模式下渲染） */
  string?: string
}

/**
 * Avatar 各部分的语义化 style
 */
export interface AvatarStyles {
  /** 根节点 span.hmfw-avatar */
  root?: CSSProperties
  /** 图片元素 img（src 模式下渲染） */
  img?: CSSProperties
  /** 文本内容包裹层 span.hmfw-avatar-string（slot 文本模式下渲染） */
  string?: CSSProperties
}

export interface AvatarProps {
  size?: AvatarSize
  shape?: AvatarShape
  src?: string
  srcSet?: string
  alt?: string
  icon?: unknown
  draggable?: boolean | 'true' | 'false'
  crossOrigin?: '' | 'anonymous' | 'use-credentials'
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  gap?: number
  /** 语义化 className */
  classNames?: AvatarClassNames
  /** 语义化 style */
  styles?: AvatarStyles
}

export interface AvatarGroupProps {
  maxCount?: number
  maxStyle?: Record<string, string>
  size?: AvatarSize
  shape?: AvatarShape
}
