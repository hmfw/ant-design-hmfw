# InputNumber 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 何时使用

当需要获取标准数值时。

## 代码演示

### 基础用法

数字输入框。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <InputNumber v-model:value="value" placeholder="请输入数字" style="width: 100%;" />
    <InputNumber v-model:value="value" disabled placeholder="禁用状态" style="width: 100%;" />
    <p>当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value = ref<number | null>(null)
</script>
```

### 最大最小值

通过 `min` 和 `max` 限制输入范围，通过 `step` 设置步长。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <div>
      <p style="margin-bottom: 4px;">范围 1-10，步长 1：</p>
      <InputNumber
        v-model:value="value1"
        :min="1"
        :max="10"
        :step="1"
        style="width: 100%;"
      />
    </div>
    <div>
      <p style="margin-bottom: 4px;">范围 0-1，步长 0.1，精度 1：</p>
      <InputNumber
        v-model:value="value2"
        :min="0"
        :max="1"
        :step="0.1"
        :precision="1"
        style="width: 100%;"
      />
    </div>
    <p>value1: {{ value1 }}，value2: {{ value2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value1 = ref<number>(5)
const value2 = ref<number>(0.5)
</script>
```

### 前后缀

带有前缀或后缀的数字输入框。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <InputNumber
      v-model:value="price"
      :min="0"
      prefix="¥"
      addon-after="元"
      placeholder="请输入价格"
      style="width: 100%;"
    />
    <InputNumber
      v-model:value="percent"
      :min="0"
      :max="100"
      addon-after="%"
      placeholder="请输入百分比"
      style="width: 100%;"
    />
    <InputNumber
      v-model:value="weight"
      :min="0"
      addon-before="重量"
      addon-after="kg"
      placeholder="请输入重量"
      style="width: 100%;"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const price = ref<number | null>(null)
const percent = ref<number | null>(null)
const weight = ref<number | null>(null)
</script>
```

## API

### InputNumber Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 当前值 | `number \| null` | - |
| defaultValue | 初始值 | `number` | - |
| min | 最小值 | `number` | `-Infinity` |
| max | 最大值 | `number` | `Infinity` |
| step | 每次改变步数，可以为小数 | `number` | `1` |
| precision | 数值精度 | `number` | - |
| disabled | 禁用 | `boolean` | `false` |
| size | 输入框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| prefix | 带有前缀图标的 input | `string \| VNode` | - |
| addonBefore | 带标签的 input，设置前置标签 | `string \| VNode` | - |
| addonAfter | 带标签的 input，设置后置标签 | `string \| VNode` | - |
| controls | 是否显示增减按钮 | `boolean` | `true` |
| keyboard | 是否启用键盘快捷行为 | `boolean` | `true` |
| placeholder | 占位符 | `string` | - |

### InputNumber Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 变化回调 | `(value: number \| null) => void` |
| change | 变化回调 | `(value: number \| null) => void` |
| focus | 获取焦点时的回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时的回调 | `(event: FocusEvent) => void` |
| pressEnter | 按下回车的回调 | `(event: KeyboardEvent) => void` |
| step | 点击上下箭头的回调 | `(value: number, info: { offset: number; type: 'up' \| 'down' }) => void` |
