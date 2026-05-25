<template>
  <Space wrap>
    <Dropdown :items="items" placement="bottomLeft">
      <Button>左下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="bottomCenter">
      <Button>居中下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="bottomRight">
      <Button>右下</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topLeft">
      <Button>左上</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topCenter">
      <Button>居中上</Button>
    </Dropdown>
    <Dropdown :items="items" placement="topRight">
      <Button>右上</Button>
    </Dropdown>
  </Space>
</template>

<script setup lang="ts">
import { Dropdown, Button, Space } from 'ant-design-hmfw'

const items = [
  { key: '1', label: '菜单项一' },
  { key: '2', label: '菜单项二' },
]
</script>
