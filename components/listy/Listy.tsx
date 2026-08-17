import { defineComponent, ref, computed, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils/cls'
import { VirtualList } from '../_internal/virtual-list'
import type { ListyProps, ListyClassNames, ListyStyles, ListyGroupItem, ListyRef, ListyScrollToConfig } from './types'

const listyProps = {
  data: { type: Array as PropType<any[]>, default: undefined },
  groups: { type: Array as PropType<ListyGroupItem[]>, default: undefined },
  children: { type: Function as PropType<(item: any, index: number) => any>, default: undefined },
  height: { type: [Number, String] as PropType<number | string>, default: undefined },
  virtual: { type: Boolean, default: false },
  itemHeight: { type: Number, default: 40 },
  itemKey: {
    type: [String, Function] as PropType<string | ((item: any, index: number) => string | number)>,
    default: undefined,
  },
  prefixCls: { type: String, default: undefined },
  classNames: { type: Object as PropType<ListyClassNames>, default: undefined },
  styles: { type: Object as PropType<ListyStyles>, default: undefined },
  onScroll: { type: Function as PropType<(event: Event) => void>, default: undefined },
} satisfies Record<keyof ListyProps, any>

export const Listy = defineComponent({
  name: 'Listy',
  props: listyProps,
  setup(props, { expose }) {
    const prefixCls = usePrefixCls('listy')
    const containerRef = ref<HTMLDivElement>()
    const virtualListRef = ref<any>()

    // 获取数据项 key
    const getKey = (item: any, index: number): string | number => {
      if (typeof props.itemKey === 'function') {
        return props.itemKey(item, index)
      }
      if (typeof props.itemKey === 'string') {
        return item[props.itemKey]
      }
      if (item && typeof item === 'object' && 'key' in item) {
        return item.key
      }
      return `listy-item-${index}`
    }

    // 处理滚动事件
    const handleScroll = (event: Event) => {
      props.onScroll?.(event)
    }

    // 扁平化分组数据
    const flattenedData = computed(() => {
      if (props.groups) {
        const result: Array<{ type: 'group' | 'item'; data: any; groupIndex?: number; itemIndex?: number }> = []
        props.groups.forEach((group, groupIndex) => {
          result.push({ type: 'group', data: group, groupIndex })
          group.items.forEach((item, itemIndex) => {
            result.push({ type: 'item', data: item, groupIndex, itemIndex })
          })
        })
        return result
      }
      return (props.data || []).map((item, index) => ({ type: 'item' as const, data: item, itemIndex: index }))
    })

    // 暴露实例方法
    const scrollTo = (config: number | ListyScrollToConfig) => {
      if (virtualListRef.value) {
        if (typeof config === 'number') {
          virtualListRef.value.scrollToIndex?.(config)
        } else {
          virtualListRef.value.scrollToIndex?.(config.index)
        }
      } else if (containerRef.value) {
        const index = typeof config === 'number' ? config : config.index
        containerRef.value.scrollTop = index * props.itemHeight
      }
    }

    const getScrollInfo = () => {
      const container = containerRef.value
      if (container) {
        return {
          scrollTop: container.scrollTop,
          scrollHeight: container.scrollHeight,
          clientHeight: container.clientHeight,
        }
      }
      return { scrollTop: 0, scrollHeight: 0, clientHeight: 0 }
    }

    expose({
      scrollTo,
      getScrollInfo,
    } as ListyRef)

    return () => {
      const data = flattenedData.value
      const isEmpty = data.length === 0

      // 渲染单个项
      const renderItem = (item: any, index: number) => {
        const flatItem = data[index]
        if (!flatItem) return null

        if (flatItem.type === 'group') {
          const group = flatItem.data as ListyGroupItem
          const isSticky = group.sticky !== false
          return (
            <div
              key={`group-${flatItem.groupIndex}`}
              class={cls(
                `${prefixCls}-group-header`,
                isSticky && `${prefixCls}-group-header-sticky`,
                props.classNames?.groupHeader,
              )}
              style={props.styles?.groupHeader}
            >
              {typeof group.group === 'string' ? group.group : group.group}
            </div>
          )
        }

        // 渲染普通项
        const key = getKey(flatItem.data, flatItem.itemIndex!)
        const content = props.children?.(flatItem.data, flatItem.itemIndex!)

        return (
          <div key={key} class={cls(`${prefixCls}-item`, props.classNames?.item)} style={props.styles?.item}>
            {content}
          </div>
        )
      }

      const containerStyle: CSSProperties = {
        height: typeof props.height === 'number' ? `${props.height}px` : props.height,
        overflow: 'auto',
        ...props.styles?.root,
      }

      const classes = cls(prefixCls, props.classNames?.root)

      // 虚拟滚动模式
      if (props.virtual && props.height) {
        return (
          <div ref={containerRef} class={classes} style={containerStyle} onScroll={handleScroll}>
            <VirtualList
              ref={virtualListRef}
              data={data}
              height={props.height}
              itemHeight={props.itemHeight}
              renderItem={(flatItem: any, index: number) => renderItem(flatItem, index)}
              itemKey={(flatItem: any, index: number) => {
                if (flatItem?.type === 'group') {
                  return `group-${flatItem.groupIndex}`
                }
                return getKey(flatItem?.data, flatItem?.itemIndex || index)
              }}
            />
          </div>
        )
      }

      // 常规模式
      return (
        <div ref={containerRef} class={classes} style={containerStyle} onScroll={handleScroll}>
          {isEmpty ? <div class={`${prefixCls}-empty`}>暂无数据</div> : data.map((_, index) => renderItem(_, index))}
        </div>
      )
    }
  },
})
