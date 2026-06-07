<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button @click="setConfig"> 设置 maxCount = 3 / top = 100 </Button>
    <Button @click="spam"> 连续弹出 5 条 </Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function setConfig() {
  // 全局配置：最多同时显示 3 条，距顶部 100px
  message.config({ maxCount: 3, top: 100 })
  message.info('已应用全局配置')
}

function spam() {
  for (let i = 1; i <= 5; i++) {
    message.info(`第 ${i} 条消息`)
  }
}
</script>
