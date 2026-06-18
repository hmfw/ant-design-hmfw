<template>
  <div class="list-responsive-grid-demo">
    <h4>响应式网格布局</h4>
    <p style="margin-bottom: 16px; color: #666">
      调整浏览器窗口大小查看响应式效果：
      <br />
      • 超小屏 (xs &lt; 576px): 1 列
      <br />
      • 小屏 (sm ≥ 576px): 2 列
      <br />
      • 中屏 (md ≥ 768px): 3 列
      <br />
      • 大屏 (lg ≥ 992px): 4 列
      <br />
      • 超大屏 (xl ≥ 1200px): 6 列
    </p>

    <List :data-source="data" :render-item="renderItem" :grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 6 }" />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { List, Card } from 'ant-design-hmfw'

const data = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `项目 ${i + 1}`,
  content: `这是第 ${i + 1} 个项目的内容`,
}))

const renderItem = (item: { id: number; title: string; content: string }) =>
  h(List.Item, null, () => h(Card, { title: item.title, hoverable: true }, () => item.content))
</script>

<style scoped>
.list-responsive-grid-demo h4 {
  margin-bottom: 8px;
  color: #262626;
}
</style>
