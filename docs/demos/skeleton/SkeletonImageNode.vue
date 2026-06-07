<template>
  <div style="display: flex; gap: 16px">
    <Skeleton.Image active />
    <Skeleton.Node active>
      <div
        style="width: 96px; height: 96px; display: flex; align-items: center; justify-content: center; color: #bfbfbf"
      >
        Node
      </div>
    </Skeleton.Node>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from 'ant-design-hmfw'
</script>
