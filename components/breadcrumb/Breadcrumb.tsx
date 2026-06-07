import { defineComponent, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { ItemType, BreadcrumbItemType, BreadcrumbSeparatorType } from './types'
import { Dropdown } from '../dropdown'
import { Icon, DownOutlined } from '../icon'

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
    return title.replace(new RegExp(`:(${paramsKeys})`, 'g'), (replacement, key) => params[key] || replacement)
  }
  return title
}

const pickAttrs = (item: any) => {
  const attrs: Record<string, any> = {}
  Object.keys(item).forEach((key) => {
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      attrs[key] = item[key]
    }
  })
  return attrs
}

export const Breadcrumb = defineComponent({
  name: 'Breadcrumb',
  props: {
    items: Array as PropType<ItemType[]>,
    separator: {
      type: [String, Object] as PropType<string | VNode>,
      default: '/',
    },
    params: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
    itemRender: Function as PropType<
      (item: BreadcrumbItemType, params: Record<string, any>, items: BreadcrumbItemType[], paths: string[]) => VNode
    >,
  },
  setup(props) {
    const prefixCls = usePrefixCls('breadcrumb')

    const renderItem = (item: BreadcrumbItemType, children: any, href?: string) => {
      if (children === null || children === undefined) {
        return null
      }

      const { className, onClick, menu, ...restItem } = item
      const passedProps = {
        ...pickAttrs(restItem),
        onClick,
      }

      // 如果有下拉菜单，包裹在 Dropdown 中
      if (menu && menu.items && menu.items.length > 0) {
        const linkContent =
          href !== undefined ? (
            <a {...passedProps} class={cls(`${prefixCls}-link`, className)} href={href}>
              <span class={`${prefixCls}-overlay-link`}>
                {children}
                <Icon component={DownOutlined} style="margin-left: 4px; font-size: 10px;" />
              </span>
            </a>
          ) : (
            <span {...passedProps} class={cls(`${prefixCls}-link`, className)}>
              <span class={`${prefixCls}-overlay-link`}>
                {children}
                <Icon component={DownOutlined} style="margin-left: 4px; font-size: 10px;" />
              </span>
            </span>
          )

        return (
          <Dropdown menu={menu} trigger={['hover']}>
            {linkContent}
          </Dropdown>
        )
      }

      if (href !== undefined) {
        return (
          <a {...passedProps} class={cls(`${prefixCls}-link`, className)} href={href}>
            {children}
          </a>
        )
      }

      return (
        <span {...passedProps} class={cls(`${prefixCls}-link`, className)}>
          {children}
        </span>
      )
    }

    return () => {
      const items = props.items ?? []
      const paths: string[] = []
      // 提取所有非分隔符项用于 itemRender
      const breadcrumbItems = items.filter(
        (item): item is BreadcrumbItemType => !('type' in item && item.type === 'separator'),
      )

      const crumbs = items.map((item, index) => {
        if ('type' in item && item.type === 'separator') {
          const sepItem = item as BreadcrumbSeparatorType
          return (
            <li key={sepItem.key ?? `separator-${index}`} class={`${prefixCls}-separator`} aria-hidden="true">
              {sepItem.separator === '' ? sepItem.separator : sepItem.separator || props.separator}
            </li>
          )
        }

        const breadcrumbItem = item as BreadcrumbItemType
        const { path, key, className, style } = breadcrumbItem
        const mergedPath = getPath(props.params, path)

        if (mergedPath !== undefined) {
          paths.push(mergedPath)
        }

        const mergedKey = key ?? index
        const isLastItem = index === items.length - 1

        // Check if next item is a separator
        const nextItem = items[index + 1]
        const nextIsSeparator = nextItem && 'type' in nextItem && nextItem.type === 'separator'

        let { href } = breadcrumbItem
        if (paths.length && mergedPath !== undefined) {
          href = `#/${paths.join('/')}`
        }

        // 使用 itemRender 自定义渲染或使用默认渲染
        let link: any
        if (props.itemRender) {
          link = props.itemRender(breadcrumbItem, props.params, breadcrumbItems, [...paths])
        } else {
          const name = getBreadcrumbName(breadcrumbItem, props.params)
          link = renderItem(breadcrumbItem, name, href)
        }

        return (
          <>
            <li
              key={mergedKey}
              class={cls(`${prefixCls}-item`, className)}
              style={style}
              aria-current={isLastItem ? 'page' : undefined}
            >
              {link}
            </li>
            {!isLastItem && !nextIsSeparator && (
              <li class={`${prefixCls}-separator`} aria-hidden="true">
                {props.separator}
              </li>
            )}
          </>
        )
      })

      return (
        <nav class={prefixCls} aria-label="breadcrumb">
          <ol>{crumbs}</ol>
        </nav>
      )
    }
  },
})
