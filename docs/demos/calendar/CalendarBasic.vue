<template>
  <Calendar v-model:value="value" @select="onSelect" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calendar } from 'ant-design-hmfw'

const value = ref<string>()

const onSelect = (dateStr: string) => {
  console.log('选中日期：', dateStr)
}
</script>
