export type CardType = 'inner'
export type CardVariant = 'borderless' | 'outlined'

export interface CardProps {
  title?: string
  extra?: unknown
  bordered?: boolean
  variant?: CardVariant
  hoverable?: boolean
  loading?: boolean
  size?: 'default' | 'small'
  type?: CardType
  cover?: unknown
  bodyStyle?: Record<string, string>
  headStyle?: Record<string, string>
}

export interface CardGridProps {
  hoverable?: boolean
}

export interface CardMetaProps {
  avatar?: unknown
  title?: string
  description?: string
}
