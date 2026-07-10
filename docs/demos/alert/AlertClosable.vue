<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert title="警告提示" type="warning" closable @close="onClose" />
    <Alert title="错误提示" description="详细的错误描述信息。" type="error" closable />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'

function onClose() {
  console.log('关闭警告')
}
</script>
