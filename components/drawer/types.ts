import type { CSSProperties } from 'vue'

export interface DrawerClassNames {
  mask?: string // 遮罩层
  wrapper?: string // 抽屉内容包裹层
  content?: string // 抽屉内容区
  header?: string // 头部区域
  title?: string // 标题
  extra?: string // 右上角扩展区域
  body?: string // 主体内容区
  footer?: string // 页脚区域
}

export interface DrawerStyles {
  mask?: CSSProperties
  wrapper?: CSSProperties
  content?: CSSProperties
  header?: CSSProperties
  title?: CSSProperties
  extra?: CSSProperties
  body?: CSSProperties
  footer?: CSSProperties
}
