<template>
  <div>
    <div style="display: flex; gap: 16px; align-items: flex-end; margin-bottom: 16px">
      <div style="text-align: center">
        <QRCode :value="value" :size="80" />
        <div style="margin-top: 8px; color: #666">size=80</div>
      </div>
      <div style="text-align: center">
        <QRCode :value="value" :size="160" />
        <div style="margin-top: 8px; color: #666">size=160（默认）</div>
      </div>
      <div style="text-align: center">
        <QRCode :value="value" :size="240" :icon-size="{ width: 60, height: 48 }" :icon="iconUrl" error-level="H" />
        <div style="margin-top: 8px; color: #666">size=240 + iconSize 对象形式</div>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 12px">
      <span style="color: #666">响应式调整尺寸：</span>
      <input v-model.number="size" type="range" min="80" max="320" step="16" />
      <span style="color: #999">{{ size }}px</span>
    </div>
    <div style="margin-top: 12px; text-align: center">
      <QRCode :value="value" :size="size" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QRCode } from '@hmfw/ant-design'

const value = 'https://ant.design'
const iconUrl = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
const size = ref(160)
</script>
