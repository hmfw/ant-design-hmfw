<template>
  <SemanticPreview component="Result" :semantics="semantics" :height="360">
    <template #default="{ classNames }">
      <!-- 同时提供 title/subTitle/extra/默认插槽，使 6 个语义节点全部渲染 -->
      <Result
        status="success"
        title="语义化样式定制"
        sub-title="通过 classNames / styles 精细化控制各节点样式。"
        :class-names="classNames"
      >
        <template #extra>
          <Button type="primary">查看详情</Button>
        </template>
        <p>这里是补充说明内容，渲染在 content 节点内。</p>
      </Result>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Result, Button } from '@hmfw/ant-design'

// 与 ResultClassNames / ResultStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-result，附带 status 类如 .hmfw-result-success）。承载整体内边距、居中布局与状态配色，始终渲染。',
  },
  {
    name: 'icon',
    desc: '图标/插画容器（div.hmfw-result-icon）。承载状态图标或 403/404/500 异常插画的字号与配色，始终渲染；可用 icon 插槽替换，或 icon=false 隐藏（异常插画不受影响）。',
  },
  {
    name: 'title',
    desc: '标题（div.hmfw-result-title）。承载主标题排版，仅在设置 title 属性或 title 插槽时渲染。',
  },
  {
    name: 'subtitle',
    desc: '副标题（div.hmfw-result-subtitle）。承载副标题排版，仅在设置 subTitle 属性或 subTitle 插槽时渲染。',
  },
  {
    name: 'extra',
    desc: '操作区（div.hmfw-result-extra）。承载按钮等操作内容，仅在设置 extra 属性或 extra 插槽时渲染。',
  },
  {
    name: 'content',
    desc: '内容主体（div.hmfw-result-body）。承载默认插槽补充说明的背景与内边距，仅在提供默认插槽内容时渲染。',
  },
]
</script>
