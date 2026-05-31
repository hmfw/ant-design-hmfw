<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px;">
    <DatePicker
      v-model:value="date"
      :min-date="minDate"
      :max-date="maxDate"
      placeholder="只能选择本月"
    />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref('')

const minDate = computed(() => {
  const d = new Date()
  d.setDate(1)
  return d.toISOString().split('T')[0]
})

const maxDate = computed(() => {
  const d = new Date()
  d.setMonth(d.getMonth() + 1, 0)
  return d.toISOString().split('T')[0]
})
</script>
