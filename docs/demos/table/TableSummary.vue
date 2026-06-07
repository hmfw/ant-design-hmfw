<script setup lang="tsx">
import { Table } from '../../../components'
import type { TableColumn } from '../../../components'

interface DataType {
  key: number
  name: string
  category: string
  price: number
  quantity: number
}

const dataSource: DataType[] = [
  {
    key: 1,
    name: '笔记本电脑',
    category: '电子产品',
    price: 5999,
    quantity: 3,
  },
  {
    key: 2,
    name: '机械键盘',
    category: '电子产品',
    price: 599,
    quantity: 5,
  },
  {
    key: 3,
    name: '显示器',
    category: '电子产品',
    price: 1999,
    quantity: 2,
  },
  {
    key: 4,
    name: '鼠标',
    category: '电子产品',
    price: 199,
    quantity: 10,
  },
  {
    key: 5,
    name: '耳机',
    category: '电子产品',
    price: 399,
    quantity: 6,
  },
]

const columns: TableColumn<DataType>[] = [
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '类别',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '单价（元）',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
    render: (value: number) => `¥${value.toFixed(2)}`,
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'right',
  },
  {
    title: '总价（元）',
    key: 'total',
    align: 'right',
    render: (_: any, record: DataType) => `¥${(record.price * record.quantity).toFixed(2)}`,
  },
]

// Summary 渲染函数
const summaryRender = (pageData: DataType[]) => {
  const totalQuantity = pageData.reduce((sum, item) => sum + item.quantity, 0)
  const totalAmount = pageData.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <tr>
      <td colspan="3" style="text-align: right; font-weight: 600;">总计：</td>
      <td style="text-align: right; font-weight: 600;">{totalQuantity}</td>
      <td style="text-align: right; font-weight: 600;">¥{totalAmount.toFixed(2)}</td>
    </tr>
  )
}
</script>

<template>
  <Table
    :data-source="dataSource"
    :columns="columns"
    :pagination="false"
    :summary="summaryRender"
    bordered
  />
</template>
