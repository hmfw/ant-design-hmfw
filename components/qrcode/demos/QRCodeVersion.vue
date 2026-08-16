<template>
  <div style="display: flex; gap: 24px; align-items: flex-end">
    <div v-for="item in items" :key="item.label" style="text-align: center">
      <QRCode :value="item.value" :class-names="{ root: item.anchor }" />
      <div style="margin-top: 8px; color: #666">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'

// 文本越长，自动提升 QR 版本（矩阵更密集，尺寸随版本增大：21 → 25 → … → 57）
const items = [
  { label: '版本 2（短链接）', value: 'https://ant.design', anchor: 'version-v2' },
  { label: '版本 6（中等文本）', value: `https://example.com/path?${'p'.repeat(90)}`, anchor: 'version-v6' },
  { label: '版本 8（长文本）', value: `https://example.com/long?data=${'x'.repeat(150)}`, anchor: 'version-v8' },
]
</script>
