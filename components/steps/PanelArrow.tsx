import { defineComponent } from 'vue'

export interface PanelArrowProps {
  prefixCls: string
}

export const PanelArrow = defineComponent({
  name: 'PanelArrow',
  props: {
    prefixCls: { type: String, required: true },
  },
  setup(props) {
    return () => (
      <svg
        class={`${props.prefixCls}-panel-arrow`}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <title>Arrow</title>
        <path d="M 0 0 L 100 50 L 0 100" />
      </svg>
    )
  },
})
