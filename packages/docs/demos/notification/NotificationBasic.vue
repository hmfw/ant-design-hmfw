<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="openSuccess">成功</button>
    <button @click="openError">错误</button>
    <button @click="openWarning">警告</button>
    <button @click="openInfo">信息</button>
  </div>
</template>

<script setup lang="ts">
import { notification } from 'ant-design-hmfw'

function openSuccess() {
  notification.success({
    message: '操作成功',
    description: '您的操作已成功完成，请查看详情。',
  })
}

function openError() {
  notification.error({
    message: '操作失败',
    description: '操作过程中发生错误，请稍后重试。',
  })
}

function openWarning() {
  notification.warning({
    message: '警告',
    description: '此操作存在风险，请谨慎操作。',
  })
}

function openInfo() {
  notification.info({
    message: '提示信息',
    description: '这是一条普通的提示信息。',
  })
}
</script>
