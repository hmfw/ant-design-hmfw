<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert title="成功提示" description="详细的成功描述和对此次成功的说明。" type="success" show-icon />
    <Alert title="错误提示" description="详细的错误描述和对此次错误的说明。" type="error" show-icon />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
</script>
