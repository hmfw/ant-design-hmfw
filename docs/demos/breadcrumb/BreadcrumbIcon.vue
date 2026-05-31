<template>
  <Breadcrumb :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Breadcrumb, Icon, HomeOutlined, UserOutlined } from 'ant-design-hmfw'

const items = [
  {
    title: h(Icon, { component: HomeOutlined }),
    href: '/',
  },
  {
    title: h('span', {}, [
      h(Icon, { component: UserOutlined }),
      h('span', { style: { marginLeft: '4px' } }, '用户列表'),
    ]),
    href: '/users',
  },
  {
    title: '用户详情',
  },
]
</script>
