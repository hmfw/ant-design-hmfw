<template>
  <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px">
    <Select v-model:value="v1" :options="options" size="large" placeholder="大尺寸 large" style="width: 100%" />
    <Select v-model:value="v2" :options="options" size="middle" placeholder="默认尺寸 middle" style="width: 100%" />
    <Select v-model:value="v3" :options="options" size="small" placeholder="小尺寸 small" style="width: 100%" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Select } from '@hmfw/ant-design'

const v1 = ref<string>()
const v2 = ref<string>()
const v3 = ref<string>()

const options = [
  { label: 'Vue', value: 'vue' },
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'angular' },
]
</script>
