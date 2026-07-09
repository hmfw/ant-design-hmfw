import { defineComponent, h, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type {
  ItemType,
  BreadcrumbItemType,
  BreadcrumbSeparatorType,
  BreadcrumbMenu,
  BreadcrumbProps,
  BreadcrumbClassNames,
  BreadcrumbStyles,
  BreadcrumbItemRender,
} from './types'
import type { MenuProps } from '../menu'
import { Dropdown } from '../dropdown'
import { DownOutlined } from '@hmfw/icons'

const getPath = (params: Record<string, any>, path?: string) => {
  if (path === undefined) {
    return path
  }
  let mergedPath = (path || '').replace(/^\//, '')
  Object.keys(params).forEach((key) => {
    mergedPath = mergedPath.replace(`:${key}`, params[key])
  })
  return mergedPath
}

const getBreadcrumbName = (item: BreadcrumbItemType, params: Record<string, any>) => {
  const { title } = item
  if (title === null || title === undefined) {
    return null
  }
  if (typeof title === 'string') {
    const paramsKeys = Object.keys(params).join('|')
    // params 为空时跳过无意义的正则匹配，避免 /:()/g 匹配到标题中的独立 : 字符
    if (!paramsKeys) {
      return title
    }
    return title.replace(new RegExp(`:(${paramsKeys})`, 'g'), (replacement, key) => params[key] || replacement)
  }
  // number / VNode 类型的 title 不包含 :param 占位符，原样返回
  return title
}

// 组件内部已处理的属性，不应透传给底层 DOM 元素
const INTERNAL_KEYS = new Set([
  'key',
  'href',
  'path',
  'title',
  'className',
  'style',
  'onClick',
  'menu',
  'dropdownProps',
])

/**
 * 从 item 中提取需要透传给底层 DOM 元素（<a> / <span>）的属性，
 * 过滤掉组件内部已消费的 key，其余全部透传（包括 data-* / aria-* / target / rel 等）。
 */
const pickAttrs = (item: Record<string, any>) => {
  const attrs: Record<string, any> = {}
  Object.keys(item).forEach((key) => {
    if (!INTERNAL_KEYS.has(key)) {
      attrs[key] = item[key]
    }
  })
  return attrs
}

/**
 * 归一化面包屑下拉菜单：
 * - `title` 作为 `label` 的别名
 * - `path` 与当前项 href 拼接成 `<a>` 链接
 * - 缺省 key 时用索引兜底
 */
const normalizeMenu = (menu: BreadcrumbMenu, href?: string): MenuProps => {
  const { items, ...restMenu } = menu
  return {
    ...restMenu,
    items: items?.map(({ key, title, label, path, ...itemProps }, index) => {
      let mergedLabel: string | VNode | undefined = label ?? title
      if (path) {
        mergedLabel = h('a', { href: `${href ?? ''}${path}` }, mergedLabel)
      }
      return {
        ...itemProps,
        key: String(key ?? index),
        // Menu 组件的 items.label 类型为 string，但运行时直接渲染，VNode 也合法；
        // 此处 menu.path 会生成 <a> VNode，以 as any 透传绕过类型检查
        label: mergedLabel as any,
      }
    }),
  } as MenuProps
}

// Props 定义（使用 satisfies 确保与 BreadcrumbProps 类型一致）
const breadcrumbProps = {
  items: { type: Array as PropType<ItemType[]>, default: undefined },
  separator: { type: [String, Object] as PropType<string | VNode>, default: '/' },
  params: { type: Object as PropType<Record<string, any>>, default: () => ({}) },
  dropdownIcon: { type: Object as PropType<VNode>, default: undefined },
  itemRender: { type: Function as PropType<BreadcrumbItemRender>, default: undefined },
  classNames: { type: Object as PropType<BreadcrumbClassNames>, default: undefined },
  styles: { type: Object as PropType<BreadcrumbStyles>, default: undefined },
} satisfies Record<keyof BreadcrumbProps, any>

export const Breadcrumb = defineComponent<BreadcrumbProps>({
  name: 'Breadcrumb',
  props: breadcrumbProps,
  setup(props) {
    const prefixCls = usePrefixCls('breadcrumb')

    const renderItem = (item: BreadcrumbItemType, children: any, href?: string) => {
      if (children === null || children === undefined) {
        return null
      }

      const { className, onClick, menu, dropdownProps, ...restItem } = item
      const passedProps = {
        ...pickAttrs(restItem),
        onClick,
      }

      const dropdownIcon = props.dropdownIcon ?? <DownOutlined class="hmfw-icon" />

      // 如果有下拉菜单，包裹在 Dropdown 中
      if (menu && menu.items && menu.items.length > 0) {
        const mergedMenu = normalizeMenu(menu, href)
        const linkContent =
          href !== undefined ? (
            <a
              {...passedProps}
              class={cls(`${prefixCls}-link`, props.classNames?.link, className)}
              style={{ ...props.styles?.link, ...item.style }}
              href={href}
            >
              <span
                class={cls(`${prefixCls}-overlay-link`, props.classNames?.overlayLink)}
                style={props.styles?.overlayLink}
              >
                {children}
                {dropdownIcon}
              </span>
            </a>
          ) : (
            <span
              {...passedProps}
              class={cls(`${prefixCls}-link`, props.classNames?.link, className)}
              style={{ ...props.styles?.link, ...item.style }}
            >
              <span
                class={cls(`${prefixCls}-overlay-link`, props.classNames?.overlayLink)}
                style={props.styles?.overlayLink}
              >
                {children}
                {dropdownIcon}
              </span>
            </span>
          )

        return (
          <Dropdown menu={mergedMenu} trigger={['hover']} {...dropdownProps}>
            {linkContent}
          </Dropdown>
        )
      }

      if (href !== undefined) {
        return (
          <a
            {...passedProps}
            class={cls(`${prefixCls}-link`, props.classNames?.link, className)}
            style={{ ...props.styles?.link, ...item.style }}
            href={href}
          >
            {children}
          </a>
        )
      }

      return (
        <span
          {...passedProps}
          class={cls(`${prefixCls}-link`, props.classNames?.link, className)}
          style={{ ...props.styles?.link, ...item.style }}
        >
          {children}
        </span>
      )
    }

    return () => {
      const items = props.items ?? []
      const params = props.params ?? {}
      const paths: string[] = []
      // 提取所有非分隔符项用于 itemRender
      const breadcrumbItems = items.filter(
        (item): item is BreadcrumbItemType => !('type' in item && item.type === 'separator'),
      )

      const crumbNodes = items.map((item, index) => {
        if ('type' in item && item.type === 'separator') {
          const sepItem = item as BreadcrumbSeparatorType
          return (
            <li
              key={sepItem.key ?? `separator-${index}`}
              class={cls(`${prefixCls}-separator`, props.classNames?.separator)}
              style={props.styles?.separator}
              aria-hidden="true"
            >
              {sepItem.separator ?? props.separator}
            </li>
          )
        }

        const breadcrumbItem = item as BreadcrumbItemType
        const { path, key, className, style } = breadcrumbItem
        const mergedPath = getPath(params, path)

        if (mergedPath !== undefined) {
          paths.push(mergedPath)
        }

        const mergedKey = key ?? index
        const isLastItem = index === items.length - 1

        // Check if next item is a separator
        const nextItem = items[index + 1]
        const nextIsSeparator = nextItem && 'type' in nextItem && nextItem.type === 'separator'

        let { href } = breadcrumbItem
        // 仅在用户未显式设置 href 时，才通过 path 拼接自动生成
        if (href === undefined && paths.length && mergedPath !== undefined) {
          href = `#/${paths.join('/')}`
        }

        // 使用 itemRender 自定义渲染或使用默认渲染
        let link: any
        if (props.itemRender) {
          link = props.itemRender(breadcrumbItem, params, breadcrumbItems, [...paths])
        } else {
          const name = getBreadcrumbName(breadcrumbItem, params)
          link = renderItem(breadcrumbItem, name, href)
        }

        return (
          <>
            <li
              key={mergedKey}
              class={cls(`${prefixCls}-item`, props.classNames?.item, className)}
              style={{ ...props.styles?.item, ...style }}
              aria-current={isLastItem ? 'page' : undefined}
            >
              {link}
            </li>
            {!isLastItem && !nextIsSeparator && (
              <li
                key={`${mergedKey}-separator`}
                class={cls(`${prefixCls}-separator`, props.classNames?.separator)}
                style={props.styles?.separator}
                aria-hidden="true"
              >
                {props.separator}
              </li>
            )}
          </>
        )
      })

      return (
        <nav class={cls(prefixCls, props.classNames?.root)} style={props.styles?.root} aria-label="breadcrumb">
          <ol class={props.classNames?.list} style={props.styles?.list}>
            {crumbNodes}
          </ol>
        </nav>
      )
    }
  },
})
