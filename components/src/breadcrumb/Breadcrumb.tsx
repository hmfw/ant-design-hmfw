import { defineComponent, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import type { BreadcrumbItem } from './types'

export const Breadcrumb = defineComponent({
  name: 'Breadcrumb',
  props: {
    items: Array as PropType<BreadcrumbItem[]>,
    separator: {
      type: String,
      default: '/',
    },
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('breadcrumb')

    return () => {
      const items = props.items ?? []
      return (
        <nav class={prefixCls} aria-label="breadcrumb">
          <ol class={`${prefixCls}-list`}>
            {items.map((item, i) => (
              <li key={i} class={`${prefixCls}-item`}>
                {i > 0 && (
                  <span class={`${prefixCls}-separator`} aria-hidden="true">
                    {props.separator}
                  </span>
                )}
                {item.href ? (
                  <a class={`${prefixCls}-link`} href={item.href} onClick={item.onClick}>
                    {item.title}
                  </a>
                ) : (
                  <span
                    class={`${prefixCls}-link`}
                    onClick={item.onClick}
                    style={item.onClick ? { cursor: 'pointer' } : {}}
                  >
                    {item.title}
                  </span>
                )}
              </li>
            ))}
            {slots.default?.()}
          </ol>
        </nav>
      )
    }
  },
})
