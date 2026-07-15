<template>
  <Space direction="vertical" :size="16">
    <Space wrap :size="16">
      <div>
        <p style="margin: 0 0 8px; color: #999; font-size: 14px">src 失败 → fallback 成功</p>
        <Image
          src="https://invalid.example.com/not-exist.png"
          fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          width="160"
          :on-error="() => handleError('图 1：src 加载失败，已回退')"
        />
      </div>
      <div>
        <p style="margin: 0 0 8px; color: #999; font-size: 14px">src 与 fallback 均失败 → 错误占位</p>
        <Image
          src="https://invalid.example.com/not-exist.png"
          fallback="https://invalid.example.com/not-exist-fallback.png"
          width="160"
          :on-error="() => handleError('图 2：src 与 fallback 均失败')"
        />
      </div>
    </Space>
    <div v-if="logs.length" style="font-size: 13px; color: #666">
      <strong>onError 日志：</strong>
      <ul style="margin: 4px 0 0; padding-left: 20px">
        <li v-for="(log, i) in logs" :key="i">{{ log }}</li>
      </ul>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Image, Space } from '@hmfw/ant-design'

// 记录每次图片加载失败（含 fallback 失败）的 onError 回调
const logs = ref<string[]>([])

function handleError(message: string) {
  logs.value.push(message)
}
</script>
