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
}

export interface CardGridProps {
  hoverable?: boolean
}

export interface CardMetaProps {
  avatar?: unknown
  title?: string
  description?: string
}
