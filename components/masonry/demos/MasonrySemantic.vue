<template>
  <SemanticPreview component="Masonry" :semantics="semantics" :height="320">
    <template #default="{ classNames }">
      <!-- 传入 items 让 root 与 item 节点都真实渲染 -->
      <Masonry :items="items" :columns="3" :gutter="12" :class-names="classNames" style="width: 100%">
        <template #default="{ item }">
          <div :style="{ background: item.color, height: `${item.height}px`, borderRadius: '8px' }" />
        </template>
      </Masonry>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Masonry } from '@hmfw/ant-design'

// 瀑布流数据项：不同高度以呈现错落布局
const items = [
  { key: 1, height: 80, data: { color: '#93c5fd', height: 80 } },
  { key: 2, height: 120, data: { color: '#fca5a5', height: 120 } },
  { key: 3, height: 60, data: { color: '#86efac', height: 60 } },
  { key: 4, height: 100, data: { color: '#fdba74', height: 100 } },
  { key: 5, height: 70, data: { color: '#c4b5fd', height: 70 } },
  { key: 6, height: 90, data: { color: '#f9a8d4', height: 90 } },
].map((it) => ({ key: it.key, height: it.height, data: it.data }))

// 与 MasonryClassNames / MasonryStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '瀑布流容器根节点（div.hmfw-masonry）。承载相对定位、整体高度与列布局，始终渲染。',
  },
  {
    name: 'item',
    desc: '单个瀑布流项目节点（div.hmfw-masonry-item）。承载每项的绝对定位、列宽与偏移，每个 items 数据项各渲染一个。',
  },
]
</script>
