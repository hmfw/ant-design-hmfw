<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap;">
    <Button type="primary" :icon="SearchOutlined">Search</Button>
    <Button type="primary" :icon="SearchOutlined" />
    <Button type="primary" :icon="CheckOutlined">Confirm</Button>
    <Button type="dashed" :icon="CloseOutlined">Cancel</Button>
  </div>
</template>

<script setup lang="ts">
import { Button, SearchOutlined, CheckOutlined, CloseOutlined } from 'ant-design-hmfw'
</script>
