# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割
- 对行内文字/链接进行分割，例如表格的操作列

## 代码演示

### 水平分割线

默认为水平分割线，可在中间加入文字。

```vue
<template>
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Divider />
    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Divider dashed />
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
</script>
```

### 带文字的分割线

通过 `orientation` 属性设置文字位置。

```vue
<template>
  <div>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider>居中文字</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left">左对齐</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="right">右对齐</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
    <Divider orientation="left" plain>朴素文字</Divider>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
</script>
```

### 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

```vue
<template>
  <div>
    <a href="#">链接一</a>
    <Divider type="vertical" />
    <a href="#">链接二</a>
    <Divider type="vertical" />
    <a href="#">链接三</a>
  </div>
</template>

<script setup lang="ts">
import { Divider } from 'ant-design-hmfw'
</script>
```

## API

### Divider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 水平还是垂直类型 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| orientation | 分割线标题的位置 | `'left' \| 'center' \| 'right'` | `'center'` |
| dashed | 是否虚线 | `boolean` | `false` |
| plain | 文字是否显示为普通正文样式 | `boolean` | `false` |

### Divider Slots

| 名称 | 说明 |
| --- | --- |
| default | 嵌入分割线中的内容 |
