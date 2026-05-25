<template>
  <div style="display: flex; gap: 16px;">
    <Progress type="dashboard" :percent="75" />
    <Progress type="dashboard" :percent="75" :gap-degree="30" />
  </div>
</template>

<script setup lang="ts">
import { Progress } from 'ant-design-hmfw'
</script>
