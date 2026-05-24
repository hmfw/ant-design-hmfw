# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 代码演示

### 基础用法

最简单的用法。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <Radio v-model:checked="checked">单选框</Radio>
    <Radio v-model:checked="checked2" disabled>禁用单选框</Radio>
    <Radio v-model:checked="checked3" disabled>禁用选中</Radio>
    <p>checked: {{ checked }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Radio } from 'ant-design-hmfw'

const checked = ref(false)
const checked2 = ref(false)
const checked3 = ref(true)
</script>
```

### RadioGroup

一组互斥的 Radio 配合使用。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">水平排列：</p>
      <RadioGroup v-model:value="value1" :options="options" />
    </div>
    <div>
      <p style="margin-bottom: 8px;">垂直排列：</p>
      <RadioGroup v-model:value="value2" :options="options" direction="vertical" />
    </div>
    <p>value1: {{ value1 }}，value2: {{ value2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from 'ant-design-hmfw'

const value1 = ref('a')
const value2 = ref('b')

const options = [
  { label: '选项 A', value: 'a' },
  { label: '选项 B', value: 'b' },
  { label: '选项 C', value: 'c' },
  { label: '禁用选项', value: 'd', disabled: true },
]
</script>
```

### 按钮样式

按钮样式的单选组合。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>
      <p style="margin-bottom: 8px;">outline 样式（默认）：</p>
      <RadioGroup
        v-model:value="size"
        :options="sizeOptions"
        option-type="button"
        button-style="outline"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">solid 样式：</p>
      <RadioGroup
        v-model:value="size2"
        :options="sizeOptions"
        option-type="button"
        button-style="solid"
      />
    </div>
    <div>
      <p style="margin-bottom: 8px;">大尺寸：</p>
      <RadioGroup
        v-model:value="size3"
        :options="sizeOptions"
        option-type="button"
        size="large"
      />
    </div>
    <p>选中：{{ size }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup } from 'ant-design-hmfw'

const size = ref('middle')
const size2 = ref('middle')
const size3 = ref('large')

const sizeOptions = [
  { label: '大', value: 'large' },
  { label: '中', value: 'middle' },
  { label: '小', value: 'small' },
]
</script>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| checked(v-model) | 指定当前是否选中 | `boolean` | `false` |
| defaultChecked | 初始是否选中 | `boolean` | `false` |
| disabled | 禁用 Radio | `boolean` | `false` |
| value | 根据 value 进行比较，判断是否选中 | `string \| number` | - |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 用于设置当前选中的值 | `string \| number` | - |
| defaultValue | 默认选中的值 | `string \| number` | - |
| options | 以配置形式设置子元素 | `Array<{ label: string; value: string \| number; disabled?: boolean }>` | `[]` |
| disabled | 禁选所有子单选器 | `boolean` | `false` |
| direction | 排列方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| optionType | 用于设置 Radio options 类型 | `'default' \| 'button'` | `'default'` |
| buttonStyle | RadioButton 的风格样式，目前有描边和填色两种风格 | `'outline' \| 'solid'` | `'outline'` |
| size | 大小，只对按钮样式生效 | `'small' \| 'middle' \| 'large'` | `'middle'` |

### Radio Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:checked | 变化时回调函数 | `(checked: boolean) => void` |
| change | 变化时回调函数 | `(event: Event) => void` |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选项变化时的回调函数 | `(value: string \| number) => void` |
| change | 选项变化时的回调函数 | `(event: Event) => void` |

### Radio Slots

| 插槽名 | 说明 |
|--------|------|
| default | Radio 的内容 |
