<template>
  <SemanticPreview component="QRCode" :semantics="semantics" :height="220">
    <template #default="{ classNames }">
      <!--
        status="scanned"：非 active 状态才会渲染状态遮罩层 cover，
        从而让 root 与 cover 两个语义节点都能被框选。
      -->
      <QRCode value="https://github.com/hmfw/ant-design-hmfw" status="scanned" :class-names="classNames" />
    </template>
  </SemanticPreview>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

// 与 QRCodeClassNames / QRCodeStyles 的 key 一一对应，顺序照抄类型定义
const semantics = [
  {
    name: 'root',
    desc: '根节点（div.hmfw-qrcode）。承载二维码整体的边框、尺寸与背景色，无边框时额外带 .hmfw-qrcode-borderless，是 canvas/svg 与遮罩层的父节点，始终渲染。',
  },
  {
    name: 'cover',
    desc: '状态遮罩层（div.hmfw-qrcode-cover）。覆盖在二维码之上展示加载/过期/已扫描等状态内容，仅在 status 不为 active 时渲染。',
  },
]
</script>
