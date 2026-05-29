import { defineComponent, ref, computed, watch, type PropType } from 'vue'
import { usePrefixCls } from '../config-provider'
import { cls } from '../_utils'
import type { TransferItem } from './types'

export const Transfer = defineComponent({
  name: 'Transfer',
  props: {
    dataSource: { type: Array as PropType<TransferItem[]>, default: () => [] },
    targetKeys: Array as PropType<string[]>,
    defaultTargetKeys: { type: Array as PropType<string[]>, default: () => [] },
    selectedKeys: Array as PropType<string[]>,
    defaultSelectedKeys: { type: Array as PropType<string[]>, default: () => [] },
    titles: { type: Array as unknown as PropType<[string, string]>, default: () => ['', ''] },
    operations: { type: Array as unknown as PropType<[string, string]>, default: () => ['>', '<'] },
    showSearch: Boolean,
    filterOption: Function as PropType<(input: string, item: TransferItem) => boolean>,
    listStyle: Object as PropType<Record<string, string>>,
    disabled: Boolean,
    showSelectAll: { type: Boolean, default: true },
  },
  emits: ['update:targetKeys', 'change', 'update:selectedKeys', 'selectChange', 'search'],
  setup(props, { emit }) {
    const prefixCls = usePrefixCls('transfer')

    const innerTargetKeys = ref<string[]>([...props.defaultTargetKeys])
    const innerSelectedKeys = ref<string[]>([...props.defaultSelectedKeys])

    watch(() => props.targetKeys, (v) => { if (v) innerTargetKeys.value = [...v] })
    watch(() => props.selectedKeys, (v) => { if (v) innerSelectedKeys.value = [...v] })

    const targetKeys = computed(() => props.targetKeys ?? innerTargetKeys.value)
    const selectedKeys = computed(() => props.selectedKeys ?? innerSelectedKeys.value)

    const leftSearch = ref('')
    const rightSearch = ref('')

    const sourceItems = computed(() =>
      props.dataSource.filter((item) => !targetKeys.value.includes(item.key))
    )
    const targetItems = computed(() =>
      props.dataSource.filter((item) => targetKeys.value.includes(item.key))
    )

    function filterItems(items: TransferItem[], search: string) {
      if (!search) return items
      return items.filter((item) =>
        props.filterOption
          ? props.filterOption(search, item)
          : item.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    const filteredSource = computed(() => filterItems(sourceItems.value, leftSearch.value))
    const filteredTarget = computed(() => filterItems(targetItems.value, rightSearch.value))

    const leftSelected = computed(() => selectedKeys.value.filter((k) => sourceItems.value.some((i) => i.key === k)))
    const rightSelected = computed(() => selectedKeys.value.filter((k) => targetItems.value.some((i) => i.key === k)))

    function toggleSelect(key: string) {
      if (props.disabled) return
      const item = props.dataSource.find((i) => i.key === key)
      if (item?.disabled) return
      const next = selectedKeys.value.includes(key)
        ? selectedKeys.value.filter((k) => k !== key)
        : [...selectedKeys.value, key]
      innerSelectedKeys.value = next
      emit('update:selectedKeys', next)
      const src = next.filter((k) => sourceItems.value.some((i) => i.key === k))
      const tgt = next.filter((k) => targetItems.value.some((i) => i.key === k))
      emit('selectChange', src, tgt)
    }

    function moveToRight() {
      if (!leftSelected.value.length) return
      const next = [...targetKeys.value, ...leftSelected.value]
      innerTargetKeys.value = next
      emit('update:targetKeys', next)
      emit('change', next, 'right', leftSelected.value)
      // deselect moved items
      const newSelected = selectedKeys.value.filter((k) => !leftSelected.value.includes(k))
      innerSelectedKeys.value = newSelected
      emit('update:selectedKeys', newSelected)
    }

    function moveToLeft() {
      if (!rightSelected.value.length) return
      const next = targetKeys.value.filter((k) => !rightSelected.value.includes(k))
      innerTargetKeys.value = next
      emit('update:targetKeys', next)
      emit('change', next, 'left', rightSelected.value)
      const newSelected = selectedKeys.value.filter((k) => !rightSelected.value.includes(k))
      innerSelectedKeys.value = newSelected
      emit('update:selectedKeys', newSelected)
    }

    function toggleSelectAll(items: TransferItem[], side: 'left' | 'right') {
      const keys = items.filter((i) => !i.disabled).map((i) => i.key)
      const allSelected = keys.every((k) => selectedKeys.value.includes(k))
      let next: string[]
      if (allSelected) {
        next = selectedKeys.value.filter((k) => !keys.includes(k))
      } else {
        next = [...new Set([...selectedKeys.value, ...keys])]
      }
      innerSelectedKeys.value = next
      emit('update:selectedKeys', next)
      const src = next.filter((k) => sourceItems.value.some((i) => i.key === k))
      const tgt = next.filter((k) => targetItems.value.some((i) => i.key === k))
      emit('selectChange', src, tgt)
    }

    function renderList(items: TransferItem[], filteredItems: TransferItem[], title: string, search: string, setSearch: (v: string) => void, side: 'left' | 'right') {
      const enabledItems = filteredItems.filter((i) => !i.disabled)
      const selectedInList = filteredItems.filter((i) => selectedKeys.value.includes(i.key))
      const allChecked = enabledItems.length > 0 && enabledItems.every((i) => selectedKeys.value.includes(i.key))
      const someChecked = selectedInList.length > 0 && !allChecked

      return (
        <div class={`${prefixCls}-list`} style={props.listStyle}>
          <div class={`${prefixCls}-list-header`}>
            {props.showSelectAll && (
              <span
                class={cls(`${prefixCls}-checkbox`, {
                  [`${prefixCls}-checkbox-checked`]: allChecked,
                  [`${prefixCls}-checkbox-indeterminate`]: someChecked,
                  [`${prefixCls}-checkbox-disabled`]: props.disabled || enabledItems.length === 0,
                })}
                onClick={() => !props.disabled && toggleSelectAll(filteredItems, side)}
              >
                <span class={`${prefixCls}-checkbox-inner`} />
              </span>
            )}
            <span class={`${prefixCls}-list-header-title`}>
              {selectedInList.length > 0 ? `${selectedInList.length}/` : ''}{items.length} 项
              {title && <span class={`${prefixCls}-list-header-label`}>{title}</span>}
            </span>
          </div>
          {props.showSearch && (
            <div class={`${prefixCls}-list-search`}>
              <input
                class={`${prefixCls}-list-search-input`}
                placeholder="搜索"
                value={search}
                onInput={(e) => {
                  setSearch((e.target as HTMLInputElement).value)
                  emit('search', side, (e.target as HTMLInputElement).value)
                }}
              />
            </div>
          )}
          <ul class={`${prefixCls}-list-content`}>
            {filteredItems.map((item) => (
              <li
                key={item.key}
                class={cls(`${prefixCls}-list-content-item`, {
                  [`${prefixCls}-list-content-item-checked`]: selectedKeys.value.includes(item.key),
                  [`${prefixCls}-list-content-item-disabled`]: item.disabled || props.disabled,
                })}
                onClick={() => toggleSelect(item.key)}
              >
                <span
                  class={cls(`${prefixCls}-checkbox`, {
                    [`${prefixCls}-checkbox-checked`]: selectedKeys.value.includes(item.key),
                    [`${prefixCls}-checkbox-disabled`]: item.disabled || props.disabled,
                  })}
                >
                  <span class={`${prefixCls}-checkbox-inner`} />
                </span>
                <span class={`${prefixCls}-list-content-item-text`}>
                  <span class={`${prefixCls}-list-content-item-title`}>{item.title}</span>
                  {item.description && (
                    <span class={`${prefixCls}-list-content-item-description`}>{item.description}</span>
                  )}
                </span>
              </li>
            ))}
            {filteredItems.length === 0 && (
              <li class={`${prefixCls}-list-content-empty`}>暂无数据</li>
            )}
          </ul>
        </div>
      )
    }

    return () => (
      <div class={cls(prefixCls, { [`${prefixCls}-disabled`]: props.disabled })}>
        {renderList(sourceItems.value, filteredSource.value, props.titles[0], leftSearch.value, (v) => { leftSearch.value = v }, 'left')}

        <div class={`${prefixCls}-operation`}>
          <button
            class={cls('hmfw-btn', 'hmfw-btn-primary', 'hmfw-btn-small', {
              'hmfw-btn-disabled': !leftSelected.value.length || props.disabled,
            })}
            disabled={!leftSelected.value.length || props.disabled}
            onClick={moveToRight}
          >
            {props.operations[0]}
          </button>
          <button
            class={cls('hmfw-btn', 'hmfw-btn-primary', 'hmfw-btn-small', {
              'hmfw-btn-disabled': !rightSelected.value.length || props.disabled,
            })}
            disabled={!rightSelected.value.length || props.disabled}
            onClick={moveToLeft}
          >
            {props.operations[1]}
          </button>
        </div>

        {renderList(targetItems.value, filteredTarget.value, props.titles[1], rightSearch.value, (v) => { rightSearch.value = v }, 'right')}
      </div>
    )
  },
})
