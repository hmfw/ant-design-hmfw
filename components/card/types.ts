export interface CardProps {
  title?: string
  extra?: unknown
  bordered?: boolean
  hoverable?: boolean
  loading?: boolean
  size?: 'default' | 'small'
  cover?: unknown
  bodyStyle?: Record<string, string>
  headStyle?: Record<string, string>
}

export interface CardMetaProps {
  avatar?: unknown
  title?: string
  description?: string
}
