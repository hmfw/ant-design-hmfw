<template>
  <div style="display: flex; gap: 16px">
    <div style="text-align: center">
      <QRCode :value="value" />
      <div style="margin-top: 8px; color: #666">bordered=true（默认）</div>
    </div>
    <div style="text-align: center">
      <QRCode :value="value" :bordered="false" />
      <div style="margin-top: 8px; color: #666">bordered=false（无边框无内边距）</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

const value = 'https://ant.design'
</script>
