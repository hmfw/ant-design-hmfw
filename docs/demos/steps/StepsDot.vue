<template>
  <Steps progress-dot :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from 'ant-design-hmfw'

const items = [
  { title: '已完成', description: '2024-01-01' },
  { title: '进行中', description: '2024-01-02' },
  { title: '待处理', description: '2024-01-03' },
  { title: '待处理', description: '2024-01-04' },
]
</script>
