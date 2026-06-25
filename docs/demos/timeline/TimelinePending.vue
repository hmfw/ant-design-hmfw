<template>
  <Timeline :items="items" pending="记录中..." />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { content: '创建服务现场 2015-09-01' },
  { content: '初步排除网络异常 2015-09-01' },
  { content: '技术测试异常 2015-09-01' },
]
</script>
