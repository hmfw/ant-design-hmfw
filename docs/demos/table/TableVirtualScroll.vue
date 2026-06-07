<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '../../../components'
import type { TableColumn } from '../../../components'

interface DataType {
  key: number
  name: string
  age: number
  address: string
  email: string
  phone: string
}

// 生成大量数据
const generateData = (count: number): DataType[] => {
  return Array.from({ length: count }, (_, i) => ({
    key: i,
    name: `用户 ${i + 1}`,
    age: 20 + (i % 50),
    address: `北京市朝阳区某街道 ${i + 1} 号`,
    email: `user${i + 1}@example.com`,
    phone: `138${String(i).padStart(8, '0')}`,
  }))
}

const dataSource = ref<DataType[]>(generateData(1000))

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    fixed: 'left',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: 80,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    width: 300,
    ellipsis: true,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
    width: 200,
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    width: 150,
  },
]
</script>

<template>
  <div>
    <p style="margin-bottom: 16px">
      共 <strong>{{ dataSource.length }}</strong> 条数据，使用虚拟滚动优化性能
    </p>
    <Table :data-source="dataSource" :columns="columns" :pagination="false" :scroll="{ y: 400, x: 900 }" bordered />
  </div>
</template>
