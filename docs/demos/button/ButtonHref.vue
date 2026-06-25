<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px">
      <Button type="primary" href="https://ant.design" target="_blank"> Link Button </Button>
      <Button type="link" href="https://ant.design" target="_blank"> Link Type </Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button type="primary" href="https://ant.design" disabled> Disabled Link </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
</script>
