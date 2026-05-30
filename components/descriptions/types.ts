import type { CSSProperties } from 'vue'

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface DescriptionsItemProps {
  label?: string
  children?: unknown
  span?: number | 'filled' | Partial<Record<Breakpoint, number>>
  labelStyle?: CSSProperties
  contentStyle?: CSSProperties
}

export interface DescriptionsProps {
  title?: string
  extra?: string
  bordered?: boolean
  column?: number | Partial<Record<Breakpoint, number>>
  size?: 'default' | 'middle' | 'small' | 'medium'
  layout?: 'horizontal' | 'vertical'
  colon?: boolean
  items?: DescriptionsItemProps[]
  labelStyle?: CSSProperties
  contentStyle?: CSSProperties
}
