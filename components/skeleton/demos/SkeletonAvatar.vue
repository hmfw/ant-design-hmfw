<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Skeleton.Avatar active />
    <Skeleton.Avatar active size="large" />
    <Skeleton.Avatar active shape="square" />
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@hmfw/ant-design'
</script>
