<template>
  <Dropdown :menu="menu">
    <Button>
      下拉菜单
      <DownOutlined class="hmfw-icon" />
    </Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { DownOutlined } from '@hmfw/icons'
import { Dropdown, Button } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
    { key: '3', label: '菜单项三' },
  ],
  onClick: ({ key }: { key: string }) => {
    console.log('点击了:', key)
  },
}
</script>
