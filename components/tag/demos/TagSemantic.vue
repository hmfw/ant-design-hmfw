<template>
  <SemanticPreview component="Tag" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <Tag :icon="TagsOutlined" closable :class-names="classNames">标签</Tag>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { TagsOutlined } from '@hmfw/icons'
import { Tag } from '@hmfw/ant-design'

// 与 TagClassNames / TagStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（span.hmfw-tag，设置 href 后为 a.hmfw-tag）。承载边框、背景、颜色、内边距、圆角与整体布局，变体（filled/solid/outlined）与色板类名作用于此。',
  },
  {
    name: 'icon',
    desc: '前置图标节点（.hmfw-tag-icon）。控制图标字号与右侧间距，仅在设置 icon 属性或 icon 插槽时渲染。',
  },
  {
    name: 'content',
    desc: '内容包裹节点（.hmfw-tag-content）。仅在同时存在 icon 与文字内容时渲染，用于对齐 v6 语义化结构；无图标时文字直接置于根节点下，此节点不渲染。',
  },
  {
    name: 'closeIcon',
    desc: '关闭图标节点（span.hmfw-tag-close-icon）。承载关闭按钮的字号、颜色与 hover 态，仅在 closable 且 closeIcon 不为 false 时渲染。',
  },
]
</script>
