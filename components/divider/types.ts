import type { CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type DividerType = 'horizontal' | 'vertical'
export type DividerOrientation = 'left' | 'right' | 'center'
export type DividerVariant = 'dashed' | 'dotted' | 'solid'
/** 语义化 className */
export interface DividerClassNames {
  root?: string // 分割线根容器
  text?: string // 分割线中的文字容器
}

/** 语义化 style */
export interface DividerStyles {
  root?: CSSProperties
  text?: CSSProperties
}

export interface DividerProps {
  type?: DividerType
  /** 是否虚线，等价于 `variant="dashed"` */
  dashed?: boolean
  /**
   * 分割线样式，优先级高于 `dashed`
   * @default 'solid'
   */
  variant?: DividerVariant
  orientation?: DividerOrientation
  orientationMargin?: string | number
  plain?: boolean
  /** 分割线间距大小（仅水平分割线生效） */
  size?: ComponentSize
  /** 语义化结构 class */
  classNames?: DividerClassNames
  /** 语义化结构 style */
  styles?: DividerStyles
}
