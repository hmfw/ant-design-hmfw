<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 300px">
    <DatePicker v-model:value="date" placeholder="请选择日期" @change="handleChange" />
    <p>选中日期：{{ date }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from 'ant-design-hmfw'

const date = ref<string>('')

const handleChange = (value: string) => {
  console.log('选中日期：', value)
}
</script>
