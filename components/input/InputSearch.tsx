import { defineComponent, ref, computed, toRef, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { SearchOutlined, LoadingOutlined } from '@hmfw/icons'
import type { InputSize, InputStatus, InputAffix, InputSearchProps } from './types'
import { useMergedValue, useFocusExpose, useMergedSize, useAffixWrapperCls } from './hooks'
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
  id: { type: String, default: undefined },
  // 组件专属
  loading: { type: Boolean, default: false },
  enterButton: { type: [Boolean, String] as PropType<boolean | string>, default: false },
  searchIcon: { type: [String, Object, Function] as PropType<InputAffix>, default: undefined },
} satisfies Record<keyof InputSearchProps, any>

export const InputSearch = defineComponent({
  name: 'InputSearch',
  props: inputSearchProps,
  emits: ['update:value', 'change', 'input', 'search', 'pressEnter', 'onPressEnter', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('input')
    const innerValue = useMergedValue(props)
    const inputRef = ref<HTMLInputElement>()

    const mergedSize = useMergedSize(toRef(props, 'size'))
    const wrapperCls = useAffixWrapperCls(prefixCls, props, mergedSize, `${prefixCls}-search`)

    // Expose focus/blur methods
    expose({ ...useFocusExpose(inputRef), input: inputRef })

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      innerValue.value = val
      emit('update:value', val)
      emit('input', e)
      emit('change', e)
    }

    const isSearchDisabled = computed(() => props.disabled || props.loading)

    const handleSearch = (e: Event) => {
      if (isSearchDisabled.value) return
      emit('search', innerValue.value, e, { source: 'input' })
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        emit('pressEnter', e)
        emit('onPressEnter', e)
        handleSearch(e)
      }
    }

    return () => {
      const icon = props.loading ? (
        <LoadingOutlined class="hmfw-icon-loading" />
      ) : (
        renderAffix(props.searchIcon) || <SearchOutlined />
      )

      return (
        <span class={wrapperCls.value}>
          <input
            ref={inputRef}
            class={prefixCls}
            type="search"
            value={innerValue.value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readonly={props.readOnly}
            id={props.id}
            aria-invalid={props.status === 'error' || undefined}
            onInput={handleInput}
            onKeydown={handleKeydown}
            onFocus={(e: FocusEvent) => emit('focus', e)}
            onBlur={(e: FocusEvent) => emit('blur', e)}
          />
          <span
            class={cls(`${prefixCls}-suffix`, `${prefixCls}-search-button`, {
              [`${prefixCls}-search-button-disabled`]: isSearchDisabled.value,
            })}
            onClick={handleSearch}
          >
            {typeof props.enterButton === 'string' ? props.enterButton : icon}
          </span>
        </span>
      )
    }
  },
})
