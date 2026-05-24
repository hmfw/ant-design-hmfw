# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

- 页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑

## 代码演示

### 基础用法

一个简单的 loading 状态。

```vue
<template>
  <Spin />
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-hmfw'
</script>
```

### 各种大小

小的用于文本加载，默认用于卡片容器级加载，大的用于页面级加载。

```vue
<template>
  <div style="display: flex; gap: 24px; align-items: center;">
    <Spin size="small" />
    <Spin />
    <Spin size="large" />
  </div>
</template>

<script setup lang="ts">
import { Spin } from 'ant-design-hmfw'
</script>
```

### 嵌套内容

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

```vue
<template>
  <div>
    <button @click="loading = !loading">切换加载状态</button>
    <Spin :spinning="loading" tip="加载中...">
      <div style="padding: 24px; background: #f0f0f0; margin-top: 16px; border-radius: 4px;">
        <p>这是被遮罩的内容区域</p>
        <p>加载时会显示遮罩层</p>
      </div>
    </Spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin } from 'ant-design-hmfw'

const loading = ref(true)
</script>
```

### 延迟加载

延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。

```vue
<template>
  <Spin :spinning="loading" :delay="500">
    <div style="padding: 24px; background: #f0f0f0; border-radius: 4px;">
      <p>延迟 500ms 后才显示加载状态</p>
    </div>
  </Spin>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Spin } from 'ant-design-hmfw'

const loading = ref(true)
</script>
```

## API

### Spin Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spinning | 是否为加载中状态 | `boolean` | `true` |
| size | 组件大小 | `'small' \| 'default' \| 'large'` | `'default'` |
| tip | 当作为包裹元素时，可以自定义描述文案 | `string` | - |
| delay | 延迟显示加载效果的时间（防止闪烁），单位：毫秒 | `number` | - |

### Spin Slots

| 名称 | 说明 |
| --- | --- |
| default | 被遮罩的内容 |
| indicator | 加载指示符 |
