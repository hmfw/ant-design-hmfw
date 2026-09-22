<template>
  <SemanticPreview component="Descriptions" :semantics="semantics" :height="320">
    <template #default="{ classNames }">
      <Descriptions title="用户信息" extra="编辑" :items="items" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Descriptions } from '@hmfw/ant-design'

const items = [
  { label: '用户名', children: 'Zhou Maomao' },
  { label: '电话', children: '1810000000' },
  { label: '住址', children: '西湖区工专路 77 号' },
]

// 与 DescriptionsClassNames / DescriptionsStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-descriptions）。承载整体布局、尺寸类名与 RTL 方向，始终渲染。',
  },
  {
    name: 'header',
    desc: '头部容器（div.hmfw-descriptions-header）。承载标题与右侧扩展的横向排布，仅在传入 title/extra 或对应插槽时渲染。',
  },
  {
    name: 'title',
    desc: '标题（div.hmfw-descriptions-title）。承载标题文字样式，仅在传入 title 或 title 插槽时渲染。',
  },
  {
    name: 'extra',
    desc: '右侧扩展（div.hmfw-descriptions-extra）。承载头部右侧操作区样式，仅在传入 extra 或 extra 插槽时渲染。',
  },
  {
    name: 'view',
    desc: '视图容器（div.hmfw-descriptions-view）。包裹内部 table，承载边框与背景样式，始终渲染。',
  },
  {
    name: 'row',
    desc: '行（tr.hmfw-descriptions-row）。每个描述行一个，承载行级样式，有描述项时渲染。',
  },
  {
    name: 'item',
    desc: '项容器（td.hmfw-descriptions-item）。仅水平无边框布局下渲染，承载单元格内边距；bordered 或 vertical 布局下不渲染。',
  },
  {
    name: 'itemContainer',
    desc: '项内部容器（div.hmfw-descriptions-item-container）。仅水平无边框布局下渲染，包裹标签与内容并控制其排布。',
  },
  {
    name: 'label',
    desc: '标签（span/th.hmfw-descriptions-item-label）。承载标签文字样式与冒号；label 为空时不渲染。',
  },
  {
    name: 'content',
    desc: '内容（span/td.hmfw-descriptions-item-content）。承载内容文字样式，随每个描述项渲染。',
  },
]
</script>
