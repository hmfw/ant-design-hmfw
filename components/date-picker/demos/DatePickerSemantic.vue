<template>
  <SemanticPreview component="DatePicker" :semantics="semantics" :height="920">
    <template #default="{ classNames }">
      <!-- 多个常开面板并排，覆盖 date/time/month/year/quarter 各模式的语义节点；
           DatePicker 无自身 getPopupContainer prop，改由 ConfigProvider 提供：
           从触发器节点向上找最近的 .demo-dp-host 作为弹层挂载点，避免 Teleport 到 body 后无法框选 -->
      <ConfigProvider :get-popup-container="getPopupContainer">
        <div class="demo-dp-grid">
          <div class="demo-dp-host">
            <!-- 设值 + allow-clear，使 clear 节点渲染（默认 opacity:0，hover 显现，但始终在 DOM 可被框选） -->
            <DatePicker
              :open="true"
              value="2024-01-01"
              allow-clear
              show-time
              show-now
              :presets="presets"
              :class-names="classNames"
            />
          </div>
          <div class="demo-dp-host">
            <DatePicker :open="true" picker="month" :class-names="classNames" />
          </div>
          <div class="demo-dp-host">
            <DatePicker :open="true" picker="year" :class-names="classNames" />
          </div>
          <div class="demo-dp-host">
            <DatePicker :open="true" picker="quarter" :class-names="classNames" />
          </div>
        </div>
      </ConfigProvider>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { DatePicker, ConfigProvider } from '@hmfw/ant-design'

// 弹层就地挂载：从触发器节点向上找最近的 .demo-dp-host，命中则挂到那里，否则回退 body
const getPopupContainer = (triggerNode?: HTMLElement) => {
  return (triggerNode?.closest('.demo-dp-host') as HTMLElement | null) ?? document.body
}

const presets = [
  { label: '今天', value: () => new Date().toISOString().slice(0, 10) },
  { label: '月初', value: () => new Date().toISOString().slice(0, 8) + '01' },
]

// 与 DatePickerClassNames / DatePickerStyles 的 key 一一对应，顺序对齐类型定义。
// 说明：DatePicker 弹层默认 Teleport 到 body，这里用 getPopupContainer 就地挂载 +
// :open 常开，并并排放置多个不同 picker 模式的实例，让各面板节点都能被框选。
const semantics = [
  {
    name: 'root',
    desc: '根节点（触发器容器 div.hmfw-date-picker）。承载输入框整体的边框、尺寸与状态样式，始终渲染。',
  },
  {
    name: 'input',
    desc: '内层输入框（input.hmfw-date-picker-input-inner）。承载文本输入样式，始终渲染。',
  },
  {
    name: 'clear',
    desc: '清除按钮（picker-input 清除节点）。承载清除图标样式，仅在 allowClear 且有值、hover 时可见。',
  },
  {
    name: 'suffix',
    desc: '后缀图标（picker-input 后缀节点，此处为日历图标）。始终渲染。',
  },
  {
    name: 'popup',
    desc: '弹层容器（div.hmfw-date-picker-popup）。承载弹层定位与外层样式，展开时渲染。',
  },
  {
    name: 'panel',
    desc: '面板容器（div.hmfw-date-picker-panel）。承载面板背景、圆角与阴影，展开时渲染。',
  },
  {
    name: 'panelHeader',
    desc: '面板头部（div.hmfw-date-picker-panel-header）。承载年月切换按钮与标题，展开时渲染。',
  },
  {
    name: 'panelBody',
    desc: '面板主体（div.hmfw-date-picker-panel-body）。包裹星期行与网格，展开时渲染。',
  },
  {
    name: 'weekdays',
    desc: '星期行容器（div.hmfw-date-picker-weekdays）。承载一周标签的横向排布，仅日期面板渲染。',
  },
  {
    name: 'weekday',
    desc: '单个星期标签（span.hmfw-date-picker-weekday）。承载星期文字样式，仅日期面板渲染。',
  },
  {
    name: 'days',
    desc: '日期网格容器（div.hmfw-date-picker-days）。承载日期单元格的网格布局，仅日期面板渲染。',
  },
  {
    name: 'day',
    desc: '单个日期单元格（button.hmfw-date-picker-day）。承载日期文字与选中/今天/禁用态样式，仅日期面板渲染。',
  },
  {
    name: 'months',
    desc: '月份网格容器（div.hmfw-date-picker-months）。承载月份单元格布局，仅月份面板渲染（picker="month" 或切到月视图）。',
  },
  {
    name: 'month',
    desc: '单个月份单元格（button.hmfw-date-picker-month）。承载月份文字与选中态样式，仅月份面板渲染。',
  },
  {
    name: 'years',
    desc: '年份网格容器（div.hmfw-date-picker-years）。承载年份单元格布局，仅年份面板渲染（picker="year" 或切到年视图）。',
  },
  {
    name: 'year',
    desc: '单个年份单元格（button.hmfw-date-picker-year）。承载年份文字与选中态样式，仅年份面板渲染。',
  },
  {
    name: 'quarters',
    desc: '季度网格容器（div.hmfw-date-picker-quarters）。承载季度单元格布局，仅 picker="quarter" 面板渲染。',
  },
  {
    name: 'quarter',
    desc: '单个季度单元格（button.hmfw-date-picker-quarter）。承载季度文字与选中态样式，仅季度面板渲染。',
  },
  {
    name: 'timePanel',
    desc: '时间选择面板（div.hmfw-date-picker-time-panel）。与日期面板并排，仅 showTime 时渲染。',
  },
  {
    name: 'timeContent',
    desc: '时间列容器（div.hmfw-date-picker-time-content）。横向排布时/分/秒列，仅 showTime 时渲染。',
  },
  {
    name: 'timeColumn',
    desc: '单个时间列（时/分/秒滚动列）。承载列样式，仅 showTime 时渲染。',
  },
  {
    name: 'timeCell',
    desc: '时间单元格（列内每个数字项）。承载时间选项样式，仅 showTime 时渲染。',
  },
  {
    name: 'panelFooter',
    desc: '面板底部（div.hmfw-date-picker-panel-footer）。承载底部区域布局，在有预设/今天/此刻/确定/额外内容时渲染。',
  },
  {
    name: 'panelFooterExtra',
    desc: '底部额外内容区（div.hmfw-date-picker-panel-footer-extra）。承载预设按钮与自定义额外内容，随 panelFooter 渲染。',
  },
  {
    name: 'panelFooterActions',
    desc: '底部操作按钮区（div.hmfw-date-picker-panel-footer-actions）。承载今天/此刻/确定按钮，随 panelFooter 渲染。',
  },
  {
    name: 'presets',
    desc: '预设按钮容器（div.hmfw-date-picker-presets）。承载快捷预设按钮布局，仅传入 presets 时渲染。',
  },
  {
    name: 'presetBtn',
    desc: '单个预设按钮（button.hmfw-date-picker-preset-btn）。随每个 presets 项渲染。',
  },
  {
    name: 'today',
    desc: '今天/此刻按钮（button.hmfw-date-picker-panel-footer-today）。仅 showToday 或 showNow 时渲染。',
  },
  {
    name: 'ok',
    desc: '确定按钮（button.hmfw-date-picker-panel-footer-ok）。仅 showTime 模式时渲染。',
  },
]
</script>

<style scoped>
.demo-dp-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: flex-start;
}
/* 预留高度，让常开面板向下展开后完整落在各自宿主内、不被舞台裁切 */
.demo-dp-host {
  position: relative;
  min-height: 430px;
}
</style>
