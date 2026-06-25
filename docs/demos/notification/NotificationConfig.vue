<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="openWithUpdate"> 打开并更新 </Button>
    <Button @click="openWithConfig"> 全局配置 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

function openWithUpdate() {
  notification.open({
    key: 'updatable',
    message: '正在加载...',
    description: '请稍候，正在处理您的请求。',
    duration: 0,
  })

  setTimeout(() => {
    notification.success({
      key: 'updatable',
      message: '加载完成',
      description: '您的请求已处理完成！',
      duration: 3,
    })
  }, 2000)
}

function openWithConfig() {
  notification.config({
    maxCount: 3,
    top: 100,
    duration: 2,
  })

  notification.info({
    message: '全局配置生效',
    description: '已设置：maxCount=3, top=100px, duration=2s',
  })

  notification.info({
    message: '通知 2',
    description: '这是第二条通知',
  })

  notification.info({
    message: '通知 3',
    description: '这是第三条通知',
  })

  notification.info({
    message: '通知 4',
    description: '这是第四条通知（第一条将被移除）',
  })

  // Reset config
  setTimeout(() => {
    notification.config({ maxCount: undefined, top: 24, duration: 4.5 })
  }, 3000)
}
</script>
