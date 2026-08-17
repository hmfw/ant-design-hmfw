import type { CSSProperties, PropType } from 'vue'
import { computed, defineComponent, ref, watchEffect } from 'vue'
import type { MasonryItemType } from './types'

export interface MasonryItemProps {
  prefixCls: string
  item: MasonryItemType
  style: CSSProperties
  className?: string
  index: number
  column: number
  fresh?: boolean
  onResize?: () => void
}

const masonryItemProps = {
  prefixCls: { type: String, required: true },
  item: { type: Object as PropType<MasonryItemType>, required: true },
  style: { type: Object as PropType<CSSProperties>, required: true },
  className: { type: String, default: undefined },
  index: { type: Number, required: true },
  column: { type: Number, required: true },
  fresh: { type: Boolean, default: false },
  onResize: { type: Function as PropType<() => void>, default: undefined },
} satisfies Record<keyof MasonryItemProps, any>

export default defineComponent({
  name: 'MasonryItem',
  props: masonryItemProps,
  setup(props, { slots, expose }) {
    const itemRef = ref<HTMLDivElement>()

    expose({
      get element() {
        return itemRef.value
      },
    })

    const itemPrefix = computed(() => `${props.prefixCls}-item`)

    // fresh 模式：监听子项尺寸变化
    watchEffect((onCleanup) => {
      if (props.fresh && itemRef.value && typeof ResizeObserver !== 'undefined' && props.onResize) {
        const resizeObserver = new ResizeObserver(() => {
          props.onResize?.()
        })
        resizeObserver.observe(itemRef.value)

        onCleanup(() => {
          resizeObserver.disconnect()
        })
      }
    })

    return () => {
      const { item, style, className } = props

      // 优先使用 slot，否则渲染 item.data
      const content = slots.default?.({ item: item?.data, index: props.index, column: props.column })

      return (
        <div ref={itemRef} style={style} class={[itemPrefix.value, className]}>
          {content}
        </div>
      )
    }
  },
})
