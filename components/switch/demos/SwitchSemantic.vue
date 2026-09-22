<template>
  <SemanticPreview component="Switch" :semantics="semantics" :height="100">
    <template #default="{ classNames }">
      <!-- 给齐 checkedChildren / unCheckedChildren，五个语义节点都渲染 -->
      <Switch :default-checked="true" checked-children="开" un-checked-children="关" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Switch } from '@hmfw/ant-design'

// 与 SwitchClassNames / SwitchStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '开关根节点（button.hmfw-switch）。承载背景、圆角、尺寸与状态类（选中 -checked、禁用 -disabled、加载 -loading、小号 -small）。始终渲染。',
  },
  {
    name: 'content',
    desc: '内容容器（span.hmfw-switch-inner）。包裹选中/未选中两段文字并随手柄滑动。始终渲染。',
  },
  {
    name: 'indicator',
    desc: '指示器/手柄（span.hmfw-switch-handle）。开关上滑动的圆形手柄，loading 时内部渲染 .hmfw-switch-loading-icon。始终渲染。',
  },
  {
    name: 'checked',
    desc: '选中态子内容（span.hmfw-switch-inner-checked）。承载 checkedChildren 的文字样式，选中时可见。始终渲染（内容由 checkedChildren 提供）。',
  },
  {
    name: 'unchecked',
    desc: '未选中态子内容（span.hmfw-switch-inner-unchecked）。承载 unCheckedChildren 的文字样式，未选中时可见。始终渲染（内容由 unCheckedChildren 提供）。',
  },
]
</script>
