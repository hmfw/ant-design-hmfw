import { defineComponent } from 'vue'

export interface ProgressIconProps {
  prefixCls: string
  percent: number
}

export const ProgressIcon = defineComponent({
  name: 'ProgressIcon',
  props: {
    prefixCls: { type: String, required: true },
    percent: { type: Number, required: true },
  },
  setup(props, { slots }) {
    return () => {
      const progressCls = `${props.prefixCls}-item-progress-icon`
      const circleCls = `${progressCls}-circle`
      const radius = 14
      const dashArray = `${(2 * Math.PI * radius * props.percent) / 100} 9999`

      return (
        <span class={progressCls}>
          <svg
            class={`${progressCls}-svg`}
            viewBox="0 0 100 100"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={props.percent}
          >
            <title>Progress</title>
            <circle class={`${circleCls} ${circleCls}-rail`} cx="50" cy="50" r={radius} />
            <circle
              class={`${circleCls} ${circleCls}-ptg`}
              cx="50"
              cy="50"
              r={radius}
              stroke-dasharray={dashArray}
              transform="rotate(-90 50 50)"
            />
          </svg>
          {slots.default?.()}
        </span>
      )
    }
  },
})
