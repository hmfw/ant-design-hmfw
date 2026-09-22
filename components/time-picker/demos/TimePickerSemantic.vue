<template>
  <!--
    TimePicker 面板默认 Teleport 到 body，SemanticPreview 无法框选。
    TimePicker 自身未暴露 getPopupContainer，这里用 ConfigProvider 的 getPopupContainer
    把弹层就近挂回触发器所在容器 + :open 常开，让 popup/panel/column/cell 等节点落在预览区内。
  -->
  <SemanticPreview component="TimePicker" :semantics="semantics" :height="360">
    <template #default="{ classNames }">
      <ConfigProvider :get-popup-container="getPopupContainer">
        <TimePicker :open="true" default-value="12:30:45" :class-names="classNames" />
      </ConfigProvider>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { TimePicker, ConfigProvider } from '@hmfw/ant-design'

// 弹层就近挂到触发器父容器，保证面板节点落在预览容器内
const getPopupContainer = (node: HTMLElement) => node.parentElement ?? document.body

// 与 TimePickerClassNames / TimePickerStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（触发器容器 div.hmfw-time-picker）。承载输入框整体的边框、尺寸与状态样式，始终渲染。',
  },
  {
    name: 'input',
    desc: '内层输入框（input.hmfw-time-picker-input-inner）。承载文本输入样式，始终渲染。',
  },
  {
    name: 'clear',
    desc: '清除按钮（picker-input 清除节点）。承载清除图标样式，仅在 allowClear 且有值、hover 时可见。',
  },
  {
    name: 'suffix',
    desc: '后缀图标（picker-input 后缀节点，此处为时钟图标）。承载后缀图标样式，始终渲染。',
  },
  {
    name: 'popup',
    desc: '弹层容器（div.hmfw-time-picker-popup）。承载弹层定位与外层样式，展开时渲染。',
  },
  {
    name: 'panel',
    desc: '面板（div.hmfw-time-picker-panel）。承载面板背景、圆角与阴影，展开时渲染。',
  },
  {
    name: 'panelInner',
    desc: '面板内部容器（div.hmfw-time-picker-panel-inner）。横向排布时/分/秒列，展开时渲染。',
  },
  {
    name: 'column',
    desc: '时间列（ul.hmfw-time-picker-panel-column）。承载单列（时/分/秒）的滚动样式，每列各渲染一个。',
  },
  {
    name: 'cell',
    desc: '时间单元格（li.hmfw-time-picker-panel-cell）。承载单个时间选项的样式与选中态，列内每个数字项各渲染一个。',
  },
  {
    name: 'footer',
    desc: '底部区域（div.hmfw-time-picker-panel-footer）。承载底部整体布局，展开时渲染。',
  },
  {
    name: 'footerExtra',
    desc: '额外底部内容（div.hmfw-time-picker-panel-footer-extra）。承载 renderExtraFooter 自定义内容，展开时始终渲染（无内容时为空）。',
  },
  {
    name: 'footerActions',
    desc: '底部按钮区域（div.hmfw-time-picker-panel-footer-actions）。承载「此刻」「确定」按钮的布局，展开时渲染。',
  },
  {
    name: 'now',
    desc: '「此刻」按钮（button.hmfw-time-picker-panel-footer-btn）。仅在 showNow 时渲染（默认开启）。',
  },
  {
    name: 'ok',
    desc: '「确定」按钮（button.hmfw-time-picker-panel-footer-ok）。仅在 needConfirm 时渲染（默认开启）。',
  },
]
</script>
