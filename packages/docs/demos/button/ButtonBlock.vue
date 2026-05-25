<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <Button type="primary" block>Primary Block</Button>
    <Button block>Default Block</Button>
    <Button type="dashed" block>Dashed Block</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
</script>
