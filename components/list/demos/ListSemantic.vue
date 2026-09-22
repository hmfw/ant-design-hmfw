<template>
  <SemanticPreview component="List" :semantics="semantics" :height="360">
    <template #default="{ classNames }">
      <div style="display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 360px">
        <!-- 有数据实例：header + footer + dataSource + pagination，覆盖 root/header/footer/items/pagination -->
        <List
          bordered
          header="列表头部"
          footer="列表底部"
          :data-source="data"
          :render-item="renderItem"
          :pagination="{ pageSize: 3, total: data.length }"
          :class-names="classNames"
        />
        <!-- 空数据实例：dataSource 为空，专门渲染 empty 节点（与 items 互斥，故单列一个实例） -->
        <List bordered :data-source="[]" :render-item="renderItem" :class-names="classNames" />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, ListItem } from '@hmfw/ant-design'

// List 通过 renderItem 属性渲染每一项（非插槽）
const renderItem = (item: string) => h(ListItem, null, () => item)

const data = ['失之毫厘，谬以千里', '不积跬步，无以至千里', '千里之行，始于足下']

// 与 ListClassNames / ListStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '根容器（div.hmfw-list）。承载边框、尺寸、分割线开关与整体布局，始终渲染。',
  },
  {
    name: 'header',
    desc: '头部区域（div.hmfw-list-header）。承载列表顶部内容与内边距，仅在设置 header 属性或 header 插槽时渲染。',
  },
  {
    name: 'footer',
    desc: '底部区域（div.hmfw-list-footer）。承载列表底部内容与内边距，仅在设置 footer 属性或 footer 插槽时渲染。',
  },
  {
    name: 'items',
    desc: '列表容器（ul.hmfw-list-items，grid 模式下为 div.hmfw-list-container）。承载各列表项的排列布局，有数据时渲染。',
  },
  {
    name: 'empty',
    desc: '空状态容器（div.hmfw-list-empty-text）。承载「暂无数据」占位内容，仅在 dataSource 为空且未开启加载态时渲染（见第二个空数据实例）。',
  },
  {
    name: 'pagination',
    desc: '分页器容器（div.hmfw-list-pagination）。承载分页组件的对齐与间距，仅在开启 pagination 时渲染。',
  },
]
</script>
