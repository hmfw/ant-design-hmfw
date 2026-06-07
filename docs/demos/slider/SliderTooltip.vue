<template>
  <div style="display: flex; flex-direction: column; gap: 24px; padding: 0 16px">
    <div>
      <p style="margin-bottom: 8px">自定义 Tooltip 格式：{{ value1 }}</p>
      <Slider v-model:value="value1" :tooltip="{ formatter: (v) => `${v}%` }" />
    </div>
    <div>
      <p style="margin-bottom: 8px">隐藏 Tooltip：{{ value2 }}</p>
      <Slider v-model:value="value2" :tooltip="{ formatter: null }" />
    </div>
    <div>
      <p style="margin-bottom: 8px">始终显示 Tooltip：{{ value3 }}</p>
      <Slider v-model:value="value3" :tooltip="{ open: true }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from 'ant-design-hmfw'

const value1 = ref(30)
const value2 = ref(50)
const value3 = ref(70)
</script>
