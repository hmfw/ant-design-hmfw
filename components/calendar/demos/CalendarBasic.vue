<template>
  <Calendar v-model:value="value" @select="onSelect" />
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'
import { Calendar } from '@hmfw/ant-design'

const value = shallowRef<string>()

const onSelect = (dateStr: string) => {
  console.log('选中日期：', dateStr)
}
</script>
