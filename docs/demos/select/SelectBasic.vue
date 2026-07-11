<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px">
    <Select v-model:value="value" :options="options" placeholder="请选择" style="width: 100%" />
    <Select v-model:value="value2" :options="options" placeholder="禁用状态" disabled style="width: 100%" />
    <p>选中：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = shallowRef<string>()
const value2 = shallowRef<string>()

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte（禁用）', value: 'svelte', disabled: true },
]
</script>
