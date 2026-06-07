import type { VNode, CSSProperties } from 'vue'
import type { MenuProps } from '../menu'

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
  /**
   * 下拉菜单配置
   */
  menu?: MenuProps
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
  /**
   * 自定义渲染面包屑项
   * @param item 当前项
   * @param params 参数对象
   * @param items 所有项
   * @param paths 路径数组
   */
  itemRender?: (
    item: BreadcrumbItemType,
    params: Record<string, any>,
    items: BreadcrumbItemType[],
    paths: string[]
  ) => VNode
}
