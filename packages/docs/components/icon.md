# Icon 图标

语义化的矢量图形，用于展示常用的操作和状态。

## 何时使用

- 需要展示操作图标时
- 需要展示状态图标时
- 需要展示品牌图标时

## 代码演示

### 基础用法

展示内置的图标类型。

```vue
<template>
  <Space :size="16" wrap>
    <Icon type="search" />
    <Icon type="close" />
    <Icon type="check" />
    <Icon type="warning" />
    <Icon type="info" />
    <Icon type="loading" />
    <Icon type="up" />
    <Icon type="down" />
    <Icon type="left" />
    <Icon type="right" />
    <Icon type="plus" />
    <Icon type="minus" />
    <Icon type="edit" />
    <Icon type="delete" />
    <Icon type="eye" />
    <Icon type="home" />
    <Icon type="user" />
    <Icon type="setting" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space } from 'ant-design-hmfw'
</script>
```

### 图标尺寸

通过 `size` 属性设置图标大小。

```vue
<template>
  <Space :size="16" align="center">
    <Icon type="home" :size="12" />
    <Icon type="home" :size="16" />
    <Icon type="home" :size="24" />
    <Icon type="home" :size="32" />
    <Icon type="home" :size="48" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space } from 'ant-design-hmfw'
</script>
```

### 图标颜色

通过 `color` 属性设置图标颜色。

```vue
<template>
  <Space :size="16">
    <Icon type="heart" color="#1677ff" :size="24" />
    <Icon type="heart" color="#52c41a" :size="24" />
    <Icon type="heart" color="#faad14" :size="24" />
    <Icon type="heart" color="#ff4d4f" :size="24" />
    <Icon type="heart" color="#722ed1" :size="24" />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space } from 'ant-design-hmfw'
</script>
```

### 旋转动画

通过 `spin` 属性让图标旋转。

```vue
<template>
  <Space :size="16">
    <Icon type="loading" :size="24" spin />
    <Icon type="setting" :size="24" spin />
  </Space>
</template>

<script setup lang="ts">
import { Icon, Space } from 'ant-design-hmfw'
</script>
```

## API

### Icon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 图标类型 | `'search' \| 'close' \| 'check' \| 'warning' \| 'info' \| 'loading' \| 'up' \| 'down' \| 'left' \| 'right' \| 'plus' \| 'minus' \| 'edit' \| 'delete' \| 'eye' \| 'home' \| 'user' \| 'setting'` | - |
| size | 图标大小 | `number` | `16` |
| color | 图标颜色 | `string` | - |
| spin | 是否旋转 | `boolean` | `false` |
