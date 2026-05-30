import type { VNode } from 'vue'

export type QRCodeStatus = 'active' | 'expired' | 'loading' | 'scanned'
export type QRCodeErrorLevel = 'L' | 'M' | 'Q' | 'H'
export type QRCodeType = 'canvas' | 'svg'

export interface StatusRenderInfo {
  status: Exclude<QRCodeStatus, 'active'>
  onRefresh?: () => void
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
}
