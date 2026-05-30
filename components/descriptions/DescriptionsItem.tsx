import { defineComponent } from 'vue'
import type { DescriptionsItemProps } from './types'

// JSX Structure Syntactic Sugar. Never reach the render code.
// This component is only used for JSX syntax support like <Descriptions.Item>
export const DescriptionsItem = defineComponent({
  name: 'DescriptionsItem',
  props: {
    label: String,
    span: [Number, String, Object],
    labelStyle: Object,
    contentStyle: Object,
  },
  setup(props, { slots }) {
    return () => slots.default?.()
  },
})

export type { DescriptionsItemProps }
