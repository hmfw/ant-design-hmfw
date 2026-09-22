<template>
  <SemanticPreview component="Statistic" :semantics="semantics" :height="140">
    <template #default="{ classNames }">
      <!-- 给齐 title / prefix / value / suffix，确保六个语义节点都渲染 -->
      <Statistic title="活跃用户" :value="112893" :prefix="h(ArrowUpOutlined)" suffix="人" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { ArrowUpOutlined } from '@hmfw/icons'
import { Statistic } from '@hmfw/ant-design'

// 与 StatisticClassNames / StatisticStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '统计数值根容器（div.hmfw-statistic）。承载整体排版与方向（rtl 时叠加 .hmfw-statistic-rtl）。始终渲染。',
  },
  {
    name: 'title',
    desc: '标题区域（div.hmfw-statistic-title）。承载标题文字的字号与颜色，仅在设置 title 属性时渲染。',
  },
  {
    name: 'content',
    desc: '数值内容容器（div.hmfw-statistic-content）。横向排列前缀、数值与后缀，valueStyle 也作用于此节点。始终渲染（loading 时替换为骨架屏）。',
  },
  {
    name: 'prefix',
    desc: '数值前缀（span.hmfw-statistic-content-prefix）。承载数值前图标/文本的样式与右侧间距，仅在设置 prefix 属性时渲染。',
  },
  {
    name: 'value',
    desc: '数值文本（span.hmfw-statistic-content-value）。承载格式化后的数值（千分位/精度），是内容区的核心节点。始终渲染。',
  },
  {
    name: 'suffix',
    desc: '数值后缀（span.hmfw-statistic-content-suffix）。承载数值后单位/文本的样式与左侧间距，仅在设置 suffix 属性时渲染。',
  },
]
</script>
