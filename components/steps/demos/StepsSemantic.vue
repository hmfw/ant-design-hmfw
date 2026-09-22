<template>
  <SemanticPreview component="Steps" :semantics="semantics" :height="180">
    <template #default="{ classNames }">
      <!-- 多个步骤 + title/subTitle/content/icon，确保所有语义节点都渲染 -->
      <Steps :current="1" :items="items" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { UserOutlined } from '@hmfw/icons'
import { Steps } from '@hmfw/ant-design'

// 每一步都带上 title / subTitle / content，并给首步一个自定义 icon
const items = [
  { title: '已完成', subTitle: '00:00', content: '这是第一步的描述文案', icon: h(UserOutlined) },
  { title: '进行中', subTitle: '00:01', content: '这是第二步的描述文案' },
  { title: '待处理', subTitle: '00:02', content: '这是第三步的描述文案' },
]

// 与 StepsClassNames / StepsStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '步骤条根节点（div.hmfw-steps）。承载整体方向、尺寸、变体与标签位置等布局类。始终渲染。',
  },
  {
    name: 'item',
    desc: '单个步骤项（div.hmfw-steps-item）。按状态叠加 .hmfw-steps-item-wait/process/finish/error，当前步骤带 -active。每个 item 渲染一个。',
  },
  {
    name: 'header',
    desc: '步骤项头部（div.hmfw-steps-item-header）。横向承载图标、标题与连接线。每个步骤各渲染一个。',
  },
  {
    name: 'tail',
    desc: '步骤连接线（div.hmfw-steps-item-tail）。绘制相邻步骤之间的连接线，位于 header 内。每个步骤各渲染一个（末项通常由样式隐藏）。',
  },
  {
    name: 'icon',
    desc: '步骤图标容器（div.hmfw-steps-item-icon）。承载序号/勾选/错误图标或自定义 icon 与 dot。header 中渲染一个，content 中另有一个占位副本（.hmfw-steps-item-icon-placeholder），故一个步骤会命中两处。',
  },
  {
    name: 'content',
    desc: '步骤内容容器（div.hmfw-steps-item-content）。承载描述文案区域并与图标对齐。每个步骤各渲染一个。',
  },
  {
    name: 'title',
    desc: '步骤标题（div.hmfw-steps-item-title）。承载标题文字样式，内部可含副标题。每个步骤各渲染一个。',
  },
  {
    name: 'subtitle',
    desc: '步骤副标题（span.hmfw-steps-item-subtitle）。承载标题旁的次要文字，仅在该 item 设置 subTitle 时渲染。',
  },
  {
    name: 'description',
    desc: '步骤描述（div.hmfw-steps-item-description）。承载 content 描述文案的样式，仅在该 item 设置 content 时渲染。',
  },
]
</script>
