<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      :disabled-date="disablePastDates"
      placeholder="不可选择过去日期"
    />
    <DatePicker
      v-model:value="date2"
      :disabled-date="disableFutureDates"
      placeholder="不可选择未来日期"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')
const date2 = ref('')

const disablePastDates = (dateStr: string) => {
  return new Date(dateStr) < new Date(new Date().toDateString())
}

const disableFutureDates = (dateStr: string) => {
  return new Date(dateStr) > new Date(new Date().toDateString())
}
</script>
