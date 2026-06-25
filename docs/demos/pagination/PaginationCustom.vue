<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>对齐方式</h4>
      <Pagination :total="50" align="start" style="margin-bottom: 16px" />
      <Pagination :total="50" align="center" style="margin-bottom: 16px" />
      <Pagination :total="50" align="end" />
    </div>
    <div>
      <h4>自定义渲染</h4>
      <Pagination :total="50" :item-render="itemRender" />
    </div>
  </Space>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Pagination, Space } from '@hmfw/ant-design'
import type { VNode } from 'vue'

const itemRender = (page: number, type: string, originalElement: VNode) => {
  if (type === 'prev') {
    return h('a', '上一页')
  }
  if (type === 'next') {
    return h('a', '下一页')
  }
  return originalElement
}
</script>
