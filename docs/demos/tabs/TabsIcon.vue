<template>
  <Tabs :items="items" />
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Tabs, Icon } from '../../../components'
import { AppleOutlined, AndroidOutlined } from '../../../components/icon/icons'

const items = [
  {
    key: '1',
    label: 'Tab 1',
    icon: h(Icon, { component: AppleOutlined }),
    children: 'Content of Tab 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    icon: h(Icon, { component: AndroidOutlined }),
    children: 'Content of Tab 2',
  },
]
</script>
