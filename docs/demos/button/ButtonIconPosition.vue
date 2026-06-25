<template>
  <div style="display: flex; flex-direction: column; gap: 16px">
    <div style="display: flex; gap: 8px">
      <Button type="primary" :icon="SearchOutlined"> Search </Button>
      <Button type="primary" :icon="SearchOutlined" icon-position="end"> Search </Button>
    </div>
    <div style="display: flex; gap: 8px">
      <Button type="default" :icon="DownloadOutlined"> Download </Button>
      <Button type="default" :icon="DownloadOutlined" icon-position="end"> Download </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@hmfw/ant-design'
import { SearchOutlined, DownloadOutlined } from '@hmfw/ant-design'
</script>
