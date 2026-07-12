import { defineComponent, ref, computed, watch, nextTick, type PropType, type VNode } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { VirtualList } from '../_internal/virtual-list'
import type { MentionOption, MentionSemanticClassNames, MentionSemanticStyles, MentionInstance } from './types'
import type { ComponentSize } from '../config-provider'

/** 尺寸 → Input 样式后缀 */
const sizeSuffix = (size: ComponentSize) => (size === 'large' ? 'lg' : size === 'small' ? 'sm' : '')

/** 校验状态 → Input 样式类名 */
const statusClass = (prefix: string, status?: string) =>
  status === 'error'
    ? `${prefix}-affix-wrapper-status-error`
    : status === 'warning'
      ? `${prefix}-affix-wrapper-status-warning`
      : ''

export const Mentions = defineComponent({
  name: 'Mentions',
  inheritAttrs: false,
  props: {
    value: String,
    defaultValue: { type: String, default: '' },
    options: { type: Array as PropType<MentionOption[]>, default: () => [] },
    prefix: { type: [String, Array] as PropType<string | string[]>, default: '@' },
    split: { type: String, default: ' ' },
    placeholder: String,
    disabled: Boolean,
    readOnly: Boolean,
    autoSize: { type: [Boolean, Object] as PropType<boolean | { minRows?: number; maxRows?: number }>, default: false },
    rows: { type: Number, default: 1 },
    loading: Boolean,
    notFoundContent: { type: [String, Object] as PropType<string | VNode>, default: '无匹配结果' },
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
    classNames: { type: Object as PropType<MentionSemanticClassNames>, default: () => ({}) },
    styles: { type: Object as PropType<MentionSemanticStyles>, default: () => ({}) },

    // 回调
    onSelect: Function as PropType<(option: MentionOption, prefix: string) => void>,
    onSearch: Function as PropType<(text: string, prefix: string) => void>,
    onChange: Function as PropType<(value: string) => void>,
    onOpenChange: Function as PropType<(open: boolean) => void>,
    onFocus: Function as PropType<(e: FocusEvent) => void>,
    onBlur: Function as PropType<(e: FocusEvent) => void>,
  },
  emits: ['update:value', 'change', 'select', 'search', 'focus', 'blur', 'openChange'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('mentions')
    const inputPfx = usePrefixCls('input')

    const innerValue = ref(props.value ?? props.defaultValue ?? '')
    const textareaRef = ref<HTMLTextAreaElement>()
    const isOpen = ref(false)

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
        return props.options.filter((opt) => (props.filterOption as Function)(searchText.value, opt))
      }

      return props.options.filter((opt) => {
        const label = (opt.label ?? opt.value).toString().toLowerCase()
        return opt.value.toLowerCase().includes(input) || label.includes(input)
      })
    })

    const hasContent = computed(() => filteredOptions.value.length > 0 || props.notFoundContent != null)
    const firstEnabledIndex = computed(() => filteredOptions.value.findIndex((o) => !o.disabled))

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
      const newValue = `${before}@${display} ${after}`

      setTextValue(newValue)

      emit('select', opt, activePrefix.value)
      props.onSelect?.(opt, activePrefix.value)

      // 清除测量状态
      activePrefix.value = ''
      searchText.value = ''
      setOpen(false)

      // 恢复焦点并将光标放到插入文本之后
      nextTick(() => {
        const el = textareaRef.value
        if (el) {
          const cursorPos = before.length + String(display).length + 2 // @ + display + space
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
      emit('focus', e)
      props.onFocus?.(e)
    }

    const handleBlur = (e: FocusEvent) => {
      // 延迟关闭，让 mousedown 有机会触发 select
      setTimeout(() => setOpen(false), 200)
      emit('blur', e)
      props.onBlur?.(e)
    }

    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen.value) return

      const opts = filteredOptions.value
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        let next = activeIndex.value + 1
        while (next < opts.length && opts[next].disabled) next++
        if (next < opts.length) activeIndex.value = next
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        let prev = activeIndex.value - 1
        while (prev >= 0 && opts[prev].disabled) prev--
        if (prev >= 0) activeIndex.value = prev
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
    // 暴露方法
    // ----------------------------------------------------------------

    const instance: MentionInstance = {
      focus: () => textareaRef.value?.focus(),
      blur: () => textareaRef.value?.blur(),
    }
    expose(instance)

    // ----------------------------------------------------------------
    // 渲染
    // ----------------------------------------------------------------

    const sfx = computed(() => sizeSuffix(props.size))

    const renderDropdown = () => {
      if (filteredOptions.value.length === 0) {
        return (
          <div class={cls(`${prefixCls}-dropdown-empty`, props.classNames?.empty)} style={props.styles?.empty}>
            {props.notFoundContent}
          </div>
        )
      }

      if (props.virtual) {
        return (
          <VirtualList
            data={filteredOptions.value}
            height={Math.min(props.listHeight, filteredOptions.value.length * props.listItemHeight)}
            itemHeight={props.listItemHeight}
            renderItem={(opt: MentionOption, index: number) => (
              <div
                class={cls(
                  `${prefixCls}-dropdown-item`,
                  {
                    [`${prefixCls}-dropdown-item-active`]: activeIndex.value === index,
                    [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
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
            )}
            itemKey={(opt: MentionOption, index: number) => opt.value ?? String(index)}
          />
        )
      }

      return filteredOptions.value.map((opt, i) => (
        <div
          key={opt.value}
          class={cls(
            `${prefixCls}-dropdown-item`,
            {
              [`${prefixCls}-dropdown-item-active`]: activeIndex.value === i,
              [`${prefixCls}-dropdown-item-disabled`]: opt.disabled,
            },
            props.classNames?.option,
          )}
          style={props.styles?.option}
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
      ))
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
                  [`${inputPfx}-affix-wrapper-focused`]: isOpen.value,
                },
                statusClass(inputPfx, props.status),
                props.classNames?.root,
              )}
              style={props.styles?.root}
            >
              <textarea
                ref={textareaRef}
                class={cls(prefixCls, sfx.value && `${inputPfx}-${sfx.value}`, props.classNames?.textarea)}
                style={props.styles?.textarea}
                value={textareaValue.value}
                disabled={props.disabled}
                readonly={props.readOnly}
                placeholder={props.placeholder}
                rows={props.rows}
                onInput={handleInput}
                onKeyup={handleKeyup}
                onClick={handleClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onKeydown={handleKeydown}
                autocomplete="off"
              />
            </div>
          ),
          popup: renderDropdown,
        }}
      </Trigger>
    )
  },
})
