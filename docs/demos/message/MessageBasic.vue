<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <button @click="showSuccess">成功</button>
    <button @click="showError">错误</button>
    <button @click="showWarning">警告</button>
    <button @click="showInfo">信息</button>
    <button @click="showLoading">加载中</button>
  </div>
</template>

<script setup lang="ts">
import { message } from 'ant-design-hmfw'

function showSuccess() {
  message.success('操作成功！')
}

function showError() {
  message.error('操作失败，请重试。')
}

function showWarning() {
  message.warning('请注意此操作的风险。')
}

function showInfo() {
  message.info('这是一条普通提示信息。')
}

function showLoading() {
  message.loading('正在加载中...')
}
</script>
