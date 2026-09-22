<template>
  <SemanticPreview component="Progress" :semantics="semantics" :height="120">
    <template #default="{ classNames }">
      <!--
        线形进度条（type="line"）最完整地覆盖全部语义节点：
        root → body → rail → track → indicator 层层嵌套，percent 非 0 让
        track 有可见宽度，showInfo（默认开启）让 indicator 渲染。
      -->
      <div style="width: 240px">
        <Progress :percent="60" :class-names="classNames" />
      </div>
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { Progress } from '@hmfw/ant-design'

// 与 ProgressClassNames / ProgressStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-progress）。承载进度条整体的类型/状态类（如 .hmfw-progress-line、.hmfw-progress-status-normal）与布局，是 body 的父节点，始终渲染。',
  },
  {
    name: 'body',
    desc: '进度主体容器（.hmfw-progress-body）。包裹轨道与外置文字，线形下承载条宽度，steps 模式下承载分段间距，始终渲染。',
  },
  {
    name: 'rail',
    desc: '底层轨道（.hmfw-progress-rail，圆形为 circle.hmfw-progress-circle-rail）。绘制未完成部分的背景槽，承载 railColor 与圆角，始终渲染。',
  },
  {
    name: 'track',
    desc: '已完成进度条（.hmfw-progress-track，圆形为 circle.hmfw-progress-circle-path，steps 为 .hmfw-progress-steps-item）。承载 strokeColor/渐变与已完成宽度，始终渲染。',
  },
  {
    name: 'indicator',
    desc: '百分比信息节点（span.hmfw-progress-indicator）。展示百分比文字或成功/异常图标，仅在 showInfo 为 true 时渲染。',
  },
]
</script>
