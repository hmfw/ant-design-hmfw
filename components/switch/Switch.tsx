import { defineComponent, ref, watch, computed, onMounted, type PropType } from 'vue'
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
    checkedChildren: null,
    unCheckedChildren: null,
    autoFocus: Boolean,
    id: String,
    title: String,
    tabIndex: Number,
  },
  emits: ['update:checked', 'change', 'click', 'focus', 'blur'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('switch')
    const innerChecked = ref(props.defaultChecked ?? false)
    const buttonRef = ref<HTMLButtonElement>()

    watch(() => props.checked, (v) => { if (v !== undefined) innerChecked.value = v })

    const isChecked = computed(() =>
      props.checked !== undefined ? props.checked : innerChecked.value,
    )

    const isDisabled = computed(() => props.disabled || props.loading)

    onMounted(() => {
      if (props.autoFocus && buttonRef.value) {
        buttonRef.value.focus()
      }
    })

    const handleClick = (e: MouseEvent) => {
      if (isDisabled.value) return
      const next = !isChecked.value
      innerChecked.value = next
      emit('update:checked', next)
      emit('change', next, e)
      emit('click', next, e)
    }

    const handleFocus = (e: FocusEvent) => {
      emit('focus', e)
    }

    const handleBlur = (e: FocusEvent) => {
      emit('blur', e)
    }

    return () => (
      <button
        ref={buttonRef}
        type="button"
        role="switch"
        aria-checked={isChecked.value}
        id={props.id}
        title={props.title}
        tabindex={props.tabIndex}
        class={cls(prefixCls, {
          [`${prefixCls}-checked`]: isChecked.value,
          [`${prefixCls}-disabled`]: isDisabled.value,
          [`${prefixCls}-loading`]: props.loading,
          [`${prefixCls}-small`]: props.size === 'small',
        })}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
