<template>
  <Table :columns="columns" :data-source="dataSource" />
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: string
  name: string
  age: number
  score: number
}

const dataSource: DataType[] = [
  { key: '1', name: '张三', age: 32, score: 88 },
  { key: '2', name: '李四', age: 42, score: 95 },
  { key: '3', name: '王五', age: 28, score: 72 },
  { key: '4', name: '赵六', age: 36, score: 81 },
]

const columns: TableColumn<DataType>[] = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    // 首次渲染即按年龄降序，后续点击正常在 asc/desc/取消 之间循环
    sorter: (a, b) => a.age - b.age,
    defaultSortOrder: 'descend',
  },
  {
    title: '分数',
    dataIndex: 'score',
    key: 'score',
    sorter: (a, b) => a.score - b.score,
    // 仅允许降序：点击在「降序 → 取消」之间循环
    sortDirections: ['descend'],
  },
]
</script>
