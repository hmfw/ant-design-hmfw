<template>
  <div>
    <div style="margin-bottom: 16px">
      <span>Tab Position: </span>
      <select v-model="tabPosition">
        <option value="top">top</option>
        <option value="bottom">bottom</option>
        <option value="left">left</option>
        <option value="right">right</option>
      </select>
    </div>
    <Tabs :items="items" :tab-position="tabPosition" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs } from '@hmfw/ant-design'
import type { TabsPosition } from '@hmfw/ant-design'

const tabPosition = ref<TabsPosition>('top')

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
</script>
