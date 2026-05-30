<template>
  <Breadcrumb :items="items" separator="" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [
  { title: '位置' },
  { type: 'separator', separator: ':' },
  { title: '应用中心', href: '/app' },
  { type: 'separator' },
  { title: '应用列表', href: '/app/list' },
  { type: 'separator' },
  { title: '某应用' },
]
</script>
