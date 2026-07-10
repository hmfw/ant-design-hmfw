<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Alert banner title="顶部公告：banner 模式默认显示图标，类型默认为 warning。" />
    <Alert banner type="error" title="错误公告" />
  </div>
</template>

<script setup lang="ts">
import { Alert } from '@hmfw/ant-design'
</script>
