import type { CSSProperties, VNode } from 'vue'

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

/** 标签变体：填充 / 实色 / 描边 */
export type TagVariant = 'filled' | 'solid' | 'outlined'

/**
 * Tag 各部分的语义化 className
 */
export interface TagClassNames {
  /** 根节点 span.hmfw-tag（href 存在时为 a.hmfw-tag） */
  root?: string
  /** 前置图标 .hmfw-tag-icon */
  icon?: string
  /** 内容包裹节点 .hmfw-tag-content（仅在存在 icon 时渲染） */
  content?: string
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
  /** 内容包裹节点 .hmfw-tag-content（仅在存在 icon 时渲染） */
  content?: CSSProperties
  /** 关闭图标 span.hmfw-tag-close-icon */
  closeIcon?: CSSProperties
}

/** 自定义关闭图标：false 隐藏；true/undefined 默认图标；也可传入组件、VNode 或渲染函数 */
export type TagCloseIcon = boolean | VNode | object | (() => VNode)

export interface TagProps {
  color?: TagColor
  /** 变体样式；未显式设置时由 bordered 推导（bordered=false → filled，否则 outlined） */
  variant?: TagVariant
  closable?: boolean
  /** 自定义关闭图标。false 时隐藏关闭按钮；true/undefined 使用默认图标；也可传入组件、VNode 或渲染函数 */
  closeIcon?: TagCloseIcon
  /** 是否有边框。已由 variant 取代，保留以兼容旧用法 */
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
  /** 选中状态（完全受控） */
  checked?: boolean
  /** 前置图标 */
  icon?: unknown
  /** 禁用状态 */
  disabled?: boolean
}

/** CheckableTagGroup 选项 */
export interface CheckableTagOption {
  value: string | number
  label?: unknown
  className?: string
  style?: CSSProperties
  disabled?: boolean
}

export interface CheckableTagGroupClassNames {
  root?: string
  item?: string
}

export interface CheckableTagGroupStyles {
  root?: CSSProperties
  item?: CSSProperties
}

export interface CheckableTagGroupProps {
  /** 选项列表，元素可为对象或原始值 */
  options?: (CheckableTagOption | string | number)[]
  /** 受控值 */
  value?: (string | number) | (string | number)[] | null
  /** 非受控默认值 */
  defaultValue?: (string | number) | (string | number)[] | null
  /** 是否多选 */
  multiple?: boolean
  /** 整组禁用 */
  disabled?: boolean
  classNames?: CheckableTagGroupClassNames
  styles?: CheckableTagGroupStyles
}
