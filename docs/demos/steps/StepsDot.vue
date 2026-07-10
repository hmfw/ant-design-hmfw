<template>
  <Steps progress-dot :current="1" :items="items" />
</template>

<script setup lang="ts">
import { Steps } from '@hmfw/ant-design'

const items = [
  { title: '已完成', content: '2024-01-01' },
  { title: '进行中', content: '2024-01-02' },
  { title: '待处理', content: '2024-01-03' },
  { title: '待处理', content: '2024-01-04' },
]
</script>
