<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '成功事件', color: 'green' },
  { content: '失败事件', color: 'red' },
  { content: '警告事件', color: 'gray' },
  { content: '自定义颜色', color: '#00CCFF' },
]
</script>
