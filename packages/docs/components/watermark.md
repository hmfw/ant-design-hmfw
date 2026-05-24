# Watermark 水印

给页面的某个区域加上水印。

## 何时使用

- 页面需要添加水印标识版权时使用

## 代码演示

### 文字水印

使用 content 设置文字水印。

```vue
<template>
  <Watermark content="Ant Design">
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
</script>
```

### 多行水印

使用 content 数组设置多行文字水印。

```vue
<template>
  <Watermark :content="['Ant Design', 'Happy Working']">
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
</script>
```

### 自定义样式

自定义水印字体样式。

```vue
<template>
  <Watermark
    content="Ant Design"
    :font="{ color: 'rgba(23, 119, 255, 0.15)', fontSize: 20, fontWeight: 'bold' }"
    :rotate="-22"
  >
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
</script>
```

## API

### Watermark Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 水印文字内容 | `string \| string[]` | - |
| font | 文字样式 | `{ color?: string, fontSize?: number, fontWeight?: string \| number, fontFamily?: string }` | - |
| rotate | 水印绘制时，旋转的角度 | `number` | `-22` |
| gap | 水印之间的间距 | `[number, number]` | `[100, 100]` |
| offset | 水印距离容器左上角的偏移量 | `[number, number]` | - |
| zIndex | 追加的水印元素的 z-index | `number` | `9` |
| image | 图片源，建议使用 2x 或 3x 图，优先级高于文字 | `string` | - |
| width | 水印的宽度 | `number` | `120` |
| height | 水印的高度 | `number` | `64` |

### Watermark Slots

| 名称 | 说明 |
| --- | --- |
| default | 被水印覆盖的内容 |
