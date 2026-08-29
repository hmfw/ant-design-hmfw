<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" format="YYYY/MM/DD" placeholder="YYYY/MM/DD" />
    <DatePicker v-model:value="date" format="YYYY-MM-DD ddd" placeholder="自定义格式" />
    <DatePicker v-model:value="date" format="DD.MM.YYYY" placeholder="DD.MM.YYYY" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from '@hmfw/ant-design'

const date = ref<string>('')
</script>
