# Badge 徽标数

图标右上角的圆形徽标数字。

## 何时使用

- 当需要在图标或文字旁边展示数字或状态时
- 用于消息提醒、待办事项等场景

## 代码演示

### 基本用法

简单的徽章展示，当 count 为 0 时，默认不显示。

```vue
<template>
  <div style="display: flex; gap: 24px;">
    <Badge :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge :count="0" show-zero>
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge :count="99">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge :count="100">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
</script>
```

### 状态点

用于表示状态的小圆点。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Badge status="success" text="成功" />
    <Badge status="error" text="错误" />
    <Badge status="default" text="默认" />
    <Badge status="processing" text="进行中" />
    <Badge status="warning" text="警告" />
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
</script>
```

### 自定义颜色

可以自定义徽标的颜色。

```vue
<template>
  <div style="display: flex; gap: 24px;">
    <Badge color="#f50" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge color="#2db7f5" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
    <Badge color="#87d068" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px;" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
</script>
```

## API

### Badge Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| count | 展示的数字 | `number` | - |
| dot | 不展示数字，只有一个小红点 | `boolean` | `false` |
| overflowCount | 展示封顶的数字值 | `number` | `99` |
| showZero | 当数值为 0 时，是否展示 Badge | `boolean` | `false` |
| status | 设置 Badge 为状态点 | `'success' \| 'processing' \| 'default' \| 'error' \| 'warning'` | - |
| color | 自定义小圆点的颜色 | `string` | - |
| offset | 设置状态点的位置偏移 | `[number, number]` | - |
| size | 徽标大小 | `'default' \| 'small'` | `'default'` |
| text | 在设置了 status 的前提下有效，设置状态点的文本 | `string` | - |
