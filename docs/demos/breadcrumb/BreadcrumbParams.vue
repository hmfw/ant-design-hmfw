<template>
  <Breadcrumb :items="items" :params="params" />
</template>

<script setup lang="ts">
import { Breadcrumb } from 'ant-design-hmfw'

const params = { id: '123' }

const items = [{ title: '用户管理', href: '/users' }, { title: '用户 :id' }]
</script>
