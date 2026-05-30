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
  /** 渲染为链接 */
  href?: string
  target?: string
  /** 禁用状态 */
  disabled?: boolean
}

export interface CheckableTagProps {
  checked?: boolean
}
