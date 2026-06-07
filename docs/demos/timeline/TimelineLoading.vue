<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { content: '创建服务现场', loading: true },
  { content: '初步排除网络异常', color: 'green' },
  { content: '技术测试异常', color: 'red' },
]
</script>
