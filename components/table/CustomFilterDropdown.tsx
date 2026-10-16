import { defineComponent, ref, type PropType } from 'vue'
import type { Key, TableColumn } from './interface'

/**
 * 自定义筛选面板容器：
 * 为 filterDropdown 函数形式提供 antd 风格的 setSelectedKeys / confirm / clearFilters
 */
export const CustomFilterDropdown = defineComponent({
  name: 'TableCustomFilterDropdown',
  props: {
    prefixCls: { type: String, required: true },
    column: { type: Object as PropType<TableColumn>, required: true },
    filters: { type: Array as PropType<any[]>, default: undefined },
    filteredValue: { type: Array as PropType<Key[]>, default: () => [] },
    filterMultiple: { type: Boolean, default: true },
    renderContent: { type: Function as PropType<(props: any) => any>, required: true },
    onConfirm: { type: Function as PropType<(keys: Key[]) => void>, required: true },
  },
  setup(p) {
    const selectedKeys = ref<Key[]>(Array.isArray(p.filteredValue) ? [...p.filteredValue] : [])

    return () =>
      p.renderContent({
        prefixCls: p.prefixCls,
        column: p.column,
        filters: p.filters,
        multiple: p.filterMultiple,
        selectedKeys: selectedKeys.value,
        setSelectedKeys: (keys: Key[]) => {
          selectedKeys.value = keys
        },
        confirm: () => p.onConfirm(selectedKeys.value),
        clearFilters: () => {
          selectedKeys.value = []
          p.onConfirm([])
        },
        visible: true,
      })
  },
})
