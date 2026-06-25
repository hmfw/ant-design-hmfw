<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="openWithProgress"> 显示进度条 </Button>
    <Button @click="openWithoutProgress"> 不显示进度条 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

function openWithProgress() {
  notification.success({
    message: '带进度条的通知',
    description: '此通知会在 5 秒后自动关闭，底部显示倒计时进度条。',
    duration: 5,
    showProgress: true,
  })
}

function openWithoutProgress() {
  notification.info({
    message: '不带进度条的通知',
    description: '此通知 5 秒后关闭，但不显示进度条。',
    duration: 5,
    showProgress: false,
  })
}
</script>
