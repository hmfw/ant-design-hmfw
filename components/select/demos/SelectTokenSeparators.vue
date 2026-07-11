<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select
      v-model:value="value"
      mode="tags"
      :options="options"
      :token-separators="[',', ';', '|']"
      placeholder="输入内容，用 , ; | 任意分隔符自动分词"
      style="width: 100%"
    />
    <p>已选：{{ value }}</p>
    <p style="color: #888; font-size: 12px">试试粘贴：tag1,tag2;tag3|tag4</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'

const value = ref<string[]>([])

const options = [
  { label: '前端', value: '前端' },
  { label: '后端', value: '后端' },
  { label: '全栈', value: '全栈' },
]
</script>
