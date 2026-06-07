<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <InputNumber
      v-model:value="price"
      :min="0"
      prefix="¥"
      addon-after="元"
      placeholder="请输入价格"
      style="width: 100%"
    />
    <InputNumber
      v-model:value="percent"
      :min="0"
      :max="100"
      addon-after="%"
      placeholder="请输入百分比"
      style="width: 100%"
    />
    <InputNumber
      v-model:value="weight"
      :min="0"
      addon-before="重量"
      addon-after="kg"
      placeholder="请输入重量"
      style="width: 100%"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const price = ref<number | null>(null)
const percent = ref<number | null>(null)
const weight = ref<number | null>(null)
</script>
