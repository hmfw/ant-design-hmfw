<template>
  <div style="display: flex; gap: 32px; flex-wrap: wrap">
    <Badge.Ribbon text="Hippies">
      <div class="ribbon-card">缎带在右侧（默认）</div>
    </Badge.Ribbon>

    <Badge.Ribbon text="Pies" color="green" placement="start">
      <div class="ribbon-card">缎带在左侧 + 预设色</div>
    </Badge.Ribbon>

    <Badge.Ribbon text="Custom" color="#2db7f5">
      <div class="ribbon-card">自定义颜色</div>
    </Badge.Ribbon>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@hmfw/ant-design'
</script>

<style scoped>
.ribbon-card {
  width: 180px;
  height: 64px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 6px;
}
</style>
