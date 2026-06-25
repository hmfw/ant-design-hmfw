<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const items = [{ title: '首页' }, { title: '应用列表' }, { title: '某应用' }]
</script>
