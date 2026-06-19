import type { CSSProperties } from 'vue'

export type ResultStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'

/**
 * Result 各部分的语义化 className
 */
export interface ResultClassNames {
  /** 根节点 div.hmfw-result */
  root?: string
  /** 图标/插画容器 div.hmfw-result-icon */
  icon?: string
  /** 标题 div.hmfw-result-title */
  title?: string
  /** 副标题 div.hmfw-result-subtitle */
  subtitle?: string
  /** 操作区 div.hmfw-result-extra */
  extra?: string
  /** 内容主体 div.hmfw-result-body（default slot） */
  content?: string
}

/**
 * Result 各部分的语义化 style
 */
export interface ResultStyles {
  /** 根节点 div.hmfw-result */
  root?: CSSProperties
  /** 图标/插画容器 div.hmfw-result-icon */
  icon?: CSSProperties
  /** 标题 div.hmfw-result-title */
  title?: CSSProperties
  /** 副标题 div.hmfw-result-subtitle */
  subtitle?: CSSProperties
  /** 操作区 div.hmfw-result-extra */
  extra?: CSSProperties
  /** 内容主体 div.hmfw-result-body（default slot） */
  content?: CSSProperties
}
