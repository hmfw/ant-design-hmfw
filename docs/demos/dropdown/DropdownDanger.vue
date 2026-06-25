<template>
  <Dropdown :menu="menu" trigger="click">
    <Button>操作菜单</Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: 'edit', label: '编辑' },
    { key: 'copy', label: '复制' },
    { type: 'divider' },
    { key: 'delete', label: '删除', danger: true },
  ],
  onClick: ({ key }: { key: string }) => {
    console.log('点击了:', key)
  },
}
</script>
