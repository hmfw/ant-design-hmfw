<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <Collapse :items="items" size="small" />
    <Collapse :items="items" size="middle" />
    <Collapse :items="items" size="large" />
  </div>
</template>

<script setup lang="ts">
import { Collapse } from 'ant-design-hmfw'

const items = [
  {
    key: '1',
    label: '面板标题',
    children: '这是面板内容',
  },
]
</script>
