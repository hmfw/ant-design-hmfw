<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      picker="date"
      placeholder="选择日期"
    />
    <DatePicker
      v-model:value="month"
      picker="month"
      placeholder="选择月份"
    />
    <DatePicker
      v-model:value="quarter"
      picker="quarter"
      placeholder="选择季度"
    />
    <DatePicker
      v-model:value="year"
      picker="year"
      placeholder="选择年份"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')
const month = ref('')
const quarter = ref('')
const year = ref('')
</script>
