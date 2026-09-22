<template>
  <SemanticPreview component="Badge" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!-- count 模式：渲染 root + indicator -->
      <Badge :count="5" :class-names="classNames">
        <span class="demo-badge-block" />
      </Badge>
      <!-- status 模式：渲染 root + dot + text -->
      <Badge status="processing" text="处理中" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'

// 与 BadgeClassNames / BadgeStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根容器（span.hmfw-badge）。承载徽标与被包裹内容的相对定位上下文，count/dot 与 status/独立 color 两种模式下均渲染。',
  },
  {
    name: 'indicator',
    desc: '数字/小红点徽标（sup.hmfw-badge-count）。承载徽标的背景、圆角、字号与偏移定位，仅在 count/dot 模式且徽标未被隐藏（count 非 0 或 showZero）时渲染。',
  },
  {
    name: 'dot',
    desc: '状态点（span.hmfw-badge-status-dot）。承载状态色圆点的尺寸与颜色，仅在 status 模式或传入独立 color（无子元素）时渲染。',
  },
  {
    name: 'text',
    desc: '状态文本（span.hmfw-badge-status-text）。承载状态点右侧文字的字号与间距，仅在 status/独立 color 模式且传入 text 属性时渲染。',
  },
]
</script>

<style scoped>
.demo-badge-block {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: var(--doc-c-bg-soft, rgba(0, 0, 0, 0.06));
  border-radius: 6px;
}
</style>
