<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button @click="openWithDuration">默认 4.5 秒</Button>
    <Button @click="openLongDuration">10 秒关闭</Button>
    <Button @click="openNeverClose">永不关闭</Button>
    <Button type="default" @click="notification.destroy()">关闭全部</Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from 'ant-design-hmfw'

function openWithDuration() {
  notification.success({
    message: '默认关闭时间',
    description: '此通知将在 4.5 秒后自动关闭。',
  })
}

function openLongDuration() {
  notification.info({
    message: '较长关闭时间',
    description: '此通知将在 10 秒后自动关闭。',
    duration: 10,
  })
}

function openNeverClose() {
  notification.warning({
    message: '永不自动关闭',
    description: '此通知需要手动关闭，duration 设置为 0。',
    duration: 0,
  })
}
</script>
