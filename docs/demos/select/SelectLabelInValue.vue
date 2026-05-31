<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
    <Select
      v-model:value="value"
      :options="options"
      label-in-value
      placeholder="选择一个选项"
      style="width: 100%;"
      @change="handleChange"
    />
    <p>选中值：{{ JSON.stringify(value) }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from 'ant-design-hmfw'

const value = ref<any>(null)

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]

const handleChange = (val: any, option: any) => {
  console.log('change:', val, option)
}
</script>
