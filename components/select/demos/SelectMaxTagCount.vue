<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="value"
      :options="options"
      mode="multiple"
      :max-tag-count="2"
      :max-tag-placeholder="(omitted) => `+ ${omitted.length} 项`"
      placeholder="最多显示 2 个标签"
      style="width: 100%"
    />
    <p>已选：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = ref<string[]>(['vue', 'react', 'angular', 'svelte'])

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Solid', value: 'solid' },
]
</script>
