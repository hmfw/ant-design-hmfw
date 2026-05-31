<template>
  <div style="display: flex; gap: 8px;">
    <Button @click="showLong">显示 10 秒</Button>
    <Button @click="showSticky">不自动关闭</Button>
    <Button @click="showWithCallback">关闭后回调</Button>
  </div>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function showLong() {
  message.success('这条消息将显示 10 秒', 10)
}

function showSticky() {
  // duration 设为 0，不会自动关闭，返回值可调用以手动关闭
  const close = message.warning('点我手动关闭', 0)
  setTimeout(close, 5000)
}

function showWithCallback() {
  message.info('关闭后将触发回调', 2).then(() => {
    message.success('消息已关闭！')
  })
}
</script>
