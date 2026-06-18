<template>
  <div style="display: flex; gap: 8px; align-items: center">
    <Button type="primary" shape="circle" :icon="SearchOutlined" />
    <Button type="primary" shape="circle"> A </Button>
    <Button type="primary" shape="round"> Round </Button>
    <Button type="primary"> Default </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
import { SearchOutlined } from 'ant-design-hmfw'
</script>
