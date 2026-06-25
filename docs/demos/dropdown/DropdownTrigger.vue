<template>
  <Space>
    <Dropdown :menu="menu" trigger="hover">
      <Button>悬停触发</Button>
    </Dropdown>
    <Dropdown :menu="menu" trigger="click">
      <Button>点击触发</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
}
</script>
