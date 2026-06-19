import type { CSSProperties } from 'vue'

/**
 * Empty 各部分的语义化 className
 */
export interface EmptyClassNames {
  /** 根节点 div.hmfw-empty */
  root?: string
  /** 图片容器 div.hmfw-empty-image */
  image?: string
  /** 描述文本 div.hmfw-empty-description */
  description?: string
  /** 底部操作区 div.hmfw-empty-footer */
  footer?: string
}

/**
 * Empty 各部分的语义化 style
 */
export interface EmptyStyles {
  /** 根节点 div.hmfw-empty */
  root?: CSSProperties
  /** 图片容器 div.hmfw-empty-image */
  image?: CSSProperties
  /** 描述文本 div.hmfw-empty-description */
  description?: CSSProperties
  /** 底部操作区 div.hmfw-empty-footer */
  footer?: CSSProperties
}

export interface EmptyProps {
  image?: string | false
  imageStyle?: Record<string, string>
  /** 图片宽度，数字按 px 处理，亦可传带单位字符串。优先级低于 imageStyle.width */
  imageWidth?: number | string
  /** 图片高度，数字按 px 处理，亦可传带单位字符串。优先级低于 imageStyle.height */
  imageHeight?: number | string
  description?: string | false
  /** 语义化 className */
  classNames?: EmptyClassNames
  /** 语义化 style */
  styles?: EmptyStyles
}
