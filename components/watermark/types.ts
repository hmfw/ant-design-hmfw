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
}
