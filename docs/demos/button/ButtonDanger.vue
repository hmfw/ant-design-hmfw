<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary" danger> Primary Danger </Button>
    <Button danger> Default Danger </Button>
    <Button type="text" danger> Text Danger </Button>
    <Button type="link" danger> Link Danger </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
</script>
