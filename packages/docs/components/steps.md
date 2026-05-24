# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

- 当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务
- 需要展示当前操作的进度时

## 代码演示

### 基础用法

简单的步骤条。

```vue
<template>
  <Space direction="vertical" style="width: 100%">
    <Steps :current="current" :items="items" />
    <Space>
      <Button :disabled="current === 0" @click="current--">上一步</Button>
      <Button type="primary" :disabled="current === items.length - 1" @click="current++">下一步</Button>
    </Space>
    <p>当前步骤：{{ current + 1 }}</p>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Steps, Button, Space } from 'ant-design-hmfw'

const current = ref(0)

const items = [
  { title: '第一步', description: '填写基本信息' },
  { title: '第二步', description: '确认订单信息' },
  { title: '第三步', description: '完成支付' },
]
</script>
```

### 垂直步骤条

通过 `direction="vertical"` 设置垂直方向步骤条。

```vue
<template>
  <Steps
    direction="vertical"
    :current="1"
    :items="items"
  />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  {
    title: '已完成',
    description: '这是一段描述文字。',
  },
  {
    title: '进行中',
    description: '这是一段描述文字。',
  },
  {
    title: '待处理',
    description: '这是一段描述文字。',
  },
]
</script>
```

### 点状步骤条

通过 `progress-dot` 属性设置点状步骤条。

```vue
<template>
  <Steps
    progress-dot
    :current="1"
    :items="items"
  />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '已完成', description: '2024-01-01' },
  { title: '进行中', description: '2024-01-02' },
  { title: '待处理', description: '2024-01-03' },
  { title: '待处理', description: '2024-01-04' },
]
</script>
```

### 错误状态

通过 `status="error"` 设置错误状态。

```vue
<template>
  <Steps
    :current="1"
    status="error"
    :items="items"
  />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '已完成', description: '操作成功' },
  { title: '处理中', description: '操作失败', status: 'error' },
  { title: '待处理', description: '等待处理' },
]
</script>
```

### 小型步骤条

通过 `size="small"` 设置小型步骤条。

```vue
<template>
  <Steps size="small" :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '第一步' },
  { title: '第二步' },
  { title: '第三步' },
]
</script>
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤，从 0 开始记数 | `number` | `0` |
| items | 配置选项 | `StepItem[]` | `[]` |
| direction | 指定步骤条方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size | 指定大小 | `'default' \| 'small'` | `'default'` |
| status | 指定当前步骤的状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | `'process'` |
| progressDot | 点状步骤条，可以自定义点的渲染 | `boolean \| function` | `false` |
| labelPlacement | 指定标签放置位置 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### StepItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | - |
| description | 步骤的详情描述 | `string` | - |
| subTitle | 子标题 | `string` | - |
| status | 指定状态 | `'wait' \| 'process' \| 'finish' \| 'error'` | - |
| icon | 步骤图标 | `string` | - |
| disabled | 禁用点击 | `boolean` | `false` |
