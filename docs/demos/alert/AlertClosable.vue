<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="警告提示" type="warning" closable @close="onClose" />
    <Alert message="错误提示" description="详细的错误描述信息。" type="error" closable />
  </div>
</template>

<script setup lang="ts">
import { Alert } from 'ant-design-hmfw'

function onClose() {
  console.log('关闭警告')
}
</script>
