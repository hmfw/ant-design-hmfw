import type { VNode, CSSProperties } from 'vue'
import type { MenuProps } from '../menu'
import type { DropdownProps } from '../dropdown'

/**
 * 面包屑下拉菜单项
 *
 * 在 MenuProps 基础上扩展 `path`/`title`：
 * - `title` 作为 `label` 的别名
 * - `path` 会与当前项的 `href` 拼接成链接（`${href}${path}`）
 */
export interface BreadcrumbMenuItem {
  key?: string | number
  label?: string | VNode
  /** `label` 的别名 */
  title?: string | VNode
  /** 直接指定链接 */
  href?: string
  /** 与当前项 href 拼接：`${href}${path}` */
  path?: string
  [key: string]: any
}

/**
 * 面包屑下拉菜单配置
 */
export interface BreadcrumbMenu extends Omit<MenuProps, 'items'> {
  items?: BreadcrumbMenuItem[]
}

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
  menu?: BreadcrumbMenu
  /**
   * 透传给 Dropdown 的属性（如 placement、trigger 等）
   */
  dropdownProps?: DropdownProps
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

/**
 * Breadcrumb 各部分的语义化 className
 */
export interface BreadcrumbClassNames {
  /** 根节点 nav.hmfw-breadcrumb */
  root?: string
  /** 列表容器 ol */
  list?: string
  /** 面包屑项 li.hmfw-breadcrumb-item */
  item?: string
  /** 链接/文本 a.hmfw-breadcrumb-link 或 span.hmfw-breadcrumb-link */
  link?: string
  /** 分隔符 li.hmfw-breadcrumb-separator */
  separator?: string
  /** 带下拉菜单的链接内容 span.hmfw-breadcrumb-overlay-link */
  overlayLink?: string
}

/**
 * Breadcrumb 各部分的语义化 style
 */
export interface BreadcrumbStyles {
  /** 根节点 nav.hmfw-breadcrumb */
  root?: CSSProperties
  /** 列表容器 ol */
  list?: CSSProperties
  /** 面包屑项 li.hmfw-breadcrumb-item */
  item?: CSSProperties
  /** 链接/文本 a.hmfw-breadcrumb-link 或 span.hmfw-breadcrumb-link */
  link?: CSSProperties
  /** 分隔符 li.hmfw-breadcrumb-separator */
  separator?: CSSProperties
  /** 带下拉菜单的链接内容 span.hmfw-breadcrumb-overlay-link */
  overlayLink?: CSSProperties
}

export interface BreadcrumbProps {
  items?: ItemType[]
  separator?: string | VNode
  params?: Record<string, any>
  /** 自定义下拉菜单的展开图标，默认 DownOutlined */
  dropdownIcon?: VNode
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
    paths: string[],
  ) => VNode
  /** 语义化 className */
  classNames?: BreadcrumbClassNames
  /** 语义化 style */
  styles?: BreadcrumbStyles
}
