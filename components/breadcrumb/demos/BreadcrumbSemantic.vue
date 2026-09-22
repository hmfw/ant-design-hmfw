<template>
  <SemanticPreview component="Breadcrumb" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <Breadcrumb :items="items" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

// 构造带链接与下拉菜单的多级面包屑，使 item/link/separator/overlayLink 均渲染
const items = [
  { title: '首页', href: '#/home' },
  {
    title: '组件',
    href: '#/components',
    // 带下拉菜单 → link 内会包裹 overlayLink 节点
    menu: {
      items: [
        { title: '通用', key: 'general' },
        { title: '导航', key: 'nav' },
      ],
    },
  },
  { title: '面包屑' },
]

// 与 BreadcrumbClassNames / BreadcrumbStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根节点（nav.hmfw-breadcrumb）。承载面包屑整体的字号、颜色基线与布局，始终渲染。',
  },
  {
    name: 'list',
    desc: '列表容器（ol）。作为所有面包屑项与分隔符的 flex 行容器，始终渲染。',
  },
  {
    name: 'item',
    desc: '面包屑项（li.hmfw-breadcrumb-item）。每个非分隔符条目各渲染一个，承载单项的间距与对齐，末项带 aria-current="page"。',
  },
  {
    name: 'link',
    desc: '链接/文本节点（a.hmfw-breadcrumb-link 或 span.hmfw-breadcrumb-link）。承载可点击态的颜色、hover 与内边距，设置 href 时为 <a>，否则为 <span>，每个条目均渲染。',
  },
  {
    name: 'separator',
    desc: '分隔符节点（li.hmfw-breadcrumb-separator）。承载分隔符的颜色与左右间距，在相邻条目之间自动渲染（末项之后不渲染）。',
  },
  {
    name: 'overlayLink',
    desc: '带下拉菜单的链接内容（span.hmfw-breadcrumb-overlay-link）。包裹文字与展开图标并承载其对齐，仅在该条目配置了 menu 下拉菜单时渲染。',
  },
]
</script>
