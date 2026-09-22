<template>
  <SemanticPreview component="Listy" :semantics="semantics" :height="280">
    <template #default="{ classNames }">
      <!-- 用分组数据源让 groupHeader 节点真实渲染，root / item 始终渲染 -->
      <Listy :groups="groups" :children="renderItem" :height="240" :class-names="classNames" style="width: 100%" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Listy } from '@hmfw/ant-design'

// 分组数据源：触发 groupHeader 节点渲染
const groups = [
  { group: '水果', items: [{ label: '苹果' }, { label: '香蕉' }] },
  { group: '蔬菜', items: [{ label: '西红柿' }, { label: '黄瓜' }] },
]

// 列表项渲染函数
const renderItem = (item: { label: string }) => h('span', item.label)

// 与 ListyClassNames / ListyStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根容器（div.hmfw-listy）。承载列表整体高度、滚动溢出与布局，始终渲染。',
  },
  {
    name: 'item',
    desc: '列表项节点（div.hmfw-listy-item）。承载单条数据的内边距、分隔与内容布局，每条 data / 分组内 item 各渲染一个。',
  },
  {
    name: 'groupHeader',
    desc: '分组标题节点（div.hmfw-listy-group-header）。承载分组标题样式与粘性定位，仅在使用 groups 分组数据源时渲染。',
  },
]
</script>
