import { defineComponent } from 'vue'
import { usePrefixCls } from '../config-provider'
import type { CardMetaProps } from './types'

const cardMetaProps = {
  title: { type: String, default: undefined },
  description: { type: String, default: undefined },
} satisfies Record<keyof CardMetaProps, any>

export const CardMeta = defineComponent({
  name: 'CardMeta',
  props: cardMetaProps,
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('card-meta')

    const renderContent = (slotName: 'title' | 'description') => {
      const slot = slots[slotName]
      const propValue = props[slotName]

      if (!slot && !propValue) return null

      return <div class={`${prefixCls}-${slotName}`}>{slot ? slot() : propValue}</div>
    }

    return () => (
      <div class={prefixCls}>
        {slots.avatar && <div class={`${prefixCls}-avatar`}>{slots.avatar()}</div>}
        <div class={`${prefixCls}-detail`}>
          {renderContent('title')}
          {renderContent('description')}
        </div>
      </div>
    )
  },
})
