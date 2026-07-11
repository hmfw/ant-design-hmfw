<template>
  <div style="width: 300px">
    <DatePicker v-model:value="datetime" :show-time="true" placeholder="选择日期和时间" @change="handleChange" />
    <p style="margin-top: 8px">选中：{{ datetime }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DatePicker } from '@hmfw/ant-design'

const datetime = ref('')

const handleChange = (value: string) => {
  console.log('选中日期时间：', value)
}
</script>
