<template>
  <Menu mode="horizontal" :items="items" :selected-keys="selectedKeys" @select="onSelect" />
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined } from '@hmfw/icons'

const selectedKeys = ref(['home'])

const items = [
  { key: 'home', label: '首页', icon: h(HomeOutlined) },
  { key: 'user', label: '用户管理', icon: h(UserOutlined) },
  {
    key: 'setting',
    label: '系统设置',
    icon: h(SettingOutlined),
    children: [
      { key: 'setting-1', label: '基础设置' },
      { key: 'setting-2', label: '高级设置' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
