<template>
  <div>
    <Table :columns="columns" :data-source="dataSource" bordered />
    <div style="height: 16px"></div>
    <Table :columns="columnsWithColSpan" :data-source="dataSource" bordered />
  </div>
</template>

<script setup lang="ts">
import { Table } from '@hmfw/ant-design'
import type { TableColumn } from '@hmfw/ant-design'

interface DataType {
  key: string
  province: string
  city: string
  name: string
  tel: string
  phone: string
  address: string
}

const dataSource: DataType[] = [
  {
    key: '1',
    province: '浙江',
    city: '杭州',
    name: '张三',
    tel: '0571-8888888',
    phone: '138****0001',
    address: '西湖区湖底公园 1 号',
  },
  {
    key: '2',
    province: '浙江',
    city: '宁波',
    name: '李四',
    tel: '0574-6666666',
    phone: '139****0002',
    address: '江东区中山东路 2 号',
  },
  {
    key: '3',
    province: '江苏',
    city: '南京',
    name: '王五',
    tel: '025-5555555',
    phone: '137****0003',
    address: '鼓楼区中山北路 3 号',
  },
  {
    key: '4',
    province: '江苏',
    city: '苏州',
    name: '赵六',
    tel: '0512-4444444',
    phone: '136****0004',
    address: '姑苏区人民路 4 号',
  },
]

// 纵向合并：通过 onCell 让「省份」每两行合并（第二行返回 rowSpan: 0 不渲染）
const columns: TableColumn<DataType>[] = [
  {
    title: '省份',
    dataIndex: 'province',
    key: 'province',
    onCell: (_record, index) => ({ rowSpan: index % 2 === 0 ? 2 : 0 }),
  },
  { title: '城市', dataIndex: 'city', key: 'city' },
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '住址', dataIndex: 'address', key: 'address' },
]

// 横向合并：
// 1. 表头「联系方式」通过列级 colSpan 跨过「座机」「手机」两列（被合并列 colSpan: 0 不渲染表头）
// 2. 数据单元格「地址」通过 onCell 跨过「地址」「邮编」两列（被合并列返回 colSpan: 0 不渲染）
const columnsWithColSpan: TableColumn<DataType>[] = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '城市', dataIndex: 'city', key: 'city' },
  { title: '联系方式', dataIndex: 'tel', key: 'contact', colSpan: 2 },
  { title: '手机', dataIndex: 'phone', key: 'phone', colSpan: 0 },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    onCell: () => ({ colSpan: 2 }),
    onHeaderCell: () => ({ colSpan: 2 }),
  },
  {
    title: '邮编',
    key: 'zip',
    onCell: () => ({ colSpan: 0 }),
    onHeaderCell: () => ({ colSpan: 0 }),
  },
]
</script>
