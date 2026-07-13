<template>
  <div>
    <Tabs :items="items" size="small" style="margin-bottom: 16px" />
    <Tabs :items="items" size="middle" style="margin-bottom: 16px" />
    <Tabs :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Tabs } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
</script>
