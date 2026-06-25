<template>
  <div style="display: flex; gap: 24px">
    <Badge :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="0" show-zero>
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="99">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge :count="100">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
</script>
