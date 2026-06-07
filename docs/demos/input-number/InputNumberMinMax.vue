<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">范围 1-10，步长 1：</p>
      <InputNumber v-model:value="value1" :min="1" :max="10" :step="1" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">范围 0-1，步长 0.1，精度 1：</p>
      <InputNumber v-model:value="value2" :min="0" :max="1" :step="0.1" :precision="1" style="width: 100%" />
    </div>
    <p>value1: {{ value1 }}，value2: {{ value2 }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value1 = ref<number>(5)
const value2 = ref<number>(0.5)
</script>
