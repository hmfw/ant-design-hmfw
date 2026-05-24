# Progress 进度条

展示操作的当前进度。

## 何时使用

- 在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态
- 当操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时
- 当需要显示一个操作完成的百分比时

## 代码演示

### 进度条

标准的进度条。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <Progress :percent="30" />
    <Progress :percent="50" status="active" />
    <Progress :percent="70" status="exception" />
    <Progress :percent="100" />
    <Progress :percent="50" :show-info="false" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
```

### 圆形进度

圆形进度条。

```vue
<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="circle" :percent="75" />
    <Progress type="circle" :percent="70" status="exception" />
    <Progress type="circle" :percent="100" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
```

### 仪表盘

仪表盘样式的进度条。

```vue
<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
```

### 动态展示

会动的进度条才是好进度条。

```vue
<template>
  <Progress :percent="percent" />
  <div style="display: flex; gap: 8px; margin-top: 12px;">
    <button @click="decline">-</button>
    <button @click="increase">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from 'ant-design-hmfw'

const percent = ref(0)

function increase() {
  percent.value = Math.min(percent.value + 10, 100)
}

function decline() {
  percent.value = Math.max(percent.value - 10, 0)
}
</script>
```

## API

### Progress Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `'line' \| 'circle' \| 'dashboard'` | `'line'` |
| percent | 百分比 | `number` | `0` |
| status | 状态 | `'success' \| 'exception' \| 'normal' \| 'active'` | - |
| showInfo | 是否显示进度数值或状态图标 | `boolean` | `true` |
| strokeColor | 进度条的色彩 | `string \| object` | - |
| trailColor | 未完成的分段的颜色 | `string` | - |
| strokeWidth | 进度条线的宽度 | `number` | `6` |
| size | 进度条的尺寸 | `'default' \| 'small'` | `'default'` |
| format | 内容的模板函数 | `(percent: number) => string` | - |
| steps | 进度条总共步数 | `number` | - |
