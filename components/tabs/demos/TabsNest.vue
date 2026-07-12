<template>
  <Tabs :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs } from '@hmfw/ant-design'

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: h(Tabs, {
      size: 'small',
      items: [
        { key: '1-1', label: '子 Tab 1', children: '子内容 1-1' },
        { key: '1-2', label: '子 Tab 2', children: '子内容 1-2' },
      ],
    }),
  },
  {
    key: '2',
    label: 'Tab 2',
    children: h(Tabs, {
      size: 'small',
      type: 'card',
      items: [
        { key: '2-1', label: '子 Tab A', children: '子内容 2-1' },
        { key: '2-2', label: '子 Tab B', children: '子内容 2-2' },
      ],
    }),
  },
  { key: '3', label: 'Tab 3', children: '普通内容 3' },
]
</script>
