import { defineComponent, ref, computed, watch, nextTick, type PropType, h, VNode } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils'
import { VirtualList } from '../_internal/virtual-list'
import { DownOutlined, LoadingOutlined } from '@hmfw/icons'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import type {
  SelectSize,
  SelectMode,
  SelectStatus,
  SelectOption,
  LabeledValue,
  SelectValue,
  SelectClassNames,
  SelectStyles,
  SelectFilterOption,
  SelectMaxTagPlaceholder,
  SelectOptionRender,
  SelectLabelRender,
  SelectTagRender,
  SelectFieldNames,
} from './types'
import type { SelectProps } from './types'

// 提取 props 定义并使用 satisfies 约束，确保与 SelectProps 接口完全一致
const selectProps = {
  // 数据与取值
  value: { type: [String, Number, Array, Object] as PropType<SelectValue>, default: undefined },
  options: { type: Array as PropType<SelectOption[]>, default: () => [] },
  fieldNames: { type: Object as PropType<SelectFieldNames>, default: undefined },
  labelInValue: { type: Boolean, default: false },
  // 模式与状态
  mode: { type: String as PropType<SelectMode>, default: undefined },
  size: { type: String as PropType<SelectSize>, default: 'middle' },
  status: { type: String as PropType<SelectStatus>, default: undefined },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false },
  // 展现与交互
  placeholder: { type: String, default: undefined },
  allowClear: { type: Boolean, default: false },
  open: { type: Boolean, default: undefined },
  dropdownMatchSelectWidth: { type: [Boolean, Number] as PropType<boolean | number>, default: true },
  // 搜索
  showSearch: { type: Boolean, default: false },
  filterOption: { type: [Boolean, Function] as PropType<SelectFilterOption>, default: true },
  autoClearSearchValue: { type: Boolean, default: true },
  notFoundContent: { type: String, default: undefined },
  // 多选 / 标签
  maxCount: { type: Number, default: undefined },
  maxTagCount: { type: Number, default: undefined },
  maxTagPlaceholder: { type: [String, Function] as PropType<SelectMaxTagPlaceholder>, default: undefined },
  tokenSeparators: { type: Array as PropType<string[]>, default: undefined },
  // 自定义渲染
  optionRender: { type: Function as PropType<SelectOptionRender>, default: undefined },
  labelRender: { type: Function as PropType<SelectLabelRender>, default: undefined },
  tagRender: { type: Function as PropType<SelectTagRender>, default: undefined },
  // 虚拟滚动：listHeight/listItemHeight 仅在 virtual 开启时生效（传给 VirtualList）；
  // 普通模式下拉高度由 CSS .hmfw-select-dropdown 的 max-height 控制。
  // 虚拟滚动依赖等高选项做位置计算，所有选项高度需与 listItemHeight 一致。
  virtual: { type: Boolean, default: false },
  listHeight: { type: Number, default: 256 }, // 下拉可视区高度
  listItemHeight: { type: Number, default: 32 }, // 每个选项固定行高
  // 语义化 API
  classNames: { type: Object as PropType<SelectClassNames>, default: undefined },
  styles: { type: Object as PropType<SelectStyles>, default: undefined },
} satisfies Record<keyof SelectProps, any>

export const Select = defineComponent({
  name: 'Select',
  props: selectProps,
  emits: ['update:value', 'change', 'search', 'select', 'deselect', 'clear', 'dropdownVisibleChange', 'focus', 'blur'],
  setup(props, { emit, expose }) {
    const prefixCls = usePrefixCls('select')
    const locale = useLocale()
    const selectorRef = ref<HTMLElement | null>(null)
    const searchRef = ref<HTMLInputElement | null>(null)
    const activeIndex = ref(-1)

    const isMultiple = computed(() => props.mode === 'multiple' || props.mode === 'tags')
    const isTags = computed(() => props.mode === 'tags')

    // tags 模式本质需要输入框（否则无法创建标签），故隐式启用搜索
    const enableSearch = computed(() => props.showSearch || isTags.value)

    // Field name mapping - 支持自定义字段名
    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const optionsField = computed(() => props.fieldNames?.options ?? 'options')
    // groupLabel 缺省复用 label 字段（与 AntD v6 一致）
    const groupLabelField = computed(() => props.fieldNames?.groupLabel ?? labelField.value)

    /**
     * 安全获取选项字段值，支持回退到默认字段名
     */
    const getFieldValue = (opt: SelectOption, field: string, fallback: string): any => {
      const value = opt[field as keyof SelectOption]
      return value !== undefined ? value : opt[fallback as keyof SelectOption]
    }

    // Flatten options (handle OptGroup)
    const flatOptions = computed(() => {
      const result: SelectOption[] = []
      const flatten = (opts: SelectOption[]) => {
        opts.forEach((opt) => {
          const nestedOpts = getFieldValue(opt, optionsField.value, 'options')
          if (nestedOpts && Array.isArray(nestedOpts)) {
            flatten(nestedOpts)
          } else {
            result.push(opt)
          }
        })
      }
      flatten(props.options)
      return result
    })

    // Dynamic options for tags mode
    const dynamicOptions = ref<SelectOption[]>([])

    const allOptions = computed(() => [...flatOptions.value, ...dynamicOptions.value])

    /**
     * 从各种 SelectValue 格式中提取原始值数组
     * 支持格式：
     * 1. undefined/null -> [] (多选) 或 undefined (单选)
     * 2. string | number -> [value]
     * 3. (string | number)[] -> 直接返回
     * 4. LabeledValue -> [value.value]
     * 5. LabeledValue[] -> [v1.value, v2.value, ...]
     */
    const extractRawValues = (v: SelectValue | undefined): (string | number)[] | undefined => {
      if (v === undefined || v === null) return isMultiple.value ? [] : undefined

      if (Array.isArray(v)) {
        if (v.length === 0) return []
        // 检查数组元素类型前先确保有元素
        const first = v[0]
        if (first !== null && typeof first === 'object' && 'value' in first) {
          return (v as LabeledValue[]).map((lv) => lv.value)
        }
        return v as (string | number)[]
      }

      // 非数组的 LabeledValue 对象
      if (v !== null && typeof v === 'object' && 'value' in v) {
        return [(v as LabeledValue).value]
      }

      return [v as string | number]
    }

    const innerValue = ref<(string | number)[] | undefined>(extractRawValues(props.value))
    const innerOpen = ref(false)
    const searchText = ref('')

    const isControlled = computed(() => props.value !== undefined)

    // 简化状态管理：selectedValues 是唯一的已选值来源
    const selectedValues = computed(() => {
      const raw = isControlled.value ? extractRawValues(props.value) : innerValue.value
      return raw ?? []
    })

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = extractRawValues(v)
      },
    )

    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    const getOptionByValue = (val: string | number): SelectOption | undefined => {
      return allOptions.value.find((o) => getFieldValue(o, valueField.value, 'value') === val)
    }

    const getLabeledValue = (val: string | number): LabeledValue => {
      const opt = getOptionByValue(val)
      return {
        value: val,
        label: opt ? String(getFieldValue(opt, labelField.value, 'label')) : String(val),
        key: String(val),
      }
    }

    /**
     * 构建发出的值格式（根据 labelInValue 决定）
     */
    const buildEmitValue = (rawVals: (string | number)[] | undefined): SelectValue => {
      if (rawVals === undefined) return undefined
      if (!props.labelInValue) {
        return isMultiple.value ? rawVals : rawVals[0]
      }
      const labeled = rawVals.map(getLabeledValue)
      return isMultiple.value ? labeled : labeled[0]
    }

    const buildEmitOptions = (rawVals: (string | number)[]): SelectOption | SelectOption[] => {
      const opts = rawVals.map((v) => getOptionByValue(v)).filter(Boolean) as SelectOption[]
      return isMultiple.value ? opts : opts[0]
    }

    // 单个选项是否匹配搜索词（供扁平 filteredOptions 与带分组 filteredTree 共用）
    const matchOption = (opt: SelectOption, input: string): boolean => {
      if (typeof props.filterOption === 'function') {
        return props.filterOption(input, opt)
      }
      if (props.filterOption === false) return true
      return String(getFieldValue(opt, labelField.value, 'label'))
        .toLowerCase()
        .includes(input)
    }

    const filteredOptions = computed(() => {
      if (!searchText.value || !enableSearch.value) return allOptions.value
      const input = searchText.value.toLowerCase()
      return allOptions.value.filter((opt) => matchOption(opt, input))
    })

    // 保留分组结构的过滤结果，供非虚拟渲染使用。
    // 叶子保持原对象引用（renderOptionList 依赖 filteredOptions.indexOf 做键盘高亮对齐），
    // 分组子项全部被过滤掉时隐藏该组；末尾追加过滤后的动态标签（tags 模式）。
    const filteredTree = computed(() => {
      const noFilter = !searchText.value || !enableSearch.value
      const input = searchText.value.toLowerCase()

      const filterNodes = (opts: SelectOption[]): SelectOption[] => {
        const result: SelectOption[] = []
        opts.forEach((opt) => {
          const nested = getFieldValue(opt, optionsField.value, 'options')
          if (nested && Array.isArray(nested)) {
            const children = noFilter ? nested : filterNodes(nested)
            if (children.length > 0) {
              result.push({ ...opt, [optionsField.value]: children })
            }
          } else if (noFilter || matchOption(opt, input)) {
            result.push(opt)
          }
        })
        return result
      }

      const tree = filterNodes(props.options)
      const dynamics = noFilter ? dynamicOptions.value : dynamicOptions.value.filter((opt) => matchOption(opt, input))
      return [...tree, ...dynamics]
    })

    const selectedLabels = computed(() => {
      return selectedValues.value.map((v) => {
        const opt = getOptionByValue(v)
        return opt ? String(getFieldValue(opt, labelField.value, 'label')) : String(v)
      })
    })

    // 清理未被选中的动态选项，防止内存泄漏
    watch(selectedValues, (newVals) => {
      if (isTags.value) {
        dynamicOptions.value = dynamicOptions.value.filter((opt) =>
          newVals.includes(getFieldValue(opt, valueField.value, 'value') as string | number),
        )
      }
    })

    /**
     * 检查是否可以添加更多值（maxCount 限制）
     */
    const canAddMoreValues = () => {
      return props.maxCount === undefined || selectedValues.value.length < props.maxCount
    }

    const openDropdown = async () => {
      if (props.disabled) return
      innerOpen.value = true
      emit('dropdownVisibleChange', true)
      await nextTick()
      if (enableSearch.value) searchRef.value?.focus()
    }

    const closeDropdown = () => {
      innerOpen.value = false
      searchText.value = ''
      activeIndex.value = -1
      emit('dropdownVisibleChange', false)
    }

    const updateValue = (rawVals: (string | number)[] | undefined) => {
      innerValue.value = rawVals
      const emitVal = buildEmitValue(rawVals)
      const emitOpts = rawVals && rawVals.length > 0 ? buildEmitOptions(rawVals) : isMultiple.value ? [] : undefined
      emit('update:value', emitVal)
      emit('change', emitVal, emitOpts)
    }

    const selectOption = (opt: SelectOption) => {
      if (opt.disabled) return
      const val = getFieldValue(opt, valueField.value, 'value') as string | number
      if (isMultiple.value) {
        const vals = [...selectedValues.value]
        const idx = vals.indexOf(val)
        if (idx >= 0) {
          vals.splice(idx, 1)
          emit('deselect', val)
        } else {
          // 受 maxCount 限制时不再新增
          if (!canAddMoreValues()) {
            return
          }
          vals.push(val)
          emit('select', val, opt)
        }
        updateValue(vals)
        if (props.autoClearSearchValue) searchText.value = ''
      } else {
        updateValue([val])
        emit('select', val, opt)
        closeDropdown()
      }
    }

    const removeTag = (val: string | number, e: MouseEvent) => {
      e.stopPropagation()
      const vals = selectedValues.value.filter((v) => v !== val)
      updateValue(vals)
      emit('deselect', val)
    }

    const clearAll = (e: MouseEvent) => {
      e.stopPropagation()
      const empty = isMultiple.value ? [] : undefined
      updateValue(empty)
      emit('clear')
    }

    /**
     * 处理搜索输入，支持 tokenSeparators（tags 模式）
     * 使用正则表达式一次性处理所有分隔符
     */
    const handleSearchInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      searchText.value = val
      emit('search', val)

      // tags 模式：按 tokenSeparators 分隔符批量创建标签
      if (isTags.value && props.tokenSeparators && props.tokenSeparators.length > 0) {
        // 转义特殊字符并构建正则表达式，支持多种分隔符混合使用
        const escapedSeps = props.tokenSeparators.map((sep) => sep.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
        const regex = new RegExp(escapedSeps.join('|'))

        if (regex.test(val)) {
          const tokens = val
            .split(regex)
            .map((t) => t.trim())
            .filter(Boolean)
          const vals = [...selectedValues.value]

          tokens.forEach((token) => {
            if (!vals.includes(token)) {
              // 动态选项不存在时才创建，避免重复
              if (!getOptionByValue(token)) {
                dynamicOptions.value.push({ label: token, value: token })
              }
              if (canAddMoreValues()) {
                vals.push(token)
              }
            }
          })

          updateValue(vals)
          searchText.value = ''
          return
        }
      }
    }

    // 键盘导航：Backspace 删标签、方向键移动高亮、Enter 选中/建标签、Escape 关闭
    const handleKeydown = (e: KeyboardEvent) => {
      // Backspace：输入框为空时删除最后一个已选标签（多选/tags 模式）
      // 需在下拉开合两种状态下都生效，故置于最前
      if (e.key === 'Backspace' && isMultiple.value && !searchText.value && selectedValues.value.length > 0) {
        e.preventDefault()
        const vals = [...selectedValues.value]
        const removed = vals.pop()!
        updateValue(vals)
        emit('deselect', removed)
        return
      }

      if (!isOpen.value) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault()
          openDropdown()
        }
        return
      }

      const opts = filteredOptions.value

      // 空列表：跳过方向键导航（避免对 length 取模出错），仅处理建标签/关闭
      if (opts.length === 0) {
        if (e.key === 'Enter' && isTags.value && searchText.value.trim()) {
          e.preventDefault()
          // tags 模式下创建新标签
          const token = searchText.value.trim()
          if (!getOptionByValue(token)) {
            dynamicOptions.value.push({ label: token, value: token })
          }
          const vals = [...selectedValues.value]
          if (!vals.includes(token) && canAddMoreValues()) {
            vals.push(token)
            updateValue(vals)
          }
          searchText.value = ''
        } else if (e.key === 'Escape') {
          e.preventDefault()
          closeDropdown()
        }
        return
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value + 1) % opts.length
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value - 1 + opts.length) % opts.length
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (activeIndex.value >= 0 && opts[activeIndex.value]) {
          selectOption(opts[activeIndex.value])
        } else if (isTags.value && searchText.value.trim()) {
          // 无高亮项时，tags 模式用当前输入创建新标签
          const token = searchText.value.trim()
          if (!getOptionByValue(token)) {
            dynamicOptions.value.push({ label: token, value: token })
          }
          const vals = [...selectedValues.value]
          if (!vals.includes(token) && canAddMoreValues()) {
            vals.push(token)
            updateValue(vals)
          }
          searchText.value = ''
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        closeDropdown()
      }
    }

    const focus = () => {
      if (enableSearch.value && searchRef.value) {
        searchRef.value.focus()
      } else {
        selectorRef.value?.focus()
      }
    }

    const blur = () => {
      if (enableSearch.value && searchRef.value) {
        searchRef.value.blur()
      } else {
        selectorRef.value?.blur()
      }
    }

    expose({ focus, blur })

    // 选项内部内容：自定义 optionRender，或默认的 label + 选中对勾。
    // 虚拟/非虚拟两条渲染路径共用（外层容器结构各自独立）
    const renderOptionContent = (opt: SelectOption, index: number, isSelected: boolean, label: string) => {
      if (props.optionRender) return props.optionRender(opt, { index })
      return [
        h(
          'div',
          {
            class: cls(`${prefixCls}-item-option-content`, props.classNames?.optionLabel),
            style: props.styles?.optionLabel,
          },
          label,
        ),
        isSelected &&
          h(
            'span',
            {
              class: cls(`${prefixCls}-item-option-state`, props.classNames?.optionState),
              style: props.styles?.optionState,
            },
            '✓',
          ),
      ]
    }

    // 渲染选项列表，递归处理 OptGroup 分组
    const renderOptionList = (opts: SelectOption[]): VNode[] => {
      const result: VNode[] = []
      opts.forEach((opt, i) => {
        const nestedOpts = getFieldValue(opt, optionsField.value, 'options')
        if (nestedOpts && Array.isArray(nestedOpts)) {
          // 分组：渲染组标题 + 递归渲染子项
          result.push(
            <div key={`group-${i}`} class={`${prefixCls}-item-group`}>
              <div class={`${prefixCls}-item-group-label`}>{getFieldValue(opt, groupLabelField.value, 'label')}</div>
              {renderOptionList(nestedOpts)}
            </div>,
          )
        } else {
          // 叶子选项：复用 renderOptionItem，index 取扁平 filteredOptions 下标（高亮对齐）
          result.push(renderOptionItem(opt, filteredOptions.value.indexOf(opt)))
        }
      })
      return result
    }

    // 单个叶子选项渲染（虚拟 VirtualList.renderItem 与非虚拟 renderOptionList 共用）。
    // index 为该选项在扁平 filteredOptions 中的下标，用于 activeIndex 高亮对齐。
    const renderOptionItem = (opt: SelectOption, index: number) => {
      const val = getFieldValue(opt, valueField.value, 'value') as string | number
      const label = String(getFieldValue(opt, labelField.value, 'label'))
      const isSelected = selectedValues.value.includes(val)
      const isActive = index === activeIndex.value

      return h(
        'div',
        {
          key: val,
          class: cls(
            `${prefixCls}-item`,
            `${prefixCls}-item-option`,
            {
              [`${prefixCls}-item-option-selected`]: isSelected,
              [`${prefixCls}-item-option-disabled`]: opt.disabled,
              [`${prefixCls}-item-option-active`]: !opt.disabled && isActive,
            },
            props.classNames?.option,
          ),
          style: props.styles?.option,
          role: 'option',
          'aria-selected': isSelected,
          'aria-disabled': opt.disabled || undefined,
          title: opt.title ?? label,
          onMousedown: (e: MouseEvent) => e.preventDefault(),
          onClick: () => {
            if (!opt.disabled) selectOption(opt)
          },
          onMouseenter: () => {
            if (!opt.disabled) activeIndex.value = index
          },
        },
        renderOptionContent(opt, index, isSelected, label),
      )
    }

    const renderDropdownContent = () => {
      if (filteredOptions.value.length === 0) {
        return (
          <div class={`${prefixCls}-item-empty`}>{props.notFoundContent ?? locale.value.Select.notFoundContent}</div>
        )
      }

      if (props.virtual) {
        return (
          <VirtualList
            data={filteredOptions.value}
            height={props.listHeight}
            itemHeight={props.listItemHeight}
            renderItem={renderOptionItem}
            itemKey={(opt: SelectOption, index: number) =>
              String(getFieldValue(opt, valueField.value, 'value') ?? index)
            }
          />
        )
      }

      // 非虚拟渲染：使用过滤后仍保留分组结构的 filteredTree
      return renderOptionList(filteredTree.value)
    }

    return () => {
      const hasValue = selectedValues.value.length > 0
      const showClear = props.allowClear && hasValue && !props.disabled

      const displayTags = isMultiple.value
        ? props.maxTagCount !== undefined
          ? selectedValues.value.slice(0, props.maxTagCount)
          : selectedValues.value
        : []
      const overflowCount =
        isMultiple.value && props.maxTagCount !== undefined
          ? Math.max(0, selectedValues.value.length - props.maxTagCount)
          : 0
      const omittedValues =
        isMultiple.value && props.maxTagCount !== undefined ? selectedValues.value.slice(props.maxTagCount) : []

      const renderTag = (val: string | number) => {
        const label = selectedLabels.value[selectedValues.value.indexOf(val)]
        const onClose = () => removeTag(val, new MouseEvent('click'))

        if (props.tagRender) {
          return props.tagRender({ label, value: val, closable: !props.disabled, onClose })
        }

        return (
          <span key={val} class={`${prefixCls}-selection-item`}>
            <span class={`${prefixCls}-selection-item-content`}>{label}</span>
            {!props.disabled && (
              <span class={`${prefixCls}-selection-item-remove`} onClick={(e) => removeTag(val, e)}>
                ×
              </span>
            )}
          </span>
        )
      }

      const renderSelectedLabel = () => {
        if (!hasValue) return null
        const firstVal = selectedValues.value[0]
        const labeledVal = getLabeledValue(firstVal)
        if (props.labelRender) {
          return props.labelRender(labeledVal)
        }
        return selectedLabels.value[0]
      }

      // 占位符与搜索框在多选/单选分支中重复出现，抽取复用
      const renderPlaceholder = () => (
        <span
          class={cls(`${prefixCls}-selection-placeholder`, props.classNames?.placeholder)}
          style={props.styles?.placeholder}
        >
          {props.placeholder ?? locale.value.Select.placeholder}
        </span>
      )

      const renderSearchInput = () => (
        <input
          ref={searchRef}
          class={`${prefixCls}-selection-search-input`}
          value={searchText.value}
          onInput={handleSearchInput}
        />
      )

      // 多选/tags 模式的选择器内容：标签 + 溢出计数 + 搜索框 + 占位符
      const renderMultipleSelection = () => (
        <>
          {displayTags.map((val) => renderTag(val))}
          {overflowCount > 0 && (
            <span class={cls(`${prefixCls}-selection-item`, props.classNames?.item)} style={props.styles?.item}>
              {typeof props.maxTagPlaceholder === 'function'
                ? props.maxTagPlaceholder(omittedValues)
                : (props.maxTagPlaceholder ?? `+${overflowCount}`)}
            </span>
          )}
          {enableSearch.value && renderSearchInput()}
          {!hasValue && !searchText.value && renderPlaceholder()}
        </>
      )

      // 单选模式的选择器内容：已选标签 / 占位符 + 搜索框
      const renderSingleSelection = () => (
        <>
          {hasValue && !searchText.value ? (
            <span class={cls(`${prefixCls}-selection-item`, props.classNames?.item)} style={props.styles?.item}>
              {renderSelectedLabel()}
            </span>
          ) : (
            !searchText.value && renderPlaceholder()
          )}
          {enableSearch.value && isOpen.value && renderSearchInput()}
        </>
      )

      // Trigger default 插槽：选择器 + 后缀箭头/loading + 清除按钮
      const renderSelector = () => (
        <>
          <div
            ref={selectorRef}
            class={cls(`${prefixCls}-selector`, props.classNames?.selector)}
            style={props.styles?.selector}
            role="combobox"
            aria-expanded={isOpen.value}
            aria-haspopup="listbox"
            aria-disabled={props.disabled || undefined}
            tabindex={props.disabled ? -1 : 0}
            onKeydown={handleKeydown}
            onFocus={() => emit('focus')}
            onBlur={() => emit('blur')}
          >
            {isMultiple.value ? renderMultipleSelection() : renderSingleSelection()}
          </div>

          <div class={cls(`${prefixCls}-arrow`, props.classNames?.arrow)} style={props.styles?.arrow}>
            {props.loading
              ? h(LoadingOutlined, { class: cls('hmfw-icon', 'hmfw-icon-spin', `${prefixCls}-loading-icon`) })
              : h(DownOutlined, {
                  class: cls(`${prefixCls}-suffix`, { [`${prefixCls}-suffix-open`]: isOpen.value }),
                })}
          </div>

          {showClear && (
            <span
              class={cls(`${prefixCls}-clear`, props.classNames?.clear)}
              style={props.styles?.clear}
              onClick={clearAll}
            >
              ×
            </span>
          )}
        </>
      )

      return (
        <Trigger
          open={isOpen.value}
          trigger="click"
          placement={'bottomLeft' as Placement}
          disabled={props.disabled}
          destroyOnHidden
          matchWidth={props.dropdownMatchSelectWidth}
          triggerClass={cls(
            prefixCls,
            `${prefixCls}-${props.size}`,
            {
              [`${prefixCls}-open`]: isOpen.value,
              [`${prefixCls}-disabled`]: props.disabled,
              [`${prefixCls}-loading`]: props.loading,
              [`${prefixCls}-multiple`]: isMultiple.value,
              [`${prefixCls}-status-${props.status}`]: !!props.status,
              [`${prefixCls}-allow-clear`]: props.allowClear,
            },
            props.classNames?.root,
          )}
          triggerStyle={props.styles?.root}
          popupClass={cls(`${prefixCls}-dropdown`, `${prefixCls}-dropdown-${props.size}`, props.classNames?.dropdown)}
          popupStyle={props.styles?.dropdown}
          onOpenChange={(v: boolean) => {
            if (v) openDropdown()
            else closeDropdown()
          }}
        >
          {{
            default: renderSelector,
            popup: () => renderDropdownContent(),
          }}
        </Trigger>
      )
    }
  },
})
