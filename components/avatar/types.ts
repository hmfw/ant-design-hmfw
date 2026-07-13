import type { CSSProperties, Component, VNode } from 'vue'
import type { ComponentSize } from '../config-provider'
import type { PopoverProps } from '../popover'

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

/** icon 可以是图标组件或已渲染的 VNode */
export type AvatarIcon = Component | VNode

/**
 * img 加载失败回调。返回 `false` 可阻止默认 fallback（保留 img 元素），
 * 由使用者自行处理降级逻辑；其他返回值（含 undefined）走默认 fallback。
 */
export type AvatarErrorHandler = (e: Event) => boolean | void

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
  icon?: AvatarIcon
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

/**
 * AvatarGroup 溢出配置（对齐 AntD v6 的 `max` 结构化 API）
 */
export interface AvatarGroupMax {
  /** 最多显示的头像数量 */
  count?: number
  /** 溢出计数（+N）头像的样式 */
  style?: CSSProperties
  /** 溢出头像收纳到 Popover 中展示，透传给内部 Popover */
  popover?: PopoverProps
}

export interface AvatarGroupProps {
  /**
   * 溢出配置。
   * @deprecated 请使用 `max={{ count }}`
   */
  maxCount?: number
  /**
   * 溢出计数头像样式。
   * @deprecated 请使用 `max={{ style }}`
   */
  maxStyle?: CSSProperties
  /** 溢出结构化配置 */
  max?: AvatarGroupMax
  size?: AvatarSize
  shape?: AvatarShape
}
