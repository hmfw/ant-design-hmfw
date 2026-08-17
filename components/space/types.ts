import type { VNode, CSSProperties } from 'vue'

export type SpaceSize = 'small' | 'middle' | 'large' | number
export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'

export interface SpaceClassNames {
  root?: string // 根容器
  item?: string // 子元素容器
  split?: string // 分隔符容器
}

export interface SpaceStyles {
  root?: CSSProperties
  item?: CSSProperties
  split?: CSSProperties
}

export interface SpaceProps {
  /** 间距方向（推荐使用，优先级高于 direction） */
  orientation?: SpaceDirection
  /** 间距方向（兼容旧版，推荐使用 orientation） */
  direction?: SpaceDirection
  /** `orientation="vertical"` 的简写 */
  vertical?: boolean
  size?: SpaceSize | [SpaceSize, SpaceSize]
  align?: SpaceAlign
  wrap?: boolean
  separator?: VNode | string
  classNames?: SpaceClassNames
  styles?: SpaceStyles
}
