<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <div style="text-align: center">
      <QRCode :value="value" type="svg" :size="160" />
      <div style="margin-top: 8px; color: #666">marginSize=0（默认）</div>
    </div>
    <div style="text-align: center">
      <QRCode :value="value" type="svg" :size="160" :margin-size="4" />
      <div style="margin-top: 8px; color: #666">marginSize=4（4 个模块留白）</div>
    </div>
    <div style="text-align: center">
      <QRCode :value="value" :size="160" :margin-size="4" />
      <div style="margin-top: 8px; color: #666">canvas 渲染同样支持</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

const value = 'https://ant.design'
</script>
