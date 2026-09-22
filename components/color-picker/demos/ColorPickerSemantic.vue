<template>
  <SemanticPreview component="ColorPicker" :semantics="semantics" :height="480">
    <template #default="{ classNames }">
      <!-- default-open 常开面板 + getPopupContainer 就地挂载，使面板内各节点直接可被预览区框选 -->
      <div ref="hostRef" class="demo-color-picker-host">
        <ColorPicker
          default-value="#1677ff"
          show-text
          allow-clear
          :default-open="true"
          :get-popup-container="getPopupContainer"
          :presets="presets"
          :class-names="classNames"
        />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker } from '@hmfw/ant-design'

const hostRef = ref<HTMLElement | null>(null)
// 将弹层就地挂载到宿主容器，避免默认 Teleport 到 body 后无法被预览区框选
const getPopupContainer = () => hostRef.value ?? document.body

const presets = [{ label: '推荐', colors: ['#1677ff', '#52c41a', '#faad14', '#f5222d', '#722ed1'] }]

// 与 ColorPickerClassNames / ColorPickerStyles 的 key 一一对应，顺序对齐类型定义。
// 说明：面板经 default-open 常开、getPopupContainer 就地挂载，故 trigger 之外的面板节点均已渲染可框选。
const semantics = [
  {
    name: 'root',
    desc: '根容器（div.hmfw-color-picker）。承载尺寸与禁用态类名，始终渲染。',
  },
  {
    name: 'trigger',
    desc: '触发器按钮（div.hmfw-color-picker-trigger）。承载边框、内边距与展开态样式，始终渲染。',
  },
  {
    name: 'colorBlock',
    desc: '触发器内的色块预览（div.hmfw-color-picker-color-block）。以背景色展示当前颜色，始终渲染。',
  },
  {
    name: 'text',
    desc: '触发器内的文本（span.hmfw-color-picker-text）。展示当前色值文字，仅在 showText 时渲染。',
  },
  {
    name: 'panel',
    desc: '弹出面板容器（div.hmfw-color-picker-panel）。承载面板背景、圆角与内边距，需展开面板后渲染。',
  },
  {
    name: 'saturation',
    desc: '饱和度/亮度选择区（div.hmfw-color-picker-sb）。可拖拽选取 S/B，需展开面板后渲染。',
  },
  {
    name: 'saturationCursor',
    desc: '饱和度/亮度选择区的光标（div.hmfw-color-picker-sb-cursor）。标记当前 S/B 位置，需展开面板后渲染。',
  },
  {
    name: 'hueSlider',
    desc: '色相滑块容器（div.hmfw-color-picker-hue）。可拖拽选取色相，需展开面板后渲染。',
  },
  {
    name: 'hueCursor',
    desc: '色相滑块光标（div.hmfw-color-picker-hue-cursor）。标记当前色相位置，需展开面板后渲染。',
  },
  {
    name: 'inputContainer',
    desc: '输入容器（div.hmfw-color-picker-input-container）。横向排布预览块、HEX 输入框与格式标签，需展开面板后渲染。',
  },
  {
    name: 'preview',
    desc: '输入容器内的预览色块（div.hmfw-color-picker-preview）。以背景色展示当前颜色，需展开面板后渲染。',
  },
  {
    name: 'hexInput',
    desc: 'HEX 输入框（input.hmfw-color-picker-hex-input）。承载文本输入样式，需展开面板后渲染。',
  },
  {
    name: 'formatLabel',
    desc: '格式标签（span.hmfw-color-picker-format-label，显示 HEX）。需展开面板后渲染。',
  },
  {
    name: 'presets',
    desc: '预设颜色区域（div.hmfw-color-picker-presets）。承载预设分组的整体布局，仅在传入 presets 且面板展开时渲染。',
  },
  {
    name: 'presetGroup',
    desc: '预设颜色组（div.hmfw-color-picker-preset-group）。单个预设分组容器，随每个 presets 项渲染。',
  },
  {
    name: 'presetLabel',
    desc: '预设颜色组标签（div.hmfw-color-picker-preset-label）。展示分组名，随每个 presets 项渲染。',
  },
  {
    name: 'presetColors',
    desc: '预设颜色列表（div.hmfw-color-picker-preset-colors）。承载色块的网格排布，随每个 presets 项渲染。',
  },
  {
    name: 'presetColor',
    desc: '单个预设颜色块（div.hmfw-color-picker-preset-color）。以背景色展示预设色，随每个预设色值渲染。',
  },
  {
    name: 'clearBtn',
    desc: '清除按钮（div.hmfw-color-picker-clear-btn）。承载清除操作样式，仅在 allowClear 且面板展开时渲染。',
  },
]
</script>

<style scoped>
/* 预留高度并把触发器顶到上方，常开面板向下展开后完整落在预览区内 */
.demo-color-picker-host {
  position: relative;
  width: 232px;
  height: 420px;
}
</style>
