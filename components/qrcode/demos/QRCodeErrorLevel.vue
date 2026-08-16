<template>
  <div>
    <div style="display: flex; gap: 16px; margin-bottom: 16px">
      <div v-for="level in levels" :key="level" style="text-align: center">
        <QRCode :value="value" :error-level="level" :class-names="{ root: `errorlevel-${level.toLowerCase()}` }" />
        <div style="margin-top: 8px; color: #666">纠错等级 {{ level }}</div>
      </div>
    </div>
    <p style="color: #999; font-size: 13px">
      纠错等级越高，二维码被遮挡后越容易识别，但容量越小。带图标时建议使用 H 级。
    </p>
  </div>
</template>

<script setup lang="ts">
import { QRCode } from '@hmfw/ant-design'
import type { QRCodeErrorLevel } from '@hmfw/ant-design'

const levels: QRCodeErrorLevel[] = ['L', 'M', 'Q', 'H']
const value = 'https://ant.design'
</script>
