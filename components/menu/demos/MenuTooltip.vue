<template>
  <div>
    <Button type="primary" style="margin-bottom: 16px" @click="collapsed = !collapsed">
      {{ collapsed ? '展开' : '折叠' }}
    </Button>
    <div
      :style="{
        width: collapsed ? '80px' : '256px',
        borderRight: '1px solid #f0f0f0',
        transition: 'width 0.2s',
      }"
    >
      <Menu
        mode="inline"
        :items="items"
        :selected-keys="selectedKeys"
        :inline-collapsed="collapsed"
        @select="onSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu, Button } from '@hmfw/ant-design'
import { HomeOutlined, UserOutlined, SettingOutlined, FolderOutlined } from '@hmfw/icons'

const collapsed = ref(false)
const selectedKeys = ref(['1'])

// 收起时鼠标悬停会自动显示 Tooltip
const items = [
  {
    key: '1',
    label: '导航一',
    icon: h(HomeOutlined),
    title: '这是导航一的提示',
  },
  {
    key: '2',
    label: '导航二',
    icon: h(UserOutlined),
    title: '这是导航二的提示',
  },
  {
    key: '3',
    label: '导航三',
    icon: h(SettingOutlined),
  },
  {
    key: 'sub',
    label: '子菜单',
    icon: h(FolderOutlined),
    children: [
      { key: 'sub-1', label: '子项 1' },
      { key: 'sub-2', label: '子项 2' },
    ],
  },
]

const onSelect = ({ key }: { key: string }) => {
  selectedKeys.value = [key]
}
</script>
