<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="value"
      :options="options"
      :field-names="{ label: 'name', value: 'id' }"
      placeholder="使用自定义字段名 name / id"
      style="width: 100%"
    />
    <p>已选：{{ value }}</p>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = shallowRef<number>()

// 选项使用 name / id 而非默认的 label / value
const options = [
  { name: '北京', id: 1 },
  { name: '上海', id: 2 },
  { name: '广州', id: 3 },
  { name: '深圳', id: 4 },
]
</script>
