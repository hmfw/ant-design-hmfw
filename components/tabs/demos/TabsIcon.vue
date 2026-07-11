<template>
  <Tabs :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs } from '@hmfw/ant-design'
import { AppleOutlined, AndroidOutlined } from '@hmfw/icons'

const items = [
  {
    key: '1',
    label: 'Tab 1',
    icon: h(AppleOutlined, { class: 'hmfw-icon' }),
    children: 'Content of Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    icon: h(AndroidOutlined, { class: 'hmfw-icon' }),
    children: 'Content of Tab 2',
  },
]
</script>
