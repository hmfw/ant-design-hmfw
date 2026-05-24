# Checkbox 多选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时。
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 代码演示

### 基础用法

简单的 checkbox。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <Checkbox v-model:checked="checked1">普通复选框</Checkbox>
    <Checkbox v-model:checked="checked2" disabled>禁用复选框</Checkbox>
    <Checkbox v-model:checked="checked3" disabled>禁用选中</Checkbox>
    <p>checked1: {{ checked1 }}, checked2: {{ checked2 }}, checked3: {{ checked3 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Checkbox } from 'ant-design-hmfw'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
```

### CheckboxGroup

方便的从数组生成 Checkbox 组。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">水平排列：</p>
      <CheckboxGroup
        v-model:value="selectedFruits"
        :options="fruitOptions"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">垂直排列：</p>
      <CheckboxGroup
        v-model:value="selectedColors"
        :options="colorOptions"
        direction="vertical"
      />
    </div>
    <p>水果：{{ selectedFruits }}，颜色：{{ selectedColors }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckboxGroup } from 'ant-design-hmfw'

const selectedFruits = ref<string[]>(['apple'])
const selectedColors = ref<string[]>([])

const fruitOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
  { label: '葡萄', value: 'grape', disabled: true },
]

const colorOptions = [
  { label: '红色', value: 'red' },
  { label: '绿色', value: 'green' },
  { label: '蓝色', value: 'blue' },
]
</script>
```

### 全选

在实现全选效果时，你可能会用到 `indeterminate` 属性。

```vue
<template>
  <div>
    <div style="border-bottom: 1px solid #e8e8e8; padding-bottom: 8px; margin-bottom: 8px;">
      <Checkbox
        v-model:checked="checkAll"
        :indeterminate="indeterminate"
        @change="handleCheckAllChange"
      >
        全选
      </Checkbox>
    </div>
    <CheckboxGroup
      v-model:value="checkedList"
      :options="options"
      @change="handleGroupChange"
    />
    <p style="margin-top: 8px;">已选：{{ checkedList }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Checkbox, CheckboxGroup } from 'ant-design-hmfw'

const options = [
  { label: '选项 A', value: 'A' },
  { label: '选项 B', value: 'B' },
  { label: '选项 C', value: 'C' },
  { label: '选项 D', value: 'D' },
]

const checkedList = ref<string[]>(['A', 'B'])
const checkAll = ref(false)
const indeterminate = ref(true)

const handleCheckAllChange = (checked: boolean) => {
  checkedList.value = checked ? options.map(o => o.value) : []
  indeterminate.value = false
}

const handleGroupChange = (list: string[]) => {
  indeterminate.value = !!list.length && list.length < options.length
  checkAll.value = list.length === options.length
}
</script>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked(v-model) | 指定当前是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 失效状态 | `boolean` | `false` |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | `boolean` | `false` |
| value | checkbox 的 value，在 CheckboxGroup 中使用 | `string \| number` | - |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定选中的选项 | `(string \| number)[]` | `[]` |
| defaultValue | 默认选中的选项 | `(string \| number)[]` | `[]` |
| options | 指定可选项 | `Array<{ label: string; value: string \| number; disabled?: boolean }>` | `[]` |
| disabled | 整组失效 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:checked | 变化时回调函数（Checkbox） | `(checked: boolean) => void` |
| change | 变化时回调函数 | `(event: Event) => void` |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 变化时回调函数 | `(value: (string \| number)[]) => void` |
| change | 变化时回调函数 | `(value: (string \| number)[]) => void` |

### Checkbox Slots

| 插槽名 | 说明 |
|--------|------|
| default | checkbox 的内容 |
