<template>
  <SemanticPreview component="Skeleton" :semantics="semantics" :height="180">
    <template #default="{ classNames }">
      <!-- 同时开启 avatar / title / paragraph，使 header/avatar/section/title/paragraph/row 全部渲染 -->
      <Skeleton avatar active :paragraph="{ rows: 3 }" :class-names="classNames" style="width: 100%" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'

// 与 SkeletonClassNames / SkeletonStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-skeleton）。承载整体布局、active/round/with-avatar 等修饰类，始终渲染。',
  },
  {
    name: 'header',
    desc: '头部区域（div.hmfw-skeleton-header）。承载头像的定位容器，仅在开启 avatar 时渲染。',
  },
  {
    name: 'avatar',
    desc: '头像占位（span.hmfw-skeleton-avatar）。承载头像的形状（circle/square）、尺寸与骨架背景，仅在开启 avatar 时渲染。',
  },
  {
    name: 'section',
    desc: '内容区域（div.hmfw-skeleton-section）。承载标题与段落的容器布局，始终渲染。',
  },
  {
    name: 'title',
    desc: '标题占位（h3.hmfw-skeleton-title）。承载标题条的宽度与骨架背景，仅在 title 不为 false 时渲染。',
  },
  {
    name: 'paragraph',
    desc: '段落容器（ul.hmfw-skeleton-paragraph）。承载多行段落的列表容器，仅在 paragraph 不为 false 时渲染。',
  },
  {
    name: 'row',
    desc: '段落行项（li）。承载单行段落的宽度与骨架背景，按 paragraph.rows 逐行渲染（本例 3 行）。该节点无内置类名，仅由语义化 className/style 控制。',
  },
]
</script>
