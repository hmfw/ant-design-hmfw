<template>
  <SemanticPreview component="Popover" :semantics="semantics" :height="180">
    <template #default="{ classNames }">
      <!--
        Popover 的浮层通过 Tooltip teleport 到 body，SemanticPreview 无法框选。
        故改用 PopoverPurePanel（_InternalPanelDoNotUseOrYouWillBeFired）就地渲染
        气泡卡片外观，它与 Popover 共用同一套 title / content 语义节点与 classNames，
        使两个节点都能被框选。
      -->
      <PopoverPurePanel title="标题" content="这是气泡卡片的内容区域。" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { PopoverPurePanel } from '@hmfw/ant-design'

// 与 PopoverClassNames / PopoverStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'title',
    desc: '标题节点（div.hmfw-popover-title）。承载气泡卡片标题的字号、字重与底部间距，仅在提供 title（prop 或插槽）且非空时渲染。',
  },
  {
    name: 'content',
    desc: '内容节点（div.hmfw-popover-inner-content）。承载正文内容的排版样式，仅在提供 content（prop 或插槽）且非空时渲染。',
  },
]
</script>
