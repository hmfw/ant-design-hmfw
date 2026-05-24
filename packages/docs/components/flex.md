# Flex 弹性布局

弹性布局。

## 何时使用

- 需要在水平或垂直方向上排列元素时
- 需要控制元素间距、对齐方式时
- 替代传统的 float 布局

## 代码演示

### 基础水平排列

默认水平排列，通过 `justify` 和 `align` 控制对齐。

```vue
<template>
  <Space direction="vertical" style="width: 100%">
    <Flex justify="flex-start" align="center" gap="small">
      <div style="background: #1677ff; color: #fff; padding: 8px 16px;">item 1</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px;">item 2</div>
      <div style="background: #1677ff; color: #fff; padding: 8px 16px;">item 3</div>
    </Flex>
    <Flex justify="center" align="center" gap="small">
      <div style="background: #52c41a; color: #fff; padding: 8px 16px;">item 1</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px;">item 2</div>
      <div style="background: #52c41a; color: #fff; padding: 8px 16px;">item 3</div>
    </Flex>
    <Flex justify="flex-end" align="center" gap="small">
      <div style="background: #faad14; color: #fff; padding: 8px 16px;">item 1</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px;">item 2</div>
      <div style="background: #faad14; color: #fff; padding: 8px 16px;">item 3</div>
    </Flex>
    <Flex justify="space-between" align="center">
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px;">item 1</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px;">item 2</div>
      <div style="background: #ff4d4f; color: #fff; padding: 8px 16px;">item 3</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from 'ant-design-hmfw'
</script>
```

### 垂直排列

通过 `vertical` 属性设置垂直方向排列。

```vue
<template>
  <Flex vertical gap="small" style="width: 200px">
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center;">item 1</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center;">item 2</div>
    <div style="background: #1677ff; color: #fff; padding: 8px 16px; text-align: center;">item 3</div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'ant-design-hmfw'
</script>
```

### 间距设置

通过 `gap` 属性设置元素间距，支持预设值和数字。

```vue
<template>
  <Space direction="vertical" style="width: 100%">
    <div>small 间距</div>
    <Flex gap="small">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
    </Flex>
    <div>middle 间距</div>
    <Flex gap="middle">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
    </Flex>
    <div>large 间距</div>
    <Flex gap="large">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
    </Flex>
    <div>自定义 32px 间距</div>
    <Flex :gap="32">
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
      <div style="background: #e6f4ff; border: 1px solid #91caff; padding: 8px 16px;">item</div>
    </Flex>
  </Space>
</template>

<script setup lang="ts">
import { Flex, Space } from 'ant-design-hmfw'
</script>
```

### 自动换行

通过 `wrap` 属性允许子元素换行。

```vue
<template>
  <Flex wrap gap="small" style="max-width: 400px">
    <div
      v-for="i in 12"
      :key="i"
      style="background: #1677ff; color: #fff; padding: 8px 16px; border-radius: 4px;"
    >
      item {{ i }}
    </div>
  </Flex>
</template>

<script setup lang="ts">
import { Flex } from 'ant-design-hmfw'
</script>
```

## API

### Flex Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| vertical | 是否垂直方向排列 | `boolean` | `false` |
| wrap | 是否自动换行 | `boolean \| string` | `false` |
| justify | 主轴对齐方式 | `'flex-start' \| 'center' \| 'flex-end' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` |
| align | 交叉轴对齐方式 | `'flex-start' \| 'center' \| 'flex-end' \| 'stretch'` | `'stretch'` |
| gap | 子元素间距 | `'small' \| 'middle' \| 'large' \| number` | - |
| flex | flex CSS 简写属性 | `string \| number` | - |
| component | 自定义元素类型 | `string` | `'div'` |

### Flex Slots

| 名称 | 说明 |
| --- | --- |
| default | 子元素内容 |
