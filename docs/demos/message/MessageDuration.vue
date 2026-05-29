<template>
  <div style="display: flex; gap: 8px;">
    <button @click="showLong">显示 10 秒</button>
    <button @click="showWithCallback">关闭后回调</button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-hmfw'

function showLong() {
  message.success('这条消息将显示 10 秒', 10)
}

function showWithCallback() {
  message.info('关闭后将触发回调', 2).then(() => {
    message.success('消息已关闭！')
  })
}
</script>
