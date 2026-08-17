import type { CSSProperties, VNode } from 'vue'

export type Orientation = 'horizontal' | 'vertical'

export type ShowCollapsibleIconMode = boolean | 'auto'

export interface SplitterClassNames {
  root?: string
  panel?: string
  dragger?: string | { default?: string; active?: string }
}

export interface SplitterStyles {
  root?: CSSProperties
  panel?: CSSProperties
  dragger?: { default?: CSSProperties; active?: CSSProperties }
}

export interface SplitterProps {
  /**
   * 折叠配置。设置 `motion: true` 启用折叠动画
   */
  collapsible?: {
    motion?: boolean
    icon?: {
      start?: VNode
      end?: VNode
    }
  }
  /**
   * 方向
   * @default 'horizontal'
   */
  orientation?: Orientation
  /**
   * 垂直布局（简写），与 orientation 共存时 orientation 优先
   * @default false
   */
  vertical?: boolean
  /**
   * 根节点额外类名
   */
  rootClassName?: string
  /**
   * 隐藏时销毁内容
   * @default false
   */
  destroyOnHidden?: boolean
  /**
   * 拖拽图标
   */
  draggerIcon?: VNode
  /**
   * 双击拖拽条回调
   */
  onDraggerDoubleClick?: (index: number) => void
  /**
   * 开始调整大小回调
   */
  onResizeStart?: (sizes: number[]) => void
  /**
   * 调整大小回调
   */
  onResize?: (sizes: number[]) => void
  /**
   * 结束调整大小回调
   */
  onResizeEnd?: (sizes: number[]) => void
  /**
   * 折叠回调
   */
  onCollapse?: (collapsed: boolean[], sizes: number[]) => void
  /**
   * 懒加载模式（拖拽时预览，松开后应用）
   * @default false
   */
  lazy?: boolean
  /**
   * 语义化类名
   */
  classNames?: SplitterClassNames
  /**
   * 语义化样式
   */
  styles?: SplitterStyles
}

export interface PanelProps {
  /**
   * 自定义类名
   */
  className?: string
  /**
   * 自定义样式
   */
  style?: CSSProperties
  /**
   * 最小尺寸
   */
  min?: number | string
  /**
   * 最大尺寸
   */
  max?: number | string
  /**
   * 受控尺寸
   */
  size?: number | string
  /**
   * 折叠配置
   */
  collapsible?: boolean | { start?: boolean; end?: boolean; showCollapsibleIcon?: ShowCollapsibleIconMode }
  /**
   * 是否可调整大小
   * @default true
   */
  resizable?: boolean
  /**
   * 默认尺寸
   */
  defaultSize?: number | string
  /**
   * 隐藏时销毁内容
   */
  destroyOnHidden?: boolean
}

// ================ 内部类型 ================

// class/style 经 attrs 链路传递（Vue 保留属性），不声明为 props
export interface InternalPanelProps extends Omit<PanelProps, 'className' | 'style'> {
  prefixCls?: string
  supportMotion?: boolean
}

export interface ResizableInfo {
  resizable: boolean
  startCollapsible: boolean
  endCollapsible: boolean
  showStartCollapsibleIcon: ShowCollapsibleIconMode
  showEndCollapsibleIcon: ShowCollapsibleIconMode
}

export interface ItemType extends Omit<PanelProps, 'collapsible'> {
  collapsible: {
    start?: boolean
    end?: boolean
    showCollapsibleIcon: 'auto' | boolean
  }
}

// ================ 事件类型 ================

/**
 * 调整大小回调
 */
export type SplitterResizeHandler = (sizes: number[]) => void

/**
 * 折叠/展开回调
 */
export type SplitterCollapseHandler = (collapsed: boolean[], sizes: number[]) => void

/**
 * 双击拖拽条回调
 */
export type SplitterDraggerDoubleClickHandler = (index: number) => void
