import { defineComponent, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { SpinSize } from './types'

export const Spin = defineComponent({
  name: 'Spin',
  props: {
    spinning: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String as PropType<SpinSize>,
      default: 'default',
    },
    tip: String,
  },
  setup(props, { slots }) {
    const prefixCls = usePrefixCls('spin')

    const spinEl = computed(() => (
      <span class={cls(prefixCls, {
        [`${prefixCls}-sm`]: props.size === 'small',
        [`${prefixCls}-lg`]: props.size === 'large',
        [`${prefixCls}-spinning`]: props.spinning,
      })}>
        <span class={`${prefixCls}-dot`}>
          {[0, 1, 2, 3].map((i) => (
            <i key={i} class={`${prefixCls}-dot-item`} />
          ))}
        </span>
        {props.tip && <div class={`${prefixCls}-text`}>{props.tip}</div>}
      </span>
    ))

    return () => {
      if (!slots.default) return spinEl.value

      return (
        <div class={cls(`${prefixCls}-nested-loading`)}>
          {props.spinning && (
            <div class={`${prefixCls}-container`}>
              {spinEl.value}
            </div>
          )}
          <div class={cls(`${prefixCls}-blur-container`, { [`${prefixCls}-blur`]: props.spinning })}>
            {slots.default()}
          </div>
        </div>
      )
    }
  },
})
