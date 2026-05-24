# Timeline 时间轴

垂直展示的时间流信息。

## 何时使用

- 当有一系列信息需按时间排列时
- 需要有一条时间轴进行视觉上的串联时

## 代码演示

### 基础用法

基本的时间轴。

```vue
<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '创建服务现场 2015-09-01' },
  { children: '初步排除网络异常 2015-09-01' },
  { children: '技术测试异常 2015-09-01' },
  { children: '网络异常正在修复 2015-09-01' },
]
</script>
```

### 交替展示

内容在时间轴两侧交替出现。

```vue
<template>
  <Timeline mode="alternate" :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '创建服务现场 2015-09-01' },
  { children: '初步排除网络异常 2015-09-01', position: 'right' },
  { children: '技术测试异常 2015-09-01' },
  { children: '网络异常正在修复 2015-09-01', position: 'right' },
]
</script>
```

### 自定义颜色

可以设置为 red、green、blue、gray，或者自定义颜色。

```vue
<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '成功事件', color: 'green' },
  { children: '失败事件', color: 'red' },
  { children: '警告事件', color: 'gray' },
  { children: '自定义颜色', color: '#00CCFF' },
]
</script>
```

## API

### Timeline Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| items | 选项配置 | `TimelineItem[]` | - |
| pending | 指定最后一个幽灵节点是否存在或内容 | `boolean \| string` | `false` |
| pendingDot | 当最后一个幽灵节点存在时，指定其时间图点 | `string \| slot` | - |
| reverse | 节点排序 | `boolean` | `false` |
| mode | 通过设置 mode 可以改变时间轴和内容的相对位置 | `'left' \| 'alternate' \| 'right'` | `'left'` |

### TimelineItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 设置标签 | `string` | - |
| children | 内容 | `string` | - |
| color | 指定圆圈颜色 | `'blue' \| 'red' \| 'green' \| 'gray' \| string` | `'blue'` |
| dot | 自定义时间轴点 | `string \| slot` | - |
| position | 自定义节点位置 | `'left' \| 'right'` | - |
