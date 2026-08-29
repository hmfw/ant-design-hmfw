import { defineComponent, ref, type PropType, type CSSProperties } from 'vue'
import { cls } from '../../_utils/cls'
import { CloseCircleFilled } from '@hmfw/icons'

export type PickerVariant = 'outlined' | 'borderless' | 'filled' | 'underlined'

/**
 * 共享选择器输入框触发器
 * DatePicker / TimePicker / RangePicker 共用：渲染根容器 + 输入区 + 后缀图标 + 清除按钮。
 *
 * 只输出独立的共享类体系（`hmfw-picker-root/input/suffix` 等，视觉样式见共享 CSS）。
 * 各组件的根类（如 `hmfw-date-picker`，承载组件自身 CSS 的宽度等规则）
 * 由调用方通过 `classNames.root` 传入。
 *
 * 单输入框（DatePicker/TimePicker）由组件内置渲染，仅需传 value/placeholder；
 * 多输入框（RangePicker）通过 default 插槽覆盖输入区。
 */
export const PickerInput = defineComponent({
  name: 'PickerInput',
  props: {
    /** 输入框大小 */
    size: { type: String as PropType<'small' | 'middle' | 'large'>, default: 'middle' },
    /** 校验状态 */
    status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
    /** 形态变体 */
    variant: { type: String as PropType<PickerVariant>, default: 'outlined' },
    disabled: { type: Boolean, default: false },
    open: { type: Boolean, default: false },
    /** 是否有值（决定清除按钮是否显示） */
    hasValue: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: true },
    /** 内置单输入框显示值（提供 default 插槽时忽略） */
    value: { type: String, default: '' },
    /** 内置单输入框占位符 */
    placeholder: { type: String, default: '' },
    classNames: {
      type: Object as PropType<{ root?: string; input?: string; clear?: string; suffix?: string }>,
      default: undefined,
    },
    styles: {
      type: Object as PropType<{
        root?: CSSProperties
        input?: CSSProperties
        clear?: CSSProperties
        suffix?: CSSProperties
      }>,
      default: undefined,
    },
    onClear: { type: Function as PropType<(e: MouseEvent) => void>, default: undefined },
    onFocus: { type: Function as PropType<(e: FocusEvent) => void>, default: undefined },
    onBlur: { type: Function as PropType<(e: FocusEvent) => void>, default: undefined },
  },
  setup(props, { slots, expose }) {
    const inputRef = ref<HTMLInputElement>()
    // 供调用方（如 TimePicker 的 focus/blur 方法）访问内置输入框
    expose({ input: inputRef })

    return () => {
      const showClear = props.allowClear && props.hasValue && !props.disabled
      const sizeCls = props.size === 'middle' ? '' : `hmfw-picker-${props.size}`
      const variantCls = props.variant === 'outlined' ? '' : `hmfw-picker-variant-${props.variant}`

      return (
        <div
          class={cls(
            'hmfw-picker-root',
            sizeCls,
            variantCls,
            {
              'hmfw-picker-open': props.open,
              'hmfw-picker-disabled': props.disabled,
              'hmfw-picker-status-error': props.status === 'error',
              'hmfw-picker-status-warning': props.status === 'warning',
              'hmfw-picker-allow-clear': showClear,
            },
            props.classNames?.root,
          )}
          style={props.styles?.root}
        >
          <span class="hmfw-picker-input">
            {slots.default ? (
              slots.default()
            ) : (
              <input
                ref={inputRef}
                readonly
                value={props.value}
                placeholder={props.placeholder}
                disabled={props.disabled}
                class={cls('hmfw-picker-input-inner', props.classNames?.input)}
                style={props.styles?.input}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
              />
            )}
            <span class={cls('hmfw-picker-suffix', props.classNames?.suffix)} style={props.styles?.suffix}>
              {slots.suffix?.()}
            </span>
            {showClear && (
              <button
                class={cls('hmfw-picker-clear', props.classNames?.clear)}
                style={props.styles?.clear}
                onClick={props.onClear}
              >
                <CloseCircleFilled />
              </button>
            )}
          </span>
        </div>
      )
    }
  },
})
