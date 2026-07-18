<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert title="不显示图标（默认）" type="info" />
    <Alert title="显示图标" type="info" show-icon />
    <Alert title="成功提示" type="success" show-icon />
    <Alert title="警告提示" type="warning" show-icon />
    <Alert title="错误提示" type="error" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
</script>
