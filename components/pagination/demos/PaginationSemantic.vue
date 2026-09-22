<template>
  <SemanticPreview component="Pagination" :semantics="semantics" :height="160">
    <template #default="{ classNames }">
      <!--
        total=500 / pageSize=10 / current=6：页数超过省略号阈值，且当前页居中，
        使 jump-prev / jump-next 两个省略号按钮同时出现；开启 showTotal /
        showSizeChanger / showQuickJumper 让 total / options / sizeChanger /
        quickJumper 节点全部渲染。
      -->
      <Pagination
        :current="6"
        :total="500"
        :page-size="10"
        show-size-changer
        show-quick-jumper
        :show-total="(total, range) => `共 ${total} 条，当前 ${range[0]}-${range[1]}`"
        :class-names="classNames"
      />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Pagination } from '@hmfw/ant-design'

// 与 PaginationClassNames / PaginationStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根容器（ul.hmfw-pagination，simple 模式下额外带 .hmfw-pagination-simple）。承载分页整体的排列、对齐与尺寸类，是所有页码项的父节点。',
  },
  {
    name: 'total',
    desc: '总数显示区域（li.hmfw-pagination-total-text）。展示 showTotal 返回的文案，仅在设置 showTotal 时渲染。',
  },
  {
    name: 'prev',
    desc: '上一页按钮（li.hmfw-pagination-prev）。承载上一页箭头按钮样式，当前页为第一页时额外带 .hmfw-pagination-disabled，始终渲染。',
  },
  {
    name: 'next',
    desc: '下一页按钮（li.hmfw-pagination-next）。承载下一页箭头按钮样式，当前页为末页时额外带 .hmfw-pagination-disabled，始终渲染。',
  },
  {
    name: 'item',
    desc: '页码项（li.hmfw-pagination-item）。承载单个页码的边框、背景与文字样式，作用于每一个平铺页码，命中多个节点会各画一个高亮框。',
  },
  {
    name: 'itemActive',
    desc: '当前激活的页码项（li.hmfw-pagination-item-active）。在 item 基础上叠加高亮态样式，仅作用于等于 current 的那个页码项。',
  },
  {
    name: 'jumpPrev',
    desc: '向前跳转按钮（li.hmfw-pagination-jump-prev）。承载“向前 5 页”省略号按钮样式，仅在页数超过阈值且当前页距首页较远、需要折叠时渲染。',
  },
  {
    name: 'jumpNext',
    desc: '向后跳转按钮（li.hmfw-pagination-jump-next）。承载“向后 5 页”省略号按钮样式，仅在页数超过阈值且当前页距末页较远、需要折叠时渲染。',
  },
  {
    name: 'options',
    desc: '选项容器（li.hmfw-pagination-options）。包裹尺寸切换器的外层节点，仅在 showSizeChanger 时渲染。',
  },
  {
    name: 'sizeChanger',
    desc: '页码尺寸切换器（Select 组件容器，.hmfw-pagination-options-size-changer）。承载每页条数下拉选择器的样式，仅在 showSizeChanger 时渲染。',
  },
  {
    name: 'quickJumper',
    desc: '快速跳转输入框容器（li.hmfw-pagination-options-quick-jumper）。承载“跳至 __ 页”输入框区域样式，仅在 showQuickJumper 时渲染。',
  },
]
</script>
