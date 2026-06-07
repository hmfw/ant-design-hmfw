export interface EmptyProps {
  image?: string | false
  imageStyle?: Record<string, string>
  /** 图片宽度，数字按 px 处理，亦可传带单位字符串。优先级低于 imageStyle.width */
  imageWidth?: number | string
  /** 图片高度，数字按 px 处理，亦可传带单位字符串。优先级低于 imageStyle.height */
  imageHeight?: number | string
  description?: string | false
}
