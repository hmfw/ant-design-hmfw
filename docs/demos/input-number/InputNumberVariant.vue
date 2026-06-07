<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <InputNumber v-model:value="value" placeholder="Outlined (默认)" style="width: 100%" />
    <InputNumber v-model:value="value" variant="filled" placeholder="Filled" style="width: 100%" />
    <InputNumber v-model:value="value" variant="borderless" placeholder="Borderless" style="width: 100%" />
    <InputNumber v-model:value="value" variant="underlined" placeholder="Underlined" style="width: 100%" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { InputNumber } from 'ant-design-hmfw'

const value = ref<number>(100)
</script>
