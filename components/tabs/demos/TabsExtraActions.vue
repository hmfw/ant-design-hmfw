<template>
  <Tabs :items="items" type="card" :tab-bar-extra-content="extra" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs, Button } from '@hmfw/ant-design'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
  { key: '4', label: 'Tab 4', children: 'Content of Tab 4' },
  { key: '5', label: 'Tab 5', children: 'Content of Tab 5' },
  { key: '6', label: 'Tab 6', children: 'Content of Tab 6' },
]

const extra = {
  right: h(Button, { size: 'small' }, () => '操作'),
}
</script>
