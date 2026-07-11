<template>
  <div>
    <div style="margin-bottom: 16px">
      <span style="margin-right: 8px">Tab Position: </span>
      <Select v-model:value="tabPosition" :options="positionOptions" style="width: 120px" />
    </div>
    <Tabs :items="items" :tab-position="tabPosition" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, Select } from '@hmfw/ant-design'
import type { TabsPosition } from '@hmfw/ant-design'

const tabPosition = ref<TabsPosition>('top')

const positionOptions = [
  { value: 'top', label: 'top' },
  { value: 'bottom', label: 'bottom' },
  { value: 'left', label: 'left' },
  { value: 'right', label: 'right' },
]

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]
</script>
