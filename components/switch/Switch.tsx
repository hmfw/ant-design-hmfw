import { defineComponent, ref, watch, computed, onMounted, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { SwitchSize, SwitchChangeEventHandler } from './types'

export const Switch = defineComponent({
  name: 'Switch',
  props: {
    checked: { type: Boolean, default: undefined },
    /** value 是 checked 的别名，提升表单库兼容性 */
    value: { type: Boolean, default: undefined },
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
    className: String,
    style: [String, Object] as PropType<string | CSSProperties>,
    onChange: Function as PropType<SwitchChangeEventHandler>,
  },
  emits: ['update:checked', 'change', 'click', 'focus', 'blur'],
  setup(props, { slots, emit }) {
    const prefixCls = usePrefixCls('switch')
    // checked 优先于 value 别名
    const resolveControlled = () => (props.checked !== undefined ? props.checked : props.value)
    const innerChecked = ref(props.defaultChecked ?? false)
    const buttonRef = ref<HTMLButtonElement>()
    // 由 onChange 返回的 Promise 触发的内部 loading
    const innerLoading = ref(false)

    watch(
      () => resolveControlled(),
      (v) => {
        if (v !== undefined) innerChecked.value = v
      },
    )

    const isChecked = computed(() => {
      const ctrl = resolveControlled()
      return ctrl !== undefined ? ctrl : innerChecked.value
    })

    // 综合 props.loading 与 onChange Promise 触发的内部 loading
    const isLoading = computed(() => props.loading || innerLoading.value)
    const isDisabled = computed(() => props.disabled || isLoading.value)

    onMounted(() => {
      if (props.autoFocus && buttonRef.value) {
        buttonRef.value.focus()
      }
    })

    const handleClick = (e: MouseEvent) => {
      if (isDisabled.value) return
      const next = !isChecked.value
      // 受控模式下不更新 innerChecked，由外部 watch 同步
      if (resolveControlled() === undefined) {
        innerChecked.value = next
      }
      emit('update:checked', next)
      emit('click', next, e)

      // Vue 3 中 emit('change') 与 onChange prop 共享同一个监听器
      // 直接调用 props.onChange 以捕获 Promise 返回值，避免与 emit 重复触发
      const onChange = props.onChange
      if (typeof onChange === 'function') {
        const result = onChange(next, e)
        if (result && typeof (result as Promise<void>).then === 'function') {
          innerLoading.value = true
          ;(result as Promise<void>).finally(() => {
            innerLoading.value = false
          })
        }
      } else {
        // 未通过 onChange prop 注册时，仍需 emit('change') 触发其它监听
        emit('change', next, e)
      }
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
        style={props.style}
        class={cls(
          prefixCls,
          {
            [`${prefixCls}-checked`]: isChecked.value,
            [`${prefixCls}-disabled`]: isDisabled.value,
            [`${prefixCls}-loading`]: isLoading.value,
            [`${prefixCls}-small`]: props.size === 'small',
          },
          props.className,
        )}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={isDisabled.value}
      >
        <span class={`${prefixCls}-handle`}>{isLoading.value && <span class={`${prefixCls}-loading-icon`} />}</span>
        <span class={`${prefixCls}-inner`}>
          <span class={`${prefixCls}-inner-checked`}>{slots.checkedChildren?.() ?? props.checkedChildren}</span>
          <span class={`${prefixCls}-inner-unchecked`}>{slots.unCheckedChildren?.() ?? props.unCheckedChildren}</span>
        </span>
      </button>
    )
  },
})
