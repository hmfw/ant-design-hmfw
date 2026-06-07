<template>
  <div style="display: flex; gap: 8px; flex-wrap: wrap">
    <Button type="primary"> Primary Button </Button>
    <Button>Default Button</Button>
    <Button type="dashed"> Dashed Button </Button>
    <Button type="text"> Text Button </Button>
    <Button type="link"> Link Button </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-hmfw'
</script>
