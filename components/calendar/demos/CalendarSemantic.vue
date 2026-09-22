<template>
  <SemanticPreview component="Calendar" :semantics="semantics" :height="420">
    <template #default="{ classNames }">
      <!-- 月视图：暴露 weekdays/weekdayCell/body/cell/date 等节点 -->
      <!-- 年视图：暴露 yearPanel/monthCell/month 等节点 -->
      <!-- 两种模式并列，确保每个语义节点都真实渲染 -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap">
        <Calendar mode="month" style="flex: 1; min-width: 280px" :class-names="classNames" />
        <Calendar mode="year" style="flex: 1; min-width: 280px" :class-names="classNames" />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Calendar } from '@hmfw/ant-design'

// 与 CalendarClassNames / CalendarStyles 的 key 一一对应
const semantics = [
  {
    name: 'root',
    desc: '日历根容器（div.hmfw-calendar）。承载整体边框、背景与布局，全屏/迷你模式类名（.hmfw-calendar-fullscreen / -mini）作用于此，始终渲染。',
  },
  {
    name: 'header',
    desc: '头部区域（div.hmfw-calendar-header）。承载年/月下拉选择器与视图切换按钮的布局，使用自定义 headerRender 时由自定义节点替代，默认始终渲染。',
  },
  {
    name: 'content',
    desc: '内容区域（div.hmfw-calendar-content）。头部之外的主体包裹层，承载面板的定位与内边距，始终渲染。',
  },
  {
    name: 'panel',
    desc: '面板容器（div.hmfw-calendar-panel）。月视图与年视图的公共外层，承载面板背景与栅格布局，两种模式下均渲染。',
  },
  {
    name: 'weekdays',
    desc: '星期头容器（div.hmfw-calendar-weekdays）。承载「日一二三四五六」表头行的布局，仅月视图（mode="month"）渲染。',
  },
  {
    name: 'weekdayCell',
    desc: '星期单元格（div.hmfw-calendar-weekday-cell）。星期头中每个星期文字的格子，承载字号与居中对齐，仅月视图渲染（7 个节点）。',
  },
  {
    name: 'body',
    desc: '日期格子容器（div.hmfw-calendar-body）。承载日期单元格的网格布局，仅月视图渲染。',
  },
  {
    name: 'cell',
    desc: '日期单元格（div.hmfw-calendar-cell）。单个日期的格子，承载今天/选中/禁用/范围等状态类名，仅月视图渲染（若干节点）。',
  },
  {
    name: 'cellInner',
    desc: '单元格内部（div.hmfw-calendar-cell-inner）。日期/月份数字的直接包裹层，承载 hover、选中背景等交互样式，月视图与年视图的单元格内均渲染。',
  },
  {
    name: 'date',
    desc: '日期内容节点（div.hmfw-calendar-date-value）。显示日期数字的元素，承载数字文本样式，仅月视图渲染。',
  },
  {
    name: 'month',
    desc: '月份内容节点（div.hmfw-calendar-month）。年视图中显示月份名称的元素，承载月份文本样式，仅年视图（mode="year"）渲染。',
  },
  {
    name: 'yearPanel',
    desc: '年视图面板（div.hmfw-calendar-year-panel）。承载 12 个月份格子的网格布局，仅年视图渲染。',
  },
  {
    name: 'monthCell',
    desc: '月份单元格（div.hmfw-calendar-month-cell）。年视图中单个月份的格子，承载选中/禁用状态类名，仅年视图渲染（12 个节点）。',
  },
]
</script>
