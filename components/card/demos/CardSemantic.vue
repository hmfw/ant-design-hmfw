<template>
  <SemanticPreview component="Card" :semantics="semantics" :height="360">
    <template #default="{ classNames }">
      <!-- 提供 title + extra 插槽（触发 head/title/extra），cover 插槽（触发 cover），
           actions 插槽（触发 actions），默认插槽内容（body 始终渲染） -->
      <Card title="卡片标题" style="width: 300px" :class-names="classNames">
        <template #cover>
          <div style="height: 96px; background: linear-gradient(135deg, #a78bfa, #7c3aed)" />
        </template>
        <template #extra>
          <a href="javascript:void(0)">更多</a>
        </template>
        <p style="margin: 0">卡片正文内容，语义化节点演示。</p>
        <template #actions>
          <SettingOutlined />
          <EditOutlined />
          <EllipsisOutlined />
        </template>
      </Card>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@hmfw/icons'
import { Card } from '@hmfw/ant-design'

// 与 CardClassNames / CardStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '卡片根节点（div.hmfw-card）。承载边框、圆角、阴影与变体（borderless/outlined）、尺寸、hoverable 等整体外观，始终渲染。',
  },
  {
    name: 'head',
    desc: '头部容器（div.hmfw-card-head）。承载标题区的高度、内边距与底部分割线，仅在存在 title/title 插槽/extra 插槽/tabList 时渲染。',
  },
  {
    name: 'title',
    desc: '标题节点（div.hmfw-card-head-title）。承载标题文本的字号、字重与省略样式，仅在设置 title 属性或 title 插槽时渲染。',
  },
  {
    name: 'extra',
    desc: '右侧扩展节点（div.hmfw-card-extra）。承载头部右侧操作区的对齐样式，仅在提供 extra 插槽时渲染。',
  },
  {
    name: 'body',
    desc: '主体内容容器（div.hmfw-card-body）。承载正文区的内边距，展示默认插槽内容或加载占位，始终渲染。',
  },
  {
    name: 'actions',
    desc: '底部操作栏（ul.hmfw-card-actions）。承载底部操作按钮的等分布局与分割线，仅在提供 actions 插槽时渲染。',
  },
  {
    name: 'cover',
    desc: '封面容器（div.hmfw-card-cover）。承载顶部封面图的裁剪与圆角，仅在提供 cover 插槽时渲染。',
  },
]
</script>
