<template>
  <Button @click="openMessage">开始加载</Button>
</template>

<script setup lang="ts">
import { message, Button } from 'ant-design-hmfw'

function openMessage() {
  const key = 'updatable'
  message.loading({ content: '加载中...', key, duration: 0 })
  setTimeout(() => {
    // 相同 key：原地更新内容与类型，而非堆叠新提示
    message.success({ content: '加载完成！', key, duration: 2 })
  }, 1500)
}
</script>
