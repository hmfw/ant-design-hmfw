<template>
  <Watermark
    content="Ant Design"
    :gap="[50, 50]"
    :offset="[25, 25]"
    :rotate="-45"
    :font="{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }"
  >
    <div style="height: 500px" />
  </Watermark>
</template>

<script setup lang="ts">
import { Watermark } from '@hmfw/ant-design'
</script>
