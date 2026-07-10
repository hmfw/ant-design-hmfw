import type { CSSProperties } from 'vue'

/**
 * BackTop 各部分的语义化 className
 */
export interface BackTopClassNames {
  /** 根节点 div.hmfw-back-top */
  root?: string
  /** 默认内容容器 div.hmfw-back-top-content */
  content?: string
  /** 图标容器 div.hmfw-back-top-icon */
  icon?: string
}

/**
 * BackTop 各部分的语义化 style
 */
export interface BackTopStyles {
  /** 根节点 div.hmfw-back-top */
  root?: CSSProperties
  /** 默认内容容器 div.hmfw-back-top-content */
  content?: CSSProperties
  /** 图标容器 div.hmfw-back-top-icon */
  icon?: CSSProperties
}

export interface BackTopProps {
  /**
   * 滚动高度达到此参数值才出现 BackTop
   * @default 400
   */
  visibilityHeight?: number

  /**
   * 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
   * @default () => window
   */
  target?: () => HTMLElement | Window | Document

  /**
   * 回到顶部所需时间（ms）
   * @default 450
   */
  duration?: number

  /**
   * 自定义类名
   */
  className?: string

  /**
   * 自定义样式
   */
  style?: CSSProperties

  /**
   * 自定义前缀
   */
  prefixCls?: string

  /**
   * 语义化 className
   */
  classNames?: BackTopClassNames

  /**
   * 语义化 style
   */
  styles?: BackTopStyles
}
