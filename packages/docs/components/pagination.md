# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时
- 可切换页码浏览数据

## 代码演示

### 基础用法

基础分页。

```vue
<template>
  <Space direction="vertical">
    <Pagination :total="50" v-model:current="current" />
    <p>当前页：{{ current }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
</script>
```

### 更多功能

展示总数、切换每页条数、快速跳转。

```vue
<template>
  <Space direction="vertical">
    <Pagination
      v-model:current="current"
      v-model:page-size="pageSize"
      :total="500"
      show-size-changer
      show-quick-jumper
      :show-total="(total, range) => `第 ${range[0]}-${range[1]} 条，共 ${total} 条`"
      @change="onChange"
      @show-size-change="onShowSizeChange"
    />
    <p>当前页：{{ current }}，每页条数：{{ pageSize }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
const pageSize = ref(10)

const onChange = (page: number, size: number) => {
  console.log('页码变化:', page, size)
}

const onShowSizeChange = (cur: number, size: number) => {
  console.log('每页条数变化:', cur, size)
}
</script>
```

### 简洁模式

通过 `simple` 属性设置简洁模式。

```vue
<template>
  <Pagination simple :total="50" v-model:current="current" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination } from 'ant-design-hmfw'

const current = ref(1)
</script>
```

### 小型分页

通过 `size="small"` 设置小型分页。

```vue
<template>
  <Space direction="vertical">
    <Pagination size="small" :total="50" v-model:current="current" />
    <Pagination
      size="small"
      :total="50"
      v-model:current="current"
      show-size-changer
      show-quick-jumper
    />
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'

const current = ref(1)
</script>
```

## API

### Pagination Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页数（v-model） | `number` | - |
| defaultCurrent | 默认的当前页数 | `number` | `1` |
| total | 数据总数 | `number` | `0` |
| pageSize | 每页条数（v-model） | `number` | - |
| defaultPageSize | 默认的每页条数 | `number` | `10` |
| showSizeChanger | 是否展示 pageSize 切换器 | `boolean` | `false` |
| showQuickJumper | 是否可以快速跳转至某页 | `boolean` | `false` |
| showTotal | 用于显示数据总量和当前数据顺序 | `(total: number, range: [number, number]) => string` | - |
| size | 当为 `small` 时，是小尺寸分页 | `'default' \| 'small'` | `'default'` |
| simple | 当添加该属性时，显示为简单分页 | `boolean` | `false` |
| disabled | 禁用分页 | `boolean` | `false` |
| hideOnSinglePage | 只有一页时是否隐藏分页器 | `boolean` | `false` |

### Pagination Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 页码或 pageSize 改变的回调 | `(page: number, pageSize: number) => void` |
| showSizeChange | pageSize 变化的回调 | `(current: number, size: number) => void` |
