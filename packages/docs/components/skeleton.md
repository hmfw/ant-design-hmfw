# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下
- 图文信息内容较多的列表/卡片中
- 只在第一次加载数据的时候使用

## 代码演示

### 基础用法

最简单的占位效果。

```vue
<template>
  <Skeleton />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
</script>
```

### 动画效果

显示动画效果。

```vue
<template>
  <Skeleton active />
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
</script>
```

### 包含子组件

加载占位图包含子组件。

```vue
<template>
  <div>
    <button @click="loading = !loading">切换加载状态</button>
    <Skeleton :loading="loading" active avatar>
      <div style="display: flex; gap: 12px; margin-top: 16px;">
        <img
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
          style="width: 40px; height: 40px; border-radius: 50%;"
        />
        <div>
          <p style="font-weight: bold;">用户名称</p>
          <p>这是一段描述信息，用于展示骨架屏效果。</p>
        </div>
      </div>
    </Skeleton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton } from 'ant-design-hmfw'

const loading = ref(true)
</script>
```

### 按钮/输入框骨架

独立的按钮和输入框骨架。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <SkeletonButton active />
    <SkeletonButton active size="small" />
    <SkeletonButton active shape="round" />
    <SkeletonInput active />
    <SkeletonInput active size="small" />
  </div>
</template>

<script setup lang="ts">
import { SkeletonButton, SkeletonInput } from 'ant-design-hmfw'
</script>
```

## API

### Skeleton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| avatar | 是否显示头像占位图 | `boolean \| object` | `false` |
| paragraph | 是否显示段落占位图 | `boolean \| object` | `true` |
| title | 是否显示标题占位图 | `boolean \| object` | `true` |
| loading | 为 true 时，显示占位图，反之则直接展示子组件 | `boolean` | - |
| round | 为 true 时，段落和标题显示圆角 | `boolean` | `false` |

### SkeletonButton Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| size | 大小 | `'large' \| 'default' \| 'small'` | `'default'` |
| shape | 形状 | `'default' \| 'circle' \| 'round'` | `'default'` |
| block | 将按钮宽度调整为其父宽度 | `boolean` | `false` |

### SkeletonInput Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| size | 大小 | `'large' \| 'default' \| 'small'` | `'default'` |
| block | 将输入框宽度调整为其父宽度 | `boolean` | `false` |
