import { defineComponent, ref, computed, type PropType } from 'vue'
import type { VirtualListInstance, VirtualListProps } from './types'
import { useVirtualScroll } from './useVirtualScroll'

/**
 * 虚拟列表组件 — 固定高度模式。
 *
 * 仅渲染可视区域 + 缓冲区的数据项，通过 translateY 定位可见区域，
 * 适用于大量数据的列表（Select、Tree、List 等组件内部使用）。
 */
const virtualListProps = {
  /** 数据源 */
  data: { type: Array as PropType<any[]>, required: true },
  /** 每项高度（固定高度模式） */
  itemHeight: { type: Number, default: 32 },
  /** 容器高度，支持 number（px）或 CSS 字符串 */
  height: { type: [Number, String], required: true },
  /** 缓冲区大小（上下各预渲染的额外项数） */
  buffer: { type: Number, default: 5 },
  /** 渲染每一项的渲染函数 */
  renderItem: { type: Function as PropType<(item: any, index: number) => any>, required: true },
  /** 每项的唯一标识 key，支持字符串属性名或自定义函数 */
  itemKey: {
    type: [String, Function] as PropType<string | ((item: any, index: number) => string | number)>,
    default: 'key',
  },
  /** 滚动事件回调 */
  onScroll: { type: Function as PropType<(scrollTop: number) => void>, default: undefined },
} satisfies Record<keyof VirtualListProps, any>

export const VirtualList = defineComponent<VirtualListProps>({
  name: 'VirtualList',
  props: virtualListProps,
  setup(props, { expose }) {
    const containerRef = ref<HTMLElement>()

    // itemHeight / buffer 在接口上为可选（带 ?），但运行时由 Vue 注入默认值；
    // 此处提至局部常量并通过非空断言收窄类型，避免在每个使用点重复处理 undefined
    const itemHeight = props.itemHeight!
    const buffer = props.buffer!

    /** 将容器高度转换为像素值，用于计算可见范围 */
    const containerHeight = computed(() => {
      if (typeof props.height === 'number') {
        return props.height
      }
      const parsed = parseInt(props.height)
      return isNaN(parsed) ? 300 : parsed
    })

    // ----------------------------------------------------------------
    // 虚拟滚动计算（composable）
    // ----------------------------------------------------------------
    const {
      startIndex,
      visibleData,
      offsetY,
      totalHeight,
      handleScroll: onContainerScroll,
      scrollToIndex,
      scrollToTop,
      scrollToBottom,
    } = useVirtualScroll({
      containerRef,
      data: computed(() => props.data),
      itemHeight: computed(() => itemHeight),
      containerHeight,
      buffer,
      onScroll: props.onScroll,
    })

    // ----------------------------------------------------------------
    // 样式对象（提取内联 style，保持 render 函数简洁）
    // ----------------------------------------------------------------

    /** 外层容器样式 */
    const containerStyle = computed(() => ({
      height: typeof props.height === 'number' ? `${props.height}px` : props.height,
      overflow: 'auto' as const,
      position: 'relative' as const,
    }))

    /** 占位容器样式，撑开总高度 */
    const holderStyle = computed(() => ({
      height: `${totalHeight.value}px`,
      position: 'relative' as const,
    }))

    /** 可见项容器样式，通过 translateY 定位 */
    const itemsStyle = computed(() => ({
      transform: `translateY(${offsetY.value}px)`,
      position: 'absolute' as const,
      left: 0,
      right: 0,
      top: 0,
    }))

    /** 单项样式 */
    const itemStyle = computed(() => ({
      height: `${itemHeight}px`,
      overflow: 'hidden' as const,
    }))

    // ----------------------------------------------------------------

    /** 获取 item 的唯一 key */
    const getKey = (item: any, index: number): string | number => {
      const key = props.itemKey
      if (typeof key === 'function') {
        return key(item, index)
      }
      if (typeof key === 'string') {
        if (item && typeof item === 'object') {
          return item[key] ?? index
        }
        // item 为非对象时无法通过属性名取值，降级使用 index 作为 key
      }
      return index
    }

    // ----------------------------------------------------------------
    // 暴露给父组件
    // ----------------------------------------------------------------
    const instance: VirtualListInstance = {
      scrollToIndex,
      scrollToTop,
      scrollToBottom,
    }
    expose(instance)

    return () => {
      const itemNodes = visibleData.value.map((item, i) => {
        const actualIndex = startIndex.value + i
        return (
          <div key={getKey(item, actualIndex)} class="hmfw-virtual-list-item" style={itemStyle.value}>
            {props.renderItem(item, actualIndex)}
          </div>
        )
      })

      return (
        <div ref={containerRef} class="hmfw-virtual-list" style={containerStyle.value} onScroll={onContainerScroll}>
          {/* 占位容器，撑开总高度使滚动条行为正确 */}
          <div class="hmfw-virtual-list-holder" style={holderStyle.value}>
            {/* 可见项容器，通过 translateY 定位到正确位置 */}
            <div class="hmfw-virtual-list-items" style={itemsStyle.value}>
              {itemNodes}
            </div>
          </div>
        </div>
      )
    }
  },
})
