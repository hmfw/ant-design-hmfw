<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" :row-selection="rowSelection" />
  <p>已选择：{{ selectedKeys.join(', ') }}</p>

  <div style="height: 16px"></div>

  <Table :data-source="dataSource" :columns="columns" row-key="key" :row-selection="rowSelectionCustom" />
  <p>默认选中第 1 行、隐藏表头全选框、自定义列表头：{{ selectedKeysCustom.join(', ') }}</p>

  <div style="height: 16px"></div>

  <Table :data-source="dataSource" :columns="columns" row-key="key" :row-selection="rowSelectionRadio" />
  <p>单选：{{ selectedKeysRadio.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from '@hmfw/ant-design'

const selectedKeys = ref<string[]>([])

const rowSelection = {
  selectedRowKeys: selectedKeys,
  onChange: (keys: string[]) => {
    selectedKeys.value = keys
  },
}

// defaultSelectedRowKeys 默认选中、hideSelectAll 隐藏全选框、columnTitle 自定义列表头
const selectedKeysCustom = ref<string[]>(['1'])

const rowSelectionCustom = {
  defaultSelectedRowKeys: ['1'],
  hideSelectAll: true,
  columnTitle: '选择',
  onChange: (keys: string[]) => {
    selectedKeysCustom.value = keys
  },
}

// 单选（radio）：同一时间只能选中一行
const selectedKeysRadio = ref<string[]>([])

const rowSelectionRadio = {
  type: 'radio' as const,
  selectedRowKeys: selectedKeysRadio,
  onChange: (keys: string[]) => {
    selectedKeysRadio.value = keys
  },
}

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '住址', dataIndex: 'address', key: 'address' },
]
</script>
