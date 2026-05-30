import type { VNode, CSSProperties } from 'vue'

export interface BreadcrumbItemType {
  key?: string | number
  /**
   * Different with `path`. Directly set the link of this item.
   */
  href?: string
  /**
   * Different with `href`. It will concat all prev `path` to the current one.
   */
  path?: string
  title?: string | number | VNode
  className?: string
  style?: CSSProperties
  onClick?: (e: MouseEvent) => void
  /** Custom data attributes */
  [key: `data-${string}`]: any
  /** ARIA attributes */
  [key: `aria-${string}`]: any
}

export interface BreadcrumbSeparatorType {
  type: 'separator'
  separator?: string | VNode
  key?: string | number
}

export type ItemType = BreadcrumbItemType | BreadcrumbSeparatorType

export interface BreadcrumbProps {
  items?: ItemType[]
  separator?: string | VNode
  params?: Record<string, any>
}
