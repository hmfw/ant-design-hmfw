# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度
- 进行分类

## 代码演示

### 基础用法

基本标签的用法，可以通过添加 closable 变为可关闭标签。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tag>Tag 1</Tag>
    <Tag>
      <a href="https://github.com/ant-design/ant-design">Link</a>
    </Tag>
    <Tag closable @close="onClose">Tag 2</Tag>
    <Tag closable :bordered="false">Tag 3</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭标签')
}
</script>
```

### 预设颜色

我们添加了多种预设色彩的标签样式，用作不同场景使用。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tag color="magenta">magenta</Tag>
    <Tag color="red">red</Tag>
    <Tag color="volcano">volcano</Tag>
    <Tag color="orange">orange</Tag>
    <Tag color="gold">gold</Tag>
    <Tag color="lime">lime</Tag>
    <Tag color="green">green</Tag>
    <Tag color="cyan">cyan</Tag>
    <Tag color="blue">blue</Tag>
    <Tag color="geekblue">geekblue</Tag>
    <Tag color="purple">purple</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
</script>
```

### 自定义颜色

可以自定义标签颜色。

```vue
<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Tag color="#f50">#f50</Tag>
    <Tag color="#2db7f5">#2db7f5</Tag>
    <Tag color="#87d068">#87d068</Tag>
    <Tag color="#108ee9">#108ee9</Tag>
  </div>
</template>

<script setup lang="ts">
import { Tag } from 'ant-design-hmfw'
</script>
```

### 可选中标签

可通过 CheckableTag 实现类似 Checkbox 的效果。

```vue
<template>
  <div style="display: flex; gap: 8px;">
    <CheckableTag
      v-for="tag in tags"
      :key="tag"
      :checked="selectedTags.includes(tag)"
      @change="(checked) => handleChange(tag, checked)"
    >
      {{ tag }}
    </CheckableTag>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { CheckableTag } from 'ant-design-hmfw'

const tags = ['Movies', 'Books', 'Music', 'Sports']
const selectedTags = ref<string[]>(['Books'])

function handleChange(tag: string, checked: boolean) {
  if (checked) {
    selectedTags.value = [...selectedTags.value, tag]
  } else {
    selectedTags.value = selectedTags.value.filter(t => t !== tag)
  }
}
</script>
```

## API

### Tag Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 标签色 | `string` | - |
| closable | 标签是否可以关闭 | `boolean` | `false` |
| bordered | 是否有边框 | `boolean` | `true` |

### Tag Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭时的回调 | `(e: MouseEvent) => void` |
| click | 点击标签时的回调 | `(e: MouseEvent) => void` |

### CheckableTag Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 设置标签的选中状态 | `boolean` | `false` |

### CheckableTag Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 点击标签时触发的回调 | `(checked: boolean) => void` |
