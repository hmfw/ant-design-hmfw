<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" @change="onChange" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Table } from '@hmfw/ant-design'

// 受控排序：sortOrder 由外部状态驱动，点击表头仅触发 change 回调
const sortOrder = ref<'ascend' | 'descend' | null>('ascend')

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
  { key: '3', name: '李明', age: 28, address: '朝阳区建国路88号' },
]

const columns = computed(() => [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a: any, b: any) => a.age - b.age,
    sortOrder: sortOrder.value,
  },
  { title: '住址', dataIndex: 'address', key: 'address' },
])

const onChange = (_pagination: any, _filters: any, sorter: any) => {
  sortOrder.value = Array.isArray(sorter) ? (sorter[0]?.order ?? null) : (sorter.order ?? null)
}
</script>
