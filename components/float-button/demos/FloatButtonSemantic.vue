<template>
  <SemanticPreview component="FloatButton" :semantics="semantics" :height="140">
    <template #default="{ classNames }">
      <!-- square 形状 + icon + content，让 body / icon / content 四个节点全部渲染 -->
      <!-- FloatButton 默认 position: fixed，这里改为相对定位使其落在预览区内 -->
      <FloatButton
        shape="square"
        type="primary"
        :icon="CustomerServiceOutlined"
        content="客服"
        :class-names="classNames"
        :style="inlineStyle"
      />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { CustomerServiceOutlined } from '@hmfw/icons'
import { FloatButton } from '@hmfw/ant-design'

// 覆盖默认的 fixed 定位，使浮动按钮在预览区内就地展示而非贴到视口角落。
// 同时把 z-index 从组件内置的 99 拉回 auto：否则按钮会浮在 SemanticPreview 的
// 高亮框（z-index 10/11）之上，导致 icon / content 这类按钮内部节点的高亮被遮住。
const inlineStyle = { position: 'relative', insetInlineEnd: 'auto', insetBlockEnd: 'auto', zIndex: 'auto' } as const

// 与 FloatButtonClassNames / FloatButtonStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（button.hmfw-float-btn，设置 href 后为 a.hmfw-float-btn）。承载固定定位、尺寸、圆角、阴影与类型/形状色板，始终渲染。',
  },
  {
    name: 'body',
    desc: '主体容器（div.hmfw-float-btn-body）。承载内部的背景、hover 态与内容居中布局，始终渲染；徽标与气泡提示都包裹在其外层。',
  },
  {
    name: 'icon',
    desc: '图标容器（div.hmfw-float-btn-icon）。控制图标字号与颜色，仅在传入 icon 属性/插槽时渲染；未传 icon 且无 content 时会回退为默认文件图标。',
  },
  {
    name: 'content',
    desc: '文本内容容器（div.hmfw-float-btn-content）。承载文字排版，仅在设置 content 属性或 content 插槽时渲染，多用于 square 形状。',
  },
]
</script>
