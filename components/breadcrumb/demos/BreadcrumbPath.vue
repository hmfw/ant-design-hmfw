<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const items = [
  { path: 'home', title: '首页' },
  { path: 'user', title: '用户' },
  { path: 'profile', title: '个人资料' },
]
</script>
