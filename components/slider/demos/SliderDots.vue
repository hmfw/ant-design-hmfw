<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">带刻度点：{{ value1 }}</p>
      <Slider v-model:value="value1" :dots="true" :step="10" />
    </div>
    <div>
      <p style="margin-bottom: 8px">范围选择 + 刻度点：{{ value2 }}</p>
      <Slider v-model:value="value2" range :dots="true" :step="20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const value1 = ref(30)
const value2 = ref<[number, number]>([20, 60])
</script>
