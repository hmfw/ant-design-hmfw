import { defineComponent, ref, computed, type PropType } from 'vue'
import type { VirtualListInstance } from './types'

export const VirtualList = defineComponent({
  name: 'VirtualList',
  props: {
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    itemHeight: {
      type: Number,
      default: 32,
    },
    height: {
      type: [Number, String],
      required: true,
    },
    buffer: {
      type: Number,
      default: 5,
    },
    renderItem: {
      type: Function as PropType<(item: any, index: number) => any>,
      required: true,
    },
    itemKey: {
      type: [String, Function] as PropType<string | ((item: any, index: number) => string | number)>,
      default: 'key',
    },
  },
  setup(props, { expose }) {
    const containerRef = ref<HTMLElement>()
    const scrollTop = ref(0)

    // 计算容器高度
    const containerHeight = computed(() => {
      if (typeof props.height === 'number') {
        return props.height
      }
      return parseInt(props.height) || 300
    })

    // 总内容高度
    const totalHeight = computed(() => props.data.length * props.itemHeight)

    // 开始索引（包含缓冲区）
    const startIndex = computed(() => {
      const index = Math.floor(scrollTop.value / props.itemHeight)
      return Math.max(0, index - props.buffer)
    })

    // 结束索引（包含缓冲区）
    const endIndex = computed(() => {
      const index = Math.ceil((scrollTop.value + containerHeight.value) / props.itemHeight)
      return Math.min(props.data.length, index + props.buffer)
    })

    // 可见项
    const visibleData = computed(() => {
      return props.data.slice(startIndex.value, endIndex.value)
    })

    // 偏移量
    const offsetY = computed(() => startIndex.value * props.itemHeight)

    // 处理滚动事件
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement
      scrollTop.value = target.scrollTop
    }

    // 获取 item key
    const getKey = (item: any, index: number): string | number => {
      if (typeof props.itemKey === 'function') {
        return props.itemKey(item, index)
      }
      if (typeof props.itemKey === 'string' && item && typeof item === 'object') {
        return item[props.itemKey] ?? index
      }
      return index
    }

    // 滚动到指定索引
    const scrollToIndex = (index: number, align: 'top' | 'center' | 'bottom' = 'top') => {
      if (!containerRef.value) return

      const targetIndex = Math.max(0, Math.min(index, props.data.length - 1))
      let targetScrollTop = targetIndex * props.itemHeight

      if (align === 'center') {
        targetScrollTop -= containerHeight.value / 2 - props.itemHeight / 2
      } else if (align === 'bottom') {
        targetScrollTop -= containerHeight.value - props.itemHeight
      }

      containerRef.value.scrollTop = Math.max(0, targetScrollTop)
    }

    const scrollToTop = () => {
      if (containerRef.value) {
        containerRef.value.scrollTop = 0
      }
    }

    const scrollToBottom = () => {
      if (containerRef.value) {
        containerRef.value.scrollTop = totalHeight.value
      }
    }

    // 暴露方法
    expose({
      scrollToIndex,
      scrollToTop,
      scrollToBottom,
    } as VirtualListInstance)

    return () => (
      <div
        ref={containerRef}
        class="hmfw-virtual-list"
        style={{
          height: typeof props.height === 'number' ? `${props.height}px` : props.height,
          overflow: 'auto',
          position: 'relative',
        }}
        onScroll={handleScroll}
      >
        {/* 占位容器，撑开总高度 */}
        <div
          class="hmfw-virtual-list-holder"
          style={{
            height: `${totalHeight.value}px`,
            position: 'relative',
          }}
        >
          {/* 可见项容器 */}
          <div
            class="hmfw-virtual-list-items"
            style={{
              transform: `translateY(${offsetY.value}px)`,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
            }}
          >
            {visibleData.value.map((item, i) => {
              const actualIndex = startIndex.value + i
              const key = getKey(item, actualIndex)
              return (
                <div
                  key={key}
                  class="hmfw-virtual-list-item"
                  style={{
                    height: `${props.itemHeight}px`,
                    overflow: 'hidden',
                  }}
                >
                  {props.renderItem(item, actualIndex)}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  },
})
