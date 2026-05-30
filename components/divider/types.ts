export type DividerType = 'horizontal' | 'vertical'
export type DividerOrientation = 'left' | 'right' | 'center'
export type DividerVariant = 'dashed' | 'dotted' | 'solid'
export type DividerSize = 'small' | 'middle' | 'large'

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
  size?: DividerSize
}
