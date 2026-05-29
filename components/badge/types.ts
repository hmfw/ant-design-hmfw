export type BadgeStatus = 'success' | 'processing' | 'default' | 'error' | 'warning'
export type BadgeSize = 'default' | 'small'

export interface BadgeProps {
  count?: number | string
  dot?: boolean
  showZero?: boolean
  overflowCount?: number
  status?: BadgeStatus
  color?: string
  text?: string
  size?: BadgeSize
  offset?: [number, number]
  title?: string
}
