<template>
  <div style="display: flex; gap: 16px; align-items: center">
    <Dropdown :menu="menu" :arrow="true">
      <Button>With Arrow</Button>
    </Dropdown>
    <Dropdown :menu="menu" :arrow="{ pointAtCenter: true }">
      <Button>Arrow Point at Center</Button>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { Dropdown, Button } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: 'Menu Item 1' },
    { key: '2', label: 'Menu Item 2' },
    { key: '3', label: 'Menu Item 3' },
  ],
}
</script>
