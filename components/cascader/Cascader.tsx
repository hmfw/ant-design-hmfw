import { defineComponent, ref, computed, watch, h, type PropType, type VNode } from 'vue'
import { usePrefixCls, useLocale } from '../config-provider'
import { cls } from '../_utils/cls'
import { DownOutlined, RightOutlined, CloseCircleFilled } from '@hmfw/icons'
import { Trigger } from '../_internal/trigger'
import type { Placement } from '../_internal/trigger'
import { VirtualList } from '../_internal/virtual-list'
import type {
  CascaderOption,
  CascaderValue,
  CascaderExpandTrigger,
  CascaderShowCheckedStrategy,
  CascaderFieldNames,
  CascaderClassNames,
  CascaderStyles,
  CascaderProps,
} from './types'
import type { ComponentSize } from '../config-provider'

// 搜索展平条目：label/value 路径 + 对应 option 路径
type FlatOption = {
  labels: string[]
  values: (string | number)[]
  options: CascaderOption[]
}

// ---------------------------------------------------------------
// 多选父子联动传导（对齐 AntD rc-tree conductCheck 语义）
// ---------------------------------------------------------------

// 实体 key 分隔符：值路径拼接为唯一 key，避免 ['a','bc'] 与 ['ab','c'] 冲突
const VALUE_SPLIT = '__SPLIT__'

type CascaderEntity = {
  key: string
  path: CascaderValue
  parentKey: string | null
  childrenKeys: string[]
  level: number
  node: CascaderOption
}

const toPathKey = (path: CascaderValue) => path.join(VALUE_SPLIT)

/**
 * 勾选传导：
 * - fill（勾选后）：已选节点的所有后代补全为选中；自底向上，子全选则父选中、部分选则父半选
 * - clean（取消后）：未选且未半选节点的后代移出选中集；自底向上，子不全选则父移出、部分选则父半选
 * - disabled 节点不参与传导（不向子传导，计算父状态时忽略）
 */
const conductCheck = (
  keys: string[],
  checked: true | { checked: false; halfCheckedKeys: string[] },
  entities: Record<string, CascaderEntity>,
): { checkedKeys: string[]; halfCheckedKeys: string[] } => {
  const isDisabled = (entity: CascaderEntity) => entity.node.disabled

  // 仅保留存在于实体中的 key
  const checkedKeys = new Set(keys.filter((key) => entities[key]))
  const halfCheckedKeys = new Set<string>(checked === true ? [] : checked.halfCheckedKeys)

  // 按层级分组，便于自顶向下 / 自底向上逐层扫描
  const levelEntities = new Map<number, CascaderEntity[]>()
  let maxLevel = 0
  Object.values(entities).forEach((entity) => {
    const list = levelEntities.get(entity.level) ?? []
    list.push(entity)
    levelEntities.set(entity.level, list)
    maxLevel = Math.max(maxLevel, entity.level)
  })
  const forLevel = (level: number) => levelEntities.get(level) ?? []

  if (checked === true) {
    // fill：自顶向下补全选中节点的后代（逐层扫描，孙级由下一层继续向下传导）
    for (let level = 0; level <= maxLevel; level += 1) {
      forLevel(level).forEach((entity) => {
        if (checkedKeys.has(entity.key) && !isDisabled(entity)) {
          entity.childrenKeys.forEach((childKey) => {
            if (!isDisabled(entities[childKey])) checkedKeys.add(childKey)
          })
        }
      })
    }
  } else {
    // clean：自顶向下移除未选且未半选节点的后代
    for (let level = 0; level <= maxLevel; level += 1) {
      forLevel(level).forEach((entity) => {
        if (!checkedKeys.has(entity.key) && !halfCheckedKeys.has(entity.key) && !isDisabled(entity)) {
          entity.childrenKeys.forEach((childKey) => {
            if (!isDisabled(entities[childKey])) checkedKeys.delete(childKey)
          })
        }
      })
    }
  }

  // 自底向上计算父节点状态。半选集在扫描过程中动态累积：低层父先判定半选，
  // 高层的祖父节点即可感知子节点半选（对齐 AntD fillConductCheck）
  const visited = new Set<string>()
  const resultHalfKeys = new Set<string>()
  for (let level = maxLevel; level >= 0; level -= 1) {
    forLevel(level).forEach((entity) => {
      const parent = entity.parentKey ? entities[entity.parentKey] : null
      if (!parent || isDisabled(entity) || visited.has(parent.key)) return
      if (isDisabled(parent)) {
        visited.add(parent.key)
        return
      }

      let allChecked = true
      let partialChecked = false
      parent.childrenKeys.forEach((childKey) => {
        if (isDisabled(entities[childKey])) return
        const childChecked = checkedKeys.has(childKey)
        if (allChecked && !childChecked) allChecked = false
        if (!partialChecked && (childChecked || resultHalfKeys.has(childKey))) partialChecked = true
      })

      if (checked === true) {
        if (allChecked) checkedKeys.add(parent.key)
      } else if (!allChecked) {
        checkedKeys.delete(parent.key)
      }
      if (partialChecked) resultHalfKeys.add(parent.key)

      visited.add(parent.key)
    })
  }

  // 半选集排除全选节点
  const finalHalfKeys = [...resultHalfKeys].filter((key) => !checkedKeys.has(key))
  return { checkedKeys: [...checkedKeys], halfCheckedKeys: finalHalfKeys }
}

/**
 * 按 showCheckedStrategy 对传导后的全选集去重（对齐 AntD formatStrategyValues）：
 * SHOW_CHILD 保留无选中子节点的路径（叶子）；SHOW_PARENT 保留父未被选中的路径（顶层）
 */
const formatStrategyKeys = (
  keys: string[],
  entities: Record<string, CascaderEntity>,
  strategy: CascaderShowCheckedStrategy,
) => {
  const keySet = new Set(keys)
  return keys.filter((key) => {
    const entity = entities[key]
    if (!entity) return false
    // disabled 节点不参与去重折叠，恒保留
    if (entity.node.disabled) return true
    if (strategy === 'SHOW_CHILD') {
      return !entity.childrenKeys.some((childKey) => keySet.has(childKey))
    }
    const parent = entity.parentKey ? entities[entity.parentKey] : null
    return !(parent && !parent.node.disabled && keySet.has(parent.key))
  })
}

// 运行时 props 与 TypeScript 接口强制一致，杜绝双源头漂移
const cascaderProps = {
  value: { type: Array as PropType<CascaderValue | CascaderValue[]>, default: undefined },
  defaultValue: {
    type: Array as PropType<CascaderValue | CascaderValue[]>,
    default: () => [] as CascaderValue | CascaderValue[],
  },
  options: { type: Array as PropType<CascaderOption[]>, default: () => [] as CascaderOption[] },
  disabled: { type: Boolean, default: false },
  // 缺省文案来自语言包，故不写字面量默认值
  placeholder: { type: String, default: undefined },
  allowClear: { type: Boolean, default: true },
  size: { type: String as PropType<ComponentSize>, default: 'middle' },
  status: { type: String as PropType<'error' | 'warning' | ''>, default: '' },
  expandTrigger: { type: String as PropType<CascaderExpandTrigger>, default: 'click' },
  multiple: { type: Boolean, default: false },
  showSearch: { type: Boolean, default: false },
  changeOnSelect: { type: Boolean, default: false },
  displayRender: {
    type: Function as PropType<(labels: string[], selectedOptions?: CascaderOption[]) => string | VNode>,
    default: undefined,
  },
  fieldNames: { type: Object as PropType<CascaderFieldNames>, default: undefined },
  open: { type: Boolean, default: undefined },
  defaultOpen: { type: Boolean, default: false },
  notFoundContent: { type: String, default: undefined },
  loadData: { type: Function as PropType<(selectedOptions: CascaderOption[]) => void>, default: undefined },
  showCheckedStrategy: {
    type: String as PropType<CascaderShowCheckedStrategy>,
    default: 'SHOW_PARENT',
  },
  maxTagCount: { type: Number, default: undefined },
  maxTagPlaceholder: {
    type: [String, Function] as PropType<string | ((omittedValues: CascaderValue[]) => string)>,
    default: undefined,
  },
  maxTagTextLength: { type: Number, default: undefined },
  classNames: { type: Object as PropType<CascaderClassNames>, default: undefined },
  styles: { type: Object as PropType<CascaderStyles>, default: undefined },

  // 虚拟滚动
  virtual: { type: Boolean, default: false },
  listHeight: { type: Number, default: 180 },
  listItemHeight: { type: Number, default: 32 },
} satisfies Record<keyof CascaderProps, any>

export const Cascader = defineComponent({
  name: 'Cascader',
  inheritAttrs: false,
  props: cascaderProps,
  emits: ['update:value', 'update:open', 'change', 'search', 'clear'],
  setup(props, { emit, attrs, expose }) {
    const prefixCls = usePrefixCls('cascader')
    const locale = useLocale()
    // 复用 Select 段文案：Cascader 的占位符与空状态语义与 Select 一致
    const mergedPlaceholder = computed(() => props.placeholder ?? locale.value.Select.placeholder)
    const mergedNotFoundContent = computed(() => props.notFoundContent ?? locale.value.Select.notFoundContent)

    const labelField = computed(() => props.fieldNames?.label ?? 'label')
    const valueField = computed(() => props.fieldNames?.value ?? 'value')
    const childrenField = computed(() => props.fieldNames?.children ?? 'children')

    const getLabel = (opt: CascaderOption) => opt[labelField.value as keyof CascaderOption] as string
    const getValue = (opt: CascaderOption) => opt[valueField.value as keyof CascaderOption] as string | number
    const getChildren = (opt: CascaderOption) =>
      opt[childrenField.value as keyof CascaderOption] as CascaderOption[] | undefined

    // Normalize value to array of paths (for multiple) or single path
    const normalizeValue = (v: CascaderValue | CascaderValue[] | undefined): CascaderValue[] => {
      if (!v) return []
      if (props.multiple) {
        // Multiple: array of paths [[a,b], [c,d]]
        if (Array.isArray(v) && v.length > 0 && Array.isArray(v[0])) return v as CascaderValue[]
        return []
      }
      // Single: one path [a,b,c]
      if (Array.isArray(v) && v.length > 0 && !Array.isArray(v[0])) return [v as CascaderValue]
      return []
    }

    const innerValue = ref<CascaderValue[]>(normalizeValue(props.defaultValue ?? props.value))
    const innerOpen = ref(props.defaultOpen ?? false)
    const activePath = ref<(string | number)[]>([])
    const searchText = ref('')
    const triggerRef = ref<HTMLElement>()
    const inputRef = ref<HTMLInputElement>()

    const isControlled = computed(() => props.value !== undefined)
    const currentValue = computed(() => (isControlled.value ? normalizeValue(props.value) : innerValue.value))
    const isOpen = computed(() => (props.open !== undefined ? props.open : innerOpen.value))

    watch(
      () => props.value,
      (v) => {
        if (v !== undefined) innerValue.value = normalizeValue(v)
      },
    )

    // Build option path from value path
    const getOptionPath = (valPath: CascaderValue, opts: CascaderOption[]): CascaderOption[] => {
      const result: CascaderOption[] = []
      let list = opts
      for (const v of valPath) {
        const found = list.find((o) => getValue(o) === v)
        if (!found) break
        result.push(found)
        list = getChildren(found) ?? []
      }
      return result
    }

    // Build label path from value path
    const getLabelPath = (valPath: CascaderValue, opts: CascaderOption[]): string[] => {
      return getOptionPath(valPath, opts).map(getLabel)
    }

    // 值路径 → 节点实体映射（用于父子联动传导）
    const pathKeyEntities = computed<Record<string, CascaderEntity>>(() => {
      const entities: Record<string, CascaderEntity> = {}
      const walk = (opts: CascaderOption[], parentPath: CascaderValue, parentKey: string | null, level: number) => {
        for (const opt of opts) {
          const path = [...parentPath, getValue(opt)]
          const key = toPathKey(path)
          const children = getChildren(opt)
          const hasChildren = !!children?.length && !opt.isLeaf
          entities[key] = {
            key,
            path,
            parentKey,
            childrenKeys: hasChildren ? children!.map((c) => toPathKey([...path, getValue(c)])) : [],
            level,
            node: opt,
          }
          if (hasChildren) walk(children!, path, key, level + 1)
        }
      }
      walk(props.options, [], null, 0)
      return entities
    })

    // 对当前值做 fill 传导，得到面板全选 / 半选路径集（对齐 AntD useValues）
    const conducted = computed(() => {
      const keys = currentValue.value.map(toPathKey)
      if (!props.multiple || keys.length === 0) {
        return { checkedKeys: keys, halfCheckedKeys: [] as string[] }
      }
      return conductCheck(keys, true, pathKeyEntities.value)
    })

    // 按 showCheckedStrategy 计算多选 tag 展示路径集（对齐 AntD）：
    // 对当前值传导补齐父子联动后，再按策略去重展示
    const getDisplayedPaths = computed<CascaderValue[]>(() => {
      const paths = currentValue.value
      if (!props.multiple || paths.length === 0) return paths

      const entities = pathKeyEntities.value
      const dedupedKeys = formatStrategyKeys(conducted.value.checkedKeys, entities, props.showCheckedStrategy)
      return dedupedKeys.map((key) => entities[key].path)
    })

    // 搜索高亮辅助函数
    const highlightText = (text: string, keyword: string): VNode[] => {
      if (!keyword) return [text as any]

      const lowerText = text.toLowerCase()
      const lowerKeyword = keyword.toLowerCase()
      const index = lowerText.indexOf(lowerKeyword)

      if (index === -1) return [text as any]

      const before = text.slice(0, index)
      const match = text.slice(index, index + keyword.length)
      const after = text.slice(index + keyword.length)

      const nodes: VNode[] = []
      if (before) nodes.push(before as any)
      nodes.push(
        (
          <span
            class={cls(`${prefixCls}-menu-item-highlight`, props.classNames?.menuItemHighlight)}
            style={props.styles?.menuItemHighlight}
          >
            {match}
          </span>
        ) as VNode,
      )
      if (after) nodes.push(...highlightText(after, keyword))

      return nodes
    }

    const displayText = computed(() => {
      if (props.multiple) {
        const paths = getDisplayedPaths.value
        if (paths.length === 0) return ''
        // For multiple, show first path or tag count
        const firstLabels = getLabelPath(paths[0], props.options)
        const firstOptions = getOptionPath(paths[0], props.options)
        if (props.displayRender) return props.displayRender(firstLabels, firstOptions)
        return firstLabels.join(' / ')
      } else {
        if (currentValue.value.length === 0) return ''
        const labels = getLabelPath(currentValue.value[0], props.options)
        const options = getOptionPath(currentValue.value[0], props.options)
        if (props.displayRender) return props.displayRender(labels, options)
        return labels.join(' / ')
      }
    })

    // Columns to show
    const columns = computed<CascaderOption[][]>(() => {
      const cols: CascaderOption[][] = [props.options]
      let list = props.options
      for (const v of activePath.value) {
        const found = list.find((o) => getValue(o) === v)
        if (!found) break
        const children = getChildren(found)
        if (children?.length) {
          cols.push(children)
          list = children
        } else break
      }
      return cols
    })

    // Search: flatten all leaf paths
    const flatOptions = computed(() => {
      const result: FlatOption[] = []
      const flatten = (
        opts: CascaderOption[],
        labels: string[],
        values: (string | number)[],
        optPath: CascaderOption[],
      ) => {
        for (const opt of opts) {
          const newLabels = [...labels, getLabel(opt)]
          const newValues = [...values, getValue(opt)]
          const newOptPath = [...optPath, opt]
          const children = getChildren(opt)
          if (children?.length && !opt.isLeaf) {
            flatten(children, newLabels, newValues, newOptPath)
          } else {
            result.push({ labels: newLabels, values: newValues, options: newOptPath })
          }
        }
      }
      flatten(props.options, [], [], [])
      return result
    })

    const filteredOptions = computed(() => {
      if (!searchText.value) return null
      const q = searchText.value.toLowerCase()
      return flatOptions.value.filter((item) => item.labels.some((l) => l.toLowerCase().includes(q)))
    })

    const open = () => {
      if (props.disabled) return
      // 打开时恢复已选路径的激活状态（单选/多选一致），便于直接看到当前选中项
      if (currentValue.value.length > 0) {
        activePath.value = [...currentValue.value[0]]
      }
      innerOpen.value = true
      emit('update:open', true)
    }

    const close = () => {
      innerOpen.value = false
      searchText.value = ''
      emit('update:open', false)
    }

    const emitChange = (paths: CascaderValue[]) => {
      // 值已按 showCheckedStrategy 去重（对齐 AntD：value 存储去重后的勾选集，
      // 渲染时再传导补齐父子联动），v-model 回流后勾选状态不丢失
      const outValue = props.multiple ? paths : (paths[0] ?? [])
      const outOptions = props.multiple
        ? paths.map((p) => getOptionPath(p, props.options))
        : getOptionPath(paths[0] ?? [], props.options)
      emit('update:value', outValue)
      emit('change', outValue, outOptions)
    }

    // 多选勾选/取消传导（对齐 AntD useSelect）：
    // 对传导后的全选集增删目标路径，重新传导后按策略去重写回值
    const togglePathCheck = (path: CascaderValue) => {
      const entities = pathKeyEntities.value
      const key = toPathKey(path)
      if (!entities[key]) return

      const checkedKeys = conducted.value.checkedKeys
      const isChecked = checkedKeys.includes(key)
      const nextRawKeys = isChecked ? checkedKeys.filter((k) => k !== key) : [...checkedKeys, key]
      const nextCheckedKeys = conductCheck(
        nextRawKeys,
        isChecked ? { checked: false, halfCheckedKeys: conducted.value.halfCheckedKeys } : true,
        entities,
      ).checkedKeys

      const dedupedKeys = formatStrategyKeys(nextCheckedKeys, entities, props.showCheckedStrategy)
      const paths = dedupedKeys.map((k) => entities[k].path)
      innerValue.value = paths
      emitChange(paths)
    }

    // 菜单项点击：始终展开下一列；勾选仅发生在叶子节点 / 单选场景（对齐 AntD Column）
    const handleOptionClick = (opt: CascaderOption, colIndex: number) => {
      if (opt.disabled) return
      const newPath = [...activePath.value.slice(0, colIndex), getValue(opt)]
      activePath.value = newPath
      const children = getChildren(opt)
      const isLeaf = !children?.length || opt.isLeaf

      if (props.loadData && !isLeaf && !children?.length) {
        // Lazy load：加载下一列数据（与勾选相互独立，multiple 下不阻断勾选）
        const optPath = getOptionPath(newPath, props.options)
        props.loadData(optPath)
        if (!props.multiple) return
      }

      if (props.multiple) {
        // 多选：非叶子节点勾选必须点击 checkbox（点击菜单项仅展开，避免误取消）；
        // 叶子节点点击整个菜单项即勾选（对齐 AntD）
        if (isLeaf) togglePathCheck(newPath)
      } else {
        // Single mode
        if (isLeaf || props.changeOnSelect) {
          innerValue.value = [newPath]
          emitChange([newPath])
          if (isLeaf) close()
        }
      }
    }

    // 多选 checkbox 点击：仅勾选/取消 toggle，不展开列（对齐 AntD Checkbox 独立绑定）
    const handleCheckboxClick = (opt: CascaderOption, colIndex: number) => {
      if (opt.disabled) return
      const newPath = [...activePath.value.slice(0, colIndex), getValue(opt)]
      togglePathCheck(newPath)
    }

    const handleOptionHover = (opt: CascaderOption, colIndex: number) => {
      if (props.expandTrigger !== 'hover' || opt.disabled) return
      const newPath = [...activePath.value.slice(0, colIndex), getValue(opt)]
      activePath.value = newPath
    }

    const handleSearchSelect = (values: (string | number)[], _options: CascaderOption[]) => {
      if (props.multiple) {
        // 搜索项为叶子路径，勾选/取消同样走父子联动传导（对齐 AntD）
        togglePathCheck(values)
        // 选中后清空搜索词，便于继续输入（对齐 AntD autoClearSearchValue 默认行为）
        searchText.value = ''
      } else {
        innerValue.value = [values]
        emitChange([values])
        close()
      }
    }

    const handleClear = (e: MouseEvent) => {
      e.stopPropagation()
      innerValue.value = []
      emitChange([])
      emit('clear')
    }

    const handleRemoveTag = (path: CascaderValue, e: MouseEvent) => {
      e.stopPropagation()
      // 移除 tag 等价于取消该展示路径：走传导取消，自动连带移除其所有后代（对齐 AntD）
      togglePathCheck(path)
    }

    expose({
      focus: () => inputRef.value?.focus(),
      blur: () => inputRef.value?.blur(),
    })

    // 搜索命中条目（虚拟/非虚拟列表共用）
    const renderSearchItem = (item: FlatOption, index: number) => (
      <div
        key={index}
        role="option"
        class={cls(`${prefixCls}-menu-item`, props.classNames?.menuItem)}
        style={props.styles?.menuItem}
        onMousedown={(e: MouseEvent) => {
          e.preventDefault()
          handleSearchSelect(item.values, item.options)
        }}
      >
        {highlightText(item.labels.join(' / '), searchText.value)}
      </div>
    )

    // 搜索模式下拉内容
    const renderSearchMenu = () => {
      const items = filteredOptions.value ?? []
      return (
        <div
          role="listbox"
          class={cls(`${prefixCls}-menu`, `${prefixCls}-menu-search`, props.classNames?.menu)}
          style={props.styles?.menu}
        >
          {items.length === 0 ? (
            <div
              class={cls(`${prefixCls}-menu-item-empty`, props.classNames?.menuItemEmpty)}
              style={props.styles?.menuItemEmpty}
            >
              {mergedNotFoundContent.value}
            </div>
          ) : props.virtual ? (
            <VirtualList
              data={items}
              height={Math.min(props.listHeight, items.length * props.listItemHeight)}
              itemHeight={props.listItemHeight}
              renderItem={renderSearchItem}
              itemKey={(_item: FlatOption, index: number) => String(index)}
            />
          ) : (
            items.map((item, i) => renderSearchItem(item, i))
          )}
        </div>
      )
    }

    // 单列选项条目（虚拟滚动容器为 div，li 需改为 div 避免非法 HTML 嵌套）
    const renderColumnItem = (opt: CascaderOption, colIndex: number, tag: 'li' | 'div' = 'li') => {
      const val = getValue(opt)
      const children = getChildren(opt)
      const hasChildren = !!children?.length && !opt.isLeaf
      const isActive = activePath.value[colIndex] === val
      // 面板勾选状态基于传导后的全选/半选集（对齐 AntD：父选则子全选、子全选则父选中）
      const { checkedKeys, halfCheckedKeys } = conducted.value
      const pathKey = toPathKey([...activePath.value.slice(0, colIndex), val])
      const isSelected = props.multiple
        ? checkedKeys.some((key) => {
            const p = pathKeyEntities.value[key].path
            return p[colIndex] === val && p.length > colIndex
          })
        : currentValue.value[0]?.[colIndex] === val
      // 多选 checkbox 三态：完整选中 / 半选（部分子路径选中）/ 未选
      const isChecked = props.multiple && checkedKeys.includes(pathKey)
      const isIndeterminate = props.multiple && halfCheckedKeys.includes(pathKey)

      return h(
        tag,
        {
          key: val,
          class: cls(
            `${prefixCls}-menu-item`,
            {
              [`${prefixCls}-menu-item-active`]: isActive,
              [`${prefixCls}-menu-item-selected`]: isSelected,
              [`${prefixCls}-menu-item-disabled`]: opt.disabled,
              [`${prefixCls}-menu-item-expand`]: hasChildren,
            },
            props.classNames?.menuItem,
          ),
          style: props.styles?.menuItem,
          // 无障碍：菜单语义 + 三态 aria-checked + Enter 键选择（对齐 AntD rc-cascader）
          role: props.multiple ? 'menuitemcheckbox' : 'menuitem',
          'aria-checked': props.multiple ? (isChecked ? 'true' : isIndeterminate ? 'mixed' : 'false') : undefined,
          'aria-disabled': opt.disabled,
          'aria-expanded': hasChildren,
          tabindex: -1,
          onClick: () => handleOptionClick(opt, colIndex),
          onMouseenter: () => handleOptionHover(opt, colIndex),
          onKeydown: (e: KeyboardEvent) => {
            // Enter：多选为勾选 toggle（对齐 AntD 键盘选择），单选走菜单项选择逻辑
            if (e.key === 'Enter') {
              if (props.multiple) handleCheckboxClick(opt, colIndex)
              else handleOptionClick(opt, colIndex)
            }
          },
        },
        [
          props.multiple &&
            h(
              'span',
              {
                class: cls(
                  `${prefixCls}-menu-item-checkbox`,
                  {
                    [`${prefixCls}-menu-item-checkbox-checked`]: isChecked,
                    [`${prefixCls}-menu-item-checkbox-indeterminate`]: isIndeterminate,
                  },
                  props.classNames?.menuItemCheckbox,
                ),
                style: props.styles?.menuItemCheckbox,
                'aria-hidden': true,
                // 勾选仅绑定在 checkbox 上，阻止冒泡避免触发菜单项展开
                onClick: (e: MouseEvent) => {
                  e.stopPropagation()
                  handleCheckboxClick(opt, colIndex)
                },
              },
              [isChecked ? '✓' : isIndeterminate ? '−' : ''],
            ),
          h(
            'span',
            {
              class: cls(`${prefixCls}-menu-item-content`, props.classNames?.menuItemContent),
              style: props.styles?.menuItemContent,
            },
            [getLabel(opt)],
          ),
          hasChildren &&
            h(RightOutlined, {
              class: cls(`${prefixCls}-menu-item-expand-icon`, props.classNames?.menuItemExpandIcon),
              style: props.styles?.menuItemExpandIcon,
            }),
        ],
      )
    }

    // 单列面板：选项超过 10 条时启用独立虚拟滚动
    const renderColumn = (colOpts: CascaderOption[], colIndex: number) => {
      if (props.virtual && colOpts.length > 10) {
        return (
          <VirtualList
            key={colIndex}
            data={colOpts}
            height={Math.min(props.listHeight, colOpts.length * props.listItemHeight)}
            itemHeight={props.listItemHeight}
            renderItem={(opt: CascaderOption) => renderColumnItem(opt, colIndex, 'div')}
            itemKey={(opt: CascaderOption) => getValue(opt)}
          />
        )
      }

      return (
        <ul
          key={colIndex}
          role="menu"
          class={cls(`${prefixCls}-menu`, props.classNames?.menu)}
          style={props.styles?.menu}
        >
          {colOpts.map((opt) => renderColumnItem(opt, colIndex))}
        </ul>
      )
    }

    const renderDropdownContent = () =>
      filteredOptions.value ? (
        renderSearchMenu()
      ) : (
        <div class={cls(`${prefixCls}-menus`, props.classNames?.menus)} style={props.styles?.menus}>
          {columns.value.map((colOpts, colIndex) => renderColumn(colOpts, colIndex))}
        </div>
      )

    // 多选 tag：标签文本（displayRender 自定义 / 路径拼接）+ 长度截断 + 移除按钮
    const renderTag = (path: CascaderValue) => {
      const labels = getLabelPath(path, props.options)
      const options = getOptionPath(path, props.options)
      let text: string | VNode = props.displayRender ? props.displayRender(labels, options) : labels.join(' / ')
      if (typeof text === 'string' && props.maxTagTextLength && text.length > props.maxTagTextLength) {
        text = text.slice(0, props.maxTagTextLength) + '...'
      }
      return (
        <span
          key={path.join('-')}
          class={cls(`${prefixCls}-selection-item`, props.classNames?.selectionItem)}
          style={props.styles?.selectionItem}
        >
          <span
            class={cls(`${prefixCls}-selection-item-content`, props.classNames?.selectionItemContent)}
            style={props.styles?.selectionItemContent}
          >
            {text}
          </span>
          {!props.disabled && (
            <span
              class={cls(`${prefixCls}-selection-item-remove`, props.classNames?.selectionItemRemove)}
              style={props.styles?.selectionItemRemove}
              onClick={(e) => handleRemoveTag(path, e)}
            >
              ×
            </span>
          )}
        </span>
      )
    }

    // maxTagCount 溢出 tag（仅在调用处 maxTagCount 守卫内渲染，?? 兜底仅为类型收窄）
    const renderOverflowTag = () => {
      const paths = getDisplayedPaths.value
      const maxCount = props.maxTagCount ?? paths.length
      return (
        <span
          class={cls(`${prefixCls}-selection-item`, props.classNames?.selectionItem)}
          style={props.styles?.selectionItem}
        >
          {typeof props.maxTagPlaceholder === 'function'
            ? props.maxTagPlaceholder(paths.slice(maxCount))
            : (props.maxTagPlaceholder ?? `+${paths.length - maxCount}`)}
        </span>
      )
    }

    // 搜索输入框：多选/单选仅占位符不同，抽取复用
    const renderSearchInput = (placeholder: string) => (
      <input
        ref={inputRef}
        class={cls(`${prefixCls}-search-input`, props.classNames?.searchInput)}
        style={props.styles?.searchInput}
        value={searchText.value}
        placeholder={placeholder}
        onInput={(e) => {
          searchText.value = (e.target as HTMLInputElement).value
          emit('search', searchText.value)
        }}
        onClick={(e) => e.stopPropagation()}
        autofocus={true}
      />
    )

    const renderPlaceholder = () => (
      <span
        class={cls(`${prefixCls}-selection-placeholder`, props.classNames?.selectionPlaceholder)}
        style={props.styles?.selectionPlaceholder}
      >
        {mergedPlaceholder.value}
      </span>
    )

    // 多选模式选择器内容：tag 列表 + 溢出计数 + 搜索框 + 占位符
    const renderMultipleSelection = () => (
      <>
        {getDisplayedPaths.value
          .slice(0, props.maxTagCount ?? getDisplayedPaths.value.length)
          .map((path) => renderTag(path))}
        {props.maxTagCount && getDisplayedPaths.value.length > props.maxTagCount && renderOverflowTag()}
        {props.showSearch &&
          isOpen.value &&
          renderSearchInput(currentValue.value.length === 0 ? mergedPlaceholder.value : '')}
        {currentValue.value.length === 0 && !searchText.value && renderPlaceholder()}
      </>
    )

    // 单选模式选择器内容：已选标签 / 占位符 + 搜索框
    const renderSingleSelection = () => (
      <>
        {props.showSearch && isOpen.value ? (
          renderSearchInput(
            typeof displayText.value === 'string'
              ? displayText.value || mergedPlaceholder.value
              : mergedPlaceholder.value,
          )
        ) : (
          <span
            class={cls(
              `${prefixCls}-selection-item`,
              { [`${prefixCls}-selection-placeholder`]: !displayText.value },
              props.classNames?.selectionItem,
            )}
            style={props.styles?.selectionItem}
          >
            {displayText.value || mergedPlaceholder.value}
          </span>
        )}
      </>
    )

    // 后缀图标：有值且可清除时显示清除按钮，否则显示箭头
    const renderSuffix = () => (
      <span class={cls(`${prefixCls}-suffix`, props.classNames?.suffix)} style={props.styles?.suffix}>
        {props.allowClear && currentValue.value.length > 0 && !props.disabled ? (
          <CloseCircleFilled
            class={cls(`${prefixCls}-clear`, props.classNames?.clear)}
            style={props.styles?.clear}
            onMousedown={handleClear}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <DownOutlined
            class={cls(`${prefixCls}-arrow`, { [`${prefixCls}-arrow-open`]: isOpen.value }, props.classNames?.arrow)}
            style={props.styles?.arrow}
          />
        )}
      </span>
    )

    return () => (
      <Trigger
        open={isOpen.value}
        trigger="click"
        placement={'bottomLeft' as Placement}
        disabled={props.disabled}
        destroyOnHidden
        popupClass={cls(`${prefixCls}-dropdown`, props.classNames?.dropdown)}
        popupStyle={props.styles?.dropdown}
        onOpenChange={(v: boolean) => {
          if (v) open()
          else close()
        }}
      >
        {{
          default: () => (
            <div
              ref={triggerRef}
              class={cls(
                prefixCls,
                `${prefixCls}-${props.size}`,
                {
                  [`${prefixCls}-open`]: isOpen.value,
                  [`${prefixCls}-disabled`]: props.disabled,
                  [`${prefixCls}-multiple`]: props.multiple,
                  [`${prefixCls}-status-error`]: props.status === 'error',
                  [`${prefixCls}-status-warning`]: props.status === 'warning',
                },
                props.classNames?.root,
                attrs.class as any,
              )}
              style={[props.styles?.root, attrs.style]}
            >
              <span class={cls(`${prefixCls}-selector`, props.classNames?.selector)} style={props.styles?.selector}>
                {props.multiple ? renderMultipleSelection() : renderSingleSelection()}
              </span>
              {renderSuffix()}
            </div>
          ),
          popup: renderDropdownContent,
        }}
      </Trigger>
    )
  },
})
