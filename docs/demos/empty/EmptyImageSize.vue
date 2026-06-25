<template>
  <div style="display: flex; gap: 32px; align-items: flex-end; flex-wrap: wrap">
    <Empty :image-width="48" :image-height="32" description="小尺寸" />
    <Empty description="默认尺寸" />
    <Empty :image-width="160" :image-height="100" description="大尺寸" />
    <Empty :image-style="{ height: '64px' }" description="imageStyle 控制" />
  </div>
</template>

<script setup lang="ts">
import { Empty } from '@hmfw/ant-design'
</script>
