<template>
  <SemanticPreview component="Timeline" :semantics="semantics" :height="280">
    <template #default="{ classNames }">
      <div style="width: 100%; padding-left: 8px">
        <Timeline :items="items" :class-names="classNames" />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Timeline } from '@hmfw/ant-design'
import { ClockCircleOutlined } from '@hmfw/icons'

// 多个 item 覆盖不同 color / 自定义 icon，使各语义节点均渲染
const items = [
  { title: '2024-01-01', content: '创建服务站点' },
  { title: '2024-01-08', content: '初步排查网络问题', color: 'green' },
  {
    title: '2024-01-10',
    content: '技术测试通过',
    color: 'red',
    icon: h(ClockCircleOutlined),
  },
  { title: '2024-01-12', content: '服务上线' },
]

// 与 TimelineClassNames / TimelineStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '时间轴根容器（ul.hmfw-timeline）。承载时间轴整体布局与方向，始终渲染。',
  },
  {
    name: 'item',
    desc: '时间轴项（li.hmfw-timeline-item）。承载单个节点的行布局，每个 item 各渲染一个。',
  },
  {
    name: 'itemTitle',
    desc: '节点标题（div.hmfw-timeline-item-title）。承载时间/标题文本样式，仅在 item.title 存在时渲染。',
  },
  {
    name: 'itemRail',
    desc: '连接线（div.hmfw-timeline-item-rail）。承载节点之间竖向连接线样式，末项通常不渲染。',
  },
  {
    name: 'itemIcon',
    desc: '节点图标/圆点（div.hmfw-timeline-item-icon）。承载圆点颜色与自定义图标，每个 item 各渲染一个。',
  },
  {
    name: 'itemContent',
    desc: '节点内容（div.hmfw-timeline-item-content）。承载正文内容样式，仅在 item.content 存在时渲染。',
  },
]
</script>
