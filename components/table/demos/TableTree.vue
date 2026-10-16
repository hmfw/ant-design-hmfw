<template>
  <Table
    :columns="columns"
    :data-source="data"
    :expandable="{ defaultExpandAllRows: true }"
    :row-selection="rowSelection"
  />
  <p>已选择：{{ selectedKeys.join(', ') || '无' }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'

const selectedKeys = ref<string[]>([])

// 树形数据默认父子联动：勾选父节点自动勾选全部后代，取消子节点自动取消祖先
// 如需各节点独立勾选，设置 checkStrictly: true
const rowSelection = {
  onChange: (keys: string[]) => {
    selectedKeys.value = keys
  },
}

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age', width: 120 },
  { title: 'Address', dataIndex: 'address', key: 'address' },
]

// 通过 children 字段表达层级结构，Table 自动渲染为树形表格
const data = [
  {
    key: '1',
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [
      { key: '1-1', name: 'John Brown', age: 42, address: 'New York No. 2 Lake Park' },
      {
        key: '1-2',
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [{ key: '1-2-1', name: 'Jimmy Brown', age: 16, address: 'New York No. 3 Lake Park' }],
      },
    ],
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    children: [{ key: '2-1', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' }],
  },
]
</script>
