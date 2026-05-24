# AutoComplete 自动完成

输入框自动完成功能。

## 何时使用

需要自动完成时。

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助输入。
- Select 是在限定的可选项中进行选择，关键词是选择。

## 代码演示

### 基础用法

基本使用，通过 `options` 设置自动完成的数据源。

```vue
<template>
  <div style="width: 300px;">
    <AutoComplete
      v-model:value="value"
      :options="options"
      placeholder="请输入内容"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value = ref('')
const options = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
  { value: 'Svelte' },
])

const handleSearch = (searchText: string) => {
  const allOptions = ['Vue', 'React', 'Angular', 'Svelte', 'Solid']
  options.value = allOptions
    .filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
    .map(item => ({ value: item }))
}
</script>
```

### 自定义选项

通过 `options` 的 `label` 属性自定义选项内容。

```vue
<template>
  <div style="width: 300px;">
    <AutoComplete
      v-model:value="value"
      :options="options"
      placeholder="请输入内容"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value = ref('')
const options = ref([
  { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
  { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
  { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
])

const handleSearch = (searchText: string) => {
  const allOptions = [
    { value: 'vue', label: 'Vue - 渐进式 JavaScript 框架' },
    { value: 'react', label: 'React - 用于构建用户界面的 JavaScript 库' },
    { value: 'angular', label: 'Angular - 现代 Web 开发平台' },
  ]
  options.value = allOptions.filter(item =>
    item.value.toLowerCase().includes(searchText.toLowerCase())
  )
}
</script>
```

### 邮箱补全

邮箱输入自动补全示例。

```vue
<template>
  <div style="width: 300px;">
    <AutoComplete
      v-model:value="email"
      :options="emailOptions"
      placeholder="请输入邮箱"
      @search="handleEmailSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const email = ref('')
const emailOptions = ref<Array<{ value: string }>>([])

const emailSuffixes = ['@gmail.com', '@qq.com', '@163.com', '@outlook.com', '@hotmail.com']

const handleEmailSearch = (searchText: string) => {
  if (!searchText || searchText.includes('@')) {
    emailOptions.value = []
    return
  }
  
  emailOptions.value = emailSuffixes.map(suffix => ({
    value: searchText + suffix,
  }))
}
</script>
```

### 不同尺寸

三种大小的输入框，大的用在表单中，中的为默认。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <AutoComplete
      v-model:value="value1"
      :options="options"
      size="large"
      placeholder="Large size"
    />
    <AutoComplete
      v-model:value="value2"
      :options="options"
      placeholder="Default size"
    />
    <AutoComplete
      v-model:value="value3"
      :options="options"
      size="small"
      placeholder="Small size"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AutoComplete } from 'ant-design-hmfw'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const options = ref([
  { value: 'Vue' },
  { value: 'React' },
  { value: 'Angular' },
])
</script>
```

## API

### AutoComplete Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定当前选中的条目 | `string` | - |
| defaultValue | 指定默认选中的条目 | `string` | - |
| options | 数据源 | `AutoCompleteOption[]` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| placeholder | 输入框占位文本 | `string` | - |
| allowClear | 支持清除 | `boolean` | `false` |
| size | 输入框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | `boolean \| ((inputValue: string, option: AutoCompleteOption) => boolean)` | `true` |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | `boolean` | `false` |

### AutoCompleteOption

| 参数 | 说明 | 类型 |
|------|------|------|
| value | 选项的值 | `string` |
| label | 选项的标签，若不设置则默认与 value 相同 | `string` |
| disabled | 是否禁用该选项 | `boolean` |

### AutoComplete Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string) => void` |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string) => void` |
| select | 被选中时调用，参数为选中项的 value 值 | `(value: string, option: AutoCompleteOption) => void` |
| search | 搜索补全项的时候调用 | `(value: string) => void` |
| focus | 获得焦点时的回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时的回调 | `(event: FocusEvent) => void` |
| clear | 点击清除按钮时的回调 | `() => void` |
