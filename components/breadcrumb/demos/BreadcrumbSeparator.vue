<template>
  <Space direction="vertical">
    <Breadcrumb :items="items" separator=">" />
    <Breadcrumb :items="items" separator="/" />
    <Breadcrumb :items="items" separator="|" />
  </Space>
</template>

<script setup lang="ts">
import { Breadcrumb, Space } from '@hmfw/ant-design'

const items = [{ title: '首页', href: '/' }, { title: '一级菜单', href: '/level1' }, { title: '二级菜单' }]
</script>
