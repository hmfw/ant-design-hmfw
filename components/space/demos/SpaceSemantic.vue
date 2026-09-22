<template>
  <SemanticPreview component="Space" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- 多个子项 + 分隔符，确保 root / item / split 三个语义节点都渲染 -->
      <Space separator="|" :class-names="classNames">
        <Button>首页</Button>
        <Button>文档</Button>
        <Button>关于</Button>
      </Space>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Space, Button } from '@hmfw/ant-design'

// 与 SpaceClassNames / SpaceStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '间距根容器（div.hmfw-space）。承载 flex 布局、方向（水平/垂直）、对齐与换行，行/列间距通过 columnGap/rowGap 设置在此节点上。始终渲染。',
  },
  {
    name: 'item',
    desc: '子元素容器（div.hmfw-space-item）。每个子节点都会被包裹一层，用于统一控制单项的对齐与样式。有多少个有效子节点就渲染多少个。',
  },
  {
    name: 'split',
    desc: '分隔符容器（span.hmfw-space-item-split）。承载相邻子项之间分隔符的样式，仅在设置 separator 属性或 split 插槽、且子项数量大于 1 时，于每两项之间渲染。',
  },
]
</script>
