<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select v-model:value="v1" :options="options" status="error" placeholder="错误状态" style="width: 100%" />
    <Select v-model:value="v2" :options="options" status="warning" placeholder="警告状态" style="width: 100%" />
    <Select :options="options" loading placeholder="加载中状态" style="width: 100%" />
    <Select
      v-model:value="v3"
      :options="options"
      allow-clear
      placeholder="可清除（选中后出现清除按钮）"
      style="width: 100%"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'

const v1 = ref<string>()
const v2 = ref<string>()
const v3 = ref<string>('vue')

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]
</script>
