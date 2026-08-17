<template>
  <SemanticPreview component="Mentions" :semantics="semantics" :height="240">
    <template #default="{ classNames }">
      <Mentions :options="options" placeholder="输入 @ 提及" value="Hi, @" allow-clear :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Mentions } from '@hmfw/ant-design'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
]

// 与 MentionSemanticClassNames / MentionSemanticStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根元素（<div>）。设置行内 flex 布局、相对定位、内边距和边框样式。状态类名（.hmfw-mentions-focused、.hmfw-mentions-disabled）应用于此。',
  },
  {
    name: 'textarea',
    desc: '文本域元素（<textarea>）。设置字体、行高、文本输入和背景样式。',
  },
  {
    name: 'suffix',
    desc: '后缀元素。包含后缀内容的布局和样式，如清除按钮等。',
  },
  {
    name: 'popup',
    desc: '弹出框元素。设置绝对定位、层级、背景色、圆角、阴影和下拉选项样式。',
  },
]
</script>
