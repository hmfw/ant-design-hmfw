export interface AnchorLinkItem {
  key?: string
  href: string
  title: string
  target?: string
  targetOffset?: number
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
  getCurrentAnchor?: (activeLink: string) => string
  getContainer?: () => HTMLElement | Window
}

export interface AnchorLinkProps {
  href: string
  title: string
  target?: string
  replace?: boolean
  targetOffset?: number
}
