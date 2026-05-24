# Table 表格

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时

## 代码演示

### 基础用法

简单的表格，最后一列是各种操作。

```vue
<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

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
```

### 排序

对某一列数据进行排序。

```vue
<template>
  <Table :data-source="dataSource" :columns="columns" row-key="key" />
</template>

<script setup lang="ts">
import { Table } from 'ant-design-hmfw'

const dataSource = [
  { key: '1', name: '胡彦斌', age: 32, address: '西湖区湖底公园1号' },
  { key: '2', name: '胡彦祖', age: 42, address: '西湖区湖底公园2号' },
  { key: '3', name: '李明', age: 28, address: '朝阳区建国路88号' },
]

const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    sorter: (a: any, b: any) => a.age - b.age,
  },
  { title: '住址', dataIndex: 'address', key: 'address' },
]
</script>
```

### 行选择

第一列是联动的选择框。

```vue
<template>
  <Table
    :data-source="dataSource"
    :columns="columns"
    row-key="key"
    :row-selection="rowSelection"
  />
  <p>已选择：{{ selectedKeys.join(', ') }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Table } from 'ant-design-hmfw'

const selectedKeys = ref<string[]>([])

const rowSelection = {
  selectedRowKeys: selectedKeys,
  onChange: (keys: string[]) => {
    selectedKeys.value = keys
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
```

## API

### Table Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据数组 | `any[]` | - |
| columns | 表格列的配置描述 | `TableColumn[]` | - |
| rowKey | 表格行 key 的取值 | `string \| ((record: any) => string)` | `'key'` |
| loading | 页面是否加载中 | `boolean` | `false` |
| pagination | 分页器，设为 false 时不展示 | `object \| false` | - |
| rowSelection | 列表项是否可选择 | `object` | - |
| size | 表格大小 | `'default' \| 'middle' \| 'small'` | `'default'` |
| bordered | 是否展示外边框和列边框 | `boolean` | `false` |
| scroll | 表格是否可滚动 | `{ x?: number, y?: number }` | - |

### TableColumn

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 列的唯一标识 | `string` | - |
| title | 列头显示文字 | `string` | - |
| dataIndex | 列数据在数据项中对应的路径 | `string` | - |
| width | 列宽度 | `number \| string` | - |
| fixed | 列是否固定 | `'left' \| 'right'` | - |
| sorter | 排序函数 | `boolean \| ((a: any, b: any) => number)` | - |
| filters | 表头的筛选菜单项 | `{ text: string, value: any }[]` | - |
| render | 自定义渲染函数 | `(text: any, record: any) => any` | - |
| align | 设置列的对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
