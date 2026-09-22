<template>
  <SemanticPreview component="Alert" :semantics="semantics" :height="160">
    <template #default="{ classNames }">
      <Alert
        type="success"
        show-icon
        closable
        title="操作成功"
        description="您提交的表单已保存，可在列表中查看最新状态。"
        style="width: 100%"
        :class-names="classNames"
      >
        <template #action>
          <a href="javascript:void(0)">撤销</a>
        </template>
      </Alert>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'

// 与 AlertClassNames / AlertStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '警告提示根容器（div.hmfw-alert）。承载背景、边框、圆角、内边距与整体 flex 布局，类型（success/info/warning/error）、变体（outlined/filled）与 banner 类名均作用于此。',
  },
  {
    name: 'icon',
    desc: '状态图标容器（span.hmfw-alert-icon）。控制状态图标的字号、颜色与右侧间距，仅在 showIcon 为真（banner 模式默认为真）时渲染。',
  },
  {
    name: 'section',
    desc: '标题与描述的内容区（div.hmfw-alert-section）。作为文本区域的 flex 列容器，始终渲染，包裹 title 与 description 两个子节点。',
  },
  {
    name: 'title',
    desc: '标题文本节点（div.hmfw-alert-title）。承载标题字号与字重，仅在传入 title 属性或 title 插槽时渲染。',
  },
  {
    name: 'description',
    desc: '辅助描述文本节点（div.hmfw-alert-description）。承载描述文字的字号、行高与上间距，仅在传入 description 属性或 description 插槽时渲染。',
  },
  {
    name: 'actions',
    desc: '自定义操作项容器（div.hmfw-alert-actions）。位于内容区右侧、关闭按钮左侧，仅在传入 action 属性或 action 插槽时渲染。',
  },
  {
    name: 'closeIcon',
    desc: '关闭按钮（button.hmfw-alert-close-icon）。承载关闭图标的字号、颜色与 hover 态，仅在 closable 为真（或传入 closable 配置对象）时渲染。',
  },
]
</script>
