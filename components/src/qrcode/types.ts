export type QRCodeStatus = 'active' | 'expired' | 'loading' | 'scanned'
export type QRCodeErrorLevel = 'L' | 'M' | 'Q' | 'H'

export interface QRCodeProps {
  value: string
  size?: number
  color?: string
  bgColor?: string
  errorLevel?: QRCodeErrorLevel
  status?: QRCodeStatus
  icon?: string
  iconSize?: number
  bordered?: boolean
}
