import {
  defineComponent,
  ref,
  computed,
  watch,
  nextTick,
  onBeforeUnmount,
  onMounted,
  type PropType,
  type VNode,
} from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils/cls'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { VirtualList } from '../_internal/virtual-list'
import { CloseCircleFilled } from '@hmfw/icons'
import type {
  MentionProps,
  MentionOption,
  MentionSemanticClassNames,
  MentionSemanticStyles,
  MentionInstance,
} from './types'
import type { ComponentSize } from '../config-provider'

/** blur 延迟关闭时间（ms）*/
const BLUR_DELAY_MS = 200

/** 尺寸 → Input 样式后缀 */
const sizeSuffix = (size: ComponentSize) => (size === 'large' ? 'lg' : size === 'small' ? 'sm' : '')

/** 校验状态 → Input 样式类名 */
const statusClass = (prefix: string, status?: string) =>
  status === 'error'
    ? `${prefix}-affix-wrapper-status-error`
    : status === 'warning'
      ? `${prefix}-affix-wrapper-status-warning`
      : ''

const mentionProps = {
  value: { type: String, default: undefined },
  defaultValue: { type: String, default: '' },
  options: { type: Array as PropType<MentionOption[]>, default: () => [] },
  prefix: { type: [String, Array] as PropType<string | string[]>, default: '@' },
  split: { type: String, default: ' ' },
  placeholder: { type: String, default: undefined },
  disabled: { type: Boolean, default: false },
  readOnly: { type: Boolean, default: false },
  autoSize: { type: [Boolean, Object] as PropType<boolean | { minRows?: number; maxRows?: number }>, default: false },
  rows: { type: Number, default: 1 },
  allowClear: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  // 缺省文案来自语言包，故不写字面量默认值
  notFoundContent: { type: [String, Object] as PropType<string | VNode>, default: undefined },
  filterOption: {
    type: [Boolean, Function] as PropType<false | ((input: string, option: MentionOption) => boolean)>,
    default: undefined,
  },
  status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  placement: { type: String as PropType<'top' | 'bottom'>, default: 'bottom' },

  // 虚拟滚动
  virtual: { type: Boolean, default: true },
  listHeight: { type: Number, default: 256 },
  listItemHeight: { type: Number, default: 32 },

  // 语义化
  classNames: { type: Object as PropType<MentionSemanticClassNames>, default: undefined },
  styles: { type: Object as PropType<MentionSemanticStyles>, default: undefined },

  // 回调
  onSelect: { type: Function as PropType<(option: MentionOption, prefix: string) => void>, default: undefined },
  onSearch: { type: Function as PropType<(text: string, prefix: string) => void>, default: undefined },
  onChange: { type: Function as PropType<(value: string) => void>, default: undefined },
  onOpenChange: { type: Function as PropType<(open: boolean) => void>, default: undefined },
  onFocus: { type: Function as PropType<(e: FocusEvent) => void>, default: undefined },
  onBlur: { type: Function as PropType<(e: FocusEvent) => void>, default: undefined },
  onClear: { type: Function as PropType<() => void>, default: undefined },
} satisfies Record<keyof MentionProps, any>

export const Mentions = defineComponent({
  name: 'Mentions',
  inheritAttrs: false,
  props: mentionProps,
  emits: ['update:value', 'change', 'select', 'search', 'focus', 'blur', 'openChange', 'clear'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('mentions')
    const inputPfx = usePrefixCls('input')
    const locale = useLocale()
    // 复用 Select 段文案。显式判 undefined 而非 `??`：传 null 是「不渲染空状态」的语义，
    // 需与「未传、走语言包缺省」区分开。
    const mergedNotFoundContent = computed(() =>
      props.notFoundContent === undefined ? locale.value.Select.notFoundContent : props.notFoundContent,
    )

    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const textareaRef = ref<HTMLTextAreaElement>()
    const isOpen = ref(false)
    const blurTimer = ref<number>()
    const isFocused = ref(false)

    // 当前激活的前缀字符与搜索文本
    const activePrefix = ref('')
    const searchText = ref('')
    // 搜索文本在 textarea 中的位置范围
    const measureStart = ref(0)
    const measureEnd = ref(0)
    // 键盘导航激活下标
    const activeIndex = ref(0)

    const isControlled = computed(() => props.value !== undefined)
    const textareaValue = computed(() => (isControlled.value ? props.value! : innerValue.value))

    /** 归一化前缀列表 */
    const prefixList = computed(() => {
      const p = props.prefix
      if (Array.isArray(p)) return p
      if (typeof p === 'string') return [p]
      return ['@']
    })

    /** 是否匹配到前缀（激活搜索态） */
    const isMeasuring = computed(() => searchText.value !== '' || activePrefix.value !== '')

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = v
      },
    )

    // ----------------------------------------------------------------
    // 搜索逻辑
    // ----------------------------------------------------------------

    function getCurrentSearch(): { prefix: string; text: string; start: number; end: number } | null {
      const el = textareaRef.value
      if (!el) return null

      const cursor = el.selectionStart
      const text = el.value
      const split = props.split

      // 从光标位置往前扫描，找到最近的合法前缀
      for (let i = cursor - 1; i >= 0; i--) {
        const ch = text[i]
        // 遇到分隔符 → 前缀必须在分隔符之后（或开头）
        if (split.includes(ch)) break

        // 匹配前缀字符
        for (const pfx of prefixList.value) {
          if (ch === pfx && (i === 0 || split.includes(text[i - 1]))) {
            const search = text.slice(i + pfx.length, cursor)
            return { prefix: pfx, text: search, start: i, end: cursor }
          }
        }
      }

      return null
    }

    function updateSearch() {
      const result = getCurrentSearch()
      if (result) {
        activePrefix.value = result.prefix
        searchText.value = result.text
        measureStart.value = result.start
        measureEnd.value = result.end
      } else {
        activePrefix.value = ''
        searchText.value = ''
        measureStart.value = 0
        measureEnd.value = 0
      }
    }

    // ----------------------------------------------------------------
    // 过滤选项
    // ----------------------------------------------------------------

    const filteredOptions = computed(() => {
      if (!isMeasuring.value) return []
      const input = searchText.value.toLowerCase()
      if (!input) return props.options

      if (props.filterOption === false) return props.options

      if (typeof props.filterOption === 'function') {
        return props.options.filter((opt) =>
          (props.filterOption as (input: string, option: MentionOption) => boolean)(searchText.value, opt),
        )
      }

      return props.options.filter((opt) => {
        const label = (opt.label ?? opt.value).toString().toLowerCase()
        return opt.value.toLowerCase().includes(input) || label.includes(input)
      })
    })

    const hasContent = computed(() => filteredOptions.value.length > 0 || mergedNotFoundContent.value != null)
    const firstEnabledIndex = computed(() => filteredOptions.value.findIndex((o) => !o.disabled))

    // 边界防御：确保列表高度和项高度不为负数或零
    const safeListHeight = computed(() => Math.max(32, props.listHeight))
    const safeItemHeight = computed(() => Math.max(20, props.listItemHeight))

    // ----------------------------------------------------------------
    // 打开/关闭
    // ----------------------------------------------------------------

    const setOpen = (v: boolean) => {
      if (isOpen.value === v) return
      isOpen.value = v
      emit('openChange', v)
      props.onOpenChange?.(v)
    }

    const tryOpen = () => {
      updateSearch()
      if (isMeasuring.value && hasContent.value) {
        activeIndex.value = firstEnabledIndex.value >= 0 ? firstEnabledIndex.value : 0
        setOpen(true)
      } else {
        setOpen(false)
      }
    }

    watch([() => props.options, () => textareaValue.value], () => {
      if (isOpen.value) {
        updateSearch()
        if (!isMeasuring.value) setOpen(false)
      }
    })

    // ----------------------------------------------------------------
    // 选中处理
    // ----------------------------------------------------------------

    const handleSelect = (opt: MentionOption) => {
      if (opt.disabled) return

      const before = textareaValue.value.slice(0, measureStart.value)
      const after = textareaValue.value.slice(measureEnd.value)
      const display = opt.label ?? opt.value
      const newValue = `${before}${activePrefix.value}${display} ${after}`

      setTextValue(newValue)

      emit('select', opt, activePrefix.value)
      props.onSelect?.(opt, activePrefix.value)

      // 清除测量状态
      const insertedPrefix = activePrefix.value
      activePrefix.value = ''
      searchText.value = ''
      setOpen(false)

      // 恢复焦点并将光标放到插入文本之后
      nextTick(() => {
        const el = textareaRef.value
        if (el) {
          // prefix + display + space
          const cursorPos = before.length + insertedPrefix.length + String(display).length + 1
          el.focus()
          el.setSelectionRange(cursorPos, cursorPos)
        }
      })
    }

    const setTextValue = (val: string) => {
      innerValue.value = val
      emit('update:value', val)
      emit('change', val)
      props.onChange?.(val)
    }

    // ----------------------------------------------------------------
    // 输入处理
    // ----------------------------------------------------------------

    const handleInput = (e: Event) => {
      const el = e.target as HTMLTextAreaElement
      setTextValue(el.value)
      nextTick(() => tryOpen())
    }

    const handleKeyup = () => {
      tryOpen()
    }

    const handleClick = () => {
      nextTick(() => tryOpen())
    }

    const handleFocus = (e: FocusEvent) => {
      isFocused.value = true
      emit('focus', e)
      props.onFocus?.(e)
    }

    const handleBlur = (e: FocusEvent) => {
      isFocused.value = false
      // 延迟关闭，让 mousedown 有机会触发 select
      blurTimer.value = window.setTimeout(() => setOpen(false), BLUR_DELAY_MS)
      emit('blur', e)
      props.onBlur?.(e)
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      setTextValue('')
      emit('clear')
      props.onClear?.()
      textareaRef.value?.focus()
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen.value) return

      const opts = filteredOptions.value
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        let next = activeIndex.value + 1
        while (next < opts.length && opts[next].disabled) next++
        // 修复：到达末尾时不要循环回第一个
        if (next >= opts.length) return
        activeIndex.value = next
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        let prev = activeIndex.value - 1
        while (prev >= 0 && opts[prev].disabled) prev--
        if (prev < 0) return
        activeIndex.value = prev
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (activeIndex.value >= 0 && activeIndex.value < opts.length) {
          handleSelect(opts[activeIndex.value])
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
      }
    }

    // ----------------------------------------------------------------
    // autoSize 自动调整高度
    // ----------------------------------------------------------------

    const textareaStyle = computed(() => {
      const style: Record<string, any> = {}
      if (props.autoSize) {
        // 启用 autoSize 时移除 rows 限制
        style.resize = 'none'
      }
      return style
    })

    const updateTextareaHeight = () => {
      const el = textareaRef.value
      if (!el || !props.autoSize) return

      // 重置高度以获取正确的 scrollHeight
      el.style.height = 'auto'

      const config = typeof props.autoSize === 'object' ? props.autoSize : {}
      const minRows = config.minRows || 1
      const maxRows = config.maxRows

      // 计算行高
      const computedStyle = window.getComputedStyle(el)
      const lineHeight = parseFloat(computedStyle.lineHeight)
      const paddingTop = parseFloat(computedStyle.paddingTop)
      const paddingBottom = parseFloat(computedStyle.paddingBottom)
      const borderTop = parseFloat(computedStyle.borderTopWidth)
      const borderBottom = parseFloat(computedStyle.borderBottomWidth)

      // 计算内容高度
      const minHeight = lineHeight * minRows + paddingTop + paddingBottom
      let height = el.scrollHeight + borderTop + borderBottom

      if (maxRows) {
        const maxHeight = lineHeight * maxRows + paddingTop + paddingBottom
        height = Math.min(height, maxHeight)
      }

      height = Math.max(height, minHeight)
      el.style.height = `${height}px`
    }

    watch(
      () => textareaValue.value,
      () => {
        if (props.autoSize) {
          nextTick(() => updateTextareaHeight())
        }
      },
    )

    onMounted(() => {
      if (props.autoSize) {
        nextTick(() => updateTextareaHeight())
      }
    })

    // ----------------------------------------------------------------
    // 暴露方法
    // ----------------------------------------------------------------

    const instance: MentionInstance = {
      focus: () => textareaRef.value?.focus(),
      blur: () => textareaRef.value?.blur(),
    }
    expose(instance)

    // 组件卸载前清理 timer
    onBeforeUnmount(() => {
      if (blurTimer.value) {
        clearTimeout(blurTimer.value)
      }
    })

    // ----------------------------------------------------------------
    // 渲染
    // ----------------------------------------------------------------

    const sfx = computed(() => sizeSuffix(props.size))
    const dropdownId = computed(() => `${prefixCls}-dropdown`)

    // 是否显示清除按钮
    const showClear = computed(() => {
      return props.allowClear && !props.disabled && !props.readOnly && textareaValue.value && isFocused.value
    })

    const renderDropdown = () => {
      if (filteredOptions.value.length === 0) {
        return (
          <div id={dropdownId.value} role="listbox" class={`${prefixCls}-dropdown-empty`}>
            {mergedNotFoundContent.value}
          </div>
        )
      }

      if (props.virtual) {
        return (
          <div id={dropdownId.value} role="listbox">
            <VirtualList
              data={filteredOptions.value}
              height={Math.min(safeListHeight.value, filteredOptions.value.length * safeItemHeight.value)}
              itemHeight={safeItemHeight.value}
              renderItem={(opt: MentionOption, index: number) => (
                <div
                  id={`${prefixCls}-option-${index}`}
                  role="option"
                  aria-selected={activeIndex.value === index}
                  aria-disabled={opt.disabled}
                  class={cls(`${prefixCls}-dropdown-item`, {
                    [`${prefixCls}-dropdown-item-active`]: activeIndex.value === index,
                    [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
                  })}
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
              )}
              itemKey={(opt: MentionOption, index: number) => opt.value ?? String(index)}
            />
          </div>
        )
      }

      return (
        <div id={dropdownId.value} role="listbox">
          {filteredOptions.value.map((opt, i) => (
            <div
              key={opt.value}
              id={`${prefixCls}-option-${i}`}
              role="option"
              aria-selected={activeIndex.value === i}
              aria-disabled={opt.disabled}
              class={cls(`${prefixCls}-dropdown-item`, {
                [`${prefixCls}-dropdown-item-active`]: activeIndex.value === i,
                [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
              })}
              onMouseenter={() => {
                if (!opt.disabled) activeIndex.value = i
              }}
              onMousedown={(e: MouseEvent) => {
                e.preventDefault()
                handleSelect(opt)
              }}
            >
              {opt.label ?? opt.value}
            </div>
          ))}
        </div>
      )
    }

    return () => (
      <Trigger
        open={isOpen.value && hasContent.value}
        trigger="click"
        placement={(props.placement === 'top' ? 'topLeft' : 'bottomLeft') as Placement}
        disabled={props.disabled}
        destroyOnHidden
        matchWidth
        popupClass={cls(`${prefixCls}-dropdown`, props.classNames?.popup)}
        popupStyle={props.styles?.popup}
      >
        {{
          default: () => (
            <div
              class={cls(
                prefixCls,
                `${inputPfx}-affix-wrapper`,
                sfx.value && `${inputPfx}-affix-wrapper-${sfx.value}`,
                {
                  [`${inputPfx}-affix-wrapper-disabled`]: props.disabled,
                  [`${inputPfx}-affix-wrapper-focused`]: isFocused.value,
                },
                statusClass(inputPfx, props.status),
                props.classNames?.root,
              )}
              style={props.styles?.root}
            >
              <textarea
                ref={textareaRef}
                class={cls(prefixCls, sfx.value && `${inputPfx}-${sfx.value}`, props.classNames?.textarea)}
                style={{ ...props.styles?.textarea, ...textareaStyle.value }}
                value={textareaValue.value}
                disabled={props.disabled}
                readonly={props.readOnly}
                placeholder={props.placeholder}
                rows={props.autoSize ? undefined : props.rows}
                role="combobox"
                aria-expanded={isOpen.value}
                aria-autocomplete="list"
                aria-controls={isOpen.value ? dropdownId.value : undefined}
                aria-activedescendant={
                  isOpen.value && activeIndex.value >= 0 ? `${prefixCls}-option-${activeIndex.value}` : undefined
                }
                onInput={handleInput}
                onKeyup={handleKeyup}
                onClick={handleClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeydown={handleKeydown}
                autocomplete="off"
              />
              {showClear.value && (
                <span
                  class={cls(`${inputPfx}-clear-icon`, props.classNames?.suffix)}
                  style={props.styles?.suffix}
                  role="button"
                  tabindex={-1}
                  onClick={handleClear}
                  onMousedown={(e: MouseEvent) => e.preventDefault()}
                >
                  <CloseCircleFilled />
                </span>
              )}
            </div>
          ),
          popup: renderDropdown,
        }}
      </Trigger>
    )
  },
})
