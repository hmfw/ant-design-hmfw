<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap">
    <Dropdown.Button :menu="menu"> Dropdown </Dropdown.Button>
    <Dropdown.Button :menu="menu" type="primary"> Primary </Dropdown.Button>
    <Dropdown.Button :menu="menu" danger> Danger </Dropdown.Button>
    <Dropdown.Button :menu="menu" disabled> Disabled </Dropdown.Button>
  </div>
</template>

<script setup lang="ts">
import { Dropdown } from 'ant-design-hmfw'

const menu = {
  items: [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
    { key: '3', label: 'Action 3' },
  ],
}
</script>
