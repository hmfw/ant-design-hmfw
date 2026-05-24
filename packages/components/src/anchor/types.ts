export interface AnchorLinkItem {
  key?: string
  href: string
  title: string
  children?: AnchorLinkItem[]
}

export interface AnchorProps {
  items?: AnchorLinkItem[]
  affix?: boolean
  offsetTop?: number
  bounds?: number
  targetOffset?: number
  direction?: 'vertical' | 'horizontal'
  replace?: boolean
  getCurrentAnchor?: () => string
  getContainer?: () => HTMLElement | Window
}
