<template>
  <Listy :data="data" :height="300" :children="renderItem" />
</template>

<script setup lang="tsx">
import { Listy } from '@hmfw/ant-design'

const data = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `列表项 ${i + 1}`,
  content: `这是第 ${i + 1} 项的内容描述`,
}))

const renderItem = (item: any) => (
  <div style={{ padding: '8px 0' }}>
    <div style={{ fontWeight: 500 }}>{item.title}</div>
    <div style={{ color: '#666', fontSize: '14px' }}>{item.content}</div>
  </div>
)
</script>
