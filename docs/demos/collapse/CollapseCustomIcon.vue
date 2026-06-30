<template>
  <Collapse :default-active-key="['1']" :expand-icon="customExpandIcon" :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Collapse, DownOutlined } from '@hmfw/ant-design'

const items = [
  {
    key: '1',
    label: '自定义展开图标 1',
    children: '这是面板内容 1',
  },
  {
    key: '2',
    label: '自定义展开图标 2',
    children: '这是面板内容 2',
  },
  {
    key: '3',
    label: '自定义展开图标 3',
    children: '这是面板内容 3',
  },
]

const customExpandIcon = ({ isActive }: { isActive?: boolean }) => {
  return h(DownOutlined, {
    class: 'hmfw-icon',
    style: {
      transform: isActive ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform 0.3s',
    },
  })
}
</script>
