export type TagColor =
  | 'default'
  | 'success'
  | 'processing'
  | 'error'
  | 'warning'
  | 'magenta'
  | 'red'
  | 'volcano'
  | 'orange'
  | 'gold'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'blue'
  | 'geekblue'
  | 'purple'
  | string

export interface TagProps {
  color?: TagColor
  closable?: boolean
  closeIcon?: unknown
  bordered?: boolean
  icon?: unknown
}

export interface CheckableTagProps {
  checked?: boolean
}
