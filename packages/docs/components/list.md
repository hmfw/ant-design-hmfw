# List 列表

通用列表。

## 何时使用

- 最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面

## 代码演示

### 基础用法

基础列表。

```vue
<template>
  <List
    :data-source="data"
    bordered
  >
    <template #renderItem="{ item }">
      <ListItem>{{ item }}</ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem } from 'ant-design-hmfw'

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
]
</script>
```

### 带操作

可以配置额外操作。

```vue
<template>
  <List :data-source="data" bordered>
    <template #renderItem="{ item }">
      <ListItem>
        <template #actions>
          <a @click="onEdit(item)">编辑</a>
          <a @click="onDelete(item)">删除</a>
        </template>
        {{ item.title }}
      </ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem } from 'ant-design-hmfw'

const data = [
  { title: '列表项 1' },
  { title: '列表项 2' },
  { title: '列表项 3' },
]

function onEdit(item: any) {
  console.log('编辑', item)
}

function onDelete(item: any) {
  console.log('删除', item)
}
</script>
```

### 带头像

带头像的列表。

```vue
<template>
  <List :data-source="data">
    <template #renderItem="{ item }">
      <ListItem>
        <ListItemMeta
          :avatar="item.avatar"
          :title="item.title"
          :description="item.description"
        />
      </ListItem>
    </template>
  </List>
</template>

<script setup lang="ts">
import { List, ListItem, ListItemMeta } from 'ant-design-hmfw'

const data = [
  {
    title: '用户名称 1',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  },
  {
    title: '用户名称 2',
    description: '这是一段描述信息',
    avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
  },
]
</script>
```

## API

### List Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 列表数据源 | `any[]` | - |
| bordered | 是否展示边框 | `boolean` | `false` |
| size | 列表大小 | `'default' \| 'small' \| 'large'` | `'default'` |
| split | 是否展示分割线 | `boolean` | `true` |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | `boolean` | `false` |
| pagination | 对应的 pagination 配置，设置 false 不显示 | `object \| false` | `false` |
| header | 列表头部 | `string \| slot` | - |
| footer | 列表底部 | `string \| slot` | - |

### ListItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 列表操作组 | `slot[]` | - |
| extra | 额外内容 | `string \| slot` | - |

### ListItemMeta Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| avatar | 列表元素的图标 | `string \| slot` | - |
| title | 列表元素的标题 | `string \| slot` | - |
| description | 列表元素的描述内容 | `string \| slot` | - |
