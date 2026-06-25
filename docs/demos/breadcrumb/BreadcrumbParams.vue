<template>
  <Breadcrumb :items="items" :params="params" />
</template>

<script setup lang="ts">
import { Breadcrumb } from '@hmfw/ant-design'

const params = { id: '123' }

const items = [{ title: '用户管理', href: '/users' }, { title: '用户 :id' }]
</script>
