<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Select
      v-model:value="value"
      :options="options"
      mode="multiple"
      :max-count="3"
      placeholder="最多选择 3 个"
      style="width: 100%;"
    />
    <p>已选：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<string[]>([])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
</script>
