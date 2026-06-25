<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="enableRtl"> 启用 RTL 模式 </Button>
    <Button @click="disableRtl"> 禁用 RTL 模式 </Button>
    <Button @click="openNotification"> 打开通知 </Button>
  </div>
</template>

<script setup lang="ts">
import { notification, Button } from '@hmfw/ant-design'

function enableRtl() {
  notification.config({
    rtl: true,
  })

  notification.success({
    message: 'RTL 模式已启用',
    description: '通知现在将以从右到左的布局显示，适用于阿拉伯语等语言。图标和关闭按钮位置已自动调整。',
    duration: 3,
  })
}

function disableRtl() {
  notification.config({
    rtl: false,
  })

  notification.info({
    message: 'RTL 模式已禁用',
    description: '通知已恢复为默认的从左到右布局。',
    duration: 3,
  })
}

function openNotification() {
  notification.open({
    message: '测试通知',
    description: '这是一条测试通知，用于查看当前布局方向的效果。',
    duration: 3,
  })
}
</script>
