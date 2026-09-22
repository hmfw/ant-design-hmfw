<template>
  <SemanticPreview component="Tabs" :semantics="semantics" :height="200">
    <template #default="{ classNames }">
      <div style="width: 100%">
        <Tabs :items="items" default-active-key="1" :class-names="classNames" />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs } from '@hmfw/ant-design'
import { AppleOutlined, AndroidOutlined } from '@hmfw/icons'

// 多个 tab（含图标）+ line 类型（默认），使 nav / tab / tabActive / tabIcon / inkBar / content / tabpane 全部渲染
const items = [
  { key: '1', label: '标签一', icon: h(AppleOutlined), children: '标签一的内容' },
  { key: '2', label: '标签二', icon: h(AndroidOutlined), children: '标签二的内容' },
  { key: '3', label: '标签三', children: '标签三的内容' },
]

// 与 TabsClassNames / TabsStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-tabs）。承载标签页整体布局与方向，始终渲染。',
  },
  {
    name: 'nav',
    desc: '标签栏容器（div.hmfw-tabs-nav）。承载标签栏整体样式与滚动，始终渲染。',
  },
  {
    name: 'tab',
    desc: '单个标签（div.hmfw-tabs-tab）。承载标签的间距、字体与 hover 态，每个标签各渲染一个。',
  },
  {
    name: 'tabActive',
    desc: '激活标签（div.hmfw-tabs-tab-active，与 tab 叠加）。承载激活态高亮样式，仅作用于当前激活标签。',
  },
  {
    name: 'tabIcon',
    desc: '标签图标（span.hmfw-tabs-tab-icon）。承载标签前置图标样式，仅在 item.icon 存在时渲染。',
  },
  {
    name: 'inkBar',
    desc: '墨条（div.hmfw-tabs-ink-bar）。承载激活标签下方的滑动指示条，仅 line 类型渲染。',
  },
  {
    name: 'content',
    desc: '内容容器（div.hmfw-tabs-content）。承载所有内容面板的外层容器样式，始终渲染。',
  },
  {
    name: 'tabpane',
    desc: '内容面板（div.hmfw-tabs-tabpane）。承载单个标签对应的内容区样式。',
  },
]
</script>
