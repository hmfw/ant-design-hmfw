<template>
  <SemanticPreview component="Radio" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!--
        RadioClassNames 作用于单个 Radio。用 RadioGroup 组织若干 Radio，
        默认选中第二项使某个 radio 处于 checked 态（inner 圆点可见）；
        classNames 透传给每个 Radio，故 root/radio/input/inner/label
        会命中多个节点，各画一个高亮框，属预期行为。
      -->
      <RadioGroup :default-value="2">
        <Radio :value="1" :class-names="classNames">选项一</Radio>
        <Radio :value="2" :class-names="classNames">选项二</Radio>
        <Radio :value="3" disabled :class-names="classNames">禁用项</Radio>
      </RadioGroup>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Radio, RadioGroup } from '@hmfw/ant-design'

// 与 RadioClassNames / RadioStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（label.hmfw-radio-wrapper）。承载整行的行内布局、光标与文字对齐，选中/禁用时额外带 -checked / -disabled 类，始终渲染。',
  },
  {
    name: 'radio',
    desc: '单选框容器（span.hmfw-radio）。包裹原生 input 与视觉圆框，承载圆框的定位，选中/禁用时叠加 -checked / -disabled 类，始终渲染。',
  },
  {
    name: 'input',
    desc: '原生 input 元素（input.hmfw-radio-input）。真正承载选中态与可访问性的透明单选输入，视觉上被 inner 覆盖，始终渲染。',
  },
  {
    name: 'inner',
    desc: '视觉圆形选择框（span.hmfw-radio-inner）。绘制外圈与选中时的内部圆点，承载边框、背景与选中动画，始终渲染。',
  },
  {
    name: 'label',
    desc: '文本标签（span.hmfw-radio-label）。承载单选项文字的间距与颜色，仅在提供默认插槽（文字内容）时渲染。',
  },
]
</script>
