<template>
  <!--
    弹层默认由 Trigger 传送到 body，SemanticPreview 只在自身容器内测量，无法框选。
    用 ConfigProvider 的 getPopupContainer 把弹层就近传送回触发器所在容器，
    使 popup / panel / day 等节点落在预览容器内、可被框选。弹层为 fixed 定位，仍浮在触发器下方。
    onMounted 置 ready 守卫：待本地容器 ref 挂载后再常开弹层，避免首帧传送到 body。
  -->
  <SemanticPreview component="RangePicker" :semantics="semantics" :height="520">
    <template #default="{ classNames }">
      <ConfigProvider :get-popup-container="getPopupContainer">
        <!-- 宿主定位 + 预留高度，把触发器顶到上方，常开面板向下展开后完整落在预览区内 -->
        <div ref="hostRef" class="demo-range-host">
          <!-- 已选范围（含今天） + presets + disabledDate，覆盖 day 系列所有状态节点 -->
          <RangePicker
            :default-value="rangeValue"
            :presets="presets"
            :disabled-date="disabledDate"
            :open="ready"
            :class-names="classNames"
          />
        </div>
      </ConfigProvider>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RangePicker, ConfigProvider } from '@hmfw/ant-design'
import type { RangeValue, RangePreset } from '@hmfw/ant-design'

// 弹层就近挂载到预览区宿主，保证面板节点落在预览容器内
const hostRef = ref<HTMLElement | null>(null)
const getPopupContainer = () => hostRef.value ?? document.body

// 待容器挂载后再常开，避免首帧弹层逸出到 body
const ready = ref(false)
onMounted(() => {
  ready.value = true
})

const pad = (n: number) => String(n).padStart(2, '0')
const fmt = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

// 选取本月内一段包含「今天」的范围，使 dayToday / daySelected / dayRangeStart / dayRangeEnd / dayInRange 均渲染
const now = new Date()
const start = new Date(now.getFullYear(), now.getMonth(), Math.max(1, now.getDate() - 3))
const end = new Date(now.getFullYear(), now.getMonth(), Math.min(28, now.getDate() + 3))
const rangeValue: RangeValue = [fmt(start), fmt(end)]

// 预设：渲染 presets / preset 节点
const presets: RangePreset[] = [
  { label: '最近一周', value: [fmt(new Date(now.getTime() - 6 * 864e5)), fmt(now)] },
  { label: '本月', value: [fmt(new Date(now.getFullYear(), now.getMonth(), 1)), fmt(now)] },
]

// 禁用月初 1 号，渲染 dayDisabled 节点
const disabledDate = (d: Date) => d.getDate() === 1

// 与 RangePickerClassNames / RangePickerStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-date-picker）。承载选择器整体的边框、尺寸与状态类，始终渲染。',
  },
  {
    name: 'input',
    desc: '内层输入框（input.hmfw-date-picker-input-inner）。同时作用于开始/结束两个输入框，承载文本样式，各渲染一个。',
  },
  {
    name: 'startInput',
    desc: '开始日期输入框（附加在第一个 input 上）。承载起始输入框的专属样式，始终渲染。',
  },
  {
    name: 'endInput',
    desc: '结束日期输入框（附加在第二个 input 上）。承载结束输入框的专属样式，始终渲染。',
  },
  {
    name: 'separator',
    desc: '分隔符（span.hmfw-date-picker-range-separator）。承载两个输入框之间的箭头样式，始终渲染。',
  },
  {
    name: 'clear',
    desc: '清除按钮（span.hmfw-date-picker-clear）。承载清空图标样式，仅在 allow-clear、存在值且非禁用时渲染（通常 hover 显现）。',
  },
  {
    name: 'suffix',
    desc: '后缀图标（span.hmfw-date-picker-suffix）。承载日历图标样式，始终渲染。',
  },
  {
    name: 'popup',
    desc: '弹出层容器（div.hmfw-date-picker-popup）。承载弹层背景、圆角与阴影，仅在展开时渲染（本例常开）。',
  },
  {
    name: 'rangeWrapper',
    desc: '范围选择器包裹容器（div.hmfw-date-picker-range-wrapper）。承载预设区与双面板的横向布局，仅在弹层展开时渲染。',
  },
  {
    name: 'presets',
    desc: '预设范围容器（div.hmfw-date-picker-presets）。承载快捷预设列表，仅在配置 presets 且弹层展开时渲染。',
  },
  {
    name: 'preset',
    desc: '单个预设项（li.hmfw-date-picker-preset）。承载单条快捷范围样式，每个 preset 各渲染一个。',
  },
  {
    name: 'rangePanels',
    desc: '面板容器（div.hmfw-date-picker-range-panels）。承载左右两个日历面板的排列，仅在弹层展开时渲染。',
  },
  {
    name: 'panel',
    desc: '单个日历面板（div.hmfw-date-picker-panel）。范围选择左右各一个，承载单月面板布局，弹层展开时渲染。',
  },
  {
    name: 'panelHeader',
    desc: '面板头部（div.hmfw-date-picker-panel-header）。承载翻页按钮与标题行，每个面板各渲染一个。',
  },
  {
    name: 'panelHeaderBtn',
    desc: '头部按钮（button.hmfw-date-picker-panel-header-btn）。承载上/下月翻页箭头，每个面板头部各渲染（右侧含隐藏占位）。',
  },
  {
    name: 'panelHeaderTitle',
    desc: '头部标题（span.hmfw-date-picker-panel-header-title）。承载「年月」标题文字，每个面板各渲染一个。',
  },
  {
    name: 'panelBody',
    desc: '面板主体（div.hmfw-date-picker-panel-body）。承载星期行与日期网格的容器，每个面板各渲染一个。',
  },
  {
    name: 'weekdays',
    desc: '星期标题行（div.hmfw-date-picker-weekdays）。承载「日一二…」标题行布局，每个面板各渲染一个。',
  },
  {
    name: 'weekday',
    desc: '单个星期标题（span.hmfw-date-picker-weekday）。承载单个星期文字，每行渲染 7 个。',
  },
  {
    name: 'days',
    desc: '日期网格容器（div.hmfw-date-picker-days）。承载当月日期单元格的网格布局，每个面板各渲染一个。',
  },
  {
    name: 'day',
    desc: '单个日期单元格（button.hmfw-date-picker-day）。承载单日样式与各状态类，网格内每个日期各渲染一个。',
  },
  {
    name: 'dayToday',
    desc: '今天的日期单元格（附加在今日 button 上）。承载今日高亮样式，仅当面板含今天时渲染（本例左面板为当月）。',
  },
  {
    name: 'daySelected',
    desc: '选中的日期单元格（附加在范围起止 button 上）。承载选中态样式，仅范围起点/终点日渲染该类。',
  },
  {
    name: 'dayInRange',
    desc: '范围内的日期单元格（附加在区间中间 button 上）。承载区间连接背景，仅起止之间的日期渲染该类。',
  },
  {
    name: 'dayRangeStart',
    desc: '范围起始日期（附加在起点 button 上）。承载区间起点圆角样式，仅起点日渲染该类。',
  },
  {
    name: 'dayRangeEnd',
    desc: '范围结束日期（附加在终点 button 上）。承载区间终点圆角样式，仅终点日渲染该类。',
  },
  {
    name: 'dayDisabled',
    desc: '禁用的日期单元格（附加在被 disabledDate 命中的 button 上）。承载禁用置灰样式，仅禁用日渲染该类（本例每月 1 号）。',
  },
]
</script>

<style scoped>
/* 定位上下文 + 预留高度；宿主铺满、触发器居左上，
   双日历面板向右下展开，尽量把预设区与左面板完整显示（面板整体偏宽，右侧可能溢出预览列） */
.demo-range-host {
  position: relative;
  width: 100%;
  height: 440px;
}
</style>
