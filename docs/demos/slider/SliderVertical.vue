<template>
  <div style="display: flex; gap: 48px; padding: 0 16px">
    <div style="height: 300px">
      <p style="margin-bottom: 8px">垂直滑块：{{ value1 }}</p>
      <Slider v-model:value="value1" vertical />
    </div>
    <div style="height: 300px">
      <p style="margin-bottom: 8px">垂直范围选择：{{ value2 }}</p>
      <Slider v-model:value="value2" vertical range :step="10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from '@hmfw/ant-design'

const value1 = ref(30)
const value2 = ref<[number, number]>([20, 50])
</script>
