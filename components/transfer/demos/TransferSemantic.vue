<template>
  <SemanticPreview component="Transfer" :semantics="semantics" :height="360">
    <template #default="{ classNames }">
      <Transfer
        :data-source="dataSource"
        :target-keys="targetKeys"
        :titles="['源列表', '目标列表']"
        :selected-keys="['1']"
        :render="(item) => item.title"
        :footer="() => '底部信息'"
        :class-names="classNames"
      />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Transfer } from '@hmfw/ant-design'

// 左右两栏 + 标题 + 选中项 + footer，使各语义节点均渲染
const dataSource = Array.from({ length: 6 }, (_, i) => ({
  key: String(i + 1),
  title: `选项 ${i + 1}`,
  description: `描述 ${i + 1}`,
}))
const targetKeys = ['4', '5']

// 与 TransferSemanticClassNames / TransferSemanticStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-transfer）。承载穿梭框整体布局（左右两栏 + 中间操作列），始终渲染。',
  },
  {
    name: 'section',
    desc: '单侧列容器（div.hmfw-transfer-section）。承载源/目标一侧列表的边框与背景，左右各渲染一个。',
  },
  {
    name: 'header',
    desc: '列表头部（div.hmfw-transfer-list-header）。承载全选框与标题栏样式，每侧各渲染一个。',
  },
  {
    name: 'title',
    desc: '头部标题（span.hmfw-transfer-list-header-title）。承载标题文本样式，仅在 titles 提供时渲染。',
  },
  {
    name: 'body',
    desc: '列表主体（div.hmfw-transfer-list-body）。承载搜索框与内容区的外层容器，每侧各渲染一个。',
  },
  {
    name: 'list',
    desc: '列表内容区（ul.hmfw-transfer-list-content）。承载可滚动的选项列表容器样式，每侧各渲染一个。',
  },
  {
    name: 'item',
    desc: '列表项（li.hmfw-transfer-list-content-item）。承载单个选项的行样式与选中/禁用态，每个选项各渲染一个。',
  },
  {
    name: 'itemIcon',
    desc: '列表项勾选框（span.hmfw-transfer-list-checkbox）。承载选项前置勾选框样式，每个选项各渲染一个。',
  },
  {
    name: 'itemContent',
    desc: '列表项文本（span.hmfw-transfer-list-content-item-text）。承载选项文本样式，每个选项各渲染一个。',
  },
  {
    name: 'footer',
    desc: '列表底部（div.hmfw-transfer-list-footer）。承载自定义底部内容样式，仅在 footer 提供时渲染。',
  },
  {
    name: 'actions',
    desc: '中间操作列（div.hmfw-transfer-actions）。承载左右移动按钮的布局，始终渲染。',
  },
]
</script>
