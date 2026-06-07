<template>
  <Space direction="vertical" style="width: 100%">
    <div>
      <h4>自定义上一页/下一页文本</h4>
      <Pagination :total="50" :item-render="itemRenderText" />
    </div>
    <div>
      <h4>自定义页码样式</h4>
      <Pagination :total="100" :item-render="itemRenderCustom" />
    </div>
    <div>
      <h4>链接模式</h4>
      <Pagination :total="50" :item-render="itemRenderLink" @change="handleChange" />
      <p style="margin-top: 8px; color: #666">点击页码查看链接效果（当前页：{{ current }}）</p>
    </div>
  </Space>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { Pagination, Space } from 'ant-design-hmfw'
import type { VNode } from 'vue'

const current = ref(1)

// 自定义上一页/下一页文本
const itemRenderText = (page: number, type: string, originalElement: VNode) => {
  if (type === 'prev') {
    return h('a', '上一页')
  }
  if (type === 'next') {
    return h('a', '下一页')
  }
  return originalElement
}

// 自定义页码样式
const itemRenderCustom = (page: number, type: string, originalElement: VNode) => {
  if (type === 'page') {
    return h(
      'a',
      {
        style: {
          display: 'inline-block',
          padding: '0 8px',
          border: '1px solid #d9d9d9',
          borderRadius: '4px',
          fontWeight: 'bold',
        },
      },
      `[${page}]`,
    )
  }
  return originalElement
}

// 自定义链接
const itemRenderLink = (page: number, type: string, originalElement: VNode) => {
  if (type === 'page') {
    return h(
      'a',
      {
        href: `#page-${page}`,
      },
      page,
    )
  }
  if (type === 'prev') {
    return h('a', { href: '#prev' }, '← 上一页')
  }
  if (type === 'next') {
    return h('a', { href: '#next' }, '下一页 →')
  }
  return originalElement
}

const handleChange = (page: number) => {
  current.value = page
}
</script>
