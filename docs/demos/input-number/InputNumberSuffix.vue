<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <div>
      <p style="margin-bottom: 4px">带前缀：</p>
      <InputNumber v-model:value="value1" prefix="¥" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">带后缀：</p>
      <InputNumber v-model:value="value2" suffix="RMB" style="width: 100%" />
    </div>
    <div>
      <p style="margin-bottom: 4px">前缀 + 后缀：</p>
      <InputNumber v-model:value="value3" prefix="¥" suffix="元" style="width: 100%" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value1 = ref<number>(100)
const value2 = ref<number>(200)
const value3 = ref<number>(300)
</script>
