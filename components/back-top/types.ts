import type { CSSProperties } from 'vue'

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
   * 根节点类名
   */
  rootClassName?: string

  /**
   * 自定义样式
   */
  style?: CSSProperties

  /**
   * 自定义前缀
   */
  prefixCls?: string
}
