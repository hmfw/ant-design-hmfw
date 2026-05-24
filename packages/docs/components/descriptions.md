# Descriptions 描述列表

成组展示多个只读字段。

## 何时使用

- 常见于详情页的信息展示

## 代码演示

### 基础用法

简单的展示。

```vue
<template>
  <Descriptions title="用户信息" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '备注', children: '学校' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路' },
]
</script>
```

### 带边框

带边框和背景颜色列表。

```vue
<template>
  <Descriptions title="用户信息" bordered :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '产品', children: 'Cloud Database' },
  { label: '计费模式', children: '按量付费' },
  { label: '自动续费', children: '否' },
  { label: '订单时间', children: '2018-04-24 18:00:00' },
  { label: '使用时间', children: '2019-04-24 18:00:00', span: 2 },
  { label: '状态', children: '运行中' },
  { label: '协商速度', children: '100Mbps' },
  { label: '配置信息', children: 'Data disk type: MongoDB' },
]
</script>
```

### 垂直布局

垂直的列表。

```vue
<template>
  <Descriptions title="用户信息" layout="vertical" :items="items" />
</template>

<script setup lang="ts">
import { Descriptions } from 'ant-design-hmfw'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '手机号', children: '1810000000' },
  { label: '居住地', children: '杭州市' },
  { label: '联系地址', children: '浙江省杭州市西湖区古翠路' },
]
</script>
```

## API

### Descriptions Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 描述列表的标题 | `string` | - |
| extra | 描述列表的操作区域 | `string \| slot` | - |
| bordered | 是否展示边框 | `boolean` | `false` |
| column | 一行的 DescriptionItems 数量 | `number` | `3` |
| size | 设置列表的大小 | `'default' \| 'middle' \| 'small'` | `'default'` |
| layout | 描述布局 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| items | 描述列表的数据项 | `DescriptionsItem[]` | - |

### DescriptionsItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 内容的描述 | `string` | - |
| children | 内容 | `string` | - |
| span | 包含列的数量 | `number` | `1` |
| labelStyle | 自定义标签样式 | `CSSProperties` | - |
| contentStyle | 自定义内容样式 | `CSSProperties` | - |
