<template>
  <Table :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Table, Input, Button } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: string
  name: string
  city: string
}

const data: DataType[] = [
  { key: '1', name: '张三', city: '杭州' },
  { key: '2', name: '李四', city: '上海' },
  { key: '3', name: '王五', city: '北京' },
  { key: '4', name: '赵六', city: '杭州' },
]

const columns: TableColumn<DataType>[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    filters: [
      { text: '张三', value: '张三' },
      { text: '李四', value: '李四' },
      { text: '王五', value: '王五' },
      { text: '赵六', value: '赵六' },
    ],
    onFilter: (value, record) => record.name === value,
    // 默认筛选：首次渲染即应用该筛选值
    defaultFilteredValue: ['张三', '李四'],
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
    // 自定义筛选面板：输入关键字后确认过滤
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) =>
      h('div', { style: { padding: '8px', width: '180px' } }, [
        h(Input, {
          size: 'small',
          placeholder: '搜索城市',
          value: selectedKeys[0] ?? '',
          'onUpdate:value': (v: string) => setSelectedKeys(v ? [v] : []),
          onPressEnter: () => confirm(),
        }),
        h('div', { style: { display: 'flex', justifyContent: 'space-between', marginTop: '8px' } }, [
          h(Button, { size: 'small', onClick: () => clearFilters() }, () => '重置'),
          h(Button, { size: 'small', type: 'primary', onClick: () => confirm() }, () => '确定'),
        ]),
      ]),
    onFilter: (value, record) => record.city.includes(String(value)),
  },
]
</script>
