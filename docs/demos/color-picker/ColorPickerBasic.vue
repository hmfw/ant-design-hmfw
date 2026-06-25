<template>
  <Space wrap align="center">
    <ColorPicker v-model:value="color" show-text />
    <span>当前颜色：{{ color }}</span>
  </Space>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorPicker, Space } from '@hmfw/ant-design'

const color = ref('#1677ff')
</script>
