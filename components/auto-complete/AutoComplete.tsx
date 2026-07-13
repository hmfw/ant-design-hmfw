import { defineComponent, ref, computed, watch, onMounted, type PropType, type VNodeChild } from 'vue'
import { usePrefixCls, useConfig, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { VirtualList } from '../_internal/virtual-list'
import type {
  AutoCompleteProps,
  AutoCompleteOption,
  AutoCompleteAllowClear,
  AutoCompleteFilterProp,
  AutoCompleteFilterOption,
  AutoCompleteClassNames,
  AutoCompleteStyles,
} from './types'
import type { ComponentSize } from '../config-provider'

// 将 AntD 风格的 size 映射到 Input 样式后缀约定（-lg / -sm）。
const sizeSuffix = (size: ComponentSize): '' | 'lg' | 'sm' => (size === 'large' ? 'lg' : size === 'small' ? 'sm' : '')

/** 取选项用于内置过滤/回显的文本；label 非字符串时回退到 value。 */
const getOptionText = (opt: AutoCompleteOption, prop: AutoCompleteFilterProp): string => {
  if (prop === 'label' && typeof opt.label === 'string') return opt.label
  return opt.value
}

// Props 定义（使用 satisfies 确保与 AutoCompleteProps 类型一致）
const autoCompleteProps = {
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: undefined },
  options: { type: Array as PropType<AutoCompleteOption[]>, default: () => [] },
  disabled: { type: Boolean, default: false },
  placeholder: { type: String, default: undefined },
  allowClear: { type: [Boolean, Object] as PropType<AutoCompleteAllowClear>, default: false },
  // default 必须为 undefined，未传时才能在 mergedSize 中回退到 ConfigProvider 的 componentSize
  size: { type: String as PropType<ComponentSize>, default: undefined },
  status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
  filterOption: {
    type: [Boolean, Function] as PropType<AutoCompleteFilterOption>,
    default: true,
  },
  optionFilterProp: { type: String as PropType<AutoCompleteFilterProp>, default: 'value' },
  backfill: { type: Boolean, default: false },
  defaultActiveFirstOption: { type: Boolean, default: true },
  notFoundContent: {
    type: [String, Number, Object, Array] as PropType<VNodeChild>,
    default: undefined,
  },
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: undefined },
  autoFocus: { type: Boolean, default: false },
  id: { type: String, default: undefined },
  classNames: { type: Object as PropType<AutoCompleteClassNames>, default: undefined },
  styles: { type: Object as PropType<AutoCompleteStyles>, default: undefined },

  // 虚拟滚动
  virtual: { type: Boolean, default: false },
  listHeight: { type: Number, default: 256 },
  listItemHeight: { type: Number, default: 32 },
} satisfies Record<keyof AutoCompleteProps, any>

export const AutoComplete = defineComponent({
  name: 'AutoComplete',
  inheritAttrs: false,
  props: autoCompleteProps,
  emits: [
    'update:value',
    'update:open',
    'change',
    'select',
    'search',
    'focus',
    'blur',
    'clear',
    'openChange',
    'dropdownVisibleChange',
  ],
  setup(props, { slots, emit, attrs, expose }) {
    const prefixCls = usePrefixCls('auto-complete')
    const inputPfx = usePrefixCls('input')
    const config = useConfig()
    const locale = useLocale()

    const innerOpen = ref(props.defaultOpen ?? false)
    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const activeIndex = ref(-1)
    const inputRef = ref<HTMLInputElement>()

    // value 为半受控：不传时由组件管理（innerValue），传了则受控
    const inputValue = computed(() => (props.value !== undefined ? props.value : innerValue.value))
    // open 为半受控：不传时由组件管理（innerOpen），传了则受控
    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    // 受控值变化时同步内部状态
    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    // size 优先级：显式 prop > ConfigProvider 的 componentSize > 兜底 'middle'
    const mergedSize = computed<ComponentSize>(() => props.size ?? config.value.componentSize ?? 'middle')
    const sfx = computed(() => sizeSuffix(mergedSize.value))

    const filteredOptions = computed(() => {
      const input = inputValue.value
      if (!input || props.filterOption === false) return props.options
      if (typeof props.filterOption === 'function') {
        const fn = props.filterOption
        return props.options.filter((opt) => fn(input, opt))
      }
      const keyword = input.toLowerCase()
      return props.options.filter((opt) => getOptionText(opt, props.optionFilterProp).toLowerCase().includes(keyword))
    })

    const firstEnabledIndex = computed(() => filteredOptions.value.findIndex((o) => !o.disabled))

    // 空状态文案：props.notFoundContent 优先，否则回退本地化文案（复用 Select 的 key）
    const emptyContent = computed<VNodeChild>(() =>
      props.notFoundContent !== undefined ? props.notFoundContent : locale.value.Select.notFoundContent,
    )

    /** 从 from 起、沿 dir 方向查找下一个可用（未禁用）选项的下标；无则返回 -1。 */
    const findEnabledIndex = (from: number, dir: 1 | -1): number => {
      const opts = filteredOptions.value
      let i = from
      while (i >= 0 && i < opts.length) {
        if (!opts[i].disabled) return i
        i += dir
      }
      return -1
    }

    const resetActive = () => {
      activeIndex.value = props.defaultActiveFirstOption ? firstEnabledIndex.value : -1
    }

    // 过滤结果变化后，修正 activeIndex：越界或落在禁用项时重定位到首个可用项
    watch(
      () => filteredOptions.value,
      (opts) => {
        if (!isOpen.value) return
        const cur = activeIndex.value
        const valid = cur >= 0 && cur < opts.length && !opts[cur].disabled
        if (!valid) {
          activeIndex.value = props.defaultActiveFirstOption ? firstEnabledIndex.value : -1
        }
      },
    )

    const setOpen = (v: boolean) => {
      // 非受控时写内部状态
      if (props.open === undefined) {
        innerOpen.value = v
      }
      emit('update:open', v)
      emit('openChange', v)
      emit('dropdownVisibleChange', v)
    }

    /** 更新展示值（不 emit change）。用于 backfill：仅回填输入框显示，受控模式由父级决定是否更新。 */
    const setDisplayValue = (val: string) => {
      if (props.value === undefined) innerValue.value = val
      emit('update:value', val)
    }

    /** 提交值：更新值并触发 change（用户输入或确认选择时）。 */
    const setValue = (val: string) => {
      if (props.value === undefined) innerValue.value = val
      emit('update:value', val)
      emit('change', val)
    }

    const handleSelect = (opt: AutoCompleteOption) => {
      if (opt.disabled) return
      setValue(opt.value)
      emit('select', opt.value, opt)
      setOpen(false)
    }

    const handleInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      setValue(val)
      emit('search', val)
      if (!isOpen.value) setOpen(true)
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      setValue('')
      emit('clear')
      inputRef.value?.focus()
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen.value) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault()
          setOpen(true)
        }
        return
      }
      const opts = filteredOptions.value
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        const next = findEnabledIndex(activeIndex.value + 1, 1)
        if (next >= 0) {
          activeIndex.value = next
          if (props.backfill) setDisplayValue(opts[next].value)
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        const prev = findEnabledIndex(activeIndex.value - 1, -1)
        if (prev >= 0) {
          activeIndex.value = prev
          if (props.backfill) setDisplayValue(opts[prev].value)
        }
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (activeIndex.value >= 0 && activeIndex.value < opts.length) {
          handleSelect(opts[activeIndex.value])
        }
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    onMounted(() => {
      if (props.autoFocus) inputRef.value?.focus()
    })

    expose({ focus: () => inputRef.value?.focus(), blur: () => inputRef.value?.blur() })

    const renderClearIcon = () => {
      if (typeof props.allowClear === 'object' && props.allowClear.clearIcon) {
        return props.allowClear.clearIcon
      }
      return '✕'
    }

    /** 渲染单个选项，virtual 与非 virtual 路径共用。 */
    const renderOption = (opt: AutoCompleteOption, index: number) => (
      <div
        key={`${opt.value}-${index}`}
        class={cls(
          `${prefixCls}-dropdown-item`,
          {
            [`${prefixCls}-dropdown-item-active`]: activeIndex.value === index,
            [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
            [`${prefixCls}-dropdown-item-selected`]: opt.value === inputValue.value,
          },
          props.classNames?.option,
        )}
        style={props.styles?.option}
        onMouseenter={() => {
          if (!opt.disabled) activeIndex.value = index
        }}
        onMousedown={(e: MouseEvent) => {
          e.preventDefault()
          handleSelect(opt)
        }}
      >
        {opt.label ?? opt.value}
      </div>
    )

    const renderPopup = () => {
      const opts = filteredOptions.value
      if (opts.length === 0) {
        return (
          <div class={cls(`${prefixCls}-dropdown-empty`, props.classNames?.empty)} style={props.styles?.empty}>
            {emptyContent.value}
          </div>
        )
      }
      if (props.virtual) {
        return (
          <VirtualList
            data={opts}
            height={Math.min(props.listHeight, opts.length * props.listItemHeight)}
            itemHeight={props.listItemHeight}
            renderItem={(opt: AutoCompleteOption, index: number) => renderOption(opt, index)}
            itemKey={(opt: AutoCompleteOption, index: number) => `${opt.value}-${index}`}
          />
        )
      }
      return <>{opts.map((opt, i) => renderOption(opt, i))}</>
    }

    const renderInput = () => (
      <div
        class={cls(
          prefixCls,
          `${inputPfx}-affix-wrapper`,
          sfx.value && `${inputPfx}-affix-wrapper-${sfx.value}`,
          {
            [`${inputPfx}-affix-wrapper-disabled`]: props.disabled,
            [`${inputPfx}-affix-wrapper-status-error`]: props.status === 'error',
            [`${inputPfx}-affix-wrapper-status-warning`]: props.status === 'warning',
            [`${inputPfx}-affix-wrapper-focused`]: isOpen.value,
          },
          props.classNames?.root,
        )}
        style={{ ...(attrs.style as any), ...props.styles?.root }}
      >
        {slots.prefix && (
          <span class={cls(`${inputPfx}-prefix`, props.classNames?.prefix)} style={props.styles?.prefix}>
            {slots.prefix()}
          </span>
        )}
        <input
          ref={inputRef}
          id={props.id}
          class={cls(inputPfx, sfx.value && `${inputPfx}-${sfx.value}`, props.classNames?.input)}
          style={props.styles?.input}
          value={inputValue.value}
          disabled={props.disabled}
          placeholder={props.placeholder}
          onInput={handleInput}
          onFocus={(e) => {
            setOpen(true)
            resetActive()
            emit('focus', e)
          }}
          onBlur={(e) => emit('blur', e)}
          onKeydown={handleKeydown}
          autocomplete="off"
        />
        {!!props.allowClear && inputValue.value && !props.disabled && (
          <span
            class={cls(`${inputPfx}-clear-icon`, props.classNames?.clear)}
            style={props.styles?.clear}
            onMousedown={handleClear}
          >
            {renderClearIcon()}
          </span>
        )}
        {slots.suffix && (
          <span class={cls(`${inputPfx}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
            {slots.suffix()}
          </span>
        )}
      </div>
    )

    return () => (
      <Trigger
        open={isOpen.value}
        trigger="click"
        placement={'bottomLeft' as Placement}
        disabled={props.disabled}
        destroyOnHidden
        matchWidth
        popupClass={cls(`${prefixCls}-dropdown`, props.classNames?.dropdown)}
        popupStyle={props.styles?.dropdown}
        onOpenChange={(v: boolean) => setOpen(v)}
      >
        {{
          default: renderInput,
          popup: renderPopup,
        }}
      </Trigger>
    )
  },
})
