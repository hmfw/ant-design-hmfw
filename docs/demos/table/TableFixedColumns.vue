<template>
  <Table :columns="columns" :data-source="data" :scroll="{ x: 1200 }" bordered />
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 100,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: 'Column 1',
    dataIndex: 'col1',
    key: 'col1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'col2',
    key: 'col2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'col3',
    key: 'col3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'col4',
    key: 'col4',
    width: 150,
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 100,
    render: () => 'Edit',
  },
]

const data = [
  {
    key: '1',
    name: 'Joe',
    age: 32,
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
  },
  {
    key: '2',
    name: 'Jim',
    age: 28,
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
  },
  {
    key: '3',
    name: 'Alice',
    age: 35,
    col1: 'Data 1',
    col2: 'Data 2',
    col3: 'Data 3',
    col4: 'Data 4',
  },
]
</script>
