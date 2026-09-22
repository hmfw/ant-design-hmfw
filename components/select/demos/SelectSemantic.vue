<template>
  <!--
    下拉面板默认由 Trigger 传送到 body，SemanticPreview 只在自身容器内测量，无法框选。
    这里用 ConfigProvider 的 getPopupContainer 把弹层就近传送回触发器所在容器，
    使 dropdown / option 等节点落在预览容器内、可被框选。弹层为 fixed 定位，仍浮在触发器下方。
  -->
  <SemanticPreview component="Select" :semantics="semantics" :height="320">
    <template #default="{ classNames }">
      <ConfigProvider :get-popup-container="getPopupContainer">
        <div style="display: flex; flex-direction: column; gap: 12px; width: 240px">
          <!-- 主用例：单选 + 已选值 + 可清除 + 常开下拉，覆盖 item/clear/arrow/dropdown/option/optionLabel/optionState -->
          <Select :default-value="'apple'" allow-clear :open="true" :options="options" :class-names="classNames" />
          <!-- 占位用例：无值且不展开，渲染 placeholder 节点 -->
          <Select placeholder="请选择（占位符）" :options="options" :class-names="classNames" />
        </div>
      </ConfigProvider>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Select, ConfigProvider } from '@hmfw/ant-design'

// 弹层就近传送回触发器所在父容器，保证下拉节点落在预览容器内
const getPopupContainer = (node: HTMLElement) => node.parentElement ?? document.body

const options = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橙子', value: 'orange' },
]

// 与 SelectClassNames / SelectStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-select）。承载整体尺寸、open/disabled/multiple/status 等修饰类，始终渲染。',
  },
  {
    name: 'selector',
    desc: '选择器容器（div.hmfw-select-selector，role="combobox"）。承载边框、内边距与聚焦态，是已选项/占位/搜索框的容器，始终渲染。',
  },
  {
    name: 'item',
    desc: '已选项（span.hmfw-select-selection-item）。单选时为已选文本、多选时为标签，仅在存在选中值时渲染（见第一个实例）。',
  },
  {
    name: 'placeholder',
    desc: '占位符（span.hmfw-select-placeholder）。承载未选择时的提示文字样式，仅在无选中值且无搜索文本时渲染（见第二个实例）。',
  },
  {
    name: 'arrow',
    desc: '后缀箭头容器（div.hmfw-select-arrow）。承载下拉箭头/加载图标的容器，始终渲染。',
  },
  {
    name: 'clear',
    desc: '清除按钮（button.hmfw-select-clear）。承载清空图标样式，仅在 allow-clear、存在选中值且非禁用时渲染（通常 hover 显现，本例第一个实例）。',
  },
  {
    name: 'dropdown',
    desc: '下拉面板（div.hmfw-select-dropdown）。承载弹层背景、圆角与阴影，仅在下拉展开时渲染（本例第一个实例常开）。',
  },
  {
    name: 'option',
    desc: '选项（div.hmfw-select-item-option）。承载单个选项的内边距与 selected/active/disabled 状态类，下拉内每个选项各渲染一个。',
  },
  {
    name: 'optionLabel',
    desc: '选项内容（div.hmfw-select-item-option-content）。承载选项文本样式，随每个选项渲染。',
  },
  {
    name: 'optionState',
    desc: '选项选中状态图标（span.hmfw-select-item-option-state）。承载选中对勾「✓」样式，仅在该选项被选中时渲染（本例「苹果」选项）。',
  },
]
</script>
