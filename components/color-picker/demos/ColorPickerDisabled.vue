<template>
  <Space wrap align="center" :size="24">
    <div class="demo-item">
      <div class="demo-label">正常</div>
      <ColorPicker v-model:value="color" show-text />
    </div>
    <div class="demo-item">
      <div class="demo-label">禁用</div>
      <ColorPicker v-model:value="color" show-text disabled />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker, Space } from '@hmfw/ant-design'

const color = ref('#722ed1')
</script>

<style scoped>
.demo-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.demo-label {
  font-size: 12px;
  color: #888;
}
</style>
