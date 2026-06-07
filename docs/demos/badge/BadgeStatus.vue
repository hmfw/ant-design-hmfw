<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Badge status="success" text="成功" />
    <Badge status="error" text="错误" />
    <Badge status="default" text="默认" />
    <Badge status="processing" text="进行中" />
    <Badge status="warning" text="警告" />
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
</script>
