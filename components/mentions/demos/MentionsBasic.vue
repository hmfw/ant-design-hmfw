<template>
  <Mentions v-model:value="value" :options="options" placeholder="输入 @ 来提及某人" />
  <div style="margin-top: 16px">
    <div style="color: rgba(0, 0, 0, 0.45); font-size: 14px">当前值：</div>
    <div style="margin-top: 8px">{{ value || '(空)' }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mentions } from '@hmfw/ant-design'

const value = ref('')
const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
  { value: 'dave', label: 'Dave' },
  { value: 'eve', label: 'Eve' },
]
</script>
