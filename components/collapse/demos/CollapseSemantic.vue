<template>
  <SemanticPreview component="Collapse" :semantics="semantics" :height="200">
    <template #default="{ classNames }">
      <!-- defaultActiveKey 让面板默认展开（content/body 仅展开时渲染）；
           extra 提供头部右侧内容（触发 extra 节点）；showArrow 默认开启（触发 icon） -->
      <Collapse :default-active-key="['1']" :class-names="classNames">
        <CollapsePanel key="1" header="面板标题" extra="额外">
          <p style="margin: 0">面板内容区域，展开后可见。</p>
        </CollapsePanel>
      </Collapse>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Collapse, CollapsePanel } from '@hmfw/ant-design'

// 与 CollapseClassNames / CollapseStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '最外层容器（div.hmfw-collapse）。承载整体边框、圆角、尺寸与 bordered/ghost 变体样式，始终渲染。',
  },
  {
    name: 'item',
    desc: '折叠面板项（div.hmfw-collapse-item）。单个面板的容器，承载项间分割线与 active/disabled 状态类名，每个面板各渲染一个。',
  },
  {
    name: 'header',
    desc: '面板头部（div.hmfw-collapse-header）。承载头部的内边距、光标与点击区域，包裹图标、标题与额外内容，始终渲染。',
  },
  {
    name: 'icon',
    desc: '展开/收起图标（span.hmfw-collapse-expand-icon）。承载箭头图标的旋转过渡，展开时叠加 .hmfw-collapse-expand-icon-active，仅 showArrow 为真时渲染。',
  },
  {
    name: 'headerText',
    desc: '头部文本（span.hmfw-collapse-header-text）。承载面板标题文字样式，始终渲染。',
  },
  {
    name: 'extra',
    desc: '头部右侧额外内容（span.hmfw-collapse-extra）。承载头部右侧附加信息的对齐样式，仅在设置 extra 时渲染。',
  },
  {
    name: 'content',
    desc: '内容区域（div.hmfw-collapse-content）。带展开/收起动画的外层容器，承载高度过渡，仅面板展开（或已渲染过）时存在。',
  },
  {
    name: 'body',
    desc: '内容盒子（div.hmfw-collapse-content-box）。实际内容容器，承载正文的内边距，位于 content 内部，展开时渲染。',
  },
]
</script>
