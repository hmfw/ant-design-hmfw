import { computed, defineComponent } from 'vue'
import { cls } from '../_utils/cls'
import { usePrefixCls } from '../config-provider'
import type { CardGridProps } from './types'

const cardGridProps = {
  hoverable: { type: Boolean, default: true },
} satisfies Record<keyof CardGridProps, any>

export const CardGrid = defineComponent({
  name: 'CardGrid',
  props: cardGridProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card')

    const cardGridCls = computed(() =>
      cls(`${prefixCls}-grid`, {
        [`${prefixCls}-grid-hoverable`]: props.hoverable,
      }),
    )
    return () => <div class={cardGridCls.value}>{slots.default?.()}</div>
  },
})
