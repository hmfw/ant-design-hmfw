import type { CSSProperties } from 'vue'

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

/**
 * Tag 各部分的语义化 className
 */
export interface TagClassNames {
  /** 根节点 span.hmfw-tag（href 存在时为 a.hmfw-tag） */
  root?: string
  /** 前置图标 .hmfw-tag-icon */
  icon?: string
  /** 关闭图标 span.hmfw-tag-close-icon */
  closeIcon?: string
}

/**
 * Tag 各部分的语义化 style
 */
export interface TagStyles {
  /** 根节点 span.hmfw-tag（href 存在时为 a.hmfw-tag） */
  root?: CSSProperties
  /** 前置图标 .hmfw-tag-icon */
  icon?: CSSProperties
  /** 关闭图标 span.hmfw-tag-close-icon */
  closeIcon?: CSSProperties
}

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
  /** 语义化 className */
  classNames?: TagClassNames
  /** 语义化 style */
  styles?: TagStyles
}

export interface CheckableTagProps {
  checked?: boolean
}
