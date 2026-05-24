# Select 选择器

下拉选择器。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器，或者需要一个更优雅的多选器时。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。

## 代码演示

### 基础用法

基本使用。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <Select
      v-model:value="value"
      :options="options"
      placeholder="请选择"
      style="width: 100%;"
    />
    <Select
      v-model:value="value2"
      :options="options"
      placeholder="禁用状态"
      disabled
      style="width: 100%;"
    />
    <p>选中：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<string>('')
const value2 = ref<string>('')

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte（禁用）', value: 'svelte', disabled: true },
]
</script>
```

### 多选

通过 `mode="multiple"` 开启多选模式。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Select
      v-model:value="selected"
      :options="options"
      mode="multiple"
      placeholder="请选择多个选项"
      style="width: 100%;"
    />
    <Select
      v-model:value="selected2"
      :options="options"
      mode="multiple"
      :max-tag-count="2"
      placeholder="最多显示 2 个标签"
      style="width: 100%;"
    />
    <p>已选：{{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const selected = ref<string[]>([])
const selected2 = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
</script>
```

### 搜索

通过 `show-search` 开启搜索功能。

```vue
<template>
  <div style="max-width: 300px;">
    <Select
      v-model:value="value"
      :options="options"
      :show-search="true"
      placeholder="请搜索并选择"
      style="width: 100%;"
      @search="handleSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref('')

const allOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广州', value: 'guangzhou' },
  { label: '深圳', value: 'shenzhen' },
  { label: '杭州', value: 'hangzhou' },
  { label: '成都', value: 'chengdu' },
]

const options = ref(allOptions)

const handleSearch = (searchText: string) => {
  options.value = allOptions.filter(item =>
    item.label.includes(searchText)
  )
}
</script>
```

## API

### Select Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| value(v-model) | 指定当前选中的条目 | `string \| number \| (string \| number)[]` | - |
| defaultValue | 指定默认选中的条目 | `string \| number \| (string \| number)[]` | - |
| options | 数据化配置选项内容 | `SelectOption[]` | `[]` |
| disabled | 是否禁用 | `boolean` | `false` |
| placeholder | 选择框默认文字 | `string` | - |
| allowClear | 支持清除 | `boolean` | `false` |
| size | 选择框大小 | `'small' \| 'middle' \| 'large'` | `'middle'` |
| mode | 设置 Select 的模式为多选或标签 | `'multiple' \| 'tags'` | - |
| showSearch | 使单选模式可搜索 | `boolean` | `false` |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | `number` | - |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| open | 是否展开下拉菜单 | `boolean` | - |
| loading | 加载中状态 | `boolean` | `false` |

### SelectOption

| 参数 | 说明 | 类型 |
|------|------|------|
| value | 选项的值 | `string \| number` |
| label | 选项的标签 | `string` |
| disabled | 是否禁用该选项 | `boolean` |

### Select Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:value | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string \| number \| (string \| number)[]) => void` |
| change | 选中 option，或 input 的 value 变化时，调用此函数 | `(value: string \| number \| (string \| number)[], option: SelectOption \| SelectOption[]) => void` |
| search | 文本框值变化时回调 | `(value: string) => void` |
| focus | 获得焦点时回调 | `(event: FocusEvent) => void` |
| blur | 失去焦点时回调 | `(event: FocusEvent) => void` |
| clear | 清除内容时回调 | `() => void` |
