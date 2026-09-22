<template>
  <SemanticPreview component="Avatar" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- src 模式：渲染 img 节点 -->
      <Avatar :src="avatarSrc" :size="56" :class-names="classNames" />
      <!-- 文本插槽模式：渲染 string 节点 -->
      <Avatar :size="56" :class-names="classNames">U</Avatar>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Avatar } from '@hmfw/ant-design'

// 内联 SVG 数据源，避免外链图片加载失败触发 fallback（否则 img 节点不渲染）
const avatarSrc =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><rect width="56" height="56" fill="%231677ff"/></svg>',
  )

// 与 AvatarClassNames / AvatarStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（span.hmfw-avatar）。承载头像的尺寸、形状（circle/square）、背景与居中布局，尺寸与形状类名作用于此，始终渲染。',
  },
  {
    name: 'img',
    desc: '图片元素（img）。承载图片的填充与对象适配，仅在设置了 src 且图片加载成功时渲染；加载失败降级为 fallback 后此节点不渲染。',
  },
  {
    name: 'string',
    desc: '文本内容包裹层（span.hmfw-avatar-string）。承载文字的缩放与水平居中变换，仅在无 src、无 icon 且通过默认插槽传入文字时渲染。',
  },
]
</script>
