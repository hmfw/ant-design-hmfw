<template>
  <div>
    <Table :columns="columns" :data-source="dataSource" :pagination="paginationTop" />
    <div style="height: 16px"></div>
    <Table :columns="columns" :data-source="dataSource" :pagination="paginationSimple" />
  </div>
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'
import type { TableColumn, TablePaginationConfig } from '@hmfw/ant-design'

interface DataType {
  key: number
  name: string
  age: number
  address: string
}

const dataSource: DataType[] = Array.from({ length: 46 }, (_, i) => ({
  key: i + 1,
  name: `成员 ${i + 1}`,
  age: 20 + (i % 40),
  address: `某市某区某街道 ${i + 1} 号`,
}))

const columns: TableColumn<DataType>[] = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
]

// 分页在上方 + 尺寸切换 + 总数文案 + 默认每页条数
const paginationTop: TablePaginationConfig = {
  position: ['topRight'],
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20],
  showSizeChanger: true,
  showTotal: (total: number) => `共 ${total} 条`,
}

// 简洁模式 + 小尺寸 + 默认页码
const paginationSimple: TablePaginationConfig = {
  simple: true,
  size: 'small',
  defaultPageSize: 5,
  defaultCurrent: 3,
}
</script>
