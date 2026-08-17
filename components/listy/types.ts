import type { VNode, CSSProperties } from 'vue'

/**
 * 滚动对齐方式
 */
export type ScrollAlign = 'top' | 'bottom' | 'auto'

/**
 * 滚动配置
 */
export interface ListyScrollToConfig {
  /** 目标索引 */
  index: number
  /** 对齐方式 */
  align?: ScrollAlign
  /** 偏移量 */
  offset?: number
}

/**
 * Listy 实例方法
 */
export interface ListyRef {
  /** 滚动到指定索引 */
  scrollTo: (config: number | ListyScrollToConfig) => void
  /** 获取当前滚动位置 */
  getScrollInfo: () => { scrollTop: number; scrollHeight: number; clientHeight: number }
}

/**
 * 分组数据项
 */
export interface ListyGroupItem<T = any> {
  /** 分组标题 */
  group: string | VNode
  /** 分组数据 */
  items: T[]
  /** 分组是否粘性定位（默认 true） */
  sticky?: boolean
}

/**
 * Listy 语义化 className
 */
export interface ListyClassNames {
  /** 根容器 */
  root?: string
  /** 列表项 */
  item?: string
  /** 分组标题 */
  groupHeader?: string
}

/**
 * Listy 语义化 styles
 */
export interface ListyStyles {
  /** 根容器 */
  root?: CSSProperties
  /** 列表项 */
  item?: CSSProperties
  /** 分组标题 */
  groupHeader?: CSSProperties
}

/**
 * Listy Props
 */
export interface ListyProps<T = any, K extends string | number = string | number> {
  /** 数据源 */
  data?: T[]
  /** 分组数据源（与 data 互斥） */
  groups?: ListyGroupItem<T>[]
  /** 渲染函数 */
  children?: (item: T, index: number) => VNode
  /** 容器高度（必需，用于虚拟滚动计算） */
  height?: number | string
  /** 是否启用虚拟滚动（默认 false） */
  virtual?: boolean
  /** 虚拟滚动模式下的项高度（默认 40） */
  itemHeight?: number
  /** 数据项唯一键提取函数 */
  itemKey?: string | ((item: T, index: number) => K)
  /** 自定义前缀 */
  prefixCls?: string
  /** 语义化 className */
  classNames?: ListyClassNames
  /** 语义化 styles */
  styles?: ListyStyles
  /** 滚动事件 */
  onScroll?: (event: Event) => void
}
