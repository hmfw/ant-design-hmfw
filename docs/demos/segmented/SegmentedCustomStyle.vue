<template>
  <Segmented v-model:value="value" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Segmented } from 'ant-design-hmfw'

const value = ref('apple')
// 每个选项支持单独的 className 和 style
const options = [
  { value: 'apple', label: '苹果', style: { color: '#cf1322', fontWeight: 600 } },
  { value: 'orange', label: '橙子', style: { color: '#d46b08' } },
  { value: 'pear', label: '梨', className: 'demo-segmented-pear' },
]
</script>

<style>
.demo-segmented-pear {
  font-style: italic;
}
</style>
