<template>
  <Dropdown :items="items" trigger="click" @click="onMenuClick">
    <Button>操作菜单</Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const items = [
  { key: 'edit', label: '编辑' },
  { key: 'copy', label: '复制' },
  { type: 'divider' },
  { key: 'delete', label: '删除', danger: true },
]

const onMenuClick = ({ key }: { key: string }) => {
  console.log('点击了:', key)
}
</script>
