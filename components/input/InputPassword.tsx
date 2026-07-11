import { defineComponent, ref, computed, watch, toRef, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { EyeOutlined, EyeInvisibleOutlined } from '@hmfw/icons'
import type { InputSize, InputStatus, InputPasswordProps, VisibilityToggleConfig } from './types'
import { useMergedValue, useFocusExpose, useMergedSize, useAffixWrapperCls } from './hooks'

// hover 触发时用 enter/leave 成对控制显隐；旧实现用 mouseover 会随鼠标移动反复切换
const HOVER_ACTION = 'hover'

const inputPasswordProps = {
  // 值与基础状态
  value: { type: String, default: undefined },
  placeholder: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  // 通用配置
  size: { type: String as PropType<InputSize>, default: undefined },
  status: { type: String as PropType<InputStatus>, default: '' },
  maxLength: { type: Number, default: undefined },
  id: { type: String, default: undefined },
  // 组件专属
  visibilityToggle: { type: [Boolean, Object] as PropType<boolean | VisibilityToggleConfig>, default: true },
  iconRender: { type: Function as PropType<(visible: boolean) => VNode | string>, default: undefined },
  action: { type: String as PropType<'click' | 'hover'>, default: 'click' },
} satisfies Record<keyof InputPasswordProps, any>

export const InputPassword = defineComponent({
  name: 'InputPassword',
  props: inputPasswordProps,
  emits: ['update:value', 'change', 'input', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const visible = ref(false)
    const innerValue = useMergedValue(props)
    const inputRef = ref<HTMLInputElement>()

    const mergedSize = useMergedSize(toRef(props, 'size'))

    // 受控可见性：仅当 visibilityToggle 为对象且显式给出 visible 字段
    const visibilityControlled = computed(
      () => typeof props.visibilityToggle === 'object' && props.visibilityToggle.visible !== undefined,
    )

    watch(
      () =>
        visibilityControlled.value && typeof props.visibilityToggle === 'object'
          ? props.visibilityToggle.visible
          : undefined,
      (v) => {
        if (v !== undefined) visible.value = v
      },
      { immediate: true },
    )

    // Expose focus/blur methods
    expose({ ...useFocusExpose(inputRef), input: inputRef })

    const wrapperCls = useAffixWrapperCls(prefixCls, props, mergedSize, `${prefixCls}-password`)

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    // 切换到指定可见状态；受控模式下只上报、不自行改内部 state（交由父组件驱动）
    const setVisible = (next: boolean) => {
      if (props.disabled) return
      if (!visibilityControlled.value) visible.value = next
      if (typeof props.visibilityToggle === 'object') {
        props.visibilityToggle.onVisibleChange?.(next)
      }
    }

    const toggleVisible = () => setVisible(!visible.value)

    const defaultIconRender = (vis: boolean) => (vis ? <EyeOutlined /> : <EyeInvisibleOutlined />)

    return () => {
      const showToggle = props.visibilityToggle !== false
      const iconRenderer = props.iconRender || defaultIconRender
      const icon = showToggle ? iconRenderer(visible.value) : null

      // hover：enter/leave 成对显隐；click：点击切换
      const triggerHandlers =
        props.action === HOVER_ACTION
          ? { onMouseenter: () => setVisible(true), onMouseleave: () => setVisible(false) }
          : { onClick: toggleVisible }

      return (
        <span class={wrapperCls.value}>
          <input
            ref={inputRef}
            class={prefixCls}
            type={visible.value ? 'text' : 'password'}
            value={innerValue.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readonly={props.readOnly}
            maxlength={props.maxLength}
            id={props.id}
            aria-invalid={props.status === 'error' || undefined}
            onInput={handleInput}
            onFocus={(e: FocusEvent) => emit('focus', e)}
            onBlur={(e: FocusEvent) => emit('blur', e)}
          />
          {showToggle && (
            <span
              class={`${prefixCls}-suffix ${prefixCls}-password-icon`}
              {...triggerHandlers}
              style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
            >
              {icon}
            </span>
          )}
        </span>
      )
    }
  },
})
