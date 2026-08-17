<template>
  <div>
    <div style="margin-bottom: 16px"><strong>虚拟滚动模式</strong> - 10000 条数据，流畅滚动</div>
    <Listy :data="data" :height="400" :virtual="true" :children="renderItem" :item-key="getKey" />
  </div>
</template>

<script setup lang="tsx">
import { Listy } from '@hmfw/ant-design'

const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  title: `列表项 ${i + 1}`,
  content: `这是第 ${i + 1} 项的内容描述`,
}))

const getKey = (item: any) => item.id

const renderItem = (item: any, index: number) => (
  <div style={{ padding: '4px 0' }}>
    <div style={{ fontWeight: 500, color: '#1890ff' }}>
      #{index + 1} {item.title}
    </div>
    <div style={{ color: '#999', fontSize: '13px' }}>{item.content}</div>
  </div>
)
</script>
