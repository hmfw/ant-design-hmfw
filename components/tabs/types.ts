import type { VNode, CSSProperties } from 'vue'
import type { ComponentSize } from '../config-provider'

export type TabsType = 'line' | 'card' | 'editable-card'
export type TabsPosition = 'top' | 'right' | 'bottom' | 'left'

export interface TabItem {
  key: string
  label: string | VNode
  /** Tab 内容，支持 VNode 或字符串 */
  children?: VNode | string
  disabled?: boolean
  closable?: boolean
  icon?: VNode
  closeIcon?: VNode
  forceRender?: boolean
  destroyInactiveTabPane?: boolean
}

export interface TabBarExtraContent {
  left?: VNode
  right?: VNode
}

export interface AnimatedConfig {
  inkBar?: boolean
  tabPane?: boolean
}

/**
 * Tabs 各部分的语义化 className
 */
export interface TabsClassNames {
  /** 根节点 div.hmfw-tabs */
  root?: string
  /** 标签栏容器 div.hmfw-tabs-nav */
  nav?: string
  /** 单个标签 div.hmfw-tabs-tab */
  tab?: string
  /** 激活标签 div.hmfw-tabs-tab-active（与 tab 叠加） */
  tabActive?: string
  /** 标签图标 span.hmfw-tabs-tab-icon */
  tabIcon?: string
  /** 墨条 div.hmfw-tabs-ink-bar（仅 line 类型） */
  inkBar?: string
  /** 内容容器 div.hmfw-tabs-content */
  content?: string
  /** 内容面板 div.hmfw-tabs-tabpane */
  tabpane?: string
}

/**
 * Tabs 各部分的语义化 style
 */
export interface TabsStyles {
  /** 根节点 div.hmfw-tabs */
  root?: CSSProperties
  /** 标签栏容器 div.hmfw-tabs-nav */
  nav?: CSSProperties
  /** 单个标签 div.hmfw-tabs-tab */
  tab?: CSSProperties
  /** 激活标签 div.hmfw-tabs-tab-active */
  tabActive?: CSSProperties
  /** 标签图标 span.hmfw-tabs-tab-icon */
  tabIcon?: CSSProperties
  /** 墨条 div.hmfw-tabs-ink-bar */
  inkBar?: CSSProperties
  /** 内容容器 div.hmfw-tabs-content */
  content?: CSSProperties
  /** 内容面板 div.hmfw-tabs-tabpane */
  tabpane?: CSSProperties
}

export interface TabsProps {
  /**
   * 受控模式下的当前激活 key
   * @remarks 支持 v-model:activeKey 双向绑定
   */
  activeKey?: string
  items?: TabItem[]
  type?: TabsType
  size?: ComponentSize
  tabPosition?: TabsPosition
  centered?: boolean
  animated?: boolean | AnimatedConfig
  tabBarExtraContent?: VNode | TabBarExtraContent
  tabBarGutter?: number
  tabBarStyle?: CSSProperties
  hideAdd?: boolean
  addIcon?: VNode
  removeIcon?: VNode
  destroyInactiveTabPane?: boolean
  /** 语义化 className */
  classNames?: TabsClassNames
  /** 语义化 style */
  styles?: TabsStyles
}

/**
 * Tabs 事件类型
 * @remarks edit 事件通过 action 参数自动窄化 targetKey 类型：
 *   - add 时 targetKey 为 MouseEvent
 *   - remove 时 targetKey 为 string
 */
export interface TabsEmits {
  (e: 'update:activeKey', key: string): void
  (e: 'change', key: string): void
  (e: 'tabClick', key: string, event: MouseEvent): void
  (e: 'edit', targetKey: MouseEvent, action: 'add'): void
  (e: 'edit', targetKey: string, action: 'remove'): void
}
