import { defineComponent, ref, watch, computed, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { SwitchSize } from './types'

export const Switch = defineComponent({
  name: 'Switch',
  props: {
    checked: { type: Boolean, default: undefined },
    defaultChecked: Boolean,
    disabled: Boolean,
    loading: Boolean,
    size: {
      type: String as PropType<SwitchSize>,
      default: 'default',
    },
    checkedChildren: String,
    unCheckedChildren: String,
  },
  emits: ['update:checked', 'change', 'click'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('switch')
    const innerChecked = ref(props.defaultChecked ?? false)

    watch(() => props.checked, (v) => { if (v !== undefined) innerChecked.value = v })

    const isChecked = computed(() =>
      props.checked !== undefined ? props.checked : innerChecked.value,
    )

    const isDisabled = computed(() => props.disabled || props.loading)

    const handleClick = () => {
      if (isDisabled.value) return
      const next = !isChecked.value
      innerChecked.value = next
      emit('update:checked', next)
      emit('change', next)
      emit('click', next)
    }

    return () => (
      <button
        type="button"
        role="switch"
        aria-checked={isChecked.value}
        class={cls(prefixCls, {
          [`${prefixCls}-checked`]: isChecked.value,
          [`${prefixCls}-disabled`]: isDisabled.value,
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-small`]: props.size === 'small',
        })}
        onClick={handleClick}
        disabled={isDisabled.value}
      >
        <span class={`${prefixCls}-handle`}>
          {props.loading && <span class={`${prefixCls}-loading-icon`} />}
        </span>
        <span class={`${prefixCls}-inner`}>
          {isChecked.value
            ? (slots.checkedChildren?.() ?? props.checkedChildren)
            : (slots.unCheckedChildren?.() ?? props.unCheckedChildren)}
        </span>
      </button>
    )
  },
})
