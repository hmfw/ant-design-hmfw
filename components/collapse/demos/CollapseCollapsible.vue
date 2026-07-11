<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Collapse collapsible="header" :default-active-key="['1']" :items="headerItems" />
    <Collapse collapsible="icon" :default-active-key="['1']" :items="iconItems" />
    <Collapse collapsible="disabled" :items="disabledItems" />
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@hmfw/ant-design'

const text = '这个面板可以通过点击文本或图标来折叠'

const headerItems = [
  {
    key: '1',
    label: '点击文本或图标可折叠',
    children: text,
  },
]

const iconItems = [
  {
    key: '1',
    label: '只能点击图标折叠',
    children: '这个面板只能通过点击图标来折叠',
  },
]

const disabledItems = [
  {
    key: '1',
    label: '无法折叠',
    children: '这个面板无法被折叠',
  },
]
</script>
