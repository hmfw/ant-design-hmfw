<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 300px;">
    <TimePicker
      v-model:value="time"
      placeholder="请选择时间"
      @change="handleChange"
    />
    <TimePicker
      v-model:value="time2"
      placeholder="禁用状态"
      disabled
    />
    <p>选中时间：{{ time }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from 'ant-design-hmfw'

const time = ref('')
const time2 = ref('10:30:00')

const handleChange = (value: string) => {
  console.log('选中时间：', value)
}
</script>
