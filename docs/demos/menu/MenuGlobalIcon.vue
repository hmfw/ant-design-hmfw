<template>
  <div style="width: 256px">
    <Menu mode="inline" :items="items" :selected-keys="selectedKeys" @select="onSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Menu } from 'ant-design-hmfw'

const selectedKeys = ref(['1'])

// 使用 VNode 作为全局图标
const items = [
  {
    key: '1',
    label: '导航一',
    icon: h('span', { style: { color: '#1890ff' } }, '📄'),
  },
  {
    key: '2',
    label: '导航二',
    icon: h('span', { style: { color: '#52c41a' } }, '📋'),
  },
  {
    key: '3',
    label: '导航三',
    icon: h('span', { style: { color: '#fa8c16' } }, '⚙️'),
  },
  {
    key: 'sub',
    label: '子菜单',
    icon: h('span', '📁'),
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
