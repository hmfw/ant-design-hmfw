<template>
  <Dropdown :items="items" @click="onMenuClick">
    <Button>
      下拉菜单
      <Icon type="down" />
    </Button>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Button, Icon } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
  { key: '3', label: '菜单项三' },
]

const onMenuClick = ({ key }: { key: string }) => {
  console.log('点击了:', key)
}
</script>
