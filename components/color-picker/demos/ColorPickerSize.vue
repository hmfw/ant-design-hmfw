<template>
  <Space wrap align="center" :size="24">
    <div class="size-item">
      <div class="size-label">small</div>
      <ColorPicker v-model:value="color" size="small" show-text />
    </div>
    <div class="size-item">
      <div class="size-label">middle（默认）</div>
      <ColorPicker v-model:value="color" size="middle" show-text />
    </div>
    <div class="size-item">
      <div class="size-label">large</div>
      <ColorPicker v-model:value="color" size="large" show-text />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker, Space } from '@hmfw/ant-design'

const color = ref('#1677ff')
</script>

<style scoped>
.size-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.size-label {
  font-size: 12px;
  color: #888;
}
</style>
