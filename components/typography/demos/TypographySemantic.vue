<template>
  <SemanticPreview component="Paragraph" :semantics="semantics" :height="160">
    <template #default="{ classNames }">
      <!-- Text / Title / Paragraph / Link 语义节点一致（root + copy）；此处用 Paragraph + copyable 让两节点都渲染 -->
      <Paragraph copyable :class-names="classNames" style="max-width: 320px; margin: 0">
        排版组件用于展示标题、段落与文本，支持复制、省略等能力。
      </Paragraph>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Paragraph } from '@hmfw/ant-design'

// Text / Title / Paragraph / Link 的 ClassNames 结构一致，均为 { root, copy }
const semantics = [
  {
    name: 'root',
    desc: '根节点（Paragraph 为 p.hmfw-typography；Text 为 span、Title 为 h1-h5、Link 为 a.hmfw-typography-link）。承载文字色板（secondary/success/...）、strong/italic/mark 等装饰样式与省略布局，始终渲染。',
  },
  {
    name: 'copy',
    desc: '复制按钮（button.hmfw-typography-copy）。承载复制图标的字号、颜色与 hover 态，复制成功时附加 copy-success 类，仅在设置 copyable 时渲染。',
  },
]
</script>
