<template>
  <Space wrap>
    <Dropdown :menu="menu" placement="bottomLeft">
      <Button>左下</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="bottom">
      <Button>居中下</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="bottomRight">
      <Button>右下</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="topLeft">
      <Button>左上</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="top">
      <Button>居中上</Button>
    </Dropdown>
    <Dropdown :menu="menu" placement="topRight">
      <Button>右上</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from '@hmfw/ant-design'

const menu = {
  items: [
    { key: '1', label: '菜单项一' },
    { key: '2', label: '菜单项二' },
  ],
}
</script>
