import type { CSSProperties } from 'vue'

export interface AnchorLinkItem {
  key?: string
  href: string
  title: string
  target?: string
  targetOffset?: number
  children?: AnchorLinkItem[]
}

export interface AnchorClassNames {
  wrapper?: string // 外层滚动容器
  root?: string // 锚点根容器
  ink?: string // 指示器滑块
  link?: string // 链接项容器
  linkActive?: string // 激活状态的链接项
  title?: string // 链接文本
  titleActive?: string // 激活状态的链接文本
}

export interface AnchorStyles {
  wrapper?: CSSProperties // 外层滚动容器
  root?: CSSProperties // 锚点根容器
  ink?: CSSProperties // 指示器滑块
  link?: CSSProperties // 链接项容器
  linkActive?: CSSProperties // 激活状态的链接项
  title?: CSSProperties // 链接文本
  titleActive?: CSSProperties // 激活状态的链接文本
}

export interface AnchorProps {
  items?: AnchorLinkItem[]
  affix?: boolean
  offsetTop?: number
  bounds?: number
  direction?: 'vertical' | 'horizontal'
  replace?: boolean
  getCurrentAnchor?: (activeLink: string) => string
  getContainer?: () => HTMLElement | Window
  classNames?: AnchorClassNames
  styles?: AnchorStyles
}

export interface AnchorLinkProps {
  href: string
  title: string
  target?: string
  replace?: boolean
  targetOffset?: number
}
