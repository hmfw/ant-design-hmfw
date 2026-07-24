import { defineComponent, ref, watch, computed, onMounted, type PropType, type CSSProperties } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { SwitchChangeEventHandler, SwitchClassNames, SwitchStyles, SwitchProps } from './types'
import type { ComponentSize } from '../config-provider'

// props 对象与 SwitchProps 接口通过 satisfies 强制同步，杜绝双源头漂移
const switchProps = {
  checked: { type: Boolean, default: undefined },
  /** value 是 checked 的别名，提升表单库兼容性 */
  value: { type: Boolean, default: undefined },
  defaultChecked: { type: Boolean, default: undefined },
  disabled: { type: Boolean, default: undefined },
  loading: { type: Boolean, default: undefined },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  checkedChildren: { type: null, default: undefined },
  unCheckedChildren: { type: null, default: undefined },
  autoFocus: { type: Boolean, default: undefined },
  id: { type: String, default: undefined },
  title: { type: String, default: undefined },
  tabIndex: { type: Number, default: undefined },
  className: { type: String, default: undefined },
  style: { type: [String, Object] as PropType<string | CSSProperties>, default: undefined },
  onChange: { type: Function as PropType<SwitchChangeEventHandler>, default: undefined },
  classNames: { type: Object as PropType<SwitchClassNames>, default: undefined },
  styles: { type: Object as PropType<SwitchStyles>, default: undefined },
} satisfies Record<keyof SwitchProps, any>

export const Switch = defineComponent({
  name: 'Switch',
  props: switchProps,
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

    return () => {
      const rootStyle = [props.style, props.styles?.root].filter(Boolean)

      return (
        <button
          ref={buttonRef}
          type="button"
          role="switch"
          aria-checked={isChecked.value}
          id={props.id}
          title={props.title}
          tabindex={props.tabIndex}
          style={rootStyle}
          class={cls(
            prefixCls,
            {
              [`${prefixCls}-checked`]: isChecked.value,
              [`${prefixCls}-disabled`]: isDisabled.value,
              [`${prefixCls}-loading`]: isLoading.value,
              [`${prefixCls}-small`]: props.size === 'small',
            },
            props.className,
            props.classNames?.root,
          )}
          onClick={handleClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={isDisabled.value}
        >
          <span class={cls(`${prefixCls}-handle`, props.classNames?.indicator)} style={props.styles?.indicator}>
            {isLoading.value && <span class={`${prefixCls}-loading-icon`} />}
          </span>
          <span class={cls(`${prefixCls}-inner`, props.classNames?.content)} style={props.styles?.content}>
            <span class={cls(`${prefixCls}-inner-checked`, props.classNames?.checked)} style={props.styles?.checked}>
              {slots.checkedChildren?.() ?? props.checkedChildren}
            </span>
            <span
              class={cls(`${prefixCls}-inner-unchecked`, props.classNames?.unchecked)}
              style={props.styles?.unchecked}
            >
              {slots.unCheckedChildren?.() ?? props.unCheckedChildren}
            </span>
          </span>
        </button>
      )
    }
  },
})
