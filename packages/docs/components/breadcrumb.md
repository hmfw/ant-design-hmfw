# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时
- 当需要告知用户当前位置时
- 当需要向上导航的功能时

## 代码演示

### 基础用法

最简单的用法。

```vue
<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { title: '首页' },
  { title: '应用列表' },
  { title: '某应用' },
]
</script>
```

### 带链接

通过 `href` 属性设置链接。

```vue
<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { title: '首页', href: '/' },
  { title: '应用列表', href: '/apps' },
  { title: '某应用' },
]
</script>
```

### 自定义分隔符

通过 `separator` 属性自定义分隔符。

```vue
<template>
  <Space direction="vertical">
    <Breadcrumb :items="items" separator=">" />
    <Breadcrumb :items="items" separator="/" />
    <Breadcrumb :items="items" separator="|" />
  </Space>
</template>

<script setup lang="ts">
import { Breadcrumb, Space } from 'ant-design-hmfw'

const items = [
  { title: '首页', href: '/' },
  { title: '一级菜单', href: '/level1' },
  { title: '二级菜单' },
]
</script>
```

### 带点击事件

通过 `onClick` 处理面包屑点击。

```vue
<template>
  <Breadcrumb :items="items" />
  <p style="margin-top: 8px; color: #666;">点击了：{{ clicked }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Breadcrumb } from 'ant-design-hmfw'

const clicked = ref('无')

const items = [
  {
    title: '首页',
    onClick: () => { clicked.value = '首页' },
  },
  {
    title: '应用列表',
    onClick: () => { clicked.value = '应用列表' },
  },
  { title: '某应用' },
]
</script>
```

## API

### Breadcrumb Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 路由栈信息 | `BreadcrumbItem[]` | `[]` |
| separator | 分隔符 | `string` | `'/'` |

### BreadcrumbItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 名称 | `string` | - |
| href | 链接地址 | `string` | - |
| onClick | 点击事件 | `(e: MouseEvent) => void` | - |
