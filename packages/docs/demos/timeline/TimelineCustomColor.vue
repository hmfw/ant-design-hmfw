<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '成功事件', color: 'green' },
  { children: '失败事件', color: 'red' },
  { children: '警告事件', color: 'gray' },
  { children: '自定义颜色', color: '#00CCFF' },
]
</script>
