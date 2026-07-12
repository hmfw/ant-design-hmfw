<template>
  <div>
    <h4 style="margin-bottom: 8px">默认动画（inkBar + tabPane）</h4>
    <Tabs :items="items" style="margin-bottom: 24px" />

    <h4 style="margin-bottom: 8px">禁用动画</h4>
    <Tabs :items="items" :animated="false" style="margin-bottom: 24px" />

    <h4 style="margin-bottom: 8px">仅墨条动画</h4>
    <Tabs :items="items" :animated="{ inkBar: true, tabPane: false }" style="margin-bottom: 24px" />

    <h4 style="margin-bottom: 8px">仅内容动画</h4>
    <Tabs :items="items" :animated="{ inkBar: false, tabPane: true }" />
  </div>
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
]
</script>
