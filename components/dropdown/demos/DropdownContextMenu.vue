<template>
  <Space>
    <Dropdown :menu="menu" :trigger="['hover', 'click']">
      <Button>悬停 + 点击</Button>
    </Dropdown>
    <Dropdown :menu="menu" trigger="contextMenu">
      <Button>右键触发</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space, message } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
  onClick: ({ key }: { key: string }) => {
    message.info(`点击了: ${key}`)
  },
}
</script>
