<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert title="成功提示" type="success" />
    <Alert title="消息提示" type="info" />
    <Alert title="警告提示" type="warning" />
    <Alert title="错误提示" type="error" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
</script>
