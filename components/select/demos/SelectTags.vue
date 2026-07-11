<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="value"
      :options="options"
      mode="tags"
      :token-separators="[',']"
      placeholder="输入标签，用逗号分隔"
      style="width: 100%"
    />
    <p>已选：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]
</script>
