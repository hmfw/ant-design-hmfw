<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <p style="margin-bottom: 4px">使用键盘方向键调整评分（聚焦后按 ← → 或 ↑ ↓）：</p>
      <Rate v-model:value="value" :keyboard="true" />
      <p style="margin-top: 8px">当前评分：{{ value }}</p>
    </div>
    <div>
      <p style="margin-bottom: 4px">禁用键盘操作：</p>
      <Rate v-model:value="value2" :keyboard="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
const value2 = ref(2)
</script>
