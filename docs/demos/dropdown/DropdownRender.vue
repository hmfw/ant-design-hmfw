<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: flex-start">
    <!-- popupRender 自定义渲染 -->
    <Dropdown :menu="menu" trigger="click" :popup-render="customRender">
      <Button>popupRender</Button>
    </Dropdown>

    <!-- forceRender：下拉框始终挂载到 DOM（默认隐藏） -->
    <Dropdown :menu="menu" trigger="click" :force-render="true">
      <Button>forceRender</Button>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import type { VNode } from 'vue'
import { h } from 'vue'
import { Dropdown, Button } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}

const customRender = (node: VNode) => {
  return h('div', {}, [
    h(
      'div',
      {
        style:
          'padding: 8px 12px; color: #1677ff; font-weight: 600; font-size: 12px; border-bottom: 1px solid #f0f0f0;',
      },
      '自定义标题区域',
    ),
    node,
  ])
}
</script>
