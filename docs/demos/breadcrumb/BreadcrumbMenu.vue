<template>
  <div class="breadcrumb-menu-demo">
    <Breadcrumb :items="items" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Breadcrumb, AppstoreOutlined } from '@hmfw/ant-design'
import type { BreadcrumbItem as BreadcrumbItemType } from '@hmfw/ant-design'

const items: BreadcrumbItemType[] = [
  {
    title: '首页',
    path: 'home',
  },
  {
    title: '应用列表',
    path: 'apps',
    menu: {
      items: [
        {
          key: 'app1',
          label: '应用一',
          icon: h(AppstoreOutlined, { class: 'hmfw-icon' }),
        },
        {
          key: 'app2',
          label: '应用二',
          icon: h(AppstoreOutlined, { class: 'hmfw-icon' }),
        },
        {
          key: 'app3',
          label: '应用三',
          icon: h(AppstoreOutlined, { class: 'hmfw-icon' }),
        },
      ],
      onClick: (info) => {
        console.log('点击了菜单项:', info.key)
      },
    },
  },
  {
    title: '某应用',
  },
]
</script>

<style scoped>
.breadcrumb-menu-demo {
  padding: 16px;
}
</style>
