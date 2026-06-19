import type { CSSProperties } from 'vue'

export type SpinSize = 'small' | 'default' | 'large'

/** 语义化结构 className */
export interface SpinClassNames {
  root?: string // 加载组件根节点（<span> 或 fullscreen 模式下的遮罩 <div>）
  dot?: string // 加载指示符容器（四点动画 / 自定义 indicator）
  container?: string // 嵌套加载时浮层容器（覆盖在内容之上）
  description?: string // 描述文案（tip / description）
}

/** 语义化结构 style */
export interface SpinStyles {
  root?: CSSProperties
  dot?: CSSProperties
  container?: CSSProperties
  description?: CSSProperties
}

export interface SpinProps {
  spinning?: boolean
  size?: SpinSize
  tip?: string
  /** tip 的新名（与 AntD v6 对齐） */
  description?: string
  delay?: number
  fullscreen?: boolean
  /**
   * 进度百分比，与 AntD v6 对齐。
   * - number：受控显示环形进度
   * - 'auto'：spinning 期间自动模拟递增
   */
  percent?: number | 'auto'
  /** 语义化结构 class */
  classNames?: SpinClassNames
  /** 语义化结构 style */
  styles?: SpinStyles
}
