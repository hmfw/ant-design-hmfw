<template>
  <div style="display: flex; gap: 24px">
    <Badge color="#f50" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge color="#2db7f5" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
    <Badge color="#87d068" :count="5">
      <div style="width: 42px; height: 42px; background: #eee; border-radius: 4px" />
    </Badge>
  </div>
</template>

<script setup lang="ts">
import { Badge } from 'ant-design-hmfw'
</script>
