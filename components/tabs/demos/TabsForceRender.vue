<template>
  <div>
    <h4 style="margin-bottom: 8px">forceRender — 隐藏时保留 DOM</h4>
    <Tabs :items="itemsForce" style="margin-bottom: 24px" />

    <h4 style="margin-bottom: 8px">destroyInactiveTabPane — 隐藏时销毁 DOM</h4>
    <Tabs :items="itemsDestroy" destroy-inactive-tab-pane />
  </div>
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const itemsForce = [
  { key: '1', label: 'Tab 1 (保留 DOM)', children: 'Content of Tab 1' },
  {
    key: '2',
    label: 'Tab 2 (forceRender)',
    children: 'Content of Tab 2 — 即使未激活也会渲染到 DOM 中',
    forceRender: true,
  },
  { key: '3', label: 'Tab 3 (正常)', children: 'Content of Tab 3' },
]

const itemsDestroy = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  {
    key: '2',
    label: 'Tab 2 (离开即销毁)',
    children: 'Content of Tab 2 — 切换离开后即从 DOM 中移除',
    destroyInactiveTabPane: true,
  },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
</script>
