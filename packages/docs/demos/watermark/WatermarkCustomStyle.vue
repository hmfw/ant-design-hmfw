<template>
  <Watermark
    content="Ant Design"
    :font="{ color: 'rgba(23, 119, 255, 0.15)', fontSize: 20, fontWeight: 'bold' }"
    :rotate="-22"
  >
    <div style="height: 500px;" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from 'ant-design-hmfw'
</script>
