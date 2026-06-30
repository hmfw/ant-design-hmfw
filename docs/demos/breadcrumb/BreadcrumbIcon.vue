<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Breadcrumb, HomeOutlined, UserOutlined } from '@hmfw/ant-design'

const items = [
  {
    title: h(HomeOutlined, { class: 'hmfw-icon' }),
    href: '/',
  },
  {
    title: h('span', {}, [
      h(UserOutlined, { class: 'hmfw-icon' }),
      h('span', { style: { marginLeft: '4px' } }, '用户列表'),
    ]),
    href: '/users',
  },
  {
    title: '用户详情',
  },
]
</script>
