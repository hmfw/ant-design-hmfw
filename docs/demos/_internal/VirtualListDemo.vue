<template>
  <div class="virtual-list-demo">
    <h4>虚拟滚动演示（10,000 条数据）</h4>
    <p style="margin-bottom: 16px; color: #666;">
      只渲染可见区域的项，滚动流畅无卡顿
    </p>

    <div style="display: flex; gap: 16px; margin-bottom: 16px;">
      <Button @click="scrollToTop">滚动到顶部</Button>
      <Button @click="scrollToMiddle">滚动到中间</Button>
      <Button @click="scrollToBottom">滚动到底部</Button>
      <Button @click="scrollToIndex(5000)">滚动到第 5000 项</Button>
    </div>

    <VirtualList
      ref="listRef"
      :data="data"
      :height="400"
      :item-height="48"
      :buffer="5"
      :render-item="renderItem"
      :item-key="(item) => item.id"
    />

    <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 4px;">
      <strong>性能对比：</strong>
      <ul style="margin: 8px 0; padding-left: 20px;">
        <li>常规列表：渲染 10,000 个 DOM 节点，卡顿严重</li>
        <li>虚拟滚动：仅渲染约 15-20 个可见节点，流畅丝滑</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { VirtualList } from '../../../components/_internal/virtual-list'
import { Button } from '../../../components/button'

const listRef = ref()

// 生成 10,000 条数据
const data = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  title: `项目 ${i + 1}`,
  description: `这是第 ${i + 1} 项的描述内容`,
}))

const renderItem = (item: any, index: number) =>
  h(
    'div',
    {
      style: {
        padding: '12px 16px',
        borderBottom: '1px solid #f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      },
    },
    [
      h('div', { style: { fontWeight: 'bold', color: '#262626' } }, item.title),
      h('div', { style: { fontSize: '12px', color: '#8c8c8c' } }, item.description),
    ]
  )

const scrollToTop = () => {
  listRef.value?.scrollToTop()
}

const scrollToMiddle = () => {
  listRef.value?.scrollToIndex(5000, 'center')
}

const scrollToBottom = () => {
  listRef.value?.scrollToBottom()
}

const scrollToIndex = (index: number) => {
  listRef.value?.scrollToIndex(index)
}
</script>

<style scoped>
.virtual-list-demo h4 {
  margin-bottom: 8px;
  color: #262626;
}
</style>
