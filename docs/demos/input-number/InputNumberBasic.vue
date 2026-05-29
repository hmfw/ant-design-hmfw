<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <InputNumber v-model:value="value" placeholder="请输入数字" style="width: 100%;" />
    <InputNumber v-model:value="value" disabled placeholder="禁用状态" style="width: 100%;" />
    <p>当前值：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value = ref<number | null>(null)
</script>
