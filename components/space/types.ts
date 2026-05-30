import type { VNode } from 'vue'

export type SpaceSize = 'small' | 'middle' | 'large' | number
export type SpaceDirection = 'horizontal' | 'vertical'
export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline'

export interface SpaceProps {
  direction?: SpaceDirection
  /** `direction="vertical"` 的简写 */
  vertical?: boolean
  size?: SpaceSize | [SpaceSize, SpaceSize]
  align?: SpaceAlign
  wrap?: boolean
  /** @deprecated 请使用 `separator` */
  split?: VNode | string
  separator?: VNode | string
}
