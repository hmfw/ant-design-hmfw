<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert message="成功提示" type="success" />
    <Alert message="消息提示" type="info" />
    <Alert message="警告提示" type="warning" />
    <Alert message="错误提示" type="error" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
</script>
