<template>
  <ColorPicker v-model:value="color" show-text :presets="presets" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker } from '@hmfw/ant-design'

const color = ref('#1677ff')

const presets = [
  {
    label: '推荐',
    colors: ['#1677ff', '#52c41a', '#faad14', '#ff4d4f', '#722ed1', '#13c2c2'],
  },
]
</script>
