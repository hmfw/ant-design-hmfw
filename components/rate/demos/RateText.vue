<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; align-items: center; gap: 12px">
      <Rate v-model:value="value" :tooltips="desc" />
      <span v-if="value" style="color: #666">{{ desc[value - 1] }}</span>
    </div>
    <div>
      <p style="margin-bottom: 8px; color: #666">不同评分的文案：</p>
      <div style="display: flex; align-items: center; gap: 12px">
        <Rate v-model:value="value2" />
        <span style="color: #666">
          {{ value2 === 0 ? '未评分' : `${value2} 星` }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from '@hmfw/ant-design'

const value = ref(3)
const value2 = ref(0)
const desc = ['极差', '差', '一般', '好', '极好']
</script>
