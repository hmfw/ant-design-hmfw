<template>
  <Space direction="vertical" size="large">
    <Breadcrumb :items="itemsWithTarget" />
    <Breadcrumb :items="itemsWithRel" />
  </Space>
</template>

<script setup lang="ts">
import { Breadcrumb, Space } from '@hmfw/ant-design'

const itemsWithTarget = [
  { title: '首页', href: '/', target: '_blank' },
  { title: '外部文档', href: 'https://example.com', target: '_blank', rel: 'noopener noreferrer' },
  { title: '当前页' },
]

const itemsWithRel = [
  { title: '首页', href: '/', rel: 'noopener' },
  { title: '帮助', href: '/help', rel: 'help' },
  { title: '当前页' },
]
</script>
