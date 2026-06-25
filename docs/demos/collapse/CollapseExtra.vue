<template>
  <Collapse :default-active-key="['1']" :items="items" />
</template>

<script setup lang="ts">
import { Collapse } from '@hmfw/ant-design'

const items = [
  {
    key: '1',
    label: '面板标题 1',
    children: '这是面板内容 1',
    extra: '额外内容',
  },
  {
    key: '2',
    label: '面板标题 2',
    children: '这是面板内容 2',
    extra: '更多',
  },
  {
    key: '3',
    label: '面板标题 3',
    children: '这是面板内容 3',
    showArrow: false,
  },
]
</script>
