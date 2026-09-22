<template>
  <SemanticPreview component="Checkbox" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- 默认插槽提供文字（触发 label 节点），checked 让勾选框呈选中态 -->
      <Checkbox checked :class-names="classNames">复选框</Checkbox>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Checkbox } from '@hmfw/ant-design'

// 与 CheckboxClassNames / CheckboxStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（label.hmfw-checkbox-wrapper）。承载整体行内布局、光标与选中/禁用状态类名，包裹勾选框与文字，始终渲染。',
  },
  {
    name: 'checkbox',
    desc: '复选框容器（span.hmfw-checkbox）。承载勾选框的定位与选中/半选/禁用状态类名，包裹原生 input 与视觉勾选框，始终渲染。',
  },
  {
    name: 'input',
    desc: '原生 input 元素（input.hmfw-checkbox-input）。承载可点击/可聚焦区域，视觉上透明覆盖在勾选框上，始终渲染。',
  },
  {
    name: 'inner',
    desc: '视觉勾选框（span.hmfw-checkbox-inner）。承载方框的边框、背景与对勾图标，选中态样式作用于此，始终渲染。',
  },
  {
    name: 'label',
    desc: '文本标签（span.hmfw-checkbox-label）。承载文字的内边距与颜色，仅在提供默认插槽（文字内容）时渲染。',
  },
]
</script>
