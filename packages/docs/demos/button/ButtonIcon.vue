<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="primary" :icon="{ type: 'search' }">Search</Button>
    <Button type="primary" :icon="{ type: 'search' }" />
    <Button type="primary" :icon="{ type: 'check' }">Confirm</Button>
    <Button type="dashed" :icon="{ type: 'close' }">Cancel</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
</script>
