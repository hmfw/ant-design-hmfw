<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Rate v-model:value="value" />
    <Rate v-model:value="value2" disabled />
    <p>评分：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Rate } from 'ant-design-hmfw'

const value = ref(3)
const value2 = ref(2.5)
</script>
