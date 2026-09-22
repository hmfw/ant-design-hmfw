<template>
  <SemanticPreview component="Slider" :semantics="semantics" :height="140">
    <template #default="{ classNames }">
      <!-- range + marks + 常开 tooltip，使 track/双 handle/dot/mark/markText/tooltip 全部渲染 -->
      <div style="width: 90%; padding: 8px 0">
        <Slider range :default-value="[20, 60]" :marks="marks" :tooltip="{ open: true }" :class-names="classNames" />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Slider } from '@hmfw/ant-design'

// marks 触发 dot / mark / markText 节点渲染
const marks = {
  0: '0',
  25: '25',
  50: '50',
  75: '75',
  100: '100',
}

// 与 SliderClassNames / SliderStyles 的 key 一一对应，顺序对齐类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-slider）。承载整体布局与 disabled/vertical/with-marks 等修饰类，始终渲染。',
  },
  {
    name: 'rail',
    desc: '轨道容器（div.hmfw-slider-rail）。承载底层未选中轨道的背景，是填充条、刻度点与手柄的父级，始终渲染。',
  },
  {
    name: 'track',
    desc: '已选区间填充（div.hmfw-slider-track）。承载已选范围的高亮条，其位置/长度由值计算，included 为 true 时渲染。',
  },
  {
    name: 'handle',
    desc: '滑块手柄（div.hmfw-slider-handle，role="slider"）。承载可拖拽圆钮样式，单值时 1 个、range 时 2 个（本例两个）。',
  },
  {
    name: 'dot',
    desc: '刻度点（span.hmfw-slider-dot）。承载 marks 或 dots 对应的圆点，含 dot-active 激活态，仅在配置 marks/dots 时渲染（本例由 marks 生成）。',
  },
  {
    name: 'mark',
    desc: '刻度标签容器（div.hmfw-slider-mark）。承载刻度文字的定位容器，仅在配置 marks 时渲染。',
  },
  {
    name: 'markText',
    desc: '单个刻度文本（span.hmfw-slider-mark-text）。承载每个刻度的文字与激活态，仅在配置 marks 时逐个渲染。',
  },
  {
    name: 'tooltip',
    desc: '手柄提示框（div.hmfw-slider-tooltip）。承载数值提示气泡样式，默认拖拽/hover 时显示，本例通过 tooltip.open 常开，随每个手柄渲染。',
  },
]
</script>
