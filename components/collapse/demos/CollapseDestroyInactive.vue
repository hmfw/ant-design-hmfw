<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div>
      <div style="margin-bottom: 8px; color: #666">destroyInactivePanel（销毁未激活面板）：</div>
      <Collapse destroy-inactive-panel :items="destroyItems" />
    </div>
    <div>
      <div style="margin-bottom: 8px; color: #666">destroyInactivePanel + forceRender（强制保留指定面板）：</div>
      <Collapse destroy-inactive-panel :items="forceRenderItems" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Collapse } from '@hmfw/ant-design'

const destroyItems = [
  {
    key: '1',
    label: '面板 1（展开查看内容）',
    children: '该面板收起时 DOM 将被销毁。如果面板内部有复杂组件或大量数据，销毁可以释放内存。',
  },
  { key: '2', label: '面板 2', children: '收起后面板 2 的内容也会从 DOM 中移除。' },
]

const forceRenderItems = [
  { key: '1', label: '普通面板（会被销毁）', children: '收起时 DOM 被移除。' },
  {
    key: '2',
    label: 'forceRender 面板（始终保留）',
    children: '即使收起，DOM 结构也始终保留（通过 height:0 + opacity:0 隐藏），适合需要保持内部状态的场景。',
    forceRender: true,
  },
]
</script>
