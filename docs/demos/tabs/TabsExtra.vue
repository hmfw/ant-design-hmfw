<template>
  <Tabs :items="items" :tab-bar-extra-content="extra" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs } from 'ant-design-hmfw'

const items = [
  { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
  { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
  { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
]

const extra = h('button', { style: 'margin-left: 16px' }, 'Extra Action')
</script>
