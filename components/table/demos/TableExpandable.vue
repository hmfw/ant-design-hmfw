<template>
  <Table :columns="columns" :data-source="data" :expandable="expandable" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'

const expandedKeys = ref<string[]>([])

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const data = [
  {
    key: '1',
    name: 'Joe',
    age: 32,
    address: 'New York',
    description: 'My name is Joe, I am 32 years old, living in New York.',
  },
  {
    key: '2',
    name: 'Jim',
    age: 28,
    address: 'London',
    description: 'My name is Jim, I am 28 years old, living in London.',
  },
  {
    key: '3',
    name: 'Alice',
    age: 35,
    address: 'Sydney',
    description: 'My name is Alice, I am 35 years old, living in Sydney.',
  },
]

const expandable = {
  expandedRowRender: (record: any) => record.description,
  expandedRowKeys: expandedKeys.value,
  onExpandedRowsChange: (keys: string[]) => {
    expandedKeys.value = keys
  },
}
</script>
