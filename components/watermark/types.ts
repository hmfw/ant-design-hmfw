export interface WatermarkFont {
  color?: string
  fontSize?: number | string
  fontWeight?: 'normal' | 'lighter' | 'bold' | 'bolder' | number
  fontStyle?: 'none' | 'normal' | 'italic' | 'oblique'
  fontFamily?: string
  textAlign?: CanvasTextAlign
}

export interface WatermarkProps {
  zIndex?: number
  rotate?: number
  width?: number
  height?: number
  image?: string
  content?: string | string[]
  font?: WatermarkFont
  gap?: [number, number]
  offset?: [number, number]
  inherit?: boolean
  /** 根节点附加 className */
  rootClassName?: string
  /**
   * 水印节点被移除时触发
   * @since 6.0.0
   */
  onRemove?: () => void
}
