<template>
  <SemanticPreview component="Empty" :semantics="semantics" :height="260">
    <template #default="{ classNames }">
      <Empty description="暂无数据" :class-names="classNames">
        <Button type="primary">立即创建</Button>
      </Empty>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Empty, Button } from '@hmfw/ant-design'

// 与 EmptyClassNames / EmptyStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-empty）。承载整体的垂直居中布局、外边距与文字颜色，始终渲染。',
  },
  {
    name: 'image',
    desc: '图片容器（div.hmfw-empty-image）。包裹预设插画、自定义 image 插槽或 URL 图片，承载图片尺寸样式；image 为 false 时不渲染。',
  },
  {
    name: 'description',
    desc: '描述文本（div.hmfw-empty-description）。承载提示文字的字号与颜色，未传 description 时回退语言包默认文案；description 为 false 且无 description 插槽时不渲染。',
  },
  {
    name: 'footer',
    desc: '底部操作区（div.hmfw-empty-footer）。承载默认插槽内容（如操作按钮）的上间距与布局，仅在提供默认插槽时渲染。',
  },
]
</script>
