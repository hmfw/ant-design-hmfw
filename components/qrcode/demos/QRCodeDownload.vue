<template>
  <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start">
    <div ref="wrapRef">
      <QRCode :value="value" :size="200" />
    </div>
    <button type="button" class="download-btn" @click="download">下载二维码（PNG）</button>
    <p style="color: #999; font-size: 13px; margin: 0">canvas 渲染模式下可通过 toDataURL 导出 PNG 图片。</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { QRCode } from '@hmfw/ant-design'

const value = 'https://ant.design'
const wrapRef = ref<HTMLDivElement>()

const download = () => {
  const canvas = wrapRef.value?.querySelector('canvas')
  if (!canvas) return
  const url = canvas.toDataURL('image/png')
  const a = document.createElement('a')
  a.download = 'qrcode.png'
  a.href = url
  a.click()
}
</script>

<style scoped>
.download-btn {
  padding: 4px 15px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s;
}

.download-btn:hover {
  color: #1677ff;
  border-color: #1677ff;
}
</style>
