import type { VNode, CSSProperties } from 'vue'

export type QRCodeStatus = 'active' | 'expired' | 'loading' | 'scanned'
export type QRCodeErrorLevel = 'L' | 'M' | 'Q' | 'H'
export type QRCodeType = 'canvas' | 'svg'

export interface StatusRenderInfo {
  status: Exclude<QRCodeStatus, 'active'>
  onRefresh?: () => void
}

/**
 * QRCode 各部分的语义化 className
 */
export interface QRCodeClassNames {
  /** 根节点 div.hmfw-qrcode */
  root?: string
  /** 状态遮罩层 div.hmfw-qrcode-cover（非 active 状态下渲染） */
  cover?: string
}

/**
 * QRCode 各部分的语义化 style
 */
export interface QRCodeStyles {
  /** 根节点 div.hmfw-qrcode */
  root?: CSSProperties
  /** 状态遮罩层 div.hmfw-qrcode-cover（非 active 状态下渲染） */
  cover?: CSSProperties
}

export interface QRCodeProps {
  value: string
  type?: QRCodeType
  size?: number
  color?: string
  bgColor?: string
  errorLevel?: QRCodeErrorLevel
  status?: QRCodeStatus
  icon?: string
  iconSize?: number | { width: number; height: number }
  bordered?: boolean
  statusRender?: (info: StatusRenderInfo) => VNode | null
  marginSize?: number
  onRefresh?: () => void
  /** 语义化 className，用于定制各子节点的 class */
  classNames?: QRCodeClassNames
  /** 语义化 style，用于定制各子节点的内联样式 */
  styles?: QRCodeStyles
}
