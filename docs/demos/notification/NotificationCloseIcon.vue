<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" @click="openWithCustomIcon"> 自定义关闭图标 </Button>
    <Button @click="setGlobalCloseIcon"> 设置全局关闭图标 </Button>
    <Button @click="resetGlobalCloseIcon"> 重置全局配置 </Button>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { notification, Button, Icon, CloseCircleFilled, CheckCircleFilled } from '@hmfw/ant-design'

function openWithCustomIcon() {
  notification.info({
    message: '自定义关闭图标',
    description: '此通知使用了自定义的关闭图标（实心圆形关闭图标）。',
    closeIcon: () => h(Icon, { component: CloseCircleFilled }),
    duration: 0,
  })
}

function setGlobalCloseIcon() {
  notification.config({
    closeIcon: () => h(Icon, { component: CheckCircleFilled }),
  })

  notification.success({
    message: '全局关闭图标已设置',
    description: '所有新通知都将使用对勾图标作为关闭按钮，除非单独指定。',
    duration: 3,
  })
}

function resetGlobalCloseIcon() {
  notification.config({
    closeIcon: undefined,
  })

  notification.info({
    message: '已重置为默认图标',
    description: '关闭图标已恢复为默认样式。',
    duration: 3,
  })
}
</script>
