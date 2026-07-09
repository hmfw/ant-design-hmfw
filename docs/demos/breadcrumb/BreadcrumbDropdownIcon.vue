<template>
  <Space direction="vertical" size="large">
    <!-- 自定义下拉图标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">自定义展开图标：</div>
      <Breadcrumb :items="menuItems" :dropdown-icon="customIcon" />
    </div>

    <!-- 点击触发展开 + 自定义图标 -->
    <div>
      <div style="margin-bottom: 8px; color: #666">点击触发 + 自定义图标：</div>
      <Breadcrumb :items="menuItems" :dropdown-icon="clickIcon" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { AppstoreOutlined, EllipsisOutlined } from '@hmfw/icons'
import { Breadcrumb, Space } from '@hmfw/ant-design'
import type { BreadcrumbItemType } from '@hmfw/ant-design'

const customIcon = h(EllipsisOutlined, { class: 'hmfw-icon' })
const clickIcon = h(AppstoreOutlined, { class: 'hmfw-icon' })

const menuItems: BreadcrumbItemType[] = [
  { title: '首页', path: 'home' },
  {
    title: '应用列表',
    path: 'apps',
    menu: {
      items: [
        { key: 'app1', label: '应用一' },
        { key: 'app2', label: '应用二' },
        { key: 'app3', label: '应用三' },
      ],
    },
    // 点击触发，非默认的 hover
    dropdownProps: { trigger: ['click'] },
  },
  { title: '某应用' },
]
</script>
