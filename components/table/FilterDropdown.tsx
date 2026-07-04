import { defineComponent, ref, type PropType } from 'vue'
import { Checkbox } from '../checkbox'
import { Button } from '../button'
import type { ColumnFilterItem, FilterValue, Key } from './interface'

export const FilterDropdown = defineComponent({
  name: 'FilterDropdown',
  props: {
    prefixCls: { type: String, required: true },
    filters: { type: Array as PropType<ColumnFilterItem[]>, default: () => [] },
    filteredValue: { type: Array as PropType<FilterValue>, default: () => [] },
    filterMultiple: { type: Boolean, default: true },
    locale: { type: Object as PropType<any>, default: () => ({}) },
    onConfirm: { type: Function as PropType<(selectedKeys: Key[]) => void>, required: true },
  },
  setup(props) {
    const selectedKeys = ref<Key[]>([
      ...(props.filteredValue.filter((v) => typeof v === 'string' || typeof v === 'number') as Key[]),
    ])

    const handleCheckChange = (key: Key, checked: boolean) => {
      if (props.filterMultiple) {
        if (checked) {
          selectedKeys.value = [...selectedKeys.value, key]
        } else {
          selectedKeys.value = selectedKeys.value.filter((k) => k !== key)
        }
      } else {
        selectedKeys.value = checked ? [key] : []
      }
    }

    const handleConfirm = () => {
      props.onConfirm(selectedKeys.value)
    }

    const handleReset = () => {
      selectedKeys.value = []
      props.onConfirm([])
    }

    const renderFilterItems = () => {
      return props.filters.map((filter) => {
        const checked = selectedKeys.value.includes(filter.value as Key)
        return (
          <div key={String(filter.value)} class={`${props.prefixCls}-dropdown-menu-item`}>
            <Checkbox checked={checked} onChange={(e) => handleCheckChange(filter.value as Key, e.target.checked)}>
              {filter.text}
            </Checkbox>
          </div>
        )
      })
    }

    return () => (
      <div class={`${props.prefixCls}-dropdown`}>
        <div class={`${props.prefixCls}-dropdown-menu`}>{renderFilterItems()}</div>
        <div class={`${props.prefixCls}-dropdown-btns`}>
          <Button size="small" onClick={handleReset}>
            {props.locale.filterReset || '重置'}
          </Button>
          <Button type="primary" size="small" onClick={handleConfirm}>
            {props.locale.filterConfirm || '确定'}
          </Button>
        </div>
      </div>
    )
  },
})
