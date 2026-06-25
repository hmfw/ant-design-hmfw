<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">Input 模式（默认）：</p>
      <InputNumber v-model:value="value1" :min="1" :max="10" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">Spinner 模式：</p>
      <InputNumber v-model:value="value2" mode="spinner" :min="1" :max="10" style="width: 100%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from '@hmfw/ant-design'

const value1 = ref<number>(3)
const value2 = ref<number>(3)
</script>
