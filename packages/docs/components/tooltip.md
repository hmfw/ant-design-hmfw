# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

- 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作

## 代码演示

### 基础用法

最简单的用法。

```vue
<template>
  <Tooltip title="这是提示文字">
    <button>鼠标移入</button>
  </Tooltip>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
</script>
```

### 十二个方向

位置有十二个方向。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tooltip
      v-for="placement in placements"
      :key="placement"
      :placement="placement"
      title="提示文字"
    >
      <button style="width: 100px;">{{ placement }}</button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'

const placements = [
  'topLeft', 'top', 'topRight',
  'leftTop', 'left', 'leftBottom',
  'rightTop', 'right', 'rightBottom',
  'bottomLeft', 'bottom', 'bottomRight',
]
</script>
```

### 自定义颜色

自定义提示框颜色。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tooltip title="粉色提示" color="pink">
      <button>粉色</button>
    </Tooltip>
    <Tooltip title="红色提示" color="red">
      <button>红色</button>
    </Tooltip>
    <Tooltip title="蓝色提示" color="#1677ff">
      <button>自定义蓝色</button>
    </Tooltip>
    <Tooltip title="绿色提示" color="#52c41a">
      <button>自定义绿色</button>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { Tooltip } from 'ant-design-hmfw'
</script>
```

## API

### Tooltip Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 提示文字 | `string \| slot` | - |
| placement | 气泡框位置 | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'` |
| trigger | 触发行为 | `'hover' \| 'click' \| 'focus'` | `'hover'` |
| open (v-model) | 用于手动控制浮层显隐 | `boolean` | - |
| color | 背景颜色 | `string` | - |
| arrow | 是否显示箭头 | `boolean` | `true` |

### Tooltip Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:open | 显示隐藏的回调 | `(open: boolean) => void` |
| openChange | 显示隐藏的回调 | `(open: boolean) => void` |

### Tooltip Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发提示的元素 |
| title | 提示文字 |
