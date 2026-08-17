<template>
  <Listy
    :data="data"
    :height="300"
    :virtual="true"
    :children="renderItem"
    :class-names="{
      root: 'custom-listy',
      item: 'custom-item',
    }"
    :styles="{
      root: { border: '2px solid #1890ff', borderRadius: '8px' },
      item: { background: '#f0f5ff' },
    }"
  />
</template>

<script setup lang="tsx">
import { Listy } from '@hmfw/ant-design'

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  title: `自定义样式项 ${i + 1}`,
}))

const renderItem = (item: any) => <div style={{ padding: '8px 0', fontWeight: 500 }}>{item.title}</div>
</script>

<style scoped>
.custom-listy {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.custom-item {
  margin: 4px 8px;
  border-radius: 4px;
  border-left: 3px solid #1890ff;
}

.custom-item:hover {
  background: #e6f7ff !important;
}
</style>
