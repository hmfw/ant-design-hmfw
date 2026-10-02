import { defineComponent, ref, computed, watch, type PropType, type VNode, Fragment } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils/cls'
import { EyeOutlined, EyeInvisibleOutlined } from '@hmfw/icons'
import type {
  InputSize,
  InputStatus,
  InputAffix,
  InputPasswordProps,
  VisibilityToggleConfig,
  AllowClearConfig,
  ShowCountConfig,
  InputClassNames,
  InputStyles,
} from './types'
import { Input } from './Input'
import { renderAffix } from './shared'

// hover 触发时用 enter/leave 成对控制显隐；旧实现用 mouseover 会随鼠标移动反复切换
const HOVER_ACTION = 'hover'

const inputPasswordProps = {
  // 值与基础状态
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: undefined },
  placeholder: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  // 通用配置
  size: { type: String as PropType<InputSize>, default: undefined },
  status: { type: String as PropType<InputStatus>, default: '' },
  maxLength: { type: Number, default: undefined },
  id: { type: String, default: undefined },
  // 透传基础 Input 的 affix 能力
  prefix: { type: [String, Object, Function] as PropType<InputAffix>, default: undefined },
  suffix: { type: [String, Object, Function] as PropType<InputAffix>, default: undefined },
  allowClear: { type: [Boolean, Object] as PropType<boolean | AllowClearConfig>, default: undefined },
  showCount: { type: [Boolean, Object] as PropType<boolean | ShowCountConfig>, default: undefined },
  // 组件专属
  visibilityToggle: { type: [Boolean, Object] as PropType<boolean | VisibilityToggleConfig>, default: true },
  iconRender: { type: Function as PropType<(visible: boolean) => VNode | string>, default: undefined },
  action: { type: String as PropType<'click' | 'hover'>, default: 'click' },
  // 语义化 API
  classNames: { type: Object as PropType<InputClassNames>, default: undefined },
  styles: { type: Object as PropType<InputStyles>, default: undefined },
} satisfies Record<keyof InputPasswordProps, any>

export const InputPassword = defineComponent({
  name: 'InputPassword',
  props: inputPasswordProps,
  emits: ['update:value', 'change', 'input', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const visible = ref(false)
    // 持有内部基础 Input 实例，用于转发 focus/blur/input
    const inputRef = ref<{ focus: (o?: unknown) => void; blur: () => void; input?: HTMLInputElement }>()

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

    // 转发 focus/blur/input 到内部 Input
    expose({
      focus: (opts?: unknown) => inputRef.value?.focus(opts),
      blur: () => inputRef.value?.blur(),
      get input() {
        return inputRef.value?.input
      },
    })

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

      // hover：enter/leave 成对显隐；click：点击切换
      const triggerHandlers =
        props.action === HOVER_ACTION
          ? { onMouseenter: () => setVisible(true), onMouseleave: () => setVisible(false) }
          : { onClick: toggleVisible }

      const toggleNode = showToggle ? (
        <span
          class={`${prefixCls}-password-icon`}
          {...triggerHandlers}
          style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}
        >
          {iconRenderer(visible.value)}
        </span>
      ) : null

      const userSuffix = props.suffix != null ? renderAffix(props.suffix) : null
      // 组合「用户后缀 + 显隐切换图标」；两者皆空则不传 suffix
      const mergedSuffix =
        userSuffix || toggleNode ? (
          <Fragment>
            {userSuffix}
            {toggleNode}
          </Fragment>
        ) : undefined

      const mergedClassNames = {
        ...props.classNames,
        affixWrapper: cls(`${prefixCls}-password`, props.classNames?.affixWrapper),
      }

      return (
        <Input
          ref={inputRef}
          type={visible.value ? 'text' : 'password'}
          value={props.value}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly}
          size={props.size}
          status={props.status}
          maxLength={props.maxLength}
          id={props.id}
          prefix={props.prefix}
          suffix={mergedSuffix}
          allowClear={props.allowClear}
          showCount={props.showCount}
          classNames={mergedClassNames}
          styles={props.styles}
          {...{
            'onUpdate:value': (v: string) => emit('update:value', v),
          }}
          onChange={(e: Event) => emit('change', e)}
          onInput={(e: Event) => emit('input', e)}
          onFocus={(e: FocusEvent) => emit('focus', e)}
          onBlur={(e: FocusEvent) => emit('blur', e)}
        />
      )
    }
  },
})
