<template>
  <div style="display: flex; flex-direction: column; gap: 12px">
    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
      <span style="width: 64px">outlined</span>
      <Tag color="blue" variant="outlined">预设色</Tag>
      <Tag color="#f50" variant="outlined">自定义色</Tag>
    </div>
    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
      <span style="width: 64px">filled</span>
      <Tag color="blue" variant="filled">预设色</Tag>
      <Tag color="#f50" variant="filled">自定义色</Tag>
    </div>
    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap">
      <span style="width: 64px">solid</span>
      <Tag color="blue" variant="solid">预设色</Tag>
      <Tag color="#f50" variant="solid">自定义色</Tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Tag } from '@hmfw/ant-design'
</script>
