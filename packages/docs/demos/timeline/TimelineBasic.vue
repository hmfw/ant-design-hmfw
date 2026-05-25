<template>
  <Timeline :items="items" />
</template>

<script setup lang="ts">
import { Timeline } from 'ant-design-hmfw'

const items = [
  { children: '创建服务现场 2015-09-01' },
  { children: '初步排除网络异常 2015-09-01' },
  { children: '技术测试异常 2015-09-01' },
  { children: '网络异常正在修复 2015-09-01' },
]
</script>
