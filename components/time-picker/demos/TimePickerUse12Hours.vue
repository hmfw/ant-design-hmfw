<template>
  <div style="display: flex; flex-direction: column; gap: 16px; width: 200px">
    <TimePicker v-model:value="time" use-12-hours format="hh:mm:ss A" placeholder="12 小时制" />
    <p>选中时间：{{ time }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TimePicker } from '@hmfw/ant-design'

const time = ref<string>('')
</script>
