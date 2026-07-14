<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px; color: #666">expandIconPosition="start"（默认）：</div>
      <Collapse :default-active-key="['1']" :items="items" />
    </div>
    <div>
      <div style="margin-bottom: 8px; color: #666">expandIconPosition="end"：</div>
      <Collapse expand-icon-position="end" :default-active-key="['2']" :items="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@hmfw/ant-design'

const items = [
  { key: '1', label: '图标在左侧', children: '默认图标位置在标题左侧。' },
  {
    key: '2',
    label: '图标在右侧',
    children: '设置 expandIconPosition="end" 将图标移到右侧。当有 extra 内容时，图标在右侧、extra 在左侧。',
  },
]
</script>
