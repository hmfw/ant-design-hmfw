<template>
  <Timeline orientation="horizontal" :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from '@hmfw/ant-design'

const items = [
  { title: '2015-09', content: '创建服务' },
  { title: '2015-10', content: '排除异常' },
  { title: '2015-11', content: '技术测试' },
  { title: '2015-12', content: '修复完成' },
]
</script>
