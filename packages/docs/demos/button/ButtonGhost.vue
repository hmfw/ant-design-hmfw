<template>
  <div style="padding: 16px; background: #1677ff;">
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <Button type="primary" ghost>Primary Ghost</Button>
      <Button ghost>Default Ghost</Button>
      <Button type="dashed" ghost>Dashed Ghost</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
</script>
