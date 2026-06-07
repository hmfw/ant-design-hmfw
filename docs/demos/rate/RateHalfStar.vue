<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Rate v-model:value="value" allow-half />
    <Rate v-model:value="value2" allow-half disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(2.5)
const value2 = ref(3.5)
</script>
