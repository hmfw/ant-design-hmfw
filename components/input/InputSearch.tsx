import { defineComponent, ref, computed, watch, toRef, type PropType, Fragment } from 'vue'
import { usePrefixCls, useMergedDisabled } from '../config-provider'
import { cls } from '../_utils/cls'
import { SearchOutlined, LoadingOutlined, type IconComponent } from '@hmfw/icons'
import { Button } from '../button'
import type {
  InputSize,
  InputStatus,
  InputAffix,
  InputSearchProps,
  AllowClearConfig,
  ShowCountConfig,
  InputClassNames,
  InputStyles,
} from './types'
import { Input } from './Input'
import { renderAffix } from './shared'

const inputSearchProps = {
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
  loading: { type: Boolean, default: false },
  enterButton: { type: [Boolean, String] as PropType<boolean | string>, default: false },
  searchIcon: { type: [String, Object, Function] as PropType<InputAffix>, default: undefined },
  // 语义化 API
  classNames: { type: Object as PropType<InputClassNames>, default: undefined },
  styles: { type: Object as PropType<InputStyles>, default: undefined },
} satisfies Record<keyof InputSearchProps, any>

export const InputSearch = defineComponent({
  name: 'InputSearch',
  props: inputSearchProps,
  emits: ['update:value', 'change', 'input', 'search', 'pressEnter', 'onPressEnter', 'focus', 'blur', 'clear'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const mergedDisabled = useMergedDisabled(toRef(props, 'disabled'))
    // 本地镜像当前值，供触发搜索时取值（受控/非受控均覆盖）
    const currentValue = ref(props.value ?? props.defaultValue ?? '')
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) currentValue.value = v
      },
    )

    // 持有内部基础 Input 实例，用于转发 focus/blur/input
    const inputRef = ref<{ focus: (o?: unknown) => void; blur: () => void; input?: HTMLInputElement }>()
    expose({
      focus: (opts?: unknown) => inputRef.value?.focus(opts),
      blur: () => inputRef.value?.blur(),
      get input() {
        return inputRef.value?.input
      },
    })

    const isSearchDisabled = computed(() => mergedDisabled.value || props.loading)

    const handleSearch = (e: Event) => {
      if (isSearchDisabled.value) return
      emit('search', currentValue.value, e, { source: 'input' })
    }

    const handleClear = (e?: Event) => {
      currentValue.value = ''
      emit('clear')
      // 对齐 AntD：清空时以 clear 来源上报搜索
      emit('search', '', e as Event, { source: 'clear' })
    }

    const commonInputProps = () => ({
      ref: inputRef,
      type: 'search',
      value: props.value,
      defaultValue: props.defaultValue,
      placeholder: props.placeholder,
      disabled: props.disabled,
      readOnly: props.readOnly,
      size: props.size,
      status: props.status,
      maxLength: props.maxLength,
      id: props.id,
      prefix: props.prefix,
      allowClear: props.allowClear,
      showCount: props.showCount,
      styles: props.styles,
      ...{
        'onUpdate:value': (v: string) => {
          currentValue.value = v
          emit('update:value', v)
        },
      },
      onChange: (e: Event) => emit('change', e),
      onInput: (e: Event) => emit('input', e),
      onFocus: (e: FocusEvent) => emit('focus', e),
      onBlur: (e: FocusEvent) => emit('blur', e),
      onClear: handleClear,
      onPressEnter: (e: KeyboardEvent) => {
        emit('pressEnter', e)
        emit('onPressEnter', e)
        handleSearch(e)
      },
    })

    return () => {
      // ── 按钮模式：Input + 尾随 Button ──────────────────────────────
      if (props.enterButton) {
        const enterText = typeof props.enterButton === 'string' ? props.enterButton : null
        const customIcon = typeof props.searchIcon === 'function' ? (props.searchIcon as IconComponent) : undefined
        return (
          <span class={cls(`${prefixCls}-search`, `${prefixCls}-search-with-button`)}>
            <Input
              {...commonInputProps()}
              suffix={props.suffix}
              classNames={{ affixWrapper: props.classNames?.affixWrapper }}
            />
            <Button
              type="primary"
              size={props.size}
              loading={props.loading}
              disabled={mergedDisabled.value}
              icon={enterText ? undefined : (customIcon ?? SearchOutlined)}
              onClick={handleSearch}
            >
              {enterText}
            </Button>
          </span>
        )
      }

      // ── 图标模式（默认）：搜索图标作为可点击 suffix ────────────────
      const icon = props.loading ? <LoadingOutlined spin /> : renderAffix(props.searchIcon) || <SearchOutlined />
      const searchBtn = (
        <span
          class={cls(`${prefixCls}-search-button`, {
            [`${prefixCls}-search-button-disabled`]: isSearchDisabled.value,
          })}
          onClick={handleSearch}
        >
          {icon}
        </span>
      )
      const userSuffix = props.suffix != null ? renderAffix(props.suffix) : null
      const mergedSuffix = (
        <Fragment>
          {userSuffix}
          {searchBtn}
        </Fragment>
      )
      const mergedClassNames = {
        ...props.classNames,
        affixWrapper: cls(`${prefixCls}-search`, props.classNames?.affixWrapper),
      }
      return <Input {...commonInputProps()} suffix={mergedSuffix} classNames={mergedClassNames} />
    }
  },
})
