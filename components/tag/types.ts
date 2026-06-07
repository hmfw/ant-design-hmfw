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
  /** 自定义关闭图标。false 时隐藏关闭按钮；true/undefined 使用默认图标；也可传入 VNode 或渲染函数 */
  closeIcon?: boolean | object | (() => unknown)
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
