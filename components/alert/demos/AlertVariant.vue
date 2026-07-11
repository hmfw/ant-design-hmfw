<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert type="success" variant="filled" title="Filled 填充样式" show-icon />
    <Alert type="info" variant="filled" title="Filled 填充样式" show-icon />
    <Alert type="warning" variant="filled" title="Filled 填充样式" show-icon />
    <Alert type="error" variant="filled" title="Filled 填充样式" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
</script>
