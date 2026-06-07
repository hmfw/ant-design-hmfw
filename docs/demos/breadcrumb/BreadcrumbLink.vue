<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const items = [{ title: '首页', href: '/' }, { title: '应用列表', href: '/apps' }, { title: '某应用' }]
</script>
