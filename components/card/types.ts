import type { CSSProperties } from 'vue'

export type CardType = 'inner'
export type CardVariant = 'borderless' | 'outlined'

export interface CardLoadingConfig {
  /** 是否显示头像占位符 */
  avatar?: boolean
  /** 段落配置 */
  paragraph?: {
    /** 段落行数 */
    rows?: number
  }
}

export interface TabItem {
  key: string
  label: string
  disabled?: boolean
}

/**
 * Card 各部分的语义化 className
 */
export interface CardClassNames {
  /** 根节点 div.hmfw-card */
  root?: string
  /** 头部容器 div.hmfw-card-head */
  head?: string
  /** 标题 div.hmfw-card-head-title */
  title?: string
  /** 右侧扩展 div.hmfw-card-extra */
  extra?: string
  /** 主体内容 div.hmfw-card-body */
  body?: string
  /** 底部操作 ul.hmfw-card-actions */
  actions?: string
}

/**
 * Card 各部分的语义化 style
 */
export interface CardStyles {
  /** 根节点 div.hmfw-card */
  root?: CSSProperties
  /** 头部容器 div.hmfw-card-head */
  head?: CSSProperties
  /** 标题 div.hmfw-card-head-title */
  title?: CSSProperties
  /** 右侧扩展 div.hmfw-card-extra */
  extra?: CSSProperties
  /** 主体内容 div.hmfw-card-body */
  body?: CSSProperties
  /** 底部操作 ul.hmfw-card-actions */
  actions?: CSSProperties
}

export interface CardProps {
  title?: string
  extra?: unknown
  bordered?: boolean
  variant?: CardVariant
  hoverable?: boolean
  loading?: boolean | CardLoadingConfig
  size?: 'default' | 'small'
  type?: CardType
  cover?: unknown
  bodyStyle?: Record<string, string>
  headStyle?: Record<string, string>
  /** 标签页列表 */
  tabList?: TabItem[]
  /** 当前激活标签的 key */
  activeTabKey?: string
  /** 默认激活标签的 key */
  defaultActiveTabKey?: string
  /** 标签栏额外内容 */
  tabBarExtraContent?: unknown
  /** 标签切换回调 */
  onTabChange?: (key: string) => void
  /** 语义化 className */
  classNames?: CardClassNames
  /** 语义化 style */
  styles?: CardStyles
}

export interface CardGridProps {
  hoverable?: boolean
}

export interface CardMetaProps {
  avatar?: unknown
  title?: string
  description?: string
}
