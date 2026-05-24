# Space 间距

设置组件之间的间距。

## 何时使用

- 避免组件紧贴在一起，拉开统一的空间
- 适合行内元素的水平间距
- 可以设置各种水平对齐方式

## 代码演示

### 基础用法

相邻组件水平间距。

```vue
<template>
  <Space>
    <Button type="primary">按钮一</Button>
    <Button>按钮二</Button>
    <Button type="dashed">按钮三</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
</script>
```

### 垂直间距

通过 `direction` 属性设置垂直方向间距。

```vue
<template>
  <Space direction="vertical" style="width: 100%">
    <Button type="primary" block>按钮一</Button>
    <Button block>按钮二</Button>
    <Button type="dashed" block>按钮三</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
</script>
```

### 自定义大小

通过 `size` 属性设置间距大小，支持预设值和数字。

```vue
<template>
  <Space direction="vertical" :size="16">
    <Space size="small">
      <Button>small</Button>
      <Button>small</Button>
      <Button>small</Button>
    </Space>
    <Space size="middle">
      <Button>middle</Button>
      <Button>middle</Button>
      <Button>middle</Button>
    </Space>
    <Space size="large">
      <Button>large</Button>
      <Button>large</Button>
      <Button>large</Button>
    </Space>
    <Space :size="32">
      <Button>32px</Button>
      <Button>32px</Button>
      <Button>32px</Button>
    </Space>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-hmfw'
</script>
```

### 分隔符

通过 `split` 插槽设置分隔符。

```vue
<template>
  <Space>
    <template #split>
      <Divider type="vertical" />
    </template>
    <a href="#">链接一</a>
    <a href="#">链接二</a>
    <a href="#">链接三</a>
  </Space>
</template>

<script setup lang="ts">
import { Space, Divider } from 'ant-design-hmfw'
</script>
```

## API

### Space Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 间距大小，数组形式表示 `[水平, 垂直]` | `'small' \| 'middle' \| 'large' \| number \| [number, number]` | `'small'` |
| direction | 间距方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| align | 对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'` | - |
| wrap | 是否自动换行，仅水平方向有效 | `boolean` | `false` |

### Space Slots

| 名称 | 说明 |
| --- | --- |
| default | 子元素内容 |
| split | 设置拆分 |
