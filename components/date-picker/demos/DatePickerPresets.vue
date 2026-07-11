<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" :presets="presets" placeholder="选择日期" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from '@hmfw/ant-design'

const date = ref('')

const presets = [
  {
    label: '昨天',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() - 1)
      return d.toISOString().split('T')[0]
    },
  },
  { label: '今天', value: () => new Date().toISOString().split('T')[0] },
  {
    label: '明天',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() + 1)
      return d.toISOString().split('T')[0]
    },
  },
  {
    label: '一周后',
    value: () => {
      const d = new Date()
      d.setDate(d.getDate() + 7)
      return d.toISOString().split('T')[0]
    },
  },
]
</script>
